(this.webpackJsonpimagenetexample=this.webpackJsonpimagenetexample||[]).push([[0],{20:function(e,t,n){},27:function(e,t){},28:function(e,t){},29:function(e,t){},31:function(e,t,n){"use strict";n.r(t);var c=n(2),s=n(13),a=n.n(s),r=(n(20),n(3)),i=n.n(r),u=n(7),l=n(15),o=n(4),j=n(14),b=n(1),d=Object(c.createContext)(),f=function(){return Object(c.useContext)(d)},m=function(e){var t=e.children,n=Object(c.useState)(!1),s=Object(o.a)(n,2),a=s[0],r=s[1],f=Object(c.useState)(null),m=Object(o.a)(f,2),O=m[0],p=m[1],x=Object(c.useState)(null),h=Object(o.a)(x,2),g=h[0],v=h[1],R=Object(c.useState)([]),N=Object(o.a)(R,2),I=N[0],y=N[1],L=Object(c.useState)([]),U=Object(o.a)(L,2),k=U[0],C=U[1],w=Object(c.useRef)(),S=Object(c.useRef)(),H=Object(c.useRef)(),E=function(){var e=Object(u.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r(!0),e.prev=1,e.next=4,j.a();case 4:t=e.sent,p(t),r(!1),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0),r(!1);case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){E()}),[]),Object(c.useEffect)((function(){g&&C([g].concat(Object(l.a)(k)))}),[g]),Object(b.jsx)(d.Provider,{value:{model:O,isModelLoading:a,imageURL:g,setImageURL:v,results:I,setResults:y,history:k,setHistory:C,imageRef:w,textInputRef:S,fileInputRef:H},children:t})},O=function(){var e=f(),t=e.textInputRef,n=e.model,c=e.imageRef,s=e.setResults,a=e.imageURL,r=e.results,l=function(){var e=Object(u.a)(i.a.mark((function e(){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.current.value="",e.next=3,n.classify(c.current);case 3:a=e.sent,s(a);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(b.jsxs)("div",{className:"mainWrapper",children:[Object(b.jsxs)("div",{className:"mainContent",children:[Object(b.jsx)("div",{className:"imageHolder",children:a&&Object(b.jsx)("img",{src:a,alt:"Upload Preview",crossOrigin:"anonymous",ref:c})}),r.length>0&&Object(b.jsx)("div",{className:"resultsHolder",children:r.map((function(e,t){return Object(b.jsxs)("div",{className:"result",children:[Object(b.jsx)("span",{className:"name",children:e.className}),Object(b.jsxs)("span",{className:"confidence",children:["Confidence level: ",(100*e.probability).toFixed(2),"%"," ",0===t&&Object(b.jsx)("span",{className:"bestGuess",children:"Best Guess"})]})]},e.className)}))})]}),a&&Object(b.jsx)("button",{className:"button",onClick:l,children:"Identify Image"})]})},p=function(){var e=f(),t=e.textInputRef,n=e.fileInputRef,c=e.setImageURL,s=e.setResults;return Object(b.jsxs)("div",{className:"inputHolder",children:[Object(b.jsx)("input",{type:"file",accept:"image/*",capture:"camera",className:"uploadInput",onChange:function(e){var t=e.target.files;if(t.length>0){var n=URL.createObjectURL(t[0]);c(n)}else c(null)},ref:n}),Object(b.jsx)("button",{className:"uploadImage",onClick:function(){n.current.click()},children:"Upload Image"}),Object(b.jsx)("span",{className:"or",children:"OR"}),Object(b.jsx)("input",{type:"text",placeholder:"Paster image URL",ref:t,onChange:function(e){c(e.target.value),s([])}})]})},x=function(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("h1",{className:"header",children:"Image Identification"})})};var h=function(){return f().isModelLoading?Object(b.jsx)("h2",{children:"Model Loading..."}):Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(x,{}),Object(b.jsx)(p,{}),Object(b.jsx)(O,{})]})};a.a.render(Object(b.jsx)(m,{children:Object(b.jsx)(h,{})}),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.e493023f.chunk.js.map