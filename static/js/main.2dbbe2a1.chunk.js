(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,a,t){},16:function(e,a,t){e.exports=t(28)},22:function(e,a,t){},27:function(e,a,t){},28:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),l=t(14),r=t.n(l),s=(t(22),t(6)),o=t(3),d=t(29);t(13);var i=function(){const[e,a]=Object(n.useState)(""),[t,l]=Object(n.useState)(""),[r,s]=Object(n.useState)(!1),i=Object(o.o)(),{id:m}=Object(o.q)(),u="http://localhost:5000/api";return Object(n.useEffect)(()=>{m&&d.a.get(`${u}/flashcards/${m}`).then(e=>{a(e.data.question),l(e.data.answer),s(!0)}).catch(e=>{console.error("Error fetching flashcard details:",e),i("/")})},[m,i]),c.a.createElement("div",{className:"form-container"},c.a.createElement("h2",{className:"form-title"},r?"Edit Flashcard":"Add Flashcard"),c.a.createElement("input",{className:"form-input",type:"text",placeholder:"Question",value:e,onChange:e=>a(e.target.value)}),c.a.createElement("input",{className:"form-input",type:"text",placeholder:"Answer",value:t,onChange:e=>l(e.target.value)}),c.a.createElement("button",{className:"form-button",onClick:()=>{const a=r?`${u}flashcards/${m}`:`${u}/flashcards`,n=r?"put":"post";Object(d.a)({method:n,url:a,data:{question:e,answer:t}}).then(()=>i("/")).catch(e=>console.error("Error saving flashcard:",e))}},r?"Update":"Add"))};var m=e=>{let{flashcard:a,onDelete:t,onEdit:n,onFlip:l}=e;return c.a.createElement("div",{className:`flashcard ${a.isFlipped?"is-flipped":""}`,onClick:l},c.a.createElement("div",{className:"flashcard-inner"},c.a.createElement("div",{className:"flashcard-front"},c.a.createElement("div",{className:"flashcard-header"},c.a.createElement("button",{className:"edit-button",onClick:e=>{e.stopPropagation(),n(a.id)}},"\u270e "),c.a.createElement("button",{className:"delete-button",onClick:e=>{e.stopPropagation(),t(a.id)}},"\u2716 ")),c.a.createElement("div",{className:"flashcard-content"},c.a.createElement("p",null,a.question))),c.a.createElement("div",{className:"flashcard-back"},c.a.createElement("div",{className:"flashcard-content"},c.a.createElement("p",null,a.answer)))))};t(27);var u=()=>{const e=Object(o.o)();return c.a.createElement("button",{className:"add-more-button",onClick:()=>{e("/add")}},"Add More")};var h=()=>{const e="http://localhost:5000/api",[a,t]=Object(n.useState)([]),l=Object(o.o)(),r=async n=>{try{await d.a.delete(`${e}/flashcards${n}`),t(a.filter(e=>e.id!==n))}catch(c){console.error("Error deleting flashcard:",c)}},s=e=>{l(`/edit/${e}`)};return Object(n.useEffect)(()=>{(async()=>{try{const n=await d.a.get(`${e}/flashcards`);t(n.data)}catch(a){console.error("Error fetching flashcards:",a)}})()},[]),c.a.createElement("div",{className:"flashcard-container"},a.map(e=>c.a.createElement(m,{key:e.id,flashcard:e,onDelete:r,onEdit:s,onFlip:()=>(e=>{t(a.map(a=>a.id===e?{...a,isFlipped:!a.isFlipped}:a))})(e.id)})),c.a.createElement(u,null))};var p=function(){return c.a.createElement(s.a,null,c.a.createElement(o.c,null,c.a.createElement(o.a,{path:"/",element:c.a.createElement(h,null)}),c.a.createElement(o.a,{path:"/edit/:id",element:c.a.createElement(i,null)}),c.a.createElement(o.a,{path:"/add",element:c.a.createElement(i,null)})))};r.a.createRoot(document.getElementById("root")).render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(p,null)))}},[[16,1,2]]]);
//# sourceMappingURL=main.2dbbe2a1.chunk.js.map