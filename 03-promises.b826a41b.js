var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequire7bc7;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var r={id:e,exports:{}};return t[e]=r,o.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},e.parcelRequire7bc7=o);var r=o("9EgcF");const i={form:document.querySelector(".form"),inputDelay:document.querySelector('input[name="delay"'),inputAmount:document.querySelector('input[name="amount"]'),inputStep:document.querySelector('input[name="step"]')};function u(e,t){return new Promise(((n,o)=>{const r=Math.random()>.3;setTimeout((()=>{r?n({position:e,delay:t}):o({position:e,delay:t})}),t)}))}i.form.addEventListener("submit",(function(e){e.preventDefault();const t=Number(i.inputAmount.value);let n=Number(i.inputStep.value),o=Number(i.inputDelay.value);for(let e=0;e<t;e+=1)u(t,o).then((({position:e,delay:t})=>{r.Notify.success(`✅ Fulfilled promise ${e} in ${t} ms`)})).catch((({position:e,delay:t})=>{r.Notify.failure(`❌ Rejected promise ${e} in ${t} ms`)})),o+=n;e.currentTarget.reset()}));
//# sourceMappingURL=03-promises.b826a41b.js.map