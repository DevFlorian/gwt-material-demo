$wnd.gwtmaterialdemo.runAsyncCallback7("function hvd(){}\nfunction jvd(){}\nfunction Cvb(){Bvb()}\nfunction SXb(a,b){a.o=b}\nfunction XXb(a){this.a=a}\nfunction ZXb(a){this.a=a}\nfunction _Xb(a){this.a=a}\nfunction nvd(a){this.a=a}\nfunction pvd(a){this.a=a}\nfunction gvb(a){!!Yub&&pA(Yub,a)}\nfunction Bvb(){Bvb=lsb;Avb=new wy}\nfunction jvb(){if(!avb){cwb();avb=true}}\nfunction fvd(a){SXb(a.b,ho(a.a));RXb(a.b)}\nfunction PXb(a){TXb(a.k,a.o,a.i,a.f)}\nfunction QXb(a){TXb(a.k,a.o,a.i,a.f)}\nfunction OXb(a){a.k.style[k8e]=l8e+a.e+' '+a.g}\nfunction tvd(a){var b;if(!a.d){b=new gvd;a.d=b}return a.d}\nfunction evb(a){hvb();jvb();return cvb((Bvb(),Bvb(),Avb),a)}\nfunction $ud(a,b,c){fGb();EGb.call(this,a,b,c,(Hmd(),Fmd))}\nfunction mvd(a){this.a=new nvd(this);this.b=new pvd(this);this.c=a}\nfunction svd(a){var b,c;if(!a.c){c=new $ud(sDb(mHb(a.a)),(b=tvd(a),b),rvd(a));ZFb((pHb(a.a),c),lJb(pHb(a.a)));a.c=c}return a.c}\nfunction cwb(){var b=$wnd.onscroll;$wnd.onscroll=PLe(function(a){try{avb&&gvb((Ws($doc),Ys($doc),new Cvb))}finally{b&&b(a)}})}\nfunction UXb(a){if(a.a){a.k.style[sQe]=o8e+a.j+'ms '+a.b;a.k.style[tQe]=o8e+a.j+'ms '+a.b}else{a.k.style[sQe]='';a.k.style[tQe]=''}}\nfunction gvd(){WGb.call(this);UGb(this,lvd(new mvd(this)));Amd(this.b);Fo(this.b,new hvd,Mz?Mz:(Mz=new wy));Fo(this.b,new jvd,(!Rz&&(Rz=new wy),Rz))}\nfunction NXb(a){$doc.documentElement.style[IOe]=a.p;(kub(),a.sb).style[MOe]=(Wu(),LMe);!a.X&&(a.X=new TYc(a));QYc(a.X);if(a.c){Lo(a);a.c=false}Pz(a,a)}\nfunction VXb(){nOb.call(this,$doc.createElement(HOe),OC(IC(Jpb,1),_Oe,2,6,['material-cutout']));this.d=(otc(),Ooc);this.i=10;this.n=0.8;this.a=true;this.b='ease';this.f=false;this.c=false;this.j=500;this.k=$doc.createElement(HOe);js((kub(),this.sb),this.k);this.sb.style[IOe]=(pw(),VNe);this.sb.style[MOe]=(Wu(),LMe)}\nfunction TXb(a,b,c,d){var e,f,g,h,i;h=Vs(b)-(FMb==null&&(FMb=$wnd.$(kNe)),FMb).scrollTop();g=Us(b);i=(b.offsetWidth||0)|0;f=(b.offsetHeight||0)|0;if(d){if(i!=f){e=i-f;if(i>f){f+=e;h-=e/2}else{e=-e;i+=e;g-=e/2}}}h-=c;g-=c;i+=c*2;f+=c*2;$wnd.$(a).css(KOe,h+$Ne);$wnd.$(a).css(PNe,g+$Ne);$wnd.$(a).css(IMe,i+$Ne);$wnd.$(a).css(HMe,f+$Ne)}\nfunction Ns(a){var b=a.offsetLeft,c=a.offsetTop;var d=a.offsetWidth,e=a.offsetHeight;if(a.parentNode!=a.offsetParent){b-=a.parentNode.offsetLeft;c-=a.parentNode.offsetTop}var f=a.parentNode;while(f&&f.nodeType==1){b<f.scrollLeft&&(f.scrollLeft=b);b+d>f.scrollLeft+f.clientWidth&&(f.scrollLeft=b+d-f.clientWidth);c<f.scrollTop&&(f.scrollTop=c);c+e>f.scrollTop+f.clientHeight&&(f.scrollTop=c+e-f.clientHeight);var g=f.offsetLeft,h=f.offsetTop;if(f.parentNode!=f.offsetParent){g-=f.parentNode.offsetLeft;h-=f.parentNode.offsetTop}b+=g-f.scrollLeft;c+=h-f.scrollTop;f=f.parentNode}}\nfunction RXb(a){var b,c,d,e,f;c=(kub(),a.sb).style;c[IMe]=(Yw(),'100.0%');c[HMe]='100.0%';c[mNe]=(Ew(),nNe);c[KOe]=JOe;c[PNe]=JOe;c[NOe]='10000';a.k.className='material-cutout-focus';c=a.k.style;c[DSe]=\"''\";c[mNe]=oNe;c[NOe]='-1';if(!a.o){throw Nrb(new cAe('The target element should be set before calling open().'))}Ns(a.o);a.g==null&&(d=new mOb($doc.createElement(HOe)),DNb(d,a.d),e=d.sb.style,e[mNe]=nNe,undefined,e[IMe]='1.0px',undefined,e[HMe]='1.0px',undefined,e[PNe]='-10.0px',undefined,e[KOe]='-10.0px',undefined,e[NOe]='-10000',undefined,f=Fjc(a.d),a.n<1&&UAe(f.substr(0,4),'rgb(')&&(f=ZAe(ZAe(f,'rgb(','rgba('),')',', '+a.n+')')),a.g=f,undefined);b=$doc.documentElement.style;a.p=b[IOe];b[IOe]=VNe;a.e==null&&(a.e=(FMb==null&&(FMb=$wnd.$(kNe)),FMb).width()+300+$Ne);UXb(a);if(a.a){a.k.style[k8e]='0px 0px 0px 0rem '+a.g;zr((sr(),rr),new XXb(a))}else{a.k.style[k8e]=l8e+a.e+' '+a.g}if(a.f){a.k.style[m8e]=r_e;a.k.style[n8e]=r_e}else{a.k.style[m8e]='';a.k.style[n8e]=''}TXb(a.k,a.o,a.i,a.f);BNb(a,dvb(new ZXb(a)));BNb(a,evb(new _Xb(a)));a.sb.style[MOe]='';if(!a.rb){a.c=true;zwb((eBb(),iBb(null)),a)}Uz(a,a)}\nfunction lvd(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p;b=new $ec;IMb(b,(c=new W2b,IMb(c,(e=new wfd,zs(ho(e.a),(Etb(),(new stb(Ftb(CXe))).a)),hA(e,CXe),e)),IMb(c,(f=new Bqe,Kid(f,(g=new sBe,g.a+='\\u2003&lt;!-- Addin Import --&gt;<br> xmlns:ma=\"urn:import:gwt.material.design.addins.client\"<br><br> &lt;!-- Addin Usage --&gt;<br> &lt;ma:cutout.MaterialCutOut ui:field=\"cutout\" backgroundColor=\"BLUE\" circle=\"true\" opacity=\"0.8\" textAlign=\"CENTER\"&gt;<br> \\u2003&lt;m:MaterialTitle title=\"New Feature\" description=\"Description of your new Feature\" textColor=\"WHITE\"/&gt;<br> \\u2003&lt;m:MaterialButton text=\"Close\" ui:field=\"btnCutOutClose\" textColor=\"BLUE\" backgroundColor=\"WHITE\"/&gt;<br> &lt;/ma:cutout.MaterialCutOut&gt;',new mtb(g.a)).a),yo((kub(),f.sb),DXe,true),f)),yo(c.sb,STe,true),c));IMb(b,(d=new W2b,IMb(d,(h=new wfd,Iid(h.b,'Click the icon below to show a material cutout.'),zs(ho(h.a),(new stb(Ftb(q8e))).a),hA(h,q8e),h)),IMb(d,(i=new s9c,q9c(i,(nNc(),aIc)),MMb(i,a.a),a.c.a=i,i)),IMb(d,(j=new VXb,IMb(j,(k=new wfd,Iid(k.b,'Description of your new Feature'),zs(ho(k.a),(new stb(Ftb(r8e))).a),hA(k,r8e),dOb(k,(otc(),_sc)),k)),IMb(j,(l=new yTb,DNb(l,_sc),EUb(l.j,YXe),l.j.nb||IMb(l,l.j),dOb(l,Ooc),MMb(l,a.b),l)),cOb(j,(vPc(),rPc)),j.n=0.8,j.g=null,j.f=true,a.c.b=j,j)),IMb(d,(m=new Bqe,Kid(m,(n=new sBe,n.a+='\\u2003&lt; -- Target Element --&gt;<br> &lt;m:MaterialIcon iconType=\"POLYMER\" ui:field=\"btnCutOut\"/&gt;<br> &lt;ma:cutout.MaterialCutOut ui:field=\"cutout\" backgroundColor=\"BLUE\" circle=\"true\" opacity=\"0.8\" textAlign=\"CENTER\"&gt;<br> \\u2003&lt;m:MaterialTitle title=\"New Feature\" description=\"Description of your new Feature\" textColor=\"WHITE\"/&gt;<br> \\u2003&lt;m:MaterialButton text=\"Close\" ui:field=\"btnCutOutClose\" textColor=\"BLUE\" backgroundColor=\"WHITE\"/&gt;<br> &lt;/ma:cutout.MaterialCutOut&gt;<br>',new mtb(n.a)).a),yo(m.sb,DXe,true),m)),IMb(d,(o=new Bqe,Kid(o,(p=new sBe,p.a+='\\u2003@UiField MaterialCutOut cutout;<br><br>  &lt;-- Target Element --&gt;<br> @UiField MaterialIcon btnCutOut; <br><br>  @UiHandler(\"btnCutOut\")<br> void onCutOut(ClickEvent e){<br> \\u2003cutout.setTarget(btnCutOut);<br> \\u2003cutout.open();<br> }',new mtb(p.a)).a),yo(o.sb,IXe,true),o)),yo(d.sb,STe,true),d));return b}\nvar k8e='boxShadow',l8e='0px 0px 0px ',m8e='WebkitBorderRadius',n8e='borderRadius',o8e='box-shadow ',p8e='gwt.material.design.addins.client.cutout',q8e='Material Cut Out',r8e='New Feature';var avb=false;ksb(737,cOe,{},Cvb);_.ed=function Dvb(a){QXb(yD(a,2918).a)};_.fd=function Evb(){return Avb};var Avb;var KI=wze(ZLe,'Window/ScrollEvent',737);ksb(2214,26,vQe,VXb);_.Pe=function WXb(a){this.d=a;this.g=null};_.a=false;_.c=false;_.f=false;_.i=0;_.j=0;_.n=0;var eN=wze(p8e,'MaterialCutOut',2214);ksb(2215,1,{},XXb);_.Yc=function YXb(){OXb(this.a)};var bN=wze(p8e,'MaterialCutOut/lambda$0$Type',2215);ksb(2216,1,yPe,ZXb);_.wd=function $Xb(a){PXb(this.a)};var cN=wze(p8e,'MaterialCutOut/lambda$1$Type',2216);ksb(2217,1,{8:1,2918:1},_Xb);var dN=wze(p8e,'MaterialCutOut/lambda$2$Type',2217);ksb(932,57,ZPe,$ud);_.Be=function _ud(){aqe();mGb(this,new cqe('CutOuts','The MaterialCutOut is an excellent component to show users about new features and important components (buttons, labels and so) on the UI.','addins/cutouts/CutOutsView',''))};var k0=wze(ZYe,'CutOutsPresenter',932);ksb(1290,65,$Pe,gvd);var q0=wze(ZYe,'CutOutsView',1290);ksb(1291,1,EPe,hvd);_.ud=function ivd(a){Bfd(new Efd(OC(IC(dK,1),oMe,21,0,[])),'Close Event Fired',OQe,null)};var l0=wze(ZYe,'CutOutsView/lambda$0$Type',1291);ksb(1292,1,zUe,jvd);_.vd=function kvd(a){Bfd(new Efd(OC(IC(dK,1),oMe,21,0,[])),'Open Event Fired',OQe,null)};var m0=wze(ZYe,'CutOutsView/lambda$1$Type',1292);ksb(1806,1,{},mvd);var p0=wze(ZYe,'CutOutsView_BinderImpl/Widgets',1806);ksb(1807,1,EQe,nvd);_.ld=function ovd(a){fvd(this.a.c)};var n0=wze(ZYe,'CutOutsView_BinderImpl/Widgets/1',1807);ksb(1808,1,EQe,pvd);_.ld=function qvd(a){NXb(this.a.c.b)};var o0=wze(ZYe,'CutOutsView_BinderImpl/Widgets/2',1808);ksb(773,1,_Xe);_.Wc=function zvd(){CKb(this.b,svd(this.a.a))};PLe(Fq)(7);\n//# sourceURL=gwtmaterialdemo-7.js\n")
