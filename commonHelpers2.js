import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */const a="feedback-form-state",t=document.querySelector(".feedback-form"),n=t.elements.email,l=t.elements.message;t.addEventListener("input",m);function m(e){e.preventDefault();const o={email:n.value.trim(),message:l.value.trim()};localStorage.setItem(a,JSON.stringify(o))}const s=localStorage.getItem(a);if(s!==null){const e=JSON.parse(s);n.value=e.email,l.value=e.message}t.addEventListener("submit",c);function c(e){e.preventDefault();const o=n.value.trim(),r=l.value.trim();o===""||r===""||(console.log(JSON.parse(localStorage.getItem(a))),localStorage.removeItem(a),t.reset())}
//# sourceMappingURL=commonHelpers2.js.map