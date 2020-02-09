(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,function(e,t,a){e.exports={Menu:"Menu_Menu__3tyOo",Button:"Menu_Button__3Tv3g",Input:"Menu_Input__2TpK5"}},function(e,t,a){e.exports={Form:"Form_Form__2G4oV",FormContent:"Form_FormContent__1IZmP",Close:"Form_Close__2oO0p"}},,function(e,t,a){e.exports={App:"App_App__35iBd",Border:"App_Border__245rm"}},function(e,t,a){e.exports={Employee:"Employee_Employee__3Ieg7",Red:"Employee_Red__1Y88c"}},function(e,t,a){e.exports={Invalid:"Input_Invalid__1qKys"}},,,,,,,,function(e,t,a){e.exports=a(21)},,,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(9),o=a.n(l),s=(a(20),a(4)),i=a(1),m=a(10),c=a(11),u=a(13),d=a(12),p=a(14),f=a(5),h=a.n(f),v=a(6),E=a.n(v),y=function(e){var t=function(e){return e.charAt(0).toUpperCase()+e.slice(1)};return r.a.createElement("div",{className:E.a.Employee},r.a.createElement("div",null,r.a.createElement("h3",null,t(e.firstName)," ",t(e.lastName)),r.a.createElement("p",null,r.a.createElement("strong",null,"Department:")," ",t(e.department)," "),r.a.createElement("p",null,r.a.createElement("strong",null,"Phone Number:")," ",e.phoneNumber)),r.a.createElement("div",null,r.a.createElement("button",{className:E.a.Red,onClick:e.delete},"Delete")))},N=a(3),b=a.n(N),_=a(7),g=a.n(_),C=function(e){var t=[g.a.Input];return e.invalid&&e.touched&&t.push(g.a.Invalid),r.a.createElement("div",null,r.a.createElement("label",null,e.label),r.a.createElement("input",Object.assign({className:t.join("")},e.elementConfig,{value:e.value,onChange:e.changed})))},F=function(e){return r.a.createElement("div",{className:b.a.Form},r.a.createElement("form",{className:b.a.FormContent,onSubmit:e.handleSubmit},r.a.createElement("span",{className:b.a.Close,onClick:e.closeForm},"X"),r.a.createElement("h1",null,"Add New Employee"),e.formElements.map((function(t){return r.a.createElement(C,{key:t.id,elementConfig:t.config.elementConfig,value:t.config.value,changed:function(a){return e.changed(a,t.id)},invalid:!t.config.valid,touched:t.config.touched})})),r.a.createElement("button",{type:"submit",disabled:e.disabled},"Send")))},w=a(2),I=a.n(w),S=function(e){return r.a.createElement("div",{className:I.a.Menu},r.a.createElement("div",null,r.a.createElement("form",null,r.a.createElement("input",{className:I.a.Input,onChange:e.inputted,type:"text",placeholder:"Name or department",name:"search"}),r.a.createElement("button",{className:I.a.Button,onClick:e.searched},"Search"))),r.a.createElement("div",null,r.a.createElement("button",{className:I.a.Button,onClick:e.openForm},"Add New Employee"),r.a.createElement("button",{className:I.a.Button,onClick:e.sortList},"Sort")))},k=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).sortListHandler=function(){var e,t=!a.state.employeesSorted;a.state.searched?(e=Object(i.a)(a.state.filteredElements),a.compareList(e),a.setState({filteredElements:e,employeesSorted:t})):(e=Object(i.a)(a.state.employees),a.compareList(e),a.setState({employees:e,employeesSorted:t}))},a.addEmployeeHandler=function(e){e.preventDefault();var t={};for(var n in a.state.newEmployee)t[n]=a.state.newEmployee[n].value;a.state.submitted;a.setState({employees:[].concat(Object(i.a)(a.state.employees),[t]),submitted:!0}),setTimeout((function(){return a.clearInputFields()}))},a.clearInputFields=function(){var e=Object(s.a)({},a.state.newEmployee);for(var t in e)e[t].value="",e[t].valid=!1,e[t].touched=!1;a.setState({newEmployee:e,formIsValid:!1})},a.inputChangedHandler=function(e,t){var n=Object(s.a)({},a.state.newEmployee),r=Object(s.a)({},n[t]);r.value=e.target.value,r.valid=a.checkValidity(r.value,r.validation),r.touched=!0,n[t]=r;var l=!0;for(var o in n)l=n[o].valid&&l;a.setState({newEmployee:n,formIsValid:l})},a.deleteEmployeeHandler=function(e){var t=Object(i.a)(a.state.filteredElements);t.splice(e,1);var n=Object(i.a)(a.state.employees);n.splice(e,1),a.setState({employees:n,filteredElements:t})},a.checkValidity=function(e,t){var a=!1;return t.required&&(a=""!==e.trim()),a},a.openFormHandler=function(){var e=a.state.displayForm;a.setState({displayForm:!e,searched:!1}),setTimeout((function(){return a.clearInputFields()}))},a.inputReceiveHandler=function(e){var t=a.state.searchedInput;t=e.target.value,a.setState({searchedInput:t})},a.searchHandler=function(e){e.preventDefault();var t=a.state.searchedInput.toLowerCase(),n=Object(i.a)(a.state.employees),r=[];n.map((function(e){var a=e.department.toLowerCase(),n=e.lastName.toLowerCase();if(a.includes(t)||n.includes(t))return r.push(e)})),a.setState({filteredElements:r,searched:!0})},a.compareList=function(e){var t=1;a.state.employeesSorted||(t=-1),e.sort((function(e,a){var n=e.lastName.toUpperCase(),r=a.lastName.toUpperCase();return n<r?t:n>r?-1*t:0}))},a.state={employees:[{firstName:"Jane",lastName:"Doe",department:"Marketing",phoneNumber:"0256589705"},{firstName:"Nick",lastName:"Mullins",department:"Finance",phoneNumber:"4356855772"},{firstName:"Sam",lastName:"Jackson",department:"Sales",phoneNumber:"0212145544"}],newEmployee:{firstName:{elementConfig:{type:"text",placeholder:"Enter First Name"},value:"",validation:{required:!0},valid:!1,touched:!1},lastName:{elementConfig:{type:"text",placeholder:"Enter Last Name"},value:"",validation:{required:!0},valid:!1,touched:!1},department:{elementConfig:{type:"text",placeholder:"Enter Department"},value:"",validation:{required:!0},valid:!1,touched:!1},phoneNumber:{elementConfig:{type:"number",placeholder:"Enter Number"},value:"",validation:{required:!0},valid:!1,touched:!1}},submitted:!1,formIsValid:!1,employeesSorted:!1,displayForm:!1,searchedInput:"",filteredElements:[],searched:!1},a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=[];for(var a in this.state.newEmployee)t.push({id:a,config:this.state.newEmployee[a]});var n=[];return n=this.state.searched||this.state.filteredElements>0?this.state.filteredElements:this.state.employees,r.a.createElement("div",{className:h.a.App},r.a.createElement("h1",null,"Employee Address Book"),this.state.displayForm?r.a.createElement(F,{handleSubmit:function(t){return e.addEmployeeHandler(t)},changed:this.inputChangedHandler,closeForm:function(){return e.openFormHandler()},formElements:t,key:FormData.id,disabled:!this.state.formIsValid}):null,r.a.createElement(S,{openForm:function(){return e.openFormHandler()},sortList:this.sortListHandler,searched:function(t){return e.searchHandler(t)},inputted:function(t){return e.inputReceiveHandler(t)}}),r.a.createElement("div",{className:h.a.Border,id:"border-div"},n.map((function(t,a){return r.a.createElement(y,{key:a+t.firstName,firstName:t.firstName,lastName:t.lastName,delete:function(){return e.deleteEmployeeHandler(a)},department:t.department,phoneNumber:t.phoneNumber})}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[15,1,2]]]);
//# sourceMappingURL=main.cdd3b24f.chunk.js.map