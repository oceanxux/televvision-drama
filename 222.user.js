// ==UserScript==
// @name 解析辅助脚本
// @description 脚本功能目前有：给“解析脚本”添加自定义接口（需要配合jxb解析脚本 822以上版本 才有效果）。
// @author 江小白
// @version 1.5
// @include /^https?:\/\/(?:(?:v(?:-wb)?|m)\.youku\.com\/.+?\/id_|www\.wasu\.cn\/[pP]lay\/show\/id\/\d|www\.miguvideo\.com\/.+?\/detail\.html\?cid=\d|[^\/]+?\.tudou\.com\/(?:v\/|.+?\/id_)|v\.qq\.com\/(?:x\/(?:cover|page)|.+?\/p\/topic)\/|(?:3g|m)\.v\.qq\.com|w(?:ww)?\.mgtv\.com\/[a-z]\/|www\.mgtv\.com\/act\/|m\.mgtv\.com\/b\/|www\.iqiyi\.com\/(?:[vw]_|kszt\/)|m\.iqiyi\.com\/(?:v_|$)|tw\.iqiyi\.com\/v_|tv\.sohu\.com\/v\/|m\.tv\.sohu\.com\/(?:u\/|v|phone_play_film\?aid=)|film\.sohu\.com\/album\/|www\.le\.com\/ptv\/vplay\/|m\.le\.com\/vplay_|[vm]\.pptv\.com\/show\/|vip\.1905\.com\/play\/|www\.ixigua\.com\/|(?:player|live)\.bilibili\.com\/|www\.bilibili\.com\/(?:(?:cheese|bangumi)\/play|blackboard|.*?video)\/|m\.bilibili\.com\/bangumi\/play\/|www\.acfun\.cn\/(?:.+?\/ac|bangumi\/)|m\.acfun\.cn\/v\/|.+?(?:\.m(?:3u8|p4)\?\w+?=|(?:search|jx|url|id|v|&[^\/]+?|_\w+?|\.html\?\w+?)[&#=\?]https?(?::\/\/|%3A%2F%2F)[^\/]+?\.(?:youku|miguvideo|wasu|tudou|qq|mgtv|iqiyi|sohu|le|pptv|1905|bilibili|acfun|ixigua)\.))/
// @charset UTF-8
// @grant none
// @noframes
// @run-at document-body
// ==/UserScript==


