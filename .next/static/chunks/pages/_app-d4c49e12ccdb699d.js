(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{2814:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(2848)}])},1842:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,n,r){return!1},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2906:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(9165).Z,o=n(17).Z,l=r(n(9953)),u=n(2343),a=n(7868),s=n(5347),c=n(2410),i=n(6959),f=n(3948),d=n(2312),p=n(329),h=n(1842),m=n(4671);let v=new Set;function y(e,t,n,r,o){if(o||a.isLocalURL(t)){if(!r.bypassPrefetchedCheck){let o=void 0!==r.locale?r.locale:"locale"in e?e.locale:void 0,l=t+"%"+n+"%"+o;if(v.has(l))return;v.add(l)}Promise.resolve(e.prefetch(t,n,r)).catch(e=>{})}}function b(e){return"string"==typeof e?e:s.formatUrl(e)}let x=l.default.forwardRef(function(e,t){let n,r;let{href:s,as:v,children:x,prefetch:g,passHref:j,replace:_,shallow:C,scroll:M,locale:E,onClick:k,onMouseEnter:w,onTouchStart:O,legacyBehavior:P=!1}=e,N=o(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);n=x,P&&("string"==typeof n||"number"==typeof n)&&(n=l.default.createElement("a",null,n));let L=!1!==g,T=l.default.useContext(f.RouterContext),R=l.default.useContext(d.AppRouterContext),I=null!=T?T:R,S=!T,{href:A,as:H}=l.default.useMemo(()=>{if(!T){let e=b(s);return{href:e,as:v?b(v):e}}let[e,t]=u.resolveHref(T,s,!0);return{href:e,as:v?u.resolveHref(T,v):t||e}},[T,s,v]),U=l.default.useRef(A),D=l.default.useRef(H);P&&(r=l.default.Children.only(n));let K=P?r&&"object"==typeof r&&r.ref:t,[B,F,X]=p.useIntersection({rootMargin:"200px"}),Z=l.default.useCallback(e=>{(D.current!==H||U.current!==A)&&(X(),D.current=H,U.current=A),B(e),K&&("function"==typeof K?K(e):"object"==typeof K&&(K.current=e))},[H,K,A,X,B]);l.default.useEffect(()=>{I&&F&&L&&y(I,A,H,{locale:E},S)},[H,A,F,E,L,null==T?void 0:T.locale,I,S]);let q={ref:Z,onClick(e){P||"function"!=typeof k||k(e),P&&r.props&&"function"==typeof r.props.onClick&&r.props.onClick(e),I&&!e.defaultPrevented&&function(e,t,n,r,o,u,s,c,i,f){let{nodeName:d}=e.currentTarget,p="A"===d.toUpperCase();if(p&&(function(e){let t=e.currentTarget,n=t.getAttribute("target");return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!i&&!a.isLocalURL(n)))return;e.preventDefault();let h=()=>{"beforePopState"in t?t[o?"replace":"push"](n,r,{shallow:u,locale:c,scroll:s}):t[o?"replace":"push"](r||n,{forceOptimisticNavigation:!f})};i?l.default.startTransition(h):h()}(e,I,A,H,_,C,M,E,S,L)},onMouseEnter(e){P||"function"!=typeof w||w(e),P&&r.props&&"function"==typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),I&&(L||!S)&&y(I,A,H,{locale:E,priority:!0,bypassPrefetchedCheck:!0},S)},onTouchStart(e){P||"function"!=typeof O||O(e),P&&r.props&&"function"==typeof r.props.onTouchStart&&r.props.onTouchStart(e),I&&(L||!S)&&y(I,A,H,{locale:E,priority:!0,bypassPrefetchedCheck:!0},S)}};if(c.isAbsoluteUrl(H))q.href=H;else if(!P||j||"a"===r.type&&!("href"in r.props)){let e=void 0!==E?E:null==T?void 0:T.locale,t=(null==T?void 0:T.isLocaleDomain)&&h.getDomainLocale(H,e,null==T?void 0:T.locales,null==T?void 0:T.domainLocales);q.href=t||m.addBasePath(i.addLocale(H,e,null==T?void 0:T.defaultLocale))}return P?l.default.cloneElement(r,q):l.default.createElement("a",Object.assign({},N,q),n)});t.default=x,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},329:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){let{rootRef:t,rootMargin:n,disabled:s}=e,c=s||!l,[i,f]=r.useState(!1),d=r.useRef(null),p=r.useCallback(e=>{d.current=e},[]);r.useEffect(()=>{if(l){if(c||i)return;let e=d.current;if(e&&e.tagName){let r=function(e,t,n){let{id:r,observer:o,elements:l}=function(e){let t;let n={root:e.root||null,margin:e.rootMargin||""},r=a.find(e=>e.root===n.root&&e.margin===n.margin);if(r&&(t=u.get(r)))return t;let o=new Map,l=new IntersectionObserver(e=>{e.forEach(e=>{let t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e);return t={id:n,observer:l,elements:o},a.push(n),u.set(n,t),t}(n);return l.set(e,t),o.observe(e),function(){if(l.delete(e),o.unobserve(e),0===l.size){o.disconnect(),u.delete(r);let e=a.findIndex(e=>e.root===r.root&&e.margin===r.margin);e>-1&&a.splice(e,1)}}}(e,e=>e&&f(e),{root:null==t?void 0:t.current,rootMargin:n});return r}}else if(!i){let e=o.requestIdleCallback(()=>f(!0));return()=>o.cancelIdleCallback(e)}},[c,n,t,i,d.current]);let h=r.useCallback(()=>{f(!1)},[]);return[p,i,h]};var r=n(9953),o=n(6507);let l="function"==typeof IntersectionObserver,u=new Map,a=[];("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2848:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return a}});var r=n(1874);n(7489),n(9953);var o=n(9659),l=n.n(o);function u(){return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("header",{class:"text-gray-600 body-font",children:(0,r.jsxs)("div",{class:"container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center",children:[(0,r.jsx)("a",{class:"flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0",children:(0,r.jsx)("span",{class:"ml-3 text-xl",children:"<Hunting Coder/>"})}),(0,r.jsxs)("nav",{class:"md:ml-auto flex flex-wrap items-center text-base justify-center",children:[(0,r.jsx)(l(),{href:"/",children:(0,r.jsx)("li",{className:"cursor-pointer list-none mr-5  ",children:"Home"})}),(0,r.jsxs)(l(),{href:"/blog",children:[(0,r.jsx)("li",{className:"cursor-pointer mr-5 list-none ",children:"Blogs"}),"    "]}),(0,r.jsxs)(l(),{href:"/contact",children:[(0,r.jsx)("li",{className:"cursor-pointer  mr-5 list-none",children:"Contact"})," "]}),(0,r.jsx)(l(),{href:"/about",children:(0,r.jsx)("li",{className:"cursor-pointer mr-5 list-none ",children:"About us"})})]})]})})})}function a(e){let{Component:t,pageProps:n}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(u,{}),(0,r.jsx)(t,{...n})]})}},7489:function(){},9659:function(e,t,n){e.exports=n(2906)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(2814),t(969)}),_N_E=e.O()}]);