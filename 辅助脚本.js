// ==UserScript==
// @name 解析辅助脚本
// @description 脚本功能目前有：给“解析脚本”添加自定义接口（需要配合jxb解析脚本 822以上版本 才有效果）。
// @author 江小白
// @version 4.9
// @include /^https?:\/\/(?:(?:v(?:-wb)?|m)\.youku\.com\/.+?\/id_|www\.wasu\.cn\/[pP]lay\/show\/id\/\d|www\.miguvideo\.com\/.+?\/detail\.html\?cid=\d|[^\/]+?\.tudou\.com\/(?:v\/|.+?\/id_)|v\.qq\.com\/(?:x\/(?:cover|page)|.+?\/p\/topic)\/|(?:3g|m)\.v\.qq\.com|w(?:ww)?\.mgtv\.com\/[a-z]\/|www\.mgtv\.com\/act\/|m\.mgtv\.com\/b\/|www\.iqiyi\.com\/(?:[vw]_|kszt\/)|m\.iqiyi\.com\/(?:v_|$)|tw\.iqiyi\.com\/v_|tv\.sohu\.com\/v\/|m\.tv\.sohu\.com\/(?:u\/|v|phone_play_film\?aid=)|film\.sohu\.com\/album\/|www\.le\.com\/ptv\/vplay\/|m\.le\.com\/vplay_|[vm]\.pptv\.com\/show\/|vip\.1905\.com\/play\/|www\.ixigua\.com\/|(?:player|live)\.bilibili\.com\/|www\.bilibili\.com\/(?:(?:cheese|bangumi)\/play|blackboard|.*?video)\/|m\.bilibili\.com\/bangumi\/play\/|www\.acfun\.cn\/(?:.+?\/ac|bangumi\/)|m\.acfun\.cn\/v\/|.+?(?:\.m(?:3u8|p4)\?\w+?=|(?:search|jx|url|id|v|&[^\/]+?|_\w+?|\.html\?\w+?)[&#=\?]https?(?::\/\/|%3A%2F%2F)[^\/]+?\.(?:youku|miguvideo|wasu|tudou|qq|mgtv|iqiyi|sohu|le|pptv|1905|bilibili|acfun|ixigua)\.))/
// @grant none
// @noframes
// @run-at document-body
// ==/UserScript==


