(this.webpackJsonptodomvc=this.webpackJsonptodomvc||[]).push([[0],{30:function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"addTodo",(function(){return j})),n.d(r,"deleteTodo",(function(){return w})),n.d(r,"editTodo",(function(){return x})),n.d(r,"completeTodo",(function(){return k})),n.d(r,"completeAllTodos",(function(){return N})),n.d(r,"clearCompleted",(function(){return S})),n.d(r,"setVisibilityFilter",(function(){return D}));var o=n(0),a=n.n(o),c=n(5),l=n(1),i=n(2),u=n(6),d=n(7),s=n(9),m=n(8),p=n(4),f=n.n(p),h=function(e){Object(s.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(u.a)(this,n);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return(e=t.call.apply(t,[this].concat(o))).state={text:e.props.text||""},e.handleSubmit=function(t){var n=t.target.value.trim();13===t.which&&(e.props.onSave(n),e.props.newTodo&&e.setState({text:""}))},e.handleChange=function(t){e.setState({text:t.target.value})},e.handleBlur=function(t){e.props.newTodo||e.props.onSave(t.target.value)},e}return Object(d.a)(n,[{key:"render",value:function(){return a.a.createElement("input",{className:f()({edit:this.props.editing,"new-todo":this.props.newTodo}),type:"text",placeholder:this.props.placeholder,autoFocus:!0,value:this.state.text,onBlur:this.handleBlur,onChange:this.handleChange,onKeyDown:this.handleSubmit})}}]),n}(o.Component),b=function(e){var t=e.addTodo;return a.a.createElement("header",{className:"header"},a.a.createElement("h1",null,"todos"),a.a.createElement(h,{newTodo:!0,onSave:function(e){0!==e.length&&t(e)},placeholder:"What needs to be done?"}))},v="ADD_TODO",E="DELETE_TODO",O="EDIT_TODO",C="COMPLETE_TODO",g="COMPLETE_ALL_TODOS",y="CLEAR_COMPLETED",T="SET_VISIBILITY_FILTER",j=function(e){return{type:v,text:e}},w=function(e){return{type:E,id:e}},x=function(e,t){return{type:O,id:e,text:t}},k=function(e){return{type:C,id:e}},N=function(){return{type:g}},S=function(){return{type:y}},D=function(e){return{type:T,filter:e}},_=Object(i.b)(null,{addTodo:j})(b),A=function(e){var t=e.active,n=e.children,r=e.setFilter;return a.a.createElement("a",{className:f()({selected:t}),style:{cursor:"pointer"},onClick:function(){return r()}},n)},L=Object(i.b)((function(e,t){return{active:t.filter===e.visibilityFilter}}),(function(e,t){return{setFilter:function(){e(D(t.filter))}}}))(A),F="show_all",I="show_completed",B="show_active",M={[F]:"All",[B]:"Active",[I]:"Completed"},P=function(e){var t=e.activeCount,n=e.completedCount,r=e.onClearCompleted,o=1===t?"item":"items";return a.a.createElement("footer",{className:"footer"},a.a.createElement("span",{className:"todo-count"},a.a.createElement("strong",null,t||"No")," ",o," left"),a.a.createElement("ul",{className:"filters"},Object.keys(M).map((function(e){return a.a.createElement("li",{key:e},a.a.createElement(L,{filter:e},M[e]))}))),!!n&&a.a.createElement("button",{className:"clear-completed",onClick:r},"Clear completed"))},R=function(e){Object(s.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(u.a)(this,n);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return(e=t.call.apply(t,[this].concat(o))).state={editing:!1},e.handleDoubleClick=function(){e.setState({editing:!0})},e.handleSave=function(t,n){0===n.length?e.props.deleteTodo(t):e.props.editTodo(t,n),e.setState({editing:!1})},e}return Object(d.a)(n,[{key:"render",value:function(){var e,t=this,n=this.props,r=n.todo,o=n.completeTodo,c=n.deleteTodo;return e=this.state.editing?a.a.createElement(h,{text:r.text,editing:this.state.editing,onSave:function(e){return t.handleSave(r.id,e)}}):a.a.createElement("div",{className:"view"},a.a.createElement("input",{className:"toggle",type:"checkbox",checked:r.completed,onChange:function(){return o(r.id)}}),a.a.createElement("label",{onDoubleClick:this.handleDoubleClick},r.text),a.a.createElement("button",{className:"destroy",onClick:function(){return c(r.id)}})),a.a.createElement("li",{className:f()({completed:r.completed,editing:this.state.editing})},e)}}]),n}(o.Component),J=function(e){var t=e.filteredTodos,n=e.actions;return a.a.createElement("ul",{className:"todo-list"},t.map((function(e){return a.a.createElement(R,Object.assign({key:e.id,todo:e},n))})))},U=n(12),V=function(e){return e.todos},K=Object(U.a)([function(e){return e.visibilityFilter},V],(function(e,t){switch(e){case F:return t;case I:return t.filter((function(e){return e.completed}));case B:return t.filter((function(e){return!e.completed}));default:throw new Error("Unknown filter: "+e)}})),W=Object(U.a)([V],(function(e){return e.reduce((function(e,t){return t.completed?e+1:e}),0)})),Y=Object(i.b)((function(e){return{filteredTodos:K(e)}}),(function(e){return{actions:Object(l.a)(r,e)}}))(J),q=function(e){var t=e.todosCount,n=e.completedCount,r=e.actions;return a.a.createElement("section",{className:"main"},!!t&&a.a.createElement("span",null,a.a.createElement("input",{className:"toggle-all",type:"checkbox",checked:n===t,readOnly:!0}),a.a.createElement("label",{onClick:r.completeAllTodos})),a.a.createElement(Y,null),!!t&&a.a.createElement(P,{completedCount:n,activeCount:t-n,onClearCompleted:r.clearCompleted}))},z=Object(i.b)((function(e){return{todosCount:e.todos.length,completedCount:W(e)}}),(function(e){return{actions:Object(l.a)(r,e)}}))(q),G=function(){return a.a.createElement("div",null,a.a.createElement(_,null),a.a.createElement(z,null))},H=n(3),Q=n(16),X=[{text:"Use Redux",completed:!1,id:0}];var Z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case T:return t.filter;default:return e}},$=Object(l.b)({todos:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v:return[].concat(Object(Q.a)(e),[{id:e.reduce((function(e,t){return Math.max(t.id,e)}),-1)+1,completed:!1,text:t.text}]);case E:return e.filter((function(e){return e.id!==t.id}));case O:return e.map((function(e){return e.id===t.id?Object(H.a)(Object(H.a)({},e),{},{text:t.text}):e}));case C:return e.map((function(e){return e.id===t.id?Object(H.a)(Object(H.a)({},e),{},{completed:!e.completed}):e}));case g:var n=e.every((function(e){return e.completed}));return e.map((function(e){return Object(H.a)(Object(H.a)({},e),{},{completed:!n})}));case y:return e.filter((function(e){return!1===e.completed}));default:return e}},visibilityFilter:Z}),ee=(n(29),Object(l.c)($));Object(c.render)(a.a.createElement(i.a,{store:ee},a.a.createElement(G,null)),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.6e7bc641.chunk.js.map