$wnd.gwtmaterialdemo.runAsyncCallback7("function lBd(){}\nfunction nBd(){}\nfunction Pxb(){Oxb()}\nfunction T$b(a,b){a.o=b}\nfunction Z$b(a){this.a=a}\nfunction _$b(a){this.a=a}\nfunction b_b(a){this.a=a}\nfunction rBd(a){this.a=a}\nfunction tBd(a){this.a=a}\nfunction txb(a){!!jxb&&OA(jxb,a)}\nfunction Oxb(){Oxb=Aub;Nxb=new Ly}\nfunction wxb(){if(!nxb){tyb();nxb=true}}\nfunction U$b(a,b){T$b(a,(zwb(),b.tb))}\nfunction Q$b(a){V$b(a.k,a.o,a.i,a.f)}\nfunction R$b(a){V$b(a.k,a.o,a.i,a.f)}\nfunction P$b(a){a.k.style[ekf]=fkf+a.e+' '+a.g}\nfunction xBd(a){var b;if(!a.d){b=new kBd;a.d=b}return a.d}\nfunction qBd(a){this.a=new rBd(this);this.b=new tBd(this);this.c=a}\nfunction dBd(a,b,c){PIb();mJb.call(this,a,b,c,(Esd(),Csd))}\nfunction rxb(a){uxb();wxb();return pxb((Oxb(),Oxb(),Nxb),a)}\nfunction tyb(){var b=$wnd.onscroll;$wnd.onscroll=AWe(function(a){try{nxb&&txb((qt($doc),rt($doc),new Pxb))}finally{b&&b(a)}})}\nfunction wBd(a){var b,c;if(!a.c){c=new dBd(aGb(WJb(a.a)),(b=xBd(a),b),vBd(a));HIb((ZJb(a.a),c),XLb(ZJb(a.a)));a.c=c}return a.c}\nfunction W$b(a){if(a.a){a.k.style[N_e]=kkf+a.j+'ms '+a.b;a.k.style[O_e]=kkf+a.j+'ms '+a.b}else{a.k.style[N_e]='';a.k.style[O_e]=''}}\nfunction O$b(a){$doc.documentElement.style[YZe]=a.p;(zwb(),a.tb).style[a$e]=(jv(),wXe);!a.Y&&(a.Y=new w2c(a));t2c(a.Y);if(a.c){Mo(a);a.c=false}mA(a,a)}\nfunction kBd(){EJb.call(this);CJb(this,pBd(new qBd(this)));xsd(this.b);Go(this.b,new lBd,jA?jA:(jA=new Ly));Go(this.b,new nBd,(!oA&&(oA=new Ly),oA));U$b(this.b,this.a)}\nfunction X$b(){bRb.call(this,$doc.createElement(WZe),lD(fD(Wrb,1),kZe,2,6,['material-cutout']));this.d=(uyc(),Vtc);this.i=10;this.n=0.8;this.a=true;this.b='ease';this.f=false;this.c=false;this.j=500;this.k=$doc.createElement(WZe);qs((zwb(),this.tb),this.k);this.tb.style[YZe]=(Ew(),AYe);this.tb.style[a$e]=(jv(),wXe)}\nfunction V$b(a,b,c,d){var e,f,g,h,i;h=((b.offsetTop||0)|0)-$wnd.Math.max($wnd.$('html').scrollTop(),$wnd.$(C0e).scrollTop());g=dt(tt(b.ownerDocument),b);i=(b.offsetWidth||0)|0;f=(b.offsetHeight||0)|0;if(d){if(i!=f){e=i-f;if(i>f){f+=e;h-=e/2}else{e=-e;i+=e;g-=e/2}}}h-=c;g-=c;i+=c*2;f+=c*2;$wnd.$(a).css($Ze,h+HYe);$wnd.$(a).css(uYe,g+HYe);$wnd.$(a).css(tXe,i+HYe);$wnd.$(a).css(sXe,f+HYe)}\nfunction Ws(a){var b=a.offsetLeft,c=a.offsetTop;var d=a.offsetWidth,e=a.offsetHeight;if(a.parentNode!=a.offsetParent){b-=a.parentNode.offsetLeft;c-=a.parentNode.offsetTop}var f=a.parentNode;while(f&&f.nodeType==1){b<f.scrollLeft&&(f.scrollLeft=b);b+d>f.scrollLeft+f.clientWidth&&(f.scrollLeft=b+d-f.clientWidth);c<f.scrollTop&&(f.scrollTop=c);c+e>f.scrollTop+f.clientHeight&&(f.scrollTop=c+e-f.clientHeight);var g=f.offsetLeft,h=f.offsetTop;if(f.parentNode!=f.offsetParent){g-=f.parentNode.offsetLeft;h-=f.parentNode.offsetTop}b+=g-f.scrollLeft;c+=h-f.scrollTop;f=f.parentNode}}\nfunction S$b(a){var b,c,d,e,f;c=(zwb(),a.tb).style;c[tXe]=(lx(),'100.0%');c[sXe]='100.0%';c[XZe]=(Tw(),FYe);c[$Ze]=ZZe;c[uYe]=ZZe;c[b$e]='10000';a.k.className='material-cutout-focus';c=a.k.style;c[Z1e]=\"''\";c[XZe]=EYe;c[b$e]='-1';if(!a.o){throw _tb(new sKe('The target element should be set before calling open().'))}Ws(a.o);a.g==null&&(d=new aRb($doc.createElement(WZe)),nQb(d,a.d),e=d.tb.style,e[XZe]=FYe,undefined,e[tXe]='1.0px',undefined,e[sXe]='1.0px',undefined,e[uYe]='-10.0px',undefined,e[$Ze]='-10.0px',undefined,e[b$e]='-10000',undefined,f=coc(a.d),a.n<1&&gLe(f.substr(0,4),'rgb(')&&(f=lLe(lLe(f,'rgb(','rgba('),')',', '+a.n+')')),a.g=f,undefined);b=$doc.documentElement.style;a.p=b[YZe];b[YZe]=AYe;a.e==null&&(a.e=(pPb==null&&(pPb=$wnd.$(C0e)),pPb).width()+300+HYe);W$b(a);if(a.a){a.k.style[ekf]='0px 0px 0px 0rem '+a.g;Gr((zr(),yr),new Z$b(a))}else{a.k.style[ekf]=fkf+a.e+' '+a.g}if(a.f){a.k.style[gkf]=Saf;a.k.style[hkf]=Saf;a.k.style[ikf]='49.9%';a.k.style[jkf]='49.9%'}else{a.k.style[gkf]='';a.k.style[hkf]='';a.k.style[ikf]='';a.k.style[jkf]=''}V$b(a.k,a.o,a.i,a.f);lQb(a,qxb(new _$b(a)));lQb(a,rxb(new b_b(a)));a.tb.style[a$e]='';if(!a.sb){a.c=true;Ryb((IDb(),MDb(null)),a)}rA(a,a)}\nfunction pBd(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p;b=new ejc;sPb(b,(c=new c6b,sPb(c,(e=new sld,Is(ho(e.a),(Tvb(),(new Hvb(Uvb($6e))).a)),GA(e,$6e),e)),sPb(c,(f=new Lye,God(f,(g=new GLe,g.a+='\\u2003&lt;!-- Addin Import --&gt;<br> xmlns:ma=\"urn:import:gwt.material.design.addins.client\"<br><br> &lt;!-- Addin Usage --&gt;<br> &lt;ma:cutout.MaterialCutOut ui:field=\"cutout\" backgroundColor=\"BLUE\" circle=\"true\" opacity=\"0.8\" textAlign=\"CENTER\"&gt;<br> \\u2003&lt;m:MaterialTitle title=\"New Feature\" description=\"Description of your new Feature\" textColor=\"WHITE\"/&gt;<br> \\u2003&lt;m:MaterialButton text=\"Close\" ui:field=\"btnCutOutClose\" textColor=\"BLUE\" backgroundColor=\"WHITE\"/&gt;<br> &lt;/ma:cutout.MaterialCutOut&gt;',new Bvb(g.a)).a),zo((zwb(),f.tb),_6e,true),f)),zo(c.tb,r3e,true),c));sPb(b,(d=new c6b,sPb(d,(h=new sld,Eod(h.b,'Click the icon below to show a material cutout.'),Is(ho(h.a),(new Hvb(Uvb(mkf))).a),GA(h,mkf),h)),sPb(d,(i=new Mfd,Kfd(i,(JSc(),wNc)),wPb(i,a.a),a.c.a=i,i)),sPb(d,(j=new X$b,sPb(j,(k=new sld,Eod(k.b,'Description of your new Feature'),Is(ho(k.a),(new Hvb(Uvb(nkf))).a),GA(k,nkf),SQb(k,(uyc(),fyc)),k)),sPb(j,(l=new wWb,nQb(l,fyc),DXb(l.k,t7e),l.k.ob||sPb(l,l.k),SQb(l,Vtc),wPb(l,a.b),l)),RQb(j,(JUc(),FUc)),j.n=0.8,j.g=null,j.f=true,a.c.b=j,j)),sPb(d,(m=new Lye,God(m,(n=new GLe,n.a+='\\u2003&lt; -- Target Element --&gt;<br> &lt;m:MaterialIcon iconType=\"POLYMER\" ui:field=\"btnCutOut\"/&gt;<br> &lt;ma:cutout.MaterialCutOut ui:field=\"cutout\" backgroundColor=\"BLUE\" circle=\"true\" opacity=\"0.8\" textAlign=\"CENTER\"&gt;<br> \\u2003&lt;m:MaterialTitle title=\"New Feature\" description=\"Description of your new Feature\" textColor=\"WHITE\"/&gt;<br> \\u2003&lt;m:MaterialButton text=\"Close\" ui:field=\"btnCutOutClose\" textColor=\"BLUE\" backgroundColor=\"WHITE\"/&gt;<br> &lt;/ma:cutout.MaterialCutOut&gt;<br>',new Bvb(n.a)).a),zo(m.tb,_6e,true),m)),sPb(d,(o=new Lye,God(o,(p=new GLe,p.a+='\\u2003@UiField MaterialCutOut cutout;<br><br>  &lt;-- Target Element --&gt;<br> @UiField MaterialIcon btnCutOut; <br><br>  @UiHandler(\"btnCutOut\")<br> void onCutOut(ClickEvent e){<br> \\u2003cutout.setTarget(btnCutOut);<br> \\u2003cutout.open();<br> }',new Bvb(p.a)).a),zo(o.tb,e7e,true),o)),zo(d.tb,r3e,true),d));return b}\nvar ekf='boxShadow',fkf='0px 0px 0px ',gkf='WebkitBorderRadius',hkf='borderRadius',ikf='webkitBorderTopLeftRadius',jkf='borderTopLeftRadius',kkf='box-shadow ',lkf='gwt.material.design.addins.client.cutout',mkf='Material Cut Out',nkf='New Feature';var nxb=false;zub(768,LYe,{},Pxb);_.gd=function Qxb(a){R$b(XD(a,3023).a)};_.hd=function Rxb(){return Nxb};var Nxb;var nJ=MJe(KWe,'Window/ScrollEvent',768);zub(2300,26,Q_e,X$b);_.Re=function Y$b(a){this.d=a;this.g=null};_.a=false;_.c=false;_.f=false;_.i=0;_.j=0;_.n=0;var NN=MJe(lkf,'MaterialCutOut',2300);zub(2301,1,{},Z$b);_.$c=function $$b(){P$b(this.a)};var KN=MJe(lkf,'MaterialCutOut/lambda$0$Type',2301);zub(2302,1,R$e,_$b);_.yd=function a_b(a){Q$b(this.a)};var LN=MJe(lkf,'MaterialCutOut/lambda$1$Type',2302);zub(2303,1,{8:1,3023:1},b_b);var MN=MJe(lkf,'MaterialCutOut/lambda$2$Type',2303);zub(966,56,p_e,dBd);_.De=function eBd(){kye();WIb(this,new mye('CutOuts','The MaterialCutOut is an excellent component to show users about new features and important components (buttons, labels and so) on the UI.','addins/cutouts/CutOutsView',''))};var r1=MJe(v8e,'CutOutsPresenter',966);zub(1330,65,q_e,kBd);var x1=MJe(v8e,'CutOutsView',1330);zub(1331,1,X$e,lBd);_.wd=function mBd(a){xld(new Ald(lD(fD(LK,1),_We,22,0,[])),'Close Event Fired',l0e,null)};var s1=MJe(v8e,'CutOutsView/lambda$0$Type',1331);zub(1332,1,_3e,nBd);_.xd=function oBd(a){xld(new Ald(lD(fD(LK,1),_We,22,0,[])),'Open Event Fired',l0e,null)};var t1=MJe(v8e,'CutOutsView/lambda$1$Type',1332);zub(1867,1,{},qBd);var w1=MJe(v8e,'CutOutsView_BinderImpl/Widgets',1867);zub(1868,1,$_e,rBd);_.nd=function sBd(a){S$b(this.a.c.b)};var u1=MJe(v8e,'CutOutsView_BinderImpl/Widgets/1',1868);zub(1869,1,$_e,tBd);_.nd=function uBd(a){O$b(this.a.c.b)};var v1=MJe(v8e,'CutOutsView_BinderImpl/Widgets/2',1869);zub(804,1,w7e);_.Yc=function DBd(){mNb(this.b,wBd(this.a.a))};AWe(Jq)(7);\n//# sourceURL=gwtmaterialdemo-7.js\n")
