!function(e){function t(t){for(var r,c,u=t[0],l=t[1],i=t[2],f=0,p=[];f<u.length;f++)c=u[f],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&p.push(o[c][0]),o[c]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);for(s&&s(t);p.length;)p.shift()();return a.push.apply(a,i||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,u=1;u<n.length;u++){var l=n[u];0!==o[l]&&(r=!1)}r&&(a.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},o={0:0},a=[];function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/";var u=window.webpackJsonp=window.webpackJsonp||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var i=0;i<u.length;i++)t(u[i]);var s=l;a.push([235,1]),n()}({235:function(e,t,n){e.exports=n(506)},506:function(e,t,n){"use strict";n.r(t);n(236),n(423);var r=n(0),o=n.n(r),a=n(19),c=n.n(a),u=n(47),l=n(519),i=n(515),s=n(514),f=n(520),p=n(233),m=n(516),d=n(57),y=n(20);function h(e,t,n,r,o,a,c){try{var u=e[a](c),l=u.value}catch(e){return void n(e)}u.done?t(l):Promise.resolve(l).then(r,o)}function b(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var a=e.apply(t,n);function c(e){h(a,r,o,c,u,"next",e)}function u(e){h(a,r,o,c,u,"throw",e)}c(void 0)}))}}function v(e){return E.apply(this,arguments)}function E(){return(E=b(regeneratorRuntime.mark((function e(t){var n,r,o,a,c=arguments;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=c.length>1&&void 0!==c[1]?c[1]:{},e.next=3,fetch(window.ENV.UI_API_ENDPOINT,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:t,variables:n})});case 3:return r=e.sent,e.next=6,r.text();case 6:return o=e.sent,a=JSON.parse(o),e.abrupt("return",a.data);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var g=n(507),O=n(508),w=n(522),P=n(121);function S(e){var t=e.products,n=e.deleteProduct,r=t.map((function(e){return o.a.createElement(j,{key:e.id,product:e,deleteProduct:n,index:e.id})})),a={border:"1px solid black",padding:6};return o.a.createElement(g.a,{bordered:!0,condensed:!0,hover:!0,responsive:!0},o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",{style:a},"Name"),o.a.createElement("th",{style:a},"Price"),o.a.createElement("th",{style:a},"Category"),o.a.createElement("th",{style:a},"Action"))),o.a.createElement("tbody",null,r))}function j(e){var t=e.product,n=e.deleteProduct,r=e.index,a={border:"1px solid black",padding:4},c=o.a.createElement(O.a,{id:"delete-tooltip",placement:"top"},"Delete Product"),u=o.a.createElement(O.a,{id:"edit-tooltip",placement:"top"},"Edit Product");O.a;return o.a.createElement("tr",null,o.a.createElement("td",{style:a},t.name),o.a.createElement("td",{style:a},"$",t.price),o.a.createElement("td",{style:a},t.category),o.a.createElement("td",{style:a}," ",o.a.createElement(d.LinkContainer,{to:"/edit/".concat(t.id)},o.a.createElement(w.a,{delayShow:1e3,overlay:u},o.a.createElement(P.a,{bsSize:"xsmall"},o.a.createElement(p.a,{glyph:"edit"}))))," ",o.a.createElement(w.a,{delayShow:1e3,overlay:c},o.a.createElement(P.a,{bsSize:"xsmall",onClick:function(e){e.preventDefault(),n(r)}},o.a.createElement(p.a,{glyph:"trash"})))))}var R=n(1),k=n.n(R),C=n(509),_=n(510),x=n(511),B=n(521);function L(e){return(L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function D(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function U(e,t){return(U=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function T(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=J(e);if(t){var o=J(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return I(this,n)}}function I(e,t){return!t||"object"!==L(t)&&"function"!=typeof t?M(e):t}function M(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function J(e){return(J=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var A=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&U(e,t)}(c,e);var t,n,r,a=T(c);function c(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),(e=a.call(this)).handleSubmit=e.handleSubmit.bind(M(e)),e}return t=c,(n=[{key:"handleSubmit",value:function(e){e.preventDefault();var t=document.forms.productAdd,n={name:t.name.value,price:t.price.value,category:t.category.value,imageURL:t.imageURL.value};(0,this.props.createProduct)(n),t.name.value="",t.price.value="",t.category.value="",t.imageURL.value=""}},{key:"render",value:function(){return o.a.createElement(C.a,{name:"productAdd",onSubmit:this.handleSubmit},o.a.createElement("div",null,o.a.createElement("h2",null,"Add a new product to inventory"),o.a.createElement(_.a,null,o.a.createElement(x.a,null,"Name")," ",o.a.createElement(B.a,{type:"text",name:"name"})),o.a.createElement(_.a,null,o.a.createElement(x.a,null,"Price")," ",o.a.createElement(B.a,{type:"text",name:"price"})),o.a.createElement(_.a,null,o.a.createElement(x.a,null,"Category"),o.a.createElement(B.a,{componentClass:"select",name:"category"},o.a.createElement("option",{value:"Shirts"},"Shirts"),o.a.createElement("option",{value:"Jeans"},"Jeans"),o.a.createElement("option",{value:"Jackets"},"Jackets"),o.a.createElement("option",{value:"Sweaters"},"Sweaters"),o.a.createElement("option",{value:"Accessories"},"Accessories"))),o.a.createElement(_.a,null,o.a.createElement(x.a,null,"Image URL")," ",o.a.createElement(B.a,{type:"text",name:"imageURL"}))," ",o.a.createElement("div",{className:"d-grid gap-2 col-6 mx-auto"},o.a.createElement(P.a,{bsStyle:"primary",type:"submit"},"Add Product"))))}}])&&D(t.prototype,n),r&&D(t,r),c}(o.a.Component);function N(e){return(N="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function $(e,t,n,r,o,a,c){try{var u=e[a](c),l=u.value}catch(e){return void n(e)}u.done?t(l):Promise.resolve(l).then(r,o)}function F(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var a=e.apply(t,n);function c(e){$(a,r,o,c,u,"next",e)}function u(e){$(a,r,o,c,u,"throw",e)}c(void 0)}))}}function H(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function q(e,t){return(q=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function z(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=K(e);if(t){var o=K(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return V(this,n)}}function V(e,t){return!t||"object"!==N(t)&&"function"!=typeof t?G(e):t}function G(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function K(e){return(K=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}A.propTypes={createProduct:k.a.func.isRequired};var Q=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&q(e,t)}(i,e);var t,n,r,a,c,u,l=z(i);function i(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),(e=l.call(this)).state={products:[]},e.createProduct=e.createProduct.bind(G(e)),e.deleteProduct=e.deleteProduct.bind(G(e)),e}return t=i,(n=[{key:"componentDidMount",value:function(){this.loadData()}},{key:"loadData",value:(u=F(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,v("query {\n          productlist {\n          _id\n            id\n            name\n            price\n            category\n            imageURL\n          }\n        }");case 3:(t=e.sent)&&this.setState({products:t.productlist});case 5:case"end":return e.stop()}}),e,this)}))),function(){return u.apply(this,arguments)})},{key:"createProduct",value:(c=F(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,v("mutation addprod($product: productInput!) {\n              addprod(product: $product) {\n                  id\n              }\n            }",{product:t});case 3:e.sent&&this.loadData();case 5:case"end":return e.stop()}}),e,this)}))),function(e){return c.apply(this,arguments)})},{key:"deleteProduct",value:(a=F(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,v("mutation deleteProduct($id: Int!) {\n        deleteProduct(id: $id)\n      }",{id:t});case 3:e.sent&&(this.loadData(),alert("Product deleted product successfully!"));case 5:case"end":return e.stop()}}),e,this)}))),function(e){return a.apply(this,arguments)})},{key:"render",value:function(){return o.a.createElement("section",null,o.a.createElement("h2",null,"Showing all available products "),o.a.createElement("hr",null),o.a.createElement(S,{products:this.state.products,deleteProduct:this.deleteProduct}),o.a.createElement("hr",null),o.a.createElement("section",null,o.a.createElement(A,{createProduct:this.createProduct})))}}])&&H(t.prototype,n),r&&H(t,r),i}(o.a.Component);function W(){return o.a.createElement("div",null,o.a.createElement("h2",null,"This is a placeholder for the Product Report"))}function X(e){return(X="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Y(){return(Y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function Z(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function ee(e,t){return(ee=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function te(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=oe(e);if(t){var o=oe(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return ne(this,n)}}function ne(e,t){return!t||"object"!==X(t)&&"function"!=typeof t?re(e):t}function re(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function oe(e){return(oe=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var ae=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&ee(e,t)}(c,e);var t,n,r,a=te(c);function c(e){var t,n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),(t=a.call(this,e)).state={value:(n=e.value,null!=n?n.toString():"")},t.onBlur=t.onBlur.bind(re(t)),t.onChange=t.onChange.bind(re(t)),t}return t=c,(n=[{key:"onChange",value:function(e){e.target.value.match(/^\d*$/)&&this.setState({value:e.target.value})}},{key:"onBlur",value:function(e){var t,n=this.props.onChange,r=this.state.value;n(e,(t=parseInt(r,10),Number.isNaN(t)?null:t))}},{key:"render",value:function(){var e=this.state.value;return o.a.createElement("input",Y({type:"text"},this.props,{value:e,onBlur:this.onBlur,onChange:this.onChange}))}}])&&Z(t.prototype,n),r&&Z(t,r),c}(o.a.Component);function ce(e){return(ce="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function ue(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function le(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ue(Object(n),!0).forEach((function(t){ie(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ue(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function ie(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function se(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function fe(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function pe(e,t){return(pe=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function me(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=he(e);if(t){var o=he(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return de(this,n)}}function de(e,t){return!t||"object"!==ce(t)&&"function"!=typeof t?ye(e):t}function ye(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function he(e){return(he=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var be=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&pe(e,t)}(c,e);var t,n,r,a=me(c);function c(e){var t,n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),(t=a.call(this,e)).state={value:(n=e.value,null!=n?n:"")},t.onBlur=t.onBlur.bind(ye(t)),t.onChange=t.onChange.bind(ye(t)),t}return t=c,(n=[{key:"onChange",value:function(e){this.setState({value:e.target.value})}},{key:"onBlur",value:function(e){var t,n=this.props.onChange,r=this.state.value;n(e,0===(t=r).trim().length?null:t)}},{key:"render",value:function(){var e=this.state.value,t=this.props,n=t.tag,r=void 0===n?"input":n,a=se(t,["tag"]);return o.a.createElement(r,le(le({},a),{},{value:e,onBlur:this.onBlur,onChange:this.onChange}))}}])&&fe(t.prototype,n),r&&fe(t,r),c}(o.a.Component),ve=n(517),Ee=n(512),ge=n(513);function Oe(e){return(Oe="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function we(e,t,n,r,o,a,c){try{var u=e[a](c),l=u.value}catch(e){return void n(e)}u.done?t(l):Promise.resolve(l).then(r,o)}function Pe(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var a=e.apply(t,n);function c(e){we(a,r,o,c,u,"next",e)}function u(e){we(a,r,o,c,u,"throw",e)}c(void 0)}))}}function Se(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function je(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Se(Object(n),!0).forEach((function(t){Re(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Se(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function Re(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ke(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Ce(e,t){return(Ce=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _e(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Le(e);if(t){var o=Le(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return xe(this,n)}}function xe(e,t){return!t||"object"!==Oe(t)&&"function"!=typeof t?Be(e):t}function Be(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Le(e){return(Le=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var De=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Ce(e,t)}(i,e);var t,n,r,a,c,l=_e(i);function i(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),(e=l.call(this)).state={product:{}},e.onChange=e.onChange.bind(Be(e)),e.handleSubmit=e.handleSubmit.bind(Be(e)),e}return t=i,(n=[{key:"componentDidMount",value:function(){this.loadData()}},{key:"componentDidUpdate",value:function(e){var t=e.match.params.id;this.props.match.params.id!==t&&this.loadData()}},{key:"onChange",value:function(e){var t=e.target,n=t.name,r=t.value;this.setState((function(e){return{product:je(je({},e.product),{},Re({},n,r))}}))}},{key:"handleSubmit",value:(c=Pe(regeneratorRuntime.mark((function e(t){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n=this.state.product,console.log(n),e.next=6,v("mutation updateProduct($product: ProductUpdateInput!) {\n                updateProduct(product: $product) {\n                    id name price category\n                    imageURL\n                }\n              }",{product:n});case 6:(r=e.sent)&&(this.setState({product:r.updateProduct}),alert("Updated product successfully"));case 8:case"end":return e.stop()}}),e,this)}))),function(e){return c.apply(this,arguments)})},{key:"loadData",value:(a=Pe(regeneratorRuntime.mark((function e(){var t,n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.match.params.id,e.next=4,v("query product($id: Int!) {\n    product(id: $id ) {\n    id name price category\n    imageURL\n}\n}",{id:t});case 4:n=e.sent,console.log(n),n?((r=n.product).name=null!=r.name?r.name:"",r.price=null!=r.price?r.price:"",r.category=null!=r.category?r.category:"",r.imageURL=null!=r.imageURL?r.imageURL:"",this.setState({product:r})):this.setState({product:{}});case 7:case"end":return e.stop()}}),e,this)}))),function(){return a.apply(this,arguments)})},{key:"render",value:function(){var e=this.state.product.id,t=this.props.match.params.id;if(null==e)return null!=t?o.a.createElement("h3",null,"Product with ID ".concat(t," not found.")):null;var n=this.state.product,r=n.name,a=n.category,c=n.price,l=n.imageURL;return o.a.createElement("section",null,o.a.createElement(ve.a,null,o.a.createElement(ve.a.Heading,null,o.a.createElement(ve.a.Title,null,"Editing Product: ".concat(e))),o.a.createElement(ve.a.Body,null,o.a.createElement(C.a,{horizontal:!0,onSubmit:this.handleSubmit},o.a.createElement(_.a,null,o.a.createElement(Ee.a,{componentClass:x.a,sm:3},"Name"),o.a.createElement(Ee.a,{sm:9},o.a.createElement(B.a,{componentClass:be,name:"name",value:r,onChange:this.onChange,key:e}))),o.a.createElement(_.a,null,o.a.createElement(Ee.a,{componentClass:x.a,sm:3},"Category"),o.a.createElement(Ee.a,{sm:9},o.a.createElement(B.a,{componentClass:"select",name:"category",value:a,onChange:this.onChange},o.a.createElement("option",{value:"Shirts"},"Shirts"),o.a.createElement("option",{value:"Jeans"},"Jeans"),o.a.createElement("option",{value:"Jackets"},"Jackets"),o.a.createElement("option",{value:"Sweaters"},"Sweaters"),o.a.createElement("option",{value:"Accessories"},"Accessories")))),o.a.createElement(_.a,null,o.a.createElement(Ee.a,{componentClass:x.a,sm:3},"Price"),o.a.createElement(Ee.a,{sm:9},o.a.createElement(B.a,{componentClass:ae,name:"price",value:c,onChange:this.onChange,key:e}))),o.a.createElement(_.a,null,o.a.createElement(Ee.a,{componentClass:x.a,sm:3},"ImageURL"),o.a.createElement(Ee.a,{sm:9},o.a.createElement(B.a,{componentClass:be,name:"imageURL",value:l,onChange:this.onChange,key:e}))),o.a.createElement(_.a,null,o.a.createElement(Ee.a,{smOffset:3,sm:6},o.a.createElement(ge.a,null,o.a.createElement(P.a,{bsStyle:"primary",type:"submit"},"Submit"),o.a.createElement(d.LinkContainer,{to:"/products"},o.a.createElement(P.a,{bsStyle:"link"},"Back"))))))),o.a.createElement(ve.a.Footer,null,o.a.createElement(u.Link,{to:"/edit/".concat(e-1)},"Prev")," | ",o.a.createElement(u.Link,{to:"/edit/".concat(e+1)},"Next"))))}}])&&ke(t.prototype,n),r&&ke(t,r),i}(o.a.Component);function Ue(e){var t=e.match.params.url;return console.log(decodeURIComponent(t)),o.a.createElement("div",null,o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("img",{src:decodeURIComponent(t),alt:""}))}var Te=function(){return o.a.createElement("h1",null,"Page Not Found")};function Ie(){return o.a.createElement(y.g,null,o.a.createElement(y.c,{exact:!0,from:"/",to:"/products"}),o.a.createElement(y.d,{path:"/products",component:Q}),o.a.createElement(y.d,{path:"/edit/:id",component:De}),o.a.createElement(y.d,{path:"/image/:url",component:Ue}),o.a.createElement(y.d,{path:"/report",component:W}),o.a.createElement(y.d,{component:Te}))}var Me=n(518);function Je(e){return(Je="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Ae(e,t,n,r,o,a,c){try{var u=e[a](c),l=u.value}catch(e){return void n(e)}u.done?t(l):Promise.resolve(l).then(r,o)}function Ne(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function $e(e,t){return($e=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function Fe(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=ze(e);if(t){var o=ze(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return He(this,n)}}function He(e,t){return!t||"object"!==Je(t)&&"function"!=typeof t?qe(e):t}function qe(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function ze(e){return(ze=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var Ve=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&$e(e,t)}(l,e);var t,n,r,a,c,u=Fe(l);function l(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l),(t=u.call(this,e)).state={showing:!1},t.showModal=t.showModal.bind(qe(t)),t.hideModal=t.hideModal.bind(qe(t)),t.handleSubmit=t.handleSubmit.bind(qe(t)),t}return t=l,(n=[{key:"showModal",value:function(){this.setState({showing:!0})}},{key:"hideModal",value:function(){this.setState({showing:!1})}},{key:"handleSubmit",value:(a=regeneratorRuntime.mark((function e(t){var n,r,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),this.hideModal(),n=document.forms.addprod,r={name:n.name.value,price:n.price.value,category:n.category.value,imageURL:n.imageURL.value},e.next=7,v("mutation addprod($product: productInput!) {\n        addprod(product: $product) {\n            id\n        }\n      }",{product:r});case 7:o=e.sent,console.log(o),o&&this.props.history.push("/edit/".concat(o.addprod.id));case 10:case"end":return e.stop()}}),e,this)})),c=function(){var e=this,t=arguments;return new Promise((function(n,r){var o=a.apply(e,t);function c(e){Ae(o,n,r,c,u,"next",e)}function u(e){Ae(o,n,r,c,u,"throw",e)}c(void 0)}))},function(e){return c.apply(this,arguments)})},{key:"render",value:function(){var e=this.state.showing;return o.a.createElement(o.a.Fragment,null,o.a.createElement(s.a,{onClick:this.showModal},o.a.createElement(w.a,{placement:"left",delayShow:1e3,overlay:o.a.createElement(O.a,{id:"add-product"},"Add Product")},o.a.createElement(p.a,{glyph:"plus"}))),o.a.createElement(Me.a,{keyboard:!0,show:e,onHide:this.hideModal},o.a.createElement(Me.a.Header,{closeButton:!0},o.a.createElement(Me.a.Title,null,"Add Product")),o.a.createElement(Me.a.Body,null,o.a.createElement(C.a,{name:"addprod",onSubmit:this.handleSubmit},o.a.createElement(_.a,null,o.a.createElement(x.a,null,"Category:"),o.a.createElement(B.a,{componentClass:"select",name:"category",autoFocus:!0},o.a.createElement("option",{value:"Shirts"},"Shirts"),o.a.createElement("option",{value:"Jeans"},"Jeans"),o.a.createElement("option",{value:"Jackets"},"Jackets"),o.a.createElement("option",{value:"Sweaters"},"Sweaters"),o.a.createElement("option",{value:"Accessories"},"Accessories"))),o.a.createElement(_.a,null,o.a.createElement(x.a,null,"Name"),o.a.createElement(B.a,{name:"name"})),o.a.createElement(_.a,null,o.a.createElement(x.a,null,"Price"),o.a.createElement(B.a,{name:"price"})),o.a.createElement(_.a,null,o.a.createElement(x.a,null,"Image URL"),o.a.createElement(B.a,{name:"imageURL"})))),o.a.createElement(Me.a.Footer,null,o.a.createElement(ge.a,null,o.a.createElement(P.a,{type:"button",bsStyle:"primary",onClick:this.handleSubmit},"Submit"),o.a.createElement(P.a,{bsStyle:"link",onClick:this.hideModal},"Cancel")))))}}])&&Ne(t.prototype,n),r&&Ne(t,r),l}(o.a.Component),Ge=Object(y.o)(Ve);function Ke(){return o.a.createElement(l.a,null,o.a.createElement(l.a.Header,null,o.a.createElement(l.a.Brand,null,"My Company Inventory")),o.a.createElement(i.a,null,o.a.createElement(d.LinkContainer,{exact:!0,to:"/"},o.a.createElement(s.a,null,"Home")),o.a.createElement(d.LinkContainer,{to:"/products"},o.a.createElement(s.a,null,"Product List")),o.a.createElement(d.LinkContainer,{to:"/report"},o.a.createElement(s.a,null,"Report"))),o.a.createElement(i.a,{pullRight:!0},o.a.createElement(Ge,null),o.a.createElement(f.a,{id:"user-dropdown",title:o.a.createElement(p.a,{glyph:"option-vertical"}),noCaret:!0},o.a.createElement(m.a,null,"About"))))}function Qe(){return o.a.createElement("div",null,o.a.createElement(Ke,null),o.a.createElement(Ie,null))}var We=o.a.createElement(u.BrowserRouter,null,o.a.createElement(Qe,null)),Xe=document.getElementById("contents");c.a.render(We,Xe)}});
//# sourceMappingURL=app.bundle.js.map