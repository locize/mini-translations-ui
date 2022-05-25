/*! For license information please see 12.df61cb1c.chunk.js.LICENSE.txt */
(this["webpackJsonpmini-locize"]=this["webpackJsonpmini-locize"]||[]).push([[12],{126:function(t,e){},127:function(t,e){},453:function(t,e,r){"use strict";r.r(e),function(t,n){r.d(e,"js2tmx",(function(){return S})),r.d(e,"tmx2js",(function(){return v}));var a=r(205),i=r.n(a),o=r(125),s=r.n(o),c=r(114),u=r.n(c),l=r(119),p=r.n(l),f=r(55),m=r.n(f),h="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof t?t:"undefined"!==typeof self?self:{};function d(t,e){return t(e={exports:{}},e.exports),e.exports}var T=d((function(t,e){(function(){e.defaults={.1:{explicitCharkey:!1,trim:!0,normalize:!0,normalizeTags:!1,attrkey:"@",charkey:"#",explicitArray:!1,ignoreAttrs:!1,mergeAttrs:!1,explicitRoot:!1,validator:null,xmlns:!1,explicitChildren:!1,childkey:"@@",charsAsChildren:!1,includeWhiteChars:!1,async:!1,strict:!0,attrNameProcessors:null,attrValueProcessors:null,tagNameProcessors:null,valueProcessors:null,emptyTag:""},.2:{explicitCharkey:!1,trim:!1,normalize:!1,normalizeTags:!1,attrkey:"$",charkey:"_",explicitArray:!0,ignoreAttrs:!1,mergeAttrs:!1,explicitRoot:!0,validator:null,xmlns:!1,explicitChildren:!1,preserveChildrenOrder:!1,childkey:"$$",charsAsChildren:!1,includeWhiteChars:!1,async:!1,strict:!0,attrNameProcessors:null,attrValueProcessors:null,tagNameProcessors:null,valueProcessors:null,rootName:"root",xmldec:{version:"1.0",encoding:"UTF-8",standalone:!0},doctype:null,renderOpts:{pretty:!0,indent:"  ",newline:"\n"},headless:!1,chunkSize:1e4,emptyTag:"",cdata:!1}}}).call(h)})),g=(T.defaults,d((function(t,e){(function(){var t,r,n,a,o,s={}.hasOwnProperty;t=i.a,r=T.defaults,a=function(t){return"string"===typeof t&&(t.indexOf("&")>=0||t.indexOf(">")>=0||t.indexOf("<")>=0)},o=function(t){return"<![CDATA["+n(t)+"]]>"},n=function(t){return t.replace("]]>","]]]]><![CDATA[>")},e.Builder=function(){function e(t){var e,n,a;for(e in this.options={},n=r[.2])s.call(n,e)&&(a=n[e],this.options[e]=a);for(e in t)s.call(t,e)&&(a=t[e],this.options[e]=a)}return e.prototype.buildObject=function(e){var n,i,c,u,l,p;return n=this.options.attrkey,i=this.options.charkey,1===Object.keys(e).length&&this.options.rootName===r[.2].rootName?e=e[l=Object.keys(e)[0]]:l=this.options.rootName,p=this,c=function(t,e){var r,u,l,f,m,h;if("object"!==typeof e)p.options.cdata&&a(e)?t.raw(o(e)):t.txt(e);else if(Array.isArray(e)){for(f in e)if(s.call(e,f))for(m in u=e[f])l=u[m],t=c(t.ele(m),l).up()}else for(m in e)if(s.call(e,m))if(u=e[m],m===n){if("object"===typeof u)for(r in u)h=u[r],t=t.att(r,h)}else if(m===i)t=p.options.cdata&&a(u)?t.raw(o(u)):t.txt(u);else if(Array.isArray(u))for(f in u)s.call(u,f)&&(t="string"===typeof(l=u[f])?p.options.cdata&&a(l)?t.ele(m).raw(o(l)).up():t.ele(m,l).up():c(t.ele(m),l).up());else"object"===typeof u?t=c(t.ele(m),u).up():"string"===typeof u&&p.options.cdata&&a(u)?t=t.ele(m).raw(o(u)).up():(null==u&&(u=""),t=t.ele(m,u.toString()).up());return t},u=t.create(l,this.options.xmldec,this.options.doctype,{headless:this.options.headless,allowSurrogateChars:this.options.allowSurrogateChars}),c(u,e).end(this.options.renderOpts)},e}()}).call(h)}))),E=(g.Builder,d((function(t,e){!function(t){t.parser=function(t,e){return new a(t,e)},t.SAXParser=a,t.SAXStream=o,t.createStream=function(t,e){return new o(t,e)},t.MAX_BUFFER_LENGTH=65536;var e,r=["comment","sgmlDecl","textNode","tagName","doctype","procInstName","procInstBody","entity","attribName","attribValue","cdata","script"];function a(e,n){if(!(this instanceof a))return new a(e,n);var i=this;!function(t){for(var e=0,n=r.length;e<n;e++)t[r[e]]=""}(i),i.q=i.c="",i.bufferCheckPosition=t.MAX_BUFFER_LENGTH,i.opt=n||{},i.opt.lowercase=i.opt.lowercase||i.opt.lowercasetags,i.looseCase=i.opt.lowercase?"toLowerCase":"toUpperCase",i.tags=[],i.closed=i.closedRoot=i.sawRoot=!1,i.tag=i.error=null,i.strict=!!e,i.noscript=!(!e&&!i.opt.noscript),i.state=A.BEGIN,i.strictEntities=i.opt.strictEntities,i.ENTITIES=i.strictEntities?Object.create(t.XML_ENTITIES):Object.create(t.ENTITIES),i.attribList=[],i.opt.xmlns&&(i.ns=Object.create(p)),i.trackPosition=!1!==i.opt.position,i.trackPosition&&(i.position=i.line=i.column=0),b(i,"onready")}t.EVENTS=["text","processinginstruction","sgmldeclaration","doctype","comment","opentagstart","attribute","opentag","closetag","opencdata","cdata","closecdata","error","end","ready","script","opennamespace","closenamespace"],Object.create||(Object.create=function(t){function e(){}return e.prototype=t,new e}),Object.keys||(Object.keys=function(t){var e=[];for(var r in t)t.hasOwnProperty(r)&&e.push(r);return e}),a.prototype={end:function(){O(this)},write:function(e){var n=this;if(this.error)throw this.error;if(n.closed)return v(n,"Cannot write after close. Assign an onready handler.");if(null===e)return O(n);"object"===typeof e&&(e=e.toString());var a=0,i="";for(;i=U(e,a++),n.c=i,i;)switch(n.trackPosition&&(n.position++,"\n"===i?(n.line++,n.column=0):n.column++),n.state){case A.BEGIN:if(n.state=A.BEGIN_WHITESPACE,"\ufeff"===i)continue;B(n,i);continue;case A.BEGIN_WHITESPACE:B(n,i);continue;case A.TEXT:if(n.sawRoot&&!n.closedRoot){for(var o=a-1;i&&"<"!==i&&"&"!==i;)(i=U(e,a++))&&n.trackPosition&&(n.position++,"\n"===i?(n.line++,n.column=0):n.column++);n.textNode+=e.substring(o,a-1)}"<"!==i||n.sawRoot&&n.closedRoot&&!n.strict?(T(i)||n.sawRoot&&!n.closedRoot||x(n,"Text data outside of root node."),"&"===i?n.state=A.TEXT_ENTITY:n.textNode+=i):(n.state=A.OPEN_WAKA,n.startTagPosition=n.position);continue;case A.SCRIPT:"<"===i?n.state=A.SCRIPT_ENDING:n.script+=i;continue;case A.SCRIPT_ENDING:"/"===i?n.state=A.CLOSE_TAG:(n.script+="<"+i,n.state=A.SCRIPT);continue;case A.OPEN_WAKA:if("!"===i)n.state=A.SGML_DECL,n.sgmlDecl="";else if(T(i));else if(N(f,i))n.state=A.OPEN_TAG,n.tagName=i;else if("/"===i)n.state=A.CLOSE_TAG,n.tagName="";else if("?"===i)n.state=A.PROC_INST,n.procInstName=n.procInstBody="";else{if(x(n,"Unencoded <"),n.startTagPosition+1<n.position){var s=n.position-n.startTagPosition;i=new Array(s).join(" ")+i}n.textNode+="<"+i,n.state=A.TEXT}continue;case A.SGML_DECL:"[CDATA["===(n.sgmlDecl+i).toUpperCase()?(I(n,"onopencdata"),n.state=A.CDATA,n.sgmlDecl="",n.cdata=""):n.sgmlDecl+i==="--"?(n.state=A.COMMENT,n.comment="",n.sgmlDecl=""):"DOCTYPE"===(n.sgmlDecl+i).toUpperCase()?(n.state=A.DOCTYPE,(n.doctype||n.sawRoot)&&x(n,"Inappropriately located doctype declaration"),n.doctype="",n.sgmlDecl=""):">"===i?(I(n,"onsgmldeclaration",n.sgmlDecl),n.sgmlDecl="",n.state=A.TEXT):g(i)?(n.state=A.SGML_DECL_QUOTED,n.sgmlDecl+=i):n.sgmlDecl+=i;continue;case A.SGML_DECL_QUOTED:i===n.q&&(n.state=A.SGML_DECL,n.q=""),n.sgmlDecl+=i;continue;case A.DOCTYPE:">"===i?(n.state=A.TEXT,I(n,"ondoctype",n.doctype),n.doctype=!0):(n.doctype+=i,"["===i?n.state=A.DOCTYPE_DTD:g(i)&&(n.state=A.DOCTYPE_QUOTED,n.q=i));continue;case A.DOCTYPE_QUOTED:n.doctype+=i,i===n.q&&(n.q="",n.state=A.DOCTYPE);continue;case A.DOCTYPE_DTD:n.doctype+=i,"]"===i?n.state=A.DOCTYPE:g(i)&&(n.state=A.DOCTYPE_DTD_QUOTED,n.q=i);continue;case A.DOCTYPE_DTD_QUOTED:n.doctype+=i,i===n.q&&(n.state=A.DOCTYPE_DTD,n.q="");continue;case A.COMMENT:"-"===i?n.state=A.COMMENT_ENDING:n.comment+=i;continue;case A.COMMENT_ENDING:"-"===i?(n.state=A.COMMENT_ENDED,n.comment=C(n.opt,n.comment),n.comment&&I(n,"oncomment",n.comment),n.comment=""):(n.comment+="-"+i,n.state=A.COMMENT);continue;case A.COMMENT_ENDED:">"!==i?(x(n,"Malformed comment"),n.comment+="--"+i,n.state=A.COMMENT):n.state=A.TEXT;continue;case A.CDATA:"]"===i?n.state=A.CDATA_ENDING:n.cdata+=i;continue;case A.CDATA_ENDING:"]"===i?n.state=A.CDATA_ENDING_2:(n.cdata+="]"+i,n.state=A.CDATA);continue;case A.CDATA_ENDING_2:">"===i?(n.cdata&&I(n,"oncdata",n.cdata),I(n,"onclosecdata"),n.cdata="",n.state=A.TEXT):"]"===i?n.cdata+="]":(n.cdata+="]]"+i,n.state=A.CDATA);continue;case A.PROC_INST:"?"===i?n.state=A.PROC_INST_ENDING:T(i)?n.state=A.PROC_INST_BODY:n.procInstName+=i;continue;case A.PROC_INST_BODY:if(!n.procInstBody&&T(i))continue;"?"===i?n.state=A.PROC_INST_ENDING:n.procInstBody+=i;continue;case A.PROC_INST_ENDING:">"===i?(I(n,"onprocessinginstruction",{name:n.procInstName,body:n.procInstBody}),n.procInstName=n.procInstBody="",n.state=A.TEXT):(n.procInstBody+="?"+i,n.state=A.PROC_INST_BODY);continue;case A.OPEN_TAG:N(m,i)?n.tagName+=i:(D(n),">"===i?F(n):"/"===i?n.state=A.OPEN_TAG_SLASH:(T(i)||x(n,"Invalid character in tag name"),n.state=A.ATTRIB));continue;case A.OPEN_TAG_SLASH:">"===i?(F(n,!0),L(n)):(x(n,"Forward-slash in opening tag not followed by >"),n.state=A.ATTRIB);continue;case A.ATTRIB:if(T(i))continue;">"===i?F(n):"/"===i?n.state=A.OPEN_TAG_SLASH:N(f,i)?(n.attribName=i,n.attribValue="",n.state=A.ATTRIB_NAME):x(n,"Invalid attribute name");continue;case A.ATTRIB_NAME:"="===i?n.state=A.ATTRIB_VALUE:">"===i?(x(n,"Attribute without value"),n.attribValue=n.attribName,w(n),F(n)):T(i)?n.state=A.ATTRIB_NAME_SAW_WHITE:N(m,i)?n.attribName+=i:x(n,"Invalid attribute name");continue;case A.ATTRIB_NAME_SAW_WHITE:if("="===i)n.state=A.ATTRIB_VALUE;else{if(T(i))continue;x(n,"Attribute without value"),n.tag.attributes[n.attribName]="",n.attribValue="",I(n,"onattribute",{name:n.attribName,value:""}),n.attribName="",">"===i?F(n):N(f,i)?(n.attribName=i,n.state=A.ATTRIB_NAME):(x(n,"Invalid attribute name"),n.state=A.ATTRIB)}continue;case A.ATTRIB_VALUE:if(T(i))continue;g(i)?(n.q=i,n.state=A.ATTRIB_VALUE_QUOTED):(x(n,"Unquoted attribute value"),n.state=A.ATTRIB_VALUE_UNQUOTED,n.attribValue=i);continue;case A.ATTRIB_VALUE_QUOTED:if(i!==n.q){"&"===i?n.state=A.ATTRIB_VALUE_ENTITY_Q:n.attribValue+=i;continue}w(n),n.q="",n.state=A.ATTRIB_VALUE_CLOSED;continue;case A.ATTRIB_VALUE_CLOSED:T(i)?n.state=A.ATTRIB:">"===i?F(n):"/"===i?n.state=A.OPEN_TAG_SLASH:N(f,i)?(x(n,"No whitespace between attributes"),n.attribName=i,n.attribValue="",n.state=A.ATTRIB_NAME):x(n,"Invalid attribute name");continue;case A.ATTRIB_VALUE_UNQUOTED:if(!E(i)){"&"===i?n.state=A.ATTRIB_VALUE_ENTITY_U:n.attribValue+=i;continue}w(n),">"===i?F(n):n.state=A.ATTRIB;continue;case A.CLOSE_TAG:if(n.tagName)">"===i?L(n):N(m,i)?n.tagName+=i:n.script?(n.script+="</"+n.tagName,n.tagName="",n.state=A.SCRIPT):(T(i)||x(n,"Invalid tagname in closing tag"),n.state=A.CLOSE_TAG_SAW_WHITE);else{if(T(i))continue;_(f,i)?n.script?(n.script+="</"+i,n.state=A.SCRIPT):x(n,"Invalid tagname in closing tag."):n.tagName=i}continue;case A.CLOSE_TAG_SAW_WHITE:if(T(i))continue;">"===i?L(n):x(n,"Invalid characters in closing tag");continue;case A.TEXT_ENTITY:case A.ATTRIB_VALUE_ENTITY_Q:case A.ATTRIB_VALUE_ENTITY_U:var c,u;switch(n.state){case A.TEXT_ENTITY:c=A.TEXT,u="textNode";break;case A.ATTRIB_VALUE_ENTITY_Q:c=A.ATTRIB_VALUE_QUOTED,u="attribValue";break;case A.ATTRIB_VALUE_ENTITY_U:c=A.ATTRIB_VALUE_UNQUOTED,u="attribValue"}";"===i?(n[u]+=R(n),n.entity="",n.state=c):N(n.entity.length?d:h,i)?n.entity+=i:(x(n,"Invalid character in entity name"),n[u]+="&"+n.entity+i,n.entity="",n.state=c);continue;default:throw new Error(n,"Unknown state: "+n.state)}n.position>=n.bufferCheckPosition&&function(e){for(var n=Math.max(t.MAX_BUFFER_LENGTH,10),a=0,i=0,o=r.length;i<o;i++){var s=e[r[i]].length;if(s>n)switch(r[i]){case"textNode":P(e);break;case"cdata":I(e,"oncdata",e.cdata),e.cdata="";break;case"script":I(e,"onscript",e.script),e.script="";break;default:v(e,"Max buffer length exceeded: "+r[i])}a=Math.max(a,s)}var c=t.MAX_BUFFER_LENGTH-a;e.bufferCheckPosition=c+e.position}(n);return n},resume:function(){return this.error=null,this},close:function(){return this.write(null)},flush:function(){!function(t){P(t),""!==t.cdata&&(I(t,"oncdata",t.cdata),t.cdata=""),""!==t.script&&(I(t,"onscript",t.script),t.script="")}(this)}};try{e=s.a.Stream}catch(k){e=function(){}}var i=t.EVENTS.filter((function(t){return"error"!==t&&"end"!==t}));function o(t,r){if(!(this instanceof o))return new o(t,r);e.apply(this),this._parser=new a(t,r),this.writable=!0,this.readable=!0;var n=this;this._parser.onend=function(){n.emit("end")},this._parser.onerror=function(t){n.emit("error",t),n._parser.error=null},this._decoder=null,i.forEach((function(t){Object.defineProperty(n,"on"+t,{get:function(){return n._parser["on"+t]},set:function(e){if(!e)return n.removeAllListeners(t),n._parser["on"+t]=e,e;n.on(t,e)},enumerable:!0,configurable:!1})}))}o.prototype=Object.create(e.prototype,{constructor:{value:o}}),o.prototype.write=function(t){if("function"===typeof n&&"function"===typeof n.isBuffer&&n.isBuffer(t)){if(!this._decoder){var e=u.a.StringDecoder;this._decoder=new e("utf8")}t=this._decoder.write(t)}return this._parser.write(t.toString()),this.emit("data",t),!0},o.prototype.end=function(t){return t&&t.length&&this.write(t),this._parser.end(),!0},o.prototype.on=function(t,r){var n=this;return n._parser["on"+t]||-1===i.indexOf(t)||(n._parser["on"+t]=function(){var e=1===arguments.length?[arguments[0]]:Array.apply(null,arguments);e.splice(0,0,t),n.emit.apply(n,e)}),e.prototype.on.call(n,t,r)};var c="http://www.w3.org/XML/1998/namespace",l="http://www.w3.org/2000/xmlns/",p={xml:c,xmlns:l},f=/[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,m=/[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/,h=/[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,d=/[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/;function T(t){return" "===t||"\n"===t||"\r"===t||"\t"===t}function g(t){return'"'===t||"'"===t}function E(t){return">"===t||T(t)}function N(t,e){return t.test(e)}function _(t,e){return!N(t,e)}var A=0;for(var y in t.STATE={BEGIN:A++,BEGIN_WHITESPACE:A++,TEXT:A++,TEXT_ENTITY:A++,OPEN_WAKA:A++,SGML_DECL:A++,SGML_DECL_QUOTED:A++,DOCTYPE:A++,DOCTYPE_QUOTED:A++,DOCTYPE_DTD:A++,DOCTYPE_DTD_QUOTED:A++,COMMENT_STARTING:A++,COMMENT:A++,COMMENT_ENDING:A++,COMMENT_ENDED:A++,CDATA:A++,CDATA_ENDING:A++,CDATA_ENDING_2:A++,PROC_INST:A++,PROC_INST_BODY:A++,PROC_INST_ENDING:A++,OPEN_TAG:A++,OPEN_TAG_SLASH:A++,ATTRIB:A++,ATTRIB_NAME:A++,ATTRIB_NAME_SAW_WHITE:A++,ATTRIB_VALUE:A++,ATTRIB_VALUE_QUOTED:A++,ATTRIB_VALUE_CLOSED:A++,ATTRIB_VALUE_UNQUOTED:A++,ATTRIB_VALUE_ENTITY_Q:A++,ATTRIB_VALUE_ENTITY_U:A++,CLOSE_TAG:A++,CLOSE_TAG_SAW_WHITE:A++,SCRIPT:A++,SCRIPT_ENDING:A++},t.XML_ENTITIES={amp:"&",gt:">",lt:"<",quot:'"',apos:"'"},t.ENTITIES={amp:"&",gt:">",lt:"<",quot:'"',apos:"'",AElig:198,Aacute:193,Acirc:194,Agrave:192,Aring:197,Atilde:195,Auml:196,Ccedil:199,ETH:208,Eacute:201,Ecirc:202,Egrave:200,Euml:203,Iacute:205,Icirc:206,Igrave:204,Iuml:207,Ntilde:209,Oacute:211,Ocirc:212,Ograve:210,Oslash:216,Otilde:213,Ouml:214,THORN:222,Uacute:218,Ucirc:219,Ugrave:217,Uuml:220,Yacute:221,aacute:225,acirc:226,aelig:230,agrave:224,aring:229,atilde:227,auml:228,ccedil:231,eacute:233,ecirc:234,egrave:232,eth:240,euml:235,iacute:237,icirc:238,igrave:236,iuml:239,ntilde:241,oacute:243,ocirc:244,ograve:242,oslash:248,otilde:245,ouml:246,szlig:223,thorn:254,uacute:250,ucirc:251,ugrave:249,uuml:252,yacute:253,yuml:255,copy:169,reg:174,nbsp:160,iexcl:161,cent:162,pound:163,curren:164,yen:165,brvbar:166,sect:167,uml:168,ordf:170,laquo:171,not:172,shy:173,macr:175,deg:176,plusmn:177,sup1:185,sup2:178,sup3:179,acute:180,micro:181,para:182,middot:183,cedil:184,ordm:186,raquo:187,frac14:188,frac12:189,frac34:190,iquest:191,times:215,divide:247,OElig:338,oelig:339,Scaron:352,scaron:353,Yuml:376,fnof:402,circ:710,tilde:732,Alpha:913,Beta:914,Gamma:915,Delta:916,Epsilon:917,Zeta:918,Eta:919,Theta:920,Iota:921,Kappa:922,Lambda:923,Mu:924,Nu:925,Xi:926,Omicron:927,Pi:928,Rho:929,Sigma:931,Tau:932,Upsilon:933,Phi:934,Chi:935,Psi:936,Omega:937,alpha:945,beta:946,gamma:947,delta:948,epsilon:949,zeta:950,eta:951,theta:952,iota:953,kappa:954,lambda:955,mu:956,nu:957,xi:958,omicron:959,pi:960,rho:961,sigmaf:962,sigma:963,tau:964,upsilon:965,phi:966,chi:967,psi:968,omega:969,thetasym:977,upsih:978,piv:982,ensp:8194,emsp:8195,thinsp:8201,zwnj:8204,zwj:8205,lrm:8206,rlm:8207,ndash:8211,mdash:8212,lsquo:8216,rsquo:8217,sbquo:8218,ldquo:8220,rdquo:8221,bdquo:8222,dagger:8224,Dagger:8225,bull:8226,hellip:8230,permil:8240,prime:8242,Prime:8243,lsaquo:8249,rsaquo:8250,oline:8254,frasl:8260,euro:8364,image:8465,weierp:8472,real:8476,trade:8482,alefsym:8501,larr:8592,uarr:8593,rarr:8594,darr:8595,harr:8596,crarr:8629,lArr:8656,uArr:8657,rArr:8658,dArr:8659,hArr:8660,forall:8704,part:8706,exist:8707,empty:8709,nabla:8711,isin:8712,notin:8713,ni:8715,prod:8719,sum:8721,minus:8722,lowast:8727,radic:8730,prop:8733,infin:8734,ang:8736,and:8743,or:8744,cap:8745,cup:8746,int:8747,there4:8756,sim:8764,cong:8773,asymp:8776,ne:8800,equiv:8801,le:8804,ge:8805,sub:8834,sup:8835,nsub:8836,sube:8838,supe:8839,oplus:8853,otimes:8855,perp:8869,sdot:8901,lceil:8968,rceil:8969,lfloor:8970,rfloor:8971,lang:9001,rang:9002,loz:9674,spades:9824,clubs:9827,hearts:9829,diams:9830},Object.keys(t.ENTITIES).forEach((function(e){var r=t.ENTITIES[e],n="number"===typeof r?String.fromCharCode(r):r;t.ENTITIES[e]=n})),t.STATE)t.STATE[t.STATE[y]]=y;function b(t,e,r){t[e]&&t[e](r)}function I(t,e,r){t.textNode&&P(t),b(t,e,r)}function P(t){t.textNode=C(t.opt,t.textNode),t.textNode&&b(t,"ontext",t.textNode),t.textNode=""}function C(t,e){return t.trim&&(e=e.trim()),t.normalize&&(e=e.replace(/\s+/g," ")),e}function v(t,e){return P(t),t.trackPosition&&(e+="\nLine: "+t.line+"\nColumn: "+t.column+"\nChar: "+t.c),e=new Error(e),t.error=e,b(t,"onerror",e),t}function O(t){return t.sawRoot&&!t.closedRoot&&x(t,"Unclosed root tag"),t.state!==A.BEGIN&&t.state!==A.BEGIN_WHITESPACE&&t.state!==A.TEXT&&v(t,"Unexpected end"),P(t),t.c="",t.closed=!0,b(t,"onend"),a.call(t,t.strict,t.opt),t}function x(t,e){if("object"!==typeof t||!(t instanceof a))throw new Error("bad call to strictFail");t.strict&&v(t,e)}function D(t){t.strict||(t.tagName=t.tagName[t.looseCase]());var e=t.tags[t.tags.length-1]||t,r=t.tag={name:t.tagName,attributes:{}};t.opt.xmlns&&(r.ns=e.ns),t.attribList.length=0,I(t,"onopentagstart",r)}function S(t,e){var r=t.indexOf(":")<0?["",t]:t.split(":"),n=r[0],a=r[1];return e&&"xmlns"===t&&(n="xmlns",a=""),{prefix:n,local:a}}function w(t){if(t.strict||(t.attribName=t.attribName[t.looseCase]()),-1!==t.attribList.indexOf(t.attribName)||t.tag.attributes.hasOwnProperty(t.attribName))t.attribName=t.attribValue="";else{if(t.opt.xmlns){var e=S(t.attribName,!0),r=e.prefix,n=e.local;if("xmlns"===r)if("xml"===n&&t.attribValue!==c)x(t,"xml: prefix must be bound to "+c+"\nActual: "+t.attribValue);else if("xmlns"===n&&t.attribValue!==l)x(t,"xmlns: prefix must be bound to "+l+"\nActual: "+t.attribValue);else{var a=t.tag,i=t.tags[t.tags.length-1]||t;a.ns===i.ns&&(a.ns=Object.create(i.ns)),a.ns[n]=t.attribValue}t.attribList.push([t.attribName,t.attribValue])}else t.tag.attributes[t.attribName]=t.attribValue,I(t,"onattribute",{name:t.attribName,value:t.attribValue});t.attribName=t.attribValue=""}}function F(t,e){if(t.opt.xmlns){var r=t.tag,n=S(t.tagName);r.prefix=n.prefix,r.local=n.local,r.uri=r.ns[n.prefix]||"",r.prefix&&!r.uri&&(x(t,"Unbound namespace prefix: "+JSON.stringify(t.tagName)),r.uri=n.prefix);var a=t.tags[t.tags.length-1]||t;r.ns&&a.ns!==r.ns&&Object.keys(r.ns).forEach((function(e){I(t,"onopennamespace",{prefix:e,uri:r.ns[e]})}));for(var i=0,o=t.attribList.length;i<o;i++){var s=t.attribList[i],c=s[0],u=s[1],l=S(c,!0),p=l.prefix,f=l.local,m=""===p?"":r.ns[p]||"",h={name:c,value:u,prefix:p,local:f,uri:m};p&&"xmlns"!==p&&!m&&(x(t,"Unbound namespace prefix: "+JSON.stringify(p)),h.uri=p),t.tag.attributes[c]=h,I(t,"onattribute",h)}t.attribList.length=0}t.tag.isSelfClosing=!!e,t.sawRoot=!0,t.tags.push(t.tag),I(t,"onopentag",t.tag),e||(t.noscript||"script"!==t.tagName.toLowerCase()?t.state=A.TEXT:t.state=A.SCRIPT,t.tag=null,t.tagName=""),t.attribName=t.attribValue="",t.attribList.length=0}function L(t){if(!t.tagName)return x(t,"Weird empty close tag."),t.textNode+="</>",void(t.state=A.TEXT);if(t.script){if("script"!==t.tagName)return t.script+="</"+t.tagName+">",t.tagName="",void(t.state=A.SCRIPT);I(t,"onscript",t.script),t.script=""}var e=t.tags.length,r=t.tagName;t.strict||(r=r[t.looseCase]());for(var n=r;e--;){if(t.tags[e].name===n)break;x(t,"Unexpected close tag")}if(e<0)return x(t,"Unmatched closing tag: "+t.tagName),t.textNode+="</"+t.tagName+">",void(t.state=A.TEXT);t.tagName=r;for(var a=t.tags.length;a-- >e;){var i=t.tag=t.tags.pop();t.tagName=t.tag.name,I(t,"onclosetag",t.tagName);var o={};for(var s in i.ns)o[s]=i.ns[s];var c=t.tags[t.tags.length-1]||t;t.opt.xmlns&&i.ns!==c.ns&&Object.keys(i.ns).forEach((function(e){var r=i.ns[e];I(t,"onclosenamespace",{prefix:e,uri:r})}))}0===e&&(t.closedRoot=!0),t.tagName=t.attribValue=t.attribName="",t.attribList.length=0,t.state=A.TEXT}function R(t){var e,r=t.entity,n=r.toLowerCase(),a="";return t.ENTITIES[r]?t.ENTITIES[r]:t.ENTITIES[n]?t.ENTITIES[n]:("#"===(r=n).charAt(0)&&("x"===r.charAt(1)?(r=r.slice(2),a=(e=parseInt(r,16)).toString(16)):(r=r.slice(1),a=(e=parseInt(r,10)).toString(10))),r=r.replace(/^0+/,""),isNaN(e)||a.toLowerCase()!==r?(x(t,"Invalid character entity"),"&"+t.entity+";"):String.fromCodePoint(e))}function B(t,e){"<"===e?(t.state=A.OPEN_WAKA,t.startTagPosition=t.position):T(e)||(x(t,"Non-whitespace before first tag."),t.textNode=e,t.state=A.TEXT)}function U(t,e){var r="";return e<t.length&&(r=t.charAt(e)),r}A=t.STATE,String.fromCodePoint||function(){var t=String.fromCharCode,e=Math.floor,r=function(){var r,n,a=16384,i=[],o=-1,s=arguments.length;if(!s)return"";for(var c="";++o<s;){var u=Number(arguments[o]);if(!isFinite(u)||u<0||u>1114111||e(u)!==u)throw RangeError("Invalid code point: "+u);u<=65535?i.push(u):(r=55296+((u-=65536)>>10),n=u%1024+56320,i.push(r,n)),(o+1===s||i.length>a)&&(c+=t.apply(null,i),i.length=0)}return c};Object.defineProperty?Object.defineProperty(String,"fromCodePoint",{value:r,configurable:!0,writable:!0}):String.fromCodePoint=r}()}(e)}))),N=d((function(t,e){(function(){e.stripBOM=function(t){return"\ufeff"===t[0]?t.substring(1):t}}).call(h)})),_=(N.stripBOM,d((function(t,e){(function(){var t;t=new RegExp(/(?!xmlns)^.*:/),e.normalize=function(t){return t.toLowerCase()},e.firstCharLowerCase=function(t){return t.charAt(0).toLowerCase()+t.slice(1)},e.stripPrefix=function(e){return e.replace(t,"")},e.parseNumbers=function(t){return isNaN(t)||(t=t%1===0?parseInt(t,10):parseFloat(t)),t},e.parseBooleans=function(t){return/^(?:true|false)$/i.test(t)&&(t="true"===t.toLowerCase()),t}}).call(h)}))),A=(_.normalize,_.firstCharLowerCase,_.stripPrefix,_.parseNumbers,_.parseBooleans,d((function(t,e){(function(){var t,r,n,a,i,o,s,c,u=function(t,e){return function(){return t.apply(e,arguments)}},l={}.hasOwnProperty;s=E,n=p.a,t=N,o=_,c=m.a.setImmediate,r=T.defaults,a=function(t){return"object"===typeof t&&null!=t&&0===Object.keys(t).length},i=function(t,e,r){var n,a;for(n=0,a=t.length;n<a;n++)e=(0,t[n])(e,r);return e},e.Parser=function(n){function p(t){var n,a,i;if(this.parseStringPromise=u(this.parseStringPromise,this),this.parseString=u(this.parseString,this),this.reset=u(this.reset,this),this.assignOrPush=u(this.assignOrPush,this),this.processAsync=u(this.processAsync,this),!(this instanceof e.Parser))return new e.Parser(t);for(n in this.options={},a=r[.2])l.call(a,n)&&(i=a[n],this.options[n]=i);for(n in t)l.call(t,n)&&(i=t[n],this.options[n]=i);this.options.xmlns&&(this.options.xmlnskey=this.options.attrkey+"ns"),this.options.normalizeTags&&(this.options.tagNameProcessors||(this.options.tagNameProcessors=[]),this.options.tagNameProcessors.unshift(o.normalize)),this.reset()}return function(t,e){for(var r in e)l.call(e,r)&&(t[r]=e[r]);function n(){this.constructor=t}n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype}(p,n),p.prototype.processAsync=function(){var t,e;try{return this.remaining.length<=this.options.chunkSize?(t=this.remaining,this.remaining="",this.saxParser=this.saxParser.write(t),this.saxParser.close()):(t=this.remaining.substr(0,this.options.chunkSize),this.remaining=this.remaining.substr(this.options.chunkSize,this.remaining.length),this.saxParser=this.saxParser.write(t),c(this.processAsync))}catch(r){if(e=r,!this.saxParser.errThrown)return this.saxParser.errThrown=!0,this.emit(e)}},p.prototype.assignOrPush=function(t,e,r){return e in t?(t[e]instanceof Array||(t[e]=[t[e]]),t[e].push(r)):this.options.explicitArray?t[e]=[r]:t[e]=r},p.prototype.reset=function(){var t,e,r,n,o;return this.removeAllListeners(),this.saxParser=s.parser(this.options.strict,{trim:!1,normalize:!1,xmlns:this.options.xmlns}),this.saxParser.errThrown=!1,this.saxParser.onerror=(o=this,function(t){if(o.saxParser.resume(),!o.saxParser.errThrown)return o.saxParser.errThrown=!0,o.emit("error",t)}),this.saxParser.onend=function(t){return function(){if(!t.saxParser.ended)return t.saxParser.ended=!0,t.emit("end",t.resultObject)}}(this),this.saxParser.ended=!1,this.EXPLICIT_CHARKEY=this.options.explicitCharkey,this.resultObject=null,n=[],t=this.options.attrkey,e=this.options.charkey,this.saxParser.onopentag=function(r){return function(a){var o,s,c,u,p;if((c={})[e]="",!r.options.ignoreAttrs)for(o in p=a.attributes)l.call(p,o)&&(t in c||r.options.mergeAttrs||(c[t]={}),s=r.options.attrValueProcessors?i(r.options.attrValueProcessors,a.attributes[o],o):a.attributes[o],u=r.options.attrNameProcessors?i(r.options.attrNameProcessors,o):o,r.options.mergeAttrs?r.assignOrPush(c,u,s):c[t][u]=s);return c["#name"]=r.options.tagNameProcessors?i(r.options.tagNameProcessors,a.name):a.name,r.options.xmlns&&(c[r.options.xmlnskey]={uri:a.uri,local:a.local}),n.push(c)}}(this),this.saxParser.onclosetag=function(t){return function(){var r,o,s,c,u,p,f,m,h,d;if(p=n.pop(),u=p["#name"],t.options.explicitChildren&&t.options.preserveChildrenOrder||delete p["#name"],!0===p.cdata&&(r=p.cdata,delete p.cdata),h=n[n.length-1],p[e].match(/^\s*$/)&&!r?(o=p[e],delete p[e]):(t.options.trim&&(p[e]=p[e].trim()),t.options.normalize&&(p[e]=p[e].replace(/\s{2,}/g," ").trim()),p[e]=t.options.valueProcessors?i(t.options.valueProcessors,p[e],u):p[e],1===Object.keys(p).length&&e in p&&!t.EXPLICIT_CHARKEY&&(p=p[e])),a(p)&&(p=""!==t.options.emptyTag?t.options.emptyTag:o),null!=t.options.validator&&(d="/"+function(){var t,e,r;for(r=[],t=0,e=n.length;t<e;t++)c=n[t],r.push(c["#name"]);return r}().concat(u).join("/"),function(){var e;try{p=t.options.validator(d,h&&h[u],p)}catch(r){return e=r,t.emit("error",e)}}()),t.options.explicitChildren&&!t.options.mergeAttrs&&"object"===typeof p)if(t.options.preserveChildrenOrder){if(h){for(s in h[t.options.childkey]=h[t.options.childkey]||[],f={},p)l.call(p,s)&&(f[s]=p[s]);h[t.options.childkey].push(f),delete p["#name"],1===Object.keys(p).length&&e in p&&!t.EXPLICIT_CHARKEY&&(p=p[e])}}else c={},t.options.attrkey in p&&(c[t.options.attrkey]=p[t.options.attrkey],delete p[t.options.attrkey]),!t.options.charsAsChildren&&t.options.charkey in p&&(c[t.options.charkey]=p[t.options.charkey],delete p[t.options.charkey]),Object.getOwnPropertyNames(p).length>0&&(c[t.options.childkey]=p),p=c;return n.length>0?t.assignOrPush(h,u,p):(t.options.explicitRoot&&(m=p,(p={})[u]=m),t.resultObject=p,t.saxParser.ended=!0,t.emit("end",t.resultObject))}}(this),r=function(t){return function(r){var a,i;if(i=n[n.length-1])return i[e]+=r,t.options.explicitChildren&&t.options.preserveChildrenOrder&&t.options.charsAsChildren&&(t.options.includeWhiteChars||""!==r.replace(/\\n/g,"").trim())&&(i[t.options.childkey]=i[t.options.childkey]||[],(a={"#name":"__text__"})[e]=r,t.options.normalize&&(a[e]=a[e].replace(/\s{2,}/g," ").trim()),i[t.options.childkey].push(a)),i}}(this),this.saxParser.ontext=r,this.saxParser.oncdata=function(t){var e;if(e=r(t))return e.cdata=!0}},p.prototype.parseString=function(e,r){var n;null!=r&&"function"===typeof r&&(this.on("end",(function(t){return this.reset(),r(null,t)})),this.on("error",(function(t){return this.reset(),r(t)})));try{return""===(e=e.toString()).trim()?(this.emit("end",null),!0):(e=t.stripBOM(e),this.options.async?(this.remaining=e,c(this.processAsync),this.saxParser):this.saxParser.write(e).close())}catch(a){if(n=a,!this.saxParser.errThrown&&!this.saxParser.ended)return this.emit("error",n),this.saxParser.errThrown=!0;if(this.saxParser.ended)throw n}},p.prototype.parseStringPromise=function(t){return new Promise((e=this,function(r,n){return e.parseString(t,(function(t,e){return t?n(t):r(e)}))}));var e},p}(n),e.parseString=function(t,r,n){var a,i;return null!=n?("function"===typeof n&&(a=n),"object"===typeof r&&(i=r)):("function"===typeof r&&(a=r),i={}),new e.Parser(i).parseString(t,a)},e.parseStringPromise=function(t,r){var n;return"object"===typeof r&&(n=r),new e.Parser(n).parseStringPromise(t)}}).call(h)}))),y=(A.Parser,A.parseString,A.parseStringPromise,d((function(t,e){(function(){var t,r,n,a,i={}.hasOwnProperty;r=T,t=g,n=A,a=_,e.defaults=r.defaults,e.processors=a,e.ValidationError=function(t){function e(t){this.message=t}return function(t,e){for(var r in e)i.call(e,r)&&(t[r]=e[r]);function n(){this.constructor=t}n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype}(e,Error),e}(),e.Builder=t.Builder,e.Parser=n.Parser,e.parseString=n.parseString,e.parseStringPromise=n.parseStringPromise}).call(h)}))),b=(y.defaults,y.processors,y.ValidationError,y.Builder,y.Parser,y.parseString,y.parseStringPromise,new y.Parser);function I(t,e,r){var n,a;if(t.$&&t.$.tuid)a=t.$.tuid,n=!0;else{var i=t.tuv.find((function(t){return t.$["xml:lang"]===r}));if(!i||!i.seg[0])return;a=i.seg[0],n=!1}return e[a]=e[a]||{},t.tuv.forEach((function(t){var r=t.$["xml:lang"];e[a][r]=t.seg[0]})),n}function P(t){for(var e=0,r=t.length;e<r;e++)if(t[e].$&&"group"===t[e].$.type)return t[e]._;return null}function C(t,e){if("string"!==typeof t){var r=new Error("The first parameter was not a string");if(!e)throw r;return e(r)}var n={resources:{}};b.parseString(t,(function(t,r){if(t)return e(t);var a=r.tmx.header[0].$.datatype,i=r.tmx.header[0].$.segtype,o=r.tmx.header[0].$["o-tmf"];if(a||(t=new Error("datatype must be set")),i||(t=new Error("segtype must be set")),o||(t=new Error("o-tmf must be set")),t)return e(t);var s=r.tmx.$.version,c=r.tmx.header[0].$.srclang,u=r.tmx.header[0].$.creationtool,l=r.tmx.header[0].$.creationtoolversion,p=r.tmx.header[0].$.adminlang;n.version=s,n.sourceLanguage=c,n.creationTool=u,n.creationToolVersion=l,n.administrationLanguage=p,n.datatype=a,n.oTMF=o,r.tmx.body[0].tu&&r.tmx.body[0].tu.forEach((function(t){if(t.prop&&t.prop.length>0&&P(t.prop)){var e=P(t.prop);return n.resources[e]=n.resources[e]||{},void(n.tuid=I(t,n.resources[e],c))}n.tuid=I(t,n.resources,c)})),e(null,n)}))}function v(t,e){if(!e)return new Promise((function(e,r){return C(t,(function(t,n){return t?r(t):e(n)}))}));C(t,e)}var O="tmexchange",x="2.0.4",D=function(t,e,r){if(r||"function"!==typeof e||(r=e,e={pretty:!0,indent:"  ",newline:"\n"}),e=e||{pretty:!0,indent:"  ",newline:"\n"},!t.sourceLanguage){var n=new Error("Please define sourceLanguage!");if(r)return r(n);throw n}var a=new y.Builder({rootName:"tmx",headless:void 0===e.headless||e.headless,renderOpts:{pretty:!1!==e.pretty,indent:e.indent||"  ",newline:e.newline||"\n"}});t.tuid=void 0===t.tuid||t.tuid;var i={$:{version:t.version||"1.4b"},header:{$:{creationtool:t.creationTool||O,creationtoolversion:t.creationToolVersion||x,adminlang:t.administrationLanguage||t.sourceLanguage,datatype:t.datatype||"PlainText",segtype:t.segtype||"sentence","o-tmf":t.oTMF||"ABCTransMem",srclang:t.sourceLanguage}},body:{tu:[]}};Object.keys(t.resources).forEach((function(e){var r={$:{},tuv:[]};t.tuid&&(r.$.tuid=e),Object.keys(t.resources[e]).forEach((function(n,a){if("string"!==typeof t.resources[e][n]){var o={$:{},prop:{$:{type:"group"},_:e},tuv:[]};t.tuid&&(o.$.tuid=n),i.body.tu.push(o),Object.keys(t.resources[e][n]).forEach((function(r){var a={$:{"xml:lang":r},seg:t.resources[e][n][r].replace(/\f/g,"")};o.tuv.push(a)}))}else{0===a&&i.body.tu.push(r);var s={$:{"xml:lang":n},seg:t.resources[e][n].replace(/\f/g,"")};r.tuv.push(s)}}))}));var o=a.buildObject(i);return r&&r(null,o),o};function S(t,e,r){return(r||void 0!==e)&&(r||"function"===typeof e)?void D(t,e,r):new Promise((function(r,n){return D(t,e,(function(t,e){return t?n(t):r(e)}))}))}var w={tmx2js:v,js2tmx:S};e.default=w}.call(this,r(19),r(54).Buffer)}}]);
//# sourceMappingURL=12.df61cb1c.chunk.js.map