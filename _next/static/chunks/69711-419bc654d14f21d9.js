"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[69711],{96404:function(e,n,t){var r=t(63956),o=t(54423),i=t(93981),s=t(25546),a=t(72215),l=t(13170),c=t(13838),d=t(29541),u=["mintAddress","combineWSOL","useWSOL"];function f(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}var x=function(e){var n=e.mintAddress,t=e.combineWSOL,r=e.useWSOL,f=(0,o.Z)(e,u),x=(0,a.FB)(n,f.decimals,r).balance,h=(0,a.x$)().totalWrappedSOL,m=i.useMemo((function(){return n.toString()===l.W4.toString()&&t?new c.Z(h).add(x):new c.Z(x)}),[n,h,x,t]);return f.hideZeroBalance&&m.eq(0)?null:(0,d.jsx)("span",{translate:"no",children:s.uf.format(m)})};n.Z=function(e){return(0,a.gZ)().userAccounts?(0,d.jsx)(x,function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?f(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):f(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({},e)):(0,d.jsx)(d.Fragment,{})}},69825:function(e,n,t){var r=t(54423),o=t(93981),i=t(87821),s=t(72215),a=t(24201),l=t(25546),c=t(29541),d=["testId","name","onChange","onChangeWithoutEffect","customWithValueLimit","value","disabled","decimals","onMouseOver","onFocus","onKeyDown","onPaste","className","placeholder","onBlur","suffix","max","autofocus"],u=o.forwardRef((function(e,n){e.testId;var t=e.name,u=e.onChange,f=e.onChangeWithoutEffect,x=e.customWithValueLimit,h=e.value,m=e.disabled,p=void 0!==m&&m,v=e.decimals,g=e.onMouseOver,b=e.onFocus,w=e.onKeyDown,j=e.onPaste,y=e.className,C=e.placeholder,L=e.onBlur,O=e.suffix,k=e.max,N=e.autofocus,T=void 0!==N&&N,S=(0,r.Z)(e,d),Z=(0,s.MG)().constants.MAX_INPUT_LIMIT,P=o.useMemo((function(){return S.isAllowed||function(e){var n=e.floatValue;return x?!n||x(n):k?!n||n<=Number(k):!n||n<=Z}}),[S.isAllowed,x,k,Z]),M=String(h||"").length>=9?"text-base md:text-xl":"text-xl",W=","===l.A5?".":",",B=","===l.A5?",":".";return(0,c.jsx)(i.Z,{onKeyDown:w,onPaste:j,autoComplete:"off",name:t,inputMode:"decimal",onBlur:L,"data-lpignore":"true",decimalSeparator:B,value:null!==h&&void 0!==h?h:"",allowedDecimalSeparators:[".",","],thousandSeparator:W,decimalScale:v,allowNegative:!1,allowLeadingZeros:!1,disabled:p,isAllowed:P,onChange:function(e){var n=e.target.value,t=(0,l.jj)(n).replaceAll(",","");f&&f(t)},onValueChange:function(e){e.value!==(null===h||void 0===h?void 0:h.toString())&&u&&u(e)},isNumericString:!0,placeholder:p?"":null!==C&&void 0!==C?C:"0.00",className:(0,a.cn)("h-full w-full bg-transparent text-right font-semibold text-white placeholder:text-white/25 disabled:cursor-not-allowed disabled:text-black disabled:opacity-100",M,y),onMouseOver:g,onFocus:b,getInputRef:n,suffix:O,autoFocus:T})}));n.Z=u},11261:function(e,n,t){t.d(n,{x:function(){return j},Z:function(){return C}});var r=t(63956),o=t(97620),i=t(8473),s=t(72215),a=t(93981),l=t(25224),c=t(13838),d=t(13170),u=t(1685),f=t(70700),x=t(25546),h=t(29541),m=function(e){var n=e.width,t=void 0===n?24:n,r=e.height,o=void 0===r?24:r;return(0,h.jsxs)("svg",{width:t,height:o,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,h.jsx)("path",{d:"M13.8179 4.54512L13.6275 4.27845C12.8298 3.16176 11.1702 3.16176 10.3725 4.27845L10.1821 4.54512C9.76092 5.13471 9.05384 5.45043 8.33373 5.37041L7.48471 5.27608C6.21088 5.13454 5.13454 6.21088 5.27608 7.48471L5.37041 8.33373C5.45043 9.05384 5.13471 9.76092 4.54512 10.1821L4.27845 10.3725C3.16176 11.1702 3.16176 12.8298 4.27845 13.6275L4.54512 13.8179C5.13471 14.2391 5.45043 14.9462 5.37041 15.6663L5.27608 16.5153C5.13454 17.7891 6.21088 18.8655 7.48471 18.7239L8.33373 18.6296C9.05384 18.5496 9.76092 18.8653 10.1821 19.4549L10.3725 19.7215C11.1702 20.8382 12.8298 20.8382 13.6275 19.7215L13.8179 19.4549C14.2391 18.8653 14.9462 18.5496 15.6663 18.6296L16.5153 18.7239C17.7891 18.8655 18.8655 17.7891 18.7239 16.5153L18.6296 15.6663C18.5496 14.9462 18.8653 14.2391 19.4549 13.8179L19.7215 13.6275C20.8382 12.8298 20.8382 11.1702 19.7215 10.3725L19.4549 10.1821C18.8653 9.76092 18.5496 9.05384 18.6296 8.33373L18.7239 7.48471C18.8655 6.21088 17.7891 5.13454 16.5153 5.27608L15.6663 5.37041C14.9462 5.45043 14.2391 5.13471 13.8179 4.54512Z",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,h.jsx)("path",{d:"M9 12L10.8189 13.8189V13.8189C10.9189 13.9189 11.0811 13.9189 11.1811 13.8189V13.8189L15 10",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})},p=t(70006),v=t(59978),g=t(96404);function b(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function w(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?b(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):b(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var j=72,y=function(e){var n=e.renderedTag,t=e.remainingTags,r=e.apyInPercent;if(!n)return null;var o=n.isLST,s=n.isToken2022,a=n.isNewToken,l=n.isLaunchpadToken,d=n.isFrozen;return(0,h.jsxs)("div",{className:"flex justify-end gap-x-1",children:[d&&(0,h.jsx)("p",{className:"rounded-md border border-warning/50 px-1 py-0.5 text-xxs leading-none text-warning/50",children:(0,h.jsx)(i.cC,{id:"9DGbad"})}),s&&(0,h.jsx)("p",{className:"rounded-md bg-black/10 px-1 py-0.5 text-xxs font-semibold leading-none text-white/20",children:(0,h.jsx)(i.cC,{id:"YSLS4G"})}),l&&(0,h.jsx)("p",{className:"rounded-md bg-warning/80 px-1 py-0.5 text-xxs leading-none text-white",children:(0,h.jsx)(i.cC,{id:"iHtclg"})}),a&&!l&&(0,h.jsx)("p",{className:"rounded-md bg-warning/80 px-1 py-0.5 text-xxs leading-none text-white",children:(0,h.jsx)(i.cC,{id:"isRobC"})}),null===t||void 0===t?void 0:t.map((function(e,n){return(0,h.jsx)("div",{className:"rounded-md bg-black/10 px-1 py-0.5 text-xxs font-semibold leading-none text-white/20",children:e},n)})),o&&Boolean(r)&&(0,h.jsxs)("p",{className:"rounded-md border border-v2-primary/50 px-1 py-0.5 text-xxs font-semibold leading-none text-v2-primary/50",children:[r?"".concat(new c.Z(r).mul(100).toFixed(2),"% "):null,(0,h.jsx)(i.cC,{id:"XZ0TWW"})]})]})},C=function(e){var n=e.item,t=e.index,r=e.style,i=e.onSubmit,c=e.isKeyboardFocused,b=e.onMouseEnter,C=e.keyboardRefs,L=e.suppressCloseModal,O=e.usdValue,k=e.showMintAddress,N=void 0===k||k,T=e.enableUnknownTokenWarning,S=void 0===T||T,Z=e.apy,P=(0,p.JT)().closeModal,M=(0,a.createRef)();C.current[t]=M;var W=a.useMemo((function(){if(null!==Z&&void 0!==Z&&Z.apys)return null===Z||void 0===Z?void 0:Z.apys[n.address]}),[Z,n.address]),B=a.useCallback((function(){i(n),L||P()}),[i,n,L,P]),E=(0,a.useCallback)((function(e){"Enter"===e.code&&c&&B()}),[B,c]);(0,x._1)("keydown",E);var A=c?"absolute w-full h-full left-0 top-0 bg-v2-lily/10":"",D=O&&O.gt(.01)?"$".concat(x.uf.format(O,2)):"",F=(0,s.jB)().useWSol,R=(0,f.G)(),V=function(e){var n=(0,s.Bn)().newTokenListMap,t=(0,s.gZ)().mintToAssociatedTokenAccountMap,r=(0,a.useRef)(!1),i=(0,a.useRef)(!1),c=a.useState({isVerified:!1,isLST:!1,isToken2022:!1,isNewToken:!1,isLaunchpadToken:!1,isFrozen:!1}),d=(0,o.Z)(c,2),f=d[0],x=d[1];return(0,a.useEffect)((function(){i.current||r.current||(r.current=!0,setTimeout((function(){var o,s,a={isVerified:(0,l.OR)(e),isLST:Boolean(null===(o=e.tags)||void 0===o?void 0:o.includes("lst")),isToken2022:Boolean((0,l.kL)(e)),isNewToken:n.has(e.address),isLaunchpadToken:u.RX.has(e.address),isFrozen:Boolean(null===t||void 0===t||null===(s=t.get((null===e||void 0===e?void 0:e.address)||""))||void 0===s?void 0:s.info.isFrozen)};x(a),r.current=!1,i.current=!0}),0))}),[]),{renderedTag:f,remainingTags:[]}}(n);return(0,h.jsxs)("li",{className:"flex w-full cursor-pointer list-none items-center overflow-hidden rounded px-2 py-1 lg:px-4",style:w({maxHeight:j,height:j},r),onMouseEnter:function(){R.current&&b()},onClick:B,translate:"no",children:[(0,h.jsx)("div",{className:(0,l.cn)("pointer-events-none",A)}),(0,h.jsxs)("div",{className:"flex h-full w-full items-center gap-x-3",children:[(0,h.jsx)("div",{className:"flex-shrink-0",children:(0,h.jsx)("div",{className:"rounded-full bg-gray-200",children:(0,h.jsx)(v.Z,{info:n,width:32,height:32,enableUnknownTokenWarning:S})})}),(0,h.jsxs)("div",{className:"min-w-0 flex-1",children:[(0,h.jsxs)("div",{className:"flex gap-x-1",children:[(0,h.jsx)("p",{className:"truncate text-sm font-semibold text-white",children:n.symbol}),V.renderedTag.isVerified&&(0,h.jsx)("div",{className:"flex items-center fill-current text-v2-primary",children:(0,h.jsx)(m,{width:18,height:18})})]}),(0,h.jsx)("p",{className:"text-xxs text-v2-lily/50",children:n.address===d.W4.toBase58()?"Solana":n.name}),N&&(0,h.jsx)("div",{className:"bg-transparent !p-0 text-xxs font-semibold text-v2-lily/30",children:(0,h.jsx)("span",{className:"text-xxs",children:(0,l.Xn)(n.address,5)})})]}),(0,h.jsxs)("div",{className:"flex h-full flex-col justify-evenly text-right text-xs text-v2-lily/50",children:[(0,h.jsx)(g.Z,{mintAddress:n.address,hideZeroBalance:!0,useWSOL:F}),D?(0,h.jsx)("p",{children:D}):null,(0,h.jsx)(y,w(w({},V),{},{apyInPercent:W}))]})]})]})}},70700:function(e,n,t){t.d(n,{G:function(){return o}});var r=t(93981);function o(){var e=(0,r.useRef)(!1);return(0,r.useEffect)((function(){var n,t=function(){e.current=!0,clearTimeout(n),n=setTimeout((function(){e.current=!1}),100)};return document.addEventListener("mousemove",t),function(){document.removeEventListener("mousemove",t),clearTimeout(n)}}),[]),e}},50882:function(e,n,t){var r=t(29541);n.Z=function(e){var n=e.width,t=void 0===n?16:n,o=e.height,i=void 0===o?16:o;return(0,r.jsx)("div",{className:"flex items-center fill-current text-white/[0.15]",children:(0,r.jsx)("svg",{width:t,height:i,viewBox:"0 0 18 18",fill:"inherit",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{d:"M7.30327 14.6058C8.75327 14.6074 10.1705 14.1746 11.3729 13.3637L15.5971 17.5871C16.1463 18.1371 17.0377 18.1371 17.5877 17.5871C18.1377 17.0371 18.1377 16.1457 17.5877 15.5964L13.3643 11.3722C14.5823 9.55661 14.9229 7.28943 14.2909 5.19563C13.6596 3.10183 12.1229 1.40183 10.1033 0.56283C8.08365 -0.276231 5.79385 -0.16607 3.86505 0.86283C1.93537 1.89251 0.569053 3.73243 0.140853 5.87683C-0.286487 8.02143 0.269759 10.2448 1.65725 11.9354C3.04397 13.6261 5.11665 14.6064 7.30325 14.6058H7.30327ZM7.30327 1.68943C8.79233 1.68865 10.2197 2.28005 11.2729 3.33319C12.3252 4.38631 12.9166 5.81359 12.9166 7.30279C12.9166 8.79199 12.3252 10.2192 11.2729 11.2724C10.2198 12.3247 8.79247 12.9162 7.30327 12.9162C5.81407 12.9162 4.38687 12.3247 3.33367 11.2724C2.28133 10.2193 1.68913 8.79199 1.68991 7.30279C1.69148 5.81451 2.28287 4.38719 3.33523 3.33479C4.38759 2.28239 5.81483 1.69103 7.30323 1.68947L7.30327 1.68943Z",fill:"inherit"})})})}}}]);
//# sourceMappingURL=69711-419bc654d14f21d9.js.map