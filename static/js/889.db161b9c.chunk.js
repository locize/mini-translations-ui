"use strict";(self.webpackChunkmini_locize=self.webpackChunkmini_locize||[]).push([[889],{2889:function(e,t,n){n.r(t),n.d(t,{ftl2js:function(){return ne},js2ftl:function(){return ie}});var r=n(6234),i=n(5991),a=n(5754),u=n(6906),s=n(1361),c=n(9249),o=n(7371),h=function(){function e(){(0,c.Z)(this,e),this.type="BaseNode"}return(0,o.Z)(e,[{key:"equals",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:["span"],n=new Set(Object.keys(this)),r=new Set(Object.keys(e));if(t){var i,a=(0,s.Z)(t);try{for(a.s();!(i=a.n()).done;){var u=i.value;n.delete(u),r.delete(u)}}catch(k){a.e(k)}finally{a.f()}}if(n.size!==r.size)return!1;var c,o=(0,s.Z)(n);try{for(o.s();!(c=o.n()).done;){var h=c.value;if(!r.has(h))return!1;var f=this[h],v=e[h];if(typeof f!==typeof v)return!1;if(f instanceof Array&&v instanceof Array){if(f.length!==v.length)return!1;for(var p=0;p<f.length;++p)if(!l(f[p],v[p],t))return!1}else if(!l(f,v,t))return!1}}catch(k){o.e(k)}finally{o.f()}return!0}},{key:"clone",value:function(){function t(n){return n instanceof e?n.clone():Array.isArray(n)?n.map(t):n}for(var n=Object.create(this.constructor.prototype),r=0,i=Object.keys(this);r<i.length;r++){var a=i[r];n[a]=t(this[a])}return n}}]),e}();function l(e,t,n){return e instanceof h&&t instanceof h?e.equals(t,n):e===t}var f=function(e){(0,a.Z)(n,e);var t=(0,u.Z)(n);function n(){var e;return(0,c.Z)(this,n),(e=t.apply(this,arguments)).type="SyntaxNode",e}return(0,o.Z)(n,[{key:"addSpan",value:function(e,t){this.span=new q(e,t)}}]),n}(h),v=function(e){(0,a.Z)(n,e);var t=(0,u.Z)(n);function n(){var e,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return(0,c.Z)(this,n),(e=t.call(this)).type="Resource",e.body=r,e}return(0,o.Z)(n)}(f),p=function(e){(0,a.Z)(n,e);var t=(0,u.Z)(n);function n(){var e;return(0,c.Z)(this,n),(e=t.apply(this,arguments)).type="Entry",e}return(0,o.Z)(n)}(f),k=function(e){(0,a.Z)(n,e);var t=(0,u.Z)(n);function n(e){var r,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],u=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return(0,c.Z)(this,n),(r=t.call(this)).type="Message",r.id=e,r.value=i,r.attributes=a,r.comment=u,r}return(0,o.Z)(n)}(p),g=function(e){(0,a.Z)(n,e);var t=(0,u.Z)(n);function n(e,r){var i,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],u=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return(0,c.Z)(this,n),(i=t.call(this)).type="Term",i.id=e,i.value=r,i.attributes=a,i.comment=u,i}return(0,o.Z)(n)}(p),d=function(e){(0,a.Z)(n,e);var t=(0,u.Z)(n);function n(e){var r;return(0,c.Z)(this,n),(r=t.call(this)).type="Pattern",r.elements=e,r}return(0,o.Z)(n)}(f),m=function(e){(0,a.Z)(n,e);var t=(0,u.Z)(n);function n(){var e;return(0,c.Z)(this,n),(e=t.apply(this,arguments)).type="PatternElement",e}return(0,o.Z)(n)}(f),y=function(e){(0,a.Z)(n,e);var t=(0,u.Z)(n);function n(e){var r;return(0,c.Z)(this,n),(r=t.call(this)).type="TextElement",r.value=e,r}return(0,o.Z)(n)}(m),Z=function(e){(0,a.Z)(n,e);var t=(0,u.Z)(n);function n(e){var r;return(0,c.Z)(this,n),(r=t.call(this)).type="Placeable",r.expression=e,r}return(0,o.Z)(n)}(m),w=function(e){(0,a.Z)(n,e);var t=(0,u.Z)(n);function n(){var e;return(0,c.Z)(this,n),(e=t.apply(this,arguments)).type="Expression",e}return(0,o.Z)(n)}(f),x=function(e){(0,a.Z)(n,e);var t=(0,u.Z)(n);function n(e){var r;return(0,c.Z)(this,n),(r=t.call(this)).type="Literal",r.value=e,r}return(0,o.Z)(n)}(w),E=function(e){(0,a.Z)(n,e);var t=(0,u.Z)(n);function n(){var e;return(0,c.Z)(this,n),(e=t.apply(this,arguments)).type="StringLiteral",e}return(0,o.Z)(n,[{key:"parse",value:function(){return{value:this.value.replace(/(?:\\\\|\\"|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g,(function(e,t,n){switch(e){case"\\\\":return"\\";case'\\"':return'"';default:var r=parseInt(t||n,16);return r<=55295||57344<=r?String.fromCodePoint(r):"\ufffd"}}))}}}]),n}(x),C=function(e){(0,a.Z)(n,e);var t=(0,u.Z)(n);function n(){var e;return(0,c.Z)(this,n),(e=t.apply(this,arguments)).type="NumberLiteral",e}return(0,o.Z)(n,[{key:"parse",value:function(){var e=parseFloat(this.value),t=this.value.indexOf(".");return{value:e,precision:t>0?this.value.length-t-1:0}}}]),n}(x),b=function(e){(0,a.Z)(n,e);var t=(0,u.Z)(n);function n(e){var r,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,c.Z)(this,n),(r=t.call(this)).type="MessageReference",r.id=e,r.attribute=i,r}return(0,o.Z)(n)}(w),P=function(e){(0,a.Z)(n,e);var t=(0,u.Z)(n);function n(e){var r,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return(0,c.Z)(this,n),(r=t.call(this)).type="TermReference",r.id=e,r.attribute=i,r.arguments=a,r}return(0,o.Z)(n)}(w),S=function(e){(0,a.Z)(n,e);var t=(0,u.Z)(n);function n(e){var r;return(0,c.Z)(this,n),(r=t.call(this)).type="VariableReference",r.id=e,r}return(0,o.Z)(n)}(w),B=function(e){(0,a.Z)(n,e);var t=(0,u.Z)(n);function n(e,r){var i;return(0,c.Z)(this,n),(i=t.call(this)).type="FunctionReference",i.id=e,i.arguments=r,i}return(0,o.Z)(n)}(w),I=function(e){(0,a.Z)(n,e);var t=(0,u.Z)(n);function n(e,r){var i;return(0,c.Z)(this,n),(i=t.call(this)).type="SelectExpression",i.selector=e,i.variants=r,i}return(0,o.Z)(n)}(w),A=function(e){(0,a.Z)(n,e);var t=(0,u.Z)(n);function n(){var e,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return(0,c.Z)(this,n),(e=t.call(this)).type="CallArguments",e.positional=r,e.named=i,e}return(0,o.Z)(n)}(f),O=function(e){(0,a.Z)(n,e);var t=(0,u.Z)(n);function n(e,r){var i;return(0,c.Z)(this,n),(i=t.call(this)).type="Attribute",i.id=e,i.value=r,i}return(0,o.Z)(n)}(f),T=function(e){(0,a.Z)(n,e);var t=(0,u.Z)(n);function n(e,r,i){var a;return(0,c.Z)(this,n),(a=t.call(this)).type="Variant",a.key=e,a.value=r,a.default=i,a}return(0,o.Z)(n)}(f),V=function(e){(0,a.Z)(n,e);var t=(0,u.Z)(n);function n(e,r){var i;return(0,c.Z)(this,n),(i=t.call(this)).type="NamedArgument",i.name=e,i.value=r,i}return(0,o.Z)(n)}(f),N=function(e){(0,a.Z)(n,e);var t=(0,u.Z)(n);function n(e){var r;return(0,c.Z)(this,n),(r=t.call(this)).type="Identifier",r.name=e,r}return(0,o.Z)(n)}(f),j=function(e){(0,a.Z)(n,e);var t=(0,u.Z)(n);function n(e){var r;return(0,c.Z)(this,n),(r=t.call(this)).type="BaseComment",r.content=e,r}return(0,o.Z)(n)}(p),R=function(e){(0,a.Z)(n,e);var t=(0,u.Z)(n);function n(){var e;return(0,c.Z)(this,n),(e=t.apply(this,arguments)).type="Comment",e}return(0,o.Z)(n)}(j),L=function(e){(0,a.Z)(n,e);var t=(0,u.Z)(n);function n(){var e;return(0,c.Z)(this,n),(e=t.apply(this,arguments)).type="GroupComment",e}return(0,o.Z)(n)}(j),D=function(e){(0,a.Z)(n,e);var t=(0,u.Z)(n);function n(){var e;return(0,c.Z)(this,n),(e=t.apply(this,arguments)).type="ResourceComment",e}return(0,o.Z)(n)}(j),M=function(e){(0,a.Z)(n,e);var t=(0,u.Z)(n);function n(e){var r;return(0,c.Z)(this,n),(r=t.call(this)).type="Junk",r.annotations=[],r.content=e,r}return(0,o.Z)(n,[{key:"addAnnotation",value:function(e){this.annotations.push(e)}}]),n}(f),q=function(e){(0,a.Z)(n,e);var t=(0,u.Z)(n);function n(e,r){var i;return(0,c.Z)(this,n),(i=t.call(this)).type="Span",i.start=e,i.end=r,i}return(0,o.Z)(n)}(h),z=function(e){(0,a.Z)(n,e);var t=(0,u.Z)(n);function n(e){var r,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],a=arguments.length>2?arguments[2]:void 0;return(0,c.Z)(this,n),(r=t.call(this)).type="Annotation",r.code=e,r.arguments=i,r.message=a,r}return(0,o.Z)(n)}(f),U=function(e){(0,a.Z)(n,e);var t=(0,u.Z)(n);function n(e){var r;(0,c.Z)(this,n),(r=t.call(this)).code=e;for(var i=arguments.length,a=new Array(i>1?i-1:0),u=1;u<i;u++)a[u-1]=arguments[u];return r.args=a,r.message=G(e,a),r}return(0,o.Z)(n)}((0,i.Z)(Error));function G(e,t){switch(e){case"E0001":return"Generic error";case"E0002":return"Expected an entry start";case"E0003":var n=(0,r.Z)(t,1)[0];return'Expected token: "'.concat(n,'"');case"E0004":var i=(0,r.Z)(t,1)[0];return'Expected a character from range: "'.concat(i,'"');case"E0005":var a=(0,r.Z)(t,1)[0];return'Expected message "'.concat(a,'" to have a value or attributes');case"E0006":var u=(0,r.Z)(t,1)[0];return'Expected term "-'.concat(u,'" to have a value');case"E0007":return"Keyword cannot end with a whitespace";case"E0008":return"The callee has to be an upper-case identifier or a term";case"E0009":return"The argument name has to be a simple identifier";case"E0010":return"Expected one of the variants to be marked as default (*)";case"E0011":return'Expected at least one variant after "->"';case"E0012":return"Expected value";case"E0013":return"Expected variant key";case"E0014":return"Expected literal";case"E0015":return"Only one variant can be marked as default (*)";case"E0016":return"Message references cannot be used as selectors";case"E0017":return"Terms cannot be used as selectors";case"E0018":return"Attributes of messages cannot be used as selectors";case"E0019":return"Attributes of terms cannot be used as placeables";case"E0020":return"Unterminated string expression";case"E0021":return"Positional arguments must not follow named arguments";case"E0022":return"Named arguments must be unique";case"E0024":return"Cannot access variants of a message.";case"E0025":var s=(0,r.Z)(t,1)[0];return"Unknown escape sequence: \\".concat(s,".");case"E0026":var c=(0,r.Z)(t,1)[0];return"Invalid Unicode escape sequence: ".concat(c,".");case"E0027":return"Unbalanced closing brace in TextElement.";case"E0028":return"Expected an inline expression";case"E0029":return"Expected simple expression as selector";default:return e}}var F=function(){function e(t){(0,c.Z)(this,e),this.string=t,this.index=0,this.peekOffset=0}return(0,o.Z)(e,[{key:"charAt",value:function(e){return"\r"===this.string[e]&&"\n"===this.string[e+1]?"\n":this.string[e]}},{key:"currentChar",value:function(){return this.charAt(this.index)}},{key:"currentPeek",value:function(){return this.charAt(this.index+this.peekOffset)}},{key:"next",value:function(){return this.peekOffset=0,"\r"===this.string[this.index]&&"\n"===this.string[this.index+1]&&this.index++,this.index++,this.string[this.index]}},{key:"peek",value:function(){return"\r"===this.string[this.index+this.peekOffset]&&"\n"===this.string[this.index+this.peekOffset+1]&&this.peekOffset++,this.peekOffset++,this.string[this.index+this.peekOffset]}},{key:"resetPeek",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.peekOffset=e}},{key:"skipToPeek",value:function(){this.index+=this.peekOffset,this.peekOffset=0}}]),e}(),$="\n",J=void 0,K=["}",".","[","*"],_=function(e){(0,a.Z)(n,e);var t=(0,u.Z)(n);function n(){return(0,c.Z)(this,n),t.apply(this,arguments)}return(0,o.Z)(n,[{key:"peekBlankInline",value:function(){for(var e=this.index+this.peekOffset;" "===this.currentPeek();)this.peek();return this.string.slice(e,this.index+this.peekOffset)}},{key:"skipBlankInline",value:function(){var e=this.peekBlankInline();return this.skipToPeek(),e}},{key:"peekBlankBlock",value:function(){for(var e="";;){var t=this.peekOffset;if(this.peekBlankInline(),this.currentPeek()!==$)return this.currentPeek()===J||this.resetPeek(t),e;e+=$,this.peek()}}},{key:"skipBlankBlock",value:function(){var e=this.peekBlankBlock();return this.skipToPeek(),e}},{key:"peekBlank",value:function(){for(;" "===this.currentPeek()||this.currentPeek()===$;)this.peek()}},{key:"skipBlank",value:function(){this.peekBlank(),this.skipToPeek()}},{key:"expectChar",value:function(e){if(this.currentChar()!==e)throw new U("E0003",e);this.next()}},{key:"expectLineEnd",value:function(){if(this.currentChar()!==J){if(this.currentChar()!==$)throw new U("E0003","\u2424");this.next()}}},{key:"takeChar",value:function(e){var t=this.currentChar();return t===J?J:e(t)?(this.next(),t):null}},{key:"isCharIdStart",value:function(e){if(e===J)return!1;var t=e.charCodeAt(0);return t>=97&&t<=122||t>=65&&t<=90}},{key:"isIdentifierStart",value:function(){return this.isCharIdStart(this.currentPeek())}},{key:"isNumberStart",value:function(){var e="-"===this.currentChar()?this.peek():this.currentChar();if(e===J)return this.resetPeek(),!1;var t=e.charCodeAt(0),n=t>=48&&t<=57;return this.resetPeek(),n}},{key:"isCharPatternContinuation",value:function(e){return e!==J&&!K.includes(e)}},{key:"isValueStart",value:function(){var e=this.currentPeek();return e!==$&&e!==J}},{key:"isValueContinuation",value:function(){var e=this.peekOffset;return this.peekBlankInline(),"{"===this.currentPeek()?(this.resetPeek(e),!0):this.peekOffset-e!==0&&(!!this.isCharPatternContinuation(this.currentPeek())&&(this.resetPeek(e),!0))}},{key:"isNextLineComment",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:-1;if(this.currentChar()!==$)return!1;for(var t=0;t<=e||-1===e&&t<3;){if("#"!==this.peek()){if(t<=e&&-1!==e)return this.resetPeek(),!1;break}t++}var n=this.peek();return" "===n||n===$?(this.resetPeek(),!0):(this.resetPeek(),!1)}},{key:"isVariantStart",value:function(){var e=this.peekOffset;return"*"===this.currentPeek()&&this.peek(),"["===this.currentPeek()?(this.resetPeek(e),!0):(this.resetPeek(e),!1)}},{key:"isAttributeStart",value:function(){return"."===this.currentPeek()}},{key:"skipToNextEntryStart",value:function(e){var t=this.string.lastIndexOf($,this.index);for(e<t&&(this.index=t);this.currentChar();)if(this.currentChar()===$){var n=this.next();if(this.isCharIdStart(n)||"-"===n||"#"===n)break}else this.next()}},{key:"takeIDStart",value:function(){if(this.isCharIdStart(this.currentChar())){var e=this.currentChar();return this.next(),e}throw new U("E0004","a-zA-Z")}},{key:"takeIDChar",value:function(){return this.takeChar((function(e){var t=e.charCodeAt(0);return t>=97&&t<=122||t>=65&&t<=90||t>=48&&t<=57||95===t||45===t}))}},{key:"takeDigit",value:function(){return this.takeChar((function(e){var t=e.charCodeAt(0);return t>=48&&t<=57}))}},{key:"takeHexDigit",value:function(){return this.takeChar((function(e){var t=e.charCodeAt(0);return t>=48&&t<=57||t>=65&&t<=70||t>=97&&t<=102}))}}]),n}(F),H=/[ \t\n\r]+$/;function Q(e){return function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];if(!this.withSpans)return e.call.apply(e,[this,t].concat(r));var a=t.index,u=e.call.apply(e,[this,t].concat(r));if(u.span)return u;var s=t.index;return u.addSpan(a,s),u}}var W=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.withSpans,r=void 0===n||n;(0,c.Z)(this,e),this.withSpans=r,this.getComment=Q(this.getComment),this.getMessage=Q(this.getMessage),this.getTerm=Q(this.getTerm),this.getAttribute=Q(this.getAttribute),this.getIdentifier=Q(this.getIdentifier),this.getVariant=Q(this.getVariant),this.getNumber=Q(this.getNumber),this.getPattern=Q(this.getPattern),this.getTextElement=Q(this.getTextElement),this.getPlaceable=Q(this.getPlaceable),this.getExpression=Q(this.getExpression),this.getInlineExpression=Q(this.getInlineExpression),this.getCallArgument=Q(this.getCallArgument),this.getCallArguments=Q(this.getCallArguments),this.getString=Q(this.getString),this.getLiteral=Q(this.getLiteral),this.getComment=Q(this.getComment)}return(0,o.Z)(e,[{key:"parse",value:function(e){var t=new _(e);t.skipBlankBlock();for(var n=[],r=null;t.currentChar();){var i=this.getEntryOrJunk(t),a=t.skipBlankBlock();i instanceof R&&0===a.length&&t.currentChar()?r=i:(r&&(i instanceof k||i instanceof g?(i.comment=r,this.withSpans&&(i.span.start=i.comment.span.start)):n.push(r),r=null),n.push(i))}var u=new v(n);return this.withSpans&&u.addSpan(0,t.index),u}},{key:"parseEntry",value:function(e){var t=new _(e);for(t.skipBlankBlock();"#"===t.currentChar();){var n=this.getEntryOrJunk(t);if(n instanceof M)return n;t.skipBlankBlock()}return this.getEntryOrJunk(t)}},{key:"getEntryOrJunk",value:function(e){var t=e.index;try{var n=this.getEntry(e);return e.expectLineEnd(),n}catch(c){if(!(c instanceof U))throw c;var r=e.index;e.skipToNextEntryStart(t);var i=e.index;i<r&&(r=i);var a=e.string.substring(t,i),u=new M(a);this.withSpans&&u.addSpan(t,i);var s=new z(c.code,c.args,c.message);return s.addSpan(r,r),u.addAnnotation(s),u}}},{key:"getEntry",value:function(e){if("#"===e.currentChar())return this.getComment(e);if("-"===e.currentChar())return this.getTerm(e);if(e.isIdentifierStart())return this.getMessage(e);throw new U("E0002")}},{key:"getComment",value:function(e){for(var t,n=-1,r="";;){for(var i=-1;"#"===e.currentChar()&&i<(-1===n?2:n);)e.next(),i++;if(-1===n&&(n=i),e.currentChar()!==$){e.expectChar(" ");for(var a=void 0;a=e.takeChar((function(e){return e!==$}));)r+=a}if(!e.isNextLineComment(n))break;r+=e.currentChar(),e.next()}switch(n){case 0:t=R;break;case 1:t=L;break;default:t=D}return new t(r)}},{key:"getMessage",value:function(e){var t=this.getIdentifier(e);e.skipBlankInline(),e.expectChar("=");var n=this.maybeGetPattern(e),r=this.getAttributes(e);if(null===n&&0===r.length)throw new U("E0005",t.name);return new k(t,n,r)}},{key:"getTerm",value:function(e){e.expectChar("-");var t=this.getIdentifier(e);e.skipBlankInline(),e.expectChar("=");var n=this.maybeGetPattern(e);if(null===n)throw new U("E0006",t.name);var r=this.getAttributes(e);return new g(t,n,r)}},{key:"getAttribute",value:function(e){e.expectChar(".");var t=this.getIdentifier(e);e.skipBlankInline(),e.expectChar("=");var n=this.maybeGetPattern(e);if(null===n)throw new U("E0012");return new O(t,n)}},{key:"getAttributes",value:function(e){var t=[];for(e.peekBlank();e.isAttributeStart();){e.skipToPeek();var n=this.getAttribute(e);t.push(n),e.peekBlank()}return t}},{key:"getIdentifier",value:function(e){for(var t,n=e.takeIDStart();t=e.takeIDChar();)n+=t;return new N(n)}},{key:"getVariantKey",value:function(e){var t=e.currentChar();if(t===J)throw new U("E0013");var n=t.charCodeAt(0);return n>=48&&n<=57||45===n?this.getNumber(e):this.getIdentifier(e)}},{key:"getVariant",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=!1;if("*"===e.currentChar()){if(t)throw new U("E0015");e.next(),n=!0}e.expectChar("["),e.skipBlank();var r=this.getVariantKey(e);e.skipBlank(),e.expectChar("]");var i=this.maybeGetPattern(e);if(null===i)throw new U("E0012");return new T(r,i,n)}},{key:"getVariants",value:function(e){var t=[],n=!1;for(e.skipBlank();e.isVariantStart();){var r=this.getVariant(e,n);r.default&&(n=!0),t.push(r),e.expectLineEnd(),e.skipBlank()}if(0===t.length)throw new U("E0011");if(!n)throw new U("E0010");return t}},{key:"getDigits",value:function(e){for(var t,n="";t=e.takeDigit();)n+=t;if(0===n.length)throw new U("E0004","0-9");return n}},{key:"getNumber",value:function(e){var t="";return"-"===e.currentChar()?(e.next(),t+="-".concat(this.getDigits(e))):t+=this.getDigits(e),"."===e.currentChar()&&(e.next(),t+=".".concat(this.getDigits(e))),new C(t)}},{key:"maybeGetPattern",value:function(e){return e.peekBlankInline(),e.isValueStart()?(e.skipToPeek(),this.getPattern(e,!1)):(e.peekBlankBlock(),e.isValueContinuation()?(e.skipToPeek(),this.getPattern(e,!0)):null)}},{key:"getPattern",value:function(e,t){var n,r,i=[];if(t){var a=e.index,u=e.skipBlankInline();i.push(this.getIndent(e,u,a)),n=u.length}else n=1/0;e:for(;r=e.currentChar();)switch(r){case $:var s=e.index,c=e.peekBlankBlock();if(e.isValueContinuation()){e.skipToPeek();var o=e.skipBlankInline();n=Math.min(n,o.length),i.push(this.getIndent(e,c+o,s));continue e}e.resetPeek();break e;case"{":i.push(this.getPlaceable(e));continue e;case"}":throw new U("E0027");default:i.push(this.getTextElement(e))}var h=this.dedent(i,n);return new d(h)}},{key:"getIndent",value:function(e,t,n){return new X(t,n,e.index)}},{key:"dedent",value:function(e,t){var n,r=[],i=(0,s.Z)(e);try{for(i.s();!(n=i.n()).done;){var a=n.value;if(a instanceof Z)r.push(a);else if(!(a instanceof X&&(a.value=a.value.slice(0,a.value.length-t),0===a.value.length))){var u=r[r.length-1];if(u&&u instanceof y){var c=new y(u.value+a.value);this.withSpans&&c.addSpan(u.span.start,a.span.end),r[r.length-1]=c}else{if(a instanceof X){var o=new y(a.value);this.withSpans&&o.addSpan(a.span.start,a.span.end),a=o}r.push(a)}}}}catch(l){i.e(l)}finally{i.f()}var h=r[r.length-1];return h instanceof y&&(h.value=h.value.replace(H,""),0===h.value.length&&r.pop()),r}},{key:"getTextElement",value:function(e){for(var t,n="";t=e.currentChar();){if("{"===t||"}"===t)return new y(n);if(t===$)return new y(n);n+=t,e.next()}return new y(n)}},{key:"getEscapeSequence",value:function(e){var t=e.currentChar();switch(t){case"\\":case'"':return e.next(),"\\".concat(t);case"u":return this.getUnicodeEscapeSequence(e,t,4);case"U":return this.getUnicodeEscapeSequence(e,t,6);default:throw new U("E0025",t)}}},{key:"getUnicodeEscapeSequence",value:function(e,t,n){e.expectChar(t);for(var r="",i=0;i<n;i++){var a=e.takeHexDigit();if(!a)throw new U("E0026","\\".concat(t).concat(r).concat(e.currentChar()));r+=a}return"\\".concat(t).concat(r)}},{key:"getPlaceable",value:function(e){e.expectChar("{"),e.skipBlank();var t=this.getExpression(e);return e.expectChar("}"),new Z(t)}},{key:"getExpression",value:function(e){var t=this.getInlineExpression(e);if(e.skipBlank(),"-"===e.currentChar()){if(">"!==e.peek())return e.resetPeek(),t;if(t instanceof b)throw null===t.attribute?new U("E0016"):new U("E0018");if(t instanceof P){if(null===t.attribute)throw new U("E0017")}else if(t instanceof Z)throw new U("E0029");e.next(),e.next(),e.skipBlankInline(),e.expectLineEnd();var n=this.getVariants(e);return new I(t,n)}if(t instanceof P&&null!==t.attribute)throw new U("E0019");return t}},{key:"getInlineExpression",value:function(e){if("{"===e.currentChar())return this.getPlaceable(e);if(e.isNumberStart())return this.getNumber(e);if('"'===e.currentChar())return this.getString(e);if("$"===e.currentChar()){e.next();var t=this.getIdentifier(e);return new S(t)}if("-"===e.currentChar()){e.next();var n,r,i=this.getIdentifier(e);return"."===e.currentChar()&&(e.next(),n=this.getIdentifier(e)),e.peekBlank(),"("===e.currentPeek()&&(e.skipToPeek(),r=this.getCallArguments(e)),new P(i,n,r)}if(e.isIdentifierStart()){var a,u=this.getIdentifier(e);if(e.peekBlank(),"("===e.currentPeek()){if(!/^[A-Z][A-Z0-9_-]*$/.test(u.name))throw new U("E0008");e.skipToPeek();var s=this.getCallArguments(e);return new B(u,s)}return"."===e.currentChar()&&(e.next(),a=this.getIdentifier(e)),new b(u,a)}throw new U("E0028")}},{key:"getCallArgument",value:function(e){var t=this.getInlineExpression(e);if(e.skipBlank(),":"!==e.currentChar())return t;if(t instanceof b&&null===t.attribute){e.next(),e.skipBlank();var n=this.getLiteral(e);return new V(t.id,n)}throw new U("E0009")}},{key:"getCallArguments",value:function(e){var t=[],n=[],r=new Set;for(e.expectChar("("),e.skipBlank();")"!==e.currentChar();){var i=this.getCallArgument(e);if(i instanceof V){if(r.has(i.name.name))throw new U("E0022");n.push(i),r.add(i.name.name)}else{if(r.size>0)throw new U("E0021");t.push(i)}if(e.skipBlank(),","!==e.currentChar())break;e.next(),e.skipBlank()}return e.expectChar(")"),new A(t,n)}},{key:"getString",value:function(e){e.expectChar('"');for(var t,n="";t=e.takeChar((function(e){return'"'!==e&&e!==$}));)n+="\\"===t?this.getEscapeSequence(e):t;if(e.currentChar()===$)throw new U("E0020");return e.expectChar('"'),new E(n)}},{key:"getLiteral",value:function(e){if(e.isNumberStart())return this.getNumber(e);if('"'===e.currentChar())return this.getString(e);throw new U("E0014")}}]),e}(),X=(0,o.Z)((function e(t,n,r){(0,c.Z)(this,e),this.type="Indent",this.value=t,this.span=new q(n,r)}));function Y(e,t){return new W(t).parse(e)}var ee=function(e){return"get"+e.type},te={serialize:function(e){if(this[ee(e)])return this[ee(e)](e);console.warn("unknown type:",e.type,e)},getComment:function(e){return{key:"comment",value:e.content}},getGroupComment:function(){return null},getResourceComment:function(){return null},getMessage:function(e){var t=this;return{key:this[ee(e.id)](e.id),value:this[ee(e.value)](e.value),comment:e.comment&&this[ee(e.comment)](e.comment),attributes:e.attributes&&e.attributes.map((function(e){return t.serialize(e)}))}},getAttribute:function(e){return{key:this[ee(e.id)](e.id),value:this[ee(e.value)](e.value)}},getTerm:function(e){var t=this;return{key:"-".concat(this[ee(e.id)](e.id)),value:this[ee(e.value)](e.value),comment:e.comment&&this[ee(e.comment)](e.comment),attributes:e.attributes&&e.attributes.map((function(e){return t.serialize(e)}))}},getIdentifier:function(e){return e.name},getStringLiteral:function(e){return e.value},getPattern:function(e){var t=this;return e.elements.map((function(e){return e.expression?t[ee(e.expression)]?t[ee(e.expression)](e.expression):console.log("unknown1",ee(e.expression),e.expression):t[ee(e)]?t[ee(e)](e):console.log("unknown2",ee(e),e)})).join("")},getCallExpression:function(e){var t=this,n=e.callee.name,r=e.positional.map((function(e){return t[ee(e)](e,!0)})),i=e.named.map((function(e){return t[ee(e)](e)}));return"{ "+n+"($"+r.join(" ")+(i.length?", "+i.join(", "):"")+") }"},getNamedArgument:function(e){return this[ee(e.name)](e.name)+': "'+this[ee(e.value)](e.value)+'"'},getTextElement:function(e){return e.value},getSelectExpression:function(e){var t=this;return"{ $"+this[ee(e.selector)](e.selector,!0)+" ->\n"+e.variants.map((function(e){return t[ee(e)](e)})).join("\n")+"\n}"},getVariantExpression:function(e){var t=this[ee(e.ref)](e.ref,!0),n=this[ee(e.key)](e.key);return n?"{ "+t+"["+n+"] }":" { "+t+" } "},getVariableReference:function(e,t){return t?this[ee(e.id)](e.id):"{ $"+this[ee(e.id)](e.id)+" }"},getTermReferences:function(e,t){return t?this[ee(e.id)](e.id):"{ "+this[ee(e.id)](e.id)+" }"},getVariantName:function(e){return e.name},getVariantList:function(e){var t=this;return"{\n"+e.variants.map((function(e){return t[ee(e)](e)})).join("\n")+"\n}"},getVariant:function(e){var t=e.key.name?e.key.name:e.key.value,n=e.default,r="["+t+"] "+this[ee(e.value)](e.value);return n?" *"+r:"  "+r},getFunctionReference:function(e){var t="";return e.arguments.positional.forEach((function(e,n){n>0&&(t+=", "),t+="$".concat(e.id.name)})),e.arguments.named.forEach((function(e,n){(n>0||""!==t)&&(t+=", "),t+="".concat(e.name.name,': "').concat(e.value.value,'"')})),"{ ".concat(e.id.name,"(").concat(t,") }")},getTermReference:function(e){return"{ -".concat(e.id.name," }")},getJunk:function(e){var t=e.content.split("=");return{key:t.shift().trim(),value:t.join("=").trim().replace(/\n {3}/g,"\n ").replace(/\n {2}}/g,"\n}")}}};function ne(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{respectComments:!0};if("string"!==typeof e){if(!t)throw new Error("The first parameter was not a string");return t(new Error("The first parameter was not a string"))}var r=Y(e,{withSpans:!1}),i=r.body.reduce((function(e,t){var r=te.serialize(t);if(!r)return e;if(r.attributes&&r.attributes.length||r.comment&&n.respectComments){var i={};r.comment&&(i[r.comment.key]=r.comment.value),r.attributes&&r.attributes.length&&r.attributes.forEach((function(e){i[e.key]=e.value})),i.val=r.value,e[r.key]=i}else e[r.key]=r.value;return e}),{});return t&&t(null,i),i}function re(e,t){var n="";return n=n+e+" =",t&&t.indexOf("\n")>-1?(n+="\n  ",n+=t.split("\n").join("\n  ")):n=n+" "+t,n}function ie(e,t){var n="";return Object.keys(e).forEach((function(t){var r=e[t];"string"===typeof r?(n+=re(t,r),n+="\n\n"):(r.comment&&(n+=function(e){var t="";return t=t+"# "+e.split("\n").join("\n# "),t+"\n"}(r.comment)),n+=re(t,r.val),Object.keys(r).forEach((function(e){if("comment"!==e&&"val"!==e){var t=r[e];n+=re("\n  ."+e,t)}})),n+="\n\n")})),t&&t(null,n),n}var ae={ftl2js:ne,js2ftl:ie};t.default=ae},6906:function(e,t,n){n.d(t,{Z:function(){return u}});var r=n(5058),i=n(352),a=n(1987);function u(e){var t=(0,i.Z)();return function(){var n,i=(0,r.Z)(e);if(t){var u=(0,r.Z)(this).constructor;n=Reflect.construct(i,arguments,u)}else n=i.apply(this,arguments);return(0,a.Z)(this,n)}}},352:function(e,t,n){function r(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}n.d(t,{Z:function(){return r}})},5991:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(5058),i=n(8960);var a=n(352);function u(e,t,n){return u=(0,a.Z)()?Reflect.construct.bind():function(e,t,n){var r=[null];r.push.apply(r,t);var a=new(Function.bind.apply(e,r));return n&&(0,i.Z)(a,n.prototype),a},u.apply(null,arguments)}function s(e){var t="function"===typeof Map?new Map:void 0;return s=function(e){if(null===e||(n=e,-1===Function.toString.call(n).indexOf("[native code]")))return e;var n;if("function"!==typeof e)throw new TypeError("Super expression must either be null or a function");if("undefined"!==typeof t){if(t.has(e))return t.get(e);t.set(e,a)}function a(){return u(e,arguments,(0,r.Z)(this).constructor)}return a.prototype=Object.create(e.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),(0,i.Z)(a,e)},s(e)}}}]);
//# sourceMappingURL=889.db161b9c.chunk.js.map