!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):e.quicklink=n()}(this,function(){var r={};function i(r){return new Promise(function(e,n){var t=new XMLHttpRequest;t.open("GET",r,t.withCredentials=!0),t.onload=function(){200===t.status?e():n()},t.send()})}var e,o=("prefetch",((e=document.createElement("link")).relList||{}).supports&&e.relList.supports("prefetch")?function(r){return new Promise(function(e,n){var t=document.createElement("link");t.rel="prefetch",t.href=r,t.onload=e,t.onerror=n,document.head.appendChild(t)})}:i);var u=u||function(e){var n=Date.now();return setTimeout(function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-n))}})},1)},c=new Set,f=new IntersectionObserver(function(e){e.forEach(function(e){if(e.isIntersecting){var n=e.target.href;c.has(n)&&a(n)}})});function a(e){c.delete(e),function(e,n,t){if(!(r[e]||(t=navigator.connection)&&((t.effectiveType||"").includes("2g")||t.saveData)))(n?function(e){return null==self.fetch?i(e):fetch(e,{credentials:"include"})}:o)(e).then(function(){r[e]=!0})}(new URL(e,location.href).toString(),f.priority)}return function(e){e=Object.assign({timeout:2e3,priority:!1,timeoutFn:u,el:document},e),f.priority=e.priority;var n=e.origins||[location.hostname],t=e.ignores||[];e.timeoutFn(function(){e.urls?e.urls.forEach(a):Array.from(e.el.querySelectorAll("a"),function(e){f.observe(e),n.length&&!n.includes(e.hostname)||function n(t,e){return Array.isArray(e)?e.some(function(e){return n(t,e)}):(e.test||e).call(e,t.href,t)}(e,t)||c.add(e.href)})},{timeout:e.timeout})}});