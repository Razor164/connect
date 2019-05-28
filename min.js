// /*!
//  * ··· Chatra | https://chatra.io/
//  */
// !function (a, b) {
//     function c() {
//     }
//
//     function d(a, b) {
//         a = a || {}, b = b || {};
//         for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c]);
//         return a
//     }
//
//     function e(a) {
//         var b = 0;
//         for (var c in a) a.hasOwnProperty(c) && b++;
//         return b
//     }
//
//     function f(a, b) {
//         if (e(a) != e(b)) return !1;
//         for (var c in a) if (a.hasOwnProperty(c) && b[c] != a[c]) return !1;
//         return !0
//     }
//
//     function g(a, b) {
//         new RegExp("(\\s|^)" + b + "(\\s|$)").test(a.className) || (a.className += " " + b)
//     }
//
//     function h(a, b) {
//         a.className = a.className.replace(new RegExp("(\\s+|^)" + b + "(\\s+|$)", "g"), " ").replace(/^\s+|\s+$/g, "")
//     }
//
//     function i(a) {
//         a.parentNode && a.parentNode.removeChild(a)
//     }
//
//     function j(a) {
//         var c = ["Webkit", "Moz", "ms"], d = b.createElement("div");
//         if (void 0 !== d.style[a]) return !0;
//         a = a.charAt(0).toUpperCase() + a.slice(1);
//         for (var e in c) if (void 0 !== d.style[c[e] + a]) return !0;
//         return !1
//     }
//
//     function k(a, b, c, d) {
//         return b ? (a.addEventListener(b, c, !!d), function () {
//             l(a, b, c, d)
//         }) : void 0
//     }
//
//     function l(a, b, c, d) {
//         b && a.removeEventListener(b, c, !!d)
//     }
//
//     function m(a, c) {
//         var d = new Date;
//         d.setTime(d.getTime() + 31536e7), b.cookie = a + "=" + c + ";expires=" + d.toGMTString() + ";"
//     }
//
//     function n(a) {
//         var c = b.cookie.split(";");
//         a += "=";
//         for (var d = 0; d < c.length; d++) {
//             for (var e = c[d]; " " == e.charAt(0);) e = e.substring(1);
//             if (0 == e.indexOf(a)) return e.substring(a.length, e.length)
//         }
//     }
//
//     function o(a) {
//         a.preventDefault ? a.preventDefault() : a.returnValue = !1
//     }
//
//     function p(a, b) {
//         return null == b && (b = a, a = 0), a + Math.floor(Math.random() * (b - a + 1))
//     }
//
//     function q(a) {
//         return a % 2 == 1
//     }
//
//     function r(b) {
//         var c = !0;
//         for (var d in b) b.hasOwnProperty(d) && !{
//             string: 1,
//             "boolean": 1,
//             number: 1
//         }[typeof b[d]] && null !== b[d] && (a.console && a.console.warn && a.console.warn("Chatra integration error: We accept Strings, Numbers, Booleans and null as integration property values. `" + d + "`’s type is `" + typeof b[d] + "`."), c = !1);
//         return c
//     }
//
//     function s(a) {
//         for (var b in a) null !== a[b] && (a[b] = a[b].toString());
//         return a
//     }
//
//     function t(a) {
//         if (!a) return {};
//         var b = document.createElement("a");
//         return b.href = a, b
//     }
//
//     function u() {
//         var a;
//         try {
//             a = b.querySelector('meta[name="viewport" i]')
//         } catch (c) {
//             a = b.querySelector('meta[name="viewport"]')
//         }
//         return a
//     }
//
//     function v() {
//         function e(a) {
//             return function () {
//                 B[a].apply(B, arguments)
//             }
//         }
//
//         var l = function () {
//             arguments.length && ("function" == typeof l[arguments[0]] && "_" != arguments[0][0] ? l[arguments[0]].apply(l, Array.prototype.slice.call(arguments, 1)) : console.warn("Chatra: No such method: " + arguments[0]))
//         }, B = l;
//         d(l, {
//             _init: function () {
//                 if (!a.ChatraID) return void console.warn("Chatra: No ChatraID specified, shutting down");
//                 if (w) {
//                     var c = B._sniff = w(a.navigator.userAgent), d = B._setup = a.ChatraSetup || {},
//                         e = B._displayMode = d.mode || "widget";
//                     if (B._isMobile = c.features.mobile, "trident" == c.browser.engine && c.browser.majorVersion && c.browser.majorVersion <= 9) return void B.kill();
//                     if (B._isSafari = "safari" === c.browser.name || "ios" === c.os.name, "widget" == e && d.mobileOnly === !0 && !B._isMobile) return void B.kill();
//                     if ("widget" == e && d.disabledOnMobile === !0 && B._isMobile) return void B.kill();
//                     B._features = {transform: j("transform"), transition: j("transition")};
//                     var f = B._iframe = b.createElement("iframe"), g = B._wrapper = b.createElement("div"),
//                         h = B._iframeWrapper = b.createElement("div"), i = B._style = b.createElement("style"),
//                         k = b.getElementsByTagName("head")[0], l = a.ChatraProtocol || "https:",
//                         m = a.ChatraHost || "chat.chatra.io", n = a.ChatraID, p = B._clientId = B._getClientId(),
//                         q = function (c) {
//                             var e = function () {
//                                 f || (!B._killed && c(), f = !0)
//                             }, f = !1;
//                             d.deferredLoading ? "complete" === b.readyState ? e() : a.addEventListener("load", e, !1) : (b.attachEvent ? "complete" === b.readyState : "loading" !== b.readyState) ? e() : (b.addEventListener("DOMContentLoaded", e, !1), a.addEventListener("load", e, !1))
//                         };
//                     B._isSafari && B._addClass("safari"), k.appendChild(i), i.textContent = x, f.setAttribute("frameborder", "0"), f.setAttribute("id", "chatra__iframe"), f.setAttribute("allowtransparency", "true"), f.setAttribute("title", "Chatra live chat"), f.setAttribute("allow", "autoplay"), g.setAttribute("id", "chatra"), h.setAttribute("id", "chatra__iframe-wrapper"), B._addAutoRemovableEvent(a, "message", function (a) {
//                         if (B._iframe.contentWindow === a.source) {
//                             var b;
//                             try {
//                                 b = JSON.parse(a.data)
//                             } catch (c) {
//                                 return
//                             }
//                             b && b.type && "string" == typeof b.type && "Chatra" === b.sender && B._messageHandler(b.type, b.data)
//                         }
//                     }), B._addAutoRemovableEvent(a, "focus", function () {
//                         B._postMessage("focus")
//                     }), B._addAutoRemovableEvent(a, "blur", function () {
//                         B._postMessage("blur")
//                     }), B._addAutoRemovableEvent(a, "mousedown", function () {
//                         B._postMessage("mousedown")
//                     }), B._addAutoRemovableEvent(a, "keyup", function () {
//                         B._postMessage("keyup")
//                     }), d.groupId = window.ChatraGroupID || d.groupId, B._setReferrer();
//                     var r = (navigator.language || navigator.userLanguage || "en").split("-")[0],
//                         s = encodeURIComponent(b.referrer), u = encodeURIComponent(B._referrer);
//                     if ("trident" == c.browser.engine || "edgehtml" == c.browser.engine) {
//                         if (s.length > 800) {
//                             var v = t(b.referrer);
//                             s = encodeURIComponent(v.protocol + "//" + v.host)
//                         }
//                         if (u.length > 800) {
//                             var y = t(B._referrer);
//                             u = encodeURIComponent(y.protocol + "//" + y.host)
//                         }
//                     }
//                     var z = "hostId=" + n + "&mode=" + encodeURIComponent(e) + "#clientId=" + p + ("undefined" != typeof d.groupId ? "&groupId=" + d.groupId : "") + (B._isMobile ? "&isMobile=1" : "") + (d.buttonStyle ? "&buttonType=" + d.buttonStyle : "") + (d.language && "string" == typeof d.language ? "&langOverride=" + d.language : "") + "&lang=" + r + "&currentPage=" + encodeURIComponent(location.href) + "&currentPageTitle=" + encodeURIComponent(b.title) + "&prevPage=" + s + "&referrer=" + u,
//                         C = l + "//" + m + "/?" + z;
//                     switch (e) {
//                         case"frame":
//                             var D, E = d.injectTo;
//                             if (!E) return console.warn("Chatra: `ChatraSetup.injectTo` is required when using `frame` mode!"), void B.kill();
//                             q(function () {
//                                 return "string" == typeof E ? D = b.getElementById(E) : E[0] && E[0].appendChild ? D = E[0] : E.appendChild && (D = E), D ? (f.src = C, f.className = "chatra__iframe--mode-frame", D.innerHTML = "", D.appendChild(f), void (B._attachedToDom = !0)) : (console.warn("Chatra: something is wrong with your `ChatraSetup.injectTo`"), void B.kill())
//                             });
//                             break;
//                         default:
//                             B._isMobile && B._addClass("mobile-widget"), B._setButtonType("tab"), B._setChatPosition("br"), f.src = C, f.style.position = "absolute", h.appendChild(f), g.appendChild(h), q(function () {
//                                 if ("webkit" == c.browser.engine && B._addAutoRemovableEvent(g, "wheel", function (a) {
//                                     B._chatExpanded && o(a)
//                                 }), B._isMobile && B._features.transform) {
//                                     setTimeout(function () {
//                                         B._adjustZoomLevel()
//                                     }, 100);
//                                     var d = B._adjustZoomLevel.bind(B);
//                                     B._addAutoRemovableEvent(b.body, "touchend", d), B._addAutoRemovableEvent(a, "scroll", d), B._addAutoRemovableEvent(a, "orientationchange", d), B._addAutoRemovableEvent(a, "resize", d)
//                                 }
//                                 if (b.body.appendChild(g), B._attachedToDom = !0, a.Shopify && "function" == typeof a.doShift) {
//                                     var e = a.doShift;
//                                     a.doShift = function () {
//                                         var a, b = g.style.position;
//                                         return g.style.position = "absolute", a = e.apply(this, arguments), g.style.position = b, a
//                                     }
//                                 }
//                             })
//                     }
//                     a.ChatraIntegration && B.setIntegrationData(a.ChatraIntegration), d.startHidden && B.hide(), B.setZIndex("number" == typeof d.zIndex ? d.zIndex : B._zIndex), "function" == typeof d.onInit && d.onInit(), d.colors && B.setColors(d.colors), d.chatWidth && B.setChatWidth(d.chatWidth), d.buttonSize && B.setButtonSize(d.buttonSize), d.chatHeight && B.setChatHeight(d.chatHeight), d.buttonPosition && B.setButtonPosition(d.buttonPosition), d.locale && B.setLocale(d.locale), B.pageView();
//                     for (var F = 0; F < A.length; F++) B.apply(B, A[F])
//                 }
//             },
//             _chatWidth: 380,
//             _chatMinWidth: 150,
//             _transparentChatWidth: 300,
//             _mobileTransparentChatWidth: 285,
//             _chatHeight: 600,
//             _labelHeight: 40,
//             _mobileLabelHeight: 40,
//             _roundButtonSize: z,
//             _labelMinWidth: 70,
//             _zIndex: 9999,
//             setIntegrationData: function (a) {
//                 r(a) && B._postMessage("integrationData", s(a))
//             },
//             updateIntegrationData: function (a) {
//                 r(a) && B._postMessage("updateIntegrationData", s(a))
//             },
//             pageView: function () {
//                 var a = {
//                     currentPage: b.location.href,
//                     currentPageTitle: b.title == B._titleBlink.newTitle ? B._titleBlink.originalTitle : b.title,
//                     referrer: B._referrer
//                 };
//                 f(B._lastPageData, a) || (B._lastPageData = a, B._chatReady ? B._sendPageInfo(a) : B._pageInfoQ.push(a), B._setStoredItem("Chatra.lastPageViewAt", +new Date + ""))
//             },
//             setChatWidth: function (a) {
//                 "number" == typeof a && (B._chatWidth = a, B._recalcChatSize())
//             },
//             setButtonSize: function (a) {
//                 "number" == typeof a && (20 > a && (a = 20), B._roundButtonSize = a, B._recalcChatSize())
//             },
//             setChatHeight: function (a) {
//                 "number" == typeof a && (B._chatHeight = a, B._recalcChatSize())
//             },
//             setZIndex: function (a) {
//                 "number" == typeof a && (B._zIndex = a, B._refreshZIndex())
//             },
//             setButtonPosition: function (a) {
//                 return -1 == ["lt", "lm", "lb", "bl", "bc", "br", "rt", "rm", "rb"].indexOf(a) ? void console.warn("Chatra: invalid `positionCode`!") : void B._postMessage("setPosition", a)
//             },
//             resetButtonPosition: function () {
//                 B._postMessage("resetPosition")
//             },
//             setColors: function (a) {
//                 B._postMessage("colors", a)
//             },
//             resetColors: function () {
//                 B._postMessage("resetColors")
//             },
//             setLocale: function (a) {
//                 B._postMessage("setLocale", a)
//             },
//             _openChat: function (a) {
//                 B._postMessage("openChat", !!a)
//             },
//             openChat: function (a) {
//                 "widget" == B._displayMode && B._openChat(!!a)
//             },
//             expandWidget: function (a) {
//                 "widget" == B._displayMode && (B._isMobile || B._openChat(!!a))
//             },
//             minimizeWidget: function () {
//                 "widget" == B._displayMode && B._postMessage("collapseChat")
//             },
//             expandChat: e("expandWidget"),
//             collapseChat: e("minimizeWidget"),
//             closeChat: e("minimizeWidget"),
//             hide: function () {
//                 "widget" == B._displayMode && (B._chatHiddenByUser = !0, B._refreshChatVisibility())
//             },
//             show: function () {
//                 "widget" == B._displayMode && (B._chatHiddenByUser = !1, B._refreshChatVisibility())
//             },
//             hideChat: e("hide"),
//             showChat: e("show"),
//             setGroupId: function (a) {
//                 "undefined" != typeof a && B._postMessage("setGroupId", a)
//             },
//             _messageHandler: function (a, b) {
//                 switch (a) {
//                     case"setHostedItem":
//                         if (!b || "object" != typeof b || "string" != typeof b.key) return;
//                         B._setHostedItem(b.key, b.value);
//                         break;
//                     case"apiReady":
//                         B._apiReady = !0, B._sendMessageQ();
//                         break;
//                     case"readyToRetriveHostedStorage":
//                         B._sendHostedStorage();
//                         break;
//                     case"readyToRetriveData":
//                         B._chatReady = !0, B._sendFocus(), B._resolvePageInfoQ();
//                         break;
//                     case"headerReady":
//                         B._chatRendered = !0, "function" == typeof B._setup.onRendered && B._setup.onRendered();
//                         break;
//                     case"collapseWindow":
//                         B._collapseChatWindow();
//                         break;
//                     case"expandWindow":
//                         B._expandChatWindow(b);
//                         break;
//                     case"hideChat":
//                         B._hideChatFromFrame();
//                         break;
//                     case"showChat":
//                         B._showChatFromFrame();
//                         break;
//                     case"setPosition":
//                         if (!b || "string" != typeof b) return;
//                         B._setChatPosition(b);
//                         break;
//                     case"buttonType":
//                         if (!b || "string" != typeof b) return;
//                         B._setButtonType(b);
//                         break;
//                     case"titleBlink":
//                         B._titleBlink(b);
//                         break;
//                     case"banned":
//                         B._setStoredItem("Chatra.banned", b ? B._clientId : ""), B._refreshChatVisibility();
//                         break;
//                     case"restart":
//                         B.restart();
//                         break;
//                     case"analyticsEvent":
//                         if (!b) return;
//                         "string" == typeof b ? B._logAnalyticsEvent(b) : "object" == typeof b && B._logAnalyticsEvent(b[0], b[1]);
//                         break;
//                     case"labelWidth":
//                         if ("number" != typeof b && null !== b) return;
//                         B._animating(), B._computedLabelWidth = b, B._recalcChatSize();
//                         break;
//                     case"transparentChatHeight":
//                         if ("number" != typeof b) return;
//                         B._transparentChatHeight = b, B._recalcChatSize();
//                         break;
//                     case"s":
//                         B.kill()
//                 }
//             },
//             _hideChatFromFrame: function () {
//                 B._chatHiddenByFrame = !0, B._refreshChatVisibility()
//             },
//             _showChatFromFrame: function () {
//                 B._chatHiddenByFrame = !1, B._refreshChatVisibility()
//             },
//             _getScaleLevel: function () {
//                 var c, d = a.screen, e = d.width;
//                 return {
//                     90: 1,
//                     "-90": 1
//                 }[a.orientation] && "winphone" == B._sniff.os.name && "trident" == B._sniff.browser.engine && (e = d.height), c = e < b.documentElement.clientWidth ? a.innerWidth / e : a.innerWidth / b.documentElement.clientWidth
//             },
//             _adjustZoomLevel: function () {
//                 if (B._isMobile && B._features.transform && ("webkit" != B._sniff.browser.engine || "ios" != B._sniff.os.name)) {
//                     var a = 1;
//                     B._chatExpanded && !B._chatTransparent || (a = B._getScaleLevel()), 1.1 > a && (a = 1), a = a.toFixed(2), a != B._scale && (B._transform.scale = a, B._recalcTransform(), B._scale = a)
//                 }
//             },
//             _transform: {},
//             _recalcTransform: function () {
//                 var a = (B._transform, "");
//                 for (var b in B._transform) B._transform[b] && B._transform.hasOwnProperty(b) && (a += " " + b + "(" + B._transform[b] + ")");
//                 a || (a = "none"), B._wrapper.style.transform = B._wrapper.style.WebkitTransform = B._wrapper.style.MozTransform = B._wrapper.style.msTransform = a
//             },
//             _refreshZIndex: function () {
//                 B._wrapper.style.zIndex = B._chatExpanded ? 2147483647 : B._zIndex
//             },
//             _refreshChatVisibility: function () {
//                 !B._chatRendered || B._chatHiddenByUser || B._chatHiddenByFrame || B._getStoredItem("Chatra.banned") === B._clientId ? (B._visible = !1, B._removeClass("visible"), B._postMessage("visible", !1)) : (B._visible = !0, B._addClass("visible"), B._postMessage("visible", !0), B._isSafari && B._safariForceRedraw()), B._refreshMobileBodyFix(), B._refreshMobileViewportFix()
//             },
//             _refreshMobileBodyFix: function () {
//                 if (B._isMobile && "widget" == B._displayMode) if (B._visible && B._chatExpanded && !B._chatTransparent) {
//                     if (B._mobileBodyFixEnabled) return;
//                     B._lastScrollTop = a.pageYOffset, B._lastScrollLeft = a.pageXOffset, g(b.body, "chatra-mobile-widget-expanded"), g(b.documentElement, "chatra-mobile-widget-expanded"), B._mobileBodyFixEnabled = !0
//                 } else {
//                     if (!B._mobileBodyFixEnabled) return;
//                     h(b.body, "chatra-mobile-widget-expanded"), h(b.documentElement, "chatra-mobile-widget-expanded"), a.scrollTo(B._lastScrollLeft, B._lastScrollTop), B._mobileBodyFixEnabled = !1
//                 }
//             },
//             _refreshMobileViewportFix: function () {
//                 if (B._isMobile && "widget" == B._displayMode && ("android" == B._sniff.os.name && "webkit" == B._sniff.browser.engine && B._sniff.os.majorVersion >= 4 || "ios" == B._sniff.os.name && "webkit" == B._sniff.browser.engine || "gecko" == B._sniff.browser.engine)) if (B._visible && B._chatExpanded && !B._chatTransparent) {
//                     var a = u();
//                     a || (a = b.createElement("meta"), a.setAttribute("name", "viewport"), document.head.appendChild(a)), B._lastMetaViewportValue = a.getAttribute("content") || "width=none", a.setAttribute("content", "width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no")
//                 } else {
//                     var a = u();
//                     a && "string" == typeof B._lastMetaViewportValue && a.setAttribute("content", B._lastMetaViewportValue)
//                 }
//             },
//             _chatExpanded: !1,
//             _expandChatWindow: function (a) {
//                 var b = B._chatTransparent;
//                 B._chatExpanded = !0, B._addClass("expanded"), a ? (B._chatTransparent = !0, B._addClass("transparent")) : (B._chatTransparent = !1, B._removeClass("transparent")), B._refreshZIndex(), B._adjustZoomLevel(), B._isToggling = !0, B._addClass("toggling"), B._animating(function () {
//                     B._isToggling = !1, B._removeClass("toggling"), B._isSafari && B._recalcChatSize(), B._refreshMobileViewportFix(), setTimeout(B._refreshMobileBodyFix.bind(B), 250)
//                 }, b), B._recalcChatSize()
//             },
//             _collapseChatWindow: function () {
//                 var a = B._chatTransparent;
//                 B._chatExpanded = !1, B._chatTransparent = !1, B._refreshMobileViewportFix(), B._refreshMobileBodyFix(), B._removeClass("expanded"), B._removeClass("transparent"), B._isToggling = !0, B._addClass("toggling"), B._animating(function () {
//                     B._isToggling = !1, B._removeClass("toggling"), B._isSafari && B._recalcChatSize(), B._adjustZoomLevel(), B._refreshZIndex()
//                 }, a), B._recalcChatSize()
//             },
//             _animating: function (a, b) {
//                 if (!B._features.transition || !B._chatRendered) return void (a && a());
//                 if ("round" == B._buttonType || B._isMobile || B._chatTransparent || b) return B._addClass("fast-toggle"), void (a && a());
//                 B._removeClass("fast-toggle"), B._addClass("animating"), clearTimeout(B._animatingTimer);
//                 var c = y + 30;
//                 B._animatingTimer = setTimeout(function () {
//                     B._removeClass("animating"), a && a()
//                 }, c)
//             },
//             _setChatPosition: function (a) {
//                 var b = {r: "right", l: "left", c: "center", t: "top", b: "bottom", m: "middle"}, c = b[a.charAt(0)],
//                     d = b[a.charAt(1)];
//                 if (B._isMobile) {
//                     var e = ["0%", "0%"];
//                     "center" == d && (e[0] = "50%"), "right" != d && "right" != c || (e[0] = "100%"), "middle" == d && (e[1] = "50%"), "bottom" == d && (e[1] = "100%"), "bottom" == c && (e[1] = "100%"), B._wrapper.style.transformOrigin = B._wrapper.style.WebkitTransformOrigin = B._wrapper.style.MozTransformOrigin = B._wrapper.style.msTransformOrigin = e.join(" ")
//                 }
//                 B._side && B._removeClass("side-" + B._side), B._position && B._removeClass("pos-" + B._position), B._addClass("side-" + c), B._addClass("pos-" + d), B._side = c, B._position = d, B._recalcChatSize()
//             },
//             _setButtonType: function (a) {
//                 B._buttonType && B._removeClass("style-" + B._buttonType), B._addClass("style-" + a), B._buttonType = a, B._recalcChatSize()
//             },
//             _recalcChatSize: function () {
//                 var a, b, c = Math.max(B._chatWidth, B._chatMinWidth), d = B._chatHeight,
//                     e = Math.max(B._computedLabelWidth || B._chatWidth, B._labelMinWidth),
//                     f = B._chatExpanded && B._isMobile && !B._chatTransparent, g = !!{left: 1, right: 1}[B._side];
//                 B._iframe.style.width = Math.max(c, g ? 0 : e) + "px", B._iframe.style.height = Math.max(d, g ? e : 0) + "px", B._chatExpanded ? B._chatTransparent ? (a = B._isMobile ? B._mobileTransparentChatWidth : B._transparentChatWidth, b = B._transparentChatHeight ? Math.min(B._transparentChatHeight, d) : d) : (a = c, b = d) : "round" == B._buttonType ? a = b = B._roundButtonSize : (a = e, b = B._isMobile ? B._mobileLabelHeight : B._labelHeight, g && (b = [a, a = b][0])), "center" == B._position && !f && q(a) && a++, "middle" == B._position && !B._chatExpanded && q(b) && b++, f ? (B._wrapper.style.width = "100%", B._wrapper.style.height = "100%") : (B._wrapper.style.width = a + "px", B._wrapper.style.height = b + "px"), "middle" != B._position || B._chatExpanded ? "top" != B._position || B._chatExpanded || "round" == B._buttonType ? B._transform.translateY = void 0 : B._transform.translateY = B._isToggling && B._isSafari ? b + "px" : "100%" : B._transform.translateY = B._isToggling && B._isSafari ? b / 2 + "px" : "50%", "center" != B._position || f ? B._transform.translateX = void 0 : B._transform.translateX = "-50%", B._recalcTransform()
//             },
//             _postMessageQ: [],
//             _postMessage: function (a, b) {
//                 B._apiReady ? B._iframe.contentWindow && B._iframe.contentWindow.postMessage(JSON.stringify({
//                     type: a,
//                     data: b,
//                     sender: "Chatra"
//                 }), "*") : B._postMessageQ.push([a, b])
//             },
//             _sendMessageQ: function () {
//                 for (; B._postMessageQ.length;) B._postMessage.apply(B, B._postMessageQ.shift())
//             },
//             _pageInfoQ: [],
//             _resolvePageInfoQ: function () {
//                 for (; B._pageInfoQ.length;) B._sendPageInfo(B._pageInfoQ.shift())
//             },
//             _sendPageInfo: function (a) {
//                 B._postMessage("clientData", a)
//             },
//             _sendFocus: function () {
//                 var a = b.hasFocus ? b.hasFocus() : !0;
//                 B._postMessage(a ? "focus" : "blur")
//             },
//             _getClientId: function () {
//                 var a = B._getStoredItem("Chatra.clientId"), b = B._setup.clientId;
//                 if (b) {
//                     var c = typeof b;
//                     "string" !== c && "number" !== c || (a = b)
//                 }
//                 if (a) return a;
//                 for (var d = (+new Date + "").split(""), e = "abcdefghijklmnopqrstuvwxyz".split(""); e.length;) d.splice(p(d.length - 1), 0, e.splice(p(e.length - 1), 1)[0]);
//                 return a = d.join(""), B._setStoredItem("Chatra.clientId", a), a
//             },
//             _setReferrer: function () {
//                 var a = b.referrer;
//                 if (a && t(a).host !== location.host) B._referrer = a; else {
//                     var c = +(B._getStoredItem("Chatra.lastPageViewAt") || "");
//                     new Date - c > 36e5 ? B._referrer = a : B._referrer = B._getStoredItem("Chatra.referrer") || ""
//                 }
//                 B._setStoredItem("Chatra.referrer", B._referrer || "")
//             },
//             _getHostedStorage: function () {
//                 var a;
//                 try {
//                     a = JSON.parse(B._getStoredItem("Chatra.hostedItems"))
//                 } catch (b) {
//                     a = {}, B._setStoredItem("Chatra.hostedItems", "{}")
//                 }
//                 return a
//             },
//             _sendHostedStorage: function () {
//                 B._postMessage("hostedStorage", B._getHostedStorage())
//             },
//             _setHostedItem: function (a, b) {
//                 if ("string" == typeof a) {
//                     var c = B._getHostedStorage();
//                     c[a] = b, B._setStoredItem("Chatra.hostedItems", JSON.stringify(c))
//                 }
//             },
//             _getStoredItem: function (a) {
//                 var b;
//                 try {
//                     b = localStorage.getItem(a)
//                 } catch (c) {
//                 }
//                 return b || n(a)
//             },
//             _setStoredItem: function (a, b) {
//                 try {
//                     localStorage.setItem(a, b)
//                 } catch (c) {
//                     m(a, b)
//                 }
//             },
//             _addClass: function (a) {
//                 for (var b = B._wrapper, c = [].concat(a), d = c.length - 1; d >= 0; d--) g(b, "chatra--" + c[d])
//             },
//             _removeClass: function (a) {
//                 for (var b = B._wrapper, c = [].concat(a), d = c.length - 1; d >= 0; d--) h(b, "chatra--" + c[d])
//             },
//             _safariForceRedraw: function () {
//                 B._wrapper.style.zIndex = B._zIndex - 1, B._wrapper.offsetWidth, B._refreshZIndex()
//             },
//             _titleBlink: function (a) {
//                 clearTimeout(B._titleBlink._timeout), B._titleBlink.originalNow && a ? (B._titleBlink.originalTitle = b.title, b.title = B._titleBlink.newTitle = a) : (b.title !== B._titleBlink.newTitle && (B._titleBlink.originalTitle = b.title), b.title = B._titleBlink.originalTitle), B._titleBlink.originalNow = !a || !B._titleBlink.originalNow, a && (B._titleBlink._timeout = setTimeout(function () {
//                     B._titleBlink(a)
//                 }, p(1e3, 2e3)))
//             },
//             _logAnalyticsEvent: function (b, c) {
//                 if (c = c || {custom: !0, metrika: !0, ga: !0}, c.custom) try {
//                     "function" == typeof B._setup.onAnalyticEvent && B._setup.onAnalyticEvent(b)
//                 } catch (d) {
//                     console.warn("Chatra: Error while trying to execute `ChatraSetup.onAnalyticEvent` function:", d)
//                 }
//                 if (c.ga) try {
//                     var e;
//                     if (a.GoogleAnalyticsObject && "function" == typeof a[a.GoogleAnalyticsObject] ? e = a[a.GoogleAnalyticsObject] : "function" == typeof a.ga && (e = a.ga), e) if (B._setup.gaTrackerName) {
//                         if ("function" == typeof e.getByName) {
//                             var f = e.getByName(B._setup.gaTrackerName);
//                             f && "function" == typeof f.send && f.send("event", "Chatra", b), f || console.warn("Chatra: Could’t find Google Analytics tracker named “" + B._setup.gaTrackerName + "”.")
//                         }
//                     } else if (B._setup.gaTrackingId) {
//                         if ("function" == typeof e.getAll) {
//                             var g = (e.getAll() || []).some(function (a) {
//                                 return a && "function" == typeof a.get && a.get("trackingId") == B._setup.gaTrackingId ? ("function" == typeof a.send && a.send("event", "Chatra", b), !0) : void 0
//                             });
//                             g || console.warn("Chatra: Could’t find Google Analytics tracker with tracking ID “" + B._setup.gaTrackingId + "”.")
//                         }
//                     } else {
//                         var f = "function" == typeof e.getAll ? (e.getAll() || [])[0] : void 0;
//                         f && "function" == typeof f.send ? f.send("event", "Chatra", b) : e("send", "event", "Chatra", b)
//                     } else a._gaq && "function" == typeof a._gaq.push && a._gaq.push(["_trackEvent", "Chatra", b])
//                 } catch (d) {
//                     console.warn("Chatra: Error while trying to create Google Analytics event:", d)
//                 }
//                 if (c.metrika) try {
//                     var h;
//                     if (B._setup.yaCounterId) a["yaCounter" + B._setup.yaCounterId] ? h = a["yaCounter" + B._setup.yaCounterId] : console.warn("Chatra: Could’t find Yandex Metrika counter with ID “" + B._setup.yaCounterId + "”."); else {
//                         var i = a.Ya && (a.Ya.Metrika || a.Ya.Metrika2),
//                             j = i && "function" == typeof i.counters && i.counters(), k = j && j[0] && j[0].id;
//                         k && a["yaCounter" + k] && (h = a["yaCounter" + k])
//                     }
//                     h && h.reachGoal && h.reachGoal("Chatra_" + b.replace(/\s/g, "_"))
//                 } catch (d) {
//                     console.warn("Chatra: Error while trying to create Yandex.Metrika event:", d)
//                 }
//             },
//             _eventRemovers: [],
//             _addAutoRemovableEvent: function () {
//                 B._eventRemovers.push(k.apply(B, arguments))
//             },
//             _cleanEventListeners: function () {
//                 for (var a = B._eventRemovers.length - 1; a >= 0; a--) B._eventRemovers[a]()
//             },
//             restart: function () {
//                 B.kill(), v()
//             },
//             kill: function () {
//                 if (!B._killed) {
//                     B._cleanEventListeners(), B._style && (i(B._style), delete B._style), B._iframe && (i(B._iframe), B._iframe.src = "", delete B._iframe), B._iframeWrapper && (i(B._iframeWrapper), delete B._iframeWrapper), B._wrapper && (i(B._wrapper), delete B._wrapper), B._killed = !0;
//                     for (var a in B) B.hasOwnProperty(a) && "function" == typeof B[a] && "restart" != a && (B[a] = c)
//                 }
//             }
//         }), a.Chatra && a.Chatra.kill && a.Chatra.kill(), a.Chatra = l, l._init()
//     }
//
//     var w = function (a) {
//             function b() {
//                 for (var a in g) c(g[a])
//             }
//
//             function c(b) {
//                 for (var c = 0; c < b.length; c++) {
//                     for (var e = !0, f = 0; f < b[c].test.length; f++) if (b[c].test[f] instanceof RegExp) {
//                         if (!b[c].test[f].test(a)) {
//                             e = !1;
//                             break
//                         }
//                     } else if (-1 == a.indexOf(b[c].test[f])) {
//                         e = !1;
//                         break
//                     }
//                     if (e) {
//                         d(b[c]);
//                         break
//                     }
//                 }
//             }
//
//             function d(a) {
//                 for (var b in g) if (g.hasOwnProperty(b) && a[b]) {
//                     if (a[b].$version) {
//                         var c = e(a[b].$version.search);
//                         if (c) {
//                             var d = c.split("."), h = a[b].$version.names, i = a[b].$version.altNames;
//                             if (a[b].version = c, d[0] && (a[b].majorVersion = parseInt(d[0])), d[1] && (a[b].minorVersion = parseInt(d[1])), d[2] && (a[b].patchVersion = parseInt(d[2])), h) for (var j, k = [], l = 0; l < d.length; l++) k.push(d[l]), j = k.join("."), h[j] && (a[b].versionName = h[j]), i && i[j] && (a[b].versionAltNames = i[j])
//                         }
//                     }
//                     for (var m in a[b]) a[b].hasOwnProperty(m) && "$" !== m[0] && (f[b][m] = a[b][m])
//                 }
//             }
//
//             function e(b) {
//                 var c;
//                 if (b instanceof RegExp) {
//                     if (c = (a.match(b) || [])[0], !c) return
//                 } else c = b;
//                 var d, e = a.indexOf(c);
//                 if (-1 != e && (d = a.substring(e + c.length), regexpResult = /^(\d+(\.|_)){0,2}\d+/.exec(d), regexpResult)) return regexpResult[0].replace(/_/g, ".")
//             }
//
//             var f = {
//                 browser: {
//                     fullName: "",
//                     name: "",
//                     version: "",
//                     majorVersion: null,
//                     minorVersion: null,
//                     patchVersion: null,
//                     engine: ""
//                 },
//                 os: {
//                     fullName: "",
//                     name: "",
//                     version: "",
//                     versionName: "",
//                     versionAltNames: [],
//                     majorVersion: null,
//                     minorVersion: null,
//                     patchVersion: null
//                 },
//                 features: {bw: !1, mobile: !1, tv: !1, proxy: !1}
//             }, g = {
//                 browser: [{
//                     test: ["SailfishBrowser"],
//                     browser: {
//                         fullName: "Sailfish Browser",
//                         name: "sailfishbrowser",
//                         engine: "gecko",
//                         $version: {search: "SailfishBrowser/"}
//                     },
//                     features: {mobile: !0}
//                 }, {
//                     test: ["Edge/"],
//                     browser: {fullName: "Edge", name: "edge", engine: "edgehtml", $version: {search: "Edge/"}}
//                 }, {
//                     test: ["MSIE"],
//                     browser: {fullName: "Internet Explorer", name: "ie", engine: "trident", $version: {search: "MSIE "}}
//                 }, {
//                     test: ["Trident"],
//                     browser: {fullName: "Internet Explorer", name: "ie", engine: "trident", $version: {search: "rv:"}}
//                 }, {
//                     test: ["OPR/"],
//                     browser: {fullName: "Opera", name: "opera", engine: "webkit", $version: {search: "OPR/"}}
//                 }, {
//                     test: ["Chrome"],
//                     browser: {fullName: "Chrome", name: "chrome", engine: "webkit", $version: {search: "Chrome/"}}
//                 }, {
//                     test: ["Firefox"],
//                     browser: {fullName: "Firefox", name: "firefox", engine: "gecko", $version: {search: "Firefox/"}}
//                 }, {
//                     test: ["NokiaBrowser"],
//                     browser: {
//                         fullName: "Nokia Browser",
//                         name: "nokiabrowser",
//                         engine: "webkit",
//                         $version: {search: "NokiaBrowser/"}
//                     },
//                     features: {mobile: !0}
//                 }, {
//                     test: ["Opera Mini", "Presto"],
//                     browser: {fullName: "Opera Mini", name: "operamini", engine: "presto", $version: {search: "Version/"}},
//                     features: {mobile: !0, proxy: !0}
//                 }, {
//                     test: ["Opera Mini", "WebKit"],
//                     browser: {fullName: "Opera Mini", name: "operamini", engine: "webkit"},
//                     features: {mobile: !0, proxy: !0}
//                 }, {
//                     test: ["Opera"],
//                     browser: {fullName: "Opera", name: "opera", engine: "presto", $version: {search: "Version/"}}
//                 }, {
//                     test: ["OviBrowser"],
//                     browser: {fullName: "Ovi Browser", name: "ovi", engine: "gecko", $version: {search: "OviBrowser/"}},
//                     features: {mobile: !0, proxy: !0}
//                 }, {
//                     test: ["CriOS/"],
//                     browser: {fullName: "Chrome", name: "chrome", engine: "webkit", $version: {search: "CriOS/"}}
//                 }, {
//                     test: ["Coast/"],
//                     browser: {fullName: "Opera Coast", name: "coast", engine: "webkit", $version: {search: "Coast/"}}
//                 }, {
//                     test: ["Safari", "Version/", /(iPhone|iPod|iPad|Macintosh|Windows)/],
//                     browser: {fullName: "Safari", name: "safari", engine: "webkit", $version: {search: "Version/"}}
//                 }, {test: ["WebKit"], browser: {engine: "webkit"}}, {test: ["Gecko/"], browser: {engine: "gecko"}}],
//                 os: [{
//                     test: ["Sailfish"],
//                     os: {fullName: "Sailfish OS", name: "sailfish"},
//                     features: {mobile: !0}
//                 }, {
//                     test: ["Windows Phone"],
//                     os: {fullName: "Windows Phone", name: "winphone", $version: {search: "Windows Phone "}},
//                     features: {mobile: !0}
//                 }, {
//                     test: ["Windows"],
//                     os: {
//                         fullName: "Windows",
//                         name: "win",
//                         $version: {
//                             search: "Windows NT ",
//                             names: {
//                                 "10.0": "10",
//                                 6.3: "8.1",
//                                 6.2: "8",
//                                 6.1: "7",
//                                 "6.0": "Vista",
//                                 5.2: "XP",
//                                 5.1: "XP",
//                                 5.01: "2000",
//                                 "5.0": "2000"
//                             },
//                             altNames: {5.2: ["Server 2003"]}
//                         }
//                     }
//                 }, {
//                     test: ["Macintosh", "OS X 10"],
//                     os: {
//                         fullName: "Mac OS X",
//                         name: "osx",
//                         $version: {
//                             search: /OS X /,
//                             names: {
//                                 10.6: "Snow Leopard",
//                                 10.7: "Lion",
//                                 10.8: "Mountain Lion",
//                                 10.9: "Mavericks",
//                                 "10.10": "Yosemite",
//                                 10.11: "El Capitan"
//                             }
//                         }
//                     }
//                 }, {test: ["Ubuntu"], os: {fullName: "Ubuntu", name: "ubuntu"}}, {
//                     test: ["Fedora"],
//                     os: {
//                         fullName: "Fedora",
//                         name: "fedora",
//                         $version: {
//                             search: "Fedora/",
//                             names: {
//                                 20: "Heisenbug",
//                                 19: "Schrödinger's Cat",
//                                 18: "Spherical Cow",
//                                 17: "Beefy Miracle",
//                                 16: "Verne",
//                                 15: "Lovelock",
//                                 14: "Laughlin",
//                                 13: "Goddard",
//                                 12: "Constantine",
//                                 11: "Leonidas",
//                                 10: "Cambridge",
//                                 9: "Sulphur",
//                                 8: "Werewolf",
//                                 7: "Moonshine"
//                             }
//                         }
//                     }
//                 }, {
//                     test: ["Kindle"],
//                     os: {fullName: "Kindle", name: "kindle", $version: {search: "Kindle/"}},
//                     features: {bw: !0, mobile: !0}
//                 }, {
//                     test: [/(BlackBerry|BB\d+)/],
//                     os: {fullName: "BlackBerry", name: "blackberry", $version: {search: "Version/"}},
//                     features: {mobile: !0}
//                 }, {
//                     test: ["Symbian"],
//                     os: {fullName: "Symbian", name: "symbian"},
//                     features: {mobile: !0}
//                 }, {
//                     test: ["Series40"],
//                     os: {fullName: "Symbian", name: "symbian"},
//                     features: {mobile: !0}
//                 }, {
//                     test: ["PlayStation Vita"],
//                     os: {fullName: "PlayStation Vita", name: "psvita"},
//                     features: {mobile: !0}
//                 }, {
//                     test: ["Nintendo DSi"],
//                     os: {fullName: "Nintendo DSi", name: "dsi"},
//                     features: {mobile: !0}
//                 }, {
//                     test: ["New Nintendo 3DS"],
//                     os: {fullName: "New Nintendo 3DS", name: "n3ds"},
//                     browser: {engine: "webkit"},
//                     features: {mobile: !0}
//                 }, {
//                     test: ["Nintendo 3DS"],
//                     os: {fullName: "Nintendo 3DS", name: "3ds"},
//                     browser: {engine: "webkit"},
//                     features: {mobile: !0}
//                 }, {
//                     test: ["Viera"],
//                     os: {fullName: "Viera", name: "viera"},
//                     browser: {engine: "webkit"},
//                     features: {tv: !0}
//                 }, {test: ["SonyDTV"], features: {tv: !0}}, {
//                     test: ["Android"],
//                     os: {fullName: "Android", name: "android", $version: {search: "Android "}},
//                     features: {mobile: !0}
//                 }, {
//                     test: [/iPhone|iPod|iPad/],
//                     os: {fullName: "iOS", name: "ios", $version: {search: "OS "}},
//                     features: {mobile: !0}
//                 }],
//                 features: [{test: [/mobile/i], features: {mobile: !0}}, {test: [/smart-{0,1}tv/i], features: {tv: !0}}]
//             };
//             return a ? (b(), f) : f
//         },
//         x = "@-webkit-keyframes chatra-chat-appear-from-bottom{from{opacity:0;-webkit-transform:translateY(20px) scale(.97);transform:translateY(20px) scale(.97)}to{opacity:1;-webkit-transform:translateY(0) scale(1);transform:translateY(0) scale(1)}}@keyframes chatra-chat-appear-from-bottom{from{opacity:0;-webkit-transform:translateY(20px) scale(.97);transform:translateY(20px) scale(.97)}to{opacity:1;-webkit-transform:translateY(0) scale(1);transform:translateY(0) scale(1)}}@-webkit-keyframes chatra-chat-appear-from-top{from{opacity:0;-webkit-transform:translateY(-20px) scale(.97);transform:translateY(-20px) scale(.97)}to{opacity:1;-webkit-transform:translateY(0) scale(1);transform:translateY(0) scale(1)}}@keyframes chatra-chat-appear-from-top{from{opacity:0;-webkit-transform:translateY(-20px) scale(.97);transform:translateY(-20px) scale(.97)}to{opacity:1;-webkit-transform:translateY(0) scale(1);transform:translateY(0) scale(1)}}@-webkit-keyframes chatra-chat-appear{from{opacity:0;-webkit-transform:scale(.95);transform:scale(.95)}to{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@keyframes chatra-chat-appear{from{opacity:0;-webkit-transform:scale(.95);transform:scale(.95)}to{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@-webkit-keyframes chatra-round-button-appear{from{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}to{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@keyframes chatra-round-button-appear{from{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}to{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@-webkit-keyframes chatra-tab-button-appear{from{opacity:0;-webkit-transform:scale(.9);transform:scale(.9)}to{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@keyframes chatra-tab-button-appear{from{opacity:0;-webkit-transform:scale(.9);transform:scale(.9)}to{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@-webkit-keyframes chatra-transparent-appear{from{opacity:0}to{opacity:1}}@keyframes chatra-transparent-appear{from{opacity:0}to{opacity:1}}html.chatra-mobile-widget-expanded,body.chatra-mobile-widget-expanded{overflow:hidden !important;height:100% !important;width:100% !important;position:fixed !important;margin:0 !important;top:0 !important;left:0 !important}#chatra{visibility:hidden;opacity:0;position:fixed;max-height:calc(100% - 40px);max-width:calc(100% - 40px);-webkit-transition:.2s linear;transition:.2s linear;-webkit-transition-property:visibility,opacity;transition-property:visibility,opacity;-webkit-backface-visibility:hidden;backface-visibility:hidden;width:auto;height:auto;min-height:0;min-width:0;display:block;-webkit-box-sizing:content-box;box-sizing:content-box;padding:0;margin:0;}@media print{#chatra{display:none}}#chatra__iframe-wrapper,#chatra__iframe{left:0 !important;top:0 !important;margin:0 !important;padding:0 !important;display:block !important;background:transparent !important}#chatra__iframe-wrapper,#chatra:not(.chatra--toggling) #chatra__iframe,#chatra__iframe.chatra__iframe--mode-frame{height:100% !important;width:100% !important;min-width:100% !important;max-width:100% !important;min-height:100% !important;max-height:100% !important}#chatra__iframe-wrapper{position:absolute;-webkit-box-shadow:0 0 3px rgba(0,0,0,0.1),0 0 10px rgba(0,0,0,0.3);box-shadow:0 0 3px rgba(0,0,0,0.1),0 0 10px rgba(0,0,0,0.3);overflow:hidden !important}#chatra #chatra__iframe-wrapper,#chatra.chatra--safari #chatra__iframe{border-radius:10px}#chatra.chatra--mobile-widget:not(.chatra--expanded),#chatra.chatra--mobile-widget:not(.chatra--expanded) *{cursor:pointer}#chatra.chatra--safari #chatra__iframe{-webkit-mask-image:-webkit-gradient(linear,left top, left bottom,from(#000),to(#000));-webkit-mask-image:linear-gradient(#000,#000);mask-image:-webkit-gradient(linear,left top, left bottom,from(#000),to(#000));mask-image:linear-gradient(#000,#000);-webkit-mask-position:50% 50%;mask-position:50% 50%;-webkit-mask-size:100% 100%;mask-size:100% 100%;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat}#chatra:not(.chatra--expanded) #chatra__iframe-wrapper{-webkit-transition:.2s linear;transition:.2s linear;-webkit-transition-property:-webkit-box-shadow;transition-property:-webkit-box-shadow;transition-property:box-shadow;transition-property:box-shadow, -webkit-box-shadow}#chatra:not(.chatra--expanded):hover #chatra__iframe-wrapper{-webkit-box-shadow:0 0 3px rgba(0,0,0,0.1),0 0 15px rgba(0,0,0,0.4);box-shadow:0 0 3px rgba(0,0,0,0.1),0 0 15px rgba(0,0,0,0.4)}#chatra.chatra--visible{visibility:visible;opacity:1}#chatra.chatra--animating{-webkit-transition:350ms cubic-bezier(.25,.1,0,1);transition:350ms cubic-bezier(.25,.1,0,1);-webkit-transition-property:height,width,max-width,max-height,top,bottom,left,right,-webkit-transform;transition-property:height,width,max-width,max-height,top,bottom,left,right,-webkit-transform;transition-property:height,width,max-width,max-height,top,bottom,left,right,transform;transition-property:height,width,max-width,max-height,top,bottom,left,right,transform,-webkit-transform}#chatra.chatra--style-round:not(.chatra--expanded) #chatra__iframe-wrapper,#chatra.chatra--style-round.chatra--safari:not(.chatra--expanded) #chatra__iframe{border-radius:50%}#chatra.chatra--fast-toggle.chatra--style-round:not(.chatra--expanded) #chatra__iframe-wrapper{-webkit-animation:chatra-round-button-appear 150ms ease-out 50ms both;animation:chatra-round-button-appear 150ms ease-out 50ms both}#chatra.chatra--fast-toggle.chatra--style-tab:not(.chatra--expanded) #chatra__iframe-wrapper{-webkit-animation:chatra-tab-button-appear 150ms ease-out 50ms both;animation:chatra-tab-button-appear 150ms ease-out 50ms both}#chatra.chatra--fast-toggle.chatra--expanded #chatra__iframe-wrapper{-webkit-animation:chatra-chat-appear 150ms ease-out 50ms both;animation:chatra-chat-appear 150ms ease-out 50ms both}#chatra.chatra--fast-toggle.chatra--transparent #chatra__iframe-wrapper{-webkit-animation-name:chatra-transparent-appear;animation-name:chatra-transparent-appear}#chatra.chatra--fast-toggle.chatra--expanded:not(.chatra--mobile-widget):not(.chatra--transparent) #chatra__iframe-wrapper{-webkit-animation-name:chatra-chat-appear-from-bottom;animation-name:chatra-chat-appear-from-bottom}#chatra.chatra--fast-toggle.chatra--pos-top.chatra--expanded:not(.chatra--mobile-widget):not(.chatra--transparent) #chatra__iframe-wrapper{-webkit-animation-name:chatra-chat-appear-from-top;animation-name:chatra-chat-appear-from-top}#chatra.chatra--expanded #chatra__iframe-wrapper{-webkit-box-shadow:0 0 3px rgba(0,0,0,0.1),0 5px 50px rgba(0,0,0,0.2);box-shadow:0 0 3px rgba(0,0,0,0.1),0 5px 50px rgba(0,0,0,0.2)}#chatra.chatra--side-bottom{bottom:20px}#chatra.chatra--side-left{left:20px}#chatra.chatra--side-left.chatra--style-tab:not(.chatra--expanded){left:10px}#chatra.chatra--side-right{right:20px}#chatra.chatra--side-right.chatra--style-tab:not(.chatra--expanded){right:10px}#chatra.chatra--side-left.chatra--expanded{bottom:20px;left:20px}#chatra.chatra--side-right.chatra--expanded{bottom:20px;right:20px}#chatra.chatra--pos-right{right:20px}#chatra.chatra--pos-left{left:20px}#chatra.chatra--pos-center{left:50%}#chatra.chatra--pos-top.chatra--style-tab:not(.chatra--expanded){bottom:100%;margin-bottom:-20px}#chatra.chatra--pos-top.chatra--style-round:not(.chatra--expanded){top:20px}#chatra.chatra--pos-bottom:not(.chatra--expanded){bottom:20px}#chatra.chatra--pos-middle:not(.chatra--expanded){bottom:50%}#chatra.chatra--mobile-widget.chatra--expanded:not(.chatra--transparent){max-width:none;max-height:none;top:0 !important;bottom:0 !important}#chatra.chatra--mobile-widget.chatra--expanded #chatra__iframe-wrapper,#chatra.chatra--safari.chatra--mobile-widget.chatra--expanded #chatra__iframe{border-radius:.1px}#chatra.chatra--mobile-widget.chatra--expanded.chatra--pos-right:not(.chatra--transparent){right:0}#chatra.chatra--mobile-widget.chatra--expanded.chatra--pos-left:not(.chatra--transparent){left:0}#chatra.chatra--mobile-widget.chatra--expanded.chatra--pos-center:not(.chatra--transparent){left:0}#chatra.chatra--mobile-widget.chatra--expanded.chatra--side-right:not(.chatra--transparent){right:0}#chatra.chatra--mobile-widget.chatra--expanded.chatra--side-left:not(.chatra--transparent){left:0}#chatra.chatra--transparent.chatra--expanded{bottom:10px;}#chatra.chatra--transparent.chatra--expanded #chatra__iframe-wrapper{-webkit-box-shadow:none;box-shadow:none}#chatra.chatra--side-left.chatra--transparent,#chatra.chatra--pos-left.chatra--transparent{left:10px}#chatra.chatra--side-right.chatra--transparent,#chatra.chatra--pos-right.chatra--transparent{right:10px}#chatra.chatra--mobile-widget.chatra--transparent{max-height:251px}",
//         y = 350, z = 60, A = [];
//     a.Chatra && a.Chatra.q && (A = a.Chatra.q), v()
// }(window, document);
