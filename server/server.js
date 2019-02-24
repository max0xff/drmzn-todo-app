/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/footer.tsx":
/*!***********************************!*\
  !*** ./src/components/footer.tsx ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const Footer = (props) => {
    const options = props.state.Main.todo.options;
    if (!options.hasData)
        return null;
    const itemTxt = options.isOneCount ? 'item' : 'items';
    const clearCompleted = () => {
        if (options.hasCompleted) {
            return React.createElement("button", { className: "clear-completed" }, "Clear completed");
        }
    };
    return (React.createElement("footer", { className: "footer" },
        React.createElement("span", { className: "todo-count" },
            React.createElement("strong", null, options.countNotComplete),
            " ",
            itemTxt,
            " left"),
        React.createElement("ul", { className: "filters" },
            React.createElement("li", null,
                React.createElement("a", { className: options.filter.all ? 'selected' : '', href: "#/" }, "All")),
            React.createElement("li", null,
                React.createElement("a", { className: options.filter.active ? 'selected' : '', href: "#/active" }, "Active")),
            React.createElement("li", null,
                React.createElement("a", { className: options.filter.completed ? 'selected' : '', href: "#/completed" }, "Completed"))),
        clearCompleted()));
};
exports.default = Footer;


/***/ }),

/***/ "./src/components/header.tsx":
/*!***********************************!*\
  !*** ./src/components/header.tsx ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const Header = () => {
    return (React.createElement("div", { id: "header" },
        React.createElement("header", { className: "header" },
            React.createElement("h1", null, "todos"),
            React.createElement("input", { className: "new-todo", placeholder: "What needs to be done?", autoFocus: true }))));
};
exports.default = Header;


/***/ }),

/***/ "./src/components/root.tsx":
/*!*********************************!*\
  !*** ./src/components/root.tsx ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const header_1 = __webpack_require__(/*! src/components/header */ "./src/components/header.tsx");
const footer_1 = __webpack_require__(/*! src/components/footer */ "./src/components/footer.tsx");
const todos_1 = __webpack_require__(/*! src/components/todos */ "./src/components/todos.tsx");
const App = (props) => {
    return (React.createElement("section", { className: "todoapp" },
        React.createElement(header_1.default, null),
        React.createElement(todos_1.default, { state: props.state }),
        React.createElement(footer_1.default, { state: props.state })));
};
exports.default = App;


/***/ }),

/***/ "./src/components/todo.tsx":
/*!*********************************!*\
  !*** ./src/components/todo.tsx ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const functions_1 = __webpack_require__(/*! src/config/functions */ "./src/config/functions.ts");
const TodoItem = (props) => {
    const item = props.data;
    function handleChange() { }
    return (React.createElement("li", { key: item.id, "data-id": item.id, className: functions_1.classNames(item) },
        React.createElement("div", { className: "view" },
            React.createElement("input", { className: "toggle", type: "checkbox", checked: item.isCompleted, onChange: handleChange }),
            React.createElement("label", null, item.text),
            React.createElement("button", { className: "destroy" })),
        React.createElement("input", { type: "text", className: "edit", defaultValue: item.text, "data-text": item.text })));
};
exports.default = TodoItem;


/***/ }),

/***/ "./src/components/todos.tsx":
/*!**********************************!*\
  !*** ./src/components/todos.tsx ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const todo_1 = __webpack_require__(/*! src/components/todo */ "./src/components/todo.tsx");
const Todos = (props) => {
    const data = props.state.Main.todo.data;
    const options = props.state.Main.todo.options;
    if (!options.hasData)
        return null;
    function handleChange() { }
    return (React.createElement("section", { className: "main" },
        React.createElement("input", { id: "toggle-all", className: "toggle-all", type: "checkbox", checked: options.isAllComplete, onChange: handleChange }),
        React.createElement("label", { htmlFor: "toggle-all" }, "Mark all as complete"),
        React.createElement("ul", { className: "todo-list" }, data.filter(item => item.isVisible).map(item => React.createElement(todo_1.default, { data: item, key: item.id })))));
};
exports.default = Todos;


/***/ }),

/***/ "./src/config/actions.ts":
/*!*******************************!*\
  !*** ./src/config/actions.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const immutable = __webpack_require__(/*! object-path-immutable/index */ "object-path-immutable/index");
var page;
(function (page_1) {
    page_1.type = 'PAGE';
    page_1.dispatch = (store, page) => {
        store.dispatch({
            type: page_1.type,
            page
        });
    };
    page_1.reduce = (state, action) => immutable(state)
        .set('Main.options.mainPage', {})
        .set(`Main.options.mainPage.${action.page}`, true)
        .value();
})(page = exports.page || (exports.page = {}));
var init;
(function (init) {
    init.type = 'init';
    init.dispatch = (store, data, options) => {
        store.dispatch({
            type: init.type,
            data,
            options
        });
    };
    init.reduce = (state, action) => immutable(state)
        .set('Main.todo.data', action.data)
        .set('Main.todo.options', action.options)
        .value();
})(init = exports.init || (exports.init = {}));
var add;
(function (add) {
    add.type = 'add';
    add.dispatch = (store, data, options) => {
        store.dispatch({
            type: add.type,
            data,
            options
        });
    };
    add.reduce = (state, action) => immutable(state)
        .set('Main.todo.data', action.data)
        .set('Main.todo.options', action.options)
        .value();
})(add = exports.add || (exports.add = {}));
var edit;
(function (edit) {
    edit.type = 'edit';
    edit.dispatch = (store, data, options) => {
        store.dispatch({
            type: edit.type,
            data,
            options
        });
    };
    edit.reduce = (state, action) => immutable(state)
        .set('Main.todo.data', action.data)
        .set('Main.todo.options', action.options)
        .value();
})(edit = exports.edit || (exports.edit = {}));
var remove;
(function (remove) {
    remove.type = 'remove';
    remove.dispatch = (store, data, options) => {
        store.dispatch({
            type: remove.type,
            data,
            options
        });
    };
    remove.reduce = (state, action) => immutable(state)
        .set('Main.todo.data', action.data)
        .set('Main.todo.options', action.options)
        .value();
})(remove = exports.remove || (exports.remove = {}));
var toggle;
(function (toggle) {
    toggle.type = 'toggle';
    toggle.dispatch = (store, data, options) => {
        store.dispatch({
            type: toggle.type,
            data,
            options
        });
    };
    toggle.reduce = (state, action) => immutable(state)
        .set('Main.todo.data', action.data)
        .set('Main.todo.options', action.options)
        .value();
})(toggle = exports.toggle || (exports.toggle = {}));
var toggleAll;
(function (toggleAll) {
    toggleAll.type = 'toggleAll';
    toggleAll.dispatch = (store, data, options) => {
        store.dispatch({
            type: toggleAll.type,
            data,
            options
        });
    };
    toggleAll.reduce = (state, action) => immutable(state)
        .set('Main.todo.data', action.data)
        .set('Main.todo.options', action.options)
        .value();
})(toggleAll = exports.toggleAll || (exports.toggleAll = {}));
var filterBy;
(function (filterBy) {
    filterBy.type = 'filterBy';
    filterBy.dispatch = (store, data, options) => {
        store.dispatch({
            type: filterBy.type,
            data,
            options
        });
    };
    filterBy.reduce = (state, action) => immutable(state)
        .set('Main.todo.data', action.data)
        .set('Main.todo.options', action.options)
        .value();
})(filterBy = exports.filterBy || (exports.filterBy = {}));
var removeCompleted;
(function (removeCompleted) {
    removeCompleted.type = 'removeCompleted';
    removeCompleted.dispatch = (store, data, options) => {
        store.dispatch({
            type: removeCompleted.type,
            data,
            options
        });
    };
    removeCompleted.reduce = (state, action) => immutable(state)
        .set('Main.todo.data', action.data)
        .set('Main.todo.options', action.options)
        .value();
})(removeCompleted = exports.removeCompleted || (exports.removeCompleted = {}));
var toggleEditing;
(function (toggleEditing) {
    toggleEditing.type = 'toggleEditing';
    toggleEditing.dispatch = (store, data, options) => {
        store.dispatch({
            type: toggleEditing.type,
            data,
            options
        });
    };
    toggleEditing.reduce = (state, action) => immutable(state)
        .set('Main.todo.data', action.data)
        .set('Main.todo.options', action.options)
        .value();
})(toggleEditing = exports.toggleEditing || (exports.toggleEditing = {}));


/***/ }),

