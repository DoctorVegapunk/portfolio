import{S as ht,i as ft,s as pt,k as o,a as p,q as T,l as i,m as c,h as l,c as b,r as N,n as t,J as fe,b as ie,G as e,B as ce,K as qe,L as vt}from"../../../../chunks/index-a5a114c2.js";function ct(d,a,n){const u=d.slice();return u[1]=a[n],u}function nt(d,a,n){const u=d.slice();return u[4]=a[n],u[6]=n,u}function bt(d,a,n){const u=d.slice();return u[4]=a[n],u[6]=n,u}function gt(d){let a;return{c(){a=o("button"),this.h()},l(n){a=i(n,"BUTTON",{type:!0,"data-bs-target":!0,"data-bs-slide-to":!0,"aria-label":!0,"aria-current":!0}),c(a).forEach(l),this.h()},h(){t(a,"type","button"),t(a,"data-bs-target","#carouselIndicator"),t(a,"data-bs-slide-to",d[6]),t(a,"aria-label",`Slide ${d[6]}`),t(a,"aria-current",d[6]===0),vt(a,"active",d[6]===0)},m(n,u){ie(n,a,u)},p:ce,d(n){n&&l(a)}}}function dt(d){let a,n,u,m;return{c(){a=o("div"),n=o("img"),m=p(),this.h()},l(v){a=i(v,"DIV",{class:!0});var _=c(a);n=i(_,"IMG",{src:!0,class:!0,alt:!0}),m=b(_),_.forEach(l),this.h()},h(){fe(n.src,u=d[4])||t(n,"src",u),t(n,"class","d-block"),t(n,"alt","Sample"),t(a,"class","carousel-item"),vt(a,"active",d[6]===0)},m(v,_){ie(v,a,_),e(a,n),e(a,m)},p:ce,d(v){v&&l(a)}}}function ut(d){let a,n,u=d[1]+"",m,v;return{c(){a=o("div"),n=o("p"),m=T(u),v=p(),this.h()},l(_){a=i(_,"DIV",{class:!0});var D=c(a);n=i(D,"P",{class:!0});var V=c(n);m=N(V,u),V.forEach(l),v=b(D),D.forEach(l),this.h()},h(){t(n,"class","font-questrial"),t(a,"class","p-1 px-3 border border-white rounded-full m-2")},m(_,D){ie(_,a,D),e(a,n),e(n,m),e(a,v)},p:ce,d(_){_&&l(a)}}}function mt(d){let a,n,u,m,v,_,D,V,O,j,R,Ge,pe,$,C,H,J,Me,ne,B,U,x,L,be,q,ge,E,z,me,K,_e,xe,I,W,Ee,Q,Ie,we,y,X,Oe=d[0].name+"",ye,ke,G,De,je=d[0].role+"",Ve,Te,k,M,Ne,Y,Re=d[0].desc+"",Se,Pe,S,Z,ee,Fe,Ae,te,ae,Be,$e=d[0].gallery,P=[];for(let s=0;s<$e.length;s+=1)P[s]=gt(bt(d,$e,s));let se=d[0].gallery,h=[];for(let s=0;s<se.length;s+=1)h[s]=dt(nt(d,se,s));let le=d[0].tags,f=[];for(let s=0;s<le.length;s+=1)f[s]=ut(ct(d,le,s));return{c(){a=o("div"),n=o("div"),u=o("a"),m=o("div"),v=o("img"),D=p(),V=o("div"),O=o("a"),j=o("div"),R=o("img"),pe=p(),$=o("div"),C=o("a"),H=o("div"),J=o("img"),ne=p(),B=o("div"),U=o("div"),x=o("div"),L=o("div");for(let s=0;s<P.length;s+=1)P[s].c();be=p(),q=o("div");for(let s=0;s<h.length;s+=1)h[s].c();ge=p(),E=o("button"),z=o("span"),me=p(),K=o("span"),_e=T("Previous"),xe=p(),I=o("button"),W=o("span"),Ee=p(),Q=o("span"),Ie=T("Next"),we=p(),y=o("div"),X=o("p"),ye=T(Oe),ke=p(),G=o("p"),De=T("Role:"),Ve=T(je),Te=p(),k=o("div"),M=o("div");for(let s=0;s<f.length;s+=1)f[s].c();Ne=p(),Y=o("p"),Se=T(Re),Pe=p(),S=o("div"),Z=o("a"),ee=o("button"),Fe=T("Previous"),Ae=p(),te=o("a"),ae=o("button"),Be=T("Next"),this.h()},l(s){a=i(s,"DIV",{class:!0});var g=c(a);n=i(g,"DIV",{class:!0});var r=c(n);u=i(r,"A",{href:!0});var F=c(u);m=i(F,"DIV",{class:!0});var Ce=c(m);v=i(Ce,"IMG",{alt:!0,src:!0}),Ce.forEach(l),F.forEach(l),r.forEach(l),D=b(g),V=i(g,"DIV",{class:!0});var He=c(V);O=i(He,"A",{href:!0});var Je=c(O);j=i(Je,"DIV",{class:!0});var Le=c(j);R=i(Le,"IMG",{alt:!0,src:!0}),Le.forEach(l),Je.forEach(l),He.forEach(l),pe=b(g),$=i(g,"DIV",{class:!0});var ze=c($);C=i(ze,"A",{href:!0});var Ke=c(C);H=i(Ke,"DIV",{class:!0});var We=c(H);J=i(We,"IMG",{alt:!0,src:!0}),We.forEach(l),Ke.forEach(l),ze.forEach(l),g.forEach(l),ne=b(s),B=i(s,"DIV",{class:!0});var Qe=c(B);U=i(Qe,"DIV",{});var de=c(U);x=i(de,"DIV",{id:!0,class:!0});var A=c(x);L=i(A,"DIV",{class:!0});var Xe=c(L);for(let w=0;w<P.length;w+=1)P[w].l(Xe);Xe.forEach(l),be=b(A),q=i(A,"DIV",{class:!0});var Ye=c(q);for(let w=0;w<h.length;w+=1)h[w].l(Ye);Ye.forEach(l),ge=b(A),E=i(A,"BUTTON",{class:!0,type:!0,"data-bs-target":!0,"data-bs-slide":!0});var ue=c(E);z=i(ue,"SPAN",{class:!0,"aria-hidden":!0}),c(z).forEach(l),me=b(ue),K=i(ue,"SPAN",{class:!0});var Ze=c(K);_e=N(Ze,"Previous"),Ze.forEach(l),ue.forEach(l),xe=b(A),I=i(A,"BUTTON",{class:!0,type:!0,"data-bs-target":!0,"data-bs-slide":!0});var ve=c(I);W=i(ve,"SPAN",{class:!0,"aria-hidden":!0}),c(W).forEach(l),Ee=b(ve),Q=i(ve,"SPAN",{class:!0});var et=c(Q);Ie=N(et,"Next"),et.forEach(l),ve.forEach(l),A.forEach(l),we=b(de),y=i(de,"DIV",{class:!0});var re=c(y);X=i(re,"P",{class:!0});var tt=c(X);ye=N(tt,Oe),tt.forEach(l),ke=b(re),G=i(re,"P",{class:!0});var Ue=c(G);De=N(Ue,"Role:"),Ve=N(Ue,je),Ue.forEach(l),Te=b(re),k=i(re,"DIV",{class:!0});var oe=c(k);M=i(oe,"DIV",{class:!0});var at=c(M);for(let w=0;w<f.length;w+=1)f[w].l(at);at.forEach(l),Ne=b(oe),Y=i(oe,"P",{class:!0});var st=c(Y);Se=N(st,Re),st.forEach(l),Pe=b(oe),S=i(oe,"DIV",{class:!0});var he=c(S);Z=i(he,"A",{href:!0});var lt=c(Z);ee=i(lt,"BUTTON",{class:!0});var rt=c(ee);Fe=N(rt,"Previous"),rt.forEach(l),lt.forEach(l),Ae=b(he),te=i(he,"A",{href:!0});var ot=c(te);ae=i(ot,"BUTTON",{class:!0});var it=c(ae);Be=N(it,"Next"),it.forEach(l),ot.forEach(l),he.forEach(l),oe.forEach(l),re.forEach(l),de.forEach(l),Qe.forEach(l),this.h()},h(){t(v,"alt","Home Icon"),fe(v.src,_="https://firebasestorage.googleapis.com/v0/b/levithewebsitebuilder.appspot.com/o/Navigation%20Icons%2Fhome.svg?alt=media&token=c63073d4-8e31-4781-841d-d4bee43b1c99")||t(v,"src",_),t(m,"class","p-3 bg-gray-500 rounded-full w-fit mx-auto"),t(u,"href","/"),t(n,"class","text-center text-sm text-white hover:scale-125 transition-all ease-in-out duration-200"),t(R,"alt","Work Experience Icon"),fe(R.src,Ge="https://firebasestorage.googleapis.com/v0/b/levithewebsitebuilder.appspot.com/o/Navigation%20Icons%2Fwork_experience.svg?alt=media&token=d46edb46-0937-4736-b4fa-39e57befaf88")||t(R,"src",Ge),t(j,"class","p-3 bg-gray-500 rounded-full w-fit mx-auto"),t(O,"href","/work"),t(V,"class","text-center text-sm text-white hover:scale-125 transition-all ease-in-out duration-200"),t(J,"alt","Samples Icon"),fe(J.src,Me="https://firebasestorage.googleapis.com/v0/b/levithewebsitebuilder.appspot.com/o/Navigation%20Icons%2Fsamples.svg?alt=media&token=3198e26a-2172-432d-8fcc-ed4ed619d18a")||t(J,"src",Me),t(H,"class","p-3 bg-gray-500 rounded-full w-fit mx-auto"),t(C,"href","/samples/1"),t($,"class","text-center text-sm text-white hover:scale-125 transition-all ease-in-out duration-200"),t(a,"class","fixed [&>div>a>div>img]:w-6 z-50 right-4 [&>div]:my-7 [&>div]:opacity-80"),t(L,"class","carousel-indicators"),t(q,"class","carousel-inner [&>div>img]:md:h-72 [&>div>img]:mx-auto [&>div>img]:my-10"),t(z,"class","carousel-control-prev-icon"),t(z,"aria-hidden","true"),t(K,"class","visually-hidden"),t(E,"class","carousel-control-prev"),t(E,"type","button"),t(E,"data-bs-target","#carouselIndicator"),t(E,"data-bs-slide","prev"),t(W,"class","carousel-control-next-icon"),t(W,"aria-hidden","true"),t(Q,"class","visually-hidden"),t(I,"class","carousel-control-next"),t(I,"type","button"),t(I,"data-bs-target","#carouselIndicator"),t(I,"data-bs-slide","next"),t(x,"id","carouselIndicator"),t(x,"class","carousel slide"),t(X,"class","font-raleway text-3xl py-1"),t(G,"class","font-questrial text-lg mb-3"),t(M,"class","flex flex-wrap"),t(Y,"class","text-left my-4 font-montserrat ml-2"),t(ee,"class","bg-white hover:!bg-black hover:!text-white hover:scale-125 transition-all duration-150 text-black font-semibold font-montserrat py-2 px-3 rounded"),t(Z,"href","/samples/1"),t(ae,"class","bg-white hover:!bg-black hover:!text-white hover:scale-125 transition-all duration-150 text-black font-semibold font-montserrat py-2 px-3 rounded"),t(te,"href","/samples/3"),t(S,"class","flex justify-center [&>a]:mx-4"),t(k,"class","mx-10"),t(y,"class","text-white text-center py-3 m-10 border-2 border-white rounded-lg"),t(B,"class","min-h-screen py-4 bg-gray-900")},m(s,g){ie(s,a,g),e(a,n),e(n,u),e(u,m),e(m,v),e(a,D),e(a,V),e(V,O),e(O,j),e(j,R),e(a,pe),e(a,$),e($,C),e(C,H),e(H,J),ie(s,ne,g),ie(s,B,g),e(B,U),e(U,x),e(x,L);for(let r=0;r<P.length;r+=1)P[r].m(L,null);e(x,be),e(x,q);for(let r=0;r<h.length;r+=1)h[r].m(q,null);e(x,ge),e(x,E),e(E,z),e(E,me),e(E,K),e(K,_e),e(x,xe),e(x,I),e(I,W),e(I,Ee),e(I,Q),e(Q,Ie),e(U,we),e(U,y),e(y,X),e(X,ye),e(y,ke),e(y,G),e(G,De),e(G,Ve),e(y,Te),e(y,k),e(k,M);for(let r=0;r<f.length;r+=1)f[r].m(M,null);e(k,Ne),e(k,Y),e(Y,Se),e(k,Pe),e(k,S),e(S,Z),e(Z,ee),e(ee,Fe),e(S,Ae),e(S,te),e(te,ae),e(ae,Be)},p(s,[g]){if(g&1){se=s[0].gallery;let r;for(r=0;r<se.length;r+=1){const F=nt(s,se,r);h[r]?h[r].p(F,g):(h[r]=dt(F),h[r].c(),h[r].m(q,null))}for(;r<h.length;r+=1)h[r].d(1);h.length=se.length}if(g&1){le=s[0].tags;let r;for(r=0;r<le.length;r+=1){const F=ct(s,le,r);f[r]?f[r].p(F,g):(f[r]=ut(F),f[r].c(),f[r].m(M,null))}for(;r<f.length;r+=1)f[r].d(1);f.length=le.length}},i:ce,o:ce,d(s){s&&l(a),s&&l(ne),s&&l(B),qe(P,s),qe(h,s),qe(f,s)}}}function _t(d){return[{gallery:["https://firebasestorage.googleapis.com/v0/b/levithewebsitebuilder.appspot.com/o/Samples%20Images%2FTurbulent%2F1.webp?alt=media&token=7969d72b-663c-400f-9e99-f33e50b8b9ba","https://firebasestorage.googleapis.com/v0/b/levithewebsitebuilder.appspot.com/o/Samples%20Images%2FTurbulent%2F2.webp?alt=media&token=61a9c92b-2447-4373-a809-cfa6f3c6bc92","https://firebasestorage.googleapis.com/v0/b/levithewebsitebuilder.appspot.com/o/Samples%20Images%2FTurbulent%2F3.webp?alt=media&token=5e82afd0-fcc4-4c61-a7b9-d8d6491aa8b3"],tags:["HTML","CSS","JavaScript","Three.js","Bootstrap"],name:"Turbulent",role:"Front-End Developer(Remote)",desc:"I worked for Turbulent.US as a front-end developer creating and implementing desgins that were responsive and utilised three.js."}]}class Et extends ht{constructor(a){super(),ft(this,a,_t,mt,pt,{})}}export{Et as default};
