$wnd.gwtmaterialdemo.runAsyncCallback7("function XBd(){}\nfunction ZBd(){}\nfunction Myb(){Lyb()}\nfunction J_b(a,b){a.o=b}\nfunction O_b(a){this.a=a}\nfunction Q_b(a){this.a=a}\nfunction S_b(a){this.a=a}\nfunction bCd(a){this.a=a}\nfunction dCd(a){this.a=a}\nfunction Rs(a){nt((ct(),a))}\nfunction ryb(a){!!hyb&&YB(hyb,a)}\nfunction Lyb(){Lyb=vvb;Kyb=new Vz}\nfunction uyb(){if(!lyb){mzb();lyb=true}}\nfunction G_b(a){K_b(a.k,a.o,a.i,a.f)}\nfunction H_b(a){K_b(a.k,a.o,a.i,a.f)}\nfunction VBd(a){J_b(a.b,ho(a.a));I_b(a.b)}\nfunction F_b(a){a.k.style[blf]=clf+a.e+' '+a.g}\nfunction hCd(a){var b;if(!a.d){b=new WBd;a.d=b}return a.d}\nfunction aCd(a){this.a=new bCd(this);this.b=new dCd(this);this.c=a}\nfunction OBd(a,b,c){HJb();eKb.call(this,a,b,c,(ntd(),ltd))}\nfunction pyb(a){syb();uyb();return nyb((Lyb(),Lyb(),Kyb),a)}\nfunction mzb(){var b=$wnd.onscroll;$wnd.onscroll=IXe(function(a){try{lyb&&ryb((ru($doc),su($doc),new Myb))}finally{b&&b(a)}})}\nfunction gCd(a){var b,c;if(!a.c){c=new OBd(UGb(OKb(a.a)),(b=hCd(a),b),fCd(a));zJb((RKb(a.a),c),PMb(RKb(a.a)));a.c=c}return a.c}\nfunction L_b(a){if(a.a){a.k.style[P0e]=flf+a.j+'ms '+a.b;a.k.style[Q0e]=flf+a.j+'ms '+a.b}else{a.k.style[P0e]='';a.k.style[Q0e]=''}}\nfunction WBd(){wKb.call(this);uKb(this,_Bd(new aCd(this)));gtd(this.b);Go(this.b,new XBd,tB?tB:(tB=new Vz));Go(this.b,new ZBd,(!yB&&(yB=new Vz),yB))}\nfunction E_b(a){$doc.documentElement.style[f_e]=a.p;(uxb(),a.tb).style[j_e]=(tw(),EYe);!a.Y&&(a.Y=new b3c(a));$2c(a.Y);if(a.c){Mo(a);a.c=false}wB(a,a)}\nfunction M_b(){TRb.call(this,Lt($doc),iE(cE(Rsb,1),hYe,2,6,['material-cutout']));this.d=(izc(),Juc);this.i=10;this.n=0.8;this.a=true;this.b='ease';this.f=false;this.c=false;this.j=500;this.k=Lt($doc);rs((uxb(),this.tb),this.k);this.tb.style[f_e]=(Ox(),UZe);this.tb.style[j_e]=(tw(),EYe)}\nfunction K_b(a,b,c,d){var e,f,g,h,i;h=yt((ct(),bt),b)-(hQb==null&&(hQb=$wnd.$(bZe)),hQb).scrollTop();g=xt(bt,b);i=(b.offsetWidth||0)|0;f=(b.offsetHeight||0)|0;if(d){if(i!=f){e=i-f;if(i>f){f+=e;h-=e/2}else{e=-e;i+=e;g-=e/2}}}h-=c;g-=c;i+=c*2;f+=c*2;$wnd.$(a).css(h_e,h+ZZe);$wnd.$(a).css(OZe,g+ZZe);$wnd.$(a).css(BYe,i+ZZe);$wnd.$(a).css(AYe,f+ZZe)}\nfunction nt(a){var b=a.offsetLeft,c=a.offsetTop;var d=a.offsetWidth,e=a.offsetHeight;if(a.parentNode!=a.offsetParent){b-=a.parentNode.offsetLeft;c-=a.parentNode.offsetTop}var f=a.parentNode;while(f&&f.nodeType==1){b<f.scrollLeft&&(f.scrollLeft=b);b+d>f.scrollLeft+f.clientWidth&&(f.scrollLeft=b+d-f.clientWidth);c<f.scrollTop&&(f.scrollTop=c);c+e>f.scrollTop+f.clientHeight&&(f.scrollTop=c+e-f.clientHeight);var g=f.offsetLeft,h=f.offsetTop;if(f.parentNode!=f.offsetParent){g-=f.parentNode.offsetLeft;h-=f.parentNode.offsetTop}b+=g-f.scrollLeft;c+=h-f.scrollTop;f=f.parentNode}}\nfunction I_b(a){var b,c,d,e,f;c=(uxb(),a.tb).style;c[BYe]=(vy(),'100.0%');c[AYe]='100.0%';c[dZe]=(by(),eZe);c[h_e]=g_e;c[OZe]=g_e;c[k_e]='10000';a.k.className='material-cutout-focus';c=a.k.style;c[X2e]=\"''\";c[dZe]=fZe;c[k_e]='-1';if(!a.o){throw Xub(new CLe('The target element should be set before calling open().'))}Rs(a.o);a.g==null&&(d=new SRb(Lt($doc)),fRb(d,a.d),e=d.tb.style,e[dZe]=eZe,undefined,e[BYe]='1.0px',undefined,e[AYe]='1.0px',undefined,e[OZe]='-10.0px',undefined,e[h_e]='-10.0px',undefined,e[k_e]='-10000',undefined,f=Woc(a.d),a.n<1&&qMe(f.substr(0,4),'rgb(')&&(f=vMe(vMe(f,'rgb(','rgba('),')',', '+a.n+')')),a.g=f,undefined);b=$doc.documentElement.style;a.p=(ct(),b)[f_e];b[f_e]=UZe;a.e==null&&(a.e=(hQb==null&&(hQb=$wnd.$(bZe)),hQb).width()+300+ZZe);L_b(a);if(a.a){a.k.style[blf]='0px 0px 0px 0rem '+a.g;Hr((Ar(),zr),new O_b(a))}else{a.k.style[blf]=clf+a.e+' '+a.g}if(a.f){a.k.style[dlf]=Wbf;a.k.style[elf]=Wbf}else{a.k.style[dlf]='';a.k.style[elf]=''}K_b(a.k,a.o,a.i,a.f);dRb(a,oyb(new Q_b(a)));dRb(a,pyb(new S_b(a)));a.tb.style[j_e]='';if(!a.sb){a.c=true;Jzb((BEb(),FEb(null)),a)}BB(a,a)}\nfunction _Bd(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p;b=new Ujc;kQb(b,(c=new S6b,kQb(c,(e=new cmd,Vs(ho(e.a),(Owb(),(new Cwb(Pwb(b8e))).a)),QB(e,b8e),e)),kQb(c,(f=new dze,qpd(f,(g=new OMe,g.a+='\\u2003&lt;!-- Addin Import --&gt;<br> xmlns:ma=\"urn:import:gwt.material.design.addins.client\"<br><br> &lt;!-- Addin Usage --&gt;<br> &lt;ma:cutout.MaterialCutOut ui:field=\"cutout\" backgroundColor=\"BLUE\" circle=\"true\" opacity=\"0.8\" textAlign=\"CENTER\"&gt;<br> \\u2003&lt;m:MaterialTitle title=\"New Feature\" description=\"Description of your new Feature\" textColor=\"WHITE\"/&gt;<br> \\u2003&lt;m:MaterialButton text=\"Close\" ui:field=\"btnCutOutClose\" textColor=\"BLUE\" backgroundColor=\"WHITE\"/&gt;<br> &lt;/ma:cutout.MaterialCutOut&gt;',new wwb(g.a)).a),zo((uxb(),f.tb),c8e,true),f)),zo(c.tb,q4e,true),c));kQb(b,(d=new S6b,kQb(d,(h=new cmd,opd(h.b,'Click the icon below to show a material cutout.'),Vs(ho(h.a),(new Cwb(Pwb(hlf))).a),QB(h,hlf),h)),kQb(d,(i=new lgd,jgd(i,(xTc(),kOc)),oQb(i,a.a),a.c.a=i,i)),kQb(d,(j=new M_b,kQb(j,(k=new cmd,opd(k.b,'Description of your new Feature'),Vs(ho(k.a),(new Cwb(Pwb(ilf))).a),QB(k,ilf),IRb(k,(izc(),Vyc)),k)),kQb(j,(l=new mXb,fRb(l,Vyc),tYb(l.k,x8e),l.k.ob||kQb(l,l.k),IRb(l,Juc),oQb(l,a.b),l)),HRb(j,(xVc(),tVc)),j.n=0.8,j.g=null,j.f=true,a.c.b=j,j)),kQb(d,(m=new dze,qpd(m,(n=new OMe,n.a+='\\u2003&lt; -- Target Element --&gt;<br> &lt;m:MaterialIcon iconType=\"POLYMER\" ui:field=\"btnCutOut\"/&gt;<br> &lt;ma:cutout.MaterialCutOut ui:field=\"cutout\" backgroundColor=\"BLUE\" circle=\"true\" opacity=\"0.8\" textAlign=\"CENTER\"&gt;<br> \\u2003&lt;m:MaterialTitle title=\"New Feature\" description=\"Description of your new Feature\" textColor=\"WHITE\"/&gt;<br> \\u2003&lt;m:MaterialButton text=\"Close\" ui:field=\"btnCutOutClose\" textColor=\"BLUE\" backgroundColor=\"WHITE\"/&gt;<br> &lt;/ma:cutout.MaterialCutOut&gt;<br>',new wwb(n.a)).a),zo(m.tb,c8e,true),m)),kQb(d,(o=new dze,qpd(o,(p=new OMe,p.a+='\\u2003@UiField MaterialCutOut cutout;<br><br>  &lt;-- Target Element --&gt;<br> @UiField MaterialIcon btnCutOut; <br><br>  @UiHandler(\"btnCutOut\")<br> void onCutOut(ClickEvent e){<br> \\u2003cutout.setTarget(btnCutOut);<br> \\u2003cutout.open();<br> }',new wwb(p.a)).a),zo(o.tb,h8e,true),o)),zo(d.tb,q4e,true),d));return b}\nvar blf='boxShadow',clf='0px 0px 0px ',dlf='WebkitBorderRadius',elf='borderRadius',flf='box-shadow ',glf='gwt.material.design.addins.client.cutout',hlf='Material Cut Out',ilf='New Feature';var lyb=false;uvb(766,a$e,{},Myb);_.hd=function Nyb(a){H_b(UE(a,3018).a)};_.jd=function Oyb(){return Kyb};var Kyb;var mK=WKe(SXe,'Window/ScrollEvent',766);uvb(2282,26,S0e,M_b);_.Te=function N_b(a){this.d=a;this.g=null};_.a=false;_.c=false;_.f=false;_.i=0;_.j=0;_.n=0;var MO=WKe(glf,'MaterialCutOut',2282);uvb(2283,1,{},O_b);_.$c=function P_b(){F_b(this.a)};var JO=WKe(glf,'MaterialCutOut/lambda$0$Type',2283);uvb(2284,1,W_e,Q_b);_.zd=function R_b(a){G_b(this.a)};var KO=WKe(glf,'MaterialCutOut/lambda$1$Type',2284);uvb(2285,1,{8:1,3018:1},S_b);var LO=WKe(glf,'MaterialCutOut/lambda$2$Type',2285);uvb(964,54,u0e,OBd);_.Fe=function PBd(){Eye();OJb(this,new Gye('CutOuts','The MaterialCutOut is an excellent component to show users about new features and important components (buttons, labels and so) on the UI.','addins/cutouts/CutOutsView',''))};var r2=WKe(A9e,'CutOutsPresenter',964);uvb(1328,64,v0e,WBd);var x2=WKe(A9e,'CutOutsView',1328);uvb(1329,1,a0e,XBd);_.xd=function YBd(a){hmd(new kmd(iE(cE(KL,1),hYe,22,0,[])),'Close Event Fired',n1e,null)};var s2=WKe(A9e,'CutOutsView/lambda$0$Type',1329);uvb(1330,1,a5e,ZBd);_.yd=function $Bd(a){hmd(new kmd(iE(cE(KL,1),hYe,22,0,[])),'Open Event Fired',n1e,null)};var t2=WKe(A9e,'CutOutsView/lambda$1$Type',1330);uvb(1861,1,{},aCd);var w2=WKe(A9e,'CutOutsView_BinderImpl/Widgets',1861);uvb(1862,1,a1e,bCd);_.od=function cCd(a){VBd(this.a.c)};var u2=WKe(A9e,'CutOutsView_BinderImpl/Widgets/1',1862);uvb(1863,1,a1e,dCd);_.od=function eCd(a){E_b(this.a.c.b)};var v2=WKe(A9e,'CutOutsView_BinderImpl/Widgets/2',1863);uvb(802,1,A8e);_.Yc=function nCd(){eOb(this.b,gCd(this.a.a))};IXe(Kq)(7);\n//# sourceURL=gwtmaterialdemo-7.js\n")