/***/ "./src/config/functions.ts":
/*!*********************************!*\
  !*** ./src/config/functions.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// get classes
function classNames(item) {
    let classList = '';
    if (item.isCompleted) {
        classList = `${classList} completed`;
    }
    if (item.isEditing) {
        classList = `${classList} editing`;
    }
    return classList.trim();
}
exports.classNames = classNames;
// get type for filter
function getProp(prop, hash) {
    let type = 'all';
    let url = '/';
    if (hash === '#/') {
        type = 'all';
        url = '/';
    }
    if (hash === '#/active') {
        type = 'active';
        url = '/active';
    }
    if (hash === '#/completed') {
        type = 'completed';
        url = '/completed';
    }
    if (prop === 'type') {
        return type;
    }
    return url;
}
exports.getProp = getProp;
// generate random id
function randomId() {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}
exports.randomId = randomId;
// get array index by item id prop
function getIndex(all, todoId) {
    let foundIndex = -1;
    for (let index = 0; index < all.length; index++) {
        const todo = all[index];
        if (todo.id === todoId) {
            foundIndex = index;
        }
    }
    return foundIndex;
}
exports.getIndex = getIndex;
// retrn computed options
function computeOptions(store, data) {
    const state = store.getState();
    let filterState = {
        all: true
    };
    if (state && state.Main && state.Main.todo && state.Main.todo.options && state.Main.todo.options.filter) {
        filterState = Object.assign({}, state.Main.todo.options.filter);
    }
    const options = {
        countTotal: 0,
        countComplete: 0,
        countNotComplete: 0,
        hasCompleted: false,
        isAllComplete: false,
        isEditing: false,
        hasData: false,
        isOneCount: false,
        filter: filterState
    };
    // total
    options.countTotal = data.length;
    // countComplete, countNotComplete
    data.forEach((todo) => {
        if (todo.isCompleted) {
            options.countComplete = options.countComplete + 1;
        }
        else {
            options.countNotComplete = options.countNotComplete + 1;
        }
        if (todo.isEditing) {
            options.isEditing = true;
        }
    });
    // hasCompleted
    if (options.countComplete > 0) {
        options.hasCompleted = true;
    }
    // isAllComplete
    if (data.length === options.countComplete) {
        options.isAllComplete = true;
    }
    // hasData
    if (data.length > 0) {
        options.hasData = true;
    }
    // isOneCount
    if (options.countNotComplete === 1) {
        options.isOneCount = true;
    }
    // save data
    try {
        localStorage.setItem('todos-drmzn', JSON.stringify(data));
    }
    catch (error) {
    }
    return options;
}
exports.computeOptions = computeOptions;
function computeInit(store, hash) {
    let data;
    try {
        data = JSON.parse(localStorage.getItem('todos-drmzn'));
        // remove editing when loading from local storage
        data.forEach((todo) => {
            todo.isEditing = false;
        });
    }
    catch (error) {
    }
    if (!data) {
        data = [];
    }
    // calc options
    const options = computeOptions(store, data);
    const type = getProp('type', hash);
    options.filter = {};
    options.filter[type] = true;
    return {
        data,
        options
    };
}
exports.computeInit = computeInit;
function computeAdd(store, text) {
    const state = store.getState();
    const data = state.Main.todo.data.map((x) => (Object.assign({}, x)));
    let isVisibleState = true;
    if (state.Main.todo.options.filter.completed) {
        isVisibleState = false;
    }
    const id = randomId();
    const todo = {
        id,
        text: text.trim(),
        isCompleted: false,
        isVisible: isVisibleState
    };
    data.push(todo);
    // calc options
    const options = computeOptions(store, data);
    return {
        data,
        options
    };
}
exports.computeAdd = computeAdd;
function computeEdit(store, todoId, text) {
    const state = store.getState();
    const data = state.Main.todo.data.map((x) => (Object.assign({}, x)));
    const foundIndex = getIndex(data, todoId);
    // update text
    data[foundIndex].text = text.trim();
    // calc options
    const options = computeOptions(store, data);
    return {
        data,
        options
    };
}
exports.computeEdit = computeEdit;
function computeRemove(store, todoId) {
    const state = store.getState();
    const data = state.Main.todo.data.map((x) => (Object.assign({}, x)));
    const foundIndex = getIndex(data, todoId);
    // remove item
    data.splice(foundIndex, 1);
    // calc options
    const options = computeOptions(store, data);
    return {
        data,
        options
    };
}
exports.computeRemove = computeRemove;
function computeToggle(store, todoId) {
    const state = store.getState();
    const data = state.Main.todo.data.map((x) => (Object.assign({}, x)));
    const foundIndex = getIndex(data, todoId);
    // toggle item
    data[foundIndex].isCompleted = data[foundIndex].isCompleted ? false : true;
    // hide if filtered
    if (state.Main.todo.options.filter.completed) {
        data[foundIndex].isVisible = data[foundIndex].isCompleted ? true : false;
    }
    // hide if filtered
    if (state.Main.todo.options.filter.active) {
        data[foundIndex].isVisible = data[foundIndex].isCompleted ? false : true;
    }
    // calc options
    const options = computeOptions(store, data);
    return {
        data,
        options
    };
}
exports.computeToggle = computeToggle;
function computeToggleAll(store) {
    const state = store.getState();
    const data = state.Main.todo.data.map((x) => (Object.assign({}, x)));
    let allCompleted = true;
    data.forEach((todo) => {
        if (todo.isCompleted === false) {
            allCompleted = false;
        }
    });
    // if at least one is not complete - make all completed
    // if all are completed - make all not completed
    data.forEach((todo) => {
        if (allCompleted) {
            todo.isCompleted = false;
            if (state.Main.todo.options.filter.completed) {
                todo.isVisible = false;
            }
            if (state.Main.todo.options.filter.active) {
                todo.isVisible = true;
            }
        }
        else {
            todo.isCompleted = true;
            if (state.Main.todo.options.filter.completed) {
                todo.isVisible = true;
            }
            if (state.Main.todo.options.filter.active) {
                todo.isVisible = false;
            }
        }
    });
    // calc options
    const options = computeOptions(store, data);
    return {
        data,
        options
    };
}
exports.computeToggleAll = computeToggleAll;
function computeFilterBy(store, type = 'all') {
    const state = store.getState();
    const data = state.Main.todo.data.map((x) => (Object.assign({}, x)));
    if (type === 'active') {
        data.forEach((todo) => {
            if (todo.isCompleted === false) {
                todo.isVisible = true;
            }
            else {
                todo.isVisible = false;
            }
        });
    }
    if (type === 'completed') {
        data.forEach((todo) => {
            if (todo.isCompleted === true) {
                todo.isVisible = true;
            }
            else {
                todo.isVisible = false;
            }
        });
    }
    if (type === 'all') {
        data.forEach((todo) => {
            todo.isVisible = true;
        });
    }
    // calc options
    const options = computeOptions(store, data);
    options.filter = {};
    options.filter[type] = true;
    return {
        data,
        options
    };
}
exports.computeFilterBy = computeFilterBy;
function computeRemoveCompleted(store) {
    const state = store.getState();
    const dataTemp = state.Main.todo.data.map((x) => (Object.assign({}, x)));
    // remove completed
    const data = dataTemp.filter((todo) => todo.isCompleted === false);
    // calc options
    const options = computeOptions(store, data);
    return {
        data,
        options
    };
}
exports.computeRemoveCompleted = computeRemoveCompleted;
function computeToggleEdit(store, todoId, type, text) {
    const state = store.getState();
    const data = state.Main.todo.data.map((x) => (Object.assign({}, x)));
    // toggle edit
    data.forEach((todo) => {
        todo.isEditing = false;
    });
    if (todoId && type === 'on') {
        const foundIndex = getIndex(data, todoId);
        if (foundIndex > -1) {
            data[foundIndex].isEditing = true;
        }
    }
    // save text on off
    if (todoId && text && type === 'off') {
        const foundIndex = getIndex(data, todoId);
        data[foundIndex].text = text;
    }
    // calc options
    const options = computeOptions(store, data);
    return {
        data,
        options
    };
}
exports.computeToggleEdit = computeToggleEdit;


/***/ }),

/***/ "./src/config/placeholder.ts":
/*!***********************************!*\
  !*** ./src/config/placeholder.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.placeholder = (html, preloadedState, version) => `<!doctype html>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<title>Drmzn • TodoMVC</title>
		<link rel="stylesheet" href="node_modules/todomvc-common/base.css">
		<link rel="stylesheet" href="node_modules/todomvc-app-css/index.css">
		<link rel="stylesheet" href="css/app.css">
	</head>
	<body>
		<div id="root">${html}</div>

		<footer class="info">
			<p>Double-click to edit a todo</p>
			<p>Created by <a href="http://todomvc.com">Alex Tzvetanov</a></p>
			<p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
		</footer>

		<script>
      window.__PRELOADED_STATE__ = '${preloadedState}';
    </script>

		<script src="node_modules/todomvc-common/base.js"></script>
    <script type="text/javascript" src="js/main.${version}.min.js"></script>
  </body>
</html>`;


/***/ }),

/***/ "./src/config/store.ts":
/*!*****************************!*\
  !*** ./src/config/store.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const actions = __webpack_require__(/*! src/config/actions */ "./src/config/actions.ts");
const redux_1 = __webpack_require__(/*! redux */ "redux");
const drmzn_redux_1 = __webpack_require__(/*! drmzn-redux */ "drmzn-redux");
// export function that creates new store for server side
exports.storeCreate = () => redux_1.createStore(drmzn_redux_1.actionReducer(actions), drmzn_redux_1.hydrate, drmzn_redux_1.extension);
// init the store on client side
exports.store = exports.storeCreate();


/***/ }),

/***/ "./src/controllers/TodoController.ts":
/*!*******************************************!*\
  !*** ./src/controllers/TodoController.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const actions = __webpack_require__(/*! src/config/actions */ "./src/config/actions.ts");
const functions_1 = __webpack_require__(/*! src/config/functions */ "./src/config/functions.ts");
exports.Todo = (store) => {
    const init = (hash) => {
        const { data, options } = functions_1.computeInit(store, hash);
        actions.init.dispatch(store, data, options);
    };
    const add = (text) => {
        const { data, options } = functions_1.computeAdd(store, text);
        actions.add.dispatch(store, data, options);
    };
    const edit = (todoId, text) => {
        const { data, options } = functions_1.computeEdit(store, todoId, text);
        actions.edit.dispatch(store, data, options);
    };
    const remove = (todoId) => {
        const { data, options } = functions_1.computeRemove(store, todoId);
        actions.remove.dispatch(store, data, options);
    };
    const toggle = (todoId) => {
        const { data, options } = functions_1.computeToggle(store, todoId);
        actions.toggle.dispatch(store, data, options);
    };
    const toggleAll = () => {
        const { data, options } = functions_1.computeToggleAll(store);
        actions.toggleAll.dispatch(store, data, options);
    };
    const filterBy = (type) => {
        const { data, options } = functions_1.computeFilterBy(store, type);
        actions.filterBy.dispatch(store, data, options);
    };
    const removeCompleted = () => {
        const { data, options } = functions_1.computeRemoveCompleted(store);
        actions.removeCompleted.dispatch(store, data, options);
    };
    const toggleEditing = (todoId, type, text) => {
        const { data, options } = functions_1.computeToggleEdit(store, todoId, type, text);
        actions.toggleEditing.dispatch(store, data, options);
    };
    return {
        init,
        add,
        edit,
        remove,
        toggle,
        toggleAll,
        filterBy,
        removeCompleted,
        toggleEditing
    };
};


