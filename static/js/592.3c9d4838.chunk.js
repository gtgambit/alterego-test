(self.webpackChunkalterego_test=self.webpackChunkalterego_test||[]).push([[592],{1592:function(e,n,r){"use strict";r.r(n),r.d(n,{NewsPage:function(){return se}});var t=r(9439),o=r(2791),i=r(890),a=r(1889),u=r(4554),c=r(6151),s=r(9434),l=r(9230),d=r(8640),f=r(3433),m=r(4942),v=r(3366),p=r(7462),Z=r(8182),g=r(4419),h=r(4036),x=r(6934),b=r(1402),C=r(3031),y=r(2071),M=r(5878),w=r(1217);function j(e){return(0,w.Z)("MuiLink",e)}var S=(0,M.Z)("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]),k=r(8529),R=r(2065),N={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},_=function(e){var n=e.theme,r=e.ownerState,t=function(e){return N[e]||e}(r.color),o=(0,k.DW)(n,"palette.".concat(t),!1)||r.color,i=(0,k.DW)(n,"palette.".concat(t,"Channel"));return"vars"in n&&i?"rgba(".concat(i," / 0.4)"):(0,R.Fq)(o,.4)},P=r(184),A=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant","sx"],I=(0,x.ZP)(i.Z,{name:"MuiLink",slot:"Root",overridesResolver:function(e,n){var r=e.ownerState;return[n.root,n["underline".concat((0,h.Z)(r.underline))],"button"===r.component&&n.button]}})((function(e){var n=e.theme,r=e.ownerState;return(0,p.Z)({},"none"===r.underline&&{textDecoration:"none"},"hover"===r.underline&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},"always"===r.underline&&(0,p.Z)({textDecoration:"underline"},"inherit"!==r.color&&{textDecorationColor:_({theme:n,ownerState:r})},{"&:hover":{textDecorationColor:"inherit"}}),"button"===r.component&&(0,m.Z)({position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"}},"&.".concat(S.focusVisible),{outline:"auto"}))})),F=o.forwardRef((function(e,n){var r=(0,b.Z)({props:e,name:"MuiLink"}),i=r.className,a=r.color,u=void 0===a?"primary":a,c=r.component,s=void 0===c?"a":c,l=r.onBlur,d=r.onFocus,m=r.TypographyClasses,x=r.underline,M=void 0===x?"always":x,w=r.variant,S=void 0===w?"inherit":w,k=r.sx,R=(0,v.Z)(r,A),_=(0,C.Z)(),F=_.isFocusVisibleRef,z=_.onBlur,D=_.onFocus,V=_.ref,L=o.useState(!1),B=(0,t.Z)(L,2),E=B[0],T=B[1],O=(0,y.Z)(n,V),W=(0,p.Z)({},r,{color:u,component:s,focusVisible:E,underline:M,variant:S}),H=function(e){var n=e.classes,r=e.component,t=e.focusVisible,o=e.underline,i={root:["root","underline".concat((0,h.Z)(o)),"button"===r&&"button",t&&"focusVisible"]};return(0,g.Z)(i,j,n)}(W);return(0,P.jsx)(I,(0,p.Z)({color:u,className:(0,Z.Z)(H.root,i),classes:m,component:s,onBlur:function(e){z(e),!1===F.current&&T(!1),l&&l(e)},onFocus:function(e){D(e),!0===F.current&&T(!0),d&&d(e)},ref:O,ownerState:W,variant:S,sx:[].concat((0,f.Z)(Object.keys(N).includes(u)?[]:[{color:u}]),(0,f.Z)(Array.isArray(k)?k:[k]))},R))})),z=r(5527);function D(e){return(0,w.Z)("MuiCard",e)}(0,M.Z)("MuiCard",["root"]);var V=["className","raised"],L=(0,x.ZP)(z.Z,{name:"MuiCard",slot:"Root",overridesResolver:function(e,n){return n.root}})((function(){return{overflow:"hidden"}})),B=o.forwardRef((function(e,n){var r=(0,b.Z)({props:e,name:"MuiCard"}),t=r.className,o=r.raised,i=void 0!==o&&o,a=(0,v.Z)(r,V),u=(0,p.Z)({},r,{raised:i}),c=function(e){var n=e.classes;return(0,g.Z)({root:["root"]},D,n)}(u);return(0,P.jsx)(L,(0,p.Z)({className:(0,Z.Z)(c.root,t),elevation:i?8:void 0,ref:n,ownerState:u},a))}));function E(e){return(0,w.Z)("MuiCardActions",e)}(0,M.Z)("MuiCardActions",["root","spacing"]);var T=["disableSpacing","className"],O=(0,x.ZP)("div",{name:"MuiCardActions",slot:"Root",overridesResolver:function(e,n){var r=e.ownerState;return[n.root,!r.disableSpacing&&n.spacing]}})((function(e){var n=e.ownerState;return(0,p.Z)({display:"flex",alignItems:"center",padding:8},!n.disableSpacing&&{"& > :not(:first-of-type)":{marginLeft:8}})})),W=o.forwardRef((function(e,n){var r=(0,b.Z)({props:e,name:"MuiCardActions"}),t=r.disableSpacing,o=void 0!==t&&t,i=r.className,a=(0,v.Z)(r,T),u=(0,p.Z)({},r,{disableSpacing:o}),c=function(e){var n=e.classes,r={root:["root",!e.disableSpacing&&"spacing"]};return(0,g.Z)(r,E,n)}(u);return(0,P.jsx)(O,(0,p.Z)({className:(0,Z.Z)(c.root,i),ownerState:u,ref:n},a))}));function H(e){return(0,w.Z)("MuiCardContent",e)}(0,M.Z)("MuiCardContent",["root"]);var q=["className","component"],G=(0,x.ZP)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:function(e,n){return n.root}})((function(){return{padding:16,"&:last-child":{paddingBottom:24}}})),$=o.forwardRef((function(e,n){var r=(0,b.Z)({props:e,name:"MuiCardContent"}),t=r.className,o=r.component,i=void 0===o?"div":o,a=(0,v.Z)(r,q),u=(0,p.Z)({},r,{component:i}),c=function(e){var n=e.classes;return(0,g.Z)({root:["root"]},H,n)}(u);return(0,P.jsx)(G,(0,p.Z)({as:i,className:(0,Z.Z)(c.root,t),ownerState:u,ref:n},a))}));function J(e){return(0,w.Z)("MuiCardMedia",e)}(0,M.Z)("MuiCardMedia",["root","media","img"]);var K=["children","className","component","image","src","style"],Q=(0,x.ZP)("div",{name:"MuiCardMedia",slot:"Root",overridesResolver:function(e,n){var r=e.ownerState,t=r.isMediaComponent,o=r.isImageComponent;return[n.root,t&&n.media,o&&n.img]}})((function(e){var n=e.ownerState;return(0,p.Z)({display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},n.isMediaComponent&&{width:"100%"},n.isImageComponent&&{objectFit:"cover"})})),U=["video","audio","picture","iframe","img"],X=["picture","img"],Y=o.forwardRef((function(e,n){var r=(0,b.Z)({props:e,name:"MuiCardMedia"}),t=r.children,o=r.className,i=r.component,a=void 0===i?"div":i,u=r.image,c=r.src,s=r.style,l=(0,v.Z)(r,K),d=-1!==U.indexOf(a),f=!d&&u?(0,p.Z)({backgroundImage:'url("'.concat(u,'")')},s):s,m=(0,p.Z)({},r,{component:a,isMediaComponent:d,isImageComponent:-1!==X.indexOf(a)}),h=function(e){var n=e.classes,r={root:["root",e.isMediaComponent&&"media",e.isImageComponent&&"img"]};return(0,g.Z)(r,J,n)}(m);return(0,P.jsx)(Q,(0,p.Z)({className:(0,Z.Z)(h.root,o),as:a,role:!d&&u?"img":void 0,ref:n,style:f,ownerState:m,src:d?u||c:void 0},l,{children:t}))})),ee=Y,ne=r(7247),re=r(588),te=o.memo((function(e){var n=e.article,r=n.link,t=n.title,o=n.summary,s=(0,l.$G)().t,f=(null===t||void 0===t?void 0:t.length)>60?"".concat(null===t||void 0===t?void 0:t.slice(0,60),"..."):t,m=(null===o||void 0===o?void 0:o.length)>80?"".concat(null===o||void 0===o?void 0:o.slice(0,80),"..."):o,v="https://picsum.photos/200/300",p=(0,d.TL)();return(0,P.jsx)(a.ZP,{item:!0,xs:12,sm:6,md:4,lg:3,children:(0,P.jsx)(u.Z,{sx:{mt:1},children:(0,P.jsxs)(B,{sx:{height:"100%"},children:[(0,P.jsx)(ee,{sx:{height:200},image:v||"https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg",title:t}),(0,P.jsxs)($,{sx:{height:100},children:[(0,P.jsx)(i.Z,{gutterBottom:!0,variant:"h6",component:"div",sx:{fontSize:"1.1rem"},children:f}),(0,P.jsx)(i.Z,{variant:"body2",color:"text.secondary",sx:{fontSize:"0.9rem"},children:m})]}),(0,P.jsxs)(W,{sx:{display:"flex",justifyContent:"space-between"},children:[(0,P.jsx)(c.Z,{size:"small",children:(0,P.jsx)(F,{href:r,target:"_blank",rel:"noopener noreferrer",children:s("articleCard.learnMore")})}),(0,P.jsx)(c.Z,{size:"small",onClick:function(e){var n=e.target.closest("div > div").querySelector("a").href;p((0,re.j)(n))},children:(0,P.jsx)(ne.Z,{})})]})]})})})})),oe=r(2002),ie=r(2689),ae=function(e){return e.articles.articles},ue=function(e){return e.articles.isLoading},ce=function(e){return e.articles.totalResults},se=function(){var e=(0,d.TL)(),n=(0,s.v9)(ae),r=(0,s.v9)(ce),f=(0,s.v9)(ue),m=(0,o.useState)(1),v=(0,t.Z)(m,2),p=v[0],Z=v[1],g=(0,l.$G)().t,h=p<r/10;(0,o.useEffect)((function(){e((0,ie.Z)(p))}),[e,p]);return(0,P.jsxs)("section",{children:[(0,P.jsx)(i.Z,{textAlign:"center",variant:"h4",mt:2,gutterBottom:!0,children:g("news.title")}),(0,P.jsx)(a.ZP,{container:!0,spacing:2,children:f?(0,P.jsx)(oe.a,{}):n.map((function(e){return(0,P.jsx)(te,{article:e},e._id)}))}),h&&(0,P.jsx)(u.Z,{sx:{textAlign:"center",mt:2,mb:2},children:(0,P.jsx)(c.Z,{variant:"contained",color:"primary",onClick:function(){Z((function(e){return e+1})),e((0,ie._)(p+1))},children:g("buttons.loadMore")})})]})}},7247:function(e,n,r){"use strict";var t=r(4836);n.Z=void 0;var o=t(r(5649)),i=r(184),a=(0,o.default)((0,i.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete");n.Z=a},5649:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return t.createSvgIcon}});var t=r(4454)},4454:function(e,n,r){"use strict";r.r(n),r.d(n,{capitalize:function(){return o.Z},createChainedFunction:function(){return i},createSvgIcon:function(){return a.Z},debounce:function(){return u.Z},deprecatedPropType:function(){return c},isMuiElement:function(){return s.Z},ownerDocument:function(){return l.Z},ownerWindow:function(){return d.Z},requirePropFactory:function(){return f},setRef:function(){return m},unstable_ClassNameGenerator:function(){return C},unstable_useEnhancedEffect:function(){return v.Z},unstable_useId:function(){return p},unsupportedProp:function(){return Z},useControlled:function(){return g.Z},useEventCallback:function(){return h.Z},useForkRef:function(){return x.Z},useIsFocusVisible:function(){return b.Z}});var t=r(5902),o=r(4036),i=r(8949).Z,a=r(9201),u=r(3199);var c=function(e,n){return function(){return null}},s=r(9103),l=r(8301),d=r(7602);r(7462);var f=function(e,n){return function(){return null}},m=r(2971).Z,v=r(162),p=r(6248).Z;var Z=function(e,n,r,t,o){return null},g=r(8744),h=r(9683),x=r(2071),b=r(3031),C={configure:function(e){t.Z.configure(e)}}},6248:function(e,n,r){"use strict";var t;r.d(n,{Z:function(){return c}});var o=r(9439),i=r(2791),a=0;var u=(t||(t=r.t(i,2))).useId;function c(e){if(void 0!==u){var n=u();return null!=e?e:n}return function(e){var n=i.useState(e),r=(0,o.Z)(n,2),t=r[0],u=r[1],c=e||t;return i.useEffect((function(){null==t&&u("mui-".concat(a+=1))}),[t]),c}(e)}},4836:function(e){e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.__esModule=!0,e.exports.default=e.exports}}]);
//# sourceMappingURL=592.3c9d4838.chunk.js.map