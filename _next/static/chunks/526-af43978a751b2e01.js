"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[526],{9526:function(t,e,r){r.d(e,{Z:function(){return Z}});var i=r(63366),a=r(87462),n=r(67294),o=r(90512),s=r(70917),l=r(94780),h=r(56535),d=r(7610),u=r(90948),p=r(28628),g=r(1588),c=r(34867);function getSkeletonUtilityClass(t){return(0,c.ZP)("MuiSkeleton",t)}(0,g.Z)("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);var f=r(85893);let m=["animation","className","component","height","style","variant","width"],_=t=>t,b,v,C,w,useUtilityClasses=t=>{let{classes:e,variant:r,animation:i,hasChildren:a,width:n,height:o}=t;return(0,l.Z)({root:["root",r,i,a&&"withChildren",a&&!n&&"fitContent",a&&!o&&"heightAuto"]},getSkeletonUtilityClass,e)},y=(0,s.F4)(b||(b=_`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`)),k=(0,s.F4)(v||(v=_`
  0% {
    transform: translateX(-100%);
  }

  50% {
    /* +0.5s of delay between each loop */
    transform: translateX(100%);
  }

  100% {
    transform: translateX(100%);
  }
`)),$=(0,u.ZP)("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(t,e)=>{let{ownerState:r}=t;return[e.root,e[r.variant],!1!==r.animation&&e[r.animation],r.hasChildren&&e.withChildren,r.hasChildren&&!r.width&&e.fitContent,r.hasChildren&&!r.height&&e.heightAuto]}})(({theme:t,ownerState:e})=>{var r,i;let n=String(t.shape.borderRadius).match(/[\d.\-+]*\s*(.*)/)[1]||"px",o=parseFloat(t.shape.borderRadius);return(0,a.Z)({display:"block",backgroundColor:t.vars?t.vars.palette.Skeleton.bg:(r=t.palette.text.primary,i="light"===t.palette.mode?.11:.13,r=function decomposeColor(t){let e;if(t.type)return t;if("#"===t.charAt(0))return decomposeColor(function(t){t=t.slice(1);let e=RegExp(`.{1,${t.length>=6?2:1}}`,"g"),r=t.match(e);return r&&1===r[0].length&&(r=r.map(t=>t+t)),r?`rgb${4===r.length?"a":""}(${r.map((t,e)=>e<3?parseInt(t,16):Math.round(parseInt(t,16)/255*1e3)/1e3).join(", ")})`:""}(t));let r=t.indexOf("("),i=t.substring(0,r);if(-1===["rgb","rgba","hsl","hsla","color"].indexOf(i))throw Error((0,h.Z)(9,t));let a=t.substring(r+1,t.length-1);if("color"===i){if(e=(a=a.split(" ")).shift(),4===a.length&&"/"===a[3].charAt(0)&&(a[3]=a[3].slice(1)),-1===["srgb","display-p3","a98-rgb","prophoto-rgb","rec-2020"].indexOf(e))throw Error((0,h.Z)(10,e))}else a=a.split(",");return{type:i,values:a=a.map(t=>parseFloat(t)),colorSpace:e}}(r),i=function(t,e=0,r=1){return(0,d.Z)(t,e,r)}(i),("rgb"===r.type||"hsl"===r.type)&&(r.type+="a"),"color"===r.type?r.values[3]=`/${i}`:r.values[3]=i,function(t){let{type:e,colorSpace:r}=t,{values:i}=t;return -1!==e.indexOf("rgb")?i=i.map((t,e)=>e<3?parseInt(t,10):t):-1!==e.indexOf("hsl")&&(i[1]=`${i[1]}%`,i[2]=`${i[2]}%`),i=-1!==e.indexOf("color")?`${r} ${i.join(" ")}`:`${i.join(", ")}`,`${e}(${i})`}(r)),height:"1.2em"},"text"===e.variant&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${o}${n}/${Math.round(o/.6*10)/10}${n}`,"&:empty:before":{content:'"\\00a0"'}},"circular"===e.variant&&{borderRadius:"50%"},"rounded"===e.variant&&{borderRadius:(t.vars||t).shape.borderRadius},e.hasChildren&&{"& > *":{visibility:"hidden"}},e.hasChildren&&!e.width&&{maxWidth:"fit-content"},e.hasChildren&&!e.height&&{height:"auto"})},({ownerState:t})=>"pulse"===t.animation&&(0,s.iv)(C||(C=_`
      animation: ${0} 2s ease-in-out 0.5s infinite;
    `),y),({ownerState:t,theme:e})=>"wave"===t.animation&&(0,s.iv)(w||(w=_`
      position: relative;
      overflow: hidden;

      /* Fix bug in Safari https://bugs.webkit.org/show_bug.cgi?id=68196 */
      -webkit-mask-image: -webkit-radial-gradient(white, black);

      &::after {
        animation: ${0} 2s linear 0.5s infinite;
        background: linear-gradient(
          90deg,
          transparent,
          ${0},
          transparent
        );
        content: '';
        position: absolute;
        transform: translateX(-100%); /* Avoid flash during server-side hydration */
        bottom: 0;
        left: 0;
        right: 0;
        top: 0;
      }
    `),k,(e.vars||e).palette.action.hover)),x=n.forwardRef(function(t,e){let r=(0,p.i)({props:t,name:"MuiSkeleton"}),{animation:n="pulse",className:s,component:l="span",height:h,style:d,variant:u="text",width:g}=r,c=(0,i.Z)(r,m),b=(0,a.Z)({},r,{animation:n,component:l,variant:u,hasChildren:!!c.children}),v=useUtilityClasses(b);return(0,f.jsx)($,(0,a.Z)({as:l,ref:e,className:(0,o.Z)(v.root,s),ownerState:b},c,{style:(0,a.Z)({width:g,height:h},d)}))});var Z=x}}]);