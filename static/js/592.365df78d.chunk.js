(self.webpackChunklocalhost=self.webpackChunklocalhost||[]).push([[592],{1592:function(e,n,r){"use strict";r.r(n),r.d(n,{NewsPage:function(){return ce}});var t=r(9439),o=r(2791),i=r(1889),a=r(3433),c=r(4942),u=r(3366),s=r(7462),l=r(8182),d=r(4419),f=r(4036),m=r(6934),v=r(1402),p=r(3031),Z=r(2071),g=r(890),h=r(5878),x=r(1217);function b(e){return(0,x.Z)("MuiLink",e)}var C=(0,h.Z)("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]),M=r(8529),y=r(2065),w={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},j=function(e){var n=e.theme,r=e.ownerState,t=function(e){return w[e]||e}(r.color),o=(0,M.DW)(n,"palette.".concat(t),!1)||r.color,i=(0,M.DW)(n,"palette.".concat(t,"Channel"));return"vars"in n&&i?"rgba(".concat(i," / 0.4)"):(0,y.Fq)(o,.4)},S=r(184),k=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant","sx"],R=(0,m.ZP)(g.Z,{name:"MuiLink",slot:"Root",overridesResolver:function(e,n){var r=e.ownerState;return[n.root,n["underline".concat((0,f.Z)(r.underline))],"button"===r.component&&n.button]}})((function(e){var n=e.theme,r=e.ownerState;return(0,s.Z)({},"none"===r.underline&&{textDecoration:"none"},"hover"===r.underline&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},"always"===r.underline&&(0,s.Z)({textDecoration:"underline"},"inherit"!==r.color&&{textDecorationColor:j({theme:n,ownerState:r})},{"&:hover":{textDecorationColor:"inherit"}}),"button"===r.component&&(0,c.Z)({position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"}},"&.".concat(C.focusVisible),{outline:"auto"}))})),N=o.forwardRef((function(e,n){var r=(0,v.Z)({props:e,name:"MuiLink"}),i=r.className,c=r.color,m=void 0===c?"primary":c,g=r.component,h=void 0===g?"a":g,x=r.onBlur,C=r.onFocus,M=r.TypographyClasses,y=r.underline,j=void 0===y?"always":y,N=r.variant,P=void 0===N?"inherit":N,A=r.sx,I=(0,u.Z)(r,k),_=(0,p.Z)(),F=_.isFocusVisibleRef,z=_.onBlur,D=_.onFocus,V=_.ref,B=o.useState(!1),L=(0,t.Z)(B,2),T=L[0],E=L[1],O=(0,Z.Z)(n,V),W=(0,s.Z)({},r,{color:m,component:h,focusVisible:T,underline:j,variant:P}),H=function(e){var n=e.classes,r=e.component,t=e.focusVisible,o=e.underline,i={root:["root","underline".concat((0,f.Z)(o)),"button"===r&&"button",t&&"focusVisible"]};return(0,d.Z)(i,b,n)}(W);return(0,S.jsx)(R,(0,s.Z)({color:m,className:(0,l.Z)(H.root,i),classes:M,component:h,onBlur:function(e){z(e),!1===F.current&&E(!1),x&&x(e)},onFocus:function(e){D(e),!0===F.current&&E(!0),C&&C(e)},ref:O,ownerState:W,variant:P,sx:[].concat((0,a.Z)(Object.keys(w).includes(m)?[]:[{color:m}]),(0,a.Z)(Array.isArray(A)?A:[A]))},I))})),P=r(5527);function A(e){return(0,x.Z)("MuiCard",e)}(0,h.Z)("MuiCard",["root"]);var I=["className","raised"],_=(0,m.ZP)(P.Z,{name:"MuiCard",slot:"Root",overridesResolver:function(e,n){return n.root}})((function(){return{overflow:"hidden"}})),F=o.forwardRef((function(e,n){var r=(0,v.Z)({props:e,name:"MuiCard"}),t=r.className,o=r.raised,i=void 0!==o&&o,a=(0,u.Z)(r,I),c=(0,s.Z)({},r,{raised:i}),f=function(e){var n=e.classes;return(0,d.Z)({root:["root"]},A,n)}(c);return(0,S.jsx)(_,(0,s.Z)({className:(0,l.Z)(f.root,t),elevation:i?8:void 0,ref:n,ownerState:c},a))}));function z(e){return(0,x.Z)("MuiCardActions",e)}(0,h.Z)("MuiCardActions",["root","spacing"]);var D=["disableSpacing","className"],V=(0,m.ZP)("div",{name:"MuiCardActions",slot:"Root",overridesResolver:function(e,n){var r=e.ownerState;return[n.root,!r.disableSpacing&&n.spacing]}})((function(e){var n=e.ownerState;return(0,s.Z)({display:"flex",alignItems:"center",padding:8},!n.disableSpacing&&{"& > :not(:first-of-type)":{marginLeft:8}})})),B=o.forwardRef((function(e,n){var r=(0,v.Z)({props:e,name:"MuiCardActions"}),t=r.disableSpacing,o=void 0!==t&&t,i=r.className,a=(0,u.Z)(r,D),c=(0,s.Z)({},r,{disableSpacing:o}),f=function(e){var n=e.classes,r={root:["root",!e.disableSpacing&&"spacing"]};return(0,d.Z)(r,z,n)}(c);return(0,S.jsx)(V,(0,s.Z)({className:(0,l.Z)(f.root,i),ownerState:c,ref:n},a))}));function L(e){return(0,x.Z)("MuiCardContent",e)}(0,h.Z)("MuiCardContent",["root"]);var T=["className","component"],E=(0,m.ZP)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:function(e,n){return n.root}})((function(){return{padding:16,"&:last-child":{paddingBottom:24}}})),O=o.forwardRef((function(e,n){var r=(0,v.Z)({props:e,name:"MuiCardContent"}),t=r.className,o=r.component,i=void 0===o?"div":o,a=(0,u.Z)(r,T),c=(0,s.Z)({},r,{component:i}),f=function(e){var n=e.classes;return(0,d.Z)({root:["root"]},L,n)}(c);return(0,S.jsx)(E,(0,s.Z)({as:i,className:(0,l.Z)(f.root,t),ownerState:c,ref:n},a))}));function W(e){return(0,x.Z)("MuiCardMedia",e)}(0,h.Z)("MuiCardMedia",["root","media","img"]);var H=["children","className","component","image","src","style"],q=(0,m.ZP)("div",{name:"MuiCardMedia",slot:"Root",overridesResolver:function(e,n){var r=e.ownerState,t=r.isMediaComponent,o=r.isImageComponent;return[n.root,t&&n.media,o&&n.img]}})((function(e){var n=e.ownerState;return(0,s.Z)({display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},n.isMediaComponent&&{width:"100%"},n.isImageComponent&&{objectFit:"cover"})})),G=["video","audio","picture","iframe","img"],$=["picture","img"],J=o.forwardRef((function(e,n){var r=(0,v.Z)({props:e,name:"MuiCardMedia"}),t=r.children,o=r.className,i=r.component,a=void 0===i?"div":i,c=r.image,f=r.src,m=r.style,p=(0,u.Z)(r,H),Z=-1!==G.indexOf(a),g=!Z&&c?(0,s.Z)({backgroundImage:'url("'.concat(c,'")')},m):m,h=(0,s.Z)({},r,{component:a,isMediaComponent:Z,isImageComponent:-1!==$.indexOf(a)}),x=function(e){var n=e.classes,r={root:["root",e.isMediaComponent&&"media",e.isImageComponent&&"img"]};return(0,d.Z)(r,W,n)}(h);return(0,S.jsx)(q,(0,s.Z)({className:(0,l.Z)(x.root,o),as:a,role:!Z&&c?"img":void 0,ref:n,style:g,ownerState:h,src:Z?c||f:void 0},p,{children:t}))})),K=J,Q=r(6151),U=r(8870),X=r(7247),Y=r(9230),ee=r(588),ne=r(8640),re=o.memo((function(e){var n=e.article,r=n.url,t=n.title,o=n.description,a=n.urlToImage,c=(0,Y.$G)().t,u=(null===t||void 0===t?void 0:t.length)>60?"".concat(null===t||void 0===t?void 0:t.slice(0,60),"..."):t,s=(null===o||void 0===o?void 0:o.length)>80?"".concat(null===o||void 0===o?void 0:o.slice(0,80),"..."):o,l=(0,ne.TL)();return(0,S.jsx)(i.ZP,{item:!0,xs:12,sm:6,md:4,lg:3,children:(0,S.jsx)(U.Z,{sx:{mt:1},children:(0,S.jsxs)(F,{sx:{height:"100%"},children:[(0,S.jsx)(K,{sx:{height:200},image:a||"https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg",title:t}),(0,S.jsxs)(O,{sx:{height:100},children:[(0,S.jsx)(g.Z,{gutterBottom:!0,variant:"h6",component:"div",sx:{fontSize:"1.1rem"},children:u}),(0,S.jsx)(g.Z,{variant:"body2",color:"text.secondary",sx:{fontSize:"0.9rem"},children:s})]}),(0,S.jsxs)(B,{sx:{display:"flex",justifyContent:"space-between"},children:[(0,S.jsx)(Q.Z,{size:"small",children:(0,S.jsx)(N,{href:r,target:"_blank",rel:"noopener noreferrer",children:c("articleCard.learnMore")})}),(0,S.jsx)(Q.Z,{size:"small",onClick:function(e){var n=e.target.closest("div > div").querySelector("a").href;l((0,ee.j)(n))},children:(0,S.jsx)(X.Z,{})})]})]})})})})),te=r(9434),oe=r(2689),ie=function(e){return e.articles.articles},ae=function(e){return e.articles.totalResults},ce=function(){var e=(0,ne.TL)(),n=(0,te.v9)(ie),r=(0,te.v9)(ae),a=(0,o.useState)(1),c=(0,t.Z)(a,2),u=c[0],s=c[1],l=(0,Y.$G)().t,d=u<r/10;return(0,o.useEffect)((function(){e((0,oe.Z)(u))}),[]),(0,S.jsxs)("section",{children:[(0,S.jsx)(g.Z,{textAlign:"center",variant:"h4",mt:2,gutterBottom:!0,children:l("news.title")}),(0,S.jsx)(i.ZP,{container:!0,spacing:2,children:n.map((function(e,n){return(0,S.jsx)(re,{article:e},n)}))}),d&&(0,S.jsx)(U.Z,{sx:{textAlign:"center",mt:2,mb:2},children:(0,S.jsx)(Q.Z,{variant:"contained",color:"primary",onClick:function(){s((function(e){return e+1})),e((0,oe._)(u+1))},children:l("buttons.loadMore")})})]})}},7247:function(e,n,r){"use strict";var t=r(4836);n.Z=void 0;var o=t(r(5649)),i=r(184),a=(0,o.default)((0,i.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete");n.Z=a},5649:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return t.createSvgIcon}});var t=r(4454)},4454:function(e,n,r){"use strict";r.r(n),r.d(n,{capitalize:function(){return o.Z},createChainedFunction:function(){return i},createSvgIcon:function(){return a.Z},debounce:function(){return c.Z},deprecatedPropType:function(){return u},isMuiElement:function(){return s.Z},ownerDocument:function(){return l.Z},ownerWindow:function(){return d.Z},requirePropFactory:function(){return f},setRef:function(){return m},unstable_ClassNameGenerator:function(){return C},unstable_useEnhancedEffect:function(){return v.Z},unstable_useId:function(){return p},unsupportedProp:function(){return Z},useControlled:function(){return g.Z},useEventCallback:function(){return h.Z},useForkRef:function(){return x.Z},useIsFocusVisible:function(){return b.Z}});var t=r(5902),o=r(4036),i=r(8949).Z,a=r(9201),c=r(3199);var u=function(e,n){return function(){return null}},s=r(9103),l=r(8301),d=r(7602);r(7462);var f=function(e,n){return function(){return null}},m=r(2971).Z,v=r(162),p=r(6248).Z;var Z=function(e,n,r,t,o){return null},g=r(8744),h=r(9683),x=r(2071),b=r(3031),C={configure:function(e){t.Z.configure(e)}}},6248:function(e,n,r){"use strict";var t;r.d(n,{Z:function(){return u}});var o=r(9439),i=r(2791),a=0;var c=(t||(t=r.t(i,2))).useId;function u(e){if(void 0!==c){var n=c();return null!=e?e:n}return function(e){var n=i.useState(e),r=(0,o.Z)(n,2),t=r[0],c=r[1],u=e||t;return i.useEffect((function(){null==t&&c("mui-".concat(a+=1))}),[t]),u}(e)}},4836:function(e){e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.__esModule=!0,e.exports.default=e.exports}}]);
//# sourceMappingURL=592.365df78d.chunk.js.map