$wnd.gwtmaterialdemo.runAsyncCallback10("function WEd(){}\nfunction YEd(a){this.a=a}\nfunction $Ed(a){this.a=a}\nfunction aFd(a){this.a=a}\nfunction cFd(a){this.a=a}\nfunction eFd(a){this.a=a}\nfunction gFd(a){this.a=a}\nfunction iFd(a){this.a=a}\nfunction kFd(a){this.a=a}\nfunction mFd(a){this.a=a}\nfunction e6b(a){this.a=a}\nfunction u5b(a){return c6b(a.a,a.b)}\nfunction z5b(){h5b();o5b.call(this)}\nfunction D5b(){h5b();o5b.call(this)}\nfunction U5b(){h5b();o5b.call(this)}\nfunction Y5b(){h5b();o5b.call(this)}\nfunction MEd(a,b,c){HJb();eKb.call(this,a,b,c,(ntd(),ltd))}\nfunction TEd(){wKb.call(this);uKb(this,UEd(new VEd(this)))}\nfunction qFd(a){var b;if(!a.d){b=new TEd;a.d=b}return a.d}\nfunction y5b(a){Q4b(a,lLe($wnd.$(ho(a.G)).cleanVal()),false)}\nfunction T5b(a){Q4b(a,MLe(mLe($wnd.$(ho(a.G)).cleanVal())),false)}\nfunction X5b(a){Q4b(a,XLe(nLe($wnd.$(ho(a.G)).cleanVal())),false)}\nfunction C5b(a){Q4b(a,new sLe(wLe($wnd.$(ho(a.G)).cleanVal())),false)}\nfunction w5b(){h5b();o5b.call(this);this.b=Mlf;this.a=new e6b(this);v5b(this,this.b)}\nfunction v5b(a,b){var c;a.b=b;c=vMe(vMe(vMe(b.toLowerCase(),'m','0'),'d','0'),'y','0');a.c=c}\nfunction c6b(a,b){if(b6b(a,b)){A4b(a.a);return UC((kD(),mD(b,vD((uD(),uD(),tD)))),Is(ho(a.a.G),c0e))}return null}\nfunction pFd(a){var b,c;if(!a.c){c=new MEd(UGb(OKb(a.a)),(b=qFd(a),b),oFd(a));zJb((RKb(a.a),c),PMb(RKb(a.a)));a.c=c}return a.c}\nfunction wLe(a){var b;b=lLe(a);if(b>3.4028234663852886E38){return Infinity}else if(b<-3.4028234663852886E38){return -Infinity}return b}\nfunction VEd(a){this.a=new WEd;this.c=new $Ed(this);this.d=new aFd(this);this.e=new cFd(this);this.f=new eFd(this);this.g=new gFd(this);this.i=new iFd(this);this.j=new kFd(this);this.k=new mFd(this);this.b=new YEd(this);this.n=a}\nfunction d6b(a,b,c){return !(qMe(a,'31')&&(qMe(b,'4')||qMe(b,'6')||qMe(b,'9')||qMe(b,'11')||qMe(b,'04')||qMe(b,'06')||qMe(b,'09')))&&(!(qMe(b,'2')||qMe(b,'02'))||(c%4==0?!(qMe(a,'30')||qMe(a,'31')):!(qMe(a,'29')||qMe(a,'30')||qMe(a,'31'))))}\nfunction hMe(){hMe=vvb;var a;dMe=iE(cE(mF,1),SYe,114,15,[-1,-1,30,19,15,13,11,11,10,9,9,8,8,8,8,7,7,7,7,7,7,7,6,6,6,6,6,6,6,6,6,6,6,6,6,6,5]);eMe=eE(mF,SYe,114,37,15,1);fMe=iE(cE(mF,1),SYe,114,15,[-1,-1,63,40,32,28,25,23,21,20,19,19,18,18,17,17,16,16,16,15,15,15,15,14,14,14,14,14,14,13,13,13,13,13,13,13,13]);gMe=eE(nF,VYe,114,37,14,1);for(a=2;a<=36;a++){eMe[a]=jF($wnd.Math.pow(a,dMe[a]));gMe[a]=_ub({l:$$e,m:$$e,h:524287},eMe[a])}}\nfunction b6b(a,b){var c,d,e,f,g;if(Is(ho(a.a.G),c0e)!=null&&Is(ho(a.a.G),c0e).length!=0&&a.a.c!=null&&b!=null){c=Is(ho(a.a.G),c0e);e=BMe(c,b.indexOf('M'),b.indexOf('M/')+1);d=BMe(c,b.indexOf('d'),b.indexOf('d/')+1);g=BMe(c,b.indexOf('y'),b.lastIndexOf('y')+1);f=d6b(d,e,mLe(g));f||H4b(a.a,'Not a valid date');return H4b(a.a,'Month does not match'),(new RegExp('^(^(0?[1-9]|1[012])$)$')).test(e)&&(H4b(a.a,'Day does not match'),(new RegExp('^((0?[1-9]|[12][0-9]|3[01]))$')).test(d))&&(H4b(a.a,'Year does not match'),(new RegExp('^(^\\\\d{4}$)$')).test(g))&&f}H4b(a.a,'Text input must not be empty or null');return false}\nfunction nLe(a){var b,c,d,e,f,g,h,i,j,k,l;if(a==null){throw Xub(new iMe(oYe))}j=a;f=a.length;i=false;if(f>0){b=(vXe(0,a.length),a.charCodeAt(0));if(b==45||b==43){a=a.substr(1);--f;i=b==45}}if(f==0){throw Xub(new iMe(Bjf+j+'\"'))}while(a.length>0&&(vXe(0,a.length),a.charCodeAt(0)==48)){a=a.substr(1);--f}if(f>(hMe(),fMe)[10]){throw Xub(new iMe(Bjf+j+'\"'))}for(e=0;e<f;e++){if(PKe((vXe(e,a.length),a.charCodeAt(e)))==-1){throw Xub(new iMe(Bjf+j+'\"'))}}l=0;g=dMe[10];k=eMe[10];h=gvb(gMe[10]);c=true;d=f%g;if(d>0){l=-parseInt(a.substr(0,d),10);a=a.substr(d);f-=d;c=false}while(f>=g){d=parseInt(a.substr(0,g),10);a=a.substr(g);f-=g;if(c){c=false}else{if(Zub(l,h)<0){throw Xub(new iMe(Bjf+j+'\"'))}l=fvb(l,k)}l=hvb(l,d)}if(Zub(l,0)>0){throw Xub(new iMe(Bjf+j+'\"'))}if(!i){l=gvb(l);if(Zub(l,0)<0){throw Xub(new iMe(Bjf+j+'\"'))}}return l}\nfunction UEd(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,A,B,C,D,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,$,ab,bb,cb,db,eb,fb,gb,hb,ib,jb,kb,lb,mb,nb,ob,pb,qb,rb,sb,tb,ub,vb,wb,xb,yb,zb,Ab,Bb;b=new Ujc;kQb(b,(c=new S6b,kQb(c,(k=new cmd,Vs(ho(k.a),(Owb(),(new Cwb(Pwb(Olf))).a)),QB(k,Olf),k)),kQb(c,(l=new Uye,SWb(l.a,_kf),UWb(l.a),(uxb(),l.tb).style[I8e]=(vy(),R8e),VWb(l.a,'jQuery-Mask-Plugin 1.14.10'),l)),kQb(c,(m=new S6b,kQb(m,(n=new _5b,brc((!n.X&&(n.X=new drc(n)),n.X),W6e),ho(n.G).setAttribute(o2e,'eg: 000-00-0000000'),epd(n.B).length==0||ro(n.B,I0e),fpd(n.B,'Phone Number'),Ds(ho(n.G),o2e).length==0||ro(n.B,I0e),n.c=Plf,n)),kQb(m,(o=new _5b,brc((!o.X&&(o.X=new drc(o)),o.X),W6e),ho(o.G).setAttribute(o2e,'eg: (00) 0000-0000'),epd(o.B).length==0||ro(o.B,I0e),fpd(o.B,'Phone with Odd'),Ds(ho(o.G),o2e).length==0||ro(o.B,I0e),o.c='(00) 0000-0000',o)),kQb(m,(p=new _5b,brc((!p.X&&(p.X=new drc(p)),p.X),W6e),ho(p.G).setAttribute(o2e,'eg: (000) 000-000'),epd(p.B).length==0||ro(p.B,I0e),fpd(p.B,'US Phone Number'),Ds(ho(p.G),o2e).length==0||ro(p.B,I0e),p.c='(000) 000-000',p)),m)),kQb(c,(q=new S6b,kQb(q,(r=new _5b,brc((!r.X&&(r.X=new drc(r)),r.X),W6e),ho(r.G).setAttribute(o2e,'eg: 00000-000'),epd(r.B).length==0||ro(r.B,I0e),fpd(r.B,'CEP'),Ds(ho(r.G),o2e).length==0||ro(r.B,I0e),r.c='00000-000',r)),kQb(q,(s=new _5b,brc((!s.X&&(s.X=new drc(s)),s.X),W6e),ho(s.G).setAttribute(o2e,'eg: 000.000.000-00'),epd(s.B).length==0||ro(s.B,I0e),fpd(s.B,'CPF'),Ds(ho(s.G),o2e).length==0||ro(s.B,I0e),s.c='000.000.000-00',s)),kQb(q,(t=new _5b,brc((!t.X&&(t.X=new drc(t)),t.X),W6e),ho(t.G).setAttribute(o2e,'eg: 000,000,000,000,000.00'),epd(t.B).length==0||ro(t.B,I0e),fpd(t.B,'Money'),Ds(ho(t.G),o2e).length==0||ro(t.B,I0e),t.c='000,000,000,000,000.00',t)),q)),kQb(c,(u=new S6b,kQb(u,(v=new _5b,brc((!v.X&&(v.X=new drc(v)),v.X),W6e),ho(v.G).setAttribute(o2e,Qlf),epd(v.B).length==0||ro(v.B,I0e),fpd(v.B,Rlf),Ds(ho(v.G),o2e).length==0||ro(v.B,I0e),v.c=Slf,v)),kQb(u,(w=new _5b,brc((!w.X&&(w.X=new drc(w)),w.X),W6e),ho(w.G).setAttribute(o2e,Tlf),epd(w.B).length==0||ro(w.B,I0e),fpd(w.B,Ulf),Ds(ho(w.G),o2e).length==0||ro(w.B,I0e),w.c=Vlf,w)),kQb(u,(A=new _5b,brc((!A.X&&(A.X=new drc(A)),A.X),W6e),ho(A.G).setAttribute(o2e,Wlf),epd(A.B).length==0||ro(A.B,I0e),fpd(A.B,Xlf),Ds(ho(A.G),o2e).length==0||ro(A.B,I0e),A.c=Ylf,A)),u)),kQb(c,(B=new dze,qpd(B,(C=new OMe,C.a+='\\u2003&lt;m:MaterialRow&gt;<br> \\u2003&lt;ma:inputmask.MaterialInputMask label=\"Phone Number\" placeholder=\"eg: 000-00-0000000\" mask=\"000-00-0000000\" grid=\"s12 m4 l4\"/&gt;<br> \\u2003&lt;ma:inputmask.MaterialInputMask label=\"Phone with Odd\" placeholder=\"eg: (00) 0000-0000\" mask=\"(00) 0000-0000\" grid=\"s12 m4 l4\"/&gt;<br> \\u2003&lt;ma:inputmask.MaterialInputMask label=\"US Phone Number\" placeholder=\"eg: (000) 000-000\" mask=\"(000) 000-000\" grid=\"s12 m4 l4\"/&gt;<br> &lt;/m:MaterialRow&gt;<br> &lt;m:MaterialRow&gt;<br> \\u2003&lt;ma:inputmask.MaterialInputMask label=\"CEP\" placeholder=\"eg: 00000-000\" mask=\"00000-000\" grid=\"s12 m4 l4\"/&gt;<br> \\u2003&lt;ma:inputmask.MaterialInputMask label=\"CPF\" placeholder=\"eg: 000.000.000-00\" mask=\"000.000.000-00\" grid=\"s12 m4 l4\"/&gt;<br> \\u2003&lt;ma:inputmask.MaterialInputMask label=\"Money\" placeholder=\"eg: 000,000,000,000,000.00\" mask=\"000,000,000,000,000.00\" grid=\"s12 m4 l4\"/&gt;<br> &lt;/m:MaterialRow&gt;<br> &lt;m:MaterialRow&gt;<br> \\u2003&lt;ma:inputmask.MaterialInputMask label=\"Ip Address\" placeholder=\"eg: 000.000.000.000\" mask=\"000.000.000.000\" grid=\"s12 m4 l4\"/&gt;<br> \\u2003&lt;ma:inputmask.MaterialInputMask label=\"Percentage\" placeholder=\"eg: 000000.00%\" mask=\"000000.00%\" grid=\"s12 m4 l4\"/&gt;<br> \\u2003&lt;ma:inputmask.MaterialInputMask label=\"Credit Card\" placeholder=\"eg: 0000 0000 0000 0000\" mask=\"0000 0000 0000 0000\" grid=\"s12 m4 l4\"/&gt;<br> &lt;/m:MaterialRow&gt;<br>',new wwb(C.a)).a),zo(B.tb,c8e,true),B)),zo(c.tb,q4e,true),c));kQb(b,(d=new S6b,kQb(d,(D=new cmd,opd(D.b,'The mask will be placed from the right to the left if reverse is true (Default : false)'),Vs(ho(D.a),(new Cwb(Pwb('Reverse'))).a),QB(D,'Reverse'),D)),kQb(d,(F=new S6b,kQb(F,(G=new _5b,brc((!G.X&&(G.X=new drc(G)),G.X),W6e),ho(G.G).setAttribute(o2e,Qlf),epd(G.B).length==0||ro(G.B,I0e),fpd(G.B,Rlf),Ds(ho(G.G),o2e).length==0||ro(G.B,I0e),G.d.reverse=true,G.c=Slf,G)),kQb(F,(H=new _5b,brc((!H.X&&(H.X=new drc(H)),H.X),W6e),ho(H.G).setAttribute(o2e,Tlf),epd(H.B).length==0||ro(H.B,I0e),fpd(H.B,Ulf),Ds(ho(H.G),o2e).length==0||ro(H.B,I0e),H.d.reverse=true,H.c=Vlf,H)),kQb(F,(I=new _5b,brc((!I.X&&(I.X=new drc(I)),I.X),W6e),ho(I.G).setAttribute(o2e,Wlf),epd(I.B).length==0||ro(I.B,I0e),fpd(I.B,Xlf),Ds(ho(I.G),o2e).length==0||ro(I.B,I0e),I.d.reverse=true,I.c=Ylf,I)),F)),kQb(d,(J=new dze,qpd(J,(K=new OMe,K.a+='&lt;ma:inputmask.MaterialInputMask label=\"Ip Address\" placeholder=\"eg: 000.000.000.000\" mask=\"000.000.000.000\" reverse=\"true\" grid=\"s12 m4 l4\"/&gt;<br> &lt;ma:inputmask.MaterialInputMask label=\"Percentage\" placeholder=\"eg: 000000.00%\" mask=\"000000.00%\" reverse=\"true\" grid=\"s12 m4 l4\"/&gt;<br> &lt;ma:inputmask.MaterialInputMask label=\"Credit Card\" placeholder=\"eg: 0000 0000 0000 0000\" mask=\"0000 0000 0000 0000\" reverse=\"true\" grid=\"s12 m4 l4\"/&gt;<br>',new wwb(K.a)).a),zo(J.tb,c8e,true),J)),zo(d.tb,q4e,true),d));kQb(b,(e=new S6b,kQb(e,(L=new cmd,opd(L.b,'The textfield will automatically clears whenever the value is not match with the mask provided. (Default : false)'),Vs(ho(L.a),(new Cwb(Pwb(Zlf))).a),QB(L,Zlf),L)),kQb(e,(M=new S6b,kQb(M,(N=new _5b,brc((!N.X&&(N.X=new drc(N)),N.X),W6e),N.d.clearIfNotMatch=true,ho(N.G).setAttribute(o2e,Qlf),epd(N.B).length==0||ro(N.B,I0e),fpd(N.B,Rlf),Ds(ho(N.G),o2e).length==0||ro(N.B,I0e),N.c=Slf,N)),kQb(M,(O=new _5b,brc((!O.X&&(O.X=new drc(O)),O.X),W6e),O.d.clearIfNotMatch=true,ho(O.G).setAttribute(o2e,Tlf),epd(O.B).length==0||ro(O.B,I0e),fpd(O.B,Ulf),Ds(ho(O.G),o2e).length==0||ro(O.B,I0e),O.c=Vlf,O)),kQb(M,(P=new _5b,brc((!P.X&&(P.X=new drc(P)),P.X),W6e),P.d.clearIfNotMatch=true,ho(P.G).setAttribute(o2e,Wlf),epd(P.B).length==0||ro(P.B,I0e),fpd(P.B,Xlf),Ds(ho(P.G),o2e).length==0||ro(P.B,I0e),P.c=Ylf,P)),M)),kQb(e,(Q=new dze,qpd(Q,(R=new OMe,R.a+='&lt;ma:inputmask.MaterialInputMask label=\"Ip Address\" placeholder=\"eg: 000.000.000.000\" mask=\"000.000.000.000\" clearIfNotMatch=\"true\" grid=\"s12 m4 l4\"/&gt;<br> &lt;ma:inputmask.MaterialInputMask label=\"Percentage\" placeholder=\"eg: 000000.00%\" mask=\"000000.00%\" clearIfNotMatch=\"true\" grid=\"s12 m4 l4\"/&gt;<br> &lt;ma:inputmask.MaterialInputMask label=\"Credit Card\" placeholder=\"eg: 0000 0000 0000 0000\" mask=\"0000 0000 0000 0000\" clearIfNotMatch=\"true\" grid=\"s12 m4 l4\"/&gt;<br>',new wwb(R.a)).a),zo(Q.tb,c8e,true),Q)),zo(e.tb,q4e,true),e));kQb(b,(f=new S6b,kQb(f,(S=new cmd,opd(S.b,'Set whether you want to set on focus on your mask for easy selection.'),Vs(ho(S.a),(new Cwb(Pwb($lf))).a),QB(S,$lf),S)),kQb(f,(T=new S6b,kQb(T,(U=new _5b,brc((!U.X&&(U.X=new drc(U)),U.X),W6e),U.d.selectOnFocus=true,ho(U.G).setAttribute(o2e,Qlf),epd(U.B).length==0||ro(U.B,I0e),fpd(U.B,Rlf),Ds(ho(U.G),o2e).length==0||ro(U.B,I0e),U.c=Slf,U)),kQb(T,(V=new _5b,brc((!V.X&&(V.X=new drc(V)),V.X),W6e),V.d.selectOnFocus=true,ho(V.G).setAttribute(o2e,Tlf),epd(V.B).length==0||ro(V.B,I0e),fpd(V.B,Ulf),Ds(ho(V.G),o2e).length==0||ro(V.B,I0e),V.c=Vlf,V)),kQb(T,(W=new _5b,brc((!W.X&&(W.X=new drc(W)),W.X),W6e),W.d.selectOnFocus=true,ho(W.G).setAttribute(o2e,Wlf),epd(W.B).length==0||ro(W.B,I0e),fpd(W.B,Xlf),Ds(ho(W.G),o2e).length==0||ro(W.B,I0e),W.c=Ylf,W)),T)),kQb(f,(X=new dze,qpd(X,(Y=new OMe,Y.a+='&lt;ma:inputmask.MaterialInputMask label=\"Ip Address\" placeholder=\"eg: 000.000.000.000\" mask=\"000.000.000.000\" selectOnFocus=\"true\" grid=\"s12 m4 l4\"/&gt;<br> &lt;ma:inputmask.MaterialInputMask label=\"Percentage\" placeholder=\"eg: 000000.00%\" mask=\"000000.00%\" selectOnFocus=\"true\" grid=\"s12 m4 l4\"/&gt;<br> &lt;ma:inputmask.MaterialInputMask label=\"Credit Card\" placeholder=\"eg: 0000 0000 0000 0000\" mask=\"0000 0000 0000 0000\" selectOnFocus=\"true\" grid=\"s12 m4 l4\"/&gt;<br>',new wwb(Y.a)).a),zo(X.tb,c8e,true),X)),zo(f.tb,q4e,true),f));kQb(b,(g=new S6b,kQb(g,(Z=new cmd,opd(Z.b,'We supported type safe Input Masks'),Vs(ho(Z.a),(new Cwb(Pwb('Types'))).a),QB(Z,'Types'),Z)),kQb(g,($=new _5b,brc((!$.X&&($.X=new drc($)),$.X),d8e),ho($.G).setAttribute(o2e,'eg. A0A-1A1'),epd($.B).length==0||ro($.B,I0e),fpd($.B,RYe),Ds(ho($.G),o2e).length==0||ro($.B,I0e),$.c='S0S-0S0',y4b($,a.a),$)),kQb(g,(ab=new U5b,brc((!ab.X&&(ab.X=new drc(ab)),ab.X),d8e),fpd(ab.B,'Integer'),Ds(ho(ab.G),o2e).length==0||ro(ab.B,I0e),ab.c='000-00-000',y4b(ab,a.c),a.n.e=ab,ab)),kQb(g,(bb=new z5b,brc((!bb.X&&(bb.X=new drc(bb)),bb.X),d8e),fpd(bb.B,'Double'),Ds(ho(bb.G),o2e).length==0||ro(bb.B,I0e),bb.c='000-00-00000',y4b(bb,a.d),a.n.c=bb,bb)),kQb(g,(cb=new D5b,brc((!cb.X&&(cb.X=new drc(cb)),cb.X),d8e),fpd(cb.B,_lf),Ds(ho(cb.G),o2e).length==0||ro(cb.B,I0e),cb.c='000-00-0000',y4b(cb,a.e),a.n.d=cb,cb)),kQb(g,(db=new Y5b,brc((!db.X&&(db.X=new drc(db)),db.X),d8e),fpd(db.B,'Long'),Ds(ho(db.G),o2e).length==0||ro(db.B,I0e),db.c=Plf,y4b(db,a.f),a.n.f=db,db)),kQb(g,(eb=new w5b,brc((!eb.X&&(eb.X=new drc(eb)),eb.X),d8e),eb.b=Mlf,fb=vMe(vMe(vMe(Mlf.toLowerCase(),'m','0'),'d','0'),'y','0'),eb.c=fb,eb.ob?dRb(eb,y4b(eb,new dmc(eb))):dRb(eb,Go(eb,new bmc(eb),(!oB&&(oB=new Vz),oB))),fpd(eb.B,Z$e),Ds(ho(eb.G),o2e).length==0||ro(eb.B,I0e),y4b(eb,a.g),a.n.b=eb,eb)),zo(g.tb,q4e,true),g));kQb(b,(h=new S6b,kQb(h,(gb=new cmd,opd(gb.b,'Gets the value of the field with the mask.'),Vs(ho(gb.a),(new Cwb(Pwb(r8e))).a),QB(gb,r8e),gb)),kQb(h,(hb=new S6b,kQb(hb,(ib=new _5b,brc((!ib.X&&(ib.X=new drc(ib)),ib.X),W6e),ho(ib.G).setAttribute(o2e,Qlf),epd(ib.B).length==0||ro(ib.B,I0e),fpd(ib.B,Rlf),Ds(ho(ib.G),o2e).length==0||ro(ib.B,I0e),ib.d.reverse=true,ib.c=Slf,a.n.g=ib,ib)),kQb(hb,(jb=new udd,kQb(jb,(kb=new mXb,tYb(kb.k,r8e),kb.k.ob||kQb(kb,kb.k),oQb(kb,a.j),kb)),brc((!jb.X&&(jb.X=new drc(jb)),jb.X),d8e),jb)),hb)),kQb(h,(lb=new dze,qpd(lb,(mb=new OMe,mb.a+='inputMask.getValue();',new wwb(mb.a)).a),zo(lb.tb,h8e,true),lb)),zo(h.tb,q4e,true),h));kQb(b,(i=new S6b,kQb(i,(nb=new cmd,opd(nb.b,'Gets the value of the field without the mask.'),Vs(ho(nb.a),(new Cwb(Pwb(amf))).a),QB(nb,amf),nb)),kQb(i,(ob=new S6b,kQb(ob,(pb=new _5b,brc((!pb.X&&(pb.X=new drc(pb)),pb.X),W6e),ho(pb.G).setAttribute(o2e,Qlf),epd(pb.B).length==0||ro(pb.B,I0e),fpd(pb.B,Rlf),Ds(ho(pb.G),o2e).length==0||ro(pb.B,I0e),pb.d.reverse=true,pb.c=Slf,a.n.a=pb,pb)),kQb(ob,(qb=new udd,kQb(qb,(rb=new mXb,tYb(rb.k,amf),rb.k.ob||kQb(rb,rb.k),oQb(rb,a.i),rb)),brc((!qb.X&&(qb.X=new drc(qb)),qb.X),d8e),qb)),ob)),kQb(i,(sb=new dze,qpd(sb,(tb=new OMe,tb.a+='inputMask.getCleanValue();',new wwb(tb.a)).a),zo(sb.tb,h8e,true),sb)),zo(i.tb,q4e,true),i));kQb(b,(j=new S6b,kQb(j,(ub=new cmd,opd(ub.b,'Programmatically controls the Input Mask main methods.'),Vs(ho(ub.a),(new Cwb(Pwb(bmf))).a),QB(ub,bmf),ub)),kQb(j,(vb=new S6b,kQb(vb,(wb=new _5b,brc((!wb.X&&(wb.X=new drc(wb)),wb.X),W6e),ho(wb.G).setAttribute(o2e,Qlf),epd(wb.B).length==0||ro(wb.B,I0e),fpd(wb.B,Rlf),Ds(ho(wb.G),o2e).length==0||ro(wb.B,I0e),wb.d.reverse=true,wb.c=Slf,a.n.i=wb,wb)),kQb(vb,(xb=new udd,kQb(xb,(yb=new mXb,yb.tb.style[M0e]=q8e,fRb(yb,(izc(),Vyc)),tYb(yb.k,'Unmask'),yb.k.ob||kQb(yb,yb.k),IRb(yb,Iuc),oQb(yb,a.k),yb)),kQb(xb,(zb=new mXb,tYb(zb.k,'mask'),zb.k.ob||kQb(zb,zb.k),oQb(zb,a.b),zb)),brc((!xb.X&&(xb.X=new drc(xb)),xb.X),d8e),xb)),vb)),kQb(j,(Ab=new dze,qpd(Ab,(Bb=new OMe,Bb.a+='\\u2003inputMask.mask(\"00.00\"); <br> inputMask.unmask();',new wwb(Bb.a)).a),zo(Ab.tb,h8e,true),Ab)),zo(j.tb,q4e,true),j));return b}\nvar Mlf='MM/dd/yyyy',Olf='Basic Examples',Plf='000-00-0000000',Qlf='eg: 000.000.000.000',Rlf='Ip Address',Slf='000.000.000.000',Tlf='eg: 000000.00%',Ulf='Percentage',Vlf='000000.00%',Wlf='eg: 0000 0000 0000 0000',Xlf='Credit Card',Ylf='0000 0000 0000 0000',Zlf='Clear If not Match',$lf='Select on Focus',amf='Get Clean Value',bmf='Unmask and Mask control';uvb(2638,320,q2e,w5b);_.Xd=function x5b(){return c6b(this.a,this.b)};var BP=WKe(Nlf,'MaterialDateInputMask',2638);uvb(2635,320,q2e,z5b);_.Xd=function A5b(){return lLe($wnd.$(ho(this.G)).cleanVal())};_.Yd=function B5b(a){var b;y5b((b=this,kF(a),b))};var CP=WKe(Nlf,'MaterialDoubleInputMask',2635);uvb(2636,320,q2e,D5b);_.Xd=function E5b(){return new sLe(wLe($wnd.$(ho(this.G)).cleanVal()))};_.Yd=function F5b(a){var b;C5b((b=this,kF(a),b))};var DP=WKe(Nlf,'MaterialFloatInputMask',2636);uvb(2634,320,q2e,U5b);_.Xd=function V5b(){return MLe(mLe($wnd.$(ho(this.G)).cleanVal()))};_.Yd=function W5b(a){var b;T5b((b=this,kF(a),b))};var GP=WKe(Nlf,'MaterialIntegerInputMask',2634);uvb(2637,320,q2e,Y5b);_.Xd=function Z5b(){return XLe(nLe($wnd.$(ho(this.G)).cleanVal()))};_.Yd=function $5b(a){var b;X5b((b=this,kF(a),b))};var HP=WKe(Nlf,'MaterialLongInputMask',2637);uvb(2689,1,{},e6b);var JP=WKe('gwt.material.design.addins.client.inputmask.base','DateInputParser',2689);uvb(970,54,u0e,MEd);_.Fe=function NEd(){Eye();OJb(this,new Gye(agf,'An inputmask helps the user with the input by ensuring a predefined format. This can be useful for dates, numerics, phone numbers etc...','addins/inputmask/InputMask',''))};var A3=WKe(W9e,'InputMaskPresenter',970);uvb(1363,64,v0e,TEd);var M3=WKe(W9e,'InputMaskView',1363);uvb(1866,1,{},VEd);var L3=WKe(W9e,'InputMaskView_BinderImpl/Widgets',1866);uvb(1867,1,X_e,WEd);_.Bd=function XEd(a){lmd($E(a.a))};var C3=WKe(W9e,'InputMaskView_BinderImpl/Widgets/1',1867);uvb(1876,1,a1e,YEd);_.od=function ZEd(a){m5b(this.a.n.i,Slf)};var B3=WKe(W9e,'InputMaskView_BinderImpl/Widgets/10',1876);uvb(1868,1,X_e,$Ed);_.Bd=function _Ed(a){lmd(MLe(mLe($wnd.$(ho(this.a.n.e.G)).cleanVal()))+'')};var D3=WKe(W9e,'InputMaskView_BinderImpl/Widgets/2',1868);uvb(1869,1,X_e,aFd);_.Bd=function bFd(a){lmd(''+pLe(lLe($wnd.$(ho(this.a.n.c.G)).cleanVal())))};var E3=WKe(W9e,'InputMaskView_BinderImpl/Widgets/3',1869);uvb(1870,1,X_e,cFd);_.Bd=function dFd(a){lmd(''+(new sLe(wLe($wnd.$(ho(this.a.n.d.G)).cleanVal()))).a)};var F3=WKe(W9e,'InputMaskView_BinderImpl/Widgets/4',1870);uvb(1871,1,X_e,eFd);_.Bd=function fFd(a){lmd(''+lvb(XLe(nLe($wnd.$(ho(this.a.n.f.G)).cleanVal())).a))};var G3=WKe(W9e,'InputMaskView_BinderImpl/Widgets/5',1871);uvb(1872,1,X_e,gFd);_.Bd=function hFd(a){lmd(QD(u5b(this.a.n.b)))};var H3=WKe(W9e,'InputMaskView_BinderImpl/Widgets/6',1872);uvb(1873,1,a1e,iFd);_.od=function jFd(a){lmd($wnd.$(ho(this.a.n.a.G)).cleanVal())};var I3=WKe(W9e,'InputMaskView_BinderImpl/Widgets/7',1873);uvb(1874,1,a1e,kFd);_.od=function lFd(a){lmd($E(B4b(this.a.n.g)))};var J3=WKe(W9e,'InputMaskView_BinderImpl/Widgets/8',1874);uvb(1875,1,a1e,mFd);_.od=function nFd(a){$wnd.$(ho(this.a.n.i.G)).unmask()};var K3=WKe(W9e,'InputMaskView_BinderImpl/Widgets/9',1875);uvb(811,1,A8e);_.Yc=function wFd(){eOb(this.b,pFd(this.a.a))};var dMe,eMe,fMe,gMe;var nF=ZKe('long','J');IXe(Kq)(10);\n//# sourceURL=gwtmaterialdemo-10.js\n")
