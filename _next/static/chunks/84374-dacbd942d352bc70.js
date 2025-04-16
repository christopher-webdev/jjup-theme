"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[84374],{49488:function(e,t,n){n.d(t,{Nk:function(){return p},QX:function(){return h}});var a=n(27195),r=n(97620),i=n(8857),o=n.n(i),s=n(93981),c=n(72215),u=n(71957),m=n(3011),l=n(1242),d=n(45009),p=new Array(32).fill(null),b=23e4,h=function(e){var t=function(e){var t=(0,u.p)().data,n=(0,m.KO)(l.dS),i=(0,r.Z)(n,1)[0],s=i.TARGET_MINT,p=i.useMerkleDistributorV2,b=(0,c.Os)().publicKey;return{claimTimes:(0,d.a)(["enabled-time",null===b||void 0===b?void 0:b.toBase58(),s.toString(),p],(0,a.Z)(o().mark((function e(){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",null===t||void 0===t?void 0:t.getClaimTimes(b));case 1:case"end":return e.stop()}}),e)}))),{enabled:e&&!!t,refetchIntervalInBackground:!1,refetchOnWindowFocus:!1,staleTime:1e4}).data}}(!(null!==e&&void 0!==e&&e.disabled)).claimTimes,n=function(e){var t=(0,c.Rc)();return{currentSlot:(0,d.a)(["currentSlot"],(0,a.Z)(o().mark((function e(){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t.getSlot("processed"));case 1:case"end":return e.stop()}}),e)}))),{refetchInterval:function(t){return!(t&&e&&e.enableSlot<t)&&3e3},refetchIntervalInBackground:!1,staleTime:1e4}).data}}(t),i=n.currentSlot,h=(0,s.useMemo)((function(){return Boolean(i&&t&&i>t.enableSlot)}),[t,i]),k=(0,s.useMemo)((function(){if(!t||!i)return 0;var e=b/p.length,n=Math.floor((b-(t.enableSlot-i))/e);return Math.max(n,1)}),[t,i]);return{claimTimes:t,currentSlot:i,activeSlot:k,isReady:h}}},76640:function(e,t,n){n.d(t,{S:function(){return u}});var a=n(93981),r=n(11805),i="https://raw.githubusercontent.com/jup-ag/static",o="".concat(i,"/lfg-preview/src/pages/lfg"),s="".concat(i,"/main/src/pages/lfg"),c=(r.env.VERCEL_ENV,"token ".concat(r.env.GITHUB_TOKEN),(0,a.createContext)({getUserEndpoint:"https://worker.jup.ag/jup-claim-proof/"})),u=(c.Provider,function(){return(0,a.useContext)(c)})},82625:function(e,t,n){var a=n(72215),r=n(93981),i=n(24201),o=n(54566),s=n(29541);t.Z=function(e){var t=e.value,n=e.tokenAddress,c=e.className,u=(0,a.Bn)().getTokenInfo,m=r.useMemo((function(){return u(n)}),[u,n]);return(0,s.jsx)(s.Fragment,{children:t?(0,s.jsx)("div",{className:(0,i.cn)("text-xs font-medium text-white-25",c),children:m&&(0,s.jsx)(o.default,{tokenInfo:m,amount:Number(t.floatValue)})}):null})}},71957:function(e,t,n){n.d(t,{p:function(){return A}});var a=n(97620),r=n(92956),i=n(132),o=n(31562),s=n(63956),c=n(27195),u=n(8857),m=n.n(u),l=n(24309),d=n(75206),p=n(7744),b=n(14441),h=n(32532),k=n(795).Buffer;function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(Object(n),!0).forEach((function(t){(0,s.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var y=400,w=function(){var e=(0,c.Z)(m().mark((function e(t){var n,a,r;return m().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.getRecentPerformanceSamples(720);case 3:if(null!==(n=e.sent)&&void 0!==n&&n.length){e.next=6;break}return e.abrupt("return",y);case 6:if(a=n.reduce((function(e,t){return e+1e3*t.samplePeriodSecs/t.numSlots}),0),!((r=a/n.length)<200||r>800)){e.next=10;break}return e.abrupt("return",y);case 10:return e.abrupt("return",r);case 13:return e.prev=13,e.t0=e.catch(0),console.error(e.t0),e.abrupt("return",0);case 17:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(t){return e.apply(this,arguments)}}(),v=function(){function e(t,n,a,r,o){if((0,i.Z)(this,e),this.provider=t,this.getUserEndpoint=n,(0,s.Z)(this,"mdProgram",void 0),(0,s.Z)(this,"mint",void 0),(0,s.Z)(this,"user",void 0),(0,s.Z)(this,"isV2",void 0),(0,s.Z)(this,"V2_ROOT_MERKLE_TREE",void 0),this.isV2=r,this.mdProgram=(0,b.b8)(this.provider,r),this.provider=t,this.mint=new p.PublicKey(a),r){if(!o)throw new Error("V2_ROOT_MERKLE_TREE is required for V2 Merkle Distributor");this.V2_ROOT_MERKLE_TREE=new p.PublicKey(o)}}return(0,o.Z)(e,[{key:"getMaxBonusForClaimant",value:function(){var e=(0,c.Z)(m().mark((function e(t,n){var a,r,i,o,s,c,u,l;return m().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.isV2){e.next=2;break}return e.abrupt("return",null);case 2:if(e.t0=t,!e.t0){e.next=7;break}return e.next=6,this.getUser(t);case 6:e.t0=e.sent;case 7:if(a=e.t0,this.mdProgram){e.next=10;break}return e.abrupt("return",null);case 10:if(r=this.resolveDefaultMerkleTree(new p.PublicKey(this.mint))){e.next=13;break}throw new Error("Default Merkle Tree not found");case 13:return i=this.mdProgram,e.next=16,i.account.merkleDistributor.fetchNullable(new p.PublicKey((null===a||void 0===a?void 0:a.merkle_tree)||r));case 16:if(o=e.sent){e.next=19;break}return e.abrupt("return",null);case 19:return s=o.maxTotalClaim,c=o.airdropBonus.totalBonus,u=s.sub(c),l=n.mul(c).div(u),e.abrupt("return",l);case 24:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"getBonusForClaimaint",value:function(){var e=(0,c.Z)(m().mark((function e(t,n){var r,i,o,s,c,u,d,b,h,k,g,f,y;return m().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getUser(t);case 2:if(r=e.sent,this.mdProgram){e.next=5;break}return e.abrupt("return",null);case 5:if(i=this.resolveDefaultMerkleTree(new p.PublicKey(this.mint))){e.next=8;break}throw new Error("Default Merkle Tree not found");case 8:return o=this.mdProgram,e.t0=Promise,e.next=12,o.account.merkleDistributor.fetchNullable(new p.PublicKey((null===r||void 0===r?void 0:r.merkle_tree)||i));case 12:return e.t1=e.sent,e.t2=this.getCurrentSlot(),e.t3=[e.t1,e.t2],e.next=17,e.t0.all.call(e.t0,e.t3);case 17:if(s=e.sent,c=(0,a.Z)(s,2),u=c[0],d=c[1],u){e.next=23;break}return e.abrupt("return",null);case 23:return e.next=25,this.getMaxBonusForClaimant(t,n);case 25:if(e.t4=e.sent,e.t4){e.next=28;break}e.t4=new l.BN(0);case 28:if(b=e.t4,h=u.enableSlot,k=u.airdropBonus.vestingSlotDuration.add(h),!new l.BN(d).gte(h)){e.next=42;break}if(!new l.BN(d).gte(k)){e.next=36;break}return e.abrupt("return",b);case 36:return g=new l.BN(d).sub(h),f=u.airdropBonus.vestingSlotDuration,y=g.mul(b).div(f),e.abrupt("return",y);case 40:e.next=43;break;case 42:return e.abrupt("return",new l.BN(0));case 43:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"getInitialBonusForClaimaint",value:function(){var e=(0,c.Z)(m().mark((function e(t,n){var r,i,o,s,c,u,d,b,h,k,g,f,y;return m().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getUser(t);case 2:if(r=e.sent,this.mdProgram){e.next=5;break}return e.abrupt("return",null);case 5:if(i=this.resolveDefaultMerkleTree(new p.PublicKey(this.mint))){e.next=8;break}throw new Error("Default Merkle Tree not found");case 8:return o=this.mdProgram,e.t0=Promise,e.next=12,o.account.merkleDistributor.fetchNullable(new p.PublicKey((null===r||void 0===r?void 0:r.merkle_tree)||i));case 12:return e.t1=e.sent,e.t2=this.getCurrentSlot(),e.t3=[e.t1,e.t2],e.next=17,e.t0.all.call(e.t0,e.t3);case 17:if(s=e.sent,c=(0,a.Z)(s,2),u=c[0],d=c[1],u){e.next=23;break}return e.abrupt("return",null);case 23:return e.next=25,this.getMaxBonusForClaimant(t,n);case 25:if(e.t4=e.sent,e.t4){e.next=28;break}e.t4=new l.BN(0);case 28:if(b=e.t4,h=u.enableSlot,k=u.airdropBonus.vestingSlotDuration.add(h),!new l.BN(d).gte(h)||new l.BN(d).gte(k)){e.next=36;break}return g=new l.BN(d).sub(h),f=u.airdropBonus.vestingSlotDuration,y=g.mul(b).div(f),e.abrupt("return",y);case 36:return e.abrupt("return",new l.BN(0));case 37:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"getAllBonusForClaimaint",value:function(){var e=(0,c.Z)(m().mark((function e(t,n){var r,i,o,s,c;return m().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t&&n){e.next=2;break}return e.abrupt("return",{currentBonus:0,extraBonus:0});case 2:return e.next=4,Promise.all([this.getBonusForClaimaint(t,n),this.getInitialBonusForClaimaint(t,n),this.getMaxBonusForClaimant(t,n)]);case 4:return r=e.sent,i=(0,a.Z)(r,3),o=i[0],s=i[1],c=i[2],e.abrupt("return",{currentBonus:null===o||void 0===o?void 0:o.toNumber(),extraBonus:s&&c?c.toNumber()-s.toNumber():0});case 10:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"getUser",value:function(){var e=(0,c.Z)(m().mark((function e(t){var n,a;return m().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.user){e.next=2;break}return e.abrupt("return",this.user);case 2:return e.prev=2,e.next=5,fetch("".concat(this.getUserEndpoint).concat(this.mint.toBase58(),"/").concat(t.toBase58()));case 5:if((n=e.sent).ok){e.next=8;break}return e.abrupt("return",null);case 8:return e.next=10,n.json();case 10:return a=e.sent,this.user=a,e.abrupt("return",a);case 15:return e.prev=15,e.t0=e.catch(2),e.abrupt("return",null);case 18:case"end":return e.stop()}}),e,this,[[2,15]])})));return function(t){return e.apply(this,arguments)}}()},{key:"getCurrentSlot",value:function(){var e=(0,c.Z)(m().mark((function e(){return m().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.provider.connection.getSlot());case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"resolveDefaultMerkleTree",value:function(e){if(this.isV2)return this.V2_ROOT_MERKLE_TREE;var t=p.PublicKey.findProgramAddressSync([k.from("MerkleDistributor"),e.toBuffer(),k.alloc(8)],this.mdProgram.programId);return(0,a.Z)(t,1)[0].toBase58()}},{key:"getClaimTimes",value:function(){var e=(0,c.Z)(m().mark((function e(t){var n,r,i,o,s,c,u,l,d;return m().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=t,!e.t0){e.next=5;break}return e.next=4,this.getUser(t);case 4:e.t0=e.sent;case 5:if(n=e.t0,this.mdProgram){e.next=8;break}return e.abrupt("return",null);case 8:if(r=this.resolveDefaultMerkleTree(new p.PublicKey(this.mint))){e.next=11;break}throw new Error("Default Merkle Tree not found");case 11:return e.next=13,Promise.all([this.mdProgram.account.merkleDistributor.fetchNullable(new p.PublicKey((null===n||void 0===n?void 0:n.merkle_tree)||r)),this.getCurrentSlot(),w(this.provider.connection)]);case 13:if(i=e.sent,o=(0,a.Z)(i,3),s=o[0],c=o[1],u=o[2],console.log({avgSlotTime:u}),null!==s&&void 0!==s&&s.enableSlot&&c&&u){e.next=21;break}return e.abrupt("return",null);case 21:return l=new Date(Date.now()+(s.enableSlot.toNumber()-c)*u),d="airdropBonus"in s&&s.airdropBonus.vestingSlotDuration.toNumber()?new Date(Date.now()+(s.enableSlot.toNumber()+s.airdropBonus.vestingSlotDuration.toNumber()-c)*u):void 0,e.abrupt("return",{enableSlot:s.enableSlot.toNumber(),endTime:new Date(1e3*s.clawbackStartTs.toNumber()),estTime:l,maxBonusClaimTime:d});case 24:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getClaimStatus",value:function(){var e=(0,c.Z)(m().mark((function e(t){var n,r,i,o,s,c;return m().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=this.mdProgram,t&&n){e.next=3;break}return e.abrupt("return",null);case 3:return e.next=5,this.getUser(t);case 5:if((r=e.sent)&&r.merkle_tree){e.next=8;break}return e.abrupt("return",null);case 8:return i=(0,b.W2)(t,new p.PublicKey(r.merkle_tree),n.programId),o=(0,a.Z)(i,2),s=o[0],o[1],e.next=11,n.account.claimStatus.fetchNullable(s);case 11:return c=e.sent,e.abrupt("return",f(f({},c),{},{amount:new l.BN(r.amount),lockedAmount:new l.BN(r.locked_amount),isClaimed:Boolean(c),claimedAmount:new l.BN(((null===c||void 0===c?void 0:c.unlockedAmount.toNumber())||0)+((null===c||void 0===c?void 0:c.lockedAmountWithdrawn.toNumber())||0))}));case 13:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"claimToken",value:function(){var e=(0,c.Z)(m().mark((function e(t){var n,r,i,o,s,c,u,k,g,f,y,w,v,S,M,T,x,C,A;return m().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=this.provider.connection,r=this.mdProgram,i=this.mint,t&&i&&r){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,this.getUser(t);case 5:if(o=e.sent){e.next=8;break}return e.abrupt("return");case 8:return s=o.proof,c=o.merkle_tree,u=new p.PublicKey(c),k=(0,b.W2)(t,u,r.programId),g=(0,a.Z)(k,2),f=g[0],g[1],y=[],e.next=14,(0,h.c1)(i,t,n);case 14:return w=e.sent,v=(0,a.Z)(w,2),S=v[0],(M=v[1])&&y.push(M),e.next=21,(0,h.c1)(i,u,n);case 21:return T=e.sent,x=(0,a.Z)(T,2),C=x[0],(A=x[1])&&y.push(A),e.t0=[],e.t1=y,e.next=30,r.methods.newClaim(new l.BN(o.amount),new l.BN(o.locked_amount||0),s).accounts({claimant:t,claimStatus:f,distributor:u,from:C,to:S,systemProgram:p.SystemProgram.programId,tokenProgram:d.H_}).instruction();case 30:return e.t2=e.sent,e.t3=[e.t2],e.abrupt("return",e.t0.concat.call(e.t0,e.t1,e.t3));case 33:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"claimVesting",value:function(){var e=(0,c.Z)(m().mark((function e(t){var n,r,i,o,s,c,u,l,k,g,f,y,w,v,S,M,T,x;return m().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=this.provider.connection,r=this.mdProgram,i=this.mint,t&&i&&r){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,this.getUser(t);case 5:if(o=e.sent){e.next=8;break}return e.abrupt("return");case 8:return s=o.merkle_tree,c=new p.PublicKey(s),u=(0,b.W2)(t,c,r.programId),l=(0,a.Z)(u,2),k=l[0],l[1],g=[],e.next=14,(0,h.c1)(i,t,n);case 14:return f=e.sent,y=(0,a.Z)(f,2),w=y[0],(v=y[1])&&g.push(v),e.next=21,(0,h.c1)(i,c,n);case 21:return S=e.sent,M=(0,a.Z)(S,2),T=M[0],(x=M[1])&&g.push(x),e.t0=[],e.t1=g,e.next=30,r.methods.claimLocked().accounts({claimant:t,claimStatus:k,distributor:c,from:T,to:w,tokenProgram:d.H_}).instruction();case 30:return e.t2=e.sent,e.t3=[e.t2],e.abrupt("return",e.t0.concat.call(e.t0,e.t1,e.t3));case 33:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),e}(),S=n(72215),M=n(45009),T=n(1242),x=n(3011),C=n(76640);function A(){var e,t=(0,r.O)(),n=(0,S.Rc)(),i=(0,x.KO)(T.dS),o=(0,a.Z)(i,1)[0],s=o.TARGET_MINT,c=o.V2_ROOT_MERKLE_TREE,u=o.useMerkleDistributorV2,m=(0,C.S)().getUserEndpoint;return(0,M.a)(["markle-distributor",null===(e=t.publicKey)||void 0===e?void 0:e.toBase58(),s.toString(),u,m],(function(){if(!c)return null;var e=new l.Y7(n,t,{commitment:"confirmed"});return new v(e,m,new p.PublicKey(s),u,c)}),{enabled:Boolean(t)&&Boolean(n)})}},99463:function(e,t,n){n.d(t,{x:function(){return a}});var a={version:"0.0.1",name:"merkle_distributor",instructions:[{name:"newDistributor",docs:["READ THE FOLLOWING:","","This instruction is susceptible to frontrunning that could result in loss of funds if not handled properly.","","An attack could look like:","- A legitimate user opens a new distributor.","- Someone observes the call to this instruction.","- They replace the clawback_receiver, admin, or time parameters with their own.","","One situation that could happen here is the attacker replaces the admin and clawback_receiver with their own","and sets the clawback_start_ts with the minimal time allowed. After clawback_start_ts has elapsed,","the attacker can steal all funds from the distributor to their own clawback_receiver account.","","HOW TO AVOID:","- When you call into this instruction, ensure your transaction succeeds.","- To be extra safe, after your transaction succeeds, read back the state of the created MerkleDistributor account and","assert the parameters are what you expect, most importantly the clawback_receiver and admin.","- If your transaction fails, double check the value on-chain matches what you expect."],accounts:[{name:"distributor",isMut:!0,isSigner:!1,docs:["[MerkleDistributor]."],pda:{seeds:[{kind:"const",type:"string",value:"MerkleDistributor"},{kind:"account",type:"publicKey",account:"Mint",path:"mint"},{kind:"arg",type:"u64",path:"version"}]}},{name:"clawbackReceiver",isMut:!0,isSigner:!1,docs:["Clawback receiver token account"]},{name:"mint",isMut:!1,isSigner:!1,docs:["The mint to distribute."]},{name:"tokenVault",isMut:!1,isSigner:!1,docs:["Token vault","Should create previously"]},{name:"admin",isMut:!0,isSigner:!0,docs:["Admin wallet, responsible for creating the distributor and paying for the transaction.","Also has the authority to set the clawback receiver and change itself."]},{name:"systemProgram",isMut:!1,isSigner:!1,docs:["The [System] program."]},{name:"associatedTokenProgram",isMut:!1,isSigner:!1,docs:["The [Associated Token] program."]},{name:"tokenProgram",isMut:!1,isSigner:!1,docs:["The [Token] program."]}],args:[{name:"version",type:"u64"},{name:"root",type:{array:["u8",32]}},{name:"maxTotalClaim",type:"u64"},{name:"maxNumNodes",type:"u64"},{name:"startVestingTs",type:"i64"},{name:"endVestingTs",type:"i64"},{name:"clawbackStartTs",type:"i64"},{name:"enableSlot",type:"u64"},{name:"closable",type:"bool"}]},{name:"closeDistributor",docs:["only available in test phase"],accounts:[{name:"distributor",isMut:!0,isSigner:!1,docs:["[MerkleDistributor]."],relations:["admin","token_vault"]},{name:"tokenVault",isMut:!0,isSigner:!1,docs:["Clawback receiver token account"]},{name:"admin",isMut:!0,isSigner:!0,docs:["Admin wallet, responsible for creating the distributor and paying for the transaction.","Also has the authority to set the clawback receiver and change itself."]},{name:"destinationTokenAccount",isMut:!0,isSigner:!1,docs:["account receive token back"]},{name:"tokenProgram",isMut:!1,isSigner:!1,docs:["The [Token] program."]}],args:[]},{name:"closeClaimStatus",docs:["only available in test phase"],accounts:[{name:"claimStatus",isMut:!0,isSigner:!1,relations:["claimant","admin"]},{name:"claimant",isMut:!0,isSigner:!1},{name:"admin",isMut:!1,isSigner:!0}],args:[]},{name:"setEnableSlot",accounts:[{name:"distributor",isMut:!0,isSigner:!1,docs:["[MerkleDistributor]."],relations:["admin"]},{name:"admin",isMut:!0,isSigner:!0,docs:["Payer to create the distributor."]}],args:[{name:"enableSlot",type:"u64"}]},{name:"newClaim",accounts:[{name:"distributor",isMut:!0,isSigner:!1,docs:["The [MerkleDistributor]."]},{name:"claimStatus",isMut:!0,isSigner:!1,docs:["Claim status PDA"],pda:{seeds:[{kind:"const",type:"string",value:"ClaimStatus"},{kind:"account",type:"publicKey",path:"claimant"},{kind:"account",type:"publicKey",account:"MerkleDistributor",path:"distributor"}]}},{name:"from",isMut:!0,isSigner:!1,docs:["Distributor ATA containing the tokens to distribute."]},{name:"to",isMut:!0,isSigner:!1,docs:["Account to send the claimed tokens to."]},{name:"claimant",isMut:!0,isSigner:!0,docs:["Who is claiming the tokens."]},{name:"tokenProgram",isMut:!1,isSigner:!1,docs:["SPL [Token] program."]},{name:"systemProgram",isMut:!1,isSigner:!1,docs:["The [System] program."]}],args:[{name:"amountUnlocked",type:"u64"},{name:"amountLocked",type:"u64"},{name:"proof",type:{vec:{array:["u8",32]}}}]},{name:"claimLocked",accounts:[{name:"distributor",isMut:!0,isSigner:!1,docs:["The [MerkleDistributor]."]},{name:"claimStatus",isMut:!0,isSigner:!1,docs:["Claim Status PDA"],pda:{seeds:[{kind:"const",type:"string",value:"ClaimStatus"},{kind:"account",type:"publicKey",path:"claimant"},{kind:"account",type:"publicKey",account:"MerkleDistributor",path:"distributor"}]}},{name:"from",isMut:!0,isSigner:!1,docs:["Distributor ATA containing the tokens to distribute."]},{name:"to",isMut:!0,isSigner:!1,docs:["Account to send the claimed tokens to.","Claimant must sign the transaction and can only claim on behalf of themself"]},{name:"claimant",isMut:!0,isSigner:!0,docs:["Who is claiming the tokens."]},{name:"tokenProgram",isMut:!1,isSigner:!1,docs:["SPL [Token] program."]}],args:[]},{name:"clawback",accounts:[{name:"distributor",isMut:!0,isSigner:!1,docs:["The [MerkleDistributor]."]},{name:"from",isMut:!0,isSigner:!1,docs:["Distributor ATA containing the tokens to distribute."]},{name:"to",isMut:!0,isSigner:!1,docs:["The Clawback token account."]},{name:"claimant",isMut:!1,isSigner:!0,docs:["Claimant account","Anyone can claw back the funds"]},{name:"systemProgram",isMut:!1,isSigner:!1,docs:["The [System] program."]},{name:"tokenProgram",isMut:!1,isSigner:!1,docs:["SPL [Token] program."]}],args:[]},{name:"setClawbackReceiver",accounts:[{name:"distributor",isMut:!0,isSigner:!1,docs:["The [MerkleDistributor]."]},{name:"newClawbackAccount",isMut:!1,isSigner:!1,docs:["New clawback account"]},{name:"admin",isMut:!0,isSigner:!0,docs:["Admin signer"]}],args:[]},{name:"setAdmin",accounts:[{name:"distributor",isMut:!0,isSigner:!1,docs:["The [MerkleDistributor]."]},{name:"admin",isMut:!0,isSigner:!0,docs:["Admin signer"]},{name:"newAdmin",isMut:!0,isSigner:!1,docs:["New admin account"]}],args:[]}],accounts:[{name:"claimStatus",docs:["Holds whether or not a claimant has claimed tokens."],type:{kind:"struct",fields:[{name:"claimant",docs:["Authority that claimed the tokens."],type:"publicKey"},{name:"lockedAmount",docs:["Locked amount"],type:"u64"},{name:"lockedAmountWithdrawn",docs:["Locked amount withdrawn"],type:"u64"},{name:"unlockedAmount",docs:["Unlocked amount"],type:"u64"},{name:"closable",docs:["indicate that whether admin can close this account, for testing purpose"],type:"bool"},{name:"admin",docs:["admin of merkle tree, store for for testing purpose"],type:"publicKey"}]}},{name:"merkleDistributor",docs:["State for the account which distributes tokens."],type:{kind:"struct",fields:[{name:"bump",docs:["Bump seed."],type:"u8"},{name:"version",docs:["Version of the airdrop"],type:"u64"},{name:"root",docs:["The 256-bit merkle root."],type:{array:["u8",32]}},{name:"mint",docs:["[Mint] of the token to be distributed."],type:"publicKey"},{name:"tokenVault",docs:["Token Address of the vault"],type:"publicKey"},{name:"maxTotalClaim",docs:["Maximum number of tokens that can ever be claimed from this [MerkleDistributor]."],type:"u64"},{name:"maxNumNodes",docs:["Maximum number of nodes in [MerkleDistributor]."],type:"u64"},{name:"totalAmountClaimed",docs:["Total amount of tokens that have been claimed."],type:"u64"},{name:"numNodesClaimed",docs:["Number of nodes that have been claimed."],type:"u64"},{name:"startTs",docs:["Lockup time start (Unix Timestamp)"],type:"i64"},{name:"endTs",docs:["Lockup time end (Unix Timestamp)"],type:"i64"},{name:"clawbackStartTs",docs:["Clawback start (Unix Timestamp)"],type:"i64"},{name:"clawbackReceiver",docs:["Clawback receiver"],type:"publicKey"},{name:"admin",docs:["Admin wallet"],type:"publicKey"},{name:"clawedBack",docs:["Whether or not the distributor has been clawed back"],type:"bool"},{name:"enableSlot",docs:["this merkle tree is enable from this slot"],type:"u64"},{name:"closable",docs:["indicate that whether admin can close this pool, for testing purpose"],type:"bool"},{name:"buffer0",docs:["Buffer 0"],type:{array:["u8",32]}},{name:"buffer1",docs:["Buffer 1"],type:{array:["u8",32]}},{name:"buffer2",docs:["Buffer 2"],type:{array:["u8",32]}}]}}],events:[{name:"NewClaimEvent",fields:[{name:"claimant",type:"publicKey",index:!1},{name:"timestamp",type:"i64",index:!1}]},{name:"ClaimedEvent",fields:[{name:"claimant",type:"publicKey",index:!1},{name:"amount",type:"u64",index:!1}]}],errors:[{code:6e3,name:"InsufficientUnlockedTokens",msg:"Insufficient unlocked tokens"},{code:6001,name:"StartTooFarInFuture",msg:"Deposit Start too far in future"},{code:6002,name:"InvalidProof",msg:"Invalid Merkle proof."},{code:6003,name:"ExceededMaxClaim",msg:"Exceeded maximum claim amount"},{code:6004,name:"MaxNodesExceeded",msg:"Exceeded maximum node count"},{code:6005,name:"Unauthorized",msg:"Account is not authorized to execute this instruction"},{code:6006,name:"OwnerMismatch",msg:"Token account owner did not match intended owner"},{code:6007,name:"ClawbackDuringVesting",msg:"Clawback cannot be before vesting ends"},{code:6008,name:"ClawbackBeforeStart",msg:"Attempted clawback before start"},{code:6009,name:"ClawbackAlreadyClaimed",msg:"Clawback already claimed"},{code:6010,name:"InsufficientClawbackDelay",msg:"Clawback start must be at least one day after vesting end"},{code:6011,name:"SameClawbackReceiver",msg:"New and old Clawback receivers are identical"},{code:6012,name:"SameAdmin",msg:"New and old admin are identical"},{code:6013,name:"ClaimExpired",msg:"Claim window expired"},{code:6014,name:"ArithmeticError",msg:"Arithmetic Error (overflow/underflow)"},{code:6015,name:"StartTimestampAfterEnd",msg:"Start Timestamp cannot be after end Timestamp"},{code:6016,name:"TimestampsNotInFuture",msg:"Timestamps cannot be in the past"},{code:6017,name:"InvalidVersion",msg:"Airdrop Version Mismatch"},{code:6018,name:"ClaimingIsNotStarted",msg:"Claiming is not started"},{code:6019,name:"CannotCloseDistributor",msg:"Cannot close distributor"},{code:6020,name:"CannotCloseClaimStatus",msg:"Cannot close claim status"}]}},70305:function(e,t,n){n.d(t,{x:function(){return a}});var a={version:"0.0.2",name:"merkle_distributor",instructions:[{name:"newDistributor",docs:["READ THE FOLLOWING:","","This instruction is susceptible to frontrunning that could result in loss of funds if not handled properly.","","An attack could look like:","- A legitimate user opens a new distributor.","- Someone observes the call to this instruction.","- They replace the clawback_receiver, admin, or time parameters with their own.","","One situation that could happen here is the attacker replaces the admin and clawback_receiver with their own","and sets the clawback_start_ts with the minimal time allowed. After clawback_start_ts has elapsed,","the attacker can steal all funds from the distributor to their own clawback_receiver account.","","HOW TO AVOID:","- When you call into this instruction, ensure your transaction succeeds.","- To be extra safe, after your transaction succeeds, read back the state of the created MerkleDistributor account and","assert the parameters are what you expect, most importantly the clawback_receiver and admin.","- If your transaction fails, double check the value on-chain matches what you expect."],accounts:[{name:"distributor",isMut:!0,isSigner:!1,docs:["[MerkleDistributor]."],pda:{seeds:[{kind:"const",type:"string",value:"MerkleDistributor"},{kind:"account",type:"publicKey",path:"base"},{kind:"account",type:"publicKey",account:"Mint",path:"mint"},{kind:"arg",type:"u64",path:"version"}]}},{name:"base",isMut:!1,isSigner:!0,docs:["Base key of the distributor."]},{name:"clawbackReceiver",isMut:!0,isSigner:!1,docs:["Clawback receiver token account"]},{name:"mint",isMut:!1,isSigner:!1,docs:["The mint to distribute."]},{name:"tokenVault",isMut:!1,isSigner:!1,docs:["Token vault","Should create previously"]},{name:"admin",isMut:!0,isSigner:!0,docs:["Admin wallet, responsible for creating the distributor and paying for the transaction.","Also has the authority to set the clawback receiver and change itself."]},{name:"systemProgram",isMut:!1,isSigner:!1,docs:["The [System] program."]},{name:"associatedTokenProgram",isMut:!1,isSigner:!1,docs:["The [Associated Token] program."]},{name:"tokenProgram",isMut:!1,isSigner:!1,docs:["The [Token] program."]}],args:[{name:"version",type:"u64"},{name:"root",type:{array:["u8",32]}},{name:"maxTotalClaim",type:"u64"},{name:"maxNumNodes",type:"u64"},{name:"startVestingTs",type:"i64"},{name:"endVestingTs",type:"i64"},{name:"clawbackStartTs",type:"i64"},{name:"enableSlot",type:"u64"},{name:"closable",type:"bool"}]},{name:"newDistributor2",accounts:[{name:"distributor",isMut:!0,isSigner:!1,docs:["[MerkleDistributor]."],pda:{seeds:[{kind:"const",type:"string",value:"MerkleDistributor"},{kind:"account",type:"publicKey",path:"base"},{kind:"account",type:"publicKey",account:"Mint",path:"mint"},{kind:"arg",type:"u64",path:"version"}]}},{name:"base",isMut:!1,isSigner:!0,docs:["Base key of the distributor."]},{name:"clawbackReceiver",isMut:!0,isSigner:!1,docs:["Clawback receiver token account"]},{name:"mint",isMut:!1,isSigner:!1,docs:["The mint to distribute."]},{name:"tokenVault",isMut:!1,isSigner:!1,docs:["Token vault","Should create previously"]},{name:"admin",isMut:!0,isSigner:!0,docs:["Admin wallet, responsible for creating the distributor and paying for the transaction.","Also has the authority to set the clawback receiver and change itself."]},{name:"systemProgram",isMut:!1,isSigner:!1,docs:["The [System] program."]},{name:"associatedTokenProgram",isMut:!1,isSigner:!1,docs:["The [Associated Token] program."]},{name:"tokenProgram",isMut:!1,isSigner:!1,docs:["The [Token] program."]}],args:[{name:"version",type:"u64"},{name:"root",type:{array:["u8",32]}},{name:"totalClaim",type:"u64"},{name:"maxNumNodes",type:"u64"},{name:"startVestingTs",type:"i64"},{name:"endVestingTs",type:"i64"},{name:"clawbackStartTs",type:"i64"},{name:"enableSlot",type:"u64"},{name:"closable",type:"bool"},{name:"totalBonus",type:"u64"},{name:"bonusVestingSlotDuration",type:"u64"}]},{name:"closeDistributor",docs:["only available in test phase"],accounts:[{name:"distributor",isMut:!0,isSigner:!1,docs:["[MerkleDistributor]."],relations:["admin","token_vault"]},{name:"tokenVault",isMut:!0,isSigner:!1,docs:["Clawback receiver token account"]},{name:"admin",isMut:!0,isSigner:!0,docs:["Admin wallet, responsible for creating the distributor and paying for the transaction.","Also has the authority to set the clawback receiver and change itself."]},{name:"destinationTokenAccount",isMut:!0,isSigner:!1,docs:["account receive token back"]},{name:"tokenProgram",isMut:!1,isSigner:!1,docs:["The [Token] program."]}],args:[]},{name:"closeClaimStatus",docs:["only available in test phase"],accounts:[{name:"claimStatus",isMut:!0,isSigner:!1,relations:["claimant","admin"]},{name:"claimant",isMut:!0,isSigner:!1},{name:"admin",isMut:!1,isSigner:!0}],args:[]},{name:"setEnableSlot",accounts:[{name:"distributor",isMut:!0,isSigner:!1,docs:["[MerkleDistributor]."],relations:["admin"]},{name:"admin",isMut:!0,isSigner:!0,docs:["Payer to create the distributor."]}],args:[{name:"enableSlot",type:"u64"}]},{name:"newClaim",accounts:[{name:"distributor",isMut:!0,isSigner:!1,docs:["The [MerkleDistributor]."]},{name:"claimStatus",isMut:!0,isSigner:!1,docs:["Claim status PDA"],pda:{seeds:[{kind:"const",type:"string",value:"ClaimStatus"},{kind:"account",type:"publicKey",path:"claimant"},{kind:"account",type:"publicKey",account:"MerkleDistributor",path:"distributor"}]}},{name:"from",isMut:!0,isSigner:!1,docs:["Distributor ATA containing the tokens to distribute."]},{name:"to",isMut:!0,isSigner:!1,docs:["Account to send the claimed tokens to."]},{name:"claimant",isMut:!0,isSigner:!0,docs:["Who is claiming the tokens."]},{name:"tokenProgram",isMut:!1,isSigner:!1,docs:["SPL [Token] program."]},{name:"systemProgram",isMut:!1,isSigner:!1,docs:["The [System] program."]}],args:[{name:"amountUnlocked",type:"u64"},{name:"amountLocked",type:"u64"},{name:"proof",type:{vec:{array:["u8",32]}}}]},{name:"claimLocked",accounts:[{name:"distributor",isMut:!0,isSigner:!1,docs:["The [MerkleDistributor]."]},{name:"claimStatus",isMut:!0,isSigner:!1,docs:["Claim Status PDA"],pda:{seeds:[{kind:"const",type:"string",value:"ClaimStatus"},{kind:"account",type:"publicKey",path:"claimant"},{kind:"account",type:"publicKey",account:"MerkleDistributor",path:"distributor"}]}},{name:"from",isMut:!0,isSigner:!1,docs:["Distributor ATA containing the tokens to distribute."]},{name:"to",isMut:!0,isSigner:!1,docs:["Account to send the claimed tokens to.","Claimant must sign the transaction and can only claim on behalf of themself"]},{name:"claimant",isMut:!0,isSigner:!0,docs:["Who is claiming the tokens."]},{name:"tokenProgram",isMut:!1,isSigner:!1,docs:["SPL [Token] program."]}],args:[]},{name:"clawback",accounts:[{name:"distributor",isMut:!0,isSigner:!1,docs:["The [MerkleDistributor]."]},{name:"from",isMut:!0,isSigner:!1,docs:["Distributor ATA containing the tokens to distribute."]},{name:"to",isMut:!0,isSigner:!1,docs:["The Clawback token account."]},{name:"claimant",isMut:!1,isSigner:!0,docs:["Claimant account","Anyone can claw back the funds"]},{name:"systemProgram",isMut:!1,isSigner:!1,docs:["The [System] program."]},{name:"tokenProgram",isMut:!1,isSigner:!1,docs:["SPL [Token] program."]}],args:[]},{name:"setClawbackReceiver",accounts:[{name:"distributor",isMut:!0,isSigner:!1,docs:["The [MerkleDistributor]."]},{name:"newClawbackAccount",isMut:!1,isSigner:!1,docs:["New clawback account"]},{name:"admin",isMut:!0,isSigner:!0,docs:["Admin signer"]}],args:[]},{name:"setAdmin",accounts:[{name:"distributor",isMut:!0,isSigner:!1,docs:["The [MerkleDistributor]."]},{name:"admin",isMut:!0,isSigner:!0,docs:["Admin signer"]},{name:"newAdmin",isMut:!0,isSigner:!1,docs:["New admin account"]}],args:[]}],accounts:[{name:"claimStatus",docs:["Holds whether or not a claimant has claimed tokens."],type:{kind:"struct",fields:[{name:"claimant",docs:["Authority that claimed the tokens."],type:"publicKey"},{name:"lockedAmount",docs:["Locked amount"],type:"u64"},{name:"lockedAmountWithdrawn",docs:["Locked amount withdrawn"],type:"u64"},{name:"unlockedAmount",docs:["Unlocked amount"],type:"u64"},{name:"closable",docs:["indicate that whether admin can close this account, for testing purpose"],type:"bool"},{name:"admin",docs:["admin of merkle tree, store for for testing purpose"],type:"publicKey"}]}},{name:"merkleDistributor",docs:["State for the account which distributes tokens."],type:{kind:"struct",fields:[{name:"bump",docs:["Bump seed."],type:"u8"},{name:"version",docs:["Version of the airdrop"],type:"u64"},{name:"root",docs:["The 256-bit merkle root."],type:{array:["u8",32]}},{name:"mint",docs:["[Mint] of the token to be distributed."],type:"publicKey"},{name:"base",docs:["base key of distributor."],type:"publicKey"},{name:"tokenVault",docs:["Token Address of the vault"],type:"publicKey"},{name:"maxTotalClaim",docs:["Maximum number of tokens that can ever be claimed from this [MerkleDistributor]."],type:"u64"},{name:"maxNumNodes",docs:["Maximum number of nodes in [MerkleDistributor]."],type:"u64"},{name:"totalAmountClaimed",docs:["Total amount of tokens that have been claimed."],type:"u64"},{name:"numNodesClaimed",docs:["Number of nodes that have been claimed."],type:"u64"},{name:"startTs",docs:["Lockup time start (Unix Timestamp)"],type:"i64"},{name:"endTs",docs:["Lockup time end (Unix Timestamp)"],type:"i64"},{name:"clawbackStartTs",docs:["Clawback start (Unix Timestamp)"],type:"i64"},{name:"clawbackReceiver",docs:["Clawback receiver"],type:"publicKey"},{name:"admin",docs:["Admin wallet"],type:"publicKey"},{name:"clawedBack",docs:["Whether or not the distributor has been clawed back"],type:"bool"},{name:"enableSlot",docs:["this merkle tree is enable from this slot"],type:"u64"},{name:"closable",docs:["indicate that whether admin can close this pool, for testing purpose"],type:"bool"},{name:"airdropBonus",docs:["bonus multiplier"],type:{defined:"AirdropBonus"}},{name:"buffer0",docs:["Buffer 0"],type:{array:["u8",8]}},{name:"buffer1",docs:["Buffer 1"],type:{array:["u8",32]}},{name:"buffer2",docs:["Buffer 2"],type:{array:["u8",32]}}]}}],types:[{name:"AirdropBonus",type:{kind:"struct",fields:[{name:"totalBonus",docs:["total bonus"],type:"u64"},{name:"vestingSlotDuration",type:"u64"},{name:"totalClaimedBonus",docs:["total bonus"],type:"u64"}]}}],events:[{name:"NewClaimEvent",fields:[{name:"claimant",type:"publicKey",index:!1},{name:"timestamp",type:"i64",index:!1}]},{name:"ClaimedEvent",fields:[{name:"claimant",type:"publicKey",index:!1},{name:"amount",type:"u64",index:!1}]}],errors:[{code:6e3,name:"InsufficientUnlockedTokens",msg:"Insufficient unlocked tokens"},{code:6001,name:"StartTooFarInFuture",msg:"Deposit Start too far in future"},{code:6002,name:"InvalidProof",msg:"Invalid Merkle proof."},{code:6003,name:"ExceededMaxClaim",msg:"Exceeded maximum claim amount"},{code:6004,name:"MaxNodesExceeded",msg:"Exceeded maximum node count"},{code:6005,name:"Unauthorized",msg:"Account is not authorized to execute this instruction"},{code:6006,name:"OwnerMismatch",msg:"Token account owner did not match intended owner"},{code:6007,name:"ClawbackDuringVesting",msg:"Clawback cannot be before vesting ends"},{code:6008,name:"ClawbackBeforeStart",msg:"Attempted clawback before start"},{code:6009,name:"ClawbackAlreadyClaimed",msg:"Clawback already claimed"},{code:6010,name:"InsufficientClawbackDelay",msg:"Clawback start must be at least one day after vesting end"},{code:6011,name:"SameClawbackReceiver",msg:"New and old Clawback receivers are identical"},{code:6012,name:"SameAdmin",msg:"New and old admin are identical"},{code:6013,name:"ClaimExpired",msg:"Claim window expired"},{code:6014,name:"ArithmeticError",msg:"Arithmetic Error (overflow/underflow)"},{code:6015,name:"StartTimestampAfterEnd",msg:"Start Timestamp cannot be after end Timestamp"},{code:6016,name:"TimestampsNotInFuture",msg:"Timestamps cannot be in the past"},{code:6017,name:"InvalidVersion",msg:"Airdrop Version Mismatch"},{code:6018,name:"ClaimingIsNotStarted",msg:"Claiming is not started"},{code:6019,name:"CannotCloseDistributor",msg:"Cannot close distributor"},{code:6020,name:"CannotCloseClaimStatus",msg:"Cannot close claim status"}]}},14441:function(e,t,n){n.d(t,{RJ:function(){return p},Rg:function(){return b},b8:function(){return u},W2:function(){return i}});n(8857);var a=n(7744),r=n(795).Buffer;function i(e,t,n){return a.PublicKey.findProgramAddressSync([r.from("ClaimStatus"),e.toBytes(),t.toBytes()],n)}var o=n(24309),s=n(99463),c=n(70305);function u(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return t?new o.$r(c.x,b,e):new o.$r(s.x,p,e)}var m,l,d,p=new a.PublicKey("meRjbQXFNf5En86FXT2YPz1dQzLj4Yb3xK8u1MVgqpb"),b=new a.PublicKey("DiSLRwcSFvtwvMWSs7ubBMvYRaYNYupa76ZSuYLe6D7j");new a.PublicKey("JAA2bkW7RH3RL9Akr2yE7oHjZDuYGaWddbUzMyLdnq8i"),new a.PublicKey("8xXEbh9GkMKrF7uL1gvhmvrpbcdu1z4d44jXS1BZepLM");!function(e){e[e.Pending=0]="Pending",e[e.Against=1]="Against",e[e.For=2]="For",e[e.Abstain=3]="Abstain"}(m||(m={})),function(e){e.Draft="Draft",e.Active="Active",e.Canceled="Canceled",e.Defeated="Defeated",e.Succeeded="Succeeded",e.Queued="Queued",e.Completed="Completed"}(l||(l={})),function(e){e.InitialPhase="InitialPhase",e.TokenLaunchPhase="TokenLaunchPhase"}(d||(d={}))}}]);
//# sourceMappingURL=84374-dacbd942d352bc70.js.map