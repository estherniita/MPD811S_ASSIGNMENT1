!function(){function t(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function e(t,e,n,i,o,r,a){try{var s=t[r](a),d=s.value}catch(c){return void n(c)}s.done?e(d):Promise.resolve(d).then(i,o)}function n(t){return function(){var n=this,i=arguments;return new Promise(function(o,r){var a=t.apply(n,i);function s(t){e(a,o,r,s,d,"next",t)}function d(t){e(a,o,r,s,d,"throw",t)}s(void 0)})}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function r(t,e,n){return e&&o(t.prototype,e),n&&o(t,n),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{kyFE:function(e,o,a){"use strict";a.r(o),a.d(o,"ion_menu",function(){return m}),a.d(o,"ion_menu_button",function(){return w}),a.d(o,"ion_menu_toggle",function(){return x});var s=a("2atR"),d=a("GTku"),c=a("1vRN"),u=(a("meiF"),a("bC4P")),l=a("y08P"),h=(a("B4Jq"),a("9LPk")),p=a("74mu"),m=function(){function e(t){i(this,e),Object(s.o)(this,t),this.ionWillOpen=Object(s.g)(this,"ionWillOpen",7),this.ionWillClose=Object(s.g)(this,"ionWillClose",7),this.ionDidOpen=Object(s.g)(this,"ionDidOpen",7),this.ionDidClose=Object(s.g)(this,"ionDidClose",7),this.ionMenuChange=Object(s.g)(this,"ionMenuChange",7),this.lastOnEnd=0,this.blocker=l.a.createBlocker({disableScroll:!0}),this.isAnimating=!1,this._isOpen=!1,this.isPaneVisible=!1,this.isEndSide=!1,this.disabled=!1,this.side="start",this.swipeGesture=!0,this.maxEdgeStart=50}var o,p,m,y,w;return r(e,[{key:"typeChanged",value:function(t,e){var n=this.contentEl;n&&(void 0!==e&&n.classList.remove("menu-content-".concat(e)),n.classList.add("menu-content-".concat(t)),n.removeAttribute("style")),this.menuInnerEl&&this.menuInnerEl.removeAttribute("style"),this.animation=void 0}},{key:"disabledChanged",value:function(){this.updateState(),this.ionMenuChange.emit({disabled:this.disabled,open:this._isOpen})}},{key:"sideChanged",value:function(){this.isEndSide=Object(c.m)(this.side)}},{key:"swipeGestureChanged",value:function(){this.updateState()}},{key:"connectedCallback",value:(w=n(regeneratorRuntime.mark(function t(){var e,n,i=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(void 0===this.type&&(this.type=d.c.get("menuType","overlay")),e=this.el.parentNode,void 0===this.contentId&&console.warn('[DEPRECATED][ion-menu] Using the [main] attribute is deprecated, please use the "contentId" property instead:\nBEFORE:\n  <ion-menu>...</ion-menu>\n  <div main>...</div>\n\nAFTER:\n  <ion-menu contentId="main-content"></ion-menu>\n  <div id="main-content">...</div>\n'),!(n=void 0!==this.contentId?document.getElementById(this.contentId):e&&e.querySelector&&e.querySelector("[main]"))||!n.tagName){t.next=16;break}return this.contentEl=n,n.classList.add("menu-content"),this.typeChanged(this.type,void 0),this.sideChanged(),h.a._register(this),t.next=12,Promise.resolve().then(a.bind(null,"iWo5"));case 12:this.gesture=t.sent.createGesture({el:document,gestureName:"menu-swipe",gesturePriority:30,threshold:10,blurOnStart:!0,canStart:function(t){return i.canStart(t)},onWillStart:function(){return i.onWillStart()},onStart:function(){return i.onStart()},onMove:function(t){return i.onMove(t)},onEnd:function(t){return i.onEnd(t)}}),this.updateState(),t.next=17;break;case 16:console.error('Menu: must have a "content" element to listen for drag events on.');case 17:case"end":return t.stop()}},t,this)})),function(){return w.apply(this,arguments)})},{key:"componentDidLoad",value:(y=n(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:this.ionMenuChange.emit({disabled:this.disabled,open:this._isOpen}),this.updateState();case 1:case"end":return t.stop()}},t,this)})),function(){return y.apply(this,arguments)})},{key:"disconnectedCallback",value:function(){this.blocker.destroy(),h.a._unregister(this),this.animation&&this.animation.destroy(),this.gesture&&(this.gesture.destroy(),this.gesture=void 0),this.animation=void 0,this.contentEl=this.backdropEl=this.menuInnerEl=void 0}},{key:"onSplitPaneChanged",value:function(t){this.isPaneVisible=t.detail.isPane(this.el),this.updateState()}},{key:"onBackdropClick",value:function(t){this._isOpen&&this.lastOnEnd<t.timeStamp-100&&t.composedPath&&!t.composedPath().includes(this.menuInnerEl)&&(t.preventDefault(),t.stopPropagation(),this.close())}},{key:"isOpen",value:function(){return Promise.resolve(this._isOpen)}},{key:"isActive",value:function(){return Promise.resolve(this._isActive())}},{key:"open",value:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return this.setOpen(!0,t)}},{key:"close",value:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return this.setOpen(!1,t)}},{key:"toggle",value:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return this.setOpen(!this._isOpen,t)}},{key:"setOpen",value:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return h.a._setOpen(this,t,e)}},{key:"_setOpen",value:(m=n(regeneratorRuntime.mark(function t(e){var n,i=arguments;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(n=!(i.length>1&&void 0!==i[1])||i[1],t.t0=!this._isActive()||this.isAnimating||e===this._isOpen,t.t0){t.next=10;break}return this.beforeAnimation(e),t.next=6,this.loadAnimation();case 6:return t.next=8,this.startAnimation(e,n);case 8:this.afterAnimation(e),t.t0=0;case 10:return t.abrupt("return",!t.t0);case 11:case"end":return t.stop()}},t,this)})),function(t){return m.apply(this,arguments)})},{key:"loadAnimation",value:(p=n(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e=this.menuInnerEl.offsetWidth,t.t0=e===this.width&&void 0!==this.animation,t.t0){t.next=10;break}return this.width=e,this.animation&&(this.animation.destroy(),this.animation=void 0),t.next=7,h.a._createAnimation(this.type,this);case 7:this.animation=t.sent,d.c.getBoolean("animated",!0)||this.animation.duration(0),this.animation.fill("both");case 10:case"end":return t.stop()}},t,this)})),function(){return p.apply(this,arguments)})},{key:"startAnimation",value:(o=n(regeneratorRuntime.mark(function t(e,n){var i,o,r,a,s;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(i=!e,o=Object(d.b)(this),r="ios"===o?"cubic-bezier(0.32,0.72,0,1)":"cubic-bezier(0.0,0.0,0.2,1)",a="ios"===o?"cubic-bezier(1, 0, 0.68, 0.28)":"cubic-bezier(0.4, 0, 0.6, 1)",s=this.animation.direction(i?"reverse":"normal").easing(i?a:r).onFinish(function(){"reverse"===s.getDirection()&&s.direction("normal")}),!n){t.next=6;break}return t.next=4,s.play();case 4:t.next=7;break;case 6:s.play({sync:!0});case 7:case"end":return t.stop()}},t,this)})),function(t,e){return o.apply(this,arguments)})},{key:"_isActive",value:function(){return!this.disabled&&!this.isPaneVisible}},{key:"canSwipe",value:function(){return this.swipeGesture&&!this.isAnimating&&this._isActive()}},{key:"canStart",value:function(t){return!(document.querySelector("ion-modal.show-modal")||!this.canSwipe())&&(!!this._isOpen||!h.a._getOpenSync()&&g(window,t.currentX,this.isEndSide,this.maxEdgeStart))}},{key:"onWillStart",value:function(){return this.beforeAnimation(!this._isOpen),this.loadAnimation()}},{key:"onStart",value:function(){this.isAnimating&&this.animation?this.animation.progressStart(!0,this._isOpen?1:0):Object(c.l)(!1,"isAnimating has to be true")}},{key:"onMove",value:function(t){if(this.isAnimating&&this.animation){var e=b(t.deltaX,this._isOpen,this.isEndSide)/this.width;this.animation.progressStep(this._isOpen?1-e:e)}else Object(c.l)(!1,"isAnimating has to be true")}},{key:"onEnd",value:function(t){var e=this;if(this.isAnimating&&this.animation){var n=this._isOpen,i=this.isEndSide,o=b(t.deltaX,n,i),r=this.width,a=o/r,s=t.velocityX,d=r/2,l=s>=0&&(s>.2||t.deltaX>d),h=s<=0&&(s<-.2||t.deltaX<-d),p=n?i?l:h:i?h:l,m=!n&&p;n&&!p&&(m=!0),this.lastOnEnd=t.currentTime;var g=p?.001:-.001,f=a<0?.01:a;g+=Object(u.a)([0,0],[.4,0],[.6,1],[1,1],Object(c.j)(0,f,.9999))[0]||0;var v=this._isOpen?!p:p;this.animation.easing("cubic-bezier(0.4, 0.0, 0.6, 1)").onFinish(function(){return e.afterAnimation(m)},{oneTimeCallback:!0}).progressEnd(v?1:0,this._isOpen?1-g:g,300)}else Object(c.l)(!1,"isAnimating has to be true")}},{key:"beforeAnimation",value:function(t){Object(c.l)(!this.isAnimating,"_before() should not be called while animating"),this.el.classList.add(f),this.backdropEl&&this.backdropEl.classList.add(v),this.blocker.block(),this.isAnimating=!0,t?this.ionWillOpen.emit():this.ionWillClose.emit()}},{key:"afterAnimation",value:function(t){Object(c.l)(this.isAnimating,"_before() should be called while animating"),this._isOpen=t,this.isAnimating=!1,this._isOpen||this.blocker.unblock(),t?(this.contentEl&&this.contentEl.classList.add(k),this.ionDidOpen.emit()):(this.el.classList.remove(f),this.contentEl&&this.contentEl.classList.remove(k),this.backdropEl&&this.backdropEl.classList.remove(v),this.animation&&this.animation.stop(),this.ionDidClose.emit())}},{key:"updateState",value:function(){var t=this._isActive();this.gesture&&this.gesture.enable(t&&this.swipeGesture),!t&&this._isOpen&&this.forceClosing(),this.disabled||h.a._setActiveMenu(this),Object(c.l)(!this.isAnimating,"can not be animating")}},{key:"forceClosing",value:function(){Object(c.l)(this._isOpen,"menu cannot be closed"),this.isAnimating=!0,this.animation.direction("reverse").play({sync:!0}),this.afterAnimation(!1)}},{key:"render",value:function(){var e,n=this,i=this.isEndSide,o=this.type,r=this.disabled,a=this.isPaneVisible,c=Object(d.b)(this);return Object(s.j)(s.c,{role:"navigation",class:(e={},t(e,c,!0),t(e,"menu-type-".concat(o),!0),t(e,"menu-enabled",!r),t(e,"menu-side-end",i),t(e,"menu-side-start",!i),t(e,"menu-pane-visible",a),e)},Object(s.j)("div",{class:"menu-inner",part:"container",ref:function(t){return n.menuInnerEl=t}},Object(s.j)("slot",null)),Object(s.j)("ion-backdrop",{ref:function(t){return n.backdropEl=t},class:"menu-backdrop",tappable:!1,stopPropagation:!1,part:"backdrop"}))}},{key:"el",get:function(){return Object(s.k)(this)}}],[{key:"watchers",get:function(){return{type:["typeChanged"],disabled:["disabledChanged"],side:["sideChanged"],swipeGesture:["swipeGestureChanged"]}}}]),e}(),b=function(t,e,n){return Math.max(0,e!==n?-t:t)},g=function(t,e,n,i){return n?e>=t.innerWidth-i:e<=i},f="show-menu",v="show-backdrop",k="menu-content-open";m.style={ios:":host{--width:304px;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--background:var(--ion-background-color, #fff);left:0;right:0;top:0;bottom:0;display:none;position:absolute;contain:strict}:host(.show-menu){display:block}.menu-inner{left:0;right:auto;top:0;bottom:0;-webkit-transform:translate3d(-9999px,  0,  0);transform:translate3d(-9999px,  0,  0);display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:justify;justify-content:space-between;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);contain:strict}[dir=rtl] .menu-inner,:host-context([dir=rtl]) .menu-inner{left:unset;right:unset;left:auto;right:0}[dir=rtl] .menu-inner,:host-context([dir=rtl]) .menu-inner{-webkit-transform:translate3d(calc(-1 * -9999px),  0,  0);transform:translate3d(calc(-1 * -9999px),  0,  0)}:host(.menu-side-start) .menu-inner{--ion-safe-area-right:0px;right:auto;left:0}:host(.menu-side-end) .menu-inner{--ion-safe-area-left:0px;right:0;left:auto;}ion-backdrop{display:none;opacity:0.01;z-index:-1}@media (max-width: 340px){.menu-inner{--width:264px}}:host(.menu-type-reveal){z-index:0}:host(.menu-type-reveal.show-menu) .menu-inner{-webkit-transform:translate3d(0,  0,  0);transform:translate3d(0,  0,  0)}:host(.menu-type-overlay){z-index:1000}:host(.menu-type-overlay) .show-backdrop{display:block;cursor:pointer}:host(.menu-pane-visible){width:var(--width);min-width:var(--min-width);max-width:var(--max-width)}:host(.menu-pane-visible) .menu-inner{left:0;right:0;width:auto;-webkit-transform:none !important;transform:none !important;-webkit-box-shadow:none !important;box-shadow:none !important}:host(.menu-pane-visible) ion-backdrop{display:hidden !important;}:host(.menu-type-push){z-index:1000}:host(.menu-type-push) .show-backdrop{display:block}",md:":host{--width:304px;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--background:var(--ion-background-color, #fff);left:0;right:0;top:0;bottom:0;display:none;position:absolute;contain:strict}:host(.show-menu){display:block}.menu-inner{left:0;right:auto;top:0;bottom:0;-webkit-transform:translate3d(-9999px,  0,  0);transform:translate3d(-9999px,  0,  0);display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:justify;justify-content:space-between;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);contain:strict}[dir=rtl] .menu-inner,:host-context([dir=rtl]) .menu-inner{left:unset;right:unset;left:auto;right:0}[dir=rtl] .menu-inner,:host-context([dir=rtl]) .menu-inner{-webkit-transform:translate3d(calc(-1 * -9999px),  0,  0);transform:translate3d(calc(-1 * -9999px),  0,  0)}:host(.menu-side-start) .menu-inner{--ion-safe-area-right:0px;right:auto;left:0}:host(.menu-side-end) .menu-inner{--ion-safe-area-left:0px;right:0;left:auto;}ion-backdrop{display:none;opacity:0.01;z-index:-1}@media (max-width: 340px){.menu-inner{--width:264px}}:host(.menu-type-reveal){z-index:0}:host(.menu-type-reveal.show-menu) .menu-inner{-webkit-transform:translate3d(0,  0,  0);transform:translate3d(0,  0,  0)}:host(.menu-type-overlay){z-index:1000}:host(.menu-type-overlay) .show-backdrop{display:block;cursor:pointer}:host(.menu-pane-visible){width:var(--width);min-width:var(--min-width);max-width:var(--max-width)}:host(.menu-pane-visible) .menu-inner{left:0;right:0;width:auto;-webkit-transform:none !important;transform:none !important;-webkit-box-shadow:none !important;box-shadow:none !important}:host(.menu-pane-visible) ion-backdrop{display:hidden !important;}:host(.menu-type-overlay) .menu-inner{-webkit-box-shadow:4px 0px 16px rgba(0, 0, 0, 0.18);box-shadow:4px 0px 16px rgba(0, 0, 0, 0.18)}"};var y=function(){var t=n(regeneratorRuntime.mark(function t(e){var n;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.a.get(e);case 2:if(n=t.sent,t.t0=!n,t.t0){t.next=8;break}return t.next=7,n.isActive();case 7:t.t0=!t.sent;case 8:return t.abrupt("return",!t.t0);case 9:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}(),w=function(){function e(t){var o=this;i(this,e),Object(s.o)(this,t),this.visible=!1,this.disabled=!1,this.autoHide=!0,this.type="button",this.onClick=n(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",h.a.toggle(o.menu));case 1:case"end":return t.stop()}},t)}))}var o;return r(e,[{key:"componentDidLoad",value:function(){this.visibilityChanged()}},{key:"visibilityChanged",value:(o=n(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y(this.menu);case 2:this.visible=t.sent;case 3:case"end":return t.stop()}},t,this)})),function(){return o.apply(this,arguments)})},{key:"render",value:function(){var e,n=this.color,i=this.disabled,o=Object(d.b)(this),r=d.c.get("menuIcon","ios"===o?"menu-outline":"menu-sharp"),a=this.autoHide&&!this.visible,c={type:this.type};return Object(s.j)(s.c,{onClick:this.onClick,"aria-disabled":i?"true":null,"aria-hidden":a?"true":null,class:Object(p.a)(n,(e={},t(e,o,!0),t(e,"button",!0),t(e,"menu-button-hidden",a),t(e,"menu-button-disabled",i),t(e,"in-toolbar",Object(p.c)("ion-toolbar",this.el)),t(e,"in-toolbar-color",Object(p.c)("ion-toolbar[color]",this.el)),t(e,"ion-activatable",!0),t(e,"ion-focusable",!0),e))},Object(s.j)("button",Object.assign({},c,{disabled:i,class:"button-native",part:"native","aria-label":"menu"}),Object(s.j)("span",{class:"button-inner"},Object(s.j)("slot",null,Object(s.j)("ion-icon",{part:"icon",icon:r,mode:o,lazy:!1,"aria-hidden":"true"}))),"md"===o&&Object(s.j)("ion-ripple-effect",{type:"unbounded"})))}},{key:"el",get:function(){return Object(s.k)(this)}}]),e}();w.style={ios:':host{--background:transparent;--color-focused:currentColor;--border-radius:initial;--padding-top:0;--padding-bottom:0;color:var(--color);text-align:center;text-decoration:none;text-overflow:ellipsis;text-transform:none;white-space:nowrap;-webkit-font-kerning:none;font-kerning:none}.button-native{border-radius:var(--border-radius);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;border:0;outline:none;background:var(--background);line-height:1;cursor:pointer;overflow:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:0;-webkit-appearance:none;-moz-appearance:none;appearance:none}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.button-native{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.button-inner{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;z-index:1}ion-icon{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;pointer-events:none}:host(.menu-button-hidden){display:none}:host(.menu-button-disabled){cursor:default;opacity:0.5;pointer-events:none}:host(.ion-focused) .button-native{color:var(--color-focused)}:host(.ion-focused) .button-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}.button-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0}@media (any-hover: hover){:host(:hover) .button-native{color:var(--color-hover)}:host(:hover) .button-native::after{background:var(--background-hover);opacity:var(--background-hover-opacity, 0)}}:host(.ion-color) .button-native{color:var(--ion-color-base)}:host(.in-toolbar:not(.in-toolbar-color)){color:var(--ion-toolbar-color, var(--color))}:host{--background-focused:currentColor;--background-focused-opacity:.1;--border-radius:4px;--color:var(--ion-color-primary, #3880ff);--padding-start:5px;--padding-end:5px;height:32px;font-size:31px}:host(.ion-activated){opacity:0.4}@media (any-hover: hover){:host(:hover){opacity:0.6}}',md:':host{--background:transparent;--color-focused:currentColor;--border-radius:initial;--padding-top:0;--padding-bottom:0;color:var(--color);text-align:center;text-decoration:none;text-overflow:ellipsis;text-transform:none;white-space:nowrap;-webkit-font-kerning:none;font-kerning:none}.button-native{border-radius:var(--border-radius);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;border:0;outline:none;background:var(--background);line-height:1;cursor:pointer;overflow:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:0;-webkit-appearance:none;-moz-appearance:none;appearance:none}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.button-native{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.button-inner{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;z-index:1}ion-icon{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;pointer-events:none}:host(.menu-button-hidden){display:none}:host(.menu-button-disabled){cursor:default;opacity:0.5;pointer-events:none}:host(.ion-focused) .button-native{color:var(--color-focused)}:host(.ion-focused) .button-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}.button-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0}@media (any-hover: hover){:host(:hover) .button-native{color:var(--color-hover)}:host(:hover) .button-native::after{background:var(--background-hover);opacity:var(--background-hover-opacity, 0)}}:host(.ion-color) .button-native{color:var(--ion-color-base)}:host(.in-toolbar:not(.in-toolbar-color)){color:var(--ion-toolbar-color, var(--color))}:host{--background-focused:currentColor;--background-focused-opacity:.12;--background-hover:currentColor;--background-hover-opacity:.04;--border-radius:50%;--color:initial;--padding-start:8px;--padding-end:8px;width:48px;height:48px;font-size:24px}:host(.ion-color.ion-focused)::after{background:var(--ion-color-base)}@media (any-hover: hover){:host(.ion-color:hover) .button-native::after{background:var(--ion-color-base)}}'};var x=function(){function e(t){var n=this;i(this,e),Object(s.o)(this,t),this.visible=!1,this.autoHide=!0,this.onClick=function(){return h.a.toggle(n.menu)}}var o;return r(e,[{key:"connectedCallback",value:function(){this.visibilityChanged()}},{key:"visibilityChanged",value:(o=n(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y(this.menu);case 2:this.visible=t.sent;case 3:case"end":return t.stop()}},t,this)})),function(){return o.apply(this,arguments)})},{key:"render",value:function(){var e,n=Object(d.b)(this),i=this.autoHide&&!this.visible;return Object(s.j)(s.c,{onClick:this.onClick,"aria-hidden":i?"true":null,class:(e={},t(e,n,!0),t(e,"menu-toggle-hidden",i),e)},Object(s.j)("slot",null))}}]),e}();x.style=":host(.menu-toggle-hidden){display:none}"}}])}();