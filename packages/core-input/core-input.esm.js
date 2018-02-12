var name="@nrk/core-input",version="1.0.0";function addEvent(t,e,n){if("undefined"!=typeof window){var i=window[t]=window[t]||{};!i[e]&&(i[e]=1)&&document.addEventListener(e,function(e){for(var i=e.target;i;i=i.parentElement)i[t]&&n(i,e)},!0)}}var ARIA_LIVE_EL,CustomEvent=function(){if("undefined"!=typeof window)return window.CustomEvent?window.CustomEvent:(t.prototype=window.Event.prototype,t);function t(t,e){void 0===e&&(e={});var n=document.createEvent("CustomEvent");return n.initCustomEvent(t,Boolean(e.bubbles),Boolean(e.cancelable),e.detail),n}}(),KEY=name+"-"+version,ARIA_OWNS_ID=0;function input(){for(var t=[],e=arguments.length;e--;)t[e]=arguments[e];return new(Function.prototype.bind.apply(Input,[null].concat(t)))}var Input=function(t,e){void 0===e&&(e={}),this.elements=getElements(t),this.elements.forEach(function(t){var n=e.complete||t.getAttribute("aria-autocomplete")||"both",i=e.owns||t.getAttribute("aria-owns")||KEY+"-"+ARIA_OWNS_ID++;if(t.setAttribute("role","combobox"),t.setAttribute("autocomplete",!1),t.setAttribute("aria-expanded",!1),t.setAttribute("aria-autocomplete",n),t.setAttribute("aria-owns",i),!getList(t)){var r=document.createElement("ul");r.id=i,r.className="nrk-dropdown",t.insertAdjacentElement("afterend",r)}t[KEY]=[].map.call(getList(t).children,function(t){return t.innerHTML}),getList(t).setAttribute("hidden",""),getList(t).setAttribute("role","listbox")})};function getList(t){return document.getElementById(t.getAttribute("aria-owns"))}function render(t){t.value.trim().toLowerCase();var e=getList(t);ARIA_LIVE_EL.setAttribute("aria-hidden",!1),ARIA_LIVE_EL.textContent=hits.length+" treff",t.setAttribute("aria-expanded",!0),e.removeAttribute("hidden"),e.style.width=t.offsetWidth+"px",e.innerHTML=hits.map(function(t,e){return'<li role="option" aria-selected="'+(0===e)+'">'+t.value+"</li>"}).join("")}function onKey(t,e){if(27===e.keyCode&&input(t).hide(),38===e.keyCode||40===e.keyCode){e.preventDefault();var n=[].slice.call(getList(t).children),i=n.filter(function(t){return"true"===t.getAttribute("aria-selected")})[0],r=(n.indexOf(i)+(38===e.keyCode?-1:1))%n.length,o=t.getAttribute("aria-autocomplete"),u=(n[r]||t).value;console.log(r,u),render(t),"list"===o?LIVE.textContent=u||"Tomt tekstfelt":t.value=u}}Input.prototype.value=function(){},Input.prototype.show=function(){return ARIA_LIVE_EL.setAttribute("aria-hidden",!1),this.elements.forEach(function(t){t.setAttribute("aria-expanded",!0),getList(t).removeAttribute("hidden"),getList(t).style.width=t.offsetWidth+"px"}),this},Input.prototype.hide=function(){return ARIA_LIVE_EL.setAttribute("aria-hidden",!0),this.elements.forEach(function(t){t.setAttribute("aria-expanded",!1),getList(t).setAttribute("hidden","")}),this},"undefined"!=typeof document&&((ARIA_LIVE_EL=document.createElement("span")).setAttribute("aria-hidden",!0),ARIA_LIVE_EL.setAttribute("aria-live","assertive"),document.documentElement.appendChild(ARIA_LIVE_EL)),addEvent(KEY,"keydown",onKey),addEvent(KEY,"focus",render),addEvent(KEY,"input",render),addEvent(KEY,"blur",function(t){return input(t).hide()});export{input};
