// ==UserScript==
// @name         Anilist Inject
// @namespace    https://github.com/haganbmj/
// @version      0.1
// @author       Brendan Hagan
// @include      /^https://anilist\.co/(anime|manga)list/*/
// @grant        none
// ==/UserScript==

/* eslint-disable */
(function(d, s, id){
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)){ return; }
  js = d.createElement(s); js.id = id;
  js.onload = function(){
      // remote script has loaded
  };
  js.src = "//localhost:8080/hot-reload.js";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'anilist-inject-js'));
