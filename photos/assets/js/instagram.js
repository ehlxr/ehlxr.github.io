function clickAlbums(t){if("index"===t){(i=document.querySelector(".post-title")).innerHTML=i.getAttribute("index-title"),document.querySelector(".albums-nav").removeAttribute("hidden");for(var e=document.querySelectorAll(".instagram section"),n=0;n<e.length;n++)e[n].setAttribute("hidden",!0),e[n].className="archives album"}else{var r="#section"+t,i=document.querySelector(".instagram "+r+" .title").innerHTML;document.querySelector(".post-title").innerHTML=i;for(e=document.getElementsByTagName("section"),n=0;n<e.length;n++)e[n].setAttribute("hidden",!0),e[n].className="archives album";var o=document.querySelector(r);o.removeAttribute("hidden"),o.className="archives album active"}}!function(n){var r={};function i(t){if(r[t])return r[t].exports;var e=r[t]={exports:{},id:t,loaded:!1};return n[t].call(e.exports,e,e.exports,i),e.loaded=!0,e.exports}i.m=n,i.c=r,i.p="/dist/",i(0)}([function(t,e,n){"use strict";n(1);var r,i,o=n(2),d=(r=o)&&r.__esModule?r:{default:r};(function(){!function(e){if(i)e(i);else{var t=new XMLHttpRequest;t.open("GET","./assets/data.json?t="+ +new Date,!0),t.onload=function(){if(200<=this.status&&this.status<300){var t=JSON.parse(this.response);e(i=t)}else console.error(this.statusText)},t.onerror=function(){console.error(this.statusText)},t.send()}}(function(t){!function(t){for(var e="",n="",r=0,i=t.length;r<i;r++){for(var o=t[r],a="",c=0,l=o.link.length;c<l;c++){var u=o.link[c].split("||"),s=u[0];a+='<figure class="thumb" itemprop="associatedMedia" itemscope="" itemtype="http://schema.org/ImageObject">                <a href="'+s+'" itemprop="contentUrl" data-type="image" data-size="1000x1000" data-target="'+s+'">                  <img class="reward-img nofancybox no-mediumzoom" data-type="image" data-src="'+s+'" src="./assets/empty.png" itemprop="thumbnail" onload="lzld(this)">                </a>                <figcaption itemprop="caption description">'+(u[1]?u[1]:"")+"</figcaption>            </figure>"}e=e+'<section class="archives album" hidden id="section'+r+'"><h1 class="title" hidden>'+o.title+'</h1>            <ul class="img-box-ul">'+a+"</ul>          </section>",n+='<figure class="nav-thumb" itemprop="associatedMedia" itemscope="" itemtype="http://schema.org/ImageObject">                <a href="#section'+r+'" onclick="clickAlbums('+r+');">                  <img class="reward-img nofancybox no-mediumzoom" data-type="image" data-src="'+o.link[0].split("||")[0]+'" src="./assets/empty.png" itemprop="thumbnail" onload="lzld(this)">                </a>                <figcaption itemprop="caption description">'+o.title+"</figcaption>            </figure>"}document.querySelector(".instagram").innerHTML='<div class="photos" itemscope="" itemtype="http://schema.org/ImageGallery">'+e+"</div>",document.querySelector(".albums-nav").innerHTML="<ul>"+n+"</ul>",d.default.init()}(t),function(){var t=document.querySelector(".post-title");t.setAttribute("index-title",t.innerHTML);var e=location.pathname,n=location.hash;if("/photos/"===e&&""!==n){var r=n.split("#section");r[1]&&clickAlbums(r[1])}}()})})()},function(i,t,o){(function(n){"use strict";var r=o(3),a=["data-src"];function t(i){var t;"string"==typeof(i=function(t,e){for(var n in t)void 0===e[n]&&(e[n]=t[n]);return e}({offset:333,src:"data-src",container:!1},i||{})).src&&(t=i.src,-1===c.call(a,t)&&a.push(t));var o=[];function e(t){var e,s,d,f,n,r=(e=t,"function"!=typeof i.src?e.getAttribute(i.src):i.src(e));r&&(t.src=r),t.setAttribute("data-lzled",!0),o[c.call(o,t)]=null,(s=[],d=null,f=function(){for(var t=0;t<s.length;t++)s[t].end?s.splice(t--,1):s[t]();!s.length&&n()},n=function(){clearInterval(d),d=null},function(t,e,n,r){var i,o,a,c,l,u=new Image;if(u.src=t,u.complete)return e.call(u),void(n&&n.call(u));o=u.width,a=u.height,u.onerror=function(){r&&r.call(u),i.end=!0,u=u.onload=u.onerror=null},(i=function(){c=u.width,l=u.height,(c!==o||l!==a||1024<c*l)&&(e.call(u),i.end=!0)})(),u.onload=function(){!i.end&&i(),n&&n.call(u),u=u.onload=u.onerror=null},i.end||(s.push(i),null===d&&(d=setInterval(f,40)))})(r,function(){t.classList.remove("medium-zoom-image"),console.info("class: "+t.getAttribute("class")),t.parentElement.setAttribute("data-size",this.width+"x"+this.height)})}return function(t){t.onload=null,t.removeAttribute("onload"),t.onerror=null,t.removeAttribute("onerror"),-1===c.call(o,t)&&r(t,i,e)}}function e(t){var e="HTML"+t+"Element";if(e in n!=!1){var i=n[e].prototype.getAttribute;n[e].prototype.getAttribute=function(t){if("src"!==t)return i.call(this,t);for(var e,n=0,r=a.length;n<r&&!(e=i.call(this,a[n]));n++);return e||i.call(this,t)}}}function c(t){for(var e=this.length;e--&&this[e]!==t;);return e}n.lzld=t(),e("Image"),e("IFrame"),i.exports=t}).call(t,function(){return this}())},function(t,e){"use strict";var n=function(t){for(var e=function(t){(t=t||window.event).preventDefault?t.preventDefault():t.returnValue=!1;var e=function t(e,n){return e&&(n(e)?e:t(e.parentNode,n))}(t.target||t.srcElement,function(t){return t.tagName&&"FIGURE"===t.tagName.toUpperCase()});if(e){for(var n,r=e.parentNode,i=document.querySelectorAll(".instagram .archives.album.active .thumb"),o=i.length,a=0,c=0;c<o;c++)if(1===i[c].nodeType){if(i[c]===e){n=a;break}a++}return 0<=n&&l(n,r),!1}},l=function(t,e,n,r){var i,o,a=document.querySelectorAll(".pswp")[0];if(o=function(t){for(var e,n,r,i,o,a,c=(t=t.parentNode.parentNode).querySelectorAll(".instagram .archives.album.active .thumb"),l=c.length,u=[],s=0;s<l;s++)1===(e=c[s]).nodeType&&(r=(n=e.children[0]).getAttribute("data-size").split("x"),i=n.getAttribute("data-type"),o=n.getAttribute("data-target"),a={src:n.getAttribute("href"),w:parseInt(r[0],10),h:parseInt(r[1],10)},1<e.children.length&&(a.title=e.children[1].innerHTML),0<n.children.length&&(a.msrc=n.children[0].getAttribute("src"),a.type=i,a.target=o),a.el=e,u.push(a));return u}(e),i={galleryUID:e.getAttribute("data-pswp-uid"),getThumbBoundsFn:function(t){var e=o[t].el.getElementsByTagName("img")[0],n=window.pageYOffset||document.documentElement.scrollTop,r=e.getBoundingClientRect();return{x:r.left,y:r.top+n,w:r.width}}},r)if(i.galleryPIDs){for(var c=0;c<o.length;c++)if(o[c].pid==t){i.index=c;break}}else i.index=parseInt(t,10)-1;else i.index=parseInt(t,10);isNaN(i.index)||(n&&(i.showAnimationDuration=0),new PhotoSwipe(a,PhotoSwipeUI_Default,o,i).init())},n=document.querySelectorAll(t),r=0,i=n.length;r<i;r++)n[r].setAttribute("data-pswp-uid",r+1),n[r].querySelector("ul").setAttribute("data-pswp-uid",r+1),n[r].onclick=e;var o=function(){var t=window.location.hash.substring(1),e={};if(t.length<5)return e;for(var n=t.split("&"),r=0;r<n.length;r++)if(n[r]){var i=n[r].split("=");i.length<2||(e[i[0]]=i[1])}return e.gid&&(e.gid=parseInt(e.gid,10)),e}();o.pid&&o.gid&&l(o.pid,n[o.gid-1],!0,!0)},r={init:function(){n(".photos")}};t.exports=r},function(t,e){(function(s){t.exports=function(t,e,n){var r={container:s.document.body,offset:0};void 0!==e&&"function"!=typeof e||(n=e,e={});for(var i=r.container=e.container||r.container,o=r.offset=e.offset||r.offset,a=0;a<c.length;a++)if(c[a].container===i)return c[a].isInViewport(t,o,n);return c[c.push(function(a){var c=function(){var r=[];function n(t){for(var e=r.length-1;0<=e;e--)if(r[e][0]===t)return e;return-1}function i(t){return-1!==n(t)}return{add:function(t,e,n){i(t)||r.push([t,e,n])},remove:function(t){var e=n(t);-1!==e&&r.splice(e,1)},isWatched:i,checkAll:function(e){return function(){for(var t=r.length-1;0<=t;t--)e.apply(this,r[t])}}}}(),t=a===s.document.body?s:a,e=(r=c.checkAll(function(t,e,n){u(t,e)&&(c.remove(t),n(t))}),i=15,function(){var t=this,e=arguments,n=o&&!l;clearTimeout(l),l=setTimeout(function(){l=null,o||r.apply(t,e)},i),n&&r.apply(t,e)});var r,i,o,l;f(t,"scroll",e),t===s&&f(s,"resize",e);d&&function(n,t,e){var r=new MutationObserver(function(t){!0===t.some(a)&&setTimeout(e,0)}),i=Array.prototype.filter,o=Array.prototype.concat;function a(t){var e=o.call([],Array.prototype.slice.call(t.addedNodes),t.target);return 0<i.call(e,n.isWatched).length}r.observe(t,{childList:!0,subtree:!0,attributes:!0})}(c,a,e);function u(t,e){if(!m(s.document.documentElement,t)||!m(s.document.documentElement,a))return!1;if(!t.offsetWidth||!t.offsetHeight)return!1;var n=t.getBoundingClientRect(),r={};if(a===s.document.body)r={top:-e,left:-e,right:s.document.documentElement.clientWidth+e,bottom:s.document.documentElement.clientHeight+e};else{var i=a.getBoundingClientRect();r={top:i.top-e,left:i.left-e,right:i.right+e,bottom:i.bottom+e}}var o=n.right>r.left&&n.left<r.right&&n.bottom>r.top&&n.top<r.bottom;return o}return setInterval(e,150),{container:a,isInViewport:function(t,e,n){if(!n)return u(t,e);var r,i,o,a=(r=t,i=e,o=n,{watch:function(){c.add(r,i,o)},dispose:function(){c.remove(r)}});return a.watch(),a}}}(i))-1].isInViewport(t,o,n)};var c=[],d="function"==typeof s.MutationObserver;function f(t,e,n){t.attachEvent?t.attachEvent("on"+e,n):t.addEventListener(e,n,!1)}var m=function(){return!s.document||(s.document.documentElement.compareDocumentPosition?function(t,e){return!!(16&t.compareDocumentPosition(e))}:s.document.documentElement.contains?function(t,e){return t!==e&&!!t.contains&&t.contains(e)}:function(t,e){for(;e=e.parentNode;)if(e===t)return!0;return!1})}}).call(e,function(){return this}())}]),window.addEventListener("popstate",function(){var t=location.pathname,e=location.hash;history.state;if("/photos/"===t&&""===e&&clickAlbums("index"),"/photos/"===t&&""!==e){var n=e.split("#section");n[1]&&clickAlbums(n[1])}});