/***/ }),

/***/ "./src/server.tsx":
/*!************************!*\
  !*** ./src/server.tsx ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = __webpack_require__(/*! express */ "express");
const compression = __webpack_require__(/*! compression */ "compression");
const http = __webpack_require__(/*! http */ "http");
const store_1 = __webpack_require__(/*! src/config/store */ "./src/config/store.ts");
const TodoController_1 = __webpack_require__(/*! src/controllers/TodoController */ "./src/controllers/TodoController.ts");
const placeholder_1 = __webpack_require__(/*! src/config/placeholder */ "./src/config/placeholder.ts");
const drmzn_react_1 = __webpack_require__(/*! drmzn-react */ "drmzn-react");
const root_1 = __webpack_require__(/*! src/components/root */ "./src/components/root.tsx");
// import { ssr, getTemplates } from 'drmzn-mustache';
// const tpls = require.context('src/mustache', true, /\.html$/);
// const { templates, container } = getTemplates(tpls);
const version = '0.0.1';
const app = express();
app.use(compression());
app.get('/', (req, res) => __awaiter(this, void 0, void 0, function* () {
    const store = store_1.storeCreate();
    yield TodoController_1.Todo(store).init('/');
    drmzn_react_1.ssr(placeholder_1.placeholder, root_1.default, version).render(store, req, res);
    // ssr(placeholder, container, templates, version).render(store, req, res);
}));
app.use('/', express.static('public'));
const server = http.createServer(app);
server.listen(2233);


/***/ }),

/***/ "compression":
/*!******************************!*\
  !*** external "compression" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("compression");

/***/ }),

/***/ "drmzn-react":
/*!******************************!*\
  !*** external "drmzn-react" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("drmzn-react");

/***/ }),

/***/ "drmzn-redux":
/*!******************************!*\
  !*** external "drmzn-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("drmzn-redux");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("http");

/***/ }),

