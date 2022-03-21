(this["webpackJsonpreact-auth-code-input-example"]=this["webpackJsonpreact-auth-code-input-example"]||[]).push([[0],{1:function(e,t,n){},10:function(e,t,n){"use strict";n.r(t);n(1);var a=n(0),r=n.n(a),u=n(3),c=n.n(u),l=n(4),o=["alpha","numeric","alphanumeric"],i={alpha:{type:"text",inputMode:"text",pattern:"[a-zA-Z]{1}"},alphanumeric:{type:"text",inputMode:"text",pattern:"[a-zA-Z0-9]{1}"},numeric:{type:"number",inputMode:"numeric",pattern:"[0-9]{1}",min:"0",max:"9"}},s=Object(a.forwardRef)((function(e,t){var n=e.allowedCharacters,u=void 0===n?"alphanumeric":n,c=e.ariaLabel,l=e.autoFocus,s=void 0===l||l,m=e.length,p=void 0===m?6:m,h=e.containerClassName,d=e.inputClassName,f=e.isPassword,g=void 0!==f&&f,v=e.onChange;if(isNaN(p)||p<1)throw new Error("Length should be a number and greater than 0");if(!o.some((function(e){return e===u})))throw new Error("Invalid value for allowedCharacters. Use alpha, numeric, or alphanumeric");var b=Object(a.useRef)([]),E=i[u];Object(a.useImperativeHandle)(t,(function(){return{focus:function(){b.current&&b.current[0].focus()},clear:function(){if(b.current){for(var e=0;e<b.current.length;e++)b.current[e].value="";b.current[0].focus()}C()}}})),Object(a.useEffect)((function(){s&&b.current[0].focus()}),[]);for(var C=function(){var e=b.current.map((function(e){return e.value})).join("");v&&v(e)},R=function(e){var t=e.target,n=t.value,a=t.nextElementSibling;n.length>1?(e.target.value=n.charAt(0),null!==a&&a.focus()):n.match(E.pattern)?null!==a&&a.focus():e.target.value="",C()},w=function(e){var t=e.key,n=e.target;"Backspace"===t&&(""===n.value&&null!==n.previousElementSibling?null!==n.previousElementSibling&&(n.previousElementSibling.focus(),e.preventDefault()):n.value="",C())},A=function(e){e.target.select()},x=function(e){for(var t=e.clipboardData.getData("Text"),n=0,a=0;a<t.length;a++){var r=t.charAt(a),u=b.current[n].value;r.match(E.pattern)&&(u||(b.current[n].value=r,null!==b.current[n].nextElementSibling&&(b.current[n].nextElementSibling.focus(),n++)))}C(),e.preventDefault()},N=[],O=function(e){N.push(r.a.createElement("input",Object.assign({key:e,onChange:R,onKeyDown:w,onFocus:A,onPaste:x},E,{type:g?"password":E.type,ref:function(t){b.current[e]=t},maxLength:1,className:d,autoComplete:0===e?"one-time-code":"off","aria-label":c?"".concat(c,". Character ").concat(e+1,"."):"Character ".concat(e+1,".")})))},y=0;y<p;y++)O(y);return r.a.createElement("div",{className:h},N)})),m=function(){var e=Object(a.useRef)(null),t=Object(a.useState)(""),n=Object(l.a)(t,2),u=n[0],c=n[1];return r.a.createElement("div",{className:"main"},r.a.createElement("h1",null,"React Auth Code Input"),r.a.createElement("p",null,"One-time password (OTP) React component."),r.a.createElement("div",{className:"badges"},r.a.createElement("img",{alt:"",src:"https://img.shields.io/npm/v/react-auth-code-input.svg"}),r.a.createElement("img",{alt:"code style standard",src:"https://img.shields.io/badge/code_style-standard-brightgreen.svg"}),r.a.createElement("img",{alt:"license MIT",src:"https://img.shields.io/badge/license-MIT-brightgreen.svg"}),r.a.createElement("img",{alt:"",src:"https://img.shields.io/npm/dt/react-auth-code-input.svg"}),r.a.createElement("img",{alt:"",src:"https://img.shields.io/npm/dw/react-auth-code-input.svg"})),r.a.createElement("p",null,r.a.createElement("a",{href:"https://github.com/drac94/react-auth-code-input"},"View documentation on GitHub")),r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(s,{ref:e,onChange:function(e){c(e)},containerClassName:"container",inputClassName:"input"}),r.a.createElement("p",null,"Result: ",u),r.a.createElement("button",{onClick:function(){var t;return null===(t=e.current)||void 0===t?void 0:t.focus()}},"Focus"),r.a.createElement("button",{onClick:function(){var t;return null===(t=e.current)||void 0===t?void 0:t.clear()}},"Clear")),r.a.createElement("code",null,"\nimport React, { useRef, useState } from 'react';\nimport AuthCode, { AuthCodeRef } from 'react-auth-code-input';\n\nconst App = () => {\n  const AuthInputRef = useRef<AuthCodeRef>(null);\n  const [result, setResult] = useState<string>('');\n  const handleOnChange = (res: string) => {\n    setResult(res);\n  };\n  return (\n    <div>\n      <AuthCode\n        ref={AuthInputRef}\n        onChange={handleOnChange}\n        containerClassName='container'\n        inputClassName='input'\n      />\n\n      <p>Result: {result}</p>\n      <button onClick={() => AuthInputRef.current?.focus()}>Focus</button>\n      <button onClick={() => AuthInputRef.current?.clear()}>Clear</button>\n    </div>\n  );\n}\n        ")))};c.a.render(r.a.createElement(m,null),document.getElementById("root"))},5:function(e,t,n){e.exports=n(10)}},[[5,1,2]]]);
//# sourceMappingURL=main.83bd34ce.chunk.js.map