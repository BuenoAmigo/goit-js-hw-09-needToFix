import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */const r=document.querySelector(".feedback-form"),{email:t,message:a}=r.elements,o="feedback-form-state",l=localStorage.getItem(o);r.addEventListener("input",n);r.addEventListener("submit",m);s();function s(){l?(t.value=JSON.parse(l).email,a.value=JSON.parse(l).message):(t.value="",a.value="")}function n(){const e={email:t.value.trim(),message:a.value.trim()};localStorage.setItem(o,JSON.stringify(e))}function m(e){if(e.preventDefault(),!t.value){alert("Oops! You forget to add Email!");return}if(a.value)console.log(localStorage.getItem(o)),localStorage.removeItem(o),e.target.reset();else{alert("Oops! You forget to add Message!");return}}
//# sourceMappingURL=commonHelpers2.js.map
