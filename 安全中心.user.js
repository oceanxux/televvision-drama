// ==UserScript==
// @name 安全中心
// @description 自动打开 已知的 不让人打开的网址
// @version 1.7
// @author 江小白
// @include /^https?:\/\/(?:.+?(?:(?:\/gourl\?url|\?gourl)=http|&gourl=http.+?&subtemplate=|\.html\?(?:pf)?url=.+?(?:&(?:pfuin|[cp]id|level)=.+)?$)|[^\/]+?\/(?:go\.php\?url|go-wild\?ac=\d+?&url|\?target)=http|jump\d?\.bdimg\.com\/safecheck\/index\?url=|bsb\.baidu\.com\/lanjie\/\w+?\.html\?http)/
// @grant none
// @noframes
// @run-at document-body
// ==/UserScript==
(function() {
	try {
		if (self != top) return !1;
		let a = location.href;
		if (a.match(/^https?:\/\/(?:.+?(?:(?:\/gourl\?url|\?gourl)=http|&gourl=http.+?&subtemplate=|\.html\?(?:pf)?url=.+?(?:&(?:pfuin|[cp]id|level)=.+)?$)|[^\/]+?\/(?:go-wild\?ac=\d+?&url|\?target)=http)/)) {
			let b = unescape(location)
			.replace(/^.+?\/go-wild\?ac=\d+?&url=(http.+)$/, "$1")
			.replace(/^.+?&gourl=(http.+?)&subtemplate=.*$/, "$1")
            .replace(/^.+?(?:\?(?:gourl|target)|\/gourl\?url)=(http.+)$/, "$1")
			.replace(/^.+?\.html\?(?:pf)?url=(http.+?)(?:&(?:pfuin|[cp]id|level)=.+)?$/, "$1")
            .replace(/^.+?\.html\?(?:pf)?url=(?!http)(.+?)(?:&(?:pfuin|[cp]id|level)=.+)?$/, "http://$1");
			b !== a && location.replace(unescape(b).replace(/&level=\d+?&sublevel=.*$/, ""));
		} else {
		a.match(/^https?:\/\/jump\d?\.bdimg\.com\/safecheck\/index\?url=/) ? "继续访问" === document.querySelector('div.warning_info.fl>a[href^="http"]').innerText && location.replace(document.querySelector('div.warning_info.fl>a[href^="http"]').href)
		:
		a.match(/^https?:\/\/bsb\.baidu\.com\/lanjie\/\w+?\.html\?http/) ? "继续访问（不推荐）" === document.querySelector('div[class^="operations"]>a:last-of-type').innerText && location.replace(document.querySelector('div[class^="operations"]>a:last-of-type').href)
        :
        a.match(/^https?:\/\/[^\/]+?\/go\.php\?url=http/) && "继续访问" === document.querySelector('div[class^="c-footer"]>a:first-child').innerText && location.replace(document.querySelector('div[class^="c-footer"]>a:first-child').href);
		}
	} catch (c) {
		return !1;
	}
})();