/***/ "object-path-immutable/index":
/*!**********************************************!*\
  !*** external "object-path-immutable/index" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("object-path-immutable/index");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZm9vdGVyLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oZWFkZXIudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3Jvb3QudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3RvZG8udHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3RvZG9zLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29uZmlnL2FjdGlvbnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbmZpZy9mdW5jdGlvbnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbmZpZy9wbGFjZWhvbGRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uZmlnL3N0b3JlLnRzIiwid2VicGFjazovLy8uL3NyYy9jb250cm9sbGVycy9Ub2RvQ29udHJvbGxlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyLnRzeCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb21wcmVzc2lvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImRybXpuLXJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZHJtem4tcmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJleHByZXNzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaHR0cFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm9iamVjdC1wYXRoLWltbXV0YWJsZS9pbmRleFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXhcIiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFD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RUFBa0M7QUFDbEMsMkZBQXNDO0FBRXRDLHNEQUFzRDtBQUN0RCxpRUFBaUU7QUFDakUsdURBQXVEO0FBRXZELE1BQU0sT0FBTyxHQUFHLE9BQU8sQ0FBQztBQUV4QixNQUFNLEdBQUcsR0FBRyxPQUFPLEVBQUUsQ0FBQztBQUN0QixHQUFHLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7QUFFdkIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBTyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUU7SUFDOUIsTUFBTSxLQUFLLEdBQUcsbUJBQVcsRUFBRSxDQUFDO0lBQzVCLE1BQU0scUJBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDNUIsaUJBQUcsQ0FBQyx5QkFBVyxFQUFFLGNBQUcsRUFBRSxPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUN2RCwyRUFBMkU7QUFDN0UsQ0FBQyxFQUFDLENBQUM7QUFFSCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxPQUFPLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7QUFFdkMsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUN0QyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7QUM5QnBCLHdDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLG9DOzs7Ozs7Ozs7OztBQ0FBLGlDOzs7Ozs7Ozs7OztBQ0FBLHdEOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLGtDIiwiZmlsZSI6InNlcnZlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL3NlcnZlci50c3hcIik7XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBPcHRpb25zIH0gZnJvbSAnc3JjL2NvbmZpZy9pbnRlcmZhY2VzJztcblxuY29uc3QgRm9vdGVyID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IG9wdGlvbnM6T3B0aW9ucyA9IHByb3BzLnN0YXRlLk1haW4udG9kby5vcHRpb25zO1xuICBpZiAoIW9wdGlvbnMuaGFzRGF0YSkgcmV0dXJuIG51bGw7XG4gIGNvbnN0IGl0ZW1UeHQgPSBvcHRpb25zLmlzT25lQ291bnQgPyAnaXRlbScgOiAnaXRlbXMnO1xuICBjb25zdCBjbGVhckNvbXBsZXRlZCA9ICgpID0+IHtcbiAgICBpZiAob3B0aW9ucy5oYXNDb21wbGV0ZWQpIHtcbiAgICAgIHJldHVybiA8YnV0dG9uIGNsYXNzTmFtZT1cImNsZWFyLWNvbXBsZXRlZFwiPkNsZWFyIGNvbXBsZXRlZDwvYnV0dG9uPjtcbiAgICB9XG4gIH07XG4gIHJldHVybiAoXG4gICAgPGZvb3RlciBjbGFzc05hbWU9XCJmb290ZXJcIj5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRvZG8tY291bnRcIj48c3Ryb25nPntvcHRpb25zLmNvdW50Tm90Q29tcGxldGV9PC9zdHJvbmc+IHtpdGVtVHh0fSBsZWZ0PC9zcGFuPlxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZmlsdGVyc1wiPlxuICAgICAgICAgIDxsaT48YSBjbGFzc05hbWU9e29wdGlvbnMuZmlsdGVyLmFsbCA/ICdzZWxlY3RlZCcgOiAnJ30gaHJlZj1cIiMvXCI+QWxsPC9hPjwvbGk+XG4gICAgICAgICAgPGxpPjxhIGNsYXNzTmFtZT17b3B0aW9ucy5maWx0ZXIuYWN0aXZlID8gJ3NlbGVjdGVkJyA6ICcnfSBocmVmPVwiIy9hY3RpdmVcIj5BY3RpdmU8L2E+PC9saT5cbiAgICAgICAgICA8bGk+PGEgY2xhc3NOYW1lPXtvcHRpb25zLmZpbHRlci5jb21wbGV0ZWQgPyAnc2VsZWN0ZWQnIDogJyd9IGhyZWY9XCIjL2NvbXBsZXRlZFwiPkNvbXBsZXRlZDwvYT48L2xpPlxuICAgICAgICA8L3VsPlxuICAgICAgICB7Y2xlYXJDb21wbGV0ZWQoKX1cbiAgICA8L2Zvb3Rlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjtcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY29uc3QgSGVhZGVyID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgaWQ9XCJoZWFkZXJcIj5cbiAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwiaGVhZGVyXCI+XG4gICAgICAgIDxoMT50b2RvczwvaDE+XG4gICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJuZXctdG9kb1wiIHBsYWNlaG9sZGVyPVwiV2hhdCBuZWVkcyB0byBiZSBkb25lP1wiIGF1dG9Gb2N1cz17dHJ1ZX0gLz5cbiAgICAgIDwvaGVhZGVyPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgSGVhZGVyIGZyb20gJ3NyYy9jb21wb25lbnRzL2hlYWRlcic7XG5pbXBvcnQgRm9vdGVyIGZyb20gJ3NyYy9jb21wb25lbnRzL2Zvb3Rlcic7XG5pbXBvcnQgVG9kb3MgZnJvbSAnc3JjL2NvbXBvbmVudHMvdG9kb3MnO1xuXG5jb25zdCBBcHAgPSAocHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJ0b2RvYXBwXCI+XG4gICAgICA8SGVhZGVyIC8+XG4gICAgICA8VG9kb3Mgc3RhdGU9e3Byb3BzLnN0YXRlfSAvPlxuICAgICAgPEZvb3RlciBzdGF0ZT17cHJvcHMuc3RhdGV9IC8+XG4gICAgPC9zZWN0aW9uPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY2xhc3NOYW1lcyB9IGZyb20gJ3NyYy9jb25maWcvZnVuY3Rpb25zJztcbmltcG9ydCB7IFRvZG8gfSBmcm9tICdzcmMvY29uZmlnL2ludGVyZmFjZXMnO1xuXG5jb25zdCBUb2RvSXRlbSA9IChwcm9wcykgPT4ge1xuICBjb25zdCBpdGVtOlRvZG8gPSBwcm9wcy5kYXRhO1xuICBmdW5jdGlvbiBoYW5kbGVDaGFuZ2UoKSB7fVxuICByZXR1cm4gKFxuICAgIDxsaSBrZXk9e2l0ZW0uaWR9IGRhdGEtaWQ9e2l0ZW0uaWR9IGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhpdGVtKX0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInZpZXdcIj5cbiAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJ0b2dnbGVcIiB0eXBlPVwiY2hlY2tib3hcIiBjaGVja2VkPXtpdGVtLmlzQ29tcGxldGVkfSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSAvPlxuICAgICAgICA8bGFiZWw+e2l0ZW0udGV4dH08L2xhYmVsPlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImRlc3Ryb3lcIi8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImVkaXRcIiBkZWZhdWx0VmFsdWU9e2l0ZW0udGV4dH0gZGF0YS10ZXh0PXtpdGVtLnRleHR9IC8+XG4gICAgPC9saT5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRvZG9JdGVtO1xuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgVG9kbywgT3B0aW9ucyB9IGZyb20gJ3NyYy9jb25maWcvaW50ZXJmYWNlcyc7XG5pbXBvcnQgVG9kb0l0ZW0gZnJvbSAnc3JjL2NvbXBvbmVudHMvdG9kbyc7XG5cbmNvbnN0IFRvZG9zID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IGRhdGE6W1RvZG9dID0gcHJvcHMuc3RhdGUuTWFpbi50b2RvLmRhdGE7XG4gIGNvbnN0IG9wdGlvbnM6T3B0aW9ucyA9IHByb3BzLnN0YXRlLk1haW4udG9kby5vcHRpb25zO1xuICBpZiAoIW9wdGlvbnMuaGFzRGF0YSkgcmV0dXJuIG51bGw7XG4gIGZ1bmN0aW9uIGhhbmRsZUNoYW5nZSgpIHt9XG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwibWFpblwiPlxuICAgICAgPGlucHV0IGlkPVwidG9nZ2xlLWFsbFwiIGNsYXNzTmFtZT1cInRvZ2dsZS1hbGxcIiB0eXBlPVwiY2hlY2tib3hcIiBjaGVja2VkPXtvcHRpb25zLmlzQWxsQ29tcGxldGV9IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9IC8+XG4gICAgICA8bGFiZWwgaHRtbEZvcj1cInRvZ2dsZS1hbGxcIj5NYXJrIGFsbCBhcyBjb21wbGV0ZTwvbGFiZWw+XG4gICAgICA8dWwgY2xhc3NOYW1lPVwidG9kby1saXN0XCI+XG4gICAgICAgIHtkYXRhLmZpbHRlcihpdGVtID0+IGl0ZW0uaXNWaXNpYmxlKS5tYXAoaXRlbSA9PiA8VG9kb0l0ZW0gZGF0YT17aXRlbX0ga2V5PXtpdGVtLmlkfSAvPil9XG4gICAgICA8L3VsPlxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRvZG9zO1xuIiwiaW1wb3J0ICogYXMgaW1tdXRhYmxlIGZyb20gJ29iamVjdC1wYXRoLWltbXV0YWJsZS9pbmRleCc7XG5cbmV4cG9ydCBuYW1lc3BhY2UgcGFnZSB7XG4gIGV4cG9ydCBjb25zdCB0eXBlID0gJ1BBR0UnO1xuICBleHBvcnQgY29uc3QgZGlzcGF0Y2ggPSAoc3RvcmUsIHBhZ2UpID0+IHtcbiAgICBzdG9yZS5kaXNwYXRjaCh7XG4gICAgICB0eXBlLFxuICAgICAgcGFnZVxuICAgIH0pO1xuICB9O1xuICBleHBvcnQgY29uc3QgcmVkdWNlID0gKHN0YXRlLCBhY3Rpb24pID0+IGltbXV0YWJsZShzdGF0ZSlcbiAgICAuc2V0KCdNYWluLm9wdGlvbnMubWFpblBhZ2UnLCB7fSlcbiAgICAuc2V0KGBNYWluLm9wdGlvbnMubWFpblBhZ2UuJHthY3Rpb24ucGFnZX1gLCB0cnVlKVxuICAgIC52YWx1ZSgpO1xufVxuXG5leHBvcnQgbmFtZXNwYWNlIGluaXQge1xuICBleHBvcnQgY29uc3QgdHlwZSA9ICdpbml0JztcbiAgZXhwb3J0IGNvbnN0IGRpc3BhdGNoID0gKHN0b3JlLCBkYXRhLCBvcHRpb25zKSA9PiB7XG4gICAgc3RvcmUuZGlzcGF0Y2goe1xuICAgICAgdHlwZSxcbiAgICAgIGRhdGEsXG4gICAgICBvcHRpb25zXG4gICAgfSk7XG4gIH07XG4gIGV4cG9ydCBjb25zdCByZWR1Y2UgPSAoc3RhdGUsIGFjdGlvbikgPT4gaW1tdXRhYmxlKHN0YXRlKVxuICAgIC5zZXQoJ01haW4udG9kby5kYXRhJywgYWN0aW9uLmRhdGEpXG4gICAgLnNldCgnTWFpbi50b2RvLm9wdGlvbnMnLCBhY3Rpb24ub3B0aW9ucylcbiAgICAudmFsdWUoKTtcbn1cblxuZXhwb3J0IG5hbWVzcGFjZSBhZGQge1xuICBleHBvcnQgY29uc3QgdHlwZSA9ICdhZGQnO1xuICBleHBvcnQgY29uc3QgZGlzcGF0Y2ggPSAoc3RvcmUsIGRhdGEsIG9wdGlvbnMpID0+IHtcbiAgICBzdG9yZS5kaXNwYXRjaCh7XG4gICAgICB0eXBlLFxuICAgICAgZGF0YSxcbiAgICAgIG9wdGlvbnNcbiAgICB9KTtcbiAgfTtcbiAgZXhwb3J0IGNvbnN0IHJlZHVjZSA9IChzdGF0ZSwgYWN0aW9uKSA9PiBpbW11dGFibGUoc3RhdGUpXG4gICAgLnNldCgnTWFpbi50b2RvLmRhdGEnLCBhY3Rpb24uZGF0YSlcbiAgICAuc2V0KCdNYWluLnRvZG8ub3B0aW9ucycsIGFjdGlvbi5vcHRpb25zKVxuICAgIC52YWx1ZSgpO1xufVxuXG5leHBvcnQgbmFtZXNwYWNlIGVkaXQge1xuICBleHBvcnQgY29uc3QgdHlwZSA9ICdlZGl0JztcbiAgZXhwb3J0IGNvbnN0IGRpc3BhdGNoID0gKHN0b3JlLCBkYXRhLCBvcHRpb25zKSA9PiB7XG4gICAgc3RvcmUuZGlzcGF0Y2goe1xuICAgICAgdHlwZSxcbiAgICAgIGRhdGEsXG4gICAgICBvcHRpb25zXG4gICAgfSk7XG4gIH07XG4gIGV4cG9ydCBjb25zdCByZWR1Y2UgPSAoc3RhdGUsIGFjdGlvbikgPT4gaW1tdXRhYmxlKHN0YXRlKVxuICAgIC5zZXQoJ01haW4udG9kby5kYXRhJywgYWN0aW9uLmRhdGEpXG4gICAgLnNldCgnTWFpbi50b2RvLm9wdGlvbnMnLCBhY3Rpb24ub3B0aW9ucylcbiAgICAudmFsdWUoKTtcbn1cblxuZXhwb3J0IG5hbWVzcGFjZSByZW1vdmUge1xuICBleHBvcnQgY29uc3QgdHlwZSA9ICdyZW1vdmUnO1xuICBleHBvcnQgY29uc3QgZGlzcGF0Y2ggPSAoc3RvcmUsIGRhdGEsIG9wdGlvbnMpID0+IHtcbiAgICBzdG9yZS5kaXNwYXRjaCh7XG4gICAgICB0eXBlLFxuICAgICAgZGF0YSxcbiAgICAgIG9wdGlvbnNcbiAgICB9KTtcbiAgfTtcbiAgZXhwb3J0IGNvbnN0IHJlZHVjZSA9IChzdGF0ZSwgYWN0aW9uKSA9PiBpbW11dGFibGUoc3RhdGUpXG4gICAgLnNldCgnTWFpbi50b2RvLmRhdGEnLCBhY3Rpb24uZGF0YSlcbiAgICAuc2V0KCdNYWluLnRvZG8ub3B0aW9ucycsIGFjdGlvbi5vcHRpb25zKVxuICAgIC52YWx1ZSgpO1xufVxuXG5leHBvcnQgbmFtZXNwYWNlIHRvZ2dsZSB7XG4gIGV4cG9ydCBjb25zdCB0eXBlID0gJ3RvZ2dsZSc7XG4gIGV4cG9ydCBjb25zdCBkaXNwYXRjaCA9IChzdG9yZSwgZGF0YSwgb3B0aW9ucykgPT4ge1xuICAgIHN0b3JlLmRpc3BhdGNoKHtcbiAgICAgIHR5cGUsXG4gICAgICBkYXRhLFxuICAgICAgb3B0aW9uc1xuICAgIH0pO1xuICB9O1xuICBleHBvcnQgY29uc3QgcmVkdWNlID0gKHN0YXRlLCBhY3Rpb24pID0+IGltbXV0YWJsZShzdGF0ZSlcbiAgICAuc2V0KCdNYWluLnRvZG8uZGF0YScsIGFjdGlvbi5kYXRhKVxuICAgIC5zZXQoJ01haW4udG9kby5vcHRpb25zJywgYWN0aW9uLm9wdGlvbnMpXG4gICAgLnZhbHVlKCk7XG59XG5cbmV4cG9ydCBuYW1lc3BhY2UgdG9nZ2xlQWxsIHtcbiAgZXhwb3J0IGNvbnN0IHR5cGUgPSAndG9nZ2xlQWxsJztcbiAgZXhwb3J0IGNvbnN0IGRpc3BhdGNoID0gKHN0b3JlLCBkYXRhLCBvcHRpb25zKSA9PiB7XG4gICAgc3RvcmUuZGlzcGF0Y2goe1xuICAgICAgdHlwZSxcbiAgICAgIGRhdGEsXG4gICAgICBvcHRpb25zXG4gICAgfSk7XG4gIH07XG4gIGV4cG9ydCBjb25zdCByZWR1Y2UgPSAoc3RhdGUsIGFjdGlvbikgPT4gaW1tdXRhYmxlKHN0YXRlKVxuICAgIC5zZXQoJ01haW4udG9kby5kYXRhJywgYWN0aW9uLmRhdGEpXG4gICAgLnNldCgnTWFpbi50b2RvLm9wdGlvbnMnLCBhY3Rpb24ub3B0aW9ucylcbiAgICAudmFsdWUoKTtcbn1cblxuZXhwb3J0IG5hbWVzcGFjZSBmaWx0ZXJCeSB7XG4gIGV4cG9ydCBjb25zdCB0eXBlID0gJ2ZpbHRlckJ5JztcbiAgZXhwb3J0IGNvbnN0IGRpc3BhdGNoID0gKHN0b3JlLCBkYXRhLCBvcHRpb25zKSA9PiB7XG4gICAgc3RvcmUuZGlzcGF0Y2goe1xuICAgICAgdHlwZSxcbiAgICAgIGRhdGEsXG4gICAgICBvcHRpb25zXG4gICAgfSk7XG4gIH07XG4gIGV4cG9ydCBjb25zdCByZWR1Y2UgPSAoc3RhdGUsIGFjdGlvbikgPT4gaW1tdXRhYmxlKHN0YXRlKVxuICAgIC5zZXQoJ01haW4udG9kby5kYXRhJywgYWN0aW9uLmRhdGEpXG4gICAgLnNldCgnTWFpbi50b2RvLm9wdGlvbnMnLCBhY3Rpb24ub3B0aW9ucylcbiAgICAudmFsdWUoKTtcbn1cblxuZXhwb3J0IG5hbWVzcGFjZSByZW1vdmVDb21wbGV0ZWQge1xuICBleHBvcnQgY29uc3QgdHlwZSA9ICdyZW1vdmVDb21wbGV0ZWQnO1xuICBleHBvcnQgY29uc3QgZGlzcGF0Y2ggPSAoc3RvcmUsIGRhdGEsIG9wdGlvbnMpID0+IHtcbiAgICBzdG9yZS5kaXNwYXRjaCh7XG4gICAgICB0eXBlLFxuICAgICAgZGF0YSxcbiAgICAgIG9wdGlvbnNcbiAgICB9KTtcbiAgfTtcbiAgZXhwb3J0IGNvbnN0IHJlZHVjZSA9IChzdGF0ZSwgYWN0aW9uKSA9PiBpbW11dGFibGUoc3RhdGUpXG4gICAgLnNldCgnTWFpbi50b2RvLmRhdGEnLCBhY3Rpb24uZGF0YSlcbiAgICAuc2V0KCdNYWluLnRvZG8ub3B0aW9ucycsIGFjdGlvbi5vcHRpb25zKVxuICAgIC52YWx1ZSgpO1xufVxuXG5leHBvcnQgbmFtZXNwYWNlIHRvZ2dsZUVkaXRpbmcge1xuICBleHBvcnQgY29uc3QgdHlwZSA9ICd0b2dnbGVFZGl0aW5nJztcbiAgZXhwb3J0IGNvbnN0IGRpc3BhdGNoID0gKHN0b3JlLCBkYXRhLCBvcHRpb25zKSA9PiB7XG4gICAgc3RvcmUuZGlzcGF0Y2goe1xuICAgICAgdHlwZSxcbiAgICAgIGRhdGEsXG4gICAgICBvcHRpb25zXG4gICAgfSk7XG4gIH07XG4gIGV4cG9ydCBjb25zdCByZWR1Y2UgPSAoc3RhdGUsIGFjdGlvbikgPT4gaW1tdXRhYmxlKHN0YXRlKVxuICAgIC5zZXQoJ01haW4udG9kby5kYXRhJywgYWN0aW9uLmRhdGEpXG4gICAgLnNldCgnTWFpbi50b2RvLm9wdGlvbnMnLCBhY3Rpb24ub3B0aW9ucylcbiAgICAudmFsdWUoKTtcbn1cbiIsImltcG9ydCB7IFN0b3JlIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHsgVG9kbywgT3B0aW9ucyB9IGZyb20gJ3NyYy9jb25maWcvaW50ZXJmYWNlcyc7XG5cbi8vIGdldCBjbGFzc2VzXG5leHBvcnQgZnVuY3Rpb24gY2xhc3NOYW1lcyhpdGVtKSB7XG4gIGxldCBjbGFzc0xpc3QgPSAnJztcbiAgaWYgKGl0ZW0uaXNDb21wbGV0ZWQpIHtcbiAgICBjbGFzc0xpc3QgPSBgJHtjbGFzc0xpc3R9IGNvbXBsZXRlZGA7XG4gIH1cbiAgaWYgKGl0ZW0uaXNFZGl0aW5nKSB7XG4gICAgY2xhc3NMaXN0ID0gYCR7Y2xhc3NMaXN0fSBlZGl0aW5nYDtcbiAgfVxuICByZXR1cm4gY2xhc3NMaXN0LnRyaW0oKTtcbn1cblxuLy8gZ2V0IHR5cGUgZm9yIGZpbHRlclxuZXhwb3J0IGZ1bmN0aW9uIGdldFByb3AocHJvcDogc3RyaW5nLCBoYXNoOnN0cmluZykge1xuICBsZXQgdHlwZTpzdHJpbmcgPSAnYWxsJztcbiAgbGV0IHVybDpzdHJpbmcgPSAnLyc7XG4gIGlmIChoYXNoID09PSAnIy8nKSB7IHR5cGUgPSAnYWxsJzsgdXJsID0gJy8nOyB9XG4gIGlmIChoYXNoID09PSAnIy9hY3RpdmUnKSB7IHR5cGUgPSAnYWN0aXZlJzsgdXJsID0gJy9hY3RpdmUnOyB9XG4gIGlmIChoYXNoID09PSAnIy9jb21wbGV0ZWQnKSB7IHR5cGUgPSAnY29tcGxldGVkJzsgdXJsID0gJy9jb21wbGV0ZWQnOyB9XG4gIGlmIChwcm9wID09PSAndHlwZScpIHtcbiAgICByZXR1cm4gdHlwZTtcbiAgfVxuICByZXR1cm4gdXJsO1xufVxuXG4vLyBnZW5lcmF0ZSByYW5kb20gaWRcbmV4cG9ydCBmdW5jdGlvbiByYW5kb21JZCgpIHtcbiAgcmV0dXJuIE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cmluZygyLCAxNSkgKyBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHJpbmcoMiwgMTUpO1xufVxuXG4vLyBnZXQgYXJyYXkgaW5kZXggYnkgaXRlbSBpZCBwcm9wXG5leHBvcnQgZnVuY3Rpb24gZ2V0SW5kZXgoYWxsOltUb2RvXSwgdG9kb0lkOnN0cmluZykge1xuICBsZXQgZm91bmRJbmRleCA9IC0xO1xuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgYWxsLmxlbmd0aDsgaW5kZXgrKykge1xuICAgIGNvbnN0IHRvZG8gPSBhbGxbaW5kZXhdO1xuICAgIGlmICh0b2RvLmlkID09PSB0b2RvSWQpIHtcbiAgICAgIGZvdW5kSW5kZXggPSBpbmRleDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZvdW5kSW5kZXg7XG59XG5cbi8vIHJldHJuIGNvbXB1dGVkIG9wdGlvbnNcbmV4cG9ydCBmdW5jdGlvbiBjb21wdXRlT3B0aW9ucyhzdG9yZTpTdG9yZSwgZGF0YTpbVG9kb10pIHtcbiAgY29uc3Qgc3RhdGUgPSBzdG9yZS5nZXRTdGF0ZSgpO1xuICBsZXQgZmlsdGVyU3RhdGUgPSB7XG4gICAgYWxsOiB0cnVlXG4gIH07XG4gIGlmIChzdGF0ZSAmJiBzdGF0ZS5NYWluICYmIHN0YXRlLk1haW4udG9kbyAmJiBzdGF0ZS5NYWluLnRvZG8ub3B0aW9ucyAmJiBzdGF0ZS5NYWluLnRvZG8ub3B0aW9ucy5maWx0ZXIpIHtcbiAgICBmaWx0ZXJTdGF0ZSA9IE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLk1haW4udG9kby5vcHRpb25zLmZpbHRlcik7XG4gIH1cbiAgY29uc3Qgb3B0aW9uczpPcHRpb25zID0ge1xuICAgIGNvdW50VG90YWw6IDAsXG4gICAgY291bnRDb21wbGV0ZTogMCxcbiAgICBjb3VudE5vdENvbXBsZXRlOiAwLFxuICAgIGhhc0NvbXBsZXRlZDogZmFsc2UsXG4gICAgaXNBbGxDb21wbGV0ZTogZmFsc2UsXG4gICAgaXNFZGl0aW5nOiBmYWxzZSxcbiAgICBoYXNEYXRhOiBmYWxzZSxcbiAgICBpc09uZUNvdW50OiBmYWxzZSxcbiAgICBmaWx0ZXI6IGZpbHRlclN0YXRlXG4gIH07XG4gIC8vIHRvdGFsXG4gIG9wdGlvbnMuY291bnRUb3RhbCA9IGRhdGEubGVuZ3RoO1xuICAvLyBjb3VudENvbXBsZXRlLCBjb3VudE5vdENvbXBsZXRlXG4gIGRhdGEuZm9yRWFjaCgodG9kbzpUb2RvKSA9PiB7XG4gICAgaWYgKHRvZG8uaXNDb21wbGV0ZWQpIHtcbiAgICAgIG9wdGlvbnMuY291bnRDb21wbGV0ZSA9IG9wdGlvbnMuY291bnRDb21wbGV0ZSArIDE7XG4gICAgfSBlbHNlIHtcbiAgICAgIG9wdGlvbnMuY291bnROb3RDb21wbGV0ZSA9IG9wdGlvbnMuY291bnROb3RDb21wbGV0ZSArIDE7XG4gICAgfVxuICAgIGlmICh0b2RvLmlzRWRpdGluZykge1xuICAgICAgb3B0aW9ucy5pc0VkaXRpbmcgPSB0cnVlO1xuICAgIH1cbiAgfSk7XG4gIC8vIGhhc0NvbXBsZXRlZFxuICBpZiAob3B0aW9ucy5jb3VudENvbXBsZXRlID4gMCkge1xuICAgIG9wdGlvbnMuaGFzQ29tcGxldGVkID0gdHJ1ZTtcbiAgfVxuICAvLyBpc0FsbENvbXBsZXRlXG4gIGlmIChkYXRhLmxlbmd0aCA9PT0gb3B0aW9ucy5jb3VudENvbXBsZXRlKSB7XG4gICAgb3B0aW9ucy5pc0FsbENvbXBsZXRlID0gdHJ1ZTtcbiAgfVxuICAvLyBoYXNEYXRhXG4gIGlmIChkYXRhLmxlbmd0aCA+IDApIHtcbiAgICBvcHRpb25zLmhhc0RhdGEgPSB0cnVlO1xuICB9XG4gIC8vIGlzT25lQ291bnRcbiAgaWYgKG9wdGlvbnMuY291bnROb3RDb21wbGV0ZSA9PT0gMSkge1xuICAgIG9wdGlvbnMuaXNPbmVDb3VudCA9IHRydWU7XG4gIH1cbiAgLy8gc2F2ZSBkYXRhXG4gIHRyeSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvZG9zLWRybXpuJywgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICB9XG4gIHJldHVybiBvcHRpb25zO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29tcHV0ZUluaXQoc3RvcmU6U3RvcmUsIGhhc2g6c3RyaW5nKSB7XG4gIGxldCBkYXRhOltUb2RvXTtcbiAgdHJ5IHtcbiAgICBkYXRhID0gPFtUb2RvXT5KU09OLnBhcnNlKDxhbnk+bG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvZG9zLWRybXpuJykpO1xuICAgIC8vIHJlbW92ZSBlZGl0aW5nIHdoZW4gbG9hZGluZyBmcm9tIGxvY2FsIHN0b3JhZ2VcbiAgICBkYXRhLmZvckVhY2goKHRvZG86VG9kbykgPT4ge1xuICAgICAgdG9kby5pc0VkaXRpbmcgPSBmYWxzZTtcbiAgICB9KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgfVxuXG4gIGlmICghZGF0YSkge1xuICAgIGRhdGEgPSA8YW55PltdO1xuICB9XG4gIC8vIGNhbGMgb3B0aW9uc1xuICBjb25zdCBvcHRpb25zID0gY29tcHV0ZU9wdGlvbnMoc3RvcmUsIGRhdGEpO1xuICBjb25zdCB0eXBlID0gZ2V0UHJvcCgndHlwZScsIGhhc2gpO1xuICBvcHRpb25zLmZpbHRlciA9IDxhbnk+e307XG4gIG9wdGlvbnMuZmlsdGVyW3R5cGVdID0gdHJ1ZTtcbiAgcmV0dXJuIHtcbiAgICBkYXRhLFxuICAgIG9wdGlvbnNcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbXB1dGVBZGQoc3RvcmU6U3RvcmUsIHRleHQ6c3RyaW5nKSB7XG4gIGNvbnN0IHN0YXRlID0gc3RvcmUuZ2V0U3RhdGUoKTtcbiAgY29uc3QgZGF0YSA9IDxbVG9kb10+c3RhdGUuTWFpbi50b2RvLmRhdGEubWFwKCh4OlRvZG8pID0+ICh7IC4uLnggfSkpO1xuICBsZXQgaXNWaXNpYmxlU3RhdGUgPSB0cnVlO1xuICBpZiAoc3RhdGUuTWFpbi50b2RvLm9wdGlvbnMuZmlsdGVyLmNvbXBsZXRlZCkge1xuICAgIGlzVmlzaWJsZVN0YXRlID0gZmFsc2U7XG4gIH1cbiAgY29uc3QgaWQgPSByYW5kb21JZCgpO1xuICBjb25zdCB0b2RvID0ge1xuICAgIGlkLFxuICAgIHRleHQ6IHRleHQudHJpbSgpLFxuICAgIGlzQ29tcGxldGVkOiBmYWxzZSxcbiAgICBpc1Zpc2libGU6IGlzVmlzaWJsZVN0YXRlXG4gIH07XG4gIGRhdGEucHVzaCh0b2RvKTtcbiAgLy8gY2FsYyBvcHRpb25zXG4gIGNvbnN0IG9wdGlvbnMgPSBjb21wdXRlT3B0aW9ucyhzdG9yZSwgZGF0YSk7XG4gIHJldHVybiB7XG4gICAgZGF0YSxcbiAgICBvcHRpb25zXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21wdXRlRWRpdChzdG9yZTpTdG9yZSwgdG9kb0lkOnN0cmluZywgdGV4dDpzdHJpbmcpIHtcbiAgY29uc3Qgc3RhdGUgPSBzdG9yZS5nZXRTdGF0ZSgpO1xuICBjb25zdCBkYXRhID0gPFtUb2RvXT5zdGF0ZS5NYWluLnRvZG8uZGF0YS5tYXAoKHg6VG9kbykgPT4gKHsgLi4ueCB9KSk7XG4gIGNvbnN0IGZvdW5kSW5kZXggPSBnZXRJbmRleChkYXRhLCB0b2RvSWQpO1xuICAvLyB1cGRhdGUgdGV4dFxuICBkYXRhW2ZvdW5kSW5kZXhdLnRleHQgPSB0ZXh0LnRyaW0oKTtcbiAgLy8gY2FsYyBvcHRpb25zXG4gIGNvbnN0IG9wdGlvbnMgPSBjb21wdXRlT3B0aW9ucyhzdG9yZSwgZGF0YSk7XG4gIHJldHVybiB7XG4gICAgZGF0YSxcbiAgICBvcHRpb25zXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21wdXRlUmVtb3ZlKHN0b3JlOlN0b3JlLCB0b2RvSWQ6c3RyaW5nKSB7XG4gIGNvbnN0IHN0YXRlID0gc3RvcmUuZ2V0U3RhdGUoKTtcbiAgY29uc3QgZGF0YSA9IDxbVG9kb10+c3RhdGUuTWFpbi50b2RvLmRhdGEubWFwKCh4OlRvZG8pID0+ICh7IC4uLnggfSkpO1xuICBjb25zdCBmb3VuZEluZGV4ID0gZ2V0SW5kZXgoZGF0YSwgdG9kb0lkKTtcbiAgLy8gcmVtb3ZlIGl0ZW1cbiAgZGF0YS5zcGxpY2UoZm91bmRJbmRleCwgMSk7XG4gIC8vIGNhbGMgb3B0aW9uc1xuICBjb25zdCBvcHRpb25zID0gY29tcHV0ZU9wdGlvbnMoc3RvcmUsIGRhdGEpO1xuICByZXR1cm4ge1xuICAgIGRhdGEsXG4gICAgb3B0aW9uc1xuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29tcHV0ZVRvZ2dsZShzdG9yZTpTdG9yZSwgdG9kb0lkOnN0cmluZykge1xuICBjb25zdCBzdGF0ZSA9IHN0b3JlLmdldFN0YXRlKCk7XG4gIGNvbnN0IGRhdGEgPSA8W1RvZG9dPnN0YXRlLk1haW4udG9kby5kYXRhLm1hcCgoeDogVG9kbykgPT4gKHsgLi4ueCB9KSk7XG4gIGNvbnN0IGZvdW5kSW5kZXggPSBnZXRJbmRleChkYXRhLCB0b2RvSWQpO1xuICAvLyB0b2dnbGUgaXRlbVxuICBkYXRhW2ZvdW5kSW5kZXhdLmlzQ29tcGxldGVkID0gZGF0YVtmb3VuZEluZGV4XS5pc0NvbXBsZXRlZCA/IGZhbHNlIDogdHJ1ZTtcbiAgLy8gaGlkZSBpZiBmaWx0ZXJlZFxuICBpZiAoc3RhdGUuTWFpbi50b2RvLm9wdGlvbnMuZmlsdGVyLmNvbXBsZXRlZCkge1xuICAgIGRhdGFbZm91bmRJbmRleF0uaXNWaXNpYmxlID0gZGF0YVtmb3VuZEluZGV4XS5pc0NvbXBsZXRlZCA/IHRydWUgOiBmYWxzZTtcbiAgfVxuICAvLyBoaWRlIGlmIGZpbHRlcmVkXG4gIGlmIChzdGF0ZS5NYWluLnRvZG8ub3B0aW9ucy5maWx0ZXIuYWN0aXZlKSB7XG4gICAgZGF0YVtmb3VuZEluZGV4XS5pc1Zpc2libGUgPSBkYXRhW2ZvdW5kSW5kZXhdLmlzQ29tcGxldGVkID8gZmFsc2UgOiB0cnVlIDtcbiAgfVxuICAvLyBjYWxjIG9wdGlvbnNcbiAgY29uc3Qgb3B0aW9ucyA9IGNvbXB1dGVPcHRpb25zKHN0b3JlLCBkYXRhKTtcbiAgcmV0dXJuIHtcbiAgICBkYXRhLFxuICAgIG9wdGlvbnNcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbXB1dGVUb2dnbGVBbGwoc3RvcmU6U3RvcmUpIHtcbiAgY29uc3Qgc3RhdGUgPSBzdG9yZS5nZXRTdGF0ZSgpO1xuICBjb25zdCBkYXRhID0gPFtUb2RvXT5zdGF0ZS5NYWluLnRvZG8uZGF0YS5tYXAoKHg6VG9kbykgPT4gKHsgLi4ueCB9KSk7XG4gIGxldCBhbGxDb21wbGV0ZWQgPSB0cnVlO1xuICBkYXRhLmZvckVhY2goKHRvZG86VG9kbykgPT4ge1xuICAgIGlmICh0b2RvLmlzQ29tcGxldGVkID09PSBmYWxzZSkge1xuICAgICAgYWxsQ29tcGxldGVkID0gZmFsc2U7XG4gICAgfVxuICB9KTtcbiAgLy8gaWYgYXQgbGVhc3Qgb25lIGlzIG5vdCBjb21wbGV0ZSAtIG1ha2UgYWxsIGNvbXBsZXRlZFxuICAvLyBpZiBhbGwgYXJlIGNvbXBsZXRlZCAtIG1ha2UgYWxsIG5vdCBjb21wbGV0ZWRcbiAgZGF0YS5mb3JFYWNoKCh0b2RvOlRvZG8pID0+IHtcbiAgICBpZiAoYWxsQ29tcGxldGVkKSB7XG4gICAgICB0b2RvLmlzQ29tcGxldGVkID0gZmFsc2U7XG4gICAgICBpZiAoc3RhdGUuTWFpbi50b2RvLm9wdGlvbnMuZmlsdGVyLmNvbXBsZXRlZCkge1xuICAgICAgICB0b2RvLmlzVmlzaWJsZSA9IGZhbHNlO1xuICAgICAgfVxuICAgICAgaWYgKHN0YXRlLk1haW4udG9kby5vcHRpb25zLmZpbHRlci5hY3RpdmUpIHtcbiAgICAgICAgdG9kby5pc1Zpc2libGUgPSB0cnVlO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0b2RvLmlzQ29tcGxldGVkID0gdHJ1ZTtcbiAgICAgIGlmIChzdGF0ZS5NYWluLnRvZG8ub3B0aW9ucy5maWx0ZXIuY29tcGxldGVkKSB7XG4gICAgICAgIHRvZG8uaXNWaXNpYmxlID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGlmIChzdGF0ZS5NYWluLnRvZG8ub3B0aW9ucy5maWx0ZXIuYWN0aXZlKSB7XG4gICAgICAgIHRvZG8uaXNWaXNpYmxlID0gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbiAgLy8gY2FsYyBvcHRpb25zXG4gIGNvbnN0IG9wdGlvbnMgPSBjb21wdXRlT3B0aW9ucyhzdG9yZSwgZGF0YSk7XG4gIHJldHVybiB7XG4gICAgZGF0YSxcbiAgICBvcHRpb25zXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21wdXRlRmlsdGVyQnkoc3RvcmU6U3RvcmUsIHR5cGUgPSAnYWxsJykge1xuICBjb25zdCBzdGF0ZSA9IHN0b3JlLmdldFN0YXRlKCk7XG4gIGNvbnN0IGRhdGEgPSA8W1RvZG9dPnN0YXRlLk1haW4udG9kby5kYXRhLm1hcCgoeDpUb2RvKSA9PiAoeyAuLi54IH0pKTtcbiAgaWYgKHR5cGUgPT09ICdhY3RpdmUnKSB7XG4gICAgZGF0YS5mb3JFYWNoKCh0b2RvOlRvZG8pID0+IHtcbiAgICAgIGlmICh0b2RvLmlzQ29tcGxldGVkID09PSBmYWxzZSkge1xuICAgICAgICB0b2RvLmlzVmlzaWJsZSA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0b2RvLmlzVmlzaWJsZSA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIGlmICh0eXBlID09PSAnY29tcGxldGVkJykge1xuICAgIGRhdGEuZm9yRWFjaCgodG9kbzpUb2RvKSA9PiB7XG4gICAgICBpZiAodG9kby5pc0NvbXBsZXRlZCA9PT0gdHJ1ZSkge1xuICAgICAgICB0b2RvLmlzVmlzaWJsZSA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0b2RvLmlzVmlzaWJsZSA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIGlmICh0eXBlID09PSAnYWxsJykge1xuICAgIGRhdGEuZm9yRWFjaCgodG9kbzpUb2RvKSA9PiB7XG4gICAgICB0b2RvLmlzVmlzaWJsZSA9IHRydWU7XG4gICAgfSk7XG4gIH1cbiAgLy8gY2FsYyBvcHRpb25zXG4gIGNvbnN0IG9wdGlvbnMgPSBjb21wdXRlT3B0aW9ucyhzdG9yZSwgZGF0YSk7XG4gIG9wdGlvbnMuZmlsdGVyID0gPGFueT57fTtcbiAgb3B0aW9ucy5maWx0ZXJbdHlwZV0gPSB0cnVlO1xuICByZXR1cm4ge1xuICAgIGRhdGEsXG4gICAgb3B0aW9uc1xuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29tcHV0ZVJlbW92ZUNvbXBsZXRlZChzdG9yZTpTdG9yZSkge1xuICBjb25zdCBzdGF0ZSA9IHN0b3JlLmdldFN0YXRlKCk7XG4gIGNvbnN0IGRhdGFUZW1wID0gPFtUb2RvXT5zdGF0ZS5NYWluLnRvZG8uZGF0YS5tYXAoKHg6VG9kbykgPT4gKHsgLi4ueCB9KSk7XG4gIC8vIHJlbW92ZSBjb21wbGV0ZWRcbiAgY29uc3QgZGF0YSA9IDxbVG9kb10+ZGF0YVRlbXAuZmlsdGVyKCh0b2RvOlRvZG8pID0+IHRvZG8uaXNDb21wbGV0ZWQgPT09IGZhbHNlKTtcbiAgLy8gY2FsYyBvcHRpb25zXG4gIGNvbnN0IG9wdGlvbnMgPSBjb21wdXRlT3B0aW9ucyhzdG9yZSwgZGF0YSk7XG4gIHJldHVybiB7XG4gICAgZGF0YSxcbiAgICBvcHRpb25zXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21wdXRlVG9nZ2xlRWRpdChzdG9yZTpTdG9yZSwgdG9kb0lkOnN0cmluZywgdHlwZTpzdHJpbmcsIHRleHQ6c3RyaW5nKSB7XG4gIGNvbnN0IHN0YXRlID0gc3RvcmUuZ2V0U3RhdGUoKTtcbiAgY29uc3QgZGF0YSA9IDxbVG9kb10+c3RhdGUuTWFpbi50b2RvLmRhdGEubWFwKCh4OlRvZG8pID0+ICh7IC4uLnggfSkpO1xuICAvLyB0b2dnbGUgZWRpdFxuICBkYXRhLmZvckVhY2goKHRvZG86VG9kbykgPT4ge1xuICAgIHRvZG8uaXNFZGl0aW5nID0gZmFsc2U7XG4gIH0pO1xuICBpZiAodG9kb0lkICYmIHR5cGUgPT09ICdvbicpIHtcbiAgICBjb25zdCBmb3VuZEluZGV4ID0gZ2V0SW5kZXgoZGF0YSwgdG9kb0lkKTtcbiAgICBpZiAoZm91bmRJbmRleCA+IC0xKSB7XG4gICAgICBkYXRhW2ZvdW5kSW5kZXhdLmlzRWRpdGluZyA9IHRydWU7XG4gICAgfVxuICB9XG4gIC8vIHNhdmUgdGV4dCBvbiBvZmZcbiAgaWYgKHRvZG9JZCAmJiB0ZXh0ICYmIHR5cGUgPT09ICdvZmYnKSB7XG4gICAgY29uc3QgZm91bmRJbmRleCA9IGdldEluZGV4KGRhdGEsIHRvZG9JZCk7XG4gICAgZGF0YVtmb3VuZEluZGV4XS50ZXh0ID0gdGV4dDtcbiAgfVxuICAvLyBjYWxjIG9wdGlvbnNcbiAgY29uc3Qgb3B0aW9ucyA9IGNvbXB1dGVPcHRpb25zKHN0b3JlLCBkYXRhKTtcbiAgcmV0dXJuIHtcbiAgICBkYXRhLFxuICAgIG9wdGlvbnNcbiAgfTtcbn1cbiIsImV4cG9ydCBjb25zdCBwbGFjZWhvbGRlciA9IChodG1sLCBwcmVsb2FkZWRTdGF0ZSwgdmVyc2lvbikgPT4gYDwhZG9jdHlwZSBodG1sPlxuPGh0bWwgbGFuZz1cImVuXCI+XG5cdDxoZWFkPlxuXHRcdDxtZXRhIGNoYXJzZXQ9XCJ1dGYtOFwiPlxuXHRcdDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MVwiPlxuXHRcdDx0aXRsZT5Ecm16biDigKIgVG9kb01WQzwvdGl0bGU+XG5cdFx0PGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJub2RlX21vZHVsZXMvdG9kb212Yy1jb21tb24vYmFzZS5jc3NcIj5cblx0XHQ8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cIm5vZGVfbW9kdWxlcy90b2RvbXZjLWFwcC1jc3MvaW5kZXguY3NzXCI+XG5cdFx0PGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJjc3MvYXBwLmNzc1wiPlxuXHQ8L2hlYWQ+XG5cdDxib2R5PlxuXHRcdDxkaXYgaWQ9XCJyb290XCI+JHtodG1sfTwvZGl2PlxuXG5cdFx0PGZvb3RlciBjbGFzcz1cImluZm9cIj5cblx0XHRcdDxwPkRvdWJsZS1jbGljayB0byBlZGl0IGEgdG9kbzwvcD5cblx0XHRcdDxwPkNyZWF0ZWQgYnkgPGEgaHJlZj1cImh0dHA6Ly90b2RvbXZjLmNvbVwiPkFsZXggVHp2ZXRhbm92PC9hPjwvcD5cblx0XHRcdDxwPlBhcnQgb2YgPGEgaHJlZj1cImh0dHA6Ly90b2RvbXZjLmNvbVwiPlRvZG9NVkM8L2E+PC9wPlxuXHRcdDwvZm9vdGVyPlxuXG5cdFx0PHNjcmlwdD5cbiAgICAgIHdpbmRvdy5fX1BSRUxPQURFRF9TVEFURV9fID0gJyR7cHJlbG9hZGVkU3RhdGV9JztcbiAgICA8L3NjcmlwdD5cblxuXHRcdDxzY3JpcHQgc3JjPVwibm9kZV9tb2R1bGVzL3RvZG9tdmMtY29tbW9uL2Jhc2UuanNcIj48L3NjcmlwdD5cbiAgICA8c2NyaXB0IHR5cGU9XCJ0ZXh0L2phdmFzY3JpcHRcIiBzcmM9XCJqcy9tYWluLiR7dmVyc2lvbn0ubWluLmpzXCI+PC9zY3JpcHQ+XG4gIDwvYm9keT5cbjwvaHRtbD5gO1xuIiwiaW1wb3J0ICogYXMgYWN0aW9ucyBmcm9tICdzcmMvY29uZmlnL2FjdGlvbnMnO1xuaW1wb3J0IHsgY3JlYXRlU3RvcmUgfSBmcm9tICdyZWR1eCc7XG5cbmltcG9ydCB7IGFjdGlvblJlZHVjZXIsIGh5ZHJhdGUsIGV4dGVuc2lvbiB9IGZyb20gJ2RybXpuLXJlZHV4JztcblxuLy8gZXhwb3J0IGZ1bmN0aW9uIHRoYXQgY3JlYXRlcyBuZXcgc3RvcmUgZm9yIHNlcnZlciBzaWRlXG5leHBvcnQgY29uc3Qgc3RvcmVDcmVhdGUgPSAoKSA9PiBjcmVhdGVTdG9yZShhY3Rpb25SZWR1Y2VyKGFjdGlvbnMpLCBoeWRyYXRlLCBleHRlbnNpb24pO1xuXG4vLyBpbml0IHRoZSBzdG9yZSBvbiBjbGllbnQgc2lkZVxuZXhwb3J0IGNvbnN0IHN0b3JlID0gc3RvcmVDcmVhdGUoKTtcbiIsImltcG9ydCB7IFN0b3JlIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0ICogYXMgYWN0aW9ucyBmcm9tICdzcmMvY29uZmlnL2FjdGlvbnMnO1xuaW1wb3J0IHtcbiAgY29tcHV0ZUluaXQsXG4gIGNvbXB1dGVBZGQsXG4gIGNvbXB1dGVFZGl0LFxuICBjb21wdXRlUmVtb3ZlLFxuICBjb21wdXRlVG9nZ2xlLFxuICBjb21wdXRlVG9nZ2xlQWxsLFxuICBjb21wdXRlRmlsdGVyQnksXG4gIGNvbXB1dGVSZW1vdmVDb21wbGV0ZWQsXG4gIGNvbXB1dGVUb2dnbGVFZGl0XG4gfSBmcm9tICdzcmMvY29uZmlnL2Z1bmN0aW9ucyc7XG5cbmV4cG9ydCBjb25zdCBUb2RvID0gKHN0b3JlOlN0b3JlKSA9PiB7XG4gIGNvbnN0IGluaXQgPSAoaGFzaDpzdHJpbmcpID0+IHtcbiAgICBjb25zdCB7IGRhdGEsIG9wdGlvbnMgfSA9IGNvbXB1dGVJbml0KHN0b3JlLCBoYXNoKTtcbiAgICBhY3Rpb25zLmluaXQuZGlzcGF0Y2goc3RvcmUsIGRhdGEsIG9wdGlvbnMpO1xuICB9O1xuXG4gIGNvbnN0IGFkZCA9ICh0ZXh0OnN0cmluZykgPT4ge1xuICAgIGNvbnN0IHsgZGF0YSwgb3B0aW9ucyB9ID0gY29tcHV0ZUFkZChzdG9yZSwgdGV4dCk7XG4gICAgYWN0aW9ucy5hZGQuZGlzcGF0Y2goc3RvcmUsIGRhdGEsIG9wdGlvbnMpO1xuICB9O1xuXG4gIGNvbnN0IGVkaXQgPSAodG9kb0lkOnN0cmluZywgdGV4dDpzdHJpbmcpID0+IHtcbiAgICBjb25zdCB7IGRhdGEsIG9wdGlvbnMgfSA9IGNvbXB1dGVFZGl0KHN0b3JlLCB0b2RvSWQsIHRleHQpO1xuICAgIGFjdGlvbnMuZWRpdC5kaXNwYXRjaChzdG9yZSwgZGF0YSwgb3B0aW9ucyk7XG4gIH07XG5cbiAgY29uc3QgcmVtb3ZlID0gKHRvZG9JZDpzdHJpbmcpID0+IHtcbiAgICBjb25zdCB7IGRhdGEsIG9wdGlvbnMgfSA9IGNvbXB1dGVSZW1vdmUoc3RvcmUsIHRvZG9JZCk7XG4gICAgYWN0aW9ucy5yZW1vdmUuZGlzcGF0Y2goc3RvcmUsIGRhdGEsIG9wdGlvbnMpO1xuICB9O1xuXG4gIGNvbnN0IHRvZ2dsZSA9ICh0b2RvSWQ6c3RyaW5nKSA9PiB7XG4gICAgY29uc3QgeyBkYXRhLCBvcHRpb25zIH0gPSBjb21wdXRlVG9nZ2xlKHN0b3JlLCB0b2RvSWQpO1xuICAgIGFjdGlvbnMudG9nZ2xlLmRpc3BhdGNoKHN0b3JlLCBkYXRhLCBvcHRpb25zKTtcbiAgfTtcblxuICBjb25zdCB0b2dnbGVBbGwgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBkYXRhLCBvcHRpb25zIH0gPSBjb21wdXRlVG9nZ2xlQWxsKHN0b3JlKTtcbiAgICBhY3Rpb25zLnRvZ2dsZUFsbC5kaXNwYXRjaChzdG9yZSwgZGF0YSwgb3B0aW9ucyk7XG4gIH07XG5cbiAgY29uc3QgZmlsdGVyQnkgPSAodHlwZTpzdHJpbmcpID0+IHtcbiAgICBjb25zdCB7IGRhdGEsIG9wdGlvbnMgfSA9IGNvbXB1dGVGaWx0ZXJCeShzdG9yZSwgdHlwZSk7XG4gICAgYWN0aW9ucy5maWx0ZXJCeS5kaXNwYXRjaChzdG9yZSwgZGF0YSwgb3B0aW9ucyk7XG4gIH07XG5cbiAgY29uc3QgcmVtb3ZlQ29tcGxldGVkID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgZGF0YSwgb3B0aW9ucyB9ID0gY29tcHV0ZVJlbW92ZUNvbXBsZXRlZChzdG9yZSk7XG4gICAgYWN0aW9ucy5yZW1vdmVDb21wbGV0ZWQuZGlzcGF0Y2goc3RvcmUsIGRhdGEsIG9wdGlvbnMpO1xuICB9O1xuXG4gIGNvbnN0IHRvZ2dsZUVkaXRpbmcgPSAodG9kb0lkOnN0cmluZywgdHlwZTpzdHJpbmcsIHRleHQ6c3RyaW5nKSA9PiB7XG4gICAgY29uc3QgeyBkYXRhLCBvcHRpb25zIH0gPSBjb21wdXRlVG9nZ2xlRWRpdChzdG9yZSwgdG9kb0lkLCB0eXBlLCB0ZXh0KTtcbiAgICBhY3Rpb25zLnRvZ2dsZUVkaXRpbmcuZGlzcGF0Y2goc3RvcmUsIGRhdGEsIG9wdGlvbnMpO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgaW5pdCxcbiAgICBhZGQsXG4gICAgZWRpdCxcbiAgICByZW1vdmUsXG4gICAgdG9nZ2xlLFxuICAgIHRvZ2dsZUFsbCxcbiAgICBmaWx0ZXJCeSxcbiAgICByZW1vdmVDb21wbGV0ZWQsXG4gICAgdG9nZ2xlRWRpdGluZ1xuICB9O1xufTtcbiIsImltcG9ydCAqIGFzIGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgKiBhcyBjb21wcmVzc2lvbiBmcm9tICdjb21wcmVzc2lvbic7XG5pbXBvcnQgKiBhcyBodHRwIGZyb20gJ2h0dHAnO1xuXG5pbXBvcnQgeyBzdG9yZUNyZWF0ZSB9IGZyb20gJ3NyYy9jb25maWcvc3RvcmUnO1xuaW1wb3J0IHsgVG9kbyB9IGZyb20gJ3NyYy9jb250cm9sbGVycy9Ub2RvQ29udHJvbGxlcic7XG5pbXBvcnQgeyBwbGFjZWhvbGRlciB9IGZyb20gJ3NyYy9jb25maWcvcGxhY2Vob2xkZXInO1xuXG5pbXBvcnQgeyBzc3IgfSBmcm9tICdkcm16bi1yZWFjdCc7XG5pbXBvcnQgQXBwIGZyb20gJ3NyYy9jb21wb25lbnRzL3Jvb3QnO1xuXG4vLyBpbXBvcnQgeyBzc3IsIGdldFRlbXBsYXRlcyB9IGZyb20gJ2RybXpuLW11c3RhY2hlJztcbi8vIGNvbnN0IHRwbHMgPSByZXF1aXJlLmNvbnRleHQoJ3NyYy9tdXN0YWNoZScsIHRydWUsIC9cXC5odG1sJC8pO1xuLy8gY29uc3QgeyB0ZW1wbGF0ZXMsIGNvbnRhaW5lciB9ID0gZ2V0VGVtcGxhdGVzKHRwbHMpO1xuXG5jb25zdCB2ZXJzaW9uID0gJzAuMC4xJztcblxuY29uc3QgYXBwID0gZXhwcmVzcygpO1xuYXBwLnVzZShjb21wcmVzc2lvbigpKTtcblxuYXBwLmdldCgnLycsIGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICBjb25zdCBzdG9yZSA9IHN0b3JlQ3JlYXRlKCk7XG4gIGF3YWl0IFRvZG8oc3RvcmUpLmluaXQoJy8nKTtcbiAgc3NyKHBsYWNlaG9sZGVyLCBBcHAsIHZlcnNpb24pLnJlbmRlcihzdG9yZSwgcmVxLCByZXMpO1xuICAvLyBzc3IocGxhY2Vob2xkZXIsIGNvbnRhaW5lciwgdGVtcGxhdGVzLCB2ZXJzaW9uKS5yZW5kZXIoc3RvcmUsIHJlcSwgcmVzKTtcbn0pO1xuXG5hcHAudXNlKCcvJywgZXhwcmVzcy5zdGF0aWMoJ3B1YmxpYycpKTtcblxuY29uc3Qgc2VydmVyID0gaHR0cC5jcmVhdGVTZXJ2ZXIoYXBwKTtcbnNlcnZlci5saXN0ZW4oMjIzMyk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb21wcmVzc2lvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJkcm16bi1yZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJkcm16bi1yZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJleHByZXNzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImh0dHBcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwib2JqZWN0LXBhdGgtaW1tdXRhYmxlL2luZGV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4XCIpOyJdLCJzb3VyY2VSb290IjoiIn0=