(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[335],{1753:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/contact",function(){return t(3706)}])},3706:function(e,a,t){"use strict";t.r(a),t.d(a,{default:function(){return i}});var n=t(1874),s=t(9953),r=t(6815),l=t.n(r);function i(){let[e,a]=(0,s.useState)(),[t,r]=(0,s.useState)(),[i,o]=(0,s.useState)(),[c,d]=(0,s.useState)(),u=n=>{n.preventDefault(),fetch("http://localhost:3000/api/postcontact",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:e,email:t,phone:i,message:c})}).then(e=>e.text()).then(e=>{alert("Form sumbitted, Thanks for contacting us"),a(" "),o(" "),r(" "),d(" ")}).catch(e=>{console.error("Error:",e)})},g=e=>{"name"===e.target.name?a(e.target.value):"phone"===e.target.name&&o(e.target.value),"email"===e.target.name&&r(e.target.value),"message"===e.target.name&&d(e.target.value)};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(l(),{children:(0,n.jsx)("title",{children:"Contact | Hunting"})}),(0,n.jsx)("div",{children:(0,n.jsx)("section",{children:(0,n.jsx)("section",{className:"text-gray-600 body-font relative",children:(0,n.jsxs)("div",{className:"container px-5 py-24 mx-auto",children:[(0,n.jsxs)("div",{className:"flex flex-col text-center w-full mb-12",children:[(0,n.jsx)("h1",{className:"sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900",children:"Contact Us"}),(0,n.jsx)("p",{className:"lg:w-2/3 mx-auto leading-relaxed text-base",children:"Any Querry? Feel Free To Contact Us"})]}),(0,n.jsx)("div",{className:"lg:w-1/2 md:w-2/3 mx-auto",children:(0,n.jsxs)("form",{className:"flex flex-wrap -m-2",onSubmit:u,children:[(0,n.jsx)("div",{className:"p-2 w-1/2",children:(0,n.jsxs)("div",{className:"relative",children:[(0,n.jsx)("label",{htmlFor:"name",className:"leading-7 text-sm text-gray-600",children:"Name"}),(0,n.jsx)("input",{onChange:g,value:e,type:"text",id:"name",name:"name",className:"w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-gray-900  focus:bg-white focus:ring-2 focus:ring-gray-400 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"})]})}),(0,n.jsx)("div",{className:"p-2 w-1/2",children:(0,n.jsxs)("div",{className:"relative",children:[(0,n.jsx)("label",{htmlFor:"phone",className:"leading-7 text-sm text-gray-600",children:"Phone (will be kept a secret)"}),(0,n.jsx)("input",{onChange:g,value:i,type:"phone",id:"name",name:"phone",className:"w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-gray-900   focus:bg-white focus:ring-2 focus:ring-gray-400 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"})]})}),(0,n.jsx)("div",{className:"p-2 w-full",children:(0,n.jsxs)("div",{className:"relative",children:[(0,n.jsx)("label",{htmlFor:"email",className:"leading-7 text-sm text-gray-600","aria-required":"true",children:"Email (will be kept a secret)"}),(0,n.jsx)("input",{onChange:g,value:t,type:"email",id:"email",name:"email",className:"w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-gray-900   focus:bg-white focus:ring-2 focus:ring-gray-400 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"})]})}),(0,n.jsx)("div",{className:"p-2 w-full",children:(0,n.jsxs)("div",{className:"relative",children:[(0,n.jsx)("label",{htmlFor:"message",className:"leading-7 text-sm text-gray-600",children:"Message"}),(0,n.jsx)("textarea",{value:c,onChange:g,id:"message",name:"message",className:"w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-gray-900   focus:bg-white focus:ring-2 focus:ring-gray-400 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"})]})}),(0,n.jsx)("div",{className:"p-2 w-full",children:(0,n.jsx)("button",{className:"flex mx-auto text-white bg-gray-900  border-0 py-2 px-8 focus:outline-none  rounded-md hover:rounded-xl focus-rounded-xl text-lg transition-all",children:"Sumbit"})})]})})]})})})})]})}},6815:function(e,a,t){e.exports=t(1695)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=1753)}),_N_E=e.O()}]);