(this["webpackJsonppancake-frontend"]=this["webpackJsonppancake-frontend"]||[]).push([[7],{1090:function(e,t,n){"use strict";n.r(t);var r,c=n(24),i=n(0),a=n(10),o=n(5),s=n(28),u=n(168),b=n(278),l=n(32),d=n(17),j=n(19),p=n(3),f=n.n(p),O=n(13),m=n(66),h=n(41),x=n(33),v=n(2),g=function(){var e=Object(i.useState)(!1),t=Object(d.a)(e,2),n=t[0],r=t[1],c=Object(i.useState)(1),a=Object(d.a)(c,2),o=a[0],u=a[1],b=Object(s.c)().account,l=Object(i.useCallback)((function(){u((function(e){return e+1}))}),[u]);return Object(i.useEffect)((function(){b&&function(){var e=Object(O.a)(f.a.mark((function e(){var t,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(x.g)(),e.next=3,t.methods.canClaim(b).call();case 3:n=e.sent,r(n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[b,o,r]),{canClaim:n,checkClaimStatus:l}},C=function(e){var t=e.onSuccess,n=e.onDismiss,r=Object(i.useState)(!1),c=Object(d.a)(r,2),a=c[0],u=c[1],b=Object(s.c)().account,l=Object(j.b)().t,p=g().canClaim,f=Object(h.e)(),O=Object(m.a)(),x=O.toastSuccess,C=O.toastError;return Object(v.jsx)(o.kb,{title:l("Claim your Gift!"),onDismiss:n,children:Object(v.jsxs)("div",{style:{maxWidth:"640px"},children:[Object(v.jsx)(o.Mb,{as:"p",children:l("Thank you for being a day-one user of Pancake Profiles!")}),Object(v.jsx)(o.Mb,{as:"p",mb:"8px",children:l("If you haven't already noticed, we made a mistake and the starter bunny you chose got mixed up and changed into another bunny. Oops!")}),Object(v.jsx)(o.Mb,{as:"p",children:l("To make it up to you, we\u2019ll refund you the full 4 CAKE it cost to make your bunny.")}),Object(v.jsx)(o.Mb,{as:"p",mb:"8px",children:l("We\u2019re also preparing an all-new collectible for you to claim (for free!) in the near future.")}),Object(v.jsx)(o.Mb,{as:"p",mb:"24px",children:l("Once you claim the refund, you can make another account with another wallet, mint a new bunny, and send it to your main account via the NFT page.")}),Object(v.jsx)(o.p,{endIcon:a?Object(v.jsx)(o.g,{spin:!0,color:"currentColor"}):null,isLoading:a,onClick:function(){f.methods.getCakeBack().send({from:b}).on("sending",(function(){u(!0)})).on("receipt",(function(){x(l("Success!")),t(),n()})).on("error",(function(e){u(!1),C(l("Error"),null===e||void 0===e?void 0:e.message)}))},disabled:!p,children:l("Claim Your CAKE")})]})})},w=n(855),k=n(35),y=n(12);!function(e){e.START="start",e.CHANGE="change",e.REMOVE="remove",e.APPROVE="approve"}(r||(r={}));var A,S,E,T,R,P,I,D,M,_,V,G,N=function(e,t){switch(t.type){case"set_view":return Object(y.a)(Object(y.a)({},e),{},{currentView:t.view,previousView:e.currentView});case"go_previous":return Object(y.a)(Object(y.a)({},e),{},{currentView:e.previousView,previousView:e.currentView});default:return e}},K=function(){var e=Object(i.useReducer)(N,{currentView:r.START,previousView:null}),t=Object(d.a)(e,2),n=t[0],c=t[1];return Object(y.a)(Object(y.a)({},n),{},{goToStart:function(){return c({type:"set_view",view:r.START})},goToChange:function(){return c({type:"set_view",view:r.CHANGE})},goToRemove:function(){return c({type:"set_view",view:r.REMOVE})},goToApprove:function(){return c({type:"set_view",view:r.APPROVE})},goPrevious:function(){return c({type:"go_previous"})}})},W=n(16),F=n.n(W),L=n(27),U=n(22),B=n(100),Q=n(25),Y=function(){var e=Object(j.b)().t,t=Object(i.useState)({numberCakeToReactivate:Q.c,numberCakeToRegister:Q.c,numberCakeToUpdate:Q.c}),n=Object(d.a)(t,2),r=n[0],c=n[1],a=Object(m.a)().toastError;return Object(i.useEffect)((function(){(function(){var t=Object(O.a)(f.a.mark((function t(){var n,r,i,o,s,u;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n=Object(x.s)(),t.next=4,Object(B.a)([n.methods.numberCakeToReactivate().call,n.methods.numberCakeToRegister().call,n.methods.numberCakeToUpdate().call]);case 4:r=t.sent,i=Object(d.a)(r,3),o=i[0],s=i[1],u=i[2],c({numberCakeToReactivate:new F.a(o),numberCakeToRegister:new F.a(s),numberCakeToUpdate:new F.a(u)}),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(0),a(e("Error"),e("Could not retrieve CAKE costs for profile"));case 15:case"end":return t.stop()}}),t,null,[[0,12]])})));return function(){return t.apply(this,arguments)}})()()}),[c,a,e]),r},z=n(854),q=function(e){return Object(z.a)(Object(U.d)()).gte(e)},H=n(859),J=Object(a.e)(o.p).attrs({variant:"secondary"})(A||(A=Object(c.a)(["\n  border-color: ",";\n  color: ",";\n  margin-bottom: 24px;\n\n  &:hover:not(:disabled):not(.button--disabled):not(:active) {\n    border-color: ",";\n    opacity: 0.8;\n  }\n"])),(function(e){return e.theme.colors.failure}),(function(e){return e.theme.colors.failure}),(function(e){return e.theme.colors.failure})),$=a.e.div(S||(S=Object(c.a)(["\n  height: 64px;\n  width: 64px;\n\n  "," {\n    height: 128px;\n    width: 128px;\n  }\n"])),(function(e){return e.theme.mediaQueries.sm})),X=function(e){var t=e.goToApprove,n=e.goToChange,r=e.goToRemove,c=e.onDismiss,a=Object(i.useState)(null),u=Object(d.a)(a,2),b=u[0],p=u[1],m=Object(l.G)().profile,x=Y(),g=x.numberCakeToUpdate,C=x.numberCakeToReactivate,w=m.isActive?g:C,k=q(w),y=Object(j.b)().t,A=Object(s.c)().account,S=Object(h.b)(),E=m.isActive?g:C;return Object(i.useEffect)((function(){A&&function(){var e=Object(O.a)(f.a.mark((function e(){var t,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.methods.allowance(A,Object(U.n)()).call();case 2:t=e.sent,n=new F.a(t),p(n.lt(E));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[A,E,p,S]),m?Object(v.jsxs)(o.O,{alignItems:"center",justifyContent:"center",flexDirection:"column",children:[Object(v.jsx)($,{children:Object(v.jsx)(H.a,{profile:m})}),Object(v.jsx)(o.O,{alignItems:"center",style:{height:"48px"},justifyContent:"center",children:Object(v.jsx)(o.Mb,{as:"p",color:"failure",children:!k&&y("%minimum% CAKE required to change profile pic",{minimum:Object(L.e)(w)})})}),m.isActive?Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(o.p,{width:"100%",mb:"8px",onClick:!0===b?t:n,disabled:!k||null===b,children:y("Change Profile Pic")}),Object(v.jsx)(J,{width:"100%",onClick:r,children:y("Remove Profile Pic")})]}):Object(v.jsx)(o.p,{width:"100%",mb:"8px",onClick:!0===b?t:n,disabled:!k||null===b,children:y("Reactivate Profile")}),Object(v.jsx)(o.p,{variant:"text",width:"100%",onClick:c,children:y("Close Window")})]}):null},Z=n(44),ee=n(90),te=function(e){var t=e.onDismiss,n=Object(i.useState)(!1),r=Object(d.a)(n,2),c=r[0],a=r[1],u=Object(i.useState)(!1),b=Object(d.a)(u,2),p=b[0],x=b[1],g=Object(l.G)().profile,C=Y().numberCakeToReactivate,w=Object(j.b)().t,k=Object(h.n)(),y=Object(s.c)().account,A=Object(m.a)(),S=A.toastSuccess,E=A.toastError,T=Object(Z.b)();return g?Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(o.Mb,{as:"p",color:"failure",mb:"24px",children:w("This will suspend your profile and send your Collectible back to your wallet")}),Object(v.jsx)(o.Mb,{as:"p",color:"textSubtle",mb:"24px",children:w("While your profile is suspended, you won't be able to earn points, but your achievements and points will stay associated with your profile")}),Object(v.jsx)(o.Mb,{as:"p",color:"textSubtle",mb:"24px",children:w("Cost to reactivate in the future: %cost% CAKE",{cost:Object(L.c)(C)})}),Object(v.jsx)("label",{htmlFor:"acknowledgement",style:{cursor:"pointer",display:"block",marginBottom:"24px"},children:Object(v.jsxs)(o.O,{alignItems:"center",children:[Object(v.jsx)(o.B,{id:"acknowledgement",checked:c,onChange:function(){return a(!c)},scale:"sm"}),Object(v.jsx)(o.Mb,{ml:"8px",children:w("I understand")})]})}),Object(v.jsx)(o.p,{width:"100%",isLoading:p,endIcon:p?Object(v.jsx)(o.g,{spin:!0,color:"currentColor"}):null,disabled:!c||p,onClick:function(){k.methods.pauseProfile().send({from:y}).on("sending",(function(){x(!0)})).on("receipt",Object(O.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T(Object(ee.b)(y));case 2:S(w("Profile Paused!")),t();case 4:case"end":return e.stop()}}),e)})))).on("error",(function(e){E(w("Error"),null===e||void 0===e?void 0:e.message),x(!1)}))},mb:"8px",children:w("Confirm")}),Object(v.jsx)(o.p,{variant:"text",width:"100%",onClick:t,children:w("Close Window")})]}):null},ne=n(188),re=n(172),ce={approvalState:"idle",approvalReceipt:null,approvalError:null,confirmState:"idle",confirmReceipt:null,confirmError:null},ie=function(e,t){switch(t.type){case"requires_approval":return Object(y.a)(Object(y.a)({},e),{},{approvalState:"success"});case"approve_sending":return Object(y.a)(Object(y.a)({},e),{},{approvalState:"loading"});case"approve_receipt":return Object(y.a)(Object(y.a)({},e),{},{approvalState:"success",approvalReceipt:t.payload});case"approve_error":return Object(y.a)(Object(y.a)({},e),{},{approvalState:"fail",approvalError:t.payload});case"confirm_sending":return Object(y.a)(Object(y.a)({},e),{},{confirmState:"loading"});case"confirm_receipt":return Object(y.a)(Object(y.a)({},e),{},{confirmState:"success",confirmReceipt:t.payload});case"confirm_error":return Object(y.a)(Object(y.a)({},e),{},{confirmState:"fail",confirmError:t.payload});default:return e}},ae=function(e){var t=e.onApprove,n=e.onConfirm,r=e.onRequiresApproval,c=e.onSuccess,a=void 0===c?re.noop:c,o=Object(j.b)().t,u=Object(s.c)().account,b=Object(i.useReducer)(ie,ce),l=Object(d.a)(b,2),p=l[0],f=l[1],O=Object(i.useRef)(r),h=Object(m.a)().toastError;return Object(i.useEffect)((function(){u&&O.current&&O.current().then((function(e){e&&f({type:"requires_approval"})}))}),[u,O,f]),{isApproving:"loading"===p.approvalState,isApproved:"success"===p.approvalState,isConfirming:"loading"===p.confirmState,isConfirmed:"success"===p.confirmState,approvalReceipt:p.approvalReceipt,approvalError:p.approvalError,confirmReceipt:p.confirmReceipt,confirmError:p.confirmError,handleApprove:function(){t().on("sending",(function(){f({type:"approve_sending"})})).on("receipt",(function(e){f({type:"approve_receipt",payload:e})})).on("error",(function(e){f({type:"approve_error",payload:e}),console.error("An error occurred approving transaction:",e),h(o("An error occurred approving transaction"))}))},handleConfirm:function(){n().on("sending",(function(){f({type:"confirm_sending"})})).on("receipt",(function(e){f({type:"confirm_receipt",payload:e}),a(p)})).on("error",(function(e){f({type:"confirm_error",payload:e}),console.error("An error occurred confirming transaction:",e),h(o("An error occurred confirming transaction"))}))}}},oe=n(102),se=["name","value","isChecked","image","onChange","disabled","children"],ue=Object(a.e)(o.t)(E||(E=Object(c.a)(["\n  ","\n  border-radius: 16px;\n  margin-bottom: 16px;\n"])),(function(e){return!e.isSuccess&&"box-shadow: none;"})),be=a.e.label(T||(T=Object(c.a)(["\n  cursor: ",";\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  opacity: ",";\n"])),(function(e){return e.isDisabled?"not-allowed":"pointer"}),(function(e){return e.isDisabled?"0.6":"1"})),le=a.e.div(R||(R=Object(c.a)(["\n  align-items: center;\n  border: 2px solid ",";\n  border-radius: 16px 0 0 16px;\n  display: flex;\n  flex-grow: 1;\n  height: 80px;\n  padding: 8px 16px;\n"])),(function(e){return e.theme.colors.tertiary})),de=a.e.div(P||(P=Object(c.a)(["\n  margin-left: 16px;\n"]))),je=a.e.div(I||(I=Object(c.a)(["\n  align-self: stretch;\n  background-image: url('","');\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n  flex: none;\n  width: 80px;\n"])),(function(e){return e.src})),pe=function(e){var t=e.name,n=e.value,r=e.isChecked,c=void 0!==r&&r,i=e.image,a=e.onChange,s=e.disabled,u=e.children,b=Object(oe.a)(e,se);return Object(v.jsx)(ue,Object(y.a)(Object(y.a)({isSuccess:c,isDisabled:s,mb:"16px"},b),{},{children:Object(v.jsxs)(be,{isDisabled:s,children:[Object(v.jsxs)(le,{children:[Object(v.jsx)(o.zb,{name:t,checked:c,value:n,onChange:function(e){return a(e.target.value)},disabled:s,style:{flex:"none"}}),Object(v.jsx)(de,{children:u})]}),Object(v.jsx)(je,{src:i})]})}))},fe=a.e.div(D||(D=Object(c.a)(["\n  align-items: center;\n  display: grid;\n  grid-template-columns: 1fr;\n  justify-content: center;\n\n  "," {\n    grid-template-columns: 1fr 24px 1fr;\n  }\n"])),(function(e){return e.theme.mediaQueries.md})),Oe=Object(a.e)(o.p)(M||(M=Object(c.a)(["\n  width: 100%;\n\n  "," {\n    min-width: 160px;\n  }\n"])),(function(e){return e.theme.mediaQueries.md})),me={width:"24px",color:"textDisabled"},he=Object(a.e)(o.F).attrs(me)(_||(_=Object(c.a)(["\n  display: none;\n\n  "," {\n    display: block;\n  }\n"])),(function(e){return e.theme.mediaQueries.md})),xe=Object(a.e)(o.D).attrs(me)(V||(V=Object(c.a)(["\n  display: block;\n\n  "," {\n    display: none;\n  }\n"])),(function(e){return e.theme.mediaQueries.md})),ve=Object(v.jsx)(o.g,{spin:!0,color:"currentColor"}),ge=function(e){var t=e.isApproveDisabled,n=e.isApproving,r=e.isConfirming,c=e.isConfirmDisabled,i=e.onApprove,a=e.onConfirm,s=Object(j.b)().t;return Object(v.jsxs)(fe,{children:[Object(v.jsx)(o.m,{children:Object(v.jsx)(Oe,{disabled:t,onClick:i,endIcon:n?ve:void 0,isLoading:n,children:s(n?"Approving":"Approve")})}),Object(v.jsxs)(o.O,{justifyContent:"center",children:[Object(v.jsx)(he,{}),Object(v.jsx)(xe,{})]}),Object(v.jsx)(o.m,{children:Object(v.jsx)(Oe,{onClick:a,disabled:c,isLoading:r,endIcon:r?ve:void 0,children:s(r?"Confirming":"Confirm")})})]})},Ce=function(e){var t=e.onDismiss,n=Object(i.useState)({tokenId:null,nftAddress:null}),r=Object(d.a)(n,2),c=r[0],a=r[1],u=Object(j.b)().t,b=Object(l.k)(),p=b.isLoading,x=b.tokenIds,g=b.nftsInWallet,C=Object(Z.b)(),w=Object(l.G)().profile,k=Object(h.g)(c.nftAddress),y=Object(h.n)(),A=Object(s.c)().account,S=Object(m.a)().toastSuccess,E=ae({onApprove:function(){return k.methods.approve(Object(U.n)(),c.tokenId).send({from:A})},onConfirm:function(){return w.isActive?y.methods.updateProfile(c.nftAddress,c.tokenId).send({from:A}):y.methods.reactivateProfile(c.nftAddress,c.tokenId).send({from:A})},onSuccess:function(){var e=Object(O.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C(Object(ee.b)(A));case 2:S(u("Profile Updated!")),t();case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()}),T=E.isApproving,R=E.isApproved,P=E.isConfirmed,I=E.isConfirming,D=E.handleApprove,M=E.handleConfirm;return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(o.Mb,{as:"p",color:"textSubtle",mb:"24px",children:u("Choose a new Collectible to use as your profile pic.")}),p?Object(v.jsx)(o.Cb,{height:"80px",mb:"16px"}):g.map((function(e){var t=Object(d.a)(x[e.identifier],1)[0];return Object(v.jsx)(pe,{name:"profilePicture",value:t,image:"/images/nfts/".concat(e.images.md),isChecked:t===c.tokenId,onChange:function(t){a({tokenId:Number(t),nftAddress:Object(ne.a)(e.type)})},disabled:T||I||P,children:Object(v.jsx)(o.Mb,{bold:!0,children:e.name})},e.identifier)})),!p&&0===g.length&&Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(o.Mb,{as:"p",color:"textSubtle",mb:"16px",children:u("Sorry! You don\u2019t have any eligible Collectibles in your wallet to use!")}),Object(v.jsx)(o.Mb,{as:"p",color:"textSubtle",mb:"24px",children:u("Make sure you have a Pancake Collectible in your wallet and try again!")})]}),Object(v.jsx)(ge,{isApproveDisabled:P||I||R||null===c.tokenId,isApproving:T,isConfirmDisabled:!R||P||null===c.tokenId,isConfirming:I,onApprove:D,onConfirm:M}),Object(v.jsx)(o.p,{variant:"text",width:"100%",onClick:t,disabled:T||I,children:u("Close Window")})]})},we=function(e){var t=e.goToChange,n=e.onDismiss,r=Object(i.useState)(!1),c=Object(d.a)(r,2),a=c[0],u=c[1],b=Object(l.G)().profile,p=Object(j.b)().t,f=Object(s.c)().account,O=Y(),x=O.numberCakeToUpdate,g=O.numberCakeToReactivate,C=Object(h.b)(),w=Object(m.a)().toastError,k=b.isActive?x:g;return b?Object(v.jsxs)(o.O,{flexDirection:"column",children:[Object(v.jsxs)(o.O,{alignItems:"center",justifyContent:"space-between",mb:"24px",children:[Object(v.jsx)(o.Mb,{children:b.isActive?p("Cost to update:"):p("Cost to reactivate:")}),Object(v.jsxs)(o.Mb,{children:[Object(L.e)(k)," CAKE"]})]}),Object(v.jsx)(o.p,{disabled:a,isLoading:a,endIcon:a?Object(v.jsx)(o.g,{spin:!0,color:"currentColor"}):null,width:"100%",mb:"8px",onClick:function(){C.methods.approve(Object(U.n)(),k.times(2).toJSON()).send({from:f}).on("sending",(function(){u(!0)})).on("receipt",(function(){t()})).on("error",(function(e){w(p("Error"),null===e||void 0===e?void 0:e.message),u(!1)}))},children:p("Approve")}),Object(v.jsx)(o.p,{variant:"text",width:"100%",onClick:n,disabled:a,children:p("Close Window")})]}):null},ke=(G={},Object(k.a)(G,r.START,"Edit Profile"),Object(k.a)(G,r.CHANGE,"Change Profile Pic"),Object(k.a)(G,r.REMOVE,"Remove Profile Pic"),Object(k.a)(G,r.APPROVE,"Approve CAKE"),G),ye=function(e){var t=e.onDismiss,n=K(),c=n.currentView,i=n.goToChange,a=n.goToRemove,s=n.goToApprove,u=n.goPrevious,b=Object(j.b)().t,l=ke[c],d=c===r.START,p=d?null:function(){return u()};return Object(v.jsx)(o.kb,{title:b(l),onBack:p,onDismiss:t,hideCloseButton:!d,children:Object(v.jsxs)("div",{style:{maxWidth:"400px"},children:[c===r.START&&Object(v.jsx)(X,{goToApprove:s,goToChange:i,goToRemove:a,onDismiss:t}),c===r.REMOVE&&Object(v.jsx)(te,{onDismiss:t}),c===r.CHANGE&&Object(v.jsx)(Ce,{onDismiss:t}),c===r.APPROVE&&Object(v.jsx)(we,{goToChange:i,onDismiss:t})]})})},Ae=function(){var e=Object(j.b)().t,t=g(),n=(t.canClaim,t.checkClaimStatus),r=Object(o.dc)(Object(v.jsx)(C,{onSuccess:n})),c=(Object(d.a)(r,1)[0],Object(o.dc)(Object(v.jsx)(ye,{}),!1));Object(d.a)(c,1)[0],Object(l.G)().hasProfile;return Object(v.jsx)(w.a,{children:Object(v.jsx)(o.O,{flexDirection:["column",null,"row"],alignItems:["start",null,"center"],justifyContent:"space-between",children:Object(v.jsxs)("div",{children:[Object(v.jsx)(o.P,{as:"h1",scale:"xxl",mb:"8px",color:"secondary",children:e("Your Profile")}),Object(v.jsx)(o.P,{as:"h2",scale:"lg",mb:"16px",children:e("Check your stats and staking")})]})})})},Se=n(192);function Ee(e,t){var n;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=Object(Se.a)(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var r=0,c=function(){};return{s:c,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:c}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,o=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return a=e.done,e},e:function(e){o=!0,i=e},f:function(){try{a||null==n.return||n.return()}finally{if(o)throw i}}}}var Te,Re,Pe,Ie,De,Me,_e,Ve,Ge,Ne,Ke,We=n(57),Fe=n(63),Le=n(101),Ue=n(159),Be=n(113),Qe=function(){var e=Object(i.useState)([]),t=Object(d.a)(e,2),n=t[0],r=t[1],c=Object(s.c)().account,a=Object(Be.a)().fastRefresh;return Object(i.useEffect)((function(){c&&function(){var e=Object(O.a)(f.a.mark((function e(){var t,n,i;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Ue.a.map((function(e){return{address:Object(U.l)(),name:"pendingCake",params:[e.pid,c]}})),e.next=3,Object(Fe.a)(Le,t);case 3:n=e.sent,i=Ue.a.map((function(e,t){return Object(y.a)(Object(y.a)({},e),{},{balance:new F.a(n[t])})})),r(i);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[c,a]),n},Ye=n(125),ze=Object(a.e)(o.t)(Te||(Te=Object(c.a)(["\n  background-repeat: no-repeat;\n  background-position: top right;\n  min-height: 200px;\n"]))),qe=a.e.div(Re||(Re=Object(c.a)(["\n  margin-bottom: 16px;\n"]))),He=(a.e.img(Pe||(Pe=Object(c.a)(["\n  margin-bottom: 16px;\n"]))),a.e.div(Ie||(Ie=Object(c.a)(["\n  color: ",";\n  font-size: 14px;\n"])),(function(e){return e.theme.colors.textSubtle}))),Je=a.e.div(De||(De=Object(c.a)(["\n  margin-top: 24px;\n"]))),$e=function(){var e=Object(i.useState)(!1),t=Object(d.a)(e,2),n=(t[0],t[1]),r=Object(s.c)().account,c=Object(j.b)().t,a=Qe(),u=Object(h.l)(),b=a.filter((function(e){return e.balance.toNumber()>0}));Object(i.useCallback)(Object(O.a)(f.a.mark((function e(){var t,c,i;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n(!0),t=Ee(b),e.prev=2,t.s();case 4:if((c=t.n()).done){e.next=15;break}return i=c.value,e.prev=6,e.next=9,Object(We.b)(u,i.pid,r);case 9:e.next=13;break;case 11:e.prev=11,e.t0=e.catch(6);case 13:e.next=4;break;case 15:e.next=20;break;case 17:e.prev=17,e.t1=e.catch(2),t.e(e.t1);case 20:return e.prev=20,t.f(),e.finish(20);case 23:n(!1);case 24:case"end":return e.stop()}}),e,null,[[2,17,20,23],[6,11]])}))),[r,b,u]);return Object(v.jsx)(ze,{children:Object(v.jsxs)(o.u,{children:[Object(v.jsx)(o.P,{scale:"xl",mb:"24px",children:c("Verification & KYC")}),Object(v.jsx)(qe,{children:Object(v.jsx)(He,{children:c("Please note, according to some projects requirements, our member would need to be verified by KYC in order to participate in specific pools")})}),Object(v.jsx)(Je,{children:r?Object(v.jsx)(o.Y,{external:!0,href:"https://verify-with.blockpass.org/?clientId=gaurtokenfinance&serviceName=GaurTokenFinance&env=prod",children:Object(v.jsx)(o.p,{id:"harvest-all",width:"100%",children:"Click for KYC"})}):Object(v.jsx)(Ye.a,{width:"100%"})})]})})},Xe=Object(a.e)(o.t)(Me||(Me=Object(c.a)(["\n  background-repeat: no-repeat;\n  background-position: top right;\n  min-height: 200px;\n"]))),Ze=a.e.div(_e||(_e=Object(c.a)(["\n  margin-bottom: 16px;\n"]))),et=(a.e.img(Ve||(Ve=Object(c.a)(["\n  margin-bottom: 16px;\n"]))),a.e.div(Ge||(Ge=Object(c.a)(["\n  color: ",";\n  font-size: 14px;\n"])),(function(e){return e.theme.colors.textSubtle}))),tt=a.e.div(Ne||(Ne=Object(c.a)(["\n  margin-top: 24px;\n"]))),nt=function(){var e=Object(i.useState)(!1),t=Object(d.a)(e,2),n=(t[0],t[1]),r=Object(s.c)().account,c=Object(j.b)().t,a=Qe(),u=Object(h.l)(),b=a.filter((function(e){return e.balance.toNumber()>0}));Object(i.useCallback)(Object(O.a)(f.a.mark((function e(){var t,c,i;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n(!0),t=Ee(b),e.prev=2,t.s();case 4:if((c=t.n()).done){e.next=15;break}return i=c.value,e.prev=6,e.next=9,Object(We.b)(u,i.pid,r);case 9:e.next=13;break;case 11:e.prev=11,e.t0=e.catch(6);case 13:e.next=4;break;case 15:e.next=20;break;case 17:e.prev=17,e.t1=e.catch(2),t.e(e.t1);case 20:return e.prev=20,t.f(),e.finish(20);case 23:n(!1);case 24:case"end":return e.stop()}}),e,null,[[2,17,20,23],[6,11]])}))),[r,b,u]);return Object(v.jsx)(Xe,{children:Object(v.jsxs)(o.u,{children:[Object(v.jsx)(o.P,{scale:"xl",mb:"24px",children:c("Wallet Balance")}),Object(v.jsx)(Ze,{children:Object(v.jsx)(et,{children:c("Loading .... $GAUR")})}),Object(v.jsx)(tt,{children:r?Object(v.jsx)(o.Y,{external:!0,href:"https://verify-with.blockpass.org/?clientId=gaurtokenfinance&serviceName=GaurTokenFinance&env=prod",children:Object(v.jsx)(o.p,{id:"harvest-all",width:"100%",variant:"danger",children:"Buy more"})}):Object(v.jsx)(Ye.a,{width:"100%"})})]})})},rt=Object(a.e)(o.i)(Ke||(Ke=Object(c.a)(["\n  align-items: stretch;\n  justify-content: stretch;\n  margin-bottom: 24px;\n  grid-gap: 24px;\n\n  & > div {\n    grid-column: span 6;\n    width: 100%;\n  }\n\n  "," {\n    & > div {\n      grid-column: span 8;\n    }\n  }\n\n  "," {\n    margin-bottom: 32px;\n    grid-gap: 32px;\n\n    & > div {\n      grid-column: span 6;\n    }\n  }\n"])),(function(e){return e.theme.mediaQueries.sm}),(function(e){return e.theme.mediaQueries.lg}));t.default=function(){var e=Object(l.G)(),t=e.isInitialized,n=e.isLoading;e.hasProfile,Object(s.c)().account;return!t||n?Object(v.jsx)(b.a,{}):Object(v.jsxs)(u.a,{children:[Object(v.jsx)(Ae,{}),Object(v.jsxs)(rt,{children:[Object(v.jsx)($e,{}),Object(v.jsx)(nt,{})]})]})}},854:function(e,t,n){"use strict";n.d(t,"b",(function(){return O}));var r=n(3),c=n.n(r),i=n(13),a=n(17),o=n(0),s=n(16),u=n.n(s),b=n(28),l=n(33),d=n(25),j=n(50),p=n(113),f=n(273),O=function(){var e=Object(o.useState)(d.c),t=Object(a.a)(e,2),n=t[0],r=t[1],s=Object(b.c)().account,l=Object(f.a)(),p=l.lastUpdated,O=l.setLastUpdated,m=Object(j.a)();return Object(o.useEffect)((function(){s&&function(){var e=Object(i.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.eth.getBalance(s);case 2:t=e.sent,r(new u.a(t));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[s,m,p,r]),{balance:n,refresh:O}};t.a=function(e){var t=Object(o.useState)(d.c),n=Object(a.a)(t,2),r=n[0],s=n[1],f=Object(b.c)().account,O=Object(j.a)(),m=Object(p.a)().fastRefresh;return Object(o.useEffect)((function(){f&&function(){var t=Object(i.a)(c.a.mark((function t(){var n,r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=Object(l.a)(e,O),t.next=3,n.methods.balanceOf(f).call();case 3:r=t.sent,s(new u.a(r));case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()()}),[f,e,O,m]),r}},855:function(e,t,n){"use strict";var r,c=n(24),i=n(10).e.div(r||(r=Object(c.a)(["\n  border-bottom: 2px solid ",";\n  margin-bottom: 24px;\n  padding-bottom: 24px;\n"])),(function(e){return e.theme.colors.textSubtle}));t.a=i},859:function(e,t,n){"use strict";var r,c,i,a=n(24),o=(n(0),n(5)),s=n(10),u=n(2),b=s.e.img(r||(r=Object(a.a)(["\n  border: 1px solid ",";\n  border-radius: 50%;\n  bottom: 0px;\n  position: absolute;\n  right: 0px;\n  min-width: 20px;\n  min-height: 20px;\n  width: 37.5%;\n  height: 37.5%;\n  z-index: 5;\n\n  "," {\n    border-width: 2px;\n  }\n"])),(function(e){return e.theme.card.background}),(function(e){return e.theme.mediaQueries.sm})),l=s.e.div(c||(c=Object(a.a)(["\n  background: url('","');\n  background-repeat: no-repeat;\n  background-size: cover;\n  border-radius: 50%;\n  position: relative;\n  width: 100%;\n  height: 100%;\n\n  & > img {\n    border-radius: 50%;\n  }\n"])),(function(e){return e.bg})),d=Object(s.e)(o.rb)(i||(i=Object(a.a)(["\n  width: 100%;\n  height: 100%;\n"])));t.a=function(e){var t,n,r=e.profile;return Object(u.jsxs)(l,{bg:"/images/nfts/".concat(null===(t=r.nft)||void 0===t||null===(n=t.images)||void 0===n?void 0:n.md),children:[!r.isActive&&Object(u.jsx)(d,{}),Object(u.jsx)(b,{src:"/images/teams/".concat(r.team.images.alt),alt:r.team.name})]})}}}]);
//# sourceMappingURL=7.10cfaf5f.chunk.js.map