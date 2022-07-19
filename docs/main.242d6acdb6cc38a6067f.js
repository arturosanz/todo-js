(()=>{"use strict";function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var e=function(){function e(t){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),this.tarea=t,this.id=(new Date).getTime(),this.completado=!1,this.creado=new Date}var r,n,o;return r=e,o=[{key:"fromJson",value:function(t){var r=t.tarea,n=t.id,o=t.completado,a=t.creado,i=new e(r);return i.id=n,i.completado=o,i.creado=a,i}}],(n=null)&&t(r.prototype,n),o&&t(r,o),Object.defineProperty(r,"prototype",{writable:!1}),e}();function r(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var o=0,a=function(){};return{s:a,n:function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,c=!0,l=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return c=t.done,t},e:function(t){l=!0,i=t},f:function(){try{c||null==r.return||r.return()}finally{if(l)throw i}}}}function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function o(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var a=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.cargarLocalStorage()}var n,a,i;return n=t,(a=[{key:"nuevoTodo",value:function(t){return this.todos.push(t),this.guardarLocalStorage(),t}},{key:"eliminarTodo",value:function(t){this.todos=this.todos.filter((function(e){return e.id!=t})),this.guardarLocalStorage()}},{key:"marcarDesmarcar",value:function(t){var e,n=r(this.todos);try{for(n.s();!(e=n.n()).done;){var o=e.value;if(o.id==t){o.completado=!o.completado,this.guardarLocalStorage();break}}}catch(t){n.e(t)}finally{n.f()}}},{key:"eliminaCompletados",value:function(){var t,e=!1,n=r(this.todos);try{for(n.s();!(t=n.n()).done;){var o=t.value;o.completado&&(this.eliminarTodo(o.id),e=!0)}}catch(t){n.e(t)}finally{n.f()}e&&this.guardarLocalStorage()}},{key:"guardarLocalStorage",value:function(){localStorage.setItem("todo",JSON.stringify(this.todos))}},{key:"cargarLocalStorage",value:function(){this.todos=JSON.parse(localStorage.getItem("todo")||"[]"),this.todos=this.todos.map((function(t){return e.fromJson(t)}))}}])&&o(n.prototype,a),i&&o(n,i),Object.defineProperty(n,"prototype",{writable:!1}),t}();function i(t){return function(t){if(Array.isArray(t))return t}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||c(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(t,e){if(t){if("string"==typeof t)return l(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?l(t,e):void 0}}function l(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var u=document.querySelector(".todo-list"),s=document.querySelector(".new-todo"),d=document.querySelector(".clear-completed"),f=document.querySelector(".filters"),m=document.querySelectorAll(".filtro"),y={},v=function(t){var e='\n    <li class="'.concat(t.completado?"completed":"",'" data-id="').concat(t.id,'">\n\t    <div class="view">\n\t\t    <input class="toggle" type="checkbox" ').concat(t.completado?"checked":"",">\n\t\t\t    <label>").concat(t.tarea,'</label>\n\t\t\t    <button class="destroy"></button>\n\t\t    </div>\n\t    <input class="edit" value="Create a TodoMVC template">\n\t</li>\n    '),r=document.createElement("div");return r.innerHTML=e,u.append(r.firstElementChild),r};s.addEventListener("keyup",(function(t){"Enter"===t.key&&s.value.length>0&&(v(y.nuevoTodo(new e(s.value))),s.value="")})),u.addEventListener("click",(function(t){var e=t.target.localName,r=t.target.parentElement.parentElement,n=r.getAttribute("data-id");switch(e){case"input":t.target.checked?t.target.removeAttribute("checked"):t.target.setAttribute("checked",""),r.classList.toggle("completed"),y.marcarDesmarcar(n);break;case"label":break;case"button":r.remove(),s.focus(),y.eliminarTodo(n)}})),d.addEventListener("click",(function(t){i(u.children).slice(0).forEach((function(t){t.classList.contains("completed")&&t.remove()})),y.eliminaCompletados()})),f.addEventListener("click",(function(t){var e=t.target.text;if(e){m.forEach((function(t){return t.classList.remove("selected")})),t.target.classList.add("selected");var r,n=function(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=c(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0,o=function(){};return{s:o,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,l=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return i=t.done,t},e:function(t){l=!0,a=t},f:function(){try{i||null==r.return||r.return()}finally{if(l)throw a}}}}(u.children);try{for(n.s();!(r=n.n()).done;){var o=r.value,a=o.classList.contains("completed");switch(o.classList.remove("hidden"),e){case"Pendientes":a&&o.classList.add("hidden");break;case"Completados":a||o.classList.add("hidden")}}}catch(t){n.e(t)}finally{n.f()}}})),(y=new a).todos.forEach((function(t){return v(t)}))})();