(function(){'use strict';if(self!=top){return false;}else{if(document.querySelector("\u6c5f\u5c0f\u767d\u81ea\u5b9a\u4e49\u63a5\u53e3")==null){document.head.appendChild(document.createElement("\u6c5f\u5c0f\u767d\u81ea\u5b9a\u4e49\u63a5\u53e3"));
let 生效网址关键字=/(?:youku|tudou|qq|mgtv|iqiyi|sohu|le|pptv|1905|bilibili|acfun|ixigua)/i;if(location.href.match(生效网址关键字)&&!(location.href.match(/^https?:\/\/(?:www|m)\.iqiyi\.com\/(?:a_|kszt\/)/)&&document.title.match(new RegExp("在线观看")))&&!(location.href.match(/^https?:\/\/(?:www|m)\.iqiyi\.com\/v_/)&&document.title.match(new RegExp("名师课堂")))){
/* ** 自定义修改 Josn 全局播放器地址 （必须是 https 类型）** */
let 电脑json全局播放器="https://api.ldjx.cc/wp-api/ifr.php?isDp=0&vid=";
let 手机json全局播放器="https://api-2.pgplayer.com/p2p/?url=";
/* ********填入想屏蔽的接口名称，屏蔽多个用 | 隔开********** */
let 全局自定义屏蔽接口=/(?:百域阁|无名)/i;
/* ****************************************************** */
localStorage.setItem('电脑Json全局播放器',电脑json全局播放器);localStorage.setItem('手机Json全局播放器',手机json全局播放器);if(location.host.match(生效网址关键字)){let zdyjkb=[
/* ************** 根据以下格式，自己添加接口**************** */

{name:"Json并发",vip:"Json并发",jxb:"原",zd:"1",qp:"1",jj:"1",diy:"cyan",title:"随机-获取 Json接口 数据"},
{name:"Json轮询",vip:"Json轮询",jxb:"原",zd:"1",qp:"1",jj:"1",diy:"cyan",title:"依序-获取 Json接口 数据"},
{name:"虾米",url:"aHR0cHM6Ly9qeC54bWZsdi5jb20vP3VybD0=",jxb:"原",ds:"5",json:"1",zd:"1",qp:"1",jj:"1",diy:"#33CC99",lx:"1"},
{name:"视觉",url:"http://47.95.28.242/jx/renrenmi/analysis.php?v=",jxb:"原",json:"1",jj:"1",zd:"1",qp:"1",diy:"#33CC99",lx:"1"},
{name:"融兴",url:"https://supervip.rongxingvr.cn:8866/api/?key=AngnmipM4u7BECCcjq&url=",jxb:"原",ds:"5",json:"1",zd:"1",qp:"1",jj:"1",diy:"#33CC99",lx:"1"},
{name:"扶风",url:"https://vip.byteamone.cn/api/?key=WYIBKWhQ1bIYcfbRei&url=",jxb:"原",ds:"5",json:"1",zd:"1",qp:"1",jj:"1",diy:"#33CC99",lx:"1"},
{name:"295",url:"http://110.40.186.232/xy.php/?url=",jxb:"原",json:"1",jj:"1",zd:"1",qp:"1",diy:"#33CC99",lx:"1"},
{name:"左岸",url:"https://api.parwix.com:4433/analysis/json/?uid=556&my=acfhjoprtuvxKLMQ12&url=",jxb:"原",ds:"5",json:"1",zd:"1",qp:"1",jj:"1",diy:"#33CC99",lx:"1"},
{name:"左三",url:"https://api.parwix.com:4433/analysis/json/?uid=2245&my=jmswzBGHIMSUVWZ126&url=",jxb:"原",json:"1",jj:"1",zd:"1",qp:"1",diy:"#33CC99",lx:"1"},
{name:"晓城",url:"http://cygc.xyz:88/api/?key=VfaA940WvRefWe2mP0&url=",jxb:"原",json:"1",jj:"1",zd:"1",qp:"1",diy:"#33CC99",lx:"1"},
{name:"江湖",url:"https://apis.jxcxin.cn/api/jx?url=",jxb:"原",ds:"5",json:"1",zd:"1",qp:"1",jj:"1",diy:"#33CC99",lx:"1"},
{name:"气质",url:"https://api.exeyz.cc/api/Json.php?url=",jxb:"原",ds:"5",json:"1",zd:"1",qp:"1",jj:"1",diy:"#33CC99",lx:"1"},
{name:"麒麟",url:"https://api.qilin.best/home/api?type=ys&uid=2343358&key=cekpsuvxJKNOV34789&url=",jxb:"原",ds:"5",json:"1",zd:"1",qp:"1",jj:"1",diy:"#33CC99",lx:"1"},
{name:"小牛",url:"http://jx.ncxmid.cn/sb/?url=",jxb:"原",ds:"5",json:"1",zd:"1",qp:"1",jj:"1",diy:"#33CC99",lx:"1"},
{name:"及时",url:"http://47.94.137.151:8089/?url=",jxb:"原",json:"1",jj:"1",zd:"1",qp:"1",diy:"#33CC99",lx:"1"},
{name:"看呀",url:"http://api.vip123kan.vip/?url=",jxb:"原",ds:"5",json:"1",zd:"1",qp:"1",jj:"1",diy:"#33CC99",lx:"1"},
{name:"盘古",url:"https://json.pangujiexi.com:12345/json.php?url=",jxb:"原",ds:"5",json:"1",zd:"1",qp:"1",jj:"1",diy:"#33CC99",lx:"1"},
{name:"极速",url:"https://jx.jisujiexi.vip/home/api?type=ys&uid=96286&key=hjksuvCFIKMNQUVWX7&url=",jxb:"原",ds:"5",json:"1",zd:"1",qp:"1",jj:"1",diy:"#33CC99",lx:"1"},
{name:"高天",url:"http://newjiexi.gotto.top/yun_apib.php/?url=",jxb:"原",ds:"5",json:"1",zd:"1",qp:"1",jj:"1",diy:"#33CC99",lx:"1"},
{name:"云海",url:"http://47.100.138.210:91/home/api?type=ys&uid=2086844&key=ajklotxzAGIJPSVX14&url=",jxb:"原",ds:"5",json:"1",zd:"1",qp:"1",jj:"1",diy:"#33CC99",lx:"1"},
{name:"碧滴",url:"https://svip.9080ysw.com/bdys.php?url=",jxb:"原",ds:"5",json:"小白",zd:"1",qp:"1",jj:"1",diy:"#33CC99"},
{name:"腾讯",url:"https://service-1w8b0b3i-1259339726.gz.apigw.tencentcs.com/tx?key=daozhangyyds&url=",jjj:"qq",jxb:"原",ds:"5",json:"小白",zd:"1",qp:"1",jj:"1",diy:"#33CC99"},
{name:"boy佬",url:"http://120.77.94.20/jx?url=",jxb:"原",ds:"5",json:"小白",zd:"1",qp:"1",jj:"1",diy:"#33CC99"},
{name:"勒呢",url:"https://json.legendwhb.cn/json.php/?url=",jxb:"原",ds:"5",json:"1",zd:"1",qp:"1",jj:"1",diy:"#33CC99",lx:"1"},
{name:"爱看",url:"https://jx.woaik.cn/?url=",jjj:"bilibili",jxb:"原",zd:"1",qp:"1",jj:"1",diy:"#33CC99"},

];localStorage.setItem('江小白自定义接口',JSON.stringify(zdyjkb));let zdyjkpbobj=setInterval(function(){try{if(document.querySelector("ul#httpsvipul>li:last-of-type")){const zdyjkpb=document.querySelectorAll('ul#httpsvipul>li');for(let zdyjkpbi=0;zdyjkpbi<zdyjkpb.length;zdyjkpbi++){const zdyjkpbmsa=zdyjkpb[zdyjkpbi].querySelectorAll('a4');for(let zdyjkpbia=0;zdyjkpbia<zdyjkpbmsa.length;zdyjkpbia++){if(zdyjkpbmsa[zdyjkpbia].innerText.match(全局自定义屏蔽接口)){zdyjkpb[zdyjkpbi].setAttribute('style','display:none!important');}};};clearInterval(zdyjkpbobj);}else{}}catch(e){clearInterval(zdyjkpbobj);}},1234);}}}else{return false;}}})();