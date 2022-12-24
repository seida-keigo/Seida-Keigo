e={};
r=function(n){
	e[n]={
		exports:{}
	};
	({
		670:()=>{},760:()=>{},927:function(t,e,r){
			let n=()=>{};
			let o=n.call(e,r,e,t);
			undefined===o||(t.exports=o);
		},793:(t,e,r)=>{
			let n=()=>{};
			let o=()=>{
				let o=()=>t;
				let t={};
				let s=(t,e,r)=>{
					Object.defineProperty(t,e,{
						value:r,enumerable:!0,configurable:!0,writable:!0
					});
					return t[e];
				};
				function l(t,e,r,n){
					let o=e&&e.prototype instanceof p?e:p,i=Object.create(o.prototype),a=new j(n||[]);
					return i._invoke=function(t,e,r){
						let n="suspendedStart";
						return function(o,i){
							if("executing"===n)
								throw new Error("Generator is already running");
							if("completed"===n){
								if("throw"===o)
									throw i;
								return{
									value:undefined,done:!0
								}
							}
							for(r.method=o,r.arg=i;;){
								let a=r.delegate;
								if(a){
									let c=L(a,r);
									if(c){
										if(c===h)
											continue;
										return c
									}
								}
								n="executing";
								let u=f(t,e,r);
								if("normal"===u.type){
									if(n=r.done?"completed":"suspendedYield",u.arg===h)
										continue;
									return{
										value:u.arg,done:r.done
									}
								}
							}
						}
					}(t,r,a),i
				}
				function f(t,e,r){
					try{
						return{
							type:"normal",arg:t.call(e,r)
						}
					}catch(t){
						return{
							type:"throw",arg:t
						}
					}
				}
				t.wrap=l;
				let h={};
				function p(){}
				function y(){}
				function d(){}
				let v={};
				s(v,a,(function(){
					return this
				}));
				let g=Object.getPrototypeOf,m=g&&g(g(S([])));
				m&&m!==e&&r.call(m,a)&&(v=m);
				let w=d.prototype=p.prototype=Object.create(v);
				function b(t){
					["next","throw","return"].forEach((function(e){
						s(t,e,(function(t){
							return this._invoke(e,t)
						}))
					}))
				}
				function x(){}
				function L(){}
				function O(){}
				function E(t){
					let e=t.completion||{};
					e.type="normal",delete e.arg,t.completion=e
				}
				function j(t){
					this.tryEntries=[{
						tryLoc:"root"
					}],t.forEach(O,this),this.reset(!0)
				}
				function S(){
					return{}
				}
				function k(){
					return{}
				}
				return y.prototype=d,s(w,"constructor",d),s(d,"constructor",y),y.displayName=s(d,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){
					let e="function"==typeof t&&t.constructor;
					return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))
				},t.mark=function(t){
					return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,s(t,u,"GeneratorFunction")),t.prototype=Object.create(w),t
				},b(w),s(w,u,"Generator"),s(w,a,(function(){
					return this
				})),s(w,"toString",(function(){
					return"[object Generator]"
				})),t.keys=function(t){
					let e=[];
					for(let r in t)
						e.push(r);
					return e.reverse(),function r(){
						for(;e.length;){
							let n=e.pop();
							if(n in t)
								return r.value=n,r.done=!1,r
						}
						return r.done=!0,r
					}
				},t.values=S,j.prototype={
					constructor:j,reset:function(t){
						if(this.prev=0,this.next=0,this.sent=this._sent=undefined,this.done=!1,this.delegate=null,this.method="next",this.arg=undefined,this.tryEntries.forEach(E),!t)
							for(let e in this)
								"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=undefined)
					},stop:function(){
						this.done=!0;
						let t=this.tryEntries[0].completion;
						if("throw"===t.type)
							throw t.arg;
						return this.rval
					},abrupt:function(t,e){
						for(let n=this.tryEntries.length-1;n>=0;--n){
							let o=this.tryEntries[n];
							if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){
								var i=o;
								break
							}
						}
						i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);
						var a=i?i.completion:{};
						return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,h):this.complete(a)
					},complete:function(t,e){
						if("throw"===t.type)
							throw t.arg;
						return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h
					}
				},t
			}
			function i(t,e,r,n,o,i,a){
				try{
					var c=t[i](a)
					var u=c.value
				}
				catch(t){
					r(t);
					return;
				}
				c.done?e(u):Promise.resolve(u).then(n,o)
			}
			let a=t=>function(){
				let e=this,r=arguments;
				return new Promise((n,o)=>{
					var a=t.apply(e,r);
					let c=t=>void i(a,n,o,c,u,"next",t);
					let u=t=>void i(a,n,o,c,u,"throw",t);
					i(a,n,o,c,u,"next");
				})
			}
			var c=r(311),u=function(){
				var t=a(o().mark((function t(e,r,n){
					var i;
					return o().wrap((function(t){
						for(;;)
							switch(t.prev=t.next){
							case 0:
								return i=c(n),t.next=3,i.load();
							case 3:
								return t.next=5,i.loadLanguage(r);
							case 5:
								return t.next=7,i.initialize(r);
							case 7:
								return t.abrupt("return",i.recognize(e).finally(a(o().mark((function t(){
									return o().wrap((function(t){
										for(;;)
											switch(t.prev=t.next){
											case 0:
												return t.next=2,i.terminate();
											case 2:
											case"end":
												return t.stop()
											}
									}),t)
								})))));
							case 8:
							case"end":
								return t.stop()
							}
					}),t)
				})));
				return function(e,r,n){
					return t.apply(this,arguments)
				}
			}(),s=function(){
				var t=a(o().mark((function t(e,r){
					var n;
					return o().wrap((function(t){
						for(;;)
							switch(t.prev=t.next){
							case 0:
								return n=c(r),t.next=3,n.load();
							case 3:
								return t.next=5,n.loadLanguage("osd");
							case 5:
								return t.next=7,n.initialize("osd");
							case 7:
								return t.abrupt("return",n.detect(e).finally(a(o().mark((function t(){
									return o().wrap((function(t){
										for(;;)
											switch(t.prev=t.next){
											case 0:
												return t.next=2,n.terminate();
											case 2:
											case"end":
												return t.stop()
											}
									}),t)
								})))));
							case 8:
							case"end":
								return t.stop()
							}
					}),t)
				})));
				return function(e,r){
					return t.apply(this,arguments)
				}
			}();
			t.exports={
				recognize:u,detect:s
			}
		},847:t=>{
			t.exports={
				TESSERACT_ONLY:0,LSTM_ONLY:1,TESSERACT_LSTM_COMBINED:2,DEFAULT:3
			}
		},711:t=>{
			t.exports={
				OSD_ONLY:"0",AUTO_OSD:"1",AUTO_ONLY:"2",AUTO:"3",SINGLE_COLUMN:"4",SINGLE_BLOCK_VERT_TEXT:"5",SINGLE_BLOCK:"6",SINGLE_LINE:"7",SINGLE_WORD:"8",CIRCLE_WORD:"9",SINGLE_CHAR:"10",SPARSE_TEXT:"11",SPARSE_TEXT_OSD:"12"
			}
		},214:(t,e,r)=>{
			var n=r(847);
			t.exports={
				defaultOEM:n.DEFAULT
			}
		},341:t=>{
			t.exports={
				langPath:"https://tessdata.projectnaptha.com/4.0.0",workerBlobURL:!0,logger:function(){}
			}
		},5:t=>{
			t.exports={}
		},106:(t,e,r)=>{
			var n=r(313),o=0;
			t.exports=function(t){
				var e=t.id,r=t.action,i=t.payload,a=undefined===i?{}:i,c=e;
				return undefined===c&&(c=n("Job",o),o+=1),{
					id:c,action:r,payload:a
				}
			}
		},936:function(){
		},311:(t,e,r)=>{
			function n(){}
			var o=["logger","errorHandler"];
			function i(){
				i=function(){
					return t
				}
				;
				var t={},e=Object.prototype,r=e.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",c=o.asyncIterator||"@@asyncIterator",u=o.toStringTag||"@@toStringTag";
				function s(t,e,r){
					return Object.defineProperty(t,e,{
						value:r,enumerable:!0,configurable:!0,writable:!0
					}),t[e]
				}
				try{
					s({},"")
				}catch(t){
					s=function(t,e,r){
						return t[e]=r
					}
				}
				function l(t,e,r,n){
					var o=e&&e.prototype instanceof p?e:p,i=Object.create(o.prototype),a=new j(n||[]);
					return i._invoke=function(t,e,r){
						var n="suspendedStart";
						return function(o,i){
							if("executing"===n)
								throw new Error("Generator is already running");
							if("completed"===n){
								if("throw"===o)
									throw i;
								return{
									value:undefined,done:!0
								}
							}
							for(r.method=o,r.arg=i;;){
								var a=r.delegate;
								if(a){
									var c=L(a,r);
									if(c){
										if(c===h)
											continue;
										return c
									}
								}
								if("next"===r.method)
									r.sent=r._sent=r.arg;
								else if("throw"===r.method){
									if("suspendedStart"===n)
										throw n="completed",r.arg;
									r.dispatchException(r.arg)
								}else
									"return"===r.method&&r.abrupt("return",r.arg);
								n="executing";
								var u=f(t,e,r);
								if("normal"===u.type){
									if(n=r.done?"completed":"suspendedYield",u.arg===h)
										continue;
									return{
										value:u.arg,done:r.done
									}
								}
								"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)
							}
						}
					}(t,r,a),i
				}
				function f(t,e,r){
					try{
						return{
							type:"normal",arg:t.call(e,r)
						}
					}catch(t){
						return{
							type:"throw",arg:t
						}
					}
				}
				t.wrap=l;
				var h={};
				function p(){}
				function y(){}
				function d(){}
				var v={};
				s(v,a,(function(){
					return this
				}));
				var g=Object.getPrototypeOf,m=g&&g(g(S([])));
				m&&m!==e&&r.call(m,a)&&(v=m);
				var w=d.prototype=p.prototype=Object.create(v);
				function b(t){
					["next","throw","return"].forEach((function(e){
						s(t,e,(function(t){
							return this._invoke(e,t)
						}))
					}))
				}
				function x(){}
				function L(){}
				function O(){}
				function E(t){
					var e=t.completion||{};
					e.type="normal",delete e.arg,t.completion=e
				}
				function j(t){
					this.tryEntries=[{
						tryLoc:"root"
					}],t.forEach(O,this),this.reset(!0)
				}
				function S(t){
					if(t){
						var e=t[a];
						if(e)
							return e.call(t);
						if("function"==typeof t.next)
							return t;
						if(!isNaN(t.length)){
							var n=-1,o=function e(){
								for(;++n<t.length;)
									if(r.call(t,n))
										return e.value=t[n],e.done=!1,e;
								return e.value=undefined,e.done=!0,e
							};
							return o.next=o
						}
					}
					return{
						next:k
					}
				}
				function k(){
					return{
						value:undefined,done:!0
					}
				}
				return y.prototype=d,s(w,"constructor",d),s(d,"constructor",y),y.displayName=s(d,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){
					var e="function"==typeof t&&t.constructor;
					return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))
				},t.mark=function(t){
					return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,s(t,u,"GeneratorFunction")),t.prototype=Object.create(w),t
				},t.AsyncIterator=x,t.async=function(e,r,n,o,i){
					undefined===i&&(i=Promise);
					var a=new x(l(e,r,n,o),i);
					return t.isGeneratorFunction(r)?a:a.next().then((function(t){
						return t.done?t.value:a.next()
					}))
				},b(w),s(w,u,"Generator"),s(w,a,(function(){
					return this
				})),s(w,"toString",(function(){
					return"[object Generator]"
				})),t.keys=function(t){
					var e=[];
					for(var r in t)
						e.push(r);
					return e.reverse(),function r(){
						for(;e.length;){
							var n=e.pop();
							if(n in t)
								return r.value=n,r.done=!1,r
						}
						return r.done=!0,r
					}
				},t.values=S,j.prototype={
					constructor:j,reset:function(t){
						if(this.prev=0,this.next=0,this.sent=this._sent=undefined,this.done=!1,this.delegate=null,this.method="next",this.arg=undefined,this.tryEntries.forEach(E),!t)
							for(var e in this)
								"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=undefined)
					},stop:function(){
						this.done=!0;
						var t=this.tryEntries[0].completion;
						if("throw"===t.type)
							throw t.arg;
						return this.rval
					},abrupt:function(t,e){
						for(var n=this.tryEntries.length-1;n>=0;--n){
							var o=this.tryEntries[n];
							if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){
								var i=o;
								break
							}
						}
						i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);
						var a=i?i.completion:{};
						return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,h):this.complete(a)
					},complete:function(t,e){
						if("throw"===t.type)
							throw t.arg;
						return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h
					}
				},t
			}
			function a(t,e,r,n,o,i,a){
				try{
					var c=t[i](a),u=c.value
				}catch(t){
					return void r(t)
				}
				c.done?e(u):Promise.resolve(u).then(n,o)
			}
			function c(t){
				return function(){
					var e=this,r=arguments;
					return new Promise((function(n,o){
						var i=t.apply(e,r);
						function c(t){
							a(i,n,o,c,u,"next",t)
						}
						function u(t){
							a(i,n,o,c,u,"throw",t)
						}
						c(undefined)
					}))
				}
			}
			function u(t,e){
				var r=Object.keys(t);
				return r
			}
			function s(t){
				for(var e=1;e<arguments.length;e++){
					var r=null!=arguments[e]?arguments[e]:{};
					e%2?u(Object(r),!0).forEach((function(e){
						l(t,e,r[e])
					})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(e){
						Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))
					}))
				}
				return t
			}
			function l(t,e,r){
				return e in t?Object.defineProperty(t,e,{}):t[e]=r,t
			}
			function f(t,e){
				if(null==t)
					return{};
				var r,n,o=function(t,e){
					if(null==t)
						return{};
					var r,n,o={},i=Object.keys(t);
					for(n=0;n<i.length;n++)
						r=i[n],e.indexOf(r)>=0||(o[r]=t[r]);
					return o
				}(t,e);
				if(Object.getOwnPropertySymbols){
					var i=Object.getOwnPropertySymbols(t);
					for(n=0;n<i.length;n++)
						r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])
				}
				return o
			}
			var h=r(187),p=r(549),y=r(106),d=r(185).log,v=r(313),g=r(214).defaultOEM,m=r(581),w=m.defaultOptions,b=m.spawnWorker,x=m.terminateWorker,L=m.onMessage,O=m.loadImage,E=m.send,j=0;
			t.exports=function(){
				var t=arguments.length>0&&undefined!==arguments[0]?arguments[0]:{},e=v("Worker",j),r=h(s(s({},w),t)),n=r.logger,a=r.errorHandler,u=f(r,o),l={},m={},S=b(u);
				j+=1;
				var k=function(t,e){
					l[t]=e
				},_=function(t,e){
					m[t]=e
				},P=function(t){
					var r=t.id,n=t.action,o=t.payload;
					return new Promise((function(t,i){
						d("[".concat(e,"]:Start").concat(r,",action=").concat(n)),k(n,t),_(n,i),E(S,{
							workerId:e,jobId:r,action:n,payload:o
						})
					}))
				},N=function(t){
					return P(y({
						id:t,action:"load",payload:{
							options:u
						}
					}))
				},A=function(t,e,r){
					return P(y({
						id:r,action:"FS",payload:{
							method:"writeFile",args:[t,e]
						}
					}))
				},T=function(t,e){
					return P(y({
						id:e,action:"FS",payload:{
							method:"readFile",args:[t,{
								encoding:"utf8"
							}]
						}
					}))
				},G=function(t,e){
					return P(y({
						id:e,action:"FS",payload:{
							method:"unlink",args:[t]
						}
					}))
				},I=function(t,e,r){
					return P(y({
						id:r,action:"FS",payload:{
							method:t,args:e
						}
					}))
				},F=function(){
					var t=arguments.length>0&&undefined!==arguments[0]?arguments[0]:"eng",e=arguments.length>1?arguments[1]:undefined;
					return P(y({
						id:e,action:"loadLanguage",payload:{
							langs:t,options:u
						}
					}))
				},R=function(){
					var t=arguments.length>0&&undefined!==arguments[0]?arguments[0]:"eng",e=arguments.length>1&&undefined!==arguments[1]?arguments[1]:g,r=arguments.length>2?arguments[2]:undefined;
					return P(y({
						id:r,action:"initialize",payload:{
							langs:t,oem:e
						}
					}))
				},D=function(){
					var t=arguments.length>0&&undefined!==arguments[0]?arguments[0]:{},e=arguments.length>1?arguments[1]:undefined;
					return P(y({
						id:e,action:"setParameters",payload:{
							params:t
						}
					}))
				},M=function(){
					var t=c(i().mark((function t(e){
						var r,n,o=arguments;
						return i().wrap((function(t){
							for(;;)
								switch(t.prev=t.next){
								case 0:
									return r=o.length>1&&undefined!==o[1]?o[1]:{},n=o.length>2?o[2]:undefined,t.t0=P,t.t1=y,t.t2=n,t.next=7,O(e);
								case 7:
									return t.t3=t.sent,t.t4=r,t.t5={
										image:t.t3,options:t.t4
									},t.t6={
										id:t.t2,action:"recognize",payload:t.t5
									},t.t7=(0,t.t1)(t.t6),t.abrupt("return",(0,t.t0)(t.t7));
								case 13:
								case"end":
									return t.stop()
								}
						}),t)
					})));
					return function(e){
						return t.apply(this,arguments)
					}
				}(),U=function(){
					var t=arguments.length>0&&undefined!==arguments[0]?arguments[0]:"Tesseract OCR Result",e=arguments.length>1&&undefined!==arguments[1]&&arguments[1],r=arguments.length>2?arguments[2]:undefined;
					return P(y({
						id:r,action:"getPDF",payload:{
							title:t,textonly:e
						}
					}))
				},C=function(){
					var t=c(i().mark((function t(e,r){
						return i().wrap((function(t){
							for(;;)
								switch(t.prev=t.next){
								case 0:
									return t.t0=P,t.t1=y,t.t2=r,t.next=5,O(e);
								case 5:
									return t.t3=t.sent,t.t4={
										image:t.t3
									},t.t5={
										id:t.t2,action:"detect",payload:t.t4
									},t.t6=(0,t.t1)(t.t5),t.abrupt("return",(0,t.t0)(t.t6));
								case 10:
								case"end":
									return t.stop()
								}
						}),t)
					})));
					return function(e,r){
						return t.apply(this,arguments)
					}
				}(),Y=function(){
					var t=c(i().mark((function t(){
						return i().wrap((function(t){
							for(;;)
								switch(t.prev=t.next){
								case 0:
									return null!==S&&(x(S),S=null),t.abrupt("return",Promise.resolve());
								case 2:
								case"end":
									return t.stop()
								}
						}),t)
					})));
					return function(){
						return t.apply(this,arguments)
					}
				}();
				return L(S,(function(t){
					var e=t.workerId,r=t.jobId,o=t.status,i=t.action,c=t.data;
					if("resolve"===o){
						d("[".concat(e,"]:Complete").concat(r));
						var u=c;
						"recognize"===i?u=p(c):"getPDF"===i&&(u=Array.from(s(s({},c),{},{
							length:Object.keys(c).length
						}))),l[i]({
							jobId:r,data:u
						})
					}else if("reject"===o){
						if(m[i](c),!a)
							throw Error(c);
						a(c)
					}else
						"progress"===o&&n(s(s({},c),{},{
							userJobId:r
						}))
				})),{
					id:e,worker:S,setResolve:k,setReject:_,load:N,writeText:A,readText:T,removeFile:G,FS:I,loadLanguage:F,initialize:R,setParameters:D,recognize:M,getPDF:U,detect:C,terminate:Y
				}
			}
		},352:(t,e,r)=>{
			function n(t,e){
				var r=Object.keys(t);
				if(Object.getOwnPropertySymbols){
					var n=Object.getOwnPropertySymbols(t);
					e&&(n=n.filter((function(e){
						return Object.getOwnPropertyDescriptor(t,e).enumerable
					}))),r.push.apply(r,n)
				}
				return r
			}
			function o(t,e,r){
				return e in t?Object.defineProperty(t,e,{}):t[e]=r,t
			}
			r(760);
			var i=r(936),a=r(311),c=r(793),u=r(5),s=r(847),l=r(711),f=r(185).setLogging;
			t.exports=function(t){
				for(var e=1;e<arguments.length;e++){
					var r=null!=arguments[e]?arguments[e]:{};
					e%2?n(Object(r),!0).forEach((function(e){
						o(t,e,r[e])
					})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(e){
						Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))
					}))
				}
				return t
			}({},c)
		},549:t=>{
			function e(t,e){
				var r=Object.keys(t);
				if(Object.getOwnPropertySymbols){
					var n=Object.getOwnPropertySymbols(t);
					e&&(n=n.filter((function(e){
						return Object.getOwnPropertyDescriptor(t,e).enumerable
					}))),r.push.apply(r,n)
				}
				return r
			}
			function r(t){
				for(var r=1;r<arguments.length;r++){
					var o=null!=arguments[r]?arguments[r]:{};
					r%2?e(Object(o),!0).forEach((function(e){
						n(t,e,o[e])
					})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):e(Object(o)).forEach((function(e){
						Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))
					}))
				}
				return t
			}
			function n(t,e,r){
				return e in t?Object.defineProperty(t,e,{}):t[e]=r,t
			}
			t.exports=function(t){
				var e=[],n=[],o=[],i=[],a=[];
				return t.blocks.forEach((function(){})),r(r({},t),{},{})
			}
		},129:(t,e,r)=>{
			function n(){}
			t.exports=function(){}
		},313:t=>{
			t.exports=function(t,e){
				return"".concat(t,"-").concat(e,"-").concat(Math.random().toString(16).slice(3,8))
			}
		},185:function(t,e){
			var r=this,n=!1;
			e.logging=n,e.setLogging=function(t){
				n=t
			},e.log=function(){
				for(var t=arguments.length,e=new Array(t),o=0;o<t;o++)
					e[o]=arguments[o];
				return n?console.log.apply(r,e):null
			}
		},187:(t,e,r)=>{
			function n(t,e){
				var r=Object.keys(t);
				if(Object.getOwnPropertySymbols){
					var n=Object.getOwnPropertySymbols(t);
					e&&(n=n.filter((function(e){
						return Object.getOwnPropertyDescriptor(t,e).enumerable
					}))),r.push.apply(r,n)
				}
				return r
			}
			function o(t,e,r){
				return e in t?Object.defineProperty(t,e,{
					value:r,enumerable:!0,configurable:!0,writable:!0
				}):t[e]=r,t
			}
			var i="browser"===r(129)("type")?r(927):function(t){
				return t
			}
			;
			t.exports=function(t){
				var e=function(t){
					for(var e=1;e<arguments.length;e++){
						var r=null!=arguments[e]?arguments[e]:{};
						e%2?n(Object(r),!0).forEach((function(e){
							o(t,e,r[e])
						})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(e){
							Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))
						}))
					}
					return t
				}({},t);
				return["corePath","workerPath","langPath"].forEach((function(r){
					t[r]&&(e[r]=i(e[r]))
				})),e
			}
		},854:(t,e,r)=>{
			function n(t,e){
				var r=Object.keys(t);
				if(Object.getOwnPropertySymbols){
					var n=Object.getOwnPropertySymbols(t);
					e&&(n=n.filter((function(e){
						return Object.getOwnPropertyDescriptor(t,e).enumerable
					}))),r.push.apply(r,n)
				}
				return r
			}
			function o(t){
				for(var e=1;e<arguments.length;e++){
					var r=null!=arguments[e]?arguments[e]:{};
					e%2?n(Object(r),!0).forEach((function(e){
						i(t,e,r[e])
					})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(e){
						Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))
					}))
				}
				return t
			}
			function i(t,e,r){
				return e in t?Object.defineProperty(t,e,{
					value:r,enumerable:!0,configurable:!0,writable:!0
				}):t[e]=r,t
			}
			var a=r(927),c=r(147).version,u=r(341);
			t.exports=o(o({},u),{},{
				workerPath:"undefined"!=typeof process&&"development"===process.env.TESS_ENV?a("/dist/worker.dev.js?nocache=".concat(Math.random().toString(36).slice(3))):"https://unpkg.com/tesseract.js@v".concat(c,"/dist/worker.min.js"),corePath:null
			})
		},581:(t,e,r)=>{
			var n=r(854),o=r(676),i=r(100),a=r(202),c=r(772),u=r(931);
			t.exports={
				defaultOptions:n,spawnWorker:o,terminateWorker:i,onMessage:a,send:c,loadImage:u
			}
		},931:(t,e,r)=>{
			function n(t){
				return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){
					return typeof t
				}
				:function(t){
					return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t
				},n(t)
			}
			function o(){
				o=function(){
					return t
				}
				;
				var t={},e=Object.prototype,r=e.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";
				function s(t,e,r){
					return Object.defineProperty(t,e,{
						value:r,enumerable:!0,configurable:!0,writable:!0
					}),t[e]
				}
				try{
					s({},"")
				}catch(t){
					s=function(t,e,r){
						return t[e]=r
					}
				}
				function l(t,e,r,n){
					var o=e&&e.prototype instanceof p?e:p,i=Object.create(o.prototype),a=new j(n||[]);
					return i._invoke=function(t,e,r){
						var n="suspendedStart";
						return function(o,i){
							for(r.method=o,r.arg=i;;){
								var a=r.delegate;
								n="executing";
								var u=f(t,e,r);
								if("normal"===u.type){
									if(n=r.done?"completed":"suspendedYield",u.arg===h)
										continue;
									return{
										value:u.arg,done:r.done
									}
								}
								"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)
							}
						}
					}(t,r,a),i
				}
				function f(t,e,r){
					try{
						return{
							type:"normal",arg:t.call(e,r)
						}
					}catch(t){
						return{
							type:"throw",arg:t
						}
					}
				}
				t.wrap=l;
				var h={};
				function p(){}
				function y(){}
				function d(){}
				var v={};
				s(v,a,(function(){
					return this
				}));
				var g=Object.getPrototypeOf,m=g&&g(g(S([])));
				m&&m!==e&&r.call(m,a)&&(v=m);
				var w=d.prototype=p.prototype=Object.create(v);
				function b(t){
					["next","throw","return"].forEach((function(e){
						s(t,e,(function(t){
							return this._invoke(e,t)
						}))
					}))
				}
				function x(){}
				function L(){}
				function O(){}
				function E(t){
					var e=t.completion||{};
					e.type="normal",delete e.arg,t.completion=e
				}
				function j(t){
					this.tryEntries=[{
						tryLoc:"root"
					}],t.forEach(O,this),this.reset(!0)
				}
				function S(t){
					return{}
				}
				function k(){
					return{}
				}
				return y.prototype=d,s(w,"constructor",d),s(d,"constructor",y),y.displayName=s(d,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){
					var e="function"==typeof t&&t.constructor;
					return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))
				},t.mark=function(t){
					return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,s(t,u,"GeneratorFunction")),t.prototype=Object.create(w),t
				},t.awrap=function(t){
					return{
						__await:t
					}
				},b(x.prototype),s(x.prototype,c,(function(){
					return this
				})),t.AsyncIterator=x,t.async=function(e,r,n,o,i){
					undefined===i&&(i=Promise);
					var a=new x(l(e,r,n,o),i);
					return t.isGeneratorFunction(r)?a:a.next().then((function(t){
						return t.done?t.value:a.next()
					}))
				},b(w),s(w,u,"Generator"),s(w,a,(function(){
					return this
				})),s(w,"toString",(function(){
					return"[object Generator]"
				})),t.keys=function(t){
					var e=[];
					for(var r in t)
						e.push(r);
					return e.reverse(),function r(){
						for(;e.length;){
							var n=e.pop();
							if(n in t)
								return r.value=n,r.done=!1,r
						}
						return r.done=!0,r
					}
				},t.values=S,j.prototype={
					constructor:j,reset:function(t){
						if(this.prev=0,this.next=0,this.sent=this._sent=undefined,this.done=!1,this.delegate=null,this.method="next",this.arg=undefined,this.tryEntries.forEach(E),!t)
							for(var e in this)
								"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=undefined)
					},stop:function(){
						this.done=!0;
						var t=this.tryEntries[0].completion;
						if("throw"===t.type)
							throw t.arg;
						return this.rval
					},abrupt:function(t,e){
						for(var n=this.tryEntries.length-1;n>=0;--n){
							var o=this.tryEntries[n];
							if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){
								var i=o;
								break
							}
						}
						i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);
						var a=i?i.completion:{};
						return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,h):this.complete(a)
					},complete:function(t,e){
						if("throw"===t.type)
							throw t.arg;
						return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h
					},finish:function(t){
						for(var e=this.tryEntries.length-1;e>=0;--e){
							var r=this.tryEntries[e];
							if(r.finallyLoc===t)
								return this.complete(r.completion,r.afterLoc),E(r),h
						}
					},catch:function(){}
				},t
			}
			function i(t,e,r,n,o,i,a){
				try{
					var c=t[i](a),u=c.value
				}catch(t){
					return void r(t)
				}
				c.done?e(u):Promise.resolve(u).then(n,o)
			}
			function a(t){
				return function(){
					var e=this,r=arguments;
					return new Promise((function(n,o){
						var a=t.apply(e,r);
						function c(t){
							i(a,n,o,c,u,"next",t)
						}
						function u(t){
							i(a,n,o,c,u,"throw",t)
						}
						c(undefined)
					}))
				}
			}
			var c=r(927),u=function(){},s=function(){
				var t=a(o().mark((function t(e){
					var r,n;
					return o().wrap((function(t){
						for(;;)
							switch(t.prev=t.next){
							case 0:
								if(r=e,undefined!==e){
									t.next=3;
									break
								}
								return t.abrupt("return","undefined");
							case 3:
								if("string"!=typeof e){
									t.next=16;
									break
								}
								if(!/data:image\/([a-zA-Z]*);base64,([^"]*)/.test(e)){
									t.next=8;
									break
								}
								r=atob(e.split(",")[1]).split("").map((function(t){
									return t.charCodeAt(0)
								})),t.next=14;
								break;
							case 8:
								return t.next=10,fetch(c(e));
							case 10:
								return n=t.sent,t.next=13,n.arrayBuffer();
							case 13:
								r=t.sent;
							case 14:
								t.next=34;
								break;
							case 16:
								if(!(e instanceof HTMLElement)){
									t.next=30;
									break
								}
								if("IMG"!==e.tagName){
									t.next=21;
									break
								}
								return t.next=20,s(e.src);
							case 20:
								r=t.sent;
							case 21:
								if("VIDEO"!==e.tagName){
									t.next=25;
									break
								}
								return t.next=24,s(e.poster);
							case 24:
								r=t.sent;
							case 25:
								if("CANVAS"!==e.tagName){
									t.next=28;
									break
								}
								return t.next=28,new Promise((function(t){
									e.toBlob(function(){
										var e=a(o().mark((function e(n){
											return o().wrap((function(e){
												for(;;)
													switch(e.prev=e.next){
													case 0:
														return e.next=2,u(n);
													case 2:
														r=e.sent,t();
													case 4:
													case"end":
														return e.stop()
													}
											}),e)
										})));
										return function(t){
											return e.apply(this,arguments)
										}
									}())
								}));
							case 28:
								t.next=34;
								break;
							case 30:
								if(!(e instanceof File||e instanceof Blob)){
									t.next=34;
									break
								}
								return t.next=33,u(e);
							case 33:
								r=t.sent;
							case 34:
								return t.abrupt("return",new Uint8Array(r));
							case 35:
							case"end":
								return t.stop()
							}
					}),t)
				})));
				return function(e){
					return t.apply(this,arguments)
				}
			}();
			t.exports=s
		},202:t=>{
			t.exports=function(t,e){
				t.onmessage=function(t){
					var r=t.data;
					e(r)
				}
			}
		},772:t=>{
			function e(t){
				return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){
					return typeof t
				}
				:function(t){
					return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t
				},e(t)
			}
			function r(){
				r=function(){
					return t
				}
				;
				var t={},n=Object.prototype,o=n.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";
				function s(t,e,r){
					return Object.defineProperty(t,e,{
						value:r,enumerable:!0,configurable:!0,writable:!0
					}),t[e]
				}
				function l(t,e,r,n){
					var o=e&&e.prototype instanceof p?e:p,i=Object.create(o.prototype),a=new j(n||[]);
					return i._invoke=function(t,e,r){
						var n="suspendedStart";
						return function(o,i){
							if("executing"===n)
								throw new Error("Generator is already running");
							if("completed"===n){
								if("throw"===o)
									throw i;
								return{
									value:undefined,done:!0
								}
							}
							for(r.method=o,r.arg=i;;){
								var a=r.delegate;
								if(a){
									var c=L(a,r);
									if(c){
										if(c===h)
											continue;
										return c
									}
								}
								if("next"===r.method)
									r.sent=r._sent=r.arg;
								else if("throw"===r.method){
									if("suspendedStart"===n)
										throw n="completed",r.arg;
									r.dispatchException(r.arg)
								}else
									"return"===r.method&&r.abrupt("return",r.arg);
								n="executing";
								var u=f(t,e,r);
								if("normal"===u.type){
									if(n=r.done?"completed":"suspendedYield",u.arg===h)
										continue;
									return{
										value:u.arg,done:r.done
									}
								}
								"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)
							}
						}
					}(t,r,a),i
				}
				function f(t,e,r){
					try{
						return{
							type:"normal",arg:t.call(e,r)
						}
					}catch(t){
						return{
							type:"throw",arg:t
						}
					}
				}
				t.wrap=l;
				var h={};
				let p=()=>{};
				let y=()=>{};
				let d=()=>{};
				var g=Object.getPrototypeOf,m=g&&g(g(S([])));
				m&&m!==n&&o.call(m,a)&&(v=m);
				var w=d.prototype=p.prototype=Object.create(v);
				b=t=>{
					s(t,"next",function(t){
						return this._invoke("next",t)
					})
					s(t,"throw",function(t){
						return this._invoke("throw",t)
					})
					s(t,"return",function(t){
						return this._invoke("return",t)
					})
				}
				function x(){}
				function L(){}
				function O(){}
				function E(t){
					let e=t.completion||{};
					e.type="normal";
					delete e.arg;
					t.completion=e;
				}
				let j=function(t){
					this.tryEntries=[{
						tryLoc:"root"
					}];
					t.forEach(O,this);
					this.reset(!0);
				}
				function S(t){
					if(t){
						var e=t[a];
						if(e)return e.call(t);
						if("function"==typeof t.next)return t;
						if(!isNaN(t.length)){
							let r=-1;
							let n=function(){
								for(;++r<t.length;)
									if(o.call(t,r))
										return arguments.callee.value=t[r],arguments.callee.done=!1,arguments.callee;
								return arguments.callee.value=undefined,arguments.callee.done=!0,arguments.callee
							};
							return n.next=n
						}
					}
					return{
						next:k
					}
				}
				function k(){
					return{
						value:undefined,done:!0
					}
				}
				return y.prototype=d,s(w,"constructor",d),s(d,"constructor",y),y.displayName=s(d,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){
					var e="function"==typeof t&&t.constructor;
					return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))
				},t.mark=function(t){
					return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,s(t,u,"GeneratorFunction")),t.prototype=Object.create(w),t
				},t.awrap=function(t){
					return{
						__await:t
					}
				},b(x.prototype),s(x.prototype,c,(function(){
					return this
				})),t.AsyncIterator=x,t.async=function(e,r,n,o,i){
					undefined===i&&(i=Promise);
					var a=new x(l(e,r,n,o),i);
					return t.isGeneratorFunction(r)?a:a.next().then((function(t){
						return t.done?t.value:a.next()
					}))
				},b(w),s(w,u,"Generator"),s(w,a,(function(){
					return this
				})),s(w,"toString",(function(){
					return"[object Generator]"
				})),t.keys=function(t){
					var e=[];
					for(var r in t)
						e.push(r);
					return e.reverse(),function r(){
						for(;e.length;){
							var n=e.pop();
							if(n in t)
								return r.value=n,r.done=!1,r
						}
						return r.done=!0,r
					}
				},t.values=S,j.prototype={
					constructor:j,reset:function(t){
						if(this.prev=0,this.next=0,this.sent=this._sent=undefined,this.done=!1,this.delegate=null,this.method="next",this.arg=undefined,this.tryEntries.forEach(E),!t)
							for(var e in this)
								"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=undefined)
					},stop:function(){
						this.done=!0;
						var t=this.tryEntries[0].completion;
						if("throw"===t.type)
							throw t.arg;
						return this.rval
					}
				},t
			}
			function n(t,e,r,n,o,i,a){
				try{
					var c=t[i](a),u=c.value
				}catch(t){
					return void r(t)
				}
				c.done?e(u):Promise.resolve(u).then(n,o)
			}
			t.exports=(()=>{
				let t=r().mark(function(e,n){
					return r().wrap(t=>{
						for(;;)switch(t.prev=t.next){
							case 0:
							e.postMessage(n);
							case 1:
							case"end":
							return t.stop()
						}
					},arguments.callee);
				});
				var e=function(){
					return new Promise((o,i)=>{
						let a=t.apply(this,arguments);
						let c=t=>void n(a,o,i,c,u,"next",t);
						let u=t=>void n(a,o,i,c,u,"throw",t);
						n(a,o,i,c,u,"next");
					})
				};
				return function(t,r){
					return e.apply(this,arguments)
				}
			})()
		},676:t=>t.exports=t=>(new Worker(t.workerBlobURL?URL.createObjectURL(new Blob(['importScripts("'+t.workerPath+'");'],{
			type:"application/javascript"
		})):t.workerPath)),100:()=>{},147:t=>t.exports={
			version:"3.0.3",main:"src/index.js"
		}
	})[n].call(e[n].exports,e[n],e[n].exports,arguments.callee);
	return e[n].exports;
}

onerror=e=>alert(e);