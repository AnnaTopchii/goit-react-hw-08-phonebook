"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[184],{1184:function(n,e,t){t.r(e),t.d(e,{default:function(){return U}});var r,o,a,i,s,c,d,l,u,p,x,f,m,h=t(2791),b=t(9434),g=t(4270),Z=t(3634),j=t(1413),v=t(5705),w=t(168),y=t(6444),P=(0,y.ZP)(v.l0)(r||(r=(0,w.Z)(["\n  padding: 20px 10px;\n  border: 2px solid #99004f;\n  border-radius: 4px;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  margin-bottom: 20px;\n"]))),k=y.ZP.label(o||(o=(0,w.Z)(["\n  display: flex;\n  flex-direction: column;\n"]))),C=(0,y.ZP)(v.Bc)(a||(a=(0,w.Z)(["\n  color: tomato;\n"]))),L=y.ZP.button(i||(i=(0,w.Z)(["\n  width: 200px;\n  font-weight: 700;\n  align-self: center;\n  background-color: #ffcce6;\n  cursor: pointer;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);\n  border-radius: 4px;\n  border: 1px solid #ffcce6;\n  padding: 5px 20px;\n  text-transform: uppercase;\n\n  transition: background-color 250ms linear, border 250ms linear;\n\n  &:hover,\n  &:focus {\n    background-color: #ffb3da;\n    border: 1px solid #99004f;\n  }\n"]))),_=t(6727),z=function(n){return n.contacts.items},F=function(n){return n.contacts.isLoading},S=function(n){return n.contacts.error},T=t(184),q={name:"",number:""},A=_.Ry().shape({name:_.Z_().min(2,"Too Short!").max(20,"Too Long!").matches(/^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$/gm,"Name may contain only letters, apostrophe, dash and spaces").required(),number:_.Z_().min(6,"Too Short!").max(15,"Too Long!").matches(/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/gm,"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +").required()}),I=function(){var n=(0,b.I0)(),e=(0,b.v9)(z);return(0,T.jsx)(v.J9,{initialValues:q,onSubmit:function(t,r){if(e.find((function(n){return n.name.toLowerCase()===t.name.toLowerCase()})))return alert(t.name+" is already in contacts.");n((0,Z.uK)((0,j.Z)({},t))),r.resetForm()},validationSchema:A,children:(0,T.jsxs)(P,{children:[(0,T.jsxs)(k,{children:["Name",(0,T.jsx)(v.gN,{type:"text",name:"name"}),(0,T.jsx)(C,{name:"name",component:"div"})]}),(0,T.jsxs)(k,{children:["Phone",(0,T.jsx)(v.gN,{type:"tel",name:"number"})]}),(0,T.jsx)(C,{name:"number",component:"div"}),(0,T.jsx)(L,{type:"submit",children:"Add contact"})]})})},N=y.ZP.ol(s||(s=(0,w.Z)(["\n  padding: 20px 10px;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n"]))),Y=y.ZP.li(c||(c=(0,w.Z)(["\n  display: flex;\n"]))),K=y.ZP.span(d||(d=(0,w.Z)([""]))),R=y.ZP.button(l||(l=(0,w.Z)(["\n  background-color: #ffcce6;\n  cursor: pointer;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);\n  border-radius: 4px;\n  border: 1px solid #ffcce6;\n  padding: 5px 20px;\n  text-transform: uppercase;\n  margin-left: auto;\n\n  transition: background-color 250ms linear, border 250ms linear;\n\n  &:hover,\n  &:focus {\n    background-color: #ffb3da;\n    border: 1px solid #99004f;\n  }\n"]))),B=t(6916),D=function(n){return n.filter.value},E=(0,B.P1)([z,D],(function(n,e){return n.filter((function(n){return n.name.toLowerCase().includes(e)}))})),G=function(){var n=(0,b.I0)(),e=(0,b.v9)(E);return(0,T.jsxs)(N,{children:[e.map((function(e){var t=e.id,r=e.name,o=e.phone;return(0,T.jsxs)(Y,{children:[(0,T.jsxs)(K,{children:[r,": ",o]}),(0,T.jsx)(R,{type:"button",onClick:function(){return n((0,Z.GK)(t))},children:"Delete"})]},t)})),0===e.length&&(0,T.jsx)("p",{children:"Sorry, You have no contacts with such name"})]})},J=y.ZP.label(u||(u=(0,w.Z)(["\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 20px;\n  font-weight: 700;\n  font-style: italic;\n"]))),V=y.ZP.input(p||(p=(0,w.Z)(["\n  width: 200px;\n"]))),$=t(1634),H=function(){var n=(0,b.I0)(),e=(0,b.v9)(D);return(0,T.jsxs)(J,{children:["Find contacts by name",(0,T.jsx)(V,{type:"text",onChange:function(e){var t=e.target.value.toLowerCase();n((0,$.T)(t))},value:e})]})},M=y.ZP.div(x||(x=(0,w.Z)(["\n  padding: 20px 0px;\n  margin: 0px auto;\n  width: 400px;\n"]))),O=y.ZP.h1(f||(f=(0,w.Z)(["\n  font-weight: 700;\n  font-size: 28px;\n  text-align: center;\n  text-transform: uppercase;\n  margin-bottom: 20px;\n  color: #99004f;\n"]))),Q=y.ZP.h2(m||(m=(0,w.Z)(["\n  font-weight: 700;\n  font-size: 28px;\n  text-align: center;\n  text-transform: uppercase;\n  margin-bottom: 20px;\n  color: #99004f;\n"])));function U(){var n=(0,b.I0)(),e=(0,b.v9)(F),t=(0,b.v9)(S),r=(0,b.v9)(z);return(0,h.useEffect)((function(){n((0,Z.yF)())}),[n]),(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(g.q,{children:(0,T.jsx)("title",{children:"Your contacts"})}),(0,T.jsxs)(M,{children:[(0,T.jsx)(O,{children:"Phone book"}),(0,T.jsx)(I,{}),(0,T.jsx)(Q,{children:"Contacts"}),e&&!t&&(0,T.jsx)("b",{children:"Request in progress..."}),r.length>0?(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(H,{}),(0,T.jsx)(G,{})]}):"You have no contacts"]})]})}}}]);
//# sourceMappingURL=184.1b747da7.chunk.js.map