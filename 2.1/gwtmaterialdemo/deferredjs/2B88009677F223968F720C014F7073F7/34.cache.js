$wnd.gwtmaterialdemo.runAsyncCallback34("function X3d(){}\nfunction b4d(){}\nfunction Z3d(a){this.a=a}\nfunction _3d(a){this.a=a}\nfunction f4d(a){var b;if(!a.d){b=new U3d;a.d=b}return a.d}\nfunction U3d(){wKb.call(this);uKb(this,V3d(new W3d(this)))}\nfunction L3d(a,b,c){HJb();eKb.call(this,a,b,c,(ntd(),ltd))}\nfunction T3d(a){KKe(Lkd(a.a))?Rkd(a.a,(JKe(),false),true):Rkd(a.a,(JKe(),true),true)}\nfunction S3d(a){KKe(Lkd(a.a))?Rkd(a.a,(JKe(),false),false):Rkd(a.a,(JKe(),true),false)}\nfunction W3d(a){this.a=new X3d;this.b=new Z3d(this);this.c=new _3d(this);this.d=new b4d;this.e=a}\nfunction e4d(a){var b,c;if(!a.c){c=new L3d(UGb(OKb(a.a)),(b=f4d(a),b),d4d(a));zJb((RKb(a.a),c),PMb(RKb(a.a)));a.c=c}return a.c}\nfunction V3d(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v;b=new S6b;kQb(b,(c=new S6b,kQb(c,(e=new cmd,Vs(ho(e.a),(Owb(),(new Cwb(Pwb(Nff))).a)),QB(e,Nff),e)),kQb(c,(f=new Skd,brc((!f.X&&(f.X=new drc(f)),f.X),'l0'),Rkd(f,(JKe(),true),false),f)),kQb(c,(g=new Skd,brc((!g.X&&(g.X=new drc(g)),g.X),'l0'),Rkd(g,false,false),g)),kQb(c,(h=new Skd,brc((!h.X&&(h.X=new drc(h)),h.X),'l0'),Rkd(h,true,false),Nkd(h,false),h)),kQb(c,(i=new Skd,brc((!i.X&&(i.X=new drc(i)),i.X),'l0'),Nkd(i,false),i)),kQb(c,(j=new dze,qpd(j,(k=new OMe,k.a+='\\u2003&lt;m:MaterialSwitch ui:field=\"switch1\" value=\"true\" grid=\"l0\"/&gt;<br> &lt;m:MaterialSwitch ui:field=\"switch2\" value=\"false\" grid=\"l0\"/&gt;<br> &lt;m:MaterialSwitch enabled=\"false\" value=\"true\" grid=\"l0\"/&gt;<br> &lt;m:MaterialSwitch enabled=\"false\" grid=\"l0\"/&gt;<br>',new wwb(k.a)).a),zo((uxb(),j.tb),c8e,true),j)),zo(c.tb,q4e,true),c));kQb(b,(d=new S6b,kQb(d,(l=new Rbd,fRb(l,(izc(),Huc)),Orc((!l.gb&&(l.gb=new Prc(l)),l.gb),1),uRb(l,(by(),_x)),Vs(l.tb,(new Cwb(Pwb(l8e))).a),nRb(l,(mx(),lx)),IRb(l,uuc),l)),kQb(d,(m=new cmd,Vs(ho(m.a),(new Cwb(Pwb(uqf))).a),QB(m,uqf),m)),kQb(d,(n=new Skd,tYb(n.f,'On'),tYb(n.e,'Off'),Go(n,a.a,(!NB&&(NB=new Vz),NB)),n)),kQb(d,(o=new dze,qpd(o,(p=new OMe,p.a+='\\u2003@UiHandler(\"mSwitch\") <br> void onValueChange(ValueChangeEvent&lt;Boolean&gt; e) { <br> \\u2003MaterialToast.fireToast(\"Value \" + e.getValue()); <br> }',new wwb(p.a)).a),zo(o.tb,h8e,true),o)),kQb(d,(q=new cmd,Vs(ho(q.a),(new Cwb(Pwb(vqf))).a),QB(q,vqf),q)),kQb(d,(r=new Skd,tYb(r.f,'On'),tYb(r.e,'Off'),Go(r,a.d,(!NB&&(NB=new Vz),NB)),a.e.a=r,r)),kQb(d,(s=new mXb,s.tb.style[M0e]=(vy(),N0e),tYb(s.k,n8e),s.k.ob||kQb(s,s.k),oQb(s,a.b),s)),kQb(d,(t=new mXb,tYb(t.k,o8e),t.k.ob||kQb(t,t.k),oQb(t,a.c),t)),kQb(d,(u=new dze,qpd(u,(v=new OMe,v.a+='\\u2003// Set Value with firing the value change event <br> mSwitch.setValue(true, true); <br> // Set Value without firing the value change event <br> mSwitch.setValue(true);<br> mSwitch.setValue(true, false);',new wwb(v.a)).a),zo(u.tb,h8e,true),u)),zo(d.tb,q4e,true),d));return b}\nvar uqf='Switch : Value Change Event',vqf='Switch : setValue(value, fireEvents)';uvb(1009,54,u0e,L3d);_.Fe=function M3d(){Eye();OJb(this,new Gye(eif,'On/off switches toggle the state of a single settings option. The option that the switch controls, as well as the state it\\u2019s in, should be made clear from the corresponding inline label. Switches take on the same visual properties of the radio button.','components/forms/switches/SwitchView','https://material.io/guidelines/components/selection-controls.html#selection-controls-switch'))};var veb=WKe(mef,'SwitchPresenter',1009);uvb(1461,64,v0e,U3d);var Beb=WKe(mef,'SwitchView',1461);uvb(2080,1,{},W3d);var Aeb=WKe(mef,'SwitchView_BinderImpl/Widgets',2080);uvb(2081,1,X_e,X3d);_.Bd=function Y3d(a){lmd(wqf+a.a)};var web=WKe(mef,'SwitchView_BinderImpl/Widgets/1',2081);uvb(2082,1,a1e,Z3d);_.od=function $3d(a){S3d(this.a.e)};var xeb=WKe(mef,'SwitchView_BinderImpl/Widgets/2',2082);uvb(2083,1,a1e,_3d);_.od=function a4d(a){T3d(this.a.e)};var yeb=WKe(mef,'SwitchView_BinderImpl/Widgets/3',2083);uvb(2084,1,X_e,b4d);_.Bd=function c4d(a){lmd(wqf+a.a)};var zeb=WKe(mef,'SwitchView_BinderImpl/Widgets/4',2084);uvb(874,1,A8e);_.Yc=function l4d(){eOb(this.b,e4d(this.a.a))};IXe(Kq)(34);\n//# sourceURL=gwtmaterialdemo-34.js\n")