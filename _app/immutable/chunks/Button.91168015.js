import{S as T,i as W,s as R,e as N,b as C,g as h,d as g,h as v,P,Q as A,R as z,T as J,C as S,k as U,a as K,l as V,m as q,c as M,U as j,L as D,G as O,N as X,v as Y,f as Z,D as F,E as G,F as I,V as p,W as w,n as x}from"./index.43c46f99.js";import{H as $}from"./regex.7dfa9b23.js";const ee=s=>({}),H=s=>({});function L(s){let l,a;const u=s[12].icon,e=S(u,s,s[11],H);return{c(){l=U("div"),e&&e.c(),this.h()},l(t){l=V(t,"DIV",{class:!0});var f=q(l);e&&e.l(f),f.forEach(v),this.h()},h(){x(l,"class","icon svelte-1gle7z")},m(t,f){C(t,l,f),e&&e.m(l,null),a=!0},p(t,f){e&&e.p&&(!a||f&2048)&&F(e,u,t,t[11],a?I(u,t[11],f,ee):G(t[11]),H)},i(t){a||(h(e,t),a=!0)},o(t){g(e,t),a=!1},d(t){t&&v(l),e&&e.d(t)}}}function b(s){let l,a,u,e,t,f,o=s[7].icon&&L(s);const d=s[12].default,_=S(d,s,s[11],null);let m=[s[4],{class:u=["button",`style--${s[1]}`,`size--${s[2]}`,`color--${s[0]}`,s[3]].join(" ")},{"data-sveltekit-preload-data":""},s[6]],c={};for(let i=0;i<m.length;i+=1)c=z(c,m[i]);return{c(){l=U(s[5]),o&&o.c(),a=K(),_&&_.c(),this.h()},l(i){l=V(i,(s[5]||"null").toUpperCase(),{class:!0,"data-sveltekit-preload-data":!0});var n=q(l);o&&o.l(n),a=M(n),_&&_.l(n),n.forEach(v),this.h()},h(){j(s[5])(l,c),D(l,"svelte-1gle7z",!0)},m(i,n){C(i,l,n),o&&o.m(l,null),O(l,a),_&&_.m(l,null),e=!0,t||(f=X(l,"click",s[13]),t=!0)},p(i,n){i[7].icon?o?(o.p(i,n),n&128&&h(o,1)):(o=L(i),o.c(),h(o,1),o.m(l,a)):o&&(Y(),g(o,1,1,()=>{o=null}),Z()),_&&_.p&&(!e||n&2048)&&F(_,d,i,i[11],e?I(d,i[11],n,null):G(i[11]),null),j(i[5])(l,c=p(m,[n&16&&i[4],(!e||n&15&&u!==(u=["button",`style--${i[1]}`,`size--${i[2]}`,`color--${i[0]}`,i[3]].join(" ")))&&{class:u},{"data-sveltekit-preload-data":""},n&64&&i[6]])),D(l,"svelte-1gle7z",!0)},i(i){e||(h(o),h(_,i),e=!0)},o(i){g(o),g(_,i),e=!1},d(i){i&&v(l),o&&o.d(),_&&_.d(i),t=!1,f()}}}function le(s){let l=s[5],a,u,e=s[5]&&b(s);return{c(){e&&e.c(),a=N()},l(t){e&&e.l(t),a=N()},m(t,f){e&&e.m(t,f),C(t,a,f),u=!0},p(t,[f]){t[5]?l?R(l,t[5])?(e.d(1),e=b(t),l=t[5],e.c(),e.m(a.parentNode,a)):e.p(t,f):(e=b(t),l=t[5],e.c(),e.m(a.parentNode,a)):l&&(e.d(1),e=null,l=t[5])},i(t){u||(h(e),u=!0)},o(t){g(e),u=!1},d(t){t&&v(a),e&&e.d(t)}}}function te(s,l,a){let u,e;const t=["color","style","size","href","additionalClass","target","rel"];let f=P(l,t),{$$slots:o={},$$scope:d}=l;const _=A(o);let{color:m="primary"}=l,{style:c="solid"}=l,{size:i="medium"}=l,{href:n=void 0}=l,{additionalClass:E=void 0}=l;const B=!!n&&$.test(n);let{target:k=B?"_blank":"_self"}=l,{rel:y=B?"noopener noreferrer":void 0}=l;function Q(r){w.call(this,s,r)}return s.$$set=r=>{l=z(z({},l),J(r)),a(6,f=P(l,t)),"color"in r&&a(0,m=r.color),"style"in r&&a(1,c=r.style),"size"in r&&a(2,i=r.size),"href"in r&&a(8,n=r.href),"additionalClass"in r&&a(3,E=r.additionalClass),"target"in r&&a(9,k=r.target),"rel"in r&&a(10,y=r.rel),"$$scope"in r&&a(11,d=r.$$scope)},s.$$.update=()=>{s.$$.dirty&256&&a(5,u=n?"a":"button"),s.$$.dirty&1792&&a(4,e={href:n,target:k,rel:y})},[m,c,i,E,e,u,f,_,n,k,y,d,o,Q]}class ie extends T{constructor(l){super(),W(this,l,te,le,R,{color:0,style:1,size:2,href:8,additionalClass:3,target:9,rel:10})}}export{ie as B};
