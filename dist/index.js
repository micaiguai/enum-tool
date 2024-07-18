function o(e,n){e.all=()=>n}function d(e){let n=function(t){return e.find(r=>r.value===t)};return e.forEach(t=>{n[t.key]=t.value}),o(n,e),n}export{d as enumify};
