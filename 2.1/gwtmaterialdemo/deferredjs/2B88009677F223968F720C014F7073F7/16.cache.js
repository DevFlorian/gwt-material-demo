$wnd.gwtmaterialdemo.runAsyncCallback16("function jdc(){}\nfunction odc(){}\nfunction wLd(){}\nfunction yLd(a){this.a=a}\nfunction ALd(a){this.a=a}\nfunction ldc(a){this.a=a}\nfunction rdc(){rdc=vvb;ndc=new odc}\nfunction tLd(a){knd(qnd(new rnd,(Wod(),Aod)),a.b,null)}\nfunction uLd(a){knd(qnd(new rnd,(Wod(),_nd)),a.a,null)}\nfunction mLd(a,b,c){lLd();eKb.call(this,a,b,c,(ntd(),ltd))}\nfunction HLd(a){var b;if(!a.d){b=new vLd;a.d=b}return a.d}\nfunction DLd(a){this.c=a;this.a=lu($doc);this.b=new dxb(this.a)}\nfunction kdc(a,b){hdc();var c;c=new jdc;c.b=a;c.a=b;c.c=100;idc(c)}\nfunction hdc(){hdc=vvb;!fQb&&(fQb=new gQb);Fkc();Jkc((rdc(),ndc),true,false)}\nfunction ELd(a){var b;b=new OMe;b.a+=$6e;NMe(b,Pwb(a));b.a+=b7e;return new wwb(b.a)}\nfunction GLd(a){var b,c;if(!a.c){c=new mLd(UGb(OKb(a.a)),(b=HLd(a),b),FLd(a));zJb((RKb(a.a),c),PMb(RKb(a.a)));a.c=c}return a.c}\nfunction idc(a){var b;if(a.b){b=(uxb(),lu($doc));Us(a.b,b);$wnd.apply('#'+b,a.c,wvb(ldc.prototype.Hf,ldc,[a.a]))}else{new BLe;ps()}}\nfunction vLd(){wKb.call(this);uKb(this,CLd(new DLd(this)));hdc();kdc(ho(this.c),wvb(wLd.prototype.Hf,wLd,[]));kdc(ho(this.b),wvb(yLd.prototype.Hf,yLd,[this]));kdc(ho(this.a),wvb(ALd.prototype.Hf,ALd,[this]))}\nfunction CLd(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;c=new BBb(ELd(a.a).a);b=fxb((uxb(),c.tb));cxb(a.b);b.b?ss(b.b,b.a,b.c):hxb(b.a);zBb(c,(d=new S6b,kQb(d,(e=new cmd,opd(e.b,''),Vs(ho(e.a),(Owb(),(new Cwb(Pwb(b8e))).a)),QB(e,b8e),e)),kQb(d,(f=new Ujc,a.c.c=f,f)),kQb(d,(g=new dze,qpd(g,(h=new OMe,h.a+='\\u2003MaterialScrollfire.apply(panel.getElement(), () -&gt; { <br> \\u2003MaterialToast.fireToast(\"Toasted\"); <br> }); <br> MaterialScrollfire.apply(listContainer.getElement(), () -&gt; { <br> \\u2003MaterialAnimator.animate(Transition.SHOW_STAGGERED_LIST, listContainer, 0); <br> }); <br> MaterialScrollfire.apply(image.getElement(), () -&gt; { <br> \\u2003MaterialAnimator.animate(Transition.FADE_IN_IMAGE, image, 0); <br> });',new wwb(h.a)).a),zo(g.tb,h8e,true),g)),kQb(d,(i=new lac,kac(i,(j=new okd,kQb(j,(k=new cmd,opd(k.b,Acf),Vs(ho(k.a),(new Cwb(Pwb(Acf))).a),QB(k,Acf),k)),Pu(j.tb.style,0),j)),kac(i,(l=new okd,kQb(l,(m=new cmd,opd(m.b,Acf),Vs(ho(m.a),(new Cwb(Pwb(Acf))).a),QB(m,Acf),m)),Pu(l.tb.style,0),l)),kac(i,(n=new okd,kQb(n,(o=new cmd,opd(o.b,Acf),Vs(ho(o.a),(new Cwb(Pwb(Acf))).a),QB(o,Acf),o)),Pu(n.tb.style,0),n)),kac(i,(p=new okd,kQb(p,(q=new cmd,opd(q.b,Acf),Vs(ho(q.a),(new Cwb(Pwb(Acf))).a),QB(q,Acf),q)),Pu(p.tb.style,0),p)),a.c.b=i,i)),kQb(d,(r=new Mjc,r.tb.setAttribute(Ccf,Dcf),Pu(r.tb.style,0),r.ob?Ijc(r,Y6e):dRb(r,Go(r,new Ojc(r,Y6e),(!oB&&(oB=new Vz),oB))),D$b(r,knf,true),a.c.a=r,r)),zo(d.tb,q4e,true),d),cxb(a.b));return c}\nvar jnf='gwt.material.design.addins.client.scrollfire';uvb(2311,1,{},jdc);_.c=100;var OQ=WKe(jnf,'MaterialScrollfire',2311);uvb(3187,$wnd.Function,{},ldc);_.Hf=function mdc(){this.a.call(null)};var ndc;uvb(2439,1,{},odc);_.Kd=function pdc(){return 'scrollfireJs'};_.Ld=function qdc(){return 'function apply(selector, offset, callback) {var didScroll = false; var done = false; var callbacks = $.Callbacks(); window.addEventListener(\"scroll\", function() {didScroll = true; }); setInterval(function() {if(didScroll) {didScroll = false; var windowScroll = window.pageYOffset + window.innerHeight; var currentElement = document.querySelector(selector); if ( currentElement !== null) {var elementOffset = currentElement.getBoundingClientRect().top + window.pageYOffset; if (windowScroll > (elementOffset + offset)) {if (done !== true) {callbacks.add(callback); callbacks.fire(); done = true; } } } } }, 100); }'};var NQ=WKe(jnf,'MaterialScrollfireClientBundle_default_InlineClientBundleGenerator/1',2439);uvb(978,54,u0e,mLd);_.Fe=function nLd(){Eye();OJb(this,new Gye('Scrollfire',\"Executes callback functions depending on how far into the page you've scrolled.\",'addins/scrollfire/ScrollFireView',''))};var d6=WKe(Qaf,'ScrollFirePresenter',978);uvb(1382,64,v0e,vLd);var f6=WKe(Qaf,'ScrollFireView',1382);uvb(3096,$wnd.Function,{},wLd);_.Hf=function xLd(){hmd(new kmd(iE(cE(KL,1),hYe,22,0,[])),'Toasted',n1e,null)};uvb(3097,$wnd.Function,{},yLd);_.Hf=function zLd(){tLd(this.a)};uvb(3098,$wnd.Function,{},ALd);_.Hf=function BLd(){uLd(this.a)};uvb(1925,1,{},DLd);var e6=WKe(Qaf,'ScrollFireView_BinderImpl/Widgets',1925);uvb(825,1,A8e);_.Yc=function NLd(){eOb(this.b,GLd(this.a.a))};IXe(Kq)(16);\n//# sourceURL=gwtmaterialdemo-16.js\n")
