$wnd.gwtmaterialdemo.runAsyncCallback10("function VFd(){}\nfunction XFd(a){this.a=a}\nfunction ZFd(a){this.a=a}\nfunction _Fd(a){this.a=a}\nfunction bGd(a){this.a=a}\nfunction dGd(a){this.a=a}\nfunction fGd(a){this.a=a}\nfunction hGd(a){this.a=a}\nfunction jGd(a){this.a=a}\nfunction lGd(a){this.a=a}\nfunction L6b(a){this.a=a}\nfunction _5b(a){return J6b(a.a,a.b)}\nfunction e6b(){O5b();V5b.call(this)}\nfunction i6b(){O5b();V5b.call(this)}\nfunction z6b(){O5b();V5b.call(this)}\nfunction D6b(){O5b();V5b.call(this)}\nfunction LFd(a,b,c){kKb();JKb.call(this,a,b,c,(nud(),lud))}\nfunction SFd(){_Kb.call(this);ZKb(this,TFd(new UFd(this)))}\nfunction pGd(a){var b;if(!a.d){b=new SFd;a.d=b}return a.d}\nfunction d6b(a){v5b(a,VMe($wnd.$(ho(a.G)).cleanVal()),false)}\nfunction y6b(a){v5b(a,uNe(WMe($wnd.$(ho(a.G)).cleanVal())),false)}\nfunction C6b(a){v5b(a,FNe(XMe($wnd.$(ho(a.G)).cleanVal())),false)}\nfunction h6b(a){v5b(a,new aNe(eNe($wnd.$(ho(a.G)).cleanVal())),false)}\nfunction b6b(){O5b();V5b.call(this);this.b=Knf;this.a=new L6b(this);a6b(this,this.b)}\nfunction a6b(a,b){var c;a.b=b;c=dOe(dOe(dOe(b.toLowerCase(),'m','0'),'d','0'),'y','0');a.c=c}\nfunction J6b(a,b){if(I6b(a,b)){f5b(a.a);return hD((zD(),BD(b,KD((JD(),JD(),ID)))),Js(ho(a.a.G),R1e))}return null}\nfunction oGd(a){var b,c;if(!a.c){c=new LFd(xHb(rLb(a.a)),(b=pGd(a),b),nGd(a));cKb((uLb(a.a),c),sNb(uLb(a.a)));a.c=c}return a.c}\nfunction eNe(a){var b;b=VMe(a);if(b>3.4028234663852886E38){return Infinity}else if(b<-3.4028234663852886E38){return -Infinity}return b}\nfunction UFd(a){this.a=new VFd;this.c=new ZFd(this);this.d=new _Fd(this);this.e=new bGd(this);this.f=new dGd(this);this.g=new fGd(this);this.i=new hGd(this);this.j=new jGd(this);this.k=new lGd(this);this.b=new XFd(this);this.n=a}\nfunction K6b(a,b,c){return !($Ne(a,'31')&&($Ne(b,'4')||$Ne(b,'6')||$Ne(b,'9')||$Ne(b,'11')||$Ne(b,'04')||$Ne(b,'06')||$Ne(b,'09')))&&(!($Ne(b,'2')||$Ne(b,'02'))||(c%4==0?!$Ne(a,'30')&&!$Ne(a,'31'):!$Ne(a,'29')&&!$Ne(a,'30')&&!$Ne(a,'31')))}\nfunction RNe(){RNe=$vb;var a;NNe=xE(rE(CF,1),C$e,116,15,[-1,-1,30,19,15,13,11,11,10,9,9,8,8,8,8,7,7,7,7,7,7,7,6,6,6,6,6,6,6,6,6,6,6,6,6,6,5]);ONe=tE(CF,C$e,116,37,15,1);PNe=xE(rE(CF,1),C$e,116,15,[-1,-1,63,40,32,28,25,23,21,20,19,19,18,18,17,17,16,16,16,15,15,15,15,14,14,14,14,14,14,13,13,13,13,13,13,13,13]);QNe=tE(DF,F$e,116,37,14,1);for(a=2;a<=36;a++){ONe[a]=zF($wnd.Math.pow(a,NNe[a]));QNe[a]=Evb({l:N0e,m:N0e,h:524287},ONe[a])}}\nfunction I6b(a,b){var c,d,e,f,g;if(Js(ho(a.a.G),R1e)!=null&&Js(ho(a.a.G),R1e).length!=0&&a.a.c!=null&&b!=null){c=Js(ho(a.a.G),R1e);e=jOe(c,b.indexOf('M'),b.indexOf('M/')+1);d=jOe(c,b.indexOf('d'),b.indexOf('d/')+1);g=jOe(c,b.indexOf('y'),b.lastIndexOf('y')+1);f=K6b(d,e,WMe(g));f||m5b(a.a,'Not a valid date');return m5b(a.a,'Month does not match'),(new RegExp('^(^(0?[1-9]|1[012])$)$')).test(e)&&(m5b(a.a,'Day does not match'),(new RegExp('^((0?[1-9]|[12][0-9]|3[01]))$')).test(d))&&(m5b(a.a,'Year does not match'),(new RegExp('^(^\\\\d{4}$)$')).test(g))&&f}m5b(a.a,'Text input must not be empty or null');return false}\nfunction XMe(a){var b,c,d,e,f,g,h,i,j,k,l;if(a==null){throw Avb(new SNe($Ze))}j=a;f=a.length;i=false;if(f>0){b=(fZe(0,a.length),a.charCodeAt(0));if(b==45||b==43){a=a.substr(1);--f;i=b==45}}if(f==0){throw Avb(new SNe(wlf+j+'\"'))}while(a.length>0&&(fZe(0,a.length),a.charCodeAt(0)==48)){a=a.substr(1);--f}if(f>(RNe(),PNe)[10]){throw Avb(new SNe(wlf+j+'\"'))}for(e=0;e<f;e++){if(xMe((fZe(e,a.length),a.charCodeAt(e)))==-1){throw Avb(new SNe(wlf+j+'\"'))}}l=0;g=NNe[10];k=ONe[10];h=Lvb(QNe[10]);c=true;d=f%g;if(d>0){l=-parseInt(a.substr(0,d),10);a=a.substr(d);f-=d;c=false}while(f>=g){d=parseInt(a.substr(0,g),10);a=a.substr(g);f-=g;if(c){c=false}else{if(Cvb(l,h)<0){throw Avb(new SNe(wlf+j+'\"'))}l=Kvb(l,k)}l=Mvb(l,d)}if(Cvb(l,0)>0){throw Avb(new SNe(wlf+j+'\"'))}if(!i){l=Lvb(l);if(Cvb(l,0)<0){throw Avb(new SNe(wlf+j+'\"'))}}return l}\nfunction TFd(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,A,B,C,D,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,$,ab,bb,cb,db,eb,fb,gb,hb,ib,jb,kb,lb,mb,nb,ob,pb,qb,rb,sb,tb,ub,vb,wb,xb,yb,zb,Ab,Bb;b=new zkc;PQb(b,(c=new x7b,PQb(c,(k=new bnd,Ws(ho(k.a),(rxb(),(new fxb(sxb(Mnf))).a)),SB(k,Mnf),k)),PQb(c,(l=new eAe,vXb(l.a,Xmf),xXb(l.a),(Zxb(),l.tb).style[uaf]=(xy(),Daf),yXb(l.a,'jQuery-Mask-Plugin 1.14.10'),l)),PQb(c,(m=new x7b,PQb(m,(n=new G6b,xrc((!n.X&&(n.X=new zrc(n)),n.X),J8e),ho(n.G).setAttribute(c4e,'eg: 000-00-0000000'),dqd(n.A).length==0||ro(n.A,v2e),eqd(n.A,'Phone Number'),Es(ho(n.G),c4e).length==0||ro(n.A,v2e),n.c=Nnf,n)),PQb(m,(o=new G6b,xrc((!o.X&&(o.X=new zrc(o)),o.X),J8e),ho(o.G).setAttribute(c4e,'eg: (00) 0000-0000'),dqd(o.A).length==0||ro(o.A,v2e),eqd(o.A,'Phone with Odd'),Es(ho(o.G),c4e).length==0||ro(o.A,v2e),o.c='(00) 0000-0000',o)),PQb(m,(p=new G6b,xrc((!p.X&&(p.X=new zrc(p)),p.X),J8e),ho(p.G).setAttribute(c4e,'eg: (000) 000-000'),dqd(p.A).length==0||ro(p.A,v2e),eqd(p.A,'US Phone Number'),Es(ho(p.G),c4e).length==0||ro(p.A,v2e),p.c='(000) 000-000',p)),m)),PQb(c,(q=new x7b,PQb(q,(r=new G6b,xrc((!r.X&&(r.X=new zrc(r)),r.X),J8e),ho(r.G).setAttribute(c4e,'eg: 00000-000'),dqd(r.A).length==0||ro(r.A,v2e),eqd(r.A,'CEP'),Es(ho(r.G),c4e).length==0||ro(r.A,v2e),r.c='00000-000',r)),PQb(q,(s=new G6b,xrc((!s.X&&(s.X=new zrc(s)),s.X),J8e),ho(s.G).setAttribute(c4e,'eg: 000.000.000-00'),dqd(s.A).length==0||ro(s.A,v2e),eqd(s.A,'CPF'),Es(ho(s.G),c4e).length==0||ro(s.A,v2e),s.c='000.000.000-00',s)),PQb(q,(t=new G6b,xrc((!t.X&&(t.X=new zrc(t)),t.X),J8e),ho(t.G).setAttribute(c4e,'eg: 000,000,000,000,000.00'),dqd(t.A).length==0||ro(t.A,v2e),eqd(t.A,'Money'),Es(ho(t.G),c4e).length==0||ro(t.A,v2e),t.c='000,000,000,000,000.00',t)),q)),PQb(c,(u=new x7b,PQb(u,(v=new G6b,xrc((!v.X&&(v.X=new zrc(v)),v.X),J8e),ho(v.G).setAttribute(c4e,Onf),dqd(v.A).length==0||ro(v.A,v2e),eqd(v.A,Pnf),Es(ho(v.G),c4e).length==0||ro(v.A,v2e),v.c=Qnf,v)),PQb(u,(w=new G6b,xrc((!w.X&&(w.X=new zrc(w)),w.X),J8e),ho(w.G).setAttribute(c4e,Rnf),dqd(w.A).length==0||ro(w.A,v2e),eqd(w.A,Snf),Es(ho(w.G),c4e).length==0||ro(w.A,v2e),w.c=Tnf,w)),PQb(u,(A=new G6b,xrc((!A.X&&(A.X=new zrc(A)),A.X),J8e),ho(A.G).setAttribute(c4e,Unf),dqd(A.A).length==0||ro(A.A,v2e),eqd(A.A,Vnf),Es(ho(A.G),c4e).length==0||ro(A.A,v2e),A.c=Wnf,A)),u)),PQb(c,(B=new pAe,pqd(B,(C=new yOe,C.a+='\\u2003&lt;m:MaterialRow&gt;<br> \\u2003&lt;ma:inputmask.MaterialInputMask label=\"Phone Number\" placeholder=\"eg: 000-00-0000000\" mask=\"000-00-0000000\" grid=\"s12 m4 l4\"/&gt;<br> \\u2003&lt;ma:inputmask.MaterialInputMask label=\"Phone with Odd\" placeholder=\"eg: (00) 0000-0000\" mask=\"(00) 0000-0000\" grid=\"s12 m4 l4\"/&gt;<br> \\u2003&lt;ma:inputmask.MaterialInputMask label=\"US Phone Number\" placeholder=\"eg: (000) 000-000\" mask=\"(000) 000-000\" grid=\"s12 m4 l4\"/&gt;<br> &lt;/m:MaterialRow&gt;<br> &lt;m:MaterialRow&gt;<br> \\u2003&lt;ma:inputmask.MaterialInputMask label=\"CEP\" placeholder=\"eg: 00000-000\" mask=\"00000-000\" grid=\"s12 m4 l4\"/&gt;<br> \\u2003&lt;ma:inputmask.MaterialInputMask label=\"CPF\" placeholder=\"eg: 000.000.000-00\" mask=\"000.000.000-00\" grid=\"s12 m4 l4\"/&gt;<br> \\u2003&lt;ma:inputmask.MaterialInputMask label=\"Money\" placeholder=\"eg: 000,000,000,000,000.00\" mask=\"000,000,000,000,000.00\" grid=\"s12 m4 l4\"/&gt;<br> &lt;/m:MaterialRow&gt;<br> &lt;m:MaterialRow&gt;<br> \\u2003&lt;ma:inputmask.MaterialInputMask label=\"Ip Address\" placeholder=\"eg: 000.000.000.000\" mask=\"000.000.000.000\" grid=\"s12 m4 l4\"/&gt;<br> \\u2003&lt;ma:inputmask.MaterialInputMask label=\"Percentage\" placeholder=\"eg: 000000.00%\" mask=\"000000.00%\" grid=\"s12 m4 l4\"/&gt;<br> \\u2003&lt;ma:inputmask.MaterialInputMask label=\"Credit Card\" placeholder=\"eg: 0000 0000 0000 0000\" mask=\"0000 0000 0000 0000\" grid=\"s12 m4 l4\"/&gt;<br> &lt;/m:MaterialRow&gt;<br>',new _wb(C.a)).a),zo(B.tb,Q9e,true),B)),zo(c.tb,d6e,true),c));PQb(b,(d=new x7b,PQb(d,(D=new bnd,nqd(D.b,'The mask will be placed from the right to the left if reverse is true (Default : false)'),Ws(ho(D.a),(new fxb(sxb('Reverse'))).a),SB(D,'Reverse'),D)),PQb(d,(F=new x7b,PQb(F,(G=new G6b,xrc((!G.X&&(G.X=new zrc(G)),G.X),J8e),ho(G.G).setAttribute(c4e,Onf),dqd(G.A).length==0||ro(G.A,v2e),eqd(G.A,Pnf),Es(ho(G.G),c4e).length==0||ro(G.A,v2e),G.d.reverse=true,G.c=Qnf,G)),PQb(F,(H=new G6b,xrc((!H.X&&(H.X=new zrc(H)),H.X),J8e),ho(H.G).setAttribute(c4e,Rnf),dqd(H.A).length==0||ro(H.A,v2e),eqd(H.A,Snf),Es(ho(H.G),c4e).length==0||ro(H.A,v2e),H.d.reverse=true,H.c=Tnf,H)),PQb(F,(I=new G6b,xrc((!I.X&&(I.X=new zrc(I)),I.X),J8e),ho(I.G).setAttribute(c4e,Unf),dqd(I.A).length==0||ro(I.A,v2e),eqd(I.A,Vnf),Es(ho(I.G),c4e).length==0||ro(I.A,v2e),I.d.reverse=true,I.c=Wnf,I)),F)),PQb(d,(J=new pAe,pqd(J,(K=new yOe,K.a+='&lt;ma:inputmask.MaterialInputMask label=\"Ip Address\" placeholder=\"eg: 000.000.000.000\" mask=\"000.000.000.000\" reverse=\"true\" grid=\"s12 m4 l4\"/&gt;<br> &lt;ma:inputmask.MaterialInputMask label=\"Percentage\" placeholder=\"eg: 000000.00%\" mask=\"000000.00%\" reverse=\"true\" grid=\"s12 m4 l4\"/&gt;<br> &lt;ma:inputmask.MaterialInputMask label=\"Credit Card\" placeholder=\"eg: 0000 0000 0000 0000\" mask=\"0000 0000 0000 0000\" reverse=\"true\" grid=\"s12 m4 l4\"/&gt;<br>',new _wb(K.a)).a),zo(J.tb,Q9e,true),J)),zo(d.tb,d6e,true),d));PQb(b,(e=new x7b,PQb(e,(L=new bnd,nqd(L.b,'The textfield will automatically clears whenever the value is not match with the mask provided. (Default : false)'),Ws(ho(L.a),(new fxb(sxb(Xnf))).a),SB(L,Xnf),L)),PQb(e,(M=new x7b,PQb(M,(N=new G6b,xrc((!N.X&&(N.X=new zrc(N)),N.X),J8e),N.d.clearIfNotMatch=true,ho(N.G).setAttribute(c4e,Onf),dqd(N.A).length==0||ro(N.A,v2e),eqd(N.A,Pnf),Es(ho(N.G),c4e).length==0||ro(N.A,v2e),N.c=Qnf,N)),PQb(M,(O=new G6b,xrc((!O.X&&(O.X=new zrc(O)),O.X),J8e),O.d.clearIfNotMatch=true,ho(O.G).setAttribute(c4e,Rnf),dqd(O.A).length==0||ro(O.A,v2e),eqd(O.A,Snf),Es(ho(O.G),c4e).length==0||ro(O.A,v2e),O.c=Tnf,O)),PQb(M,(P=new G6b,xrc((!P.X&&(P.X=new zrc(P)),P.X),J8e),P.d.clearIfNotMatch=true,ho(P.G).setAttribute(c4e,Unf),dqd(P.A).length==0||ro(P.A,v2e),eqd(P.A,Vnf),Es(ho(P.G),c4e).length==0||ro(P.A,v2e),P.c=Wnf,P)),M)),PQb(e,(Q=new pAe,pqd(Q,(R=new yOe,R.a+='&lt;ma:inputmask.MaterialInputMask label=\"Ip Address\" placeholder=\"eg: 000.000.000.000\" mask=\"000.000.000.000\" clearIfNotMatch=\"true\" grid=\"s12 m4 l4\"/&gt;<br> &lt;ma:inputmask.MaterialInputMask label=\"Percentage\" placeholder=\"eg: 000000.00%\" mask=\"000000.00%\" clearIfNotMatch=\"true\" grid=\"s12 m4 l4\"/&gt;<br> &lt;ma:inputmask.MaterialInputMask label=\"Credit Card\" placeholder=\"eg: 0000 0000 0000 0000\" mask=\"0000 0000 0000 0000\" clearIfNotMatch=\"true\" grid=\"s12 m4 l4\"/&gt;<br>',new _wb(R.a)).a),zo(Q.tb,Q9e,true),Q)),zo(e.tb,d6e,true),e));PQb(b,(f=new x7b,PQb(f,(S=new bnd,nqd(S.b,'Set whether you want to set on focus on your mask for easy selection.'),Ws(ho(S.a),(new fxb(sxb(Ynf))).a),SB(S,Ynf),S)),PQb(f,(T=new x7b,PQb(T,(U=new G6b,xrc((!U.X&&(U.X=new zrc(U)),U.X),J8e),U.d.selectOnFocus=true,ho(U.G).setAttribute(c4e,Onf),dqd(U.A).length==0||ro(U.A,v2e),eqd(U.A,Pnf),Es(ho(U.G),c4e).length==0||ro(U.A,v2e),U.c=Qnf,U)),PQb(T,(V=new G6b,xrc((!V.X&&(V.X=new zrc(V)),V.X),J8e),V.d.selectOnFocus=true,ho(V.G).setAttribute(c4e,Rnf),dqd(V.A).length==0||ro(V.A,v2e),eqd(V.A,Snf),Es(ho(V.G),c4e).length==0||ro(V.A,v2e),V.c=Tnf,V)),PQb(T,(W=new G6b,xrc((!W.X&&(W.X=new zrc(W)),W.X),J8e),W.d.selectOnFocus=true,ho(W.G).setAttribute(c4e,Unf),dqd(W.A).length==0||ro(W.A,v2e),eqd(W.A,Vnf),Es(ho(W.G),c4e).length==0||ro(W.A,v2e),W.c=Wnf,W)),T)),PQb(f,(X=new pAe,pqd(X,(Y=new yOe,Y.a+='&lt;ma:inputmask.MaterialInputMask label=\"Ip Address\" placeholder=\"eg: 000.000.000.000\" mask=\"000.000.000.000\" selectOnFocus=\"true\" grid=\"s12 m4 l4\"/&gt;<br> &lt;ma:inputmask.MaterialInputMask label=\"Percentage\" placeholder=\"eg: 000000.00%\" mask=\"000000.00%\" selectOnFocus=\"true\" grid=\"s12 m4 l4\"/&gt;<br> &lt;ma:inputmask.MaterialInputMask label=\"Credit Card\" placeholder=\"eg: 0000 0000 0000 0000\" mask=\"0000 0000 0000 0000\" selectOnFocus=\"true\" grid=\"s12 m4 l4\"/&gt;<br>',new _wb(Y.a)).a),zo(X.tb,Q9e,true),X)),zo(f.tb,d6e,true),f));PQb(b,(g=new x7b,PQb(g,(Z=new bnd,nqd(Z.b,'We supported type safe Input Masks'),Ws(ho(Z.a),(new fxb(sxb('Types'))).a),SB(Z,'Types'),Z)),PQb(g,($=new G6b,xrc((!$.X&&($.X=new zrc($)),$.X),R9e),ho($.G).setAttribute(c4e,'eg. A0A-1A1'),dqd($.A).length==0||ro($.A,v2e),eqd($.A,B$e),Es(ho($.G),c4e).length==0||ro($.A,v2e),$.c='S0S-0S0',d5b($,a.a),$)),PQb(g,(ab=new z6b,xrc((!ab.X&&(ab.X=new zrc(ab)),ab.X),R9e),eqd(ab.A,'Integer'),Es(ho(ab.G),c4e).length==0||ro(ab.A,v2e),ab.c='000-00-000',d5b(ab,a.c),a.n.e=ab,ab)),PQb(g,(bb=new e6b,xrc((!bb.X&&(bb.X=new zrc(bb)),bb.X),R9e),eqd(bb.A,'Double'),Es(ho(bb.G),c4e).length==0||ro(bb.A,v2e),bb.c='000-00-00000',d5b(bb,a.d),a.n.c=bb,bb)),PQb(g,(cb=new i6b,xrc((!cb.X&&(cb.X=new zrc(cb)),cb.X),R9e),eqd(cb.A,Znf),Es(ho(cb.G),c4e).length==0||ro(cb.A,v2e),cb.c='000-00-0000',d5b(cb,a.e),a.n.d=cb,cb)),PQb(g,(db=new D6b,xrc((!db.X&&(db.X=new zrc(db)),db.X),R9e),eqd(db.A,'Long'),Es(ho(db.G),c4e).length==0||ro(db.A,v2e),db.c=Nnf,d5b(db,a.f),a.n.f=db,db)),PQb(g,(eb=new b6b,xrc((!eb.X&&(eb.X=new zrc(eb)),eb.X),R9e),eb.b=Knf,fb=dOe(dOe(dOe(Knf.toLowerCase(),'m','0'),'d','0'),'y','0'),eb.c=fb,eb.ob?IRb(eb,d5b(eb,new Kmc(eb))):IRb(eb,Go(eb,new Imc(eb),(!qB&&(qB=new Xz),qB))),eqd(eb.A,M0e),Es(ho(eb.G),c4e).length==0||ro(eb.A,v2e),d5b(eb,a.g),a.n.b=eb,eb)),zo(g.tb,d6e,true),g));PQb(b,(h=new x7b,PQb(h,(gb=new bnd,nqd(gb.b,'Gets the value of the field with the mask.'),Ws(ho(gb.a),(new fxb(sxb(daf))).a),SB(gb,daf),gb)),PQb(h,(hb=new x7b,PQb(hb,(ib=new G6b,xrc((!ib.X&&(ib.X=new zrc(ib)),ib.X),J8e),ho(ib.G).setAttribute(c4e,Onf),dqd(ib.A).length==0||ro(ib.A,v2e),eqd(ib.A,Pnf),Es(ho(ib.G),c4e).length==0||ro(ib.A,v2e),ib.d.reverse=true,ib.c=Qnf,a.n.g=ib,ib)),PQb(hb,(jb=new ned,PQb(jb,(kb=new RXb,YYb(kb.k,daf),kb.k.ob||PQb(kb,kb.k),TQb(kb,a.j),kb)),xrc((!jb.X&&(jb.X=new zrc(jb)),jb.X),R9e),jb)),hb)),PQb(h,(lb=new pAe,pqd(lb,(mb=new yOe,mb.a+='inputMask.getValue();',new _wb(mb.a)).a),zo(lb.tb,V9e,true),lb)),zo(h.tb,d6e,true),h));PQb(b,(i=new x7b,PQb(i,(nb=new bnd,nqd(nb.b,'Gets the value of the field without the mask.'),Ws(ho(nb.a),(new fxb(sxb($nf))).a),SB(nb,$nf),nb)),PQb(i,(ob=new x7b,PQb(ob,(pb=new G6b,xrc((!pb.X&&(pb.X=new zrc(pb)),pb.X),J8e),ho(pb.G).setAttribute(c4e,Onf),dqd(pb.A).length==0||ro(pb.A,v2e),eqd(pb.A,Pnf),Es(ho(pb.G),c4e).length==0||ro(pb.A,v2e),pb.d.reverse=true,pb.c=Qnf,a.n.a=pb,pb)),PQb(ob,(qb=new ned,PQb(qb,(rb=new RXb,YYb(rb.k,$nf),rb.k.ob||PQb(rb,rb.k),TQb(rb,a.i),rb)),xrc((!qb.X&&(qb.X=new zrc(qb)),qb.X),R9e),qb)),ob)),PQb(i,(sb=new pAe,pqd(sb,(tb=new yOe,tb.a+='inputMask.getCleanValue();',new _wb(tb.a)).a),zo(sb.tb,V9e,true),sb)),zo(i.tb,d6e,true),i));PQb(b,(j=new x7b,PQb(j,(ub=new bnd,nqd(ub.b,'Programmatically controls the Input Mask main methods.'),Ws(ho(ub.a),(new fxb(sxb(_nf))).a),SB(ub,_nf),ub)),PQb(j,(vb=new x7b,PQb(vb,(wb=new G6b,xrc((!wb.X&&(wb.X=new zrc(wb)),wb.X),J8e),ho(wb.G).setAttribute(c4e,Onf),dqd(wb.A).length==0||ro(wb.A,v2e),eqd(wb.A,Pnf),Es(ho(wb.G),c4e).length==0||ro(wb.A,v2e),wb.d.reverse=true,wb.c=Qnf,a.n.i=wb,wb)),PQb(vb,(xb=new ned,PQb(xb,(yb=new RXb,yb.tb.style[z2e]=caf,KRb(yb,(Tzc(),Ezc)),YYb(yb.k,'Unmask'),yb.k.ob||PQb(yb,yb.k),lSb(yb,rvc),TQb(yb,a.k),yb)),PQb(xb,(zb=new RXb,YYb(zb.k,'mask'),zb.k.ob||PQb(zb,zb.k),TQb(zb,a.b),zb)),xrc((!xb.X&&(xb.X=new zrc(xb)),xb.X),R9e),xb)),vb)),PQb(j,(Ab=new pAe,pqd(Ab,(Bb=new yOe,Bb.a+='\\u2003inputMask.mask(\"00.00\"); <br> inputMask.unmask();',new _wb(Bb.a)).a),zo(Ab.tb,V9e,true),Ab)),zo(j.tb,d6e,true),j));return b}\nvar Knf='MM/dd/yyyy',Mnf='Basic Examples',Nnf='000-00-0000000',Onf='eg: 000.000.000.000',Pnf='Ip Address',Qnf='000.000.000.000',Rnf='eg: 000000.00%',Snf='Percentage',Tnf='000000.00%',Unf='eg: 0000 0000 0000 0000',Vnf='Credit Card',Wnf='0000 0000 0000 0000',Xnf='Clear If not Match',Ynf='Select on Focus',$nf='Get Clean Value',_nf='Unmask and Mask control';Zvb(2660,324,e4e,b6b);_.Xd=function c6b(){return J6b(this.a,this.b)};var SP=EMe(Lnf,'MaterialDateInputMask',2660);Zvb(2657,324,e4e,e6b);_.Xd=function f6b(){return VMe($wnd.$(ho(this.G)).cleanVal())};_.Yd=function g6b(a){var b;d6b((b=this,AF(a),b))};var TP=EMe(Lnf,'MaterialDoubleInputMask',2657);Zvb(2658,324,e4e,i6b);_.Xd=function j6b(){return new aNe(eNe($wnd.$(ho(this.G)).cleanVal()))};_.Yd=function k6b(a){var b;h6b((b=this,AF(a),b))};var UP=EMe(Lnf,'MaterialFloatInputMask',2658);Zvb(2656,324,e4e,z6b);_.Xd=function A6b(){return uNe(WMe($wnd.$(ho(this.G)).cleanVal()))};_.Yd=function B6b(a){var b;y6b((b=this,AF(a),b))};var XP=EMe(Lnf,'MaterialIntegerInputMask',2656);Zvb(2659,324,e4e,D6b);_.Xd=function E6b(){return FNe(XMe($wnd.$(ho(this.G)).cleanVal()))};_.Yd=function F6b(a){var b;C6b((b=this,AF(a),b))};var YP=EMe(Lnf,'MaterialLongInputMask',2659);Zvb(2708,1,{},L6b);var $P=EMe('gwt.material.design.addins.client.inputmask.base','DateInputParser',2708);Zvb(976,56,h2e,LFd);_.Fe=function MFd(){Qze();rKb(this,new Sze(Shf,'An inputmask helps the user with the input by ensuring a predefined format. This can be useful for dates, numerics, phone numbers etc...','addins/inputmask/InputMask',''))};var T3=EMe(Jbf,'InputMaskPresenter',976);Zvb(1369,65,i2e,SFd);var d4=EMe(Jbf,'InputMaskView',1369);Zvb(1874,1,{},UFd);var c4=EMe(Jbf,'InputMaskView_BinderImpl/Widgets',1874);Zvb(1875,1,K1e,VFd);_.Bd=function WFd(a){knd(nF(a.a))};var V3=EMe(Jbf,'InputMaskView_BinderImpl/Widgets/1',1875);Zvb(1884,1,P2e,XFd);_.od=function YFd(a){T5b(this.a.n.i,Qnf)};var U3=EMe(Jbf,'InputMaskView_BinderImpl/Widgets/10',1884);Zvb(1876,1,K1e,ZFd);_.Bd=function $Fd(a){knd(uNe(WMe($wnd.$(ho(this.a.n.e.G)).cleanVal()))+'')};var W3=EMe(Jbf,'InputMaskView_BinderImpl/Widgets/2',1876);Zvb(1877,1,K1e,_Fd);_.Bd=function aGd(a){knd(''+ZMe(VMe($wnd.$(ho(this.a.n.c.G)).cleanVal())))};var X3=EMe(Jbf,'InputMaskView_BinderImpl/Widgets/3',1877);Zvb(1878,1,K1e,bGd);_.Bd=function cGd(a){knd(''+(new aNe(eNe($wnd.$(ho(this.a.n.d.G)).cleanVal()))).a)};var Y3=EMe(Jbf,'InputMaskView_BinderImpl/Widgets/4',1878);Zvb(1879,1,K1e,dGd);_.Bd=function eGd(a){knd(''+Qvb(FNe(XMe($wnd.$(ho(this.a.n.f.G)).cleanVal())).a))};var Z3=EMe(Jbf,'InputMaskView_BinderImpl/Widgets/5',1879);Zvb(1880,1,K1e,fGd);_.Bd=function gGd(a){knd(dE(_5b(this.a.n.b)))};var $3=EMe(Jbf,'InputMaskView_BinderImpl/Widgets/6',1880);Zvb(1881,1,P2e,hGd);_.od=function iGd(a){knd($wnd.$(ho(this.a.n.a.G)).cleanVal())};var _3=EMe(Jbf,'InputMaskView_BinderImpl/Widgets/7',1881);Zvb(1882,1,P2e,jGd);_.od=function kGd(a){knd(nF(g5b(this.a.n.g)))};var a4=EMe(Jbf,'InputMaskView_BinderImpl/Widgets/8',1882);Zvb(1883,1,P2e,lGd);_.od=function mGd(a){$wnd.$(ho(this.a.n.i.G)).unmask()};var b4=EMe(Jbf,'InputMaskView_BinderImpl/Widgets/9',1883);Zvb(817,1,maf);_.Yc=function vGd(){JOb(this.b,oGd(this.a.a))};var NNe,ONe,PNe,QNe;var DF=HMe('long','J');sZe(Kq)(10);\n//# sourceURL=gwtmaterialdemo-10.js\n")