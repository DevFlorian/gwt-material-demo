$wnd.gwtmaterialdemo.runAsyncCallback10("function IEd(){}\nfunction KEd(a){this.a=a}\nfunction MEd(a){this.a=a}\nfunction OEd(a){this.a=a}\nfunction QEd(a){this.a=a}\nfunction SEd(a){this.a=a}\nfunction UEd(a){this.a=a}\nfunction WEd(a){this.a=a}\nfunction YEd(a){this.a=a}\nfunction $Ed(a){this.a=a}\nfunction y5b(a){this.a=a}\nfunction O4b(a){return w5b(a.a,a.b)}\nfunction T4b(){B4b();I4b.call(this)}\nfunction X4b(){B4b();I4b.call(this)}\nfunction m5b(){B4b();I4b.call(this)}\nfunction q5b(){B4b();I4b.call(this)}\nfunction yEd(a,b,c){ZIb();wJb.call(this,a,b,c,(atd(),$sd))}\nfunction FEd(){OJb.call(this);MJb(this,GEd(new HEd(this)))}\nfunction cFd(a){var b;if(!a.d){b=new FEd;a.d=b}return a.d}\nfunction S4b(a){i4b(a,ILe($wnd.$(ho(a.G)).cleanVal()),false)}\nfunction l5b(a){i4b(a,hMe(JLe($wnd.$(ho(a.G)).cleanVal())),false)}\nfunction p5b(a){i4b(a,sMe(KLe($wnd.$(ho(a.G)).cleanVal())),false)}\nfunction W4b(a){i4b(a,new PLe(TLe($wnd.$(ho(a.G)).cleanVal())),false)}\nfunction Q4b(){B4b();I4b.call(this);this.b=Cmf;this.a=new y5b(this);P4b(this,this.b)}\nfunction P4b(a,b){var c;a.b=b;c=SMe(SMe(SMe(b.toLowerCase(),'m','0'),'d','0'),'y','0');a.c=c}\nfunction w5b(a,b){if(v5b(a,b)){U3b(a.a);return XB((nC(),pC(b,yC((xC(),xC(),wC)))),Bs(ho(a.a.G),F0e))}return null}\nfunction bFd(a){var b,c;if(!a.c){c=new yEd(kGb(eKb(a.a)),(b=cFd(a),b),aFd(a));RIb((hKb(a.a),c),fMb(hKb(a.a)));a.c=c}return a.c}\nfunction TLe(a){var b;b=ILe(a);if(b>3.4028234663852886E38){return Infinity}else if(b<-3.4028234663852886E38){return -Infinity}return b}\nfunction HEd(a){this.a=new IEd;this.c=new MEd(this);this.d=new OEd(this);this.e=new QEd(this);this.f=new SEd(this);this.g=new UEd(this);this.i=new WEd(this);this.j=new YEd(this);this.k=new $Ed(this);this.b=new KEd(this);this.n=a}\nfunction x5b(a,b,c){return !(NMe(a,'31')&&(NMe(b,'4')||NMe(b,'6')||NMe(b,'9')||NMe(b,'11')||NMe(b,'04')||NMe(b,'06')||NMe(b,'09')))&&(!(NMe(b,'2')||NMe(b,'02'))||(c%4==0?!NMe(a,'30')&&!NMe(a,'31'):!NMe(a,'29')&&!NMe(a,'30')&&!NMe(a,'31')))}\nfunction EMe(){EMe=Kub;var a;AMe=lD(fD(qE,1),qZe,116,15,[-1,-1,30,19,15,13,11,11,10,9,9,8,8,8,8,7,7,7,7,7,7,7,6,6,6,6,6,6,6,6,6,6,6,6,6,6,5]);BMe=hD(qE,qZe,116,37,15,1);CMe=lD(fD(qE,1),qZe,116,15,[-1,-1,63,40,32,28,25,23,21,20,19,19,18,18,17,17,16,16,16,15,15,15,15,14,14,14,14,14,14,13,13,13,13,13,13,13,13]);DMe=hD(rE,tZe,116,37,14,1);for(a=2;a<=36;a++){BMe[a]=nE($wnd.Math.pow(a,AMe[a]));DMe[a]=nub({l:v_e,m:v_e,h:524287},BMe[a])}}\nfunction v5b(a,b){var c,d,e,f,g;if(Bs(ho(a.a.G),F0e)!=null&&Bs(ho(a.a.G),F0e).length!=0&&a.a.c!=null&&b!=null){c=Bs(ho(a.a.G),F0e);e=YMe(c,b.indexOf('M'),b.indexOf('M/')+1);d=YMe(c,b.indexOf('d'),b.indexOf('d/')+1);g=YMe(c,b.indexOf('y'),b.lastIndexOf('y')+1);f=x5b(d,e,JLe(g));f||_3b(a.a,'Not a valid date');return _3b(a.a,'Month does not match'),(new RegExp('^(^(0?[1-9]|1[012])$)$')).test(e)&&(_3b(a.a,'Day does not match'),(new RegExp('^((0?[1-9]|[12][0-9]|3[01]))$')).test(d))&&(_3b(a.a,'Year does not match'),(new RegExp('^(^\\\\d{4}$)$')).test(g))&&f}_3b(a.a,'Text input must not be empty or null');return false}\nfunction KLe(a){var b,c,d,e,f,g,h,i,j,k,l;if(a==null){throw jub(new FMe(NYe))}j=a;f=a.length;i=false;if(f>0){b=(UXe(0,a.length),a.charCodeAt(0));if(b==45||b==43){a=a.substr(1);--f;i=b==45}}if(f==0){throw jub(new FMe(okf+j+'\"'))}while(a.length>0&&(UXe(0,a.length),a.charCodeAt(0)==48)){a=a.substr(1);--f}if(f>(EMe(),CMe)[10]){throw jub(new FMe(okf+j+'\"'))}for(e=0;e<f;e++){if(kLe((UXe(e,a.length),a.charCodeAt(e)))==-1){throw jub(new FMe(okf+j+'\"'))}}l=0;g=AMe[10];k=BMe[10];h=vub(DMe[10]);c=true;d=f%g;if(d>0){l=-parseInt(a.substr(0,d),10);a=a.substr(d);f-=d;c=false}while(f>=g){d=parseInt(a.substr(0,g),10);a=a.substr(g);f-=g;if(c){c=false}else{if(lub(l,h)<0){throw jub(new FMe(okf+j+'\"'))}l=uub(l,k)}l=wub(l,d)}if(lub(l,0)>0){throw jub(new FMe(okf+j+'\"'))}if(!i){l=vub(l);if(lub(l,0)<0){throw jub(new FMe(okf+j+'\"'))}}return l}\nfunction GEd(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,A,B,C,D,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,$,ab,bb,cb,db,eb,fb,gb,hb,ib,jb,kb,lb,mb,nb,ob,pb,qb,rb,sb,tb,ub,vb,wb,xb,yb,zb,Ab,Bb;b=new mjc;CPb(b,(c=new k6b,CPb(c,(k=new Qld,Is(ho(k.a),(bwb(),(new Rvb(cwb(Emf))).a)),GA(k,Emf),k)),CPb(c,(l=new Tye,iWb(l.a,Plf),kWb(l.a),(Jwb(),l.tb).style[m9e]=(lx(),v9e),lWb(l.a,'jQuery-Mask-Plugin 1.14.10'),l)),CPb(c,(m=new k6b,CPb(m,(n=new t5b,jqc((!n.X&&(n.X=new lqc(n)),n.X),B7e),ho(n.G).setAttribute(U2e,'eg: 000-00-0000000'),Sod(n.A).length==0||ro(n.A,j1e),Tod(n.A,'Phone Number'),(ho(n.G).getAttribute(U2e)||'').length==0||ro(n.A,j1e),n.c=Fmf,n)),CPb(m,(o=new t5b,jqc((!o.X&&(o.X=new lqc(o)),o.X),B7e),ho(o.G).setAttribute(U2e,'eg: (00) 0000-0000'),Sod(o.A).length==0||ro(o.A,j1e),Tod(o.A,'Phone with Odd'),(ho(o.G).getAttribute(U2e)||'').length==0||ro(o.A,j1e),o.c='(00) 0000-0000',o)),CPb(m,(p=new t5b,jqc((!p.X&&(p.X=new lqc(p)),p.X),B7e),ho(p.G).setAttribute(U2e,'eg: (000) 000-000'),Sod(p.A).length==0||ro(p.A,j1e),Tod(p.A,'US Phone Number'),(ho(p.G).getAttribute(U2e)||'').length==0||ro(p.A,j1e),p.c='(000) 000-000',p)),m)),CPb(c,(q=new k6b,CPb(q,(r=new t5b,jqc((!r.X&&(r.X=new lqc(r)),r.X),B7e),ho(r.G).setAttribute(U2e,'eg: 00000-000'),Sod(r.A).length==0||ro(r.A,j1e),Tod(r.A,'CEP'),(ho(r.G).getAttribute(U2e)||'').length==0||ro(r.A,j1e),r.c='00000-000',r)),CPb(q,(s=new t5b,jqc((!s.X&&(s.X=new lqc(s)),s.X),B7e),ho(s.G).setAttribute(U2e,'eg: 000.000.000-00'),Sod(s.A).length==0||ro(s.A,j1e),Tod(s.A,'CPF'),(ho(s.G).getAttribute(U2e)||'').length==0||ro(s.A,j1e),s.c='000.000.000-00',s)),CPb(q,(t=new t5b,jqc((!t.X&&(t.X=new lqc(t)),t.X),B7e),ho(t.G).setAttribute(U2e,'eg: 000,000,000,000,000.00'),Sod(t.A).length==0||ro(t.A,j1e),Tod(t.A,'Money'),(ho(t.G).getAttribute(U2e)||'').length==0||ro(t.A,j1e),t.c='000,000,000,000,000.00',t)),q)),CPb(c,(u=new k6b,CPb(u,(v=new t5b,jqc((!v.X&&(v.X=new lqc(v)),v.X),B7e),ho(v.G).setAttribute(U2e,Gmf),Sod(v.A).length==0||ro(v.A,j1e),Tod(v.A,Hmf),(ho(v.G).getAttribute(U2e)||'').length==0||ro(v.A,j1e),v.c=Imf,v)),CPb(u,(w=new t5b,jqc((!w.X&&(w.X=new lqc(w)),w.X),B7e),ho(w.G).setAttribute(U2e,Jmf),Sod(w.A).length==0||ro(w.A,j1e),Tod(w.A,Kmf),(ho(w.G).getAttribute(U2e)||'').length==0||ro(w.A,j1e),w.c=Lmf,w)),CPb(u,(A=new t5b,jqc((!A.X&&(A.X=new lqc(A)),A.X),B7e),ho(A.G).setAttribute(U2e,Mmf),Sod(A.A).length==0||ro(A.A,j1e),Tod(A.A,Nmf),(ho(A.G).getAttribute(U2e)||'').length==0||ro(A.A,j1e),A.c=Omf,A)),u)),CPb(c,(B=new cze,cpd(B,(C=new lNe,C.a+='\\u2003&lt;m:MaterialRow&gt;<br> \\u2003&lt;ma:inputmask.MaterialInputMask label=\"Phone Number\" placeholder=\"eg: 000-00-0000000\" mask=\"000-00-0000000\" grid=\"s12 m4 l4\"/&gt;<br> \\u2003&lt;ma:inputmask.MaterialInputMask label=\"Phone with Odd\" placeholder=\"eg: (00) 0000-0000\" mask=\"(00) 0000-0000\" grid=\"s12 m4 l4\"/&gt;<br> \\u2003&lt;ma:inputmask.MaterialInputMask label=\"US Phone Number\" placeholder=\"eg: (000) 000-000\" mask=\"(000) 000-000\" grid=\"s12 m4 l4\"/&gt;<br> &lt;/m:MaterialRow&gt;<br> &lt;m:MaterialRow&gt;<br> \\u2003&lt;ma:inputmask.MaterialInputMask label=\"CEP\" placeholder=\"eg: 00000-000\" mask=\"00000-000\" grid=\"s12 m4 l4\"/&gt;<br> \\u2003&lt;ma:inputmask.MaterialInputMask label=\"CPF\" placeholder=\"eg: 000.000.000-00\" mask=\"000.000.000-00\" grid=\"s12 m4 l4\"/&gt;<br> \\u2003&lt;ma:inputmask.MaterialInputMask label=\"Money\" placeholder=\"eg: 000,000,000,000,000.00\" mask=\"000,000,000,000,000.00\" grid=\"s12 m4 l4\"/&gt;<br> &lt;/m:MaterialRow&gt;<br> &lt;m:MaterialRow&gt;<br> \\u2003&lt;ma:inputmask.MaterialInputMask label=\"Ip Address\" placeholder=\"eg: 000.000.000.000\" mask=\"000.000.000.000\" grid=\"s12 m4 l4\"/&gt;<br> \\u2003&lt;ma:inputmask.MaterialInputMask label=\"Percentage\" placeholder=\"eg: 000000.00%\" mask=\"000000.00%\" grid=\"s12 m4 l4\"/&gt;<br> \\u2003&lt;ma:inputmask.MaterialInputMask label=\"Credit Card\" placeholder=\"eg: 0000 0000 0000 0000\" mask=\"0000 0000 0000 0000\" grid=\"s12 m4 l4\"/&gt;<br> &lt;/m:MaterialRow&gt;<br>',new Lvb(C.a)).a),zo(B.tb,I8e,true),B)),zo(c.tb,X4e,true),c));CPb(b,(d=new k6b,CPb(d,(D=new Qld,apd(D.b,'The mask will be placed from the right to the left if reverse is true (Default : false)'),Is(ho(D.a),(new Rvb(cwb('Reverse'))).a),GA(D,'Reverse'),D)),CPb(d,(F=new k6b,CPb(F,(G=new t5b,jqc((!G.X&&(G.X=new lqc(G)),G.X),B7e),ho(G.G).setAttribute(U2e,Gmf),Sod(G.A).length==0||ro(G.A,j1e),Tod(G.A,Hmf),(ho(G.G).getAttribute(U2e)||'').length==0||ro(G.A,j1e),G.d.reverse=true,G.c=Imf,G)),CPb(F,(H=new t5b,jqc((!H.X&&(H.X=new lqc(H)),H.X),B7e),ho(H.G).setAttribute(U2e,Jmf),Sod(H.A).length==0||ro(H.A,j1e),Tod(H.A,Kmf),(ho(H.G).getAttribute(U2e)||'').length==0||ro(H.A,j1e),H.d.reverse=true,H.c=Lmf,H)),CPb(F,(I=new t5b,jqc((!I.X&&(I.X=new lqc(I)),I.X),B7e),ho(I.G).setAttribute(U2e,Mmf),Sod(I.A).length==0||ro(I.A,j1e),Tod(I.A,Nmf),(ho(I.G).getAttribute(U2e)||'').length==0||ro(I.A,j1e),I.d.reverse=true,I.c=Omf,I)),F)),CPb(d,(J=new cze,cpd(J,(K=new lNe,K.a+='&lt;ma:inputmask.MaterialInputMask label=\"Ip Address\" placeholder=\"eg: 000.000.000.000\" mask=\"000.000.000.000\" reverse=\"true\" grid=\"s12 m4 l4\"/&gt;<br> &lt;ma:inputmask.MaterialInputMask label=\"Percentage\" placeholder=\"eg: 000000.00%\" mask=\"000000.00%\" reverse=\"true\" grid=\"s12 m4 l4\"/&gt;<br> &lt;ma:inputmask.MaterialInputMask label=\"Credit Card\" placeholder=\"eg: 0000 0000 0000 0000\" mask=\"0000 0000 0000 0000\" reverse=\"true\" grid=\"s12 m4 l4\"/&gt;<br>',new Lvb(K.a)).a),zo(J.tb,I8e,true),J)),zo(d.tb,X4e,true),d));CPb(b,(e=new k6b,CPb(e,(L=new Qld,apd(L.b,'The textfield will automatically clears whenever the value is not match with the mask provided. (Default : false)'),Is(ho(L.a),(new Rvb(cwb(Pmf))).a),GA(L,Pmf),L)),CPb(e,(M=new k6b,CPb(M,(N=new t5b,jqc((!N.X&&(N.X=new lqc(N)),N.X),B7e),N.d.clearIfNotMatch=true,ho(N.G).setAttribute(U2e,Gmf),Sod(N.A).length==0||ro(N.A,j1e),Tod(N.A,Hmf),(ho(N.G).getAttribute(U2e)||'').length==0||ro(N.A,j1e),N.c=Imf,N)),CPb(M,(O=new t5b,jqc((!O.X&&(O.X=new lqc(O)),O.X),B7e),O.d.clearIfNotMatch=true,ho(O.G).setAttribute(U2e,Jmf),Sod(O.A).length==0||ro(O.A,j1e),Tod(O.A,Kmf),(ho(O.G).getAttribute(U2e)||'').length==0||ro(O.A,j1e),O.c=Lmf,O)),CPb(M,(P=new t5b,jqc((!P.X&&(P.X=new lqc(P)),P.X),B7e),P.d.clearIfNotMatch=true,ho(P.G).setAttribute(U2e,Mmf),Sod(P.A).length==0||ro(P.A,j1e),Tod(P.A,Nmf),(ho(P.G).getAttribute(U2e)||'').length==0||ro(P.A,j1e),P.c=Omf,P)),M)),CPb(e,(Q=new cze,cpd(Q,(R=new lNe,R.a+='&lt;ma:inputmask.MaterialInputMask label=\"Ip Address\" placeholder=\"eg: 000.000.000.000\" mask=\"000.000.000.000\" clearIfNotMatch=\"true\" grid=\"s12 m4 l4\"/&gt;<br> &lt;ma:inputmask.MaterialInputMask label=\"Percentage\" placeholder=\"eg: 000000.00%\" mask=\"000000.00%\" clearIfNotMatch=\"true\" grid=\"s12 m4 l4\"/&gt;<br> &lt;ma:inputmask.MaterialInputMask label=\"Credit Card\" placeholder=\"eg: 0000 0000 0000 0000\" mask=\"0000 0000 0000 0000\" clearIfNotMatch=\"true\" grid=\"s12 m4 l4\"/&gt;<br>',new Lvb(R.a)).a),zo(Q.tb,I8e,true),Q)),zo(e.tb,X4e,true),e));CPb(b,(f=new k6b,CPb(f,(S=new Qld,apd(S.b,'Set whether you want to set on focus on your mask for easy selection.'),Is(ho(S.a),(new Rvb(cwb(Qmf))).a),GA(S,Qmf),S)),CPb(f,(T=new k6b,CPb(T,(U=new t5b,jqc((!U.X&&(U.X=new lqc(U)),U.X),B7e),U.d.selectOnFocus=true,ho(U.G).setAttribute(U2e,Gmf),Sod(U.A).length==0||ro(U.A,j1e),Tod(U.A,Hmf),(ho(U.G).getAttribute(U2e)||'').length==0||ro(U.A,j1e),U.c=Imf,U)),CPb(T,(V=new t5b,jqc((!V.X&&(V.X=new lqc(V)),V.X),B7e),V.d.selectOnFocus=true,ho(V.G).setAttribute(U2e,Jmf),Sod(V.A).length==0||ro(V.A,j1e),Tod(V.A,Kmf),(ho(V.G).getAttribute(U2e)||'').length==0||ro(V.A,j1e),V.c=Lmf,V)),CPb(T,(W=new t5b,jqc((!W.X&&(W.X=new lqc(W)),W.X),B7e),W.d.selectOnFocus=true,ho(W.G).setAttribute(U2e,Mmf),Sod(W.A).length==0||ro(W.A,j1e),Tod(W.A,Nmf),(ho(W.G).getAttribute(U2e)||'').length==0||ro(W.A,j1e),W.c=Omf,W)),T)),CPb(f,(X=new cze,cpd(X,(Y=new lNe,Y.a+='&lt;ma:inputmask.MaterialInputMask label=\"Ip Address\" placeholder=\"eg: 000.000.000.000\" mask=\"000.000.000.000\" selectOnFocus=\"true\" grid=\"s12 m4 l4\"/&gt;<br> &lt;ma:inputmask.MaterialInputMask label=\"Percentage\" placeholder=\"eg: 000000.00%\" mask=\"000000.00%\" selectOnFocus=\"true\" grid=\"s12 m4 l4\"/&gt;<br> &lt;ma:inputmask.MaterialInputMask label=\"Credit Card\" placeholder=\"eg: 0000 0000 0000 0000\" mask=\"0000 0000 0000 0000\" selectOnFocus=\"true\" grid=\"s12 m4 l4\"/&gt;<br>',new Lvb(Y.a)).a),zo(X.tb,I8e,true),X)),zo(f.tb,X4e,true),f));CPb(b,(g=new k6b,CPb(g,(Z=new Qld,apd(Z.b,'We supported type safe Input Masks'),Is(ho(Z.a),(new Rvb(cwb('Types'))).a),GA(Z,'Types'),Z)),CPb(g,($=new t5b,jqc((!$.X&&($.X=new lqc($)),$.X),J8e),ho($.G).setAttribute(U2e,'eg. A0A-1A1'),Sod($.A).length==0||ro($.A,j1e),Tod($.A,pZe),(ho($.G).getAttribute(U2e)||'').length==0||ro($.A,j1e),$.c='S0S-0S0',S3b($,a.a),$)),CPb(g,(ab=new m5b,jqc((!ab.X&&(ab.X=new lqc(ab)),ab.X),J8e),Tod(ab.A,'Integer'),(ho(ab.G).getAttribute(U2e)||'').length==0||ro(ab.A,j1e),ab.c='000-00-000',S3b(ab,a.c),a.n.e=ab,ab)),CPb(g,(bb=new T4b,jqc((!bb.X&&(bb.X=new lqc(bb)),bb.X),J8e),Tod(bb.A,'Double'),(ho(bb.G).getAttribute(U2e)||'').length==0||ro(bb.A,j1e),bb.c='000-00-00000',S3b(bb,a.d),a.n.c=bb,bb)),CPb(g,(cb=new X4b,jqc((!cb.X&&(cb.X=new lqc(cb)),cb.X),J8e),Tod(cb.A,Rmf),(ho(cb.G).getAttribute(U2e)||'').length==0||ro(cb.A,j1e),cb.c='000-00-0000',S3b(cb,a.e),a.n.d=cb,cb)),CPb(g,(db=new q5b,jqc((!db.X&&(db.X=new lqc(db)),db.X),J8e),Tod(db.A,'Long'),(ho(db.G).getAttribute(U2e)||'').length==0||ro(db.A,j1e),db.c=Fmf,S3b(db,a.f),a.n.f=db,db)),CPb(g,(eb=new Q4b,jqc((!eb.X&&(eb.X=new lqc(eb)),eb.X),J8e),eb.b=Cmf,fb=SMe(SMe(SMe(Cmf.toLowerCase(),'m','0'),'d','0'),'y','0'),eb.c=fb,eb.ob?vQb(eb,S3b(eb,new xlc(eb))):vQb(eb,Go(eb,new vlc(eb),(!eA&&(eA=new Ly),eA))),Tod(eb.A,u_e),(ho(eb.G).getAttribute(U2e)||'').length==0||ro(eb.A,j1e),S3b(eb,a.g),a.n.b=eb,eb)),zo(g.tb,X4e,true),g));CPb(b,(h=new k6b,CPb(h,(gb=new Qld,apd(gb.b,'Gets the value of the field with the mask.'),Is(ho(gb.a),(new Rvb(cwb(X8e))).a),GA(gb,X8e),gb)),CPb(h,(hb=new k6b,CPb(hb,(ib=new t5b,jqc((!ib.X&&(ib.X=new lqc(ib)),ib.X),B7e),ho(ib.G).setAttribute(U2e,Gmf),Sod(ib.A).length==0||ro(ib.A,j1e),Tod(ib.A,Hmf),(ho(ib.G).getAttribute(U2e)||'').length==0||ro(ib.A,j1e),ib.d.reverse=true,ib.c=Imf,a.n.g=ib,ib)),CPb(hb,(jb=new _cd,CPb(jb,(kb=new EWb,LXb(kb.k,X8e),kb.k.ob||CPb(kb,kb.k),GPb(kb,a.j),kb)),jqc((!jb.X&&(jb.X=new lqc(jb)),jb.X),J8e),jb)),hb)),CPb(h,(lb=new cze,cpd(lb,(mb=new lNe,mb.a+='inputMask.getValue();',new Lvb(mb.a)).a),zo(lb.tb,N8e,true),lb)),zo(h.tb,X4e,true),h));CPb(b,(i=new k6b,CPb(i,(nb=new Qld,apd(nb.b,'Gets the value of the field without the mask.'),Is(ho(nb.a),(new Rvb(cwb(Smf))).a),GA(nb,Smf),nb)),CPb(i,(ob=new k6b,CPb(ob,(pb=new t5b,jqc((!pb.X&&(pb.X=new lqc(pb)),pb.X),B7e),ho(pb.G).setAttribute(U2e,Gmf),Sod(pb.A).length==0||ro(pb.A,j1e),Tod(pb.A,Hmf),(ho(pb.G).getAttribute(U2e)||'').length==0||ro(pb.A,j1e),pb.d.reverse=true,pb.c=Imf,a.n.a=pb,pb)),CPb(ob,(qb=new _cd,CPb(qb,(rb=new EWb,LXb(rb.k,Smf),rb.k.ob||CPb(rb,rb.k),GPb(rb,a.i),rb)),jqc((!qb.X&&(qb.X=new lqc(qb)),qb.X),J8e),qb)),ob)),CPb(i,(sb=new cze,cpd(sb,(tb=new lNe,tb.a+='inputMask.getCleanValue();',new Lvb(tb.a)).a),zo(sb.tb,N8e,true),sb)),zo(i.tb,X4e,true),i));CPb(b,(j=new k6b,CPb(j,(ub=new Qld,apd(ub.b,'Programmatically controls the Input Mask main methods.'),Is(ho(ub.a),(new Rvb(cwb(Tmf))).a),GA(ub,Tmf),ub)),CPb(j,(vb=new k6b,CPb(vb,(wb=new t5b,jqc((!wb.X&&(wb.X=new lqc(wb)),wb.X),B7e),ho(wb.G).setAttribute(U2e,Gmf),Sod(wb.A).length==0||ro(wb.A,j1e),Tod(wb.A,Hmf),(ho(wb.G).getAttribute(U2e)||'').length==0||ro(wb.A,j1e),wb.d.reverse=true,wb.c=Imf,a.n.i=wb,wb)),CPb(vb,(xb=new _cd,CPb(xb,(yb=new EWb,yb.tb.style[n1e]=W8e,xQb(yb,(Gyc(),ryc)),LXb(yb.k,'Unmask'),yb.k.ob||CPb(yb,yb.k),$Qb(yb,euc),GPb(yb,a.k),yb)),CPb(xb,(zb=new EWb,LXb(zb.k,'mask'),zb.k.ob||CPb(zb,zb.k),GPb(zb,a.b),zb)),jqc((!xb.X&&(xb.X=new lqc(xb)),xb.X),J8e),xb)),vb)),CPb(j,(Ab=new cze,cpd(Ab,(Bb=new lNe,Bb.a+='\\u2003inputMask.mask(\"00.00\"); <br> inputMask.unmask();',new Lvb(Bb.a)).a),zo(Ab.tb,N8e,true),Ab)),zo(j.tb,X4e,true),j));return b}\nvar Cmf='MM/dd/yyyy',Emf='Basic Examples',Fmf='000-00-0000000',Gmf='eg: 000.000.000.000',Hmf='Ip Address',Imf='000.000.000.000',Jmf='eg: 000000.00%',Kmf='Percentage',Lmf='000000.00%',Mmf='eg: 0000 0000 0000 0000',Nmf='Credit Card',Omf='0000 0000 0000 0000',Pmf='Clear If not Match',Qmf='Select on Focus',Smf='Get Clean Value',Tmf='Unmask and Mask control';Jub(2659,324,X2e,Q4b);_.Wd=function R4b(){return w5b(this.a,this.b)};var CO=rLe(Dmf,'MaterialDateInputMask',2659);Jub(2656,324,X2e,T4b);_.Wd=function U4b(){return ILe($wnd.$(ho(this.G)).cleanVal())};_.Xd=function V4b(a){var b;S4b((b=this,oE(a),b))};var DO=rLe(Dmf,'MaterialDoubleInputMask',2656);Jub(2657,324,X2e,X4b);_.Wd=function Y4b(){return new PLe(TLe($wnd.$(ho(this.G)).cleanVal()))};_.Xd=function Z4b(a){var b;W4b((b=this,oE(a),b))};var EO=rLe(Dmf,'MaterialFloatInputMask',2657);Jub(2655,324,X2e,m5b);_.Wd=function n5b(){return hMe(JLe($wnd.$(ho(this.G)).cleanVal()))};_.Xd=function o5b(a){var b;l5b((b=this,oE(a),b))};var HO=rLe(Dmf,'MaterialIntegerInputMask',2655);Jub(2658,324,X2e,q5b);_.Wd=function r5b(){return sMe(KLe($wnd.$(ho(this.G)).cleanVal()))};_.Xd=function s5b(a){var b;p5b((b=this,oE(a),b))};var IO=rLe(Dmf,'MaterialLongInputMask',2658);Jub(2708,1,{},y5b);var KO=rLe('gwt.material.design.addins.client.inputmask.base','DateInputParser',2708);Jub(976,56,X0e,yEd);_.De=function zEd(){Dye();eJb(this,new Fye(Kgf,'An inputmask helps the user with the input by ensuring a predefined format. This can be useful for dates, numerics, phone numbers etc...','addins/inputmask/InputMask',''))};var D2=rLe(Baf,'InputMaskPresenter',976);Jub(1369,65,Y0e,FEd);var P2=rLe(Baf,'InputMaskView',1369);Jub(1873,1,{},HEd);var O2=rLe(Baf,'InputMaskView_BinderImpl/Widgets',1873);Jub(1874,1,y0e,IEd);_.Ad=function JEd(a){Zld(bE(a.a))};var F2=rLe(Baf,'InputMaskView_BinderImpl/Widgets/1',1874);Jub(1883,1,D1e,KEd);_.nd=function LEd(a){G4b(this.a.n.i,Imf)};var E2=rLe(Baf,'InputMaskView_BinderImpl/Widgets/10',1883);Jub(1875,1,y0e,MEd);_.Ad=function NEd(a){Zld(hMe(JLe($wnd.$(ho(this.a.n.e.G)).cleanVal()))+'')};var G2=rLe(Baf,'InputMaskView_BinderImpl/Widgets/2',1875);Jub(1876,1,y0e,OEd);_.Ad=function PEd(a){Zld(''+MLe(ILe($wnd.$(ho(this.a.n.c.G)).cleanVal())))};var H2=rLe(Baf,'InputMaskView_BinderImpl/Widgets/3',1876);Jub(1877,1,y0e,QEd);_.Ad=function REd(a){Zld(''+(new PLe(TLe($wnd.$(ho(this.a.n.d.G)).cleanVal()))).a)};var I2=rLe(Baf,'InputMaskView_BinderImpl/Widgets/4',1877);Jub(1878,1,y0e,SEd);_.Ad=function TEd(a){Zld(''+Aub(sMe(KLe($wnd.$(ho(this.a.n.f.G)).cleanVal())).a))};var J2=rLe(Baf,'InputMaskView_BinderImpl/Widgets/5',1878);Jub(1879,1,y0e,UEd);_.Ad=function VEd(a){Zld(TC(O4b(this.a.n.b)))};var K2=rLe(Baf,'InputMaskView_BinderImpl/Widgets/6',1879);Jub(1880,1,D1e,WEd);_.nd=function XEd(a){Zld($wnd.$(ho(this.a.n.a.G)).cleanVal())};var L2=rLe(Baf,'InputMaskView_BinderImpl/Widgets/7',1880);Jub(1881,1,D1e,YEd);_.nd=function ZEd(a){Zld(bE(V3b(this.a.n.g)))};var M2=rLe(Baf,'InputMaskView_BinderImpl/Widgets/8',1881);Jub(1882,1,D1e,$Ed);_.nd=function _Ed(a){$wnd.$(ho(this.a.n.i.G)).unmask()};var N2=rLe(Baf,'InputMaskView_BinderImpl/Widgets/9',1882);Jub(817,1,e9e);_.Yc=function iFd(){wNb(this.b,bFd(this.a.a))};var AMe,BMe,CMe,DMe;var rE=uLe('long','J');fYe(Jq)(10);\n//# sourceURL=gwtmaterialdemo-10.js\n")