(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{F4UR:function(n,t,e){"use strict";e.r(t),e.d(t,"LoginPageModule",function(){return w});var o=e("ofXK"),i=e("3Pt+"),r=e("TEn/"),c=e("tyNb"),s=e("mrSG"),a=e("gcOT"),d=e("fXoL"),l=e("lGQG");function f(n,t){1&n&&(d.Qb(0,"div",13),d.pc(1," Username is required "),d.Pb())}function u(n,t){1&n&&(d.Qb(0,"div",13),d.pc(1," Must be a valid email address "),d.Pb())}function b(n,t){1&n&&(d.Qb(0,"div",13),d.pc(1," Password is required "),d.Pb())}const g=function(){return["/signup"]},{Network:p}=a.b,m=[{path:"",component:(()=>{class n{constructor(n,t,e){this.auth=n,this.loadingCtrl=t,this.toastCtrl=e,this.pwdType="password",this.pwdIcon="eye-off",this.password_icon="",this.loginForm=new i.e({email:new i.c("",[i.n.required,i.n.email]),password:new i.c("",i.n.required)})}ngOnInit(){}showHidePWD(){this.pwdType="text"===this.pwdType?"password":"text",this.pwdIcon="eye-off"===this.pwdIcon?"eye":"eye-off"}login(){return Object(s.b)(this,void 0,void 0,function*(){const n=yield p.getStatus();if(this.submitted=!0,this.loginForm.valid)if(n.connected)this.auth.login(this.loginForm.value.email,this.loginForm.value.password);else{const n=yield this.toastCtrl.create({message:"Cannot proceed. No internet connection, please enable and try again.",duration:4e3});yield n.present()}})}}return n.\u0275fac=function(t){return new(t||n)(d.Nb(l.a),d.Nb(r.x),d.Nb(r.C))},n.\u0275cmp=d.Hb({type:n,selectors:[["app-login"]],decls:19,vars:8,consts:[["fullscreen","true","scroll-y","true",1,"login","no-scroll"],[1,"main"],[1,"ion-text-center"],[1,"form"],[3,"formGroup"],[1,"outter"],["required","","formControlName","email","placeholder","test@test.com","type","email",1,"ion-input"],["class","invalid-login",4,"ngIf"],["required","","formControlName","password","placeholder","Password","type","password",1,"ion-input",3,"type"],["slot","end","ngDefaultControl","",1,"passwordIcon",3,"name","click"],[1,"buttons"],["block","",1,"buttonhome",3,"routerLink"],["block","",1,"buttonhome",2,"margin-left","0.5rem",3,"click"],[1,"invalid-login"]],template:function(n,t){1&n&&(d.Qb(0,"ion-content",0),d.Qb(1,"section",1),d.Qb(2,"h1",2),d.pc(3,"TMS"),d.Pb(),d.Qb(4,"div",3),d.Qb(5,"form",4),d.Qb(6,"div",5),d.Ob(7,"ion-input",6),d.Pb(),d.oc(8,f,2,0,"div",7),d.oc(9,u,2,0,"div",7),d.Qb(10,"div",5),d.Ob(11,"ion-input",8),d.Qb(12,"ion-icon",9),d.Yb("click",function(){return t.showHidePWD()}),d.Pb(),d.Pb(),d.oc(13,b,2,0,"div",7),d.Pb(),d.Qb(14,"div",10),d.Qb(15,"ion-button",11),d.pc(16," Create "),d.Pb(),d.Qb(17,"ion-button",12),d.Yb("click",function(){return t.login()}),d.pc(18," Login "),d.Pb(),d.Pb(),d.Pb(),d.Pb(),d.Pb()),2&n&&(d.Db(5),d.fc("formGroup",t.loginForm),d.Db(3),d.fc("ngIf",t.loginForm.hasError("required","email")&&t.submitted),d.Db(1),d.fc("ngIf",t.loginForm.hasError("pattern","email")&&t.submitted),d.Db(2),d.fc("type",t.pwdType),d.Db(1),d.fc("name",t.pwdIcon),d.Db(1),d.fc("ngIf",t.loginForm.hasError("required","password")&&t.submitted),d.Db(2),d.fc("routerLink",d.gc(7,g)))},directives:[r.j,i.o,i.k,i.f,r.o,r.B,i.m,i.j,i.d,o.k,r.n,i.a,r.g,r.A,c.h],styles:[".login[_ngcontent-%COMP%]{background:url(driver.88d348f9e9dd1c5d4f66.jpg) no-repeat;background-size:cover}.inner-div[_ngcontent-%COMP%], .login[_ngcontent-%COMP%]{width:100%;height:100vh;top:0;right:0;bottom:0;left:0}.inner-div[_ngcontent-%COMP%]{background:rgba(15,15,15,.8156862745098039);z-index:800}ion-content[_ngcontent-%COMP%], ion-toolbar[_ngcontent-%COMP%]{--background:transparent;--color:#fff}.scroll-content[_ngcontent-%COMP%]{--padding-bottom:0!important}.main[_ngcontent-%COMP%]{z-index:800;display:flex;flex-direction:column;justify-content:center;height:100%;width:100%;padding:0 12%}.main[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:2rem;margin-bottom:2rem;--color:#fff}.outter[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:center;align-items:center;padding:0 .5rem;color:#181818;background:#fff;width:100%;margin:1rem 0;font-size:1.2rem;height:52px;font-weight:400;border-radius:4rem}.outter[_ngcontent-%COMP%]   .ion-input[_ngcontent-%COMP%]{font-size:17px!important}.passwordIcon[_ngcontent-%COMP%]{font-size:2rem}.buttons[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-between;align-items:center;margin-top:1rem}.buttons[_ngcontent-%COMP%]   .buttonhome[_ngcontent-%COMP%]{text-transform:capitalize!important;--background:#fff;font-weight:400;margin:.5rem 0;color:#000;width:10rem;height:2.5rem}.invalid-login[_ngcontent-%COMP%]{position:relative;color:#fff;margin:-.5rem 0 0 1rem}a[_ngcontent-%COMP%]{font-weight:400;color:#fff}"]}),n})()}];let h=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=d.Lb({type:n}),n.\u0275inj=d.Kb({imports:[[c.i.forChild(m)],c.i]}),n})(),w=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=d.Lb({type:n}),n.\u0275inj=d.Kb({imports:[[o.c,i.l,r.v,h]]}),n})()}}]);