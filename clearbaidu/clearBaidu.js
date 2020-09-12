// ==UserScript==
// @name         清理百度搜索记录
// @namespace    https://github.com/favouriter/js/blob/master/clearbaidu
// @version      0.2
// @description  当你使用百度搜索的时候是不是没错都要清理搜索记录，F12删除本地存储，或者百度图片清理cookie
// @author       favouriter
// @match        *://www.baidu.com/*
// @match        *://fanyi.baidu.com/*
// @match        *://image.baidu.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    localStorage.removeItem("BDSUGSTORED");
    localStorage.removeItem("pcTransHistory");
    delete_cookie('indexPageSugList')
    function delete_cookie( name ) {
      document.cookie = name + '=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    }
})();
