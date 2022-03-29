// ==UserScript==
// @name 解析辅助脚本
// @description 脚本功能目前有：给“解析脚本”添加自定义接口（需要配合jxb解析脚本 822以上版本 才有效果）。
// @author 江小白
// @version 8.6
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
自动点击('qq','白嫖|大牛|扶风|大牛|布米米');
自动点击('mgtv','白嫖|扶风|毒舌|左岸|江湖|布米米');
自动点击('iqiyi','扶风|壁虎|布米米');
自动点击('youku','白嫖|扶风|牛逼|布米米');
自动点击('bilibili','白嫖|扶风|毒舌|爱看|左岸|布米米');
自动点击('le','白嫖|毒舌|布米米');
自动点击('pptv','白嫖|扶风|久久|牛逼|布米米');
自动点击('sohu','白嫖|扶风|毒舌|布米米');
自动点击('xigua','融兴|扶风|毒舌|布米米');
自动点击('migu','咪咕|人人|扶风|毒舌|布米米');




/* ****************其他网站自定义自动点击******************* */
自动点击('^(?!.*?(?:qq|youku|iqiyi|mgtv|bilibili|le|pptv|sohu|xigua|migu))','茄子|毒舌|左岸|boy|爱看|碧滴|牛逼|布米米');
/* ****************************************** */let zdyjkb=[
/* **************** 自定义添加接口 ************************* */
//       {name:"自动点击",vip:"自动点击",jxb:"原",jj:"1",diy:"burlywood",j:"电脑",sj:"0",title:"根据 自定义设置 的 解析接口数组，进行 自动点击接口"},
{name:"Json并发",vip:"Json并发",jxb:"原",zd:"1",qp:"1",jj:"1",diy:"cyan",title:"随机-获取 Json接口 数据"},
{name:"Json轮询",vip:"Json轮询",jxb:"原",zd:"1",qp:"1",jj:"1",diy:"cyan",title:"依序-获取 Json接口 数据"},
{name:"自动点击",vip:"自动点击",jxb:"原",zd:"1",qp:"1",jj:"1",diy:"cyan",sj:"0"},
{name:"扶风",url:"http://htp.behds.cn/fufengvip.php?url=",jxb:"壁虎",ds:"5",json:"1",zd:"1",qp:"1",jj:"1",diy:"#33CC99",lx:"1"},
{name:"白嫖",url:"https://json.csjcdn.cn/byte/?key=CAzffab5SGcymwxdfQ&url=",jxb:"壁虎",ds:"5",json:"1",zd:"1",qp:"1",jj:"1",diy:"#33CC99",lx:"1"},
{name:"大牛",url:"https://yun.nbjx.vip:4399/json/?wap=1&uid=11&tokey=jlmopBGIQRSTZ16789&wap=0&url=",jxb:"壁虎",ds:"5",json:"1",zd:"1",qp:"1",jj:"1",diy:"#33CC99",lx:"1"},
{name:"牛逼",url:"http://jx.ncxmid.cn/sb/?url=",jxb:"壁虎",ds:"5",json:"1",zd:"1",qp:"1",jj:"1",diy:"#33CC99",lx:"qq"},
{name:"茄子",url:"https://svip.iepig.com:4443/api/?key=V6Ohk70bwamddAzgeV&url=",jxb:"壁虎",ds:"5",json:"1",zd:"1",qp:"1",jj:"1",diy:"#33CC99",lx:"qq"},
{name:"一梦",url:"http://uiul.xyz/home/api?type=ys&uid=1218621&key=begmrtwzBHJLNQWY25&url=",jxb:"壁虎",ds:"5",json:"1",zd:"1",qp:"1",jj:"1",diy:"#33CC99",lx:"qq"},
{name:"毒舌",url:"https://jf.96ym.cn/api/?key=aog2tuKM0ebr773n3v&url=",jxb:"壁虎",ds:"5",json:"1",zd:"1",qp:"1",jj:"1",diy:"#33CC99",lx:"1"},
{name:"超级",url:"http://23.224.174.74:5583/jsonindex.php?url=",jxb:"壁虎",ds:"5",json:"1",zd:"1",qp:"1",jj:"1",diy:"#33CC99",lx:"1"},
{name:"视酷",url:"https://humaosp.com/json.php?url=",jxb:"壁虎",ds:"5",json:"1",zd:"1",qp:"1",jj:"1",diy:"#33CC99",lx:"1"},
{name:"极速",url:"https://json.xl6.top/json.php/?url=",jxb:"壁虎",ds:"5",json:"1",zd:"1",qp:"1",jj:"1",diy:"#33CC99",lx:"1"},
{name:"思古",url:"https://www.sigu.tv/api/?type=ys&key=xKbE2Inr0DiV8ZFeF1&url=",jxb:"壁虎",ds:"5",json:"1",zd:"1",qp:"1",jj:"1",diy:"#33CC99",lx:"1"},
{name:"蓝猫",url:"http://json.muouapp.cn/?url=",jxb:"壁虎",ds:"5",json:"1",zd:"1",qp:"1",jj:"1",diy:"#33CC99",lx:"1"},
{name:"超快",url:"http://211.99.98.201:9797/mp4/5.1?url=",jjjj:"bilibili|mgtv",jxb:"原",ds:"5",jxb:"壁虎",zd:"1",qp:"1",jj:"1",diy:"#33CC99",lx:"1"},
{name:"云海",url:"http://47.100.138.210:91/home/api?type=ys&uid=7593435&key=ehortuyAHMNQTWX457&url=",jxb:"壁虎",ds:"5",json:"1",zd:"1",qp:"1",jj:"1",diy:"#33CC99",lx:"1"},
{name:"左岸",url:"http://42.157.128.85:880/analysis/json/?uid=369&my=acjprsAEGHLQSUXZ15&url=",jxb:"壁虎",ds:"5",json:"1",zd:"1",qp:"1",jj:"1",diy:"#33CC99",lx:"1"},
{name:"呦叭",url:"https://api.m3u8.tv:5678/home/api?type=ys&uid=7631191&key=cdemqsxFGKLNRVXYZ9&url=",jxb:"壁虎",ds:"5",json:"1",zd:"1",qp:"1",jj:"1",diy:"#33CC99",lx:"1"},
{name:"初恋",url:"https://json.xuanqi.pro/home/api?type=ys&uid=561377&key=copxyCDEFGINVZ0168&url=",jxb:"壁虎",ds:"5",json:"1",zd:"1",qp:"1",jj:"1",diy:"#33CC99",lx:"1"},
{name:"视觉",url:"http://47.95.28.242/jx/renrenmi/analysis.php?v=",jxb:"壁虎",json:"1",jj:"1",zd:"1",qp:"1",diy:"#33CC99",lx:"1"},
{name:"融兴",url:"https://vip.rongxingvr.top/api/?key=CwQXkIXGfaUNGVomez&url=",jxb:"壁虎",ds:"5",json:"1",zd:"1",qp:"1",jj:"1",diy:"#33CC99",lx:"1"},
{name:"295",url:"http://295jiexi.kmys.top/api/?key=PfDn3Xs0zo9leR0CLl&url=",jxb:"壁虎",json:"1",jj:"1",zd:"1",qp:"1",diy:"#33CC99",lx:"1"},
{name:"江湖",url:"https://jx.300ys.xyz/json/jh.php/?url=",jxb:"壁虎",ds:"5",json:"1",zd:"1",qp:"1",jj:"1",diy:"#33CC99",lx:"1"},
{name:"星辰",url:"https://svip.spchat.top/api/?key=0XBkWjZGZ4KDrlZkHS&url=",jxb:"壁虎",ds:"5",json:"1",zd:"1",qp:"1",jj:"1",diy:"#33CC99",lx:"1"},
{name:"都护",url:"https://jhpc.manduhu.com/j1217.php?url=",jxb:"壁虎",ds:"5",json:"1",zd:"1",qp:"1",jj:"1",diy:"#33CC99",lx:"1"},
{name:"兄弟",url:"http://ffjx.zjapp.cc/api/?key=EapHniV1BvNHl8jXbq&url=",jxb:"壁虎",ds:"5",json:"1",zd:"1",qp:"1",jj:"1",diy:"#33CC99",lx:"1"},
{name:"人人",url:"https://svip.renrenmi.cc:2222/api/?key=WSX9FHgK2Fwg2rZy5I&url=",jxb:"壁虎",ds:"5",json:"1",zd:"1",qp:"1",jj:"1",diy:"#33CC99",lx:"1"},
{name:"快荣",url:"http://rxjx.kuanjv.com/?url=",jxb:"壁虎",json:"1",jj:"1",zd:"1",qp:"1",diy:"#33CC99",lx:"1"},
{name:"快左",url:"http://za.kuanjv.com/?url=",jxb:"壁虎",json:"1",jj:"1",zd:"1",qp:"1",diy:"#33CC99",lx:"1"},
{name:"快江",url:"https://jhjx.kuanjv.com/newky/?url=",jxb:"壁虎",json:"1",jj:"1",zd:"1",qp:"1",diy:"#33CC99",lx:"1"},
{name:"看呀",url:"http://api.vip123kan.vip/?url=",jxb:"壁虎",ds:"5",json:"1",zd:"1",qp:"1",jj:"1",diy:"#33CC99",lx:"1"},
{name:"盘古",url:"https://json.pangujiexi.com:12345/json.php?url=",jxb:"壁虎",ds:"5",json:"1",zd:"1",qp:"1",jj:"1",diy:"#33CC99",lx:"1"},
{name:"开心",url:"http://49.232.19.228/jx/m3u8tv/json.php?url=",jxb:"壁虎",ds:"5",json:"小白",zd:"1",qp:"1",jj:"1",diy:"#33CC99"},
{name:"淘剧",url:"http://106.75.184.231:4433/cnmbhbh/?url=",jxb:"壁虎",ds:"5",json:"1",zd:"1",qp:"1",jj:"1",diy:"#33CC99"},
{name:"追剧",url:"http://82.157.98.129/json/json.php/?url=",jxb:"壁虎",ds:"5",json:"1",zd:"1",qp:"1",jj:"1",diy:"#33CC99"},
{name:"盗心",url:"https://a.dxzj88.com/jhjhjx/?url=",jxb:"壁虎",ds:"5",json:"1",zd:"1",qp:"1",jj:"1",diy:"#33CC99"},
{name:"荣直",url:"http://122.114.157.13:2089/rx.php?url=",jxb:"原",ds:"5",zd:"1",qp:"1",jj:"1",diy:"#33CC99"},
{name:"江直",url:"http://www.zjds.cc/jx/gqys.php?url=",jxb:"原",ds:"5",zd:"1",qp:"1",jj:"1",diy:"#33CC99"},
{name:"咪咕",url:"https://json.nxflv.com/?uid=717419&key=deghilqryABCIJTZ89&url=",jxb:"原",ds:"5",zd:"1",qp:"1",jj:"1",diy:"#33CC99"},
{name:"娃娃",url:"http://www.wlwdw.com/json/?url=",jxb:"原",ds:"5",zd:"1",qp:"1",jj:"1",diy:"#33CC99"},
{name:"自建",url:"https://jx.300ys.xyz/json/v.php/?url=",jxb:"原",ds:"5",json:"1",zd:"1",qp:"1",jj:"1",diy:"#33CC99"},
{name:"壁虎",url:"http://47.104.243.98:4433/?url=",jxb:"原",ds:"5",json:"小白",zd:"1",qp:"1",jj:"1",diy:"#33CC99"},
{name:"爱看",url:"https://jx.woaik.cn/?url=",jjj:"bilibili",jxb:"原",zd:"1",qp:"1",jj:"1",diy:"#33CC99"},
{name:"万能",url:"https://vip.legendwhb.cn/m3u8.php?url=",jjj:"bilibili",jxb:"原",zd:"1",qp:"1",jj:"1",diy:"#33CC99"},
{name:"搬运",url:"https://play.banyung.xyz:7799/?url=",jxb:"原",zd:"1",qp:"1",jj:"1",diy:"#33CC99"},


/* ****************************************************** */
];localStorage.setItem('江小白自定义接口',JSON.stringify(zdyjkb));let zdyjkpbobj=setInterval(function(){try{if(document.querySelector("ul#httpsvipul>li:last-of-type")){const zdyjkpb=document.querySelectorAll('ul#httpsvipul>li');for(let zdyjkpbi=0;zdyjkpbi<zdyjkpb.length;zdyjkpbi++){const zdyjkpbmsa=zdyjkpb[zdyjkpbi].querySelectorAll('a4');for(let zdyjkpbia=0;zdyjkpbia<zdyjkpbmsa.length;zdyjkpbia++){if(zdyjkpbmsa[zdyjkpbia].innerText.match(全局自定义屏蔽接口)){zdyjkpb[zdyjkpbi].setAttribute('style','display:none!important');}};};clearInterval(zdyjkpbobj);}else{}}catch(e){clearInterval(zdyjkpbobj);}},1234);}}}else{return false;}}})();
