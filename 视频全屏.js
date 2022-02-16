// ==UserScript==
// @name 手机视频全屏脚本
// @description	功能说明:手机端视频全屏，手势快进快退（极致精简版）
// @version	1.0.1
// @author chengge
// @include	*
// @grant GM_setValue
// @grant GM_getValue
// @grant GM_addValueChangeListener
// @run-at document-end		
// ==/UserScript==


(()=>{
	'use strict';
	/*手势功能数据模块*/
	let gesture={
	},
	pathFn={
		'前进10s':'videoPlayer.currentTime+=10;gestureData.tipBox.innerHTML="+10s ";gestureData.tipBox.style.display="block";setTimeout(()=>{gestureData.tipBox.style.display="none";},200);',
		'后退10s':'videoPlayer.currentTime-=10;gestureData.tipBox.innerHTML="-10s ";gestureData.tipBox.style.display="block";setTimeout(()=>{gestureData.tipBox.style.display="none";},200);'
	},
	settings={
		'滑动距离':0.5,
		'全屏样式':true,
		'视频手势':true
	};
	//存储数据读取
	gesture=GM_getValue('gesture',gesture);
	pathFn=GM_getValue('pathFn',pathFn);
	settings=GM_getValue('settings',settings);
	//脚本常量
	const gestureData={},regTYPE=/[TIV]/,regURL=/^(https?:\/\/)?([\w\-]+\.)+\w{2,4}(\/\S*)?$/;
	const limit=(((window.screen.width>window.screen.height) ? window.screen.height : window.screen.width)/(6-5*settings['滑动距离']))**2;
	/*手势功能模块*/
	//手指滑动变量
	let startX=0,startY=0,calcX=0,calcY=0,pressTime=0,raiseTime=0,slideTime=0,path='';
	let gestureON=0,delayTime=0,fullScreenPath=['V◆◆','◆◆','I◆◆','T◆◆'];
	//手势执行
	function runGesture(pathStr=''){
		if(gesture[path]){
			if(top.location==location || regTYPE.test(path)){try{eval(pathFn[gesture[path]]);}catch(error){alert('“'+path+'” 手势执行脚本错误：\n'+error+' ！');}}
			else{GM_setValue('gestureIfr',path);}
			path=pathStr;
		}else if(gesture[path.slice(1)] && regTYPE.test(path)){
			if(top.location==location){try{eval(pathFn[gesture[path.slice(1)]]);}catch(error){alert('“'+path.slice(1)+'” 手势执行脚本错误：\n'+error+' ！');}}
			else{GM_setValue('gestureIfr',path.slice(1));}
			path=pathStr;
		}
	}
	//手指按下
	function touchStart(e){
		pressTime=new Date().getTime();
		slideTime=pressTime;
		if((pressTime-raiseTime)>250){path='';
			gestureData.touchEle=e.srcElement;
			if(videoPlayer && settings['视频手势']){
				startX=e.touches[0].clientX;
				startY=e.touches[0].clientY;
				let videoRect=videoPlayer.getBoundingClientRect();
				if(startX>videoRect.x && startX<(videoRect.x+videoRect.width) && startY>videoRect.y && startY<(videoRect.y+videoRect.height)){path='V';}
			}
			startX=e.touches[0].screenX;
			startY=e.touches[0].screenY;
			gestureData.startX=startX;
			gestureData.startY=startY;
		}else{gestureON=0;}
	}
	//手指滑动
	function touchMove(e){
		if(e.touches.length==1){
			gestureData.endX=e.touches[0].screenX;
			gestureData.endY=e.touches[0].screenY;
			calcX=(gestureData.endX-startX)**2;
			calcY=(gestureData.endY-startY)**2;
			let nowTime=new Date().getTime();
			if((calcX+calcY)>(limit/(path.length/2+1)) && path.slice(-1)!='○'){
				let direction=(calcX>calcY) ? ((gestureData.endX>startX) ? '→' : '←') : ((gestureData.endY>startY) ? '↓' : '↑');
				if(path.slice(-1)!=direction){path+=direction;}
				startX=gestureData.endX;startY=gestureData.endY;
				slideTime=nowTime;
			}
		}else{path='';}
	}
	//手指抬起
	function touchEnd(e){
		raiseTime=new Date().getTime();
		if((raiseTime-pressTime)<50 && (calcX+calcY)<(limit/4)){path+='◆';}
		delayTime=raiseTime+50;
		gestureON=1;
		setTimeout(videoEvent,0);
		calcX=0;calcY=0;
	}
	//手势事件注册
	window.addEventListener('touchstart',touchStart,true);
	window.addEventListener('touchmove',touchMove,true);
	window.addEventListener('touchend',touchEnd,true);
	let gestureTimer=setInterval(()=>{if(gestureON && new Date().getTime()>delayTime){gestureON=0;runGesture();}},10);
	document.addEventListener('visibilitychange',()=>{
		if(document.hidden){
			clearInterval(gestureTimer);
		}else{
			clearInterval(gestureTimer);
			gestureTimer=setInterval(()=>{if(gestureON && new Date().getTime()>delayTime){gestureON=0;runGesture();}},10);
		}
	});
	/*video功能模块*/
	//video标签变量
	let videoEle=document.getElementsByTagName('video'),_videoEle=[],videoPlayer=null;
	let oriHway='landscape-primary',isLock=0,unReg=1;
	//video判定
	function setVideo(){videoPlayer=this;videoOriLock();gestureData.tipBox.remove();videoPlayer.parentNode.appendChild(gestureData.tipBox);}
	function videoOriLock(){
		if(videoPlayer.videoWidth>videoPlayer.videoHeight){isLock=1;}
		else{isLock=0;screen.orientation.unlock();}
		if(top.location!=location){GM_setValue('isLock',isLock);}
	}
	//获取video全屏样式容器
	function findVideoBox(){
		let nodeNum=5;
		let videoBox=videoPlayer;
		let parentEle=videoPlayer.parentNode;
		let videoWidth=videoPlayer.clientWidth-parseFloat(getComputedStyle(videoPlayer).paddingLeft)-parseFloat(getComputedStyle(videoPlayer).paddingRight);
		let videoHeight=videoPlayer.clientHeight-parseFloat(getComputedStyle(videoPlayer).paddingTop)-parseFloat(getComputedStyle(videoPlayer).paddingBottom);
		let parentWidth=parentEle.clientWidth-parseFloat(getComputedStyle(parentEle).paddingLeft)-parseFloat(getComputedStyle(parentEle).paddingRight);
		let parentHeight=parentEle.clientHeight-parseFloat(getComputedStyle(parentEle).paddingTop)-parseFloat(getComputedStyle(parentEle).paddingBottom);
		let childWidth=videoPlayer.offsetWidth+parseFloat(getComputedStyle(videoPlayer).marginLeft)+parseFloat(getComputedStyle(videoPlayer).marginRight);
		let childHeight=videoPlayer.offsetHeight+parseFloat(getComputedStyle(videoPlayer).marginTop)+parseFloat(getComputedStyle(videoPlayer).marginBottom);
		while(true){
			if(parentWidth>=videoWidth && parentHeight>=videoHeight && childWidth==parentEle.offsetWidth && childHeight==parentEle.offsetHeight){
				let childNodes=parentEle.children;
				if(childNodes.length>nodeNum){videoBox=parentEle;nodeNum=childNodes.length;}
				for(let Ti of childNodes){
					if(Ti.children.length>nodeNum){videoBox=parentEle;nodeNum=Ti.children.length;}
				}
				childWidth=parentEle.offsetWidth+parseFloat(getComputedStyle(parentEle).marginLeft)+parseFloat(getComputedStyle(parentEle).marginRight);
				childHeight=parentEle.offsetHeight+parseFloat(getComputedStyle(parentEle).marginTop)+parseFloat(getComputedStyle(parentEle).marginBottom);
				parentEle=parentEle.parentNode;
				if(parentEle.nodeName=='BODY'){return videoBox;}
				parentWidth=parentEle.clientWidth-parseFloat(getComputedStyle(parentEle).paddingLeft)-parseFloat(getComputedStyle(parentEle).paddingRight);
				parentHeight=parentEle.clientHeight-parseFloat(getComputedStyle(parentEle).paddingTop)-parseFloat(getComputedStyle(parentEle).paddingBottom);
			}else{return videoBox;}
		}
	}
	//video标签事件绑定
	function videoEvent(){
		if(videoEle.length>_videoEle.length){
			if(!_videoEle.length){
				//重力感应事件
				regGYRO();
				//tip视频操作提示
				gestureData.tipBox=document.createElement('div');
				gestureData.tipBox.style.cssText='width:100px;height:50px;position:fixed;text-align:center;top:calc(50% - 25px);left:calc(50% - 50px);display:none;color:#1e87f0;font-size:24px;line-height:50px;background-color:#fff;border-radius:20px;font-family:"Microsoft YaHei";z-index:2147483647;';
				document.body.appendChild(gestureData.tipBox);
				//视频方向锁定
				if(top.location!=location){
					document.addEventListener('webkitfullscreenchange',()=>{
						if(document.webkitIsFullScreen){videoOriLock();}
					});
					document.addEventListener('mozfullscreenchange',()=>{
						if(document.mozFullScreen){videoOriLock();}
					});
				}
			}
			//播放video标签查找
			for(let Ti=_videoEle.length;Ti<videoEle.length;Ti++){
				if(!videoEle[Ti].paused){videoPlayer=videoEle[Ti];videoOriLock();}
				videoEle[Ti].addEventListener('playing',setVideo);
				_videoEle[Ti]=videoEle[Ti];
			}
		}else if(_videoEle.length>0 && videoEle.length==_videoEle.length){
			for(let Ti of _videoEle){
				if(!Ti.offsetWidth>0){
					for(let Ti=0;Ti<videoEle.length;Ti++){
						if(!videoEle[Ti].paused){videoPlayer=videoEle[Ti];videoOriLock();}
						videoEle[Ti].addEventListener('playing',setVideo);
						_videoEle[Ti]=videoEle[Ti];
					}
					break;
				}
			}
		}
	}
	//注册陀螺仪
	function regGYRO(){
		if(unReg){
			window.addEventListener('deviceorientation',(e)=>{
				if(isLock){
					let oriHgamma=e.gamma;
					let oriHbeta=(e.beta>0) ? e.beta : -e.beta;
					if((oriHbeta<65 || oriHbeta>115) && (oriHgamma<-25 || oriHgamma>25)){
						oriHway=((oriHbeta<65 && oriHgamma<-25) || (oriHbeta>115 && oriHgamma>25)) ? 'landscape-primary' : 'landscape-secondary';
					}
					screen.orientation.lock(oriHway);
				}
			});
			unReg=0;
		}
	}
	/*功能补充模块*/
	//iframe相关
	let iframeEle=document.getElementsByTagName('iframe');
	if(top.location!=location){
		//iframe视频全屏
		GM_addValueChangeListener('fullscreen',(name,old_value,new_value,remote)=>{
			if(remote && !document.hidden){
				videoEvent();
				if(videoPlayer){
					copyText(videoPlayer.src);
					let videoBox=(settings['全屏样式']) ? findVideoBox() : videoPlayer;
					if(videoPlayer.webkitRequestFullscreen){videoBox.webkitRequestFullscreen();}
					else if(videoPlayer.mozRequestFullScreen){videoBox.mozRequestFullScreen();}
				}
			}
		});
	}else{
		//iframe手势执行
		GM_addValueChangeListener('gestureIfr',(name,old_value,new_value,remote)=>{
			if(remote && !document.hidden && new_value){
				try{eval(pathFn[gesture[new_value]]);}
				catch(error){alert('“'+new_value+'” 手势执行脚本错误：\n'+error+' ！');}
				setTimeout(()=>{GM_setValue('gestureIfr','');},0);
			}
		});
		//iframe陀螺仪
		GM_addValueChangeListener('isLock',(name,old_value,new_value,remote)=>{
			if(remote && !document.hidden && new_value<2){
				isLock=new_value;
				if(!new_value){screen.orientation.unlock();}
				setTimeout(()=>{regGYRO();GM_setValue('isLock',2);},0);
			}
		});
	}
})();