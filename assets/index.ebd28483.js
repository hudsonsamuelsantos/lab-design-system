var pe=Object.defineProperty;var s=(r,e)=>pe(r,"name",{value:e,configurable:!0});import{G as ge,H as _e,I as ye,J as ve,K as me,L as Se,M as Ee,k as Oe,d as Re,w as S,c as be}from"./iframe.ddf8370a.js";import"./es.map.constructor.105e2ad9.js";function Ie(r,e){for(var t=0;t<e.length;t++){const n=e[t];if(typeof n!="string"&&!Array.isArray(n)){for(const i in n)if(i!=="default"&&!(i in r)){const o=Object.getOwnPropertyDescriptor(n,i);o&&Object.defineProperty(r,i,o.get?o:{enumerable:!0,get:()=>n[i]})}}}return Object.freeze(Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}))}s(Ie,"_mergeNamespaces");var Te=ge,we=_e;Te("toPrimitive");we();var Ae=ye,ke=ve,Ce=TypeError,Pe=s(function(r){if(Ae(this),r==="string"||r==="default")r="string";else if(r!=="number")throw Ce("Incorrect hint");return ke(this,r)},"dateToPrimitive$1"),De=me,Ne=Se,Me=Pe,Le=Ee,X=Le("toPrimitive"),z=Date.prototype;De(z,X)||Ne(z,X,Me);var Q;function je(r,e){return e||(e=r.slice(0)),Object.freeze(Object.defineProperties(r,{raw:{value:Object.freeze(e)}}))}s(je,"_taggedTemplateLiteral");function Ue(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}s(Ue,"_classCallCheck$2");function J(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}s(J,"_defineProperties$2");function Ge(r,e,t){return e&&J(r.prototype,e),t&&J(r,t),Object.defineProperty(r,"prototype",{writable:!1}),r}s(Ge,"_createClass$2");var Ye=s(function(){return Math.random().toString(16).slice(2)},"generateRandomId"),xe=function(){function r(){var e=this,t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.transport,i=t.async,o=i===void 0?!1:i;Ue(this,r),this.isAsync=void 0,this.sender=Ye(),this.events={},this.data={},this.transport=void 0,this.addPeerListener=Oe(function(u,a){e.addListener(u,a)},Re(Q||(Q=je([`
      channel.addPeerListener is deprecated
    `])))),this.isAsync=o,n&&(this.transport=n,this.transport.setHandler(function(u){return e.handleEvent(u)}))}return s(r,"Channel"),Ge(r,[{key:"hasTransport",get:s(function(){return!!this.transport},"get")},{key:"addListener",value:s(function(t,n){this.events[t]=this.events[t]||[],this.events[t].push(n)},"addListener")},{key:"emit",value:s(function(t){for(var n=this,i=arguments.length,o=new Array(i>1?i-1:0),u=1;u<i;u++)o[u-1]=arguments[u];var a={type:t,args:o,from:this.sender},l={};o.length>=1&&o[0]&&o[0].options&&(l=o[0].options);var f=s(function(){n.transport&&n.transport.send(a,l),n.handleEvent(a)},"handler");this.isAsync?setImmediate(f):f()},"emit")},{key:"last",value:s(function(t){return this.data[t]},"last")},{key:"eventNames",value:s(function(){return Object.keys(this.events)},"eventNames")},{key:"listenerCount",value:s(function(t){var n=this.listeners(t);return n?n.length:0},"listenerCount")},{key:"listeners",value:s(function(t){var n=this.events[t];return n||void 0},"listeners")},{key:"once",value:s(function(t,n){var i=this.onceListener(t,n);this.addListener(t,i)},"once")},{key:"removeAllListeners",value:s(function(t){t?this.events[t]&&delete this.events[t]:this.events={}},"removeAllListeners")},{key:"removeListener",value:s(function(t,n){var i=this.listeners(t);i&&(this.events[t]=i.filter(function(o){return o!==n}))},"removeListener")},{key:"on",value:s(function(t,n){this.addListener(t,n)},"on")},{key:"off",value:s(function(t,n){this.removeListener(t,n)},"off")},{key:"handleEvent",value:s(function(t){var n=this.listeners(t.type);n&&n.length&&n.forEach(function(i){i.apply(t,t.args)}),this.data[t.type]=t.args},"handleEvent")},{key:"onceListener",value:s(function(t,n){var i=this,o=s(function u(){return i.removeListener(t,u),n.apply(void 0,arguments)},"onceListener");return o},"onceListener")}]),r}();const Fe=xe;var Be=S.LOGLEVEL,T=S.console,k={trace:1,debug:2,info:3,warn:4,error:5,silent:10},We=Be,P=k[We]||k.info,F={trace:s(function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i];return P<=k.trace&&T.trace.apply(T,[e].concat(n))},"trace"),debug:s(function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i];return P<=k.debug&&T.debug.apply(T,[e].concat(n))},"debug"),info:s(function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i];return P<=k.info&&T.info.apply(T,[e].concat(n))},"info"),warn:s(function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i];return P<=k.warn&&T.warn.apply(T,[e].concat(n))},"warn"),error:s(function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i];return P<=k.error&&T.error.apply(T,[e].concat(n))},"error"),log:s(function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i];return P<k.silent&&T.log.apply(T,[e].concat(n))},"log")},B=new Set,R=s(function(e){return function(t){if(!B.has(t)){B.add(t);for(var n=arguments.length,i=new Array(n>1?n-1:0),o=1;o<n;o++)i[o-1]=arguments[o];return F[e].apply(F,[t].concat(i))}}},"once");R.clear=function(){return B.clear()};R.trace=R("trace");R.debug=R("debug");R.info=R("info");R.warn=R("warn");R.error=R("error");R.log=R("log");function He(){var r={setHandler:s(function(){},"setHandler"),send:s(function(){},"send")};return new Fe({transport:r})}s(He,"mockChannel");var W;(function(r){r.TAB="tab",r.PANEL="panel",r.TOOL="tool",r.TOOLEXTRA="toolextra",r.PREVIEW="preview",r.NOTES_ELEMENT="notes-element"})(W||(W={}));function q(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}s(q,"_defineProperties$1");function Ve(r,e,t){return e&&q(r.prototype,e),t&&q(r,t),Object.defineProperty(r,"prototype",{writable:!1}),r}s(Ve,"_createClass$1");function $e(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}s($e,"_classCallCheck$1");var Ke=Ve(s(function r(){var e=this;$e(this,r),this.loaders={},this.elements={},this.config={},this.channel=void 0,this.serverChannel=void 0,this.promise=void 0,this.resolve=void 0,this.getChannel=function(){return e.channel||e.setChannel(He()),e.channel},this.getServerChannel=function(){if(!e.serverChannel)throw new Error("Accessing non-existent serverChannel");return e.serverChannel},this.ready=function(){return e.promise},this.hasChannel=function(){return!!e.channel},this.hasServerChannel=function(){return!!e.serverChannel},this.setChannel=function(t){e.channel=t,e.resolve()},this.setServerChannel=function(t){e.serverChannel=t},this.getElements=function(t){return e.elements[t]||(e.elements[t]={}),e.elements[t]},this.addPanel=function(t,n){e.add(t,Object.assign({type:W.PANEL},n))},this.add=function(t,n){var i=n.type,o=e.getElements(i);o[t]=Object.assign({id:t},n)},this.setConfig=function(t){Object.assign(e.config,t)},this.getConfig=function(){return e.config},this.register=function(t,n){e.loaders[t]&&F.warn("".concat(t," was loaded twice, this could have bad side-effects")),e.loaders[t]=n},this.loadAddons=function(t){Object.values(e.loaders).forEach(function(n){return n(t)})},this.promise=new Promise(function(t){e.resolve=function(){return t(e.getChannel())}})},"AddonStore")),j="__STORYBOOK_ADDONS";function Xe(){return S[j]||(S[j]=new Ke),S[j]}s(Xe,"getAddonsStore");var ze=Xe(),_;(function(r){r.CHANNEL_CREATED="channelCreated",r.CONFIG_ERROR="configError",r.STORY_INDEX_INVALIDATED="storyIndexInvalidated",r.STORY_SPECIFIED="storySpecified",r.SET_STORIES="setStories",r.SET_CURRENT_STORY="setCurrentStory",r.CURRENT_STORY_WAS_SET="currentStoryWasSet",r.FORCE_RE_RENDER="forceReRender",r.FORCE_REMOUNT="forceRemount",r.PRELOAD_STORIES="preloadStories",r.STORY_PREPARED="storyPrepared",r.STORY_CHANGED="storyChanged",r.STORY_UNCHANGED="storyUnchanged",r.STORY_RENDERED="storyRendered",r.STORY_MISSING="storyMissing",r.STORY_ERRORED="storyErrored",r.STORY_THREW_EXCEPTION="storyThrewException",r.STORY_RENDER_PHASE_CHANGED="storyRenderPhaseChanged",r.UPDATE_STORY_ARGS="updateStoryArgs",r.STORY_ARGS_UPDATED="storyArgsUpdated",r.RESET_STORY_ARGS="resetStoryArgs",r.SET_GLOBALS="setGlobals",r.UPDATE_GLOBALS="updateGlobals",r.GLOBALS_UPDATED="globalsUpdated",r.REGISTER_SUBSCRIPTION="registerSubscription",r.PREVIEW_KEYDOWN="previewKeydown",r.SELECT_STORY="selectStory",r.STORIES_COLLAPSE_ALL="storiesCollapseAll",r.STORIES_EXPAND_ALL="storiesExpandAll",r.DOCS_RENDERED="docsRendered",r.SHARED_STATE_CHANGED="sharedStateChanged",r.SHARED_STATE_SET="sharedStateSet",r.NAVIGATE_URL="navigateUrl",r.UPDATE_QUERY_PARAMS="updateQueryParams"})(_||(_={}));_.CHANNEL_CREATED;_.CONFIG_ERROR;_.STORY_INDEX_INVALIDATED;_.STORY_SPECIFIED;_.SET_STORIES;var Qe=_.SET_CURRENT_STORY;_.CURRENT_STORY_WAS_SET;_.FORCE_RE_RENDER;var Z=_.FORCE_REMOUNT;_.STORY_PREPARED;_.STORY_CHANGED;_.STORY_UNCHANGED;_.PRELOAD_STORIES;_.STORY_RENDERED;_.STORY_MISSING;_.STORY_ERRORED;_.STORY_THREW_EXCEPTION;var Je=_.STORY_RENDER_PHASE_CHANGED;_.UPDATE_STORY_ARGS;_.STORY_ARGS_UPDATED;_.RESET_STORY_ARGS;_.SET_GLOBALS;_.UPDATE_GLOBALS;_.GLOBALS_UPDATED;_.REGISTER_SUBSCRIPTION;_.PREVIEW_KEYDOWN;_.SELECT_STORY;_.STORIES_COLLAPSE_ALL;_.STORIES_EXPAND_ALL;_.DOCS_RENDERED;_.SHARED_STATE_CHANGED;_.SHARED_STATE_SET;_.NAVIGATE_URL;_.UPDATE_QUERY_PARAMS;var qe=new Error("ignoredException"),b;(function(r){r.DONE="done",r.ERROR="error",r.ACTIVE="active",r.WAITING="waiting"})(b||(b={}));var U;function D(r){return D=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},D(r)}s(D,"_typeof");function Ze(r,e){if(r==null)return{};var t=et(r,e),n,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(r);for(i=0;i<o.length;i++)n=o[i],!(e.indexOf(n)>=0)&&(!Object.prototype.propertyIsEnumerable.call(r,n)||(t[n]=r[n]))}return t}s(Ze,"_objectWithoutProperties");function et(r,e){if(r==null)return{};var t={},n=Object.keys(r),i,o;for(o=0;o<n.length;o++)i=n[o],!(e.indexOf(i)>=0)&&(t[i]=r[i]);return t}s(et,"_objectWithoutPropertiesLoose");function tt(r){var e=nt(r,"string");return D(e)==="symbol"?e:String(e)}s(tt,"_toPropertyKey");function nt(r,e){if(D(r)!=="object"||r===null)return r;var t=r[Symbol.toPrimitive];if(t!==void 0){var n=t.call(r,e||"default");if(D(n)!=="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(r)}s(nt,"_toPrimitive");function L(r){return ot(r)||it(r)||ae(r)||rt()}s(L,"_toConsumableArray");function rt(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}s(rt,"_nonIterableSpread");function it(r){if(typeof Symbol<"u"&&r[Symbol.iterator]!=null||r["@@iterator"]!=null)return Array.from(r)}s(it,"_iterableToArray");function ot(r){if(Array.isArray(r))return H(r)}s(ot,"_arrayWithoutHoles");function G(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}s(G,"_defineProperty$1");function at(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}s(at,"_classCallCheck");function ee(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}s(ee,"_defineProperties");function st(r,e,t){return e&&ee(r.prototype,e),t&&ee(r,t),Object.defineProperty(r,"prototype",{writable:!1}),r}s(st,"_createClass");function oe(r,e){return ct(r)||lt(r,e)||ae(r,e)||ut()}s(oe,"_slicedToArray");function ut(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}s(ut,"_nonIterableRest");function ae(r,e){if(!!r){if(typeof r=="string")return H(r,e);var t=Object.prototype.toString.call(r).slice(8,-1);if(t==="Object"&&r.constructor&&(t=r.constructor.name),t==="Map"||t==="Set")return Array.from(r);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return H(r,e)}}s(ae,"_unsupportedIterableToArray");function H(r,e){(e==null||e>r.length)&&(e=r.length);for(var t=0,n=new Array(e);t<e;t++)n[t]=r[t];return n}s(H,"_arrayLikeToArray");function lt(r,e){var t=r==null?null:typeof Symbol<"u"&&r[Symbol.iterator]||r["@@iterator"];if(t!=null){var n=[],i=!0,o=!1,u,a;try{for(t=t.call(r);!(i=(u=t.next()).done)&&(n.push(u.value),!(e&&n.length===e));i=!0);}catch(l){o=!0,a=l}finally{try{!i&&t.return!=null&&t.return()}finally{if(o)throw a}}return n}}s(lt,"_iterableToArrayLimit");function ct(r){if(Array.isArray(r))return r}s(ct,"_arrayWithHoles");var A={CALL:"instrumenter/call",SYNC:"instrumenter/sync",START:"instrumenter/start",BACK:"instrumenter/back",GOTO:"instrumenter/goto",NEXT:"instrumenter/next",END:"instrumenter/end"},se=((U=S.FEATURES)===null||U===void 0?void 0:U.interactionsDebugger)!==!0,te={debugger:!se,start:!1,back:!1,goto:!1,next:!1,end:!1},ne=new Error("This function ran after the play function completed. Did you forget to `await` it?"),re=s(function(e){return Object.prototype.toString.call(e)==="[object Object]"},"isObject"),ft=s(function(e){return Object.prototype.toString.call(e)==="[object Module]"},"isModule"),dt=s(function(e){if(!re(e)&&!ft(e))return!1;if(e.constructor===void 0)return!0;var t=e.constructor.prototype;return!(!re(t)||Object.prototype.hasOwnProperty.call(t,"isPrototypeOf")===!1)},"isInstrumentable"),ht=s(function(e){try{return new e.constructor}catch{return{}}},"construct"),Y=s(function(){return{renderPhase:void 0,isDebugging:!1,isPlaying:!1,isLocked:!1,cursor:0,calls:[],shadowCalls:[],callRefsByResult:new Map,chainedCallIds:new Set,parentId:void 0,playUntil:void 0,resolvers:{},syncTimeout:void 0,forwardedException:void 0}},"getInitialState"),ie=s(function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,n=(t?e.shadowCalls:e.calls).filter(function(o){return o.retain});if(!!n.length){var i=new Map(Array.from(e.callRefsByResult.entries()).filter(function(o){var u=oe(o,2),a=u[1];return a.retain}));return{cursor:n.length,calls:n,callRefsByResult:i}}},"getRetainedState"),pt=function(){function r(){var e=this;at(this,r),this.channel=void 0,this.initialized=!1,this.state=void 0,this.channel=ze.getChannel(),this.state=S.window.parent.__STORYBOOK_ADDON_INTERACTIONS_INSTRUMENTER_STATE__||{};var t=s(function(f){var c=f.storyId,h=f.isPlaying,y=h===void 0?!0:h,g=f.isDebugging,d=g===void 0?!1:g,p=e.getState(c);e.setState(c,Object.assign({},Y(),ie(p,d),{shadowCalls:d?p.shadowCalls:[],chainedCallIds:d?p.chainedCallIds:new Set,playUntil:d?p.playUntil:void 0,isPlaying:y,isDebugging:d})),d||e.sync(c)},"resetState");this.channel.on(Z,t),this.channel.on(Je,function(l){var f=l.storyId,c=l.newPhase,h=e.getState(f),y=h.isDebugging,g=h.forwardedException;if(e.setState(f,{renderPhase:c}),c==="playing"&&t({storyId:f,isDebugging:y}),c==="played"&&(e.setState(f,{isLocked:!1,isPlaying:!1,isDebugging:!1,forwardedException:void 0}),g))throw g}),this.channel.on(Qe,function(){e.initialized?e.cleanup():e.initialized=!0});var n=s(function(f){var c=f.storyId,h=f.playUntil;e.getState(c).isDebugging||e.setState(c,function(g){var d=g.calls;return{calls:[],shadowCalls:d.map(function(p){return Object.assign({},p,{status:b.WAITING})}),isDebugging:!0}});var y=e.getLog(c);e.setState(c,function(g){var d,p=g.shadowCalls,m=p.findIndex(function(v){return v.id===y[0].callId});return{playUntil:h||((d=p.slice(0,m).filter(function(v){return v.interceptable}).slice(-1)[0])===null||d===void 0?void 0:d.id)}}),e.channel.emit(Z,{storyId:c,isDebugging:!0})},"start"),i=s(function(f){var c,h=f.storyId,y=e.getState(h),g=y.isDebugging,d=e.getLog(h),p=g?d.findIndex(function(m){var v=m.status;return v===b.WAITING}):d.length;n({storyId:h,playUntil:(c=d[p-2])===null||c===void 0?void 0:c.callId})},"back"),o=s(function(f){var c=f.storyId,h=f.callId,y=e.getState(c),g=y.calls,d=y.shadowCalls,p=y.resolvers,m=g.find(function(O){var C=O.id;return C===h}),v=d.find(function(O){var C=O.id;return C===h});if(!m&&v&&Object.values(p).length>0){var E,I=(E=e.getLog(c).find(function(O){return O.status===b.WAITING}))===null||E===void 0?void 0:E.callId;v.id!==I&&e.setState(c,{playUntil:v.id}),Object.values(p).forEach(function(O){return O()})}else n({storyId:c,playUntil:h})},"goto"),u=s(function(f){var c=f.storyId,h=e.getState(c),y=h.resolvers;if(Object.values(y).length>0)Object.values(y).forEach(function(p){return p()});else{var g,d=(g=e.getLog(c).find(function(p){return p.status===b.WAITING}))===null||g===void 0?void 0:g.callId;d?n({storyId:c,playUntil:d}):a({storyId:c})}},"next"),a=s(function(f){var c=f.storyId;e.setState(c,{playUntil:void 0,isDebugging:!1}),Object.values(e.getState(c).resolvers).forEach(function(h){return h()})},"end");this.channel.on(A.START,n),this.channel.on(A.BACK,i),this.channel.on(A.GOTO,o),this.channel.on(A.NEXT,u),this.channel.on(A.END,a)}return s(r,"Instrumenter"),st(r,[{key:"getState",value:s(function(t){return this.state[t]||Y()},"getState")},{key:"setState",value:s(function(t,n){var i=this.getState(t),o=typeof n=="function"?n(i):n;this.state=Object.assign({},this.state,G({},t,Object.assign({},i,o))),S.window.parent.__STORYBOOK_ADDON_INTERACTIONS_INSTRUMENTER_STATE__=this.state},"setState")},{key:"cleanup",value:s(function(){this.state=Object.entries(this.state).reduce(function(t,n){var i=oe(n,2),o=i[0],u=i[1],a=ie(u);return a&&(t[o]=Object.assign(Y(),a)),t},{}),this.channel.emit(A.SYNC,{controlStates:te,logItems:[]}),S.window.parent.__STORYBOOK_ADDON_INTERACTIONS_INSTRUMENTER_STATE__=this.state},"cleanup")},{key:"getLog",value:s(function(t){var n=this.getState(t),i=n.calls,o=n.shadowCalls,u=L(o);i.forEach(function(l,f){u[f]=l});var a=new Set;return u.reduceRight(function(l,f){return f.args.forEach(function(c){c!=null&&c.__callId__&&a.add(c.__callId__)}),f.path.forEach(function(c){c.__callId__&&a.add(c.__callId__)}),f.interceptable&&!a.has(f.id)&&(l.unshift({callId:f.id,status:f.status}),a.add(f.id)),l},[])},"getLog")},{key:"instrument",value:s(function(t,n){var i=this;if(!dt(t))return t;var o=n.mutate,u=o===void 0?!1:o,a=n.path,l=a===void 0?[]:a;return Object.keys(t).reduce(function(f,c){var h=t[c];return typeof h!="function"?(f[c]=i.instrument(h,Object.assign({},n,{path:l.concat(c)})),f):typeof h.__originalFn__=="function"?(f[c]=h,f):(f[c]=function(){for(var y=arguments.length,g=new Array(y),d=0;d<y;d++)g[d]=arguments[d];return i.track(c,h,g,n)},f[c].__originalFn__=h,Object.defineProperty(f[c],"name",{value:c,writable:!1}),Object.keys(h).length>0&&Object.assign(f[c],i.instrument(Object.assign({},h),Object.assign({},n,{path:l.concat(c)}))),f)},u?t:ht(t))},"instrument")},{key:"track",value:s(function(t,n,i,o){var u,a,l,f,c=(i==null||(u=i[0])===null||u===void 0?void 0:u.__storyId__)||((a=S.window.__STORYBOOK_PREVIEW__)===null||a===void 0||(l=a.urlStore)===null||l===void 0||(f=l.selection)===null||f===void 0?void 0:f.storyId),h=this.getState(c),y=h.cursor,g=h.parentId;this.setState(c,{cursor:y+1});var d="".concat(g||c," [").concat(y,"] ").concat(t),p=o.path,m=p===void 0?[]:p,v=o.intercept,E=v===void 0?!1:v,I=o.retain,O=I===void 0?!1:I,C=typeof E=="function"?E(t,m):E,K={id:d,parentId:g,storyId:c,cursor:y,path:m,method:t,args:i,interceptable:C,retain:O},he=(C?this.intercept:this.invoke).call(this,n,K,o);return this.instrument(he,Object.assign({},o,{mutate:!0,path:[{__callId__:K.id}]}))},"track")},{key:"intercept",value:s(function(t,n,i){var o=this,u=this.getState(n.storyId),a=u.chainedCallIds,l=u.isDebugging,f=u.playUntil,c=a.has(n.id);return!l||c||f?(f===n.id&&this.setState(n.storyId,{playUntil:void 0}),this.invoke(t,n,i)):new Promise(function(h){o.setState(n.storyId,function(y){var g=y.resolvers;return{isLocked:!1,resolvers:Object.assign({},g,G({},n.id,h))}})}).then(function(){return o.setState(n.storyId,function(h){var y=h.resolvers,g=n.id;y[g];var d=Ze(y,[g].map(tt));return{isLocked:!0,resolvers:d}}),o.invoke(t,n,i)})},"intercept")},{key:"invoke",value:s(function(t,n,i){var o=this,u=this.getState(n.storyId),a=u.callRefsByResult,l=u.forwardedException,f=u.renderPhase,c=Object.assign({},n,{args:n.args.map(function(d){if(a.has(d))return a.get(d);if(d instanceof S.window.HTMLElement){var p=d.prefix,m=d.localName,v=d.id,E=d.classList,I=d.innerText,O=Array.from(E);return{__element__:{prefix:p,localName:m,id:v,classNames:O,innerText:I}}}return d})});n.path.forEach(function(d){d!=null&&d.__callId__&&o.setState(n.storyId,function(p){var m=p.chainedCallIds;return{chainedCallIds:new Set(Array.from(m).concat(d.__callId__))}})});var h=s(function(p){if(p instanceof Error){var m=p.name,v=p.message,E=p.stack,I={name:m,message:v,stack:E};if(o.update(Object.assign({},c,{status:b.ERROR,exception:I})),o.setState(n.storyId,function(O){return{callRefsByResult:new Map([].concat(L(Array.from(O.callRefsByResult.entries())),[[p,{__callId__:n.id,retain:n.retain}]]))}}),n.interceptable&&p!==ne)throw qe;return o.setState(n.storyId,{forwardedException:p}),p}throw p},"handleException");try{if(l)throw this.setState(n.storyId,{forwardedException:void 0}),l;if(f==="played"&&!n.retain)throw ne;var y=i.getArgs?i.getArgs(n,this.getState(n.storyId)):n.args,g=t.apply(void 0,L(y.map(function(d){return typeof d!="function"||Object.keys(d).length?d:function(){var p=o.getState(n.storyId),m=p.cursor,v=p.parentId;o.setState(n.storyId,{cursor:0,parentId:n.id});var E=s(function(){return o.setState(n.storyId,{cursor:m,parentId:v})},"restore"),I=d.apply(void 0,arguments);return I instanceof Promise?I.then(E,E):E(),I}})));return g&&["object","function","symbol"].includes(D(g))&&this.setState(n.storyId,function(d){return{callRefsByResult:new Map([].concat(L(Array.from(d.callRefsByResult.entries())),[[g,{__callId__:n.id,retain:n.retain}]]))}}),this.update(Object.assign({},c,{status:g instanceof Promise?b.ACTIVE:b.DONE})),g instanceof Promise?g.then(function(d){return o.update(Object.assign({},c,{status:b.DONE})),d},h):g}catch(d){return h(d)}},"invoke")},{key:"update",value:s(function(t){var n=this;clearTimeout(this.getState(t.storyId).syncTimeout),this.channel.emit(A.CALL,t),this.setState(t.storyId,function(i){var o=i.calls,u=o.concat(t).reduce(function(a,l){return Object.assign(a,G({},l.id,l))},{});return{calls:Object.values(u).sort(function(a,l){return a.id.localeCompare(l.id,void 0,{numeric:!0})}),syncTimeout:setTimeout(function(){return n.sync(t.storyId)},0)}})},"update")},{key:"sync",value:s(function(t){var n=this.getState(t),i=n.isLocked,o=n.isPlaying,u=this.getLog(t),a=u.some(function(c){return c.status===b.ACTIVE});if(se||i||a||u.length===0){this.channel.emit(A.SYNC,{controlStates:te,logItems:u});return}var l=u.some(function(c){return[b.DONE,b.ERROR].includes(c.status)}),f={debugger:!0,start:l,back:l,goto:!0,next:o,end:o};this.channel.emit(A.SYNC,{controlStates:f,logItems:u})},"sync")}]),r}();function Tt(r){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};try{var t,n,i,o,u=!1,a=!1;if(((t=S.window.location)===null||t===void 0||(n=t.search)===null||n===void 0?void 0:n.indexOf("instrument=true"))!==-1?u=!0:((i=S.window.location)===null||i===void 0||(o=i.search)===null||o===void 0?void 0:o.indexOf("instrument=false"))!==-1&&(a=!0),S.window.parent===S.window&&!u||a)return r;S.window.__STORYBOOK_ADDON_INTERACTIONS_INSTRUMENTER__||(S.window.__STORYBOOK_ADDON_INTERACTIONS_INSTRUMENTER__=new pt);var l=S.window.__STORYBOOK_ADDON_INTERACTIONS_INSTRUMENTER__;return l.instrument(r,e)}catch(f){return R.warn(f),r}}s(Tt,"instrument");var w={};Object.defineProperty(w,"__esModule",{value:!0});var ue=w.spyOn=de=w.mocked=fe=w.fn=ce=w.ModuleMocker=void 0;function M(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}s(M,"_defineProperty");const x="mockConstructor",le=/[\s!-\/:-@\[-`{-~]/,gt=new RegExp(le.source,"g"),_t=new Set(["arguments","await","break","case","catch","class","const","continue","debugger","default","delete","do","else","enum","eval","export","extends","false","finally","for","function","if","implements","import","in","instanceof","interface","let","new","null","package","private","protected","public","return","static","super","switch","this","throw","true","try","typeof","var","void","while","with","yield"]);function yt(r,e){let t;switch(e){case 1:t=s(function(n){return r.apply(this,arguments)},"mockConstructor");break;case 2:t=s(function(n,i){return r.apply(this,arguments)},"mockConstructor");break;case 3:t=s(function(n,i,o){return r.apply(this,arguments)},"mockConstructor");break;case 4:t=s(function(n,i,o,u){return r.apply(this,arguments)},"mockConstructor");break;case 5:t=s(function(n,i,o,u,a){return r.apply(this,arguments)},"mockConstructor");break;case 6:t=s(function(n,i,o,u,a,l){return r.apply(this,arguments)},"mockConstructor");break;case 7:t=s(function(n,i,o,u,a,l,f){return r.apply(this,arguments)},"mockConstructor");break;case 8:t=s(function(n,i,o,u,a,l,f,c){return r.apply(this,arguments)},"mockConstructor");break;case 9:t=s(function(n,i,o,u,a,l,f,c,h){return r.apply(this,arguments)},"mockConstructor");break;default:t=s(function(){return r.apply(this,arguments)},"mockConstructor");break}return t}s(yt,"matchArity");function V(r){return Object.prototype.toString.apply(r).slice(8,-1)}s(V,"getObjectType");function vt(r){const e=V(r);return e==="Function"||e==="AsyncFunction"||e==="GeneratorFunction"?"function":Array.isArray(r)?"array":e==="Object"?"object":e==="Number"||e==="String"||e==="Boolean"||e==="Symbol"?"constant":e==="Map"||e==="WeakMap"||e==="Set"?"collection":e==="RegExp"?"regexp":r===void 0?"undefined":r===null?"null":null}s(vt,"getType");function mt(r,e){if(e==="arguments"||e==="caller"||e==="callee"||e==="name"||e==="length"){const t=V(r);return t==="Function"||t==="AsyncFunction"||t==="GeneratorFunction"}return e==="source"||e==="global"||e==="ignoreCase"||e==="multiline"?V(r)==="RegExp":!1}s(mt,"isReadonlyProp");class ${constructor(e){M(this,"_environmentGlobal",void 0),M(this,"_mockState",void 0),M(this,"_mockConfigRegistry",void 0),M(this,"_spyState",void 0),M(this,"_invocationCallCounter",void 0),this._environmentGlobal=e,this._mockState=new WeakMap,this._mockConfigRegistry=new WeakMap,this._spyState=new Set,this._invocationCallCounter=1}_getSlots(e){if(!e)return[];const t=new Set,n=this._environmentGlobal.Object.prototype,i=this._environmentGlobal.Function.prototype,o=this._environmentGlobal.RegExp.prototype,u=Object.prototype,a=Function.prototype,l=RegExp.prototype;for(;e!=null&&e!==n&&e!==i&&e!==o&&e!==u&&e!==a&&e!==l;){const f=Object.getOwnPropertyNames(e);for(let c=0;c<f.length;c++){const h=f[c];if(!mt(e,h)){const y=Object.getOwnPropertyDescriptor(e,h);(y!==void 0&&!y.get||e.__esModule)&&t.add(h)}}e=Object.getPrototypeOf(e)}return Array.from(t)}_ensureMockConfig(e){let t=this._mockConfigRegistry.get(e);return t||(t=this._defaultMockConfig(),this._mockConfigRegistry.set(e,t)),t}_ensureMockState(e){let t=this._mockState.get(e);return t||(t=this._defaultMockState(),this._mockState.set(e,t)),t.calls.length>0&&(t.lastCall=t.calls[t.calls.length-1]),t}_defaultMockConfig(){return{mockImpl:void 0,mockName:"jest.fn()",specificMockImpls:[],specificReturnValues:[]}}_defaultMockState(){return{calls:[],instances:[],invocationCallOrder:[],results:[]}}_makeComponent(e,t){if(e.type==="object")return new this._environmentGlobal.Object;if(e.type==="array")return new this._environmentGlobal.Array;if(e.type==="regexp")return new this._environmentGlobal.RegExp("");if(e.type==="constant"||e.type==="collection"||e.type==="null"||e.type==="undefined")return e.value;if(e.type==="function"){const n=e.members&&e.members.prototype&&e.members.prototype.members||{},i=this._getSlots(n),o=this,u=yt(function(...l){const f=o._ensureMockState(a),c=o._ensureMockConfig(a);f.instances.push(this),f.calls.push(l);const h={type:"incomplete",value:void 0};f.results.push(h),f.invocationCallOrder.push(o._invocationCallCounter++);let y,g,d=!1;try{y=(()=>{if(this instanceof a){i.forEach(v=>{if(n[v].type==="function"){const E=this[v];this[v]=o.generateFromMetadata(n[v]),this[v]._protoImpl=E}});const m=c.specificMockImpls.length?c.specificMockImpls.shift():c.mockImpl;return m&&m.apply(this,arguments)}let p=c.specificMockImpls.shift();if(p===void 0&&(p=c.mockImpl),p)return p.apply(this,arguments);if(a._protoImpl)return a._protoImpl.apply(this,arguments)})()}catch(p){throw g=p,d=!0,p}finally{h.type=d?"throw":"return",h.value=d?g:y}return y},e.length||0),a=this._createMockFunction(e,u);return a._isMockFunction=!0,a.getMockImplementation=()=>this._ensureMockConfig(a).mockImpl,typeof t=="function"&&this._spyState.add(t),this._mockState.set(a,this._defaultMockState()),this._mockConfigRegistry.set(a,this._defaultMockConfig()),Object.defineProperty(a,"mock",{configurable:!1,enumerable:!0,get:()=>this._ensureMockState(a),set:l=>this._mockState.set(a,l)}),a.mockClear=()=>(this._mockState.delete(a),a),a.mockReset=()=>(a.mockClear(),this._mockConfigRegistry.delete(a),a),a.mockRestore=()=>(a.mockReset(),t?t():void 0),a.mockReturnValueOnce=l=>a.mockImplementationOnce(()=>l),a.mockResolvedValueOnce=l=>a.mockImplementationOnce(()=>Promise.resolve(l)),a.mockRejectedValueOnce=l=>a.mockImplementationOnce(()=>Promise.reject(l)),a.mockReturnValue=l=>a.mockImplementation(()=>l),a.mockResolvedValue=l=>a.mockImplementation(()=>Promise.resolve(l)),a.mockRejectedValue=l=>a.mockImplementation(()=>Promise.reject(l)),a.mockImplementationOnce=l=>(this._ensureMockConfig(a).specificMockImpls.push(l),a),a.mockImplementation=l=>{const f=this._ensureMockConfig(a);return f.mockImpl=l,a},a.mockReturnThis=()=>a.mockImplementation(function(){return this}),a.mockName=l=>{if(l){const f=this._ensureMockConfig(a);f.mockName=l}return a},a.getMockName=()=>this._ensureMockConfig(a).mockName||"jest.fn()",e.mockImpl&&a.mockImplementation(e.mockImpl),a}else{const n=e.type||"undefined type";throw new Error("Unrecognized type "+n)}}_createMockFunction(e,t){let n=e.name;if(!n)return t;const i="bound ";let o="";if(n&&n.startsWith(i))do n=n.substring(i.length),o=".bind(null)";while(n&&n.startsWith(i));if(n===x)return t;(_t.has(n)||/^\d/.test(n))&&(n="$"+n),le.test(n)&&(n=n.replace(gt,"$"));const u="return function "+n+"() {return "+x+".apply(this,arguments);}"+o;return new this._environmentGlobal.Function(x,u)(t)}_generateMock(e,t,n){const i=this._makeComponent(e);return e.refID!=null&&(n[e.refID]=i),this._getSlots(e.members).forEach(o=>{const u=e.members&&e.members[o]||{};u.ref!=null?t.push(function(a){return()=>i[o]=n[a]}(u.ref)):i[o]=this._generateMock(u,t,n)}),e.type!=="undefined"&&e.type!=="null"&&i.prototype&&typeof i.prototype=="object"&&(i.prototype.constructor=i),i}generateFromMetadata(e){const t=[],n={},i=this._generateMock(e,t,n);return t.forEach(o=>o()),i}getMetadata(e,t){const n=t||new Map,i=n.get(e);if(i!=null)return{ref:i};const o=vt(e);if(!o)return null;const u={type:o};if(o==="constant"||o==="collection"||o==="undefined"||o==="null")return u.value=e,u;o==="function"&&(u.name=e.name,e._isMockFunction===!0&&(u.mockImpl=e.getMockImplementation())),u.refID=n.size,n.set(e,u.refID);let a=null;return o!=="array"&&this._getSlots(e).forEach(l=>{if(o==="function"&&e._isMockFunction===!0&&l.match(/^mock/))return;const f=this.getMetadata(e[l],n);f&&(a||(a={}),a[l]=f)}),a&&(u.members=a),u}isMockFunction(e){return!!e&&e._isMockFunction===!0}fn(e){const t=e?e.length:0,n=this._makeComponent({length:t,type:"function"});return e&&n.mockImplementation(e),n}spyOn(e,t,n){if(n)return this._spyOnProperty(e,t,n);if(typeof e!="object"&&typeof e!="function")throw new Error("Cannot spyOn on a primitive value; "+this._typeOf(e)+" given");const i=e[t];if(!this.isMockFunction(i)){if(typeof i!="function")throw new Error("Cannot spy the "+t+" property because it is not a function; "+this._typeOf(i)+" given instead");const o=Object.prototype.hasOwnProperty.call(e,t);let u=Object.getOwnPropertyDescriptor(e,t),a=Object.getPrototypeOf(e);for(;!u&&a!==null;)u=Object.getOwnPropertyDescriptor(a,t),a=Object.getPrototypeOf(a);let l;if(u&&u.get){const f=u.get;l=this._makeComponent({type:"function"},()=>{u.get=f,Object.defineProperty(e,t,u)}),u.get=()=>l,Object.defineProperty(e,t,u)}else l=this._makeComponent({type:"function"},()=>{o?e[t]=i:delete e[t]}),e[t]=l;l.mockImplementation(function(){return i.apply(this,arguments)})}return e[t]}_spyOnProperty(e,t,n="get"){if(typeof e!="object"&&typeof e!="function")throw new Error("Cannot spyOn on a primitive value; "+this._typeOf(e)+" given");if(!e)throw new Error("spyOn could not find an object to spy upon for "+t);if(!t)throw new Error("No property name supplied");let i=Object.getOwnPropertyDescriptor(e,t),o=Object.getPrototypeOf(e);for(;!i&&o!==null;)i=Object.getOwnPropertyDescriptor(o,t),o=Object.getPrototypeOf(o);if(!i)throw new Error(t+" property does not exist");if(!i.configurable)throw new Error(t+" is not declared configurable");if(!i[n])throw new Error("Property "+t+" does not have access type "+n);const u=i[n];if(!this.isMockFunction(u)){if(typeof u!="function")throw new Error("Cannot spy the "+t+" property because it is not a function; "+this._typeOf(u)+" given instead");i[n]=this._makeComponent({type:"function"},()=>{i[n]=u,Object.defineProperty(e,t,i)}),i[n].mockImplementation(function(){return u.apply(this,arguments)})}return Object.defineProperty(e,t,i),i[n]}clearAllMocks(){this._mockState=new WeakMap}resetAllMocks(){this._mockConfigRegistry=new WeakMap,this._mockState=new WeakMap}restoreAllMocks(){this._spyState.forEach(e=>e()),this._spyState=new Set}_typeOf(e){return e==null?""+e:typeof e}mocked(e,t=!1){return e}}s($,"ModuleMocker");var ce=w.ModuleMocker=$;const N=new $(be),St=N.fn.bind(N);var fe=w.fn=St;const Et=N.spyOn.bind(N);ue=w.spyOn=Et;const Ot=N.mocked.bind(N);var de=w.mocked=Ot;const wt=Ie({__proto__:null,get spyOn(){return ue},get mocked(){return de},get fn(){return fe},get ModuleMocker(){return ce},default:w},[w]);export{ce as M,Tt as i,wt as m};
//# sourceMappingURL=index.ebd28483.js.map
