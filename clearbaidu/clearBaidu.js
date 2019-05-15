// ==UserScript==
// @name         清理百度搜索记录
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       favouriter
// @match        *://www.baidu.com/*
// @match        *://image.baidu.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    localStorage.removeItem("BDSUGSTORED");
    delete_cookie('indexPageSugList')
    function delete_cookie( name ) {
      document.cookie = name + '=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    }
})();