(function(){'use strict';if(self!=top){return false;}else{if(!document.querySelector("\u6c5f\u5c0f\u767d\u81ea\u5b9a\u4e49\u63a5\u53e3")){document.head.appendChild(document.createElement("\u6c5f\u5c0f\u767d\u81ea\u5b9a\u4e49\u63a5\u53e3"));
let 生效网址关键字=/(?:youku|miguvideo|wasu|tudou|qq|mgtv|iqiyi|sohu|le|pptv|1905|bilibili|acfun|ixigua)/i;if(location.href.match(生效网址关键字)&&!(location.href.match(/^https?:\/\/(?:www|m)\.iqiyi\.com\/(?:a_|kszt\/)/)&&document.title.match(new RegExp("在线观看")))&&!(location.href.match(/^https?:\/\/(?:www|m)\.iqiyi\.com\/v_/)&&document.title.match(new RegExp("名师课堂")))){
/* ** 自定义修改 Josn 全局播放器地址 （必须是 https 类型）** */
let 电脑json全局播放器="https://api.ldjx.cc/wp-api/ifr.php?isDp=0&vid=";
let 手机json全局播放器="https://api.ldjx.cc/wp-api/ifr.php?isDp=0&vid=";
/* ********填入想屏蔽的接口名称，屏蔽多个用 | 隔开********** */
let 全局自定义屏蔽接口=/(?:百域阁|无名)/i;
/* ****************************************************** */
localStorage.setItem('电脑Json全局播放器',电脑json全局播放器);localStorage.setItem('手机Json全局播放器',手机json全局播放器);if(location.host.match(生效网址关键字)){function 自动点击(zdya,zdyb){try{if(location.host.match(zdya)){sessionStorage.setItem('自定义点击接口',JSON.stringify(zdyb.split("|")));}}catch(e){}};
/* *******填入想自动点击的接口名称，多个接口用 | 隔开******* */
//写法例子：           自动点击('qq','腾讯|高天|扶风|牛逼|虾米|布米米');
自动点击('qq','大牛|白嫖|霸气|牛逼|扶风|boy|布米米');
自动点击('mgtv','白嫖|扶风|毒舌|左岸|江湖|布米米');
自动点击('iqiyi','boy|布米米');
自动点击('youku','白嫖|霸气|boy|牛逼|布米米');
自动点击('bilibili','白嫖|霸气|扶风|毒舌|爱看|左岸|布米米');
自动点击('le','快云|boy|布米米');
自动点击('pptv','白嫖|霸气|boy|碧滴|牛逼|布米米');
自动点击('sohu','白嫖|扶风|霸气|毒舌|布米米');
自动点击('xigua','白嫖|扶风|霸气|毒舌|boy|布米米');
自动点击('migu','白嫖|扶风|毒舌|boy|布米米');




/* ****************其他网站自定义自动点击******************* */
自动点击('^(?!.*?(?:qq|youku|iqiyi|mgtv|bilibili|le|pptv|sohu|xigua|migu))','茄子|毒舌|左岸|boy|爱看|碧滴|牛逼|布米米');
/* ****************************************** */let zdyjkb=[
/* **************** 自定义添加接口 ************************* */
//       {name:"自动点击",vip:"自动点击",jxb:"原",jj:"1",diy:"burlywood",j:"电脑",sj:"0",title:"根据 自定义设置 的 解析接口数组，进行 自动点击接口"},

{name:"Json并发",vip:"Json并发",jxb:"原",zd:"1",qp:"1",jj:"1",diy:"cyan",title:"随机-获取 Json接口 数据"},
{name:"Json轮询",vip:"Json轮询",jxb:"原",zd:"1",qp:"1",jj:"1",diy:"cyan",title:"依序-获取 Json接口 数据"},
{name:"自动点击",vip:"自动点击",jxb:"原",zd:"1",qp:"1",jj:"1",diy:"cyan",sj:"0"},
{name:"扶风",url:"https://vip.byteamone.cn/api/?type=ys&key=ZI3Alb4fZJeCk5zDUs&url=",jxb:"原",ds:"5",json:"1",zd:"1",qp:"1",jj:"1",diy:"#33CC99",lx:"1"},
{name:"天成",url:"http://json.tcspvip.com/api/?key=gWpEut4Tvby8Aaui9j&url=",jxb:"原",ds:"5",json:"1",zd:"1",qp:"1",jj:"1",diy:"#33CC99",lx:"1"},
{name:"白嫖",url:"https://json.csjcdn.cn/byte/?key=CAzffab5SGcymwxdfQ&url=",jxb:"原",ds:"5",json:"1",zd:"1",qp:"1",jj:"1",diy:"#33CC99",lx:"1"},
{name:"大牛",url:"https://yun.nbjx.vip:4399/json/?wap=1&uid=11&tokey=jlmopBGIQRSTZ16789&wap=0&url=",jxb:"原",ds:"5",json:"1",zd:"1",qp:"1",jj:"1",diy:"#33CC99",lx:"1"},
{name:"牛逼",url:"http://jx.ncxmid.cn/sb/?url=",jxb:"原",ds:"5",json:"1",zd:"1",qp:"1",jj:"1",diy:"#33CC99",lx:"qq"},
{name:"靠谱",url:"https://json.china-sos.com/home/api?type=ys&uid=479830&key=clprsuwxyEHJPVW138&url=",jxb:"原",ds:"5",json:"1",zd:"1",qp:"1",jj:"1",diy:"#33CC99",lx:"qq"},
{name:"毒舌",url:"https://jf.96ym.cn/api/?key=Y58mjXUa0TDNg7Q36C&url=",jxb:"原",ds:"5",json:"1",zd:"1",qp:"1",jj:"1",diy:"#33CC99",lx:"1"},
{name:"视酷",url:"https://humaosp.com/json.php?url=",jxb:"原",ds:"5",json:"1",zd:"1",qp:"1",jj:"1",diy:"#33CC99",lx:"1"},
{name:"极速",url:"https://js.xl6.top/home/api?type=ys&uid=19633&key=fgrszALOPSUWXYZ147&url=",jxb:"原",ds:"5",json:"1",zd:"1",qp:"1",jj:"1",diy:"#33CC99",lx:"1"},
{name:"思古",url:"http://www.sigu.tv/api/?key=FQYyxyEB8NYWy4vJRR&url=",jxb:"原",ds:"5",json:"1",zd:"1",qp:"1",jj:"1",diy:"#33CC99",lx:"1"},
{name:"心栾",url:"http://yaluan.520say.cn/home/api?type=ys&uid=56724&key=aefqtuyINOTVZ03589&url=",jxb:"原",ds:"5",json:"1",zd:"1",qp:"1",jj:"1",diy:"#33CC99",lx:"1"},
{name:"思古",url:"http://www.sigu.tv/api/?key=FQYyxyEB8NYWy4vJRR&url=",jxb:"原",ds:"5",json:"1",zd:"1",qp:"1",jj:"1",diy:"#33CC99",lx:"1"},
{name:"苍蓝",url:"https://cs.024zs.com:4433/api/?key=YtJrcGluoADs5rUmnL&url=",jxb:"原",ds:"5",json:"1",zd:"1",qp:"1",jj:"1",diy:"#33CC99",lx:"1"},
{name:"云海",url:"http://47.100.138.210:91/home/api?type=ys&uid=4476440&key=eghkvwxyFHORVX3478&url=",jxb:"原",ds:"5",json:"1",zd:"1",qp:"1",jj:"1",diy:"#33CC99",lx:"1"},
{name:"泽喃",url:"https://svip.xizny.com/home/api?type=ys&uid=481240&key=abehmotvwxCDILVYZ1&url=",jxb:"原",ds:"5",json:"1",zd:"1",qp:"1",jj:"1",diy:"#33CC99",lx:"1"},
{name:"左岸",url:"http://42.157.128.85:880/analysis/json/?uid=2245&my=ejnpuxzKLOPSWZ2568&url=",jxb:"原",ds:"5",json:"1",zd:"1",qp:"1",jj:"1",diy:"#33CC99",lx:"1"},
{name:"木白",url:"https://vip.23at.cn/home/api?type=ys&uid=2156331&key=bdmswzACFGIKLQY679&url=",jjj:"qq",jxb:"原",ds:"5",json:"1",zd:"1",qp:"1",jj:"1",diy:"#33CC99",lx:"1"},
{name:"霸气",url:"https://vip.8700.top/api/?key=W6LIUo3ywY9T0z85L8&url=",jxb:"原",ds:"5",json:"1",zd:"1",qp:"1",jj:"1",diy:"#33CC99",lx:"1"},
{name:"呦叭",url:"https://api.m3u8.tv:5678/home/api?type=ys&uid=7631191&key=cdemqsxFGKLNRVXYZ9&url=",jxb:"原",ds:"5",json:"1",zd:"1",qp:"1",jj:"1",diy:"#33CC99",lx:"1"},
{name:"江北",url:"https://jb.vjiangbei.com/home/api?type=ys&uid=2219260&key=hlmnpqswHIKQRSX146&url=",jxb:"原",ds:"5",json:"1",zd:"1",qp:"1",jj:"1",diy:"#33CC99",lx:"1"},
{name:"视觉",url:"http://47.95.28.242/jx/renrenmi/analysis.php?v=",jxb:"原",json:"1",jj:"1",zd:"1",qp:"1",diy:"#33CC99",lx:"1"},
{name:"融兴",url:"https://svip.rongxingvr.top/api/?key=5rpZKy4ydAe7PZcThD&url=",jxb:"原",ds:"5",json:"1",zd:"1",qp:"1",jj:"1",diy:"#33CC99",lx:"1"},
{name:"295",url:"http://295jiexi.kmys.top/api/?key=PfDn3Xs0zo9leR0CLl&url=",jxb:"原",json:"1",jj:"1",zd:"1",qp:"1",diy:"#33CC99",lx:"1"},
{name:"晓城",url:"https://svip.cygc.xyz/api/?key=vpoL28C2NcUZxLByQ9&url=",jxb:"原",json:"1",jj:"1",zd:"1",qp:"1",diy:"#33CC99",lx:"1"},
{name:"江湖",url:"https://jx.300ys.xyz/json/jh.php/?url=",jxb:"原",ds:"5",json:"1",zd:"1",qp:"1",jj:"1",diy:"#33CC99",lx:"1"},
{name:"麒麟",url:"https://api.qilin.best/home/api?type=ys&uid=2343358&key=cekpsuvxJKNOV34789&url=",jxb:"原",ds:"5",json:"1",zd:"1",qp:"1",jj:"1",diy:"#33CC99",lx:"1"},
{name:"人人",url:"https://svip.renrenmi.cc:2222/api/?key=SZqn2js1LmwKPO39ww&url=",jxb:"原",ds:"5",json:"1",zd:"1",qp:"1",jj:"1",diy:"#33CC99",lx:"1"},
{name:"快云",url:"https://jhjx.kuanjv.com/?url=",jxb:"原",json:"1",jj:"1",zd:"1",qp:"1",diy:"#33CC99",lx:"1"},
{name:"看呀",url:"http://api.vip123kan.vip/?url=",jxb:"原",ds:"5",json:"1",zd:"1",qp:"1",jj:"1",diy:"#33CC99",lx:"1"},
{name:"盘古",url:"https://json.pangujiexi.com:12345/json.php?url=",jxb:"原",ds:"5",json:"1",zd:"1",qp:"1",jj:"1",diy:"#33CC99",lx:"1"},
{name:"boy",url:"http://120.77.94.20/jx?url=",jxb:"原",ds:"5",json:"小白",zd:"1",qp:"1",jj:"1",diy:"#33CC99"},
{name:"爱看",url:"https://jx.woaik.cn/?url=",jjj:"bilibili",jxb:"原",zd:"1",qp:"1",jj:"1",diy:"#33CC99"},
{name:"万能",url:"https://vip.legendwhb.cn/m3u8.php?url=",jjj:"bilibili",jxb:"原",zd:"1",qp:"1",jj:"1",diy:"#33CC99"},




/* ****************************************************** */
];localStorage.setItem('江小白自定义接口',JSON.stringify(zdyjkb));let zdyjkpbobj=setInterval(function(){try{if(document.querySelector("ul#httpsvipul>li:last-of-type")){const zdyjkpb=document.querySelectorAll('ul#httpsvipul>li');for(let zdyjkpbi=0;zdyjkpbi<zdyjkpb.length;zdyjkpbi++){const zdyjkpbmsa=zdyjkpb[zdyjkpbi].querySelectorAll('a4');for(let zdyjkpbia=0;zdyjkpbia<zdyjkpbmsa.length;zdyjkpbia++){if(zdyjkpbmsa[zdyjkpbia].innerText.match(全局自定义屏蔽接口)){zdyjkpb[zdyjkpbi].setAttribute('style','display:none!important');}};};clearInterval(zdyjkpbobj);}else{}}catch(e){clearInterval(zdyjkpbobj);}},1234);}}}else{return false;}}})();
