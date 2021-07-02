/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _todo_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todo.png */ "./src/todo.png");
/* harmony import */ var _X_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./X.png */ "./src/X.png");
/* harmony import */ var _success_green_check_mark_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./success-green-check-mark.png */ "./src/success-green-check-mark.png");
// Imports






var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Mukta&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_todo_png__WEBPACK_IMPORTED_MODULE_3__);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_X_png__WEBPACK_IMPORTED_MODULE_4__);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_success_green_check_mark_png__WEBPACK_IMPORTED_MODULE_5__);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* Global styles */\n\n*,\n*::before,\n*::after {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: \"Mukta\";\n}\n\n/* title */\n\n#pageTitle {\n  background-color: blanchedalmond;\n  height: 80px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0px 15px;\n}\n#logo {\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") no-repeat;\n  background-size: contain;\n  height: 50px;\n  width: 50px;\n}\n#user {\n  font-weight: bold;\n  cursor: pointer;\n}\n\n/* container */\n\n#container {\n  height: calc(100vh - 80px);\n  display: grid;\n  grid-template-columns: 330px auto;\n}\n\n/* project container */\n\n#proCont {\n  background-color: lightblue;\n  padding: 10px;\n}\n#proForm {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  margin-top: 10px;\n}\n#proForm > input[type=\"text\"] {\n  font-size: 16px;\n  width: 230px;\n  padding: 3px 10px;\n  border-radius: 3px;\n  border: none;\n}\n#addProBtn,\n#delProBtn {\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") no-repeat;\n  background-size: contain;\n  height: 33px;\n  width: 42px;\n  cursor: pointer;\n}\n#addProBtn {\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") no-repeat;\n  background-size: contain;\n  margin-left: 5px;\n  border: none;\n}\n#addProBtn:hover,\n#delProBtn:hover {\n  transform: scale(1.05);\n}\n#proList {\n  margin-top: 25px;\n}\n#proItem {\n  font-size: 24px;\n  border: 1px solid gray;\n  margin-bottom: 5px;\n  border-radius: 10px;\n  padding: 0px 8px;\n  background-color: whitesmoke;\n  width: 270px;\n}\n#proItem:hover {\n  background-color: yellow;\n  cursor: pointer;\n}\n#delProItemBtn {\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") no-repeat;\n  background-size: contain;\n  height: 40px;\n  width: 40px;\n  position: relative;\n  left: 50px;\n  float: right;\n}\n#delProItemBtn:hover {\n  transform: scale(1.05);\n}\n/* todo container */\n\n#todoCont {\n  background-color: rgb(65, 180, 225);\n  padding: 10px;\n}\n#todoForm {\n  display: flex;\n  flex-direction: column;\n  width: 330px;\n  gap: 8px;\n  margin: auto;\n}\nlabel,\ninput[type=\"radio\"] {\n  cursor: pointer;\n  font-size: 20px;\n  margin-right: 5px;\n}\n#todoForm > input,\ntextarea {\n  padding: 3px;\n  font-size: 16px;\n  outline: none;\n}\n#prio {\n  text-align: center;\n}\n#addCancel {\n  display: flex;\n  gap: 3px;\n  justify-content: center;\n}\n#addCancel > input {\n  font-size: 16px;\n  padding: 0px 10px;\n  cursor: pointer;\n}\n#addCancel > div {\n  border: 1px solid black;\n  border-radius: 3px;\n  font-size: 16px;\n  padding: 0px 10px;\n  background-color: rgb(255, 99, 42);\n  cursor: pointer;\n}\n#addCancel > div:hover {\n  background-color: orangered;\n}\n#toggleTodoForm {\n  border: 1px solid black;\n  border-radius: 8px;\n  padding: 5px 15px;\n  width: 165px;\n  margin: 5px auto 15px auto;\n  cursor: pointer;\n  background-color: limegreen;\n}\n#toggleTodoForm:hover {\n  background-color: rgb(42, 182, 42);\n}\n\n/* view todos */\n\n#todoList {\n  list-style-type: none;\n  margin: 20px auto;\n  width: 400px;\n}\n.todoItem {\n  border: 1px solid black;\n  padding: 10px;\n  border-radius: 2px;\n  margin-bottom: 10px;\n  background-color: khaki;\n}\ninput[type=\"checkbox\"] {\n  transform: scale(2);\n  margin-left: 7px;\n  cursor: pointer;\n}\n#delTodo {\n  background-color: rgb(255, 90, 30);\n  width: fit-content;\n  padding: 0px 10px;\n  border-radius: 2px;\n  float: right;\n  cursor: pointer;\n  transform: translateY(-3px);\n}\n#delTodo:hover {\n  background-color: red;\n}\n\n/* hide */\n\n.hide {\n  display: none !important;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA,kBAAkB;;AAElB;;;EAGE,SAAS;EACT,UAAU;EACV,sBAAsB;EACtB,oBAAoB;AACtB;;AAEA,UAAU;;AAEV;EACE,gCAAgC;EAChC,YAAY;EACZ,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,iBAAiB;AACnB;AACA;EACE,6DAAuC;EACvC,wBAAwB;EACxB,YAAY;EACZ,WAAW;AACb;AACA;EACE,iBAAiB;EACjB,eAAe;AACjB;;AAEA,cAAc;;AAEd;EACE,0BAA0B;EAC1B,aAAa;EACb,iCAAiC;AACnC;;AAEA,sBAAsB;;AAEtB;EACE,2BAA2B;EAC3B,aAAa;AACf;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,mBAAmB;EACnB,gBAAgB;AAClB;AACA;EACE,eAAe;EACf,YAAY;EACZ,iBAAiB;EACjB,kBAAkB;EAClB,YAAY;AACd;AACA;;EAEE,6DAAuC;EACvC,wBAAwB;EACxB,YAAY;EACZ,WAAW;EACX,eAAe;AACjB;AACA;EACE,6DAA2D;EAC3D,wBAAwB;EACxB,gBAAgB;EAChB,YAAY;AACd;AACA;;EAEE,sBAAsB;AACxB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,eAAe;EACf,sBAAsB;EACtB,kBAAkB;EAClB,mBAAmB;EACnB,gBAAgB;EAChB,4BAA4B;EAC5B,YAAY;AACd;AACA;EACE,wBAAwB;EACxB,eAAe;AACjB;AACA;EACE,6DAAuC;EACvC,wBAAwB;EACxB,YAAY;EACZ,WAAW;EACX,kBAAkB;EAClB,UAAU;EACV,YAAY;AACd;AACA;EACE,sBAAsB;AACxB;AACA,mBAAmB;;AAEnB;EACE,mCAAmC;EACnC,aAAa;AACf;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,YAAY;EACZ,QAAQ;EACR,YAAY;AACd;AACA;;EAEE,eAAe;EACf,eAAe;EACf,iBAAiB;AACnB;AACA;;EAEE,YAAY;EACZ,eAAe;EACf,aAAa;AACf;AACA;EACE,kBAAkB;AACpB;AACA;EACE,aAAa;EACb,QAAQ;EACR,uBAAuB;AACzB;AACA;EACE,eAAe;EACf,iBAAiB;EACjB,eAAe;AACjB;AACA;EACE,uBAAuB;EACvB,kBAAkB;EAClB,eAAe;EACf,iBAAiB;EACjB,kCAAkC;EAClC,eAAe;AACjB;AACA;EACE,2BAA2B;AAC7B;AACA;EACE,uBAAuB;EACvB,kBAAkB;EAClB,iBAAiB;EACjB,YAAY;EACZ,0BAA0B;EAC1B,eAAe;EACf,2BAA2B;AAC7B;AACA;EACE,kCAAkC;AACpC;;AAEA,eAAe;;AAEf;EACE,qBAAqB;EACrB,iBAAiB;EACjB,YAAY;AACd;AACA;EACE,uBAAuB;EACvB,aAAa;EACb,kBAAkB;EAClB,mBAAmB;EACnB,uBAAuB;AACzB;AACA;EACE,mBAAmB;EACnB,gBAAgB;EAChB,eAAe;AACjB;AACA;EACE,kCAAkC;EAClC,kBAAkB;EAClB,iBAAiB;EACjB,kBAAkB;EAClB,YAAY;EACZ,eAAe;EACf,2BAA2B;AAC7B;AACA;EACE,qBAAqB;AACvB;;AAEA,SAAS;;AAET;EACE,wBAAwB;AAC1B","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Mukta&display=swap\");\n\n/* Global styles */\n\n*,\n*::before,\n*::after {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: \"Mukta\";\n}\n\n/* title */\n\n#pageTitle {\n  background-color: blanchedalmond;\n  height: 80px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0px 15px;\n}\n#logo {\n  background: url(\"./todo.png\") no-repeat;\n  background-size: contain;\n  height: 50px;\n  width: 50px;\n}\n#user {\n  font-weight: bold;\n  cursor: pointer;\n}\n\n/* container */\n\n#container {\n  height: calc(100vh - 80px);\n  display: grid;\n  grid-template-columns: 330px auto;\n}\n\n/* project container */\n\n#proCont {\n  background-color: lightblue;\n  padding: 10px;\n}\n#proForm {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  margin-top: 10px;\n}\n#proForm > input[type=\"text\"] {\n  font-size: 16px;\n  width: 230px;\n  padding: 3px 10px;\n  border-radius: 3px;\n  border: none;\n}\n#addProBtn,\n#delProBtn {\n  background: url(\"/src/X.png\") no-repeat;\n  background-size: contain;\n  height: 33px;\n  width: 42px;\n  cursor: pointer;\n}\n#addProBtn {\n  background: url(\"./success-green-check-mark.png\") no-repeat;\n  background-size: contain;\n  margin-left: 5px;\n  border: none;\n}\n#addProBtn:hover,\n#delProBtn:hover {\n  transform: scale(1.05);\n}\n#proList {\n  margin-top: 25px;\n}\n#proItem {\n  font-size: 24px;\n  border: 1px solid gray;\n  margin-bottom: 5px;\n  border-radius: 10px;\n  padding: 0px 8px;\n  background-color: whitesmoke;\n  width: 270px;\n}\n#proItem:hover {\n  background-color: yellow;\n  cursor: pointer;\n}\n#delProItemBtn {\n  background: url(\"/src/X.png\") no-repeat;\n  background-size: contain;\n  height: 40px;\n  width: 40px;\n  position: relative;\n  left: 50px;\n  float: right;\n}\n#delProItemBtn:hover {\n  transform: scale(1.05);\n}\n/* todo container */\n\n#todoCont {\n  background-color: rgb(65, 180, 225);\n  padding: 10px;\n}\n#todoForm {\n  display: flex;\n  flex-direction: column;\n  width: 330px;\n  gap: 8px;\n  margin: auto;\n}\nlabel,\ninput[type=\"radio\"] {\n  cursor: pointer;\n  font-size: 20px;\n  margin-right: 5px;\n}\n#todoForm > input,\ntextarea {\n  padding: 3px;\n  font-size: 16px;\n  outline: none;\n}\n#prio {\n  text-align: center;\n}\n#addCancel {\n  display: flex;\n  gap: 3px;\n  justify-content: center;\n}\n#addCancel > input {\n  font-size: 16px;\n  padding: 0px 10px;\n  cursor: pointer;\n}\n#addCancel > div {\n  border: 1px solid black;\n  border-radius: 3px;\n  font-size: 16px;\n  padding: 0px 10px;\n  background-color: rgb(255, 99, 42);\n  cursor: pointer;\n}\n#addCancel > div:hover {\n  background-color: orangered;\n}\n#toggleTodoForm {\n  border: 1px solid black;\n  border-radius: 8px;\n  padding: 5px 15px;\n  width: 165px;\n  margin: 5px auto 15px auto;\n  cursor: pointer;\n  background-color: limegreen;\n}\n#toggleTodoForm:hover {\n  background-color: rgb(42, 182, 42);\n}\n\n/* view todos */\n\n#todoList {\n  list-style-type: none;\n  margin: 20px auto;\n  width: 400px;\n}\n.todoItem {\n  border: 1px solid black;\n  padding: 10px;\n  border-radius: 2px;\n  margin-bottom: 10px;\n  background-color: khaki;\n}\ninput[type=\"checkbox\"] {\n  transform: scale(2);\n  margin-left: 7px;\n  cursor: pointer;\n}\n#delTodo {\n  background-color: rgb(255, 90, 30);\n  width: fit-content;\n  padding: 0px 10px;\n  border-radius: 2px;\n  float: right;\n  cursor: pointer;\n  transform: translateY(-3px);\n}\n#delTodo:hover {\n  background-color: red;\n}\n\n/* hide */\n\n.hide {\n  display: none !important;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {

"use strict";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== "string") {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/X.png":
/*!*******************!*\
  !*** ./src/X.png ***!
  \*******************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "4c064ada9d2a767e4a28.png";

/***/ }),

/***/ "./src/modules/forms.js":
/*!******************************!*\
  !*** ./src/modules/forms.js ***!
  \******************************/
/***/ (() => {

const proCont = document.querySelector("#proCont");
const todoCont = document.querySelector("#todoCont");

(function () {
  const proForm = document.createElement("form");
  proForm.setAttribute("id", "proForm");

  const proTitle = document.createElement("input");
  proTitle.setAttribute("type", "text");
  proTitle.setAttribute("placeholder", "Project Title");

  const addProBtn = document.createElement("input");
  addProBtn.setAttribute("type", "submit");
  addProBtn.setAttribute("id", "addProBtn");
  addProBtn.value = "";
  const delProBtn = document.createElement("div");
  delProBtn.setAttribute("id", "delProBtn");

  proForm.appendChild(proTitle);
  proForm.appendChild(addProBtn);
  proForm.appendChild(delProBtn);

  proCont.appendChild(proForm);
})();

(function () {
  const openTodoForm = document.createElement("div");
  openTodoForm.setAttribute("id", "toggleTodoForm");
  openTodoForm.textContent = "OPEN TODO FORM";

  openTodoForm.addEventListener("click", (e) => {
    if (openTodoForm.textContent == "OPEN TODO FORM") {
      openTodoForm.textContent = "CLOSE TODO FORM";
      document.querySelector("#todoForm").classList.toggle("hide");
    } else {
      openTodoForm.textContent = "OPEN TODO FORM";
      document.querySelector("#todoForm").classList.toggle("hide");
    }
  });

  todoCont.append(openTodoForm);
})();

(function () {
  const todoForm = document.createElement("form");
  todoForm.setAttribute("id", "todoForm");
  todoForm.classList.toggle("hide");

  const todoTitle = document.createElement("input");
  todoTitle.setAttribute("id", "todoTitle");
  todoTitle.setAttribute("type", "text");
  todoTitle.setAttribute("placeholder", "Todo Title");

  const selectPro = document.createElement("p");
  selectPro.setAttribute("style", "color: red; text-align: center");
  selectPro.classList.add("hide");
  selectPro.setAttribute("id", "selPro");
  selectPro.textContent = "Select a project";

  const todoDesc = document.createElement("textarea");
  todoDesc.setAttribute("id", "todoDesc");
  todoDesc.setAttribute("rows", 5);

  const todoDate = document.createElement("input");
  todoDate.setAttribute("id", "todoDate");
  todoDate.setAttribute("type", "date");

  const todoPrio = `<div id="prio"><label for="high">High<input name="prioGang" id="high" type="radio"/></label>
  <label for="medium">Medium<input name="prioGang" id="medium" type="radio"/></label>
  <label for="low">Low<input name="prioGang" id="low" type="radio"/></label></div>`;

  const addTodoBtn = document.createElement("input");
  addTodoBtn.setAttribute("type", "submit");
  const cancelTodoBtn = document.createElement("div");
  cancelTodoBtn.textContent = "Cancel";
  const addCancel = document.createElement("div");
  addCancel.setAttribute("id", "addCancel");
  addCancel.append(addTodoBtn);
  addCancel.append(cancelTodoBtn);

  todoForm.append(todoTitle);
  todoForm.append(selectPro);
  todoForm.append(todoDesc);
  todoForm.append(todoDate);
  todoForm.innerHTML += todoPrio;
  todoForm.append(addCancel);

  todoCont.append(todoForm);
})();

(function () {
  const todoList = document.createElement("ul");
  todoList.setAttribute("id", "todoList");

  todoCont.append(todoList);
})();


/***/ }),

/***/ "./src/modules/project.js":
/*!********************************!*\
  !*** ./src/modules/project.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "selectedProject": () => (/* binding */ selectedProject)
/* harmony export */ });
/* harmony import */ var _viewTodos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./viewTodos */ "./src/modules/viewTodos.js");


let projects = [];
if (JSON.parse(localStorage.getItem("projects")) != null)
  projects = JSON.parse(localStorage.getItem("projects"));
let selectedProject;
if (localStorage.getItem("selectedProject") != null)
  selectedProject = JSON.parse(localStorage.getItem("selectedProject"));
const proForm = document.querySelector("#proForm");
const proList = document.createElement("ul");
proList.setAttribute("id", "proList");
document.querySelector("#proCont").appendChild(proList);

function proItemFunc(proVal) {
  let proItem = document.createElement("li");
  const delProItemBtn = document.createElement("span");
  delProItemBtn.setAttribute("id", "delProItemBtn");

  proItem.setAttribute("id", "proItem");
  proItem.textContent = proVal;
  proItem.append(delProItemBtn);

  proList.appendChild(proItem);
}

if (projects != null)
  (function () {
    projects.forEach((project) => {
      proItemFunc(project);
    });
  })();

if (selectedProject != null) {
  (function () {
    document.querySelectorAll("#proItem").forEach((item) => {
      if (item.textContent == selectedProject)
        item.style.backgroundColor = "gold";
    });
  })();
}

(function () {
  proForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let project = document.querySelector("#proForm > input[type=text]");
    const reg = /^[\w\s]{2,20}$/;

    if (
      projects == null ||
      projects.includes(project.value) ||
      !reg.test(project.value)
    ) {
      project.style.border = "2px solid red";
      project.style.outline = "red";
    }

    if (projects != null) {
      if (reg.test(project.value) && !projects.includes(project.value)) {
        proItemFunc(project.value);

        projects.push(project.value);
        localStorage.setItem("projects", JSON.stringify(projects));

        project.style.border = "none";

        proForm.reset();
      }
    } else if (reg.test(project.value)) {
      proItemFunc(project.value);

      projects.push(project.value);
      localStorage.setItem("projects", JSON.stringify(projects));

      project.style.border = "none";

      proForm.reset();
    }
  });
})();

(function () {
  proList.addEventListener("click", (e) => {
    if (e.target.parentElement.getAttribute("id") == "proItem") {
      e.target.parentElement.remove();

      let todos = JSON.parse(localStorage.getItem("todos"));
      todos = todos.filter((todo) => {
        todo == e.target.parentElement.textContent;
      });
      (0,_viewTodos__WEBPACK_IMPORTED_MODULE_0__.viewTodoFunc)(selectedProject);
      localStorage.setItem("todos", JSON.stringify(todos));
      projects = projects.filter((item) => {
        if (item != e.target.parentElement.textContent) return item;
      });
      localStorage.setItem("projects", JSON.stringify(projects));

      if (e.target.parentElement.textContent == selectedProject) {
        selectedProject = null;
        localStorage.setItem(
          "selectedProject",
          JSON.stringify(selectedProject)
        );
      }
    }
  });
})();

(function () {
  proList.addEventListener("click", (e) => {
    if (
      e.target.getAttribute("id") == "proItem" &&
      e.target.textContent == selectedProject
    ) {
      document.querySelectorAll("#proItem").forEach((item) => {
        item.style.backgroundColor = "whitesmoke";
      });
      selectedProject = null;
      localStorage.setItem("selectedProject", JSON.stringify(selectedProject));
    } else if (e.target.getAttribute("id") == "proItem") {
      document.querySelectorAll("#proItem").forEach((item) => {
        item.style.backgroundColor = "whitesmoke";
      });
      e.target.style.backgroundColor = "gold";
      selectedProject = e.target.textContent;
      (0,_viewTodos__WEBPACK_IMPORTED_MODULE_0__.viewTodoFunc)(selectedProject);
      localStorage.setItem("selectedProject", JSON.stringify(selectedProject));
    }
    if (selectedProject == null) (0,_viewTodos__WEBPACK_IMPORTED_MODULE_0__.viewTodoFunc)(selectedProject);
  });
})();

(function () {
  document.querySelector("#delProBtn").addEventListener("click", () => {
    proForm.reset();
  });
})();




/***/ }),

/***/ "./src/modules/todo.js":
/*!*****************************!*\
  !*** ./src/modules/todo.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/modules/project.js");
/* harmony import */ var _viewTodos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./viewTodos */ "./src/modules/viewTodos.js");



let todos =
  JSON.parse(localStorage.getItem("todos")) == null
    ? []
    : JSON.parse(localStorage.getItem("todos"));

(0,_viewTodos__WEBPACK_IMPORTED_MODULE_1__.viewTodoFunc)(_project__WEBPACK_IMPORTED_MODULE_0__.selectedProject);

(function () {
  let todoTitle = document.querySelector("#todoTitle");
  let todoDesc = document.querySelector("#todoDesc");
  let todoDate = document.querySelector("#todoDate");

  document.querySelector("#todoForm").addEventListener("submit", (e) => {
    e.preventDefault();

    let todoPrio =
      document.querySelector('input[name="prioGang"]:checked') == null
        ? null
        : document.querySelector('input[name="prioGang"]:checked').id;

    if (
      _project__WEBPACK_IMPORTED_MODULE_0__.selectedProject != null &&
      !document.querySelector("#selPro").classList.contains("hide")
    )
      document.querySelector("#selPro").classList.add("hide");
    if (_project__WEBPACK_IMPORTED_MODULE_0__.selectedProject == null)
      document.querySelector("#selPro").classList.remove("hide");
    else if (
      todoTitle.value.length > 42 == true ||
      todoTitle.value.length < 1 == true
    ) {
      document.querySelector("#selPro").classList.add("hide");
      todoTitle.style.border = "2px solid red";
    } else if (_project__WEBPACK_IMPORTED_MODULE_0__.selectedProject != "null") {
      document.querySelector("#selPro").classList.add("hide");
      todoTitle.style.border = "1px solid rgb(118, 118, 118)";

      todos.push({
        title: todoTitle.value,
        desc: todoDesc.value == "" ? null : todoDesc.value,
        date: todoDate.value == "" ? null : todoDate.value,
        prio: todoPrio,
        project: _project__WEBPACK_IMPORTED_MODULE_0__.selectedProject,
        done: false,
        id: Math.random() + todoTitle.value + _project__WEBPACK_IMPORTED_MODULE_0__.selectedProject,
      });

      localStorage.setItem("todos", JSON.stringify(todos));

      (0,_viewTodos__WEBPACK_IMPORTED_MODULE_1__.viewTodoFunc)(_project__WEBPACK_IMPORTED_MODULE_0__.selectedProject);

      document.querySelector("#todoForm").reset();
    }
  });
})();

let todoList = document.querySelector("#todoList");

(function () {
  todoList.addEventListener("click", (e) => {
    if (e.target.id == "delTodo") {
      todos = todos.filter((todo) => todo.id != e.target.parentElement.id);

      localStorage.setItem("todos", JSON.stringify(todos));

      (0,_viewTodos__WEBPACK_IMPORTED_MODULE_1__.viewTodoFunc)(_project__WEBPACK_IMPORTED_MODULE_0__.selectedProject);
    }
  });
})();

(function () {
  todoList.addEventListener("click", (e) => {
    if (e.target.id == "done") {
      console.log(e.target.parentElement.id);
      todos = todos.filter((todo) => {
        if (todo.done == false && todo.id == e.target.parentElement.id) {
          todo.done = true;
          return todo;
        } else if (todo.done == true && todo.id == e.target.parentElement.id) {
          todo.done = false;
          return todo;
        } else return todo;
      });

      localStorage.setItem("todos", JSON.stringify(todos));
    }
  });
})();


/***/ }),

/***/ "./src/modules/viewTodos.js":
/*!**********************************!*\
  !*** ./src/modules/viewTodos.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "viewTodoFunc": () => (/* binding */ viewTodoFunc)
/* harmony export */ });
let todoList = document.querySelector("#todoList");

const viewTodoFunc = function (pro) {
  let todos = JSON.parse(localStorage.getItem("todos"));
  todoList.innerHTML = "";

  if (todos != null)
    todos.forEach((todo) => {
      let item = document.createElement("li");
      item.classList.add("todoItem");

      let title = document.createElement("h2");
      let desc = document.createElement("p");
      let date = document.createElement("p");
      let prio = document.createElement("p");
      let done = document.createElement("input");
      done.setAttribute("type", "checkbox");
      done.setAttribute("id", "done");
      let del = document.createElement("div");
      del.textContent = "Remove";
      del.setAttribute("id", "delTodo");

      if (todo.project == pro) {
        title.textContent = todo.title;
        desc.textContent = "Description: " + todo.desc;
        date.textContent = "Date: " + todo.date;
        prio.textContent = "Priority: " + todo.prio;
        done.checked = todo.done;

        item.append(title);
        if (todo.desc) item.append(desc);
        if (todo.date) item.append(date);
        if (todo.prio) item.append(prio);
        item.append(done);
        item.append(del);
        item.id = todo.id;

        todoList.append(item);
      }
    });
};




/***/ }),

/***/ "./src/success-green-check-mark.png":
/*!******************************************!*\
  !*** ./src/success-green-check-mark.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "8c630c1fe673969438e3.png";

/***/ }),

/***/ "./src/todo.png":
/*!**********************!*\
  !*** ./src/todo.png ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "5dbda89e7c79e635e4b0.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _modules_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/forms */ "./src/modules/forms.js");
/* harmony import */ var _modules_forms__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_forms__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modules_todo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/todo */ "./src/modules/todo.js");
/* harmony import */ var _modules_project__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/project */ "./src/modules/project.js");





})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL2Zvcm1zLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvdG9kby5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy92aWV3VG9kb3MuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNzSDtBQUM3QjtBQUNPO0FBQ3pDO0FBQ0g7QUFDdUI7QUFDM0UsOEJBQThCLG1GQUEyQixDQUFDLHdHQUFxQztBQUMvRixtSEFBbUg7QUFDbkgseUNBQXlDLHNGQUErQixDQUFDLHNDQUE2QjtBQUN0Ryx5Q0FBeUMsc0ZBQStCLENBQUMsbUNBQTZCO0FBQ3RHLHlDQUF5QyxzRkFBK0IsQ0FBQywwREFBNkI7QUFDdEc7QUFDQSwyRkFBMkYsY0FBYyxlQUFlLDJCQUEyQiwyQkFBMkIsR0FBRywrQkFBK0IscUNBQXFDLGlCQUFpQixrQkFBa0IsbUNBQW1DLHdCQUF3QixzQkFBc0IsR0FBRyxTQUFTLDBFQUEwRSw2QkFBNkIsaUJBQWlCLGdCQUFnQixHQUFHLFNBQVMsc0JBQXNCLG9CQUFvQixHQUFHLG1DQUFtQywrQkFBK0Isa0JBQWtCLHNDQUFzQyxHQUFHLHlDQUF5QyxnQ0FBZ0Msa0JBQWtCLEdBQUcsWUFBWSxrQkFBa0Isd0JBQXdCLHdCQUF3QixxQkFBcUIsR0FBRyxtQ0FBbUMsb0JBQW9CLGlCQUFpQixzQkFBc0IsdUJBQXVCLGlCQUFpQixHQUFHLDJCQUEyQiwwRUFBMEUsNkJBQTZCLGlCQUFpQixnQkFBZ0Isb0JBQW9CLEdBQUcsY0FBYywwRUFBMEUsNkJBQTZCLHFCQUFxQixpQkFBaUIsR0FBRyx1Q0FBdUMsMkJBQTJCLEdBQUcsWUFBWSxxQkFBcUIsR0FBRyxZQUFZLG9CQUFvQiwyQkFBMkIsdUJBQXVCLHdCQUF3QixxQkFBcUIsaUNBQWlDLGlCQUFpQixHQUFHLGtCQUFrQiw2QkFBNkIsb0JBQW9CLEdBQUcsa0JBQWtCLDBFQUEwRSw2QkFBNkIsaUJBQWlCLGdCQUFn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O0FBQ0E7QUFDQSxNQUFNLHdEQUFZO0FBQ2xCO0FBQ0E7QUFDQSxpQ0FBaUMsd0RBQVk7QUFDN0MsR0FBRztBQUNILENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7O0FBRTBCOzs7Ozs7Ozs7Ozs7Ozs7QUMxSWlCO0FBQ0Q7O0FBRTNDO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdEQUFZLENBQUMscURBQWU7O0FBRTVCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNLHFEQUFlO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBLFFBQVEscURBQWU7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLFVBQVUscURBQWU7QUFDOUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLHFEQUFlO0FBQ2hDO0FBQ0EsOENBQThDLHFEQUFlO0FBQzdELE9BQU87O0FBRVA7O0FBRUEsTUFBTSx3REFBWSxDQUFDLHFEQUFlOztBQUVsQztBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7O0FBRUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsTUFBTSx3REFBWSxDQUFDLHFEQUFlO0FBQ2xDO0FBQ0EsR0FBRztBQUNILENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87O0FBRVA7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDMUZEOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFd0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDMUN4QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsZ0NBQWdDLFlBQVk7V0FDNUM7V0FDQSxFOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEVBQUU7V0FDRjtXQUNBO1dBQ0EsQ0FBQyxJOzs7OztXQ1BELHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGtDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZxQjtBQUNJO0FBQ0Q7QUFDRyIsImZpbGUiOiJpbmRleC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gZnJvbSBcIi4vdG9kby5wbmdcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyBmcm9tIFwiLi9YLnBuZ1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fIGZyb20gXCIuL3N1Y2Nlc3MtZ3JlZW4tY2hlY2stbWFyay5wbmdcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU11a3RhJmRpc3BsYXk9c3dhcCk7XCJdKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qIEdsb2JhbCBzdHlsZXMgKi9cXG5cXG4qLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTXVrdGFcXFwiO1xcbn1cXG5cXG4vKiB0aXRsZSAqL1xcblxcbiNwYWdlVGl0bGUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhbmNoZWRhbG1vbmQ7XFxuICBoZWlnaHQ6IDgwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDBweCAxNXB4O1xcbn1cXG4jbG9nbyB7XFxuICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpIG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXG4gIGhlaWdodDogNTBweDtcXG4gIHdpZHRoOiA1MHB4O1xcbn1cXG4jdXNlciB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLyogY29udGFpbmVyICovXFxuXFxuI2NvbnRhaW5lciB7XFxuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA4MHB4KTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMzMHB4IGF1dG87XFxufVxcblxcbi8qIHByb2plY3QgY29udGFpbmVyICovXFxuXFxuI3Byb0NvbnQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlO1xcbiAgcGFkZGluZzogMTBweDtcXG59XFxuI3Byb0Zvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG59XFxuI3Byb0Zvcm0gPiBpbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl0ge1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgd2lkdGg6IDIzMHB4O1xcbiAgcGFkZGluZzogM3B4IDEwcHg7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcbiNhZGRQcm9CdG4sXFxuI2RlbFByb0J0biB7XFxuICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpIG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXG4gIGhlaWdodDogMzNweDtcXG4gIHdpZHRoOiA0MnB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4jYWRkUHJvQnRuIHtcXG4gIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gKyBcIikgbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcbiAgbWFyZ2luLWxlZnQ6IDVweDtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuI2FkZFByb0J0bjpob3ZlcixcXG4jZGVsUHJvQnRuOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XFxufVxcbiNwcm9MaXN0IHtcXG4gIG1hcmdpbi10b3A6IDI1cHg7XFxufVxcbiNwcm9JdGVtIHtcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XFxuICBtYXJnaW4tYm90dG9tOiA1cHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgcGFkZGluZzogMHB4IDhweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XFxuICB3aWR0aDogMjcwcHg7XFxufVxcbiNwcm9JdGVtOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuI2RlbFByb0l0ZW1CdG4ge1xcbiAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKSBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxuICBoZWlnaHQ6IDQwcHg7XFxuICB3aWR0aDogNDBweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGxlZnQ6IDUwcHg7XFxuICBmbG9hdDogcmlnaHQ7XFxufVxcbiNkZWxQcm9JdGVtQnRuOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XFxufVxcbi8qIHRvZG8gY29udGFpbmVyICovXFxuXFxuI3RvZG9Db250IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig2NSwgMTgwLCAyMjUpO1xcbiAgcGFkZGluZzogMTBweDtcXG59XFxuI3RvZG9Gb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgd2lkdGg6IDMzMHB4O1xcbiAgZ2FwOiA4cHg7XFxuICBtYXJnaW46IGF1dG87XFxufVxcbmxhYmVsLFxcbmlucHV0W3R5cGU9XFxcInJhZGlvXFxcIl0ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XFxufVxcbiN0b2RvRm9ybSA+IGlucHV0LFxcbnRleHRhcmVhIHtcXG4gIHBhZGRpbmc6IDNweDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcbiNwcmlvIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuI2FkZENhbmNlbCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAzcHg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuI2FkZENhbmNlbCA+IGlucHV0IHtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIHBhZGRpbmc6IDBweCAxMHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4jYWRkQ2FuY2VsID4gZGl2IHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgcGFkZGluZzogMHB4IDEwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCA5OSwgNDIpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4jYWRkQ2FuY2VsID4gZGl2OmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZXJlZDtcXG59XFxuI3RvZ2dsZVRvZG9Gb3JtIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgcGFkZGluZzogNXB4IDE1cHg7XFxuICB3aWR0aDogMTY1cHg7XFxuICBtYXJnaW46IDVweCBhdXRvIDE1cHggYXV0bztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IGxpbWVncmVlbjtcXG59XFxuI3RvZ2dsZVRvZG9Gb3JtOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig0MiwgMTgyLCA0Mik7XFxufVxcblxcbi8qIHZpZXcgdG9kb3MgKi9cXG5cXG4jdG9kb0xpc3Qge1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgbWFyZ2luOiAyMHB4IGF1dG87XFxuICB3aWR0aDogNDAwcHg7XFxufVxcbi50b2RvSXRlbSB7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBib3JkZXItcmFkaXVzOiAycHg7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjoga2hha2k7XFxufVxcbmlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl0ge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgyKTtcXG4gIG1hcmdpbi1sZWZ0OiA3cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbiNkZWxUb2RvIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDkwLCAzMCk7XFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICBwYWRkaW5nOiAwcHggMTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gIGZsb2F0OiByaWdodDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtM3B4KTtcXG59XFxuI2RlbFRvZG86aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG5cXG4vKiBoaWRlICovXFxuXFxuLmhpZGUge1xcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBLGtCQUFrQjs7QUFFbEI7OztFQUdFLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysc0JBQXNCO0VBQ3RCLG9CQUFvQjtBQUN0Qjs7QUFFQSxVQUFVOztBQUVWO0VBQ0UsZ0NBQWdDO0VBQ2hDLFlBQVk7RUFDWixhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLDZEQUF1QztFQUN2Qyx3QkFBd0I7RUFDeEIsWUFBWTtFQUNaLFdBQVc7QUFDYjtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLGVBQWU7QUFDakI7O0FBRUEsY0FBYzs7QUFFZDtFQUNFLDBCQUEwQjtFQUMxQixhQUFhO0VBQ2IsaUNBQWlDO0FBQ25DOztBQUVBLHNCQUFzQjs7QUFFdEI7RUFDRSwyQkFBMkI7RUFDM0IsYUFBYTtBQUNmO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGVBQWU7RUFDZixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixZQUFZO0FBQ2Q7QUFDQTs7RUFFRSw2REFBdUM7RUFDdkMsd0JBQXdCO0VBQ3hCLFlBQVk7RUFDWixXQUFXO0VBQ1gsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsNkRBQTJEO0VBQzNELHdCQUF3QjtFQUN4QixnQkFBZ0I7RUFDaEIsWUFBWTtBQUNkO0FBQ0E7O0VBRUUsc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGVBQWU7RUFDZixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsNEJBQTRCO0VBQzVCLFlBQVk7QUFDZDtBQUNBO0VBQ0Usd0JBQXdCO0VBQ3hCLGVBQWU7QUFDakI7QUFDQTtFQUNFLDZEQUF1QztFQUN2Qyx3QkFBd0I7RUFDeEIsWUFBWTtFQUNaLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFlBQVk7QUFDZDtBQUNBO0VBQ0Usc0JBQXNCO0FBQ3hCO0FBQ0EsbUJBQW1COztBQUVuQjtFQUNFLG1DQUFtQztFQUNuQyxhQUFhO0FBQ2Y7QUFDQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLFFBQVE7RUFDUixZQUFZO0FBQ2Q7QUFDQTs7RUFFRSxlQUFlO0VBQ2YsZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjtBQUNBOztFQUVFLFlBQVk7RUFDWixlQUFlO0VBQ2YsYUFBYTtBQUNmO0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGFBQWE7RUFDYixRQUFRO0VBQ1IsdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGVBQWU7QUFDakI7QUFDQTtFQUNFLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixrQ0FBa0M7RUFDbEMsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsMkJBQTJCO0FBQzdCO0FBQ0E7RUFDRSx1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osMEJBQTBCO0VBQzFCLGVBQWU7RUFDZiwyQkFBMkI7QUFDN0I7QUFDQTtFQUNFLGtDQUFrQztBQUNwQzs7QUFFQSxlQUFlOztBQUVmO0VBQ0UscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQixZQUFZO0FBQ2Q7QUFDQTtFQUNFLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQix1QkFBdUI7QUFDekI7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQjtBQUNBO0VBQ0Usa0NBQWtDO0VBQ2xDLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixlQUFlO0VBQ2YsMkJBQTJCO0FBQzdCO0FBQ0E7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUEsU0FBUzs7QUFFVDtFQUNFLHdCQUF3QjtBQUMxQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1NdWt0YSZkaXNwbGF5PXN3YXBcXFwiKTtcXG5cXG4vKiBHbG9iYWwgc3R5bGVzICovXFxuXFxuKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBmb250LWZhbWlseTogXFxcIk11a3RhXFxcIjtcXG59XFxuXFxuLyogdGl0bGUgKi9cXG5cXG4jcGFnZVRpdGxlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYW5jaGVkYWxtb25kO1xcbiAgaGVpZ2h0OiA4MHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAwcHggMTVweDtcXG59XFxuI2xvZ28ge1xcbiAgYmFja2dyb3VuZDogdXJsKFxcXCIuL3RvZG8ucG5nXFxcIikgbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgd2lkdGg6IDUwcHg7XFxufVxcbiN1c2VyIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4vKiBjb250YWluZXIgKi9cXG5cXG4jY29udGFpbmVyIHtcXG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDgwcHgpO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzMwcHggYXV0bztcXG59XFxuXFxuLyogcHJvamVjdCBjb250YWluZXIgKi9cXG5cXG4jcHJvQ29udCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGJsdWU7XFxuICBwYWRkaW5nOiAxMHB4O1xcbn1cXG4jcHJvRm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbn1cXG4jcHJvRm9ybSA+IGlucHV0W3R5cGU9XFxcInRleHRcXFwiXSB7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICB3aWR0aDogMjMwcHg7XFxuICBwYWRkaW5nOiAzcHggMTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuI2FkZFByb0J0bixcXG4jZGVsUHJvQnRuIHtcXG4gIGJhY2tncm91bmQ6IHVybChcXFwiL3NyYy9YLnBuZ1xcXCIpIG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXG4gIGhlaWdodDogMzNweDtcXG4gIHdpZHRoOiA0MnB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4jYWRkUHJvQnRuIHtcXG4gIGJhY2tncm91bmQ6IHVybChcXFwiLi9zdWNjZXNzLWdyZWVuLWNoZWNrLW1hcmsucG5nXFxcIikgbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcbiAgbWFyZ2luLWxlZnQ6IDVweDtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuI2FkZFByb0J0bjpob3ZlcixcXG4jZGVsUHJvQnRuOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XFxufVxcbiNwcm9MaXN0IHtcXG4gIG1hcmdpbi10b3A6IDI1cHg7XFxufVxcbiNwcm9JdGVtIHtcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XFxuICBtYXJnaW4tYm90dG9tOiA1cHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgcGFkZGluZzogMHB4IDhweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XFxuICB3aWR0aDogMjcwcHg7XFxufVxcbiNwcm9JdGVtOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuI2RlbFByb0l0ZW1CdG4ge1xcbiAgYmFja2dyb3VuZDogdXJsKFxcXCIvc3JjL1gucG5nXFxcIikgbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgd2lkdGg6IDQwcHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBsZWZ0OiA1MHB4O1xcbiAgZmxvYXQ6IHJpZ2h0O1xcbn1cXG4jZGVsUHJvSXRlbUJ0bjpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xcbn1cXG4vKiB0b2RvIGNvbnRhaW5lciAqL1xcblxcbiN0b2RvQ29udCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNjUsIDE4MCwgMjI1KTtcXG4gIHBhZGRpbmc6IDEwcHg7XFxufVxcbiN0b2RvRm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHdpZHRoOiAzMzBweDtcXG4gIGdhcDogOHB4O1xcbiAgbWFyZ2luOiBhdXRvO1xcbn1cXG5sYWJlbCxcXG5pbnB1dFt0eXBlPVxcXCJyYWRpb1xcXCJdIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIG1hcmdpbi1yaWdodDogNXB4O1xcbn1cXG4jdG9kb0Zvcm0gPiBpbnB1dCxcXG50ZXh0YXJlYSB7XFxuICBwYWRkaW5nOiAzcHg7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG4jcHJpbyB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbiNhZGRDYW5jZWwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogM3B4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbiNhZGRDYW5jZWwgPiBpbnB1dCB7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBwYWRkaW5nOiAwcHggMTBweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuI2FkZENhbmNlbCA+IGRpdiB7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIHBhZGRpbmc6IDBweCAxMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgOTksIDQyKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuI2FkZENhbmNlbCA+IGRpdjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2VyZWQ7XFxufVxcbiN0b2dnbGVUb2RvRm9ybSB7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIHBhZGRpbmc6IDVweCAxNXB4O1xcbiAgd2lkdGg6IDE2NXB4O1xcbiAgbWFyZ2luOiA1cHggYXV0byAxNXB4IGF1dG87XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaW1lZ3JlZW47XFxufVxcbiN0b2dnbGVUb2RvRm9ybTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDIsIDE4MiwgNDIpO1xcbn1cXG5cXG4vKiB2aWV3IHRvZG9zICovXFxuXFxuI3RvZG9MaXN0IHtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gIG1hcmdpbjogMjBweCBhdXRvO1xcbiAgd2lkdGg6IDQwMHB4O1xcbn1cXG4udG9kb0l0ZW0ge1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGtoYWtpO1xcbn1cXG5pbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMik7XFxuICBtYXJnaW4tbGVmdDogN3B4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4jZGVsVG9kbyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCA5MCwgMzApO1xcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgcGFkZGluZzogMHB4IDEwcHg7XFxuICBib3JkZXItcmFkaXVzOiAycHg7XFxuICBmbG9hdDogcmlnaHQ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTNweCk7XFxufVxcbiNkZWxUb2RvOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuXFxuLyogaGlkZSAqL1xcblxcbi5oaWRlIHtcXG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgeyByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7IHZhciBfaSA9IGFyciAmJiAodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhcnJbU3ltYm9sLml0ZXJhdG9yXSB8fCBhcnJbXCJAQGl0ZXJhdG9yXCJdKTsgaWYgKF9pID09IG51bGwpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfcywgX2U7IHRyeSB7IGZvciAoX2kgPSBfaS5jYWxsKGFycik7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7IH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pIHtcbiAgdmFyIF9pdGVtID0gX3NsaWNlZFRvQXJyYXkoaXRlbSwgNCksXG4gICAgICBjb250ZW50ID0gX2l0ZW1bMV0sXG4gICAgICBjc3NNYXBwaW5nID0gX2l0ZW1bM107XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICBvcHRpb25zID0ge307XG4gIH0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVyc2NvcmUtZGFuZ2xlLCBuby1wYXJhbS1yZWFzc2lnblxuXG5cbiAgdXJsID0gdXJsICYmIHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmw7XG5cbiAgaWYgKHR5cGVvZiB1cmwgIT09IFwic3RyaW5nXCIpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl0vLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJjb25zdCBwcm9Db250ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9Db250XCIpO1xuY29uc3QgdG9kb0NvbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvZG9Db250XCIpO1xuXG4oZnVuY3Rpb24gKCkge1xuICBjb25zdCBwcm9Gb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gIHByb0Zvcm0uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwcm9Gb3JtXCIpO1xuXG4gIGNvbnN0IHByb1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBwcm9UaXRsZS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcbiAgcHJvVGl0bGUuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgXCJQcm9qZWN0IFRpdGxlXCIpO1xuXG4gIGNvbnN0IGFkZFByb0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgYWRkUHJvQnRuLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJzdWJtaXRcIik7XG4gIGFkZFByb0J0bi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImFkZFByb0J0blwiKTtcbiAgYWRkUHJvQnRuLnZhbHVlID0gXCJcIjtcbiAgY29uc3QgZGVsUHJvQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZGVsUHJvQnRuLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZGVsUHJvQnRuXCIpO1xuXG4gIHByb0Zvcm0uYXBwZW5kQ2hpbGQocHJvVGl0bGUpO1xuICBwcm9Gb3JtLmFwcGVuZENoaWxkKGFkZFByb0J0bik7XG4gIHByb0Zvcm0uYXBwZW5kQ2hpbGQoZGVsUHJvQnRuKTtcblxuICBwcm9Db250LmFwcGVuZENoaWxkKHByb0Zvcm0pO1xufSkoKTtcblxuKGZ1bmN0aW9uICgpIHtcbiAgY29uc3Qgb3BlblRvZG9Gb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgb3BlblRvZG9Gb3JtLnNldEF0dHJpYnV0ZShcImlkXCIsIFwidG9nZ2xlVG9kb0Zvcm1cIik7XG4gIG9wZW5Ub2RvRm9ybS50ZXh0Q29udGVudCA9IFwiT1BFTiBUT0RPIEZPUk1cIjtcblxuICBvcGVuVG9kb0Zvcm0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgaWYgKG9wZW5Ub2RvRm9ybS50ZXh0Q29udGVudCA9PSBcIk9QRU4gVE9ETyBGT1JNXCIpIHtcbiAgICAgIG9wZW5Ub2RvRm9ybS50ZXh0Q29udGVudCA9IFwiQ0xPU0UgVE9ETyBGT1JNXCI7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvZG9Gb3JtXCIpLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRlXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBvcGVuVG9kb0Zvcm0udGV4dENvbnRlbnQgPSBcIk9QRU4gVE9ETyBGT1JNXCI7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvZG9Gb3JtXCIpLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRlXCIpO1xuICAgIH1cbiAgfSk7XG5cbiAgdG9kb0NvbnQuYXBwZW5kKG9wZW5Ub2RvRm9ybSk7XG59KSgpO1xuXG4oZnVuY3Rpb24gKCkge1xuICBjb25zdCB0b2RvRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICB0b2RvRm9ybS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRvZG9Gb3JtXCIpO1xuICB0b2RvRm9ybS5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZVwiKTtcblxuICBjb25zdCB0b2RvVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIHRvZG9UaXRsZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRvZG9UaXRsZVwiKTtcbiAgdG9kb1RpdGxlLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuICB0b2RvVGl0bGUuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgXCJUb2RvIFRpdGxlXCIpO1xuXG4gIGNvbnN0IHNlbGVjdFBybyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBzZWxlY3RQcm8uc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJjb2xvcjogcmVkOyB0ZXh0LWFsaWduOiBjZW50ZXJcIik7XG4gIHNlbGVjdFByby5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcbiAgc2VsZWN0UHJvLnNldEF0dHJpYnV0ZShcImlkXCIsIFwic2VsUHJvXCIpO1xuICBzZWxlY3RQcm8udGV4dENvbnRlbnQgPSBcIlNlbGVjdCBhIHByb2plY3RcIjtcblxuICBjb25zdCB0b2RvRGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcbiAgdG9kb0Rlc2Muc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0b2RvRGVzY1wiKTtcbiAgdG9kb0Rlc2Muc2V0QXR0cmlidXRlKFwicm93c1wiLCA1KTtcblxuICBjb25zdCB0b2RvRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgdG9kb0RhdGUuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0b2RvRGF0ZVwiKTtcbiAgdG9kb0RhdGUuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImRhdGVcIik7XG5cbiAgY29uc3QgdG9kb1ByaW8gPSBgPGRpdiBpZD1cInByaW9cIj48bGFiZWwgZm9yPVwiaGlnaFwiPkhpZ2g8aW5wdXQgbmFtZT1cInByaW9HYW5nXCIgaWQ9XCJoaWdoXCIgdHlwZT1cInJhZGlvXCIvPjwvbGFiZWw+XG4gIDxsYWJlbCBmb3I9XCJtZWRpdW1cIj5NZWRpdW08aW5wdXQgbmFtZT1cInByaW9HYW5nXCIgaWQ9XCJtZWRpdW1cIiB0eXBlPVwicmFkaW9cIi8+PC9sYWJlbD5cbiAgPGxhYmVsIGZvcj1cImxvd1wiPkxvdzxpbnB1dCBuYW1lPVwicHJpb0dhbmdcIiBpZD1cImxvd1wiIHR5cGU9XCJyYWRpb1wiLz48L2xhYmVsPjwvZGl2PmA7XG5cbiAgY29uc3QgYWRkVG9kb0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgYWRkVG9kb0J0bi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwic3VibWl0XCIpO1xuICBjb25zdCBjYW5jZWxUb2RvQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY2FuY2VsVG9kb0J0bi50ZXh0Q29udGVudCA9IFwiQ2FuY2VsXCI7XG4gIGNvbnN0IGFkZENhbmNlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGFkZENhbmNlbC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImFkZENhbmNlbFwiKTtcbiAgYWRkQ2FuY2VsLmFwcGVuZChhZGRUb2RvQnRuKTtcbiAgYWRkQ2FuY2VsLmFwcGVuZChjYW5jZWxUb2RvQnRuKTtcblxuICB0b2RvRm9ybS5hcHBlbmQodG9kb1RpdGxlKTtcbiAgdG9kb0Zvcm0uYXBwZW5kKHNlbGVjdFBybyk7XG4gIHRvZG9Gb3JtLmFwcGVuZCh0b2RvRGVzYyk7XG4gIHRvZG9Gb3JtLmFwcGVuZCh0b2RvRGF0ZSk7XG4gIHRvZG9Gb3JtLmlubmVySFRNTCArPSB0b2RvUHJpbztcbiAgdG9kb0Zvcm0uYXBwZW5kKGFkZENhbmNlbCk7XG5cbiAgdG9kb0NvbnQuYXBwZW5kKHRvZG9Gb3JtKTtcbn0pKCk7XG5cbihmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IHRvZG9MaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICB0b2RvTGlzdC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRvZG9MaXN0XCIpO1xuXG4gIHRvZG9Db250LmFwcGVuZCh0b2RvTGlzdCk7XG59KSgpO1xuIiwiaW1wb3J0IHsgdmlld1RvZG9GdW5jIH0gZnJvbSBcIi4vdmlld1RvZG9zXCI7XG5cbmxldCBwcm9qZWN0cyA9IFtdO1xuaWYgKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0c1wiKSkgIT0gbnVsbClcbiAgcHJvamVjdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdHNcIikpO1xubGV0IHNlbGVjdGVkUHJvamVjdDtcbmlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInNlbGVjdGVkUHJvamVjdFwiKSAhPSBudWxsKVxuICBzZWxlY3RlZFByb2plY3QgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwic2VsZWN0ZWRQcm9qZWN0XCIpKTtcbmNvbnN0IHByb0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb0Zvcm1cIik7XG5jb25zdCBwcm9MaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xucHJvTGlzdC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInByb0xpc3RcIik7XG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb0NvbnRcIikuYXBwZW5kQ2hpbGQocHJvTGlzdCk7XG5cbmZ1bmN0aW9uIHByb0l0ZW1GdW5jKHByb1ZhbCkge1xuICBsZXQgcHJvSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgY29uc3QgZGVsUHJvSXRlbUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBkZWxQcm9JdGVtQnRuLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZGVsUHJvSXRlbUJ0blwiKTtcblxuICBwcm9JdGVtLnNldEF0dHJpYnV0ZShcImlkXCIsIFwicHJvSXRlbVwiKTtcbiAgcHJvSXRlbS50ZXh0Q29udGVudCA9IHByb1ZhbDtcbiAgcHJvSXRlbS5hcHBlbmQoZGVsUHJvSXRlbUJ0bik7XG5cbiAgcHJvTGlzdC5hcHBlbmRDaGlsZChwcm9JdGVtKTtcbn1cblxuaWYgKHByb2plY3RzICE9IG51bGwpXG4gIChmdW5jdGlvbiAoKSB7XG4gICAgcHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgICAgcHJvSXRlbUZ1bmMocHJvamVjdCk7XG4gICAgfSk7XG4gIH0pKCk7XG5cbmlmIChzZWxlY3RlZFByb2plY3QgIT0gbnVsbCkge1xuICAoZnVuY3Rpb24gKCkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIjcHJvSXRlbVwiKS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICBpZiAoaXRlbS50ZXh0Q29udGVudCA9PSBzZWxlY3RlZFByb2plY3QpXG4gICAgICAgIGl0ZW0uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJnb2xkXCI7XG4gICAgfSk7XG4gIH0pKCk7XG59XG5cbihmdW5jdGlvbiAoKSB7XG4gIHByb0Zvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGxldCBwcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9Gb3JtID4gaW5wdXRbdHlwZT10ZXh0XVwiKTtcbiAgICBjb25zdCByZWcgPSAvXltcXHdcXHNdezIsMjB9JC87XG5cbiAgICBpZiAoXG4gICAgICBwcm9qZWN0cyA9PSBudWxsIHx8XG4gICAgICBwcm9qZWN0cy5pbmNsdWRlcyhwcm9qZWN0LnZhbHVlKSB8fFxuICAgICAgIXJlZy50ZXN0KHByb2plY3QudmFsdWUpXG4gICAgKSB7XG4gICAgICBwcm9qZWN0LnN0eWxlLmJvcmRlciA9IFwiMnB4IHNvbGlkIHJlZFwiO1xuICAgICAgcHJvamVjdC5zdHlsZS5vdXRsaW5lID0gXCJyZWRcIjtcbiAgICB9XG5cbiAgICBpZiAocHJvamVjdHMgIT0gbnVsbCkge1xuICAgICAgaWYgKHJlZy50ZXN0KHByb2plY3QudmFsdWUpICYmICFwcm9qZWN0cy5pbmNsdWRlcyhwcm9qZWN0LnZhbHVlKSkge1xuICAgICAgICBwcm9JdGVtRnVuYyhwcm9qZWN0LnZhbHVlKTtcblxuICAgICAgICBwcm9qZWN0cy5wdXNoKHByb2plY3QudmFsdWUpO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3RzXCIsIEpTT04uc3RyaW5naWZ5KHByb2plY3RzKSk7XG5cbiAgICAgICAgcHJvamVjdC5zdHlsZS5ib3JkZXIgPSBcIm5vbmVcIjtcblxuICAgICAgICBwcm9Gb3JtLnJlc2V0KCk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChyZWcudGVzdChwcm9qZWN0LnZhbHVlKSkge1xuICAgICAgcHJvSXRlbUZ1bmMocHJvamVjdC52YWx1ZSk7XG5cbiAgICAgIHByb2plY3RzLnB1c2gocHJvamVjdC52YWx1ZSk7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3RzXCIsIEpTT04uc3RyaW5naWZ5KHByb2plY3RzKSk7XG5cbiAgICAgIHByb2plY3Quc3R5bGUuYm9yZGVyID0gXCJub25lXCI7XG5cbiAgICAgIHByb0Zvcm0ucmVzZXQoKTtcbiAgICB9XG4gIH0pO1xufSkoKTtcblxuKGZ1bmN0aW9uICgpIHtcbiAgcHJvTGlzdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBpZiAoZS50YXJnZXQucGFyZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJpZFwiKSA9PSBcInByb0l0ZW1cIikge1xuICAgICAgZS50YXJnZXQucGFyZW50RWxlbWVudC5yZW1vdmUoKTtcblxuICAgICAgbGV0IHRvZG9zID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRvZG9zXCIpKTtcbiAgICAgIHRvZG9zID0gdG9kb3MuZmlsdGVyKCh0b2RvKSA9PiB7XG4gICAgICAgIHRvZG8gPT0gZS50YXJnZXQucGFyZW50RWxlbWVudC50ZXh0Q29udGVudDtcbiAgICAgIH0pO1xuICAgICAgdmlld1RvZG9GdW5jKHNlbGVjdGVkUHJvamVjdCk7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRvZG9zXCIsIEpTT04uc3RyaW5naWZ5KHRvZG9zKSk7XG4gICAgICBwcm9qZWN0cyA9IHByb2plY3RzLmZpbHRlcigoaXRlbSkgPT4ge1xuICAgICAgICBpZiAoaXRlbSAhPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnRleHRDb250ZW50KSByZXR1cm4gaXRlbTtcbiAgICAgIH0pO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0c1wiLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0cykpO1xuXG4gICAgICBpZiAoZS50YXJnZXQucGFyZW50RWxlbWVudC50ZXh0Q29udGVudCA9PSBzZWxlY3RlZFByb2plY3QpIHtcbiAgICAgICAgc2VsZWN0ZWRQcm9qZWN0ID0gbnVsbDtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXG4gICAgICAgICAgXCJzZWxlY3RlZFByb2plY3RcIixcbiAgICAgICAgICBKU09OLnN0cmluZ2lmeShzZWxlY3RlZFByb2plY3QpXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn0pKCk7XG5cbihmdW5jdGlvbiAoKSB7XG4gIHByb0xpc3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgaWYgKFxuICAgICAgZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwiaWRcIikgPT0gXCJwcm9JdGVtXCIgJiZcbiAgICAgIGUudGFyZ2V0LnRleHRDb250ZW50ID09IHNlbGVjdGVkUHJvamVjdFxuICAgICkge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIiNwcm9JdGVtXCIpLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgaXRlbS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIndoaXRlc21va2VcIjtcbiAgICAgIH0pO1xuICAgICAgc2VsZWN0ZWRQcm9qZWN0ID0gbnVsbDtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwic2VsZWN0ZWRQcm9qZWN0XCIsIEpTT04uc3RyaW5naWZ5KHNlbGVjdGVkUHJvamVjdCkpO1xuICAgIH0gZWxzZSBpZiAoZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwiaWRcIikgPT0gXCJwcm9JdGVtXCIpIHtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIjcHJvSXRlbVwiKS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgIGl0ZW0uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ3aGl0ZXNtb2tlXCI7XG4gICAgICB9KTtcbiAgICAgIGUudGFyZ2V0LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiZ29sZFwiO1xuICAgICAgc2VsZWN0ZWRQcm9qZWN0ID0gZS50YXJnZXQudGV4dENvbnRlbnQ7XG4gICAgICB2aWV3VG9kb0Z1bmMoc2VsZWN0ZWRQcm9qZWN0KTtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwic2VsZWN0ZWRQcm9qZWN0XCIsIEpTT04uc3RyaW5naWZ5KHNlbGVjdGVkUHJvamVjdCkpO1xuICAgIH1cbiAgICBpZiAoc2VsZWN0ZWRQcm9qZWN0ID09IG51bGwpIHZpZXdUb2RvRnVuYyhzZWxlY3RlZFByb2plY3QpO1xuICB9KTtcbn0pKCk7XG5cbihmdW5jdGlvbiAoKSB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGVsUHJvQnRuXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgcHJvRm9ybS5yZXNldCgpO1xuICB9KTtcbn0pKCk7XG5cbmV4cG9ydCB7IHNlbGVjdGVkUHJvamVjdCB9O1xuIiwiaW1wb3J0IHsgc2VsZWN0ZWRQcm9qZWN0IH0gZnJvbSBcIi4vcHJvamVjdFwiO1xuaW1wb3J0IHsgdmlld1RvZG9GdW5jIH0gZnJvbSBcIi4vdmlld1RvZG9zXCI7XG5cbmxldCB0b2RvcyA9XG4gIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2Rvc1wiKSkgPT0gbnVsbFxuICAgID8gW11cbiAgICA6IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2Rvc1wiKSk7XG5cbnZpZXdUb2RvRnVuYyhzZWxlY3RlZFByb2plY3QpO1xuXG4oZnVuY3Rpb24gKCkge1xuICBsZXQgdG9kb1RpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b2RvVGl0bGVcIik7XG4gIGxldCB0b2RvRGVzYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9kb0Rlc2NcIik7XG4gIGxldCB0b2RvRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9kb0RhdGVcIik7XG5cbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b2RvRm9ybVwiKS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgbGV0IHRvZG9QcmlvID1cbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJwcmlvR2FuZ1wiXTpjaGVja2VkJykgPT0gbnVsbFxuICAgICAgICA/IG51bGxcbiAgICAgICAgOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwicHJpb0dhbmdcIl06Y2hlY2tlZCcpLmlkO1xuXG4gICAgaWYgKFxuICAgICAgc2VsZWN0ZWRQcm9qZWN0ICE9IG51bGwgJiZcbiAgICAgICFkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NlbFByb1wiKS5jbGFzc0xpc3QuY29udGFpbnMoXCJoaWRlXCIpXG4gICAgKVxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzZWxQcm9cIikuY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XG4gICAgaWYgKHNlbGVjdGVkUHJvamVjdCA9PSBudWxsKVxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzZWxQcm9cIikuY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIik7XG4gICAgZWxzZSBpZiAoXG4gICAgICB0b2RvVGl0bGUudmFsdWUubGVuZ3RoID4gNDIgPT0gdHJ1ZSB8fFxuICAgICAgdG9kb1RpdGxlLnZhbHVlLmxlbmd0aCA8IDEgPT0gdHJ1ZVxuICAgICkge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzZWxQcm9cIikuY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XG4gICAgICB0b2RvVGl0bGUuc3R5bGUuYm9yZGVyID0gXCIycHggc29saWQgcmVkXCI7XG4gICAgfSBlbHNlIGlmIChzZWxlY3RlZFByb2plY3QgIT0gXCJudWxsXCIpIHtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2VsUHJvXCIpLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xuICAgICAgdG9kb1RpdGxlLnN0eWxlLmJvcmRlciA9IFwiMXB4IHNvbGlkIHJnYigxMTgsIDExOCwgMTE4KVwiO1xuXG4gICAgICB0b2Rvcy5wdXNoKHtcbiAgICAgICAgdGl0bGU6IHRvZG9UaXRsZS52YWx1ZSxcbiAgICAgICAgZGVzYzogdG9kb0Rlc2MudmFsdWUgPT0gXCJcIiA/IG51bGwgOiB0b2RvRGVzYy52YWx1ZSxcbiAgICAgICAgZGF0ZTogdG9kb0RhdGUudmFsdWUgPT0gXCJcIiA/IG51bGwgOiB0b2RvRGF0ZS52YWx1ZSxcbiAgICAgICAgcHJpbzogdG9kb1ByaW8sXG4gICAgICAgIHByb2plY3Q6IHNlbGVjdGVkUHJvamVjdCxcbiAgICAgICAgZG9uZTogZmFsc2UsXG4gICAgICAgIGlkOiBNYXRoLnJhbmRvbSgpICsgdG9kb1RpdGxlLnZhbHVlICsgc2VsZWN0ZWRQcm9qZWN0LFxuICAgICAgfSk7XG5cbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidG9kb3NcIiwgSlNPTi5zdHJpbmdpZnkodG9kb3MpKTtcblxuICAgICAgdmlld1RvZG9GdW5jKHNlbGVjdGVkUHJvamVjdCk7XG5cbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9kb0Zvcm1cIikucmVzZXQoKTtcbiAgICB9XG4gIH0pO1xufSkoKTtcblxubGV0IHRvZG9MaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b2RvTGlzdFwiKTtcblxuKGZ1bmN0aW9uICgpIHtcbiAgdG9kb0xpc3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgaWYgKGUudGFyZ2V0LmlkID09IFwiZGVsVG9kb1wiKSB7XG4gICAgICB0b2RvcyA9IHRvZG9zLmZpbHRlcigodG9kbykgPT4gdG9kby5pZCAhPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LmlkKTtcblxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0b2Rvc1wiLCBKU09OLnN0cmluZ2lmeSh0b2RvcykpO1xuXG4gICAgICB2aWV3VG9kb0Z1bmMoc2VsZWN0ZWRQcm9qZWN0KTtcbiAgICB9XG4gIH0pO1xufSkoKTtcblxuKGZ1bmN0aW9uICgpIHtcbiAgdG9kb0xpc3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgaWYgKGUudGFyZ2V0LmlkID09IFwiZG9uZVwiKSB7XG4gICAgICBjb25zb2xlLmxvZyhlLnRhcmdldC5wYXJlbnRFbGVtZW50LmlkKTtcbiAgICAgIHRvZG9zID0gdG9kb3MuZmlsdGVyKCh0b2RvKSA9PiB7XG4gICAgICAgIGlmICh0b2RvLmRvbmUgPT0gZmFsc2UgJiYgdG9kby5pZCA9PSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LmlkKSB7XG4gICAgICAgICAgdG9kby5kb25lID0gdHJ1ZTtcbiAgICAgICAgICByZXR1cm4gdG9kbztcbiAgICAgICAgfSBlbHNlIGlmICh0b2RvLmRvbmUgPT0gdHJ1ZSAmJiB0b2RvLmlkID09IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQuaWQpIHtcbiAgICAgICAgICB0b2RvLmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICByZXR1cm4gdG9kbztcbiAgICAgICAgfSBlbHNlIHJldHVybiB0b2RvO1xuICAgICAgfSk7XG5cbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidG9kb3NcIiwgSlNPTi5zdHJpbmdpZnkodG9kb3MpKTtcbiAgICB9XG4gIH0pO1xufSkoKTtcbiIsImxldCB0b2RvTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9kb0xpc3RcIik7XG5cbmNvbnN0IHZpZXdUb2RvRnVuYyA9IGZ1bmN0aW9uIChwcm8pIHtcbiAgbGV0IHRvZG9zID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRvZG9zXCIpKTtcbiAgdG9kb0xpc3QuaW5uZXJIVE1MID0gXCJcIjtcblxuICBpZiAodG9kb3MgIT0gbnVsbClcbiAgICB0b2Rvcy5mb3JFYWNoKCh0b2RvKSA9PiB7XG4gICAgICBsZXQgaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZChcInRvZG9JdGVtXCIpO1xuXG4gICAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgICBsZXQgZGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgbGV0IGRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgIGxldCBwcmlvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICBsZXQgZG9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgIGRvbmUuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImNoZWNrYm94XCIpO1xuICAgICAgZG9uZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImRvbmVcIik7XG4gICAgICBsZXQgZGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGRlbC50ZXh0Q29udGVudCA9IFwiUmVtb3ZlXCI7XG4gICAgICBkZWwuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJkZWxUb2RvXCIpO1xuXG4gICAgICBpZiAodG9kby5wcm9qZWN0ID09IHBybykge1xuICAgICAgICB0aXRsZS50ZXh0Q29udGVudCA9IHRvZG8udGl0bGU7XG4gICAgICAgIGRlc2MudGV4dENvbnRlbnQgPSBcIkRlc2NyaXB0aW9uOiBcIiArIHRvZG8uZGVzYztcbiAgICAgICAgZGF0ZS50ZXh0Q29udGVudCA9IFwiRGF0ZTogXCIgKyB0b2RvLmRhdGU7XG4gICAgICAgIHByaW8udGV4dENvbnRlbnQgPSBcIlByaW9yaXR5OiBcIiArIHRvZG8ucHJpbztcbiAgICAgICAgZG9uZS5jaGVja2VkID0gdG9kby5kb25lO1xuXG4gICAgICAgIGl0ZW0uYXBwZW5kKHRpdGxlKTtcbiAgICAgICAgaWYgKHRvZG8uZGVzYykgaXRlbS5hcHBlbmQoZGVzYyk7XG4gICAgICAgIGlmICh0b2RvLmRhdGUpIGl0ZW0uYXBwZW5kKGRhdGUpO1xuICAgICAgICBpZiAodG9kby5wcmlvKSBpdGVtLmFwcGVuZChwcmlvKTtcbiAgICAgICAgaXRlbS5hcHBlbmQoZG9uZSk7XG4gICAgICAgIGl0ZW0uYXBwZW5kKGRlbCk7XG4gICAgICAgIGl0ZW0uaWQgPSB0b2RvLmlkO1xuXG4gICAgICAgIHRvZG9MaXN0LmFwcGVuZChpdGVtKTtcbiAgICAgIH1cbiAgICB9KTtcbn07XG5cbmV4cG9ydCB7IHZpZXdUb2RvRnVuYyB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IFwiLi9tb2R1bGVzL2Zvcm1zXCI7XG5pbXBvcnQgXCIuL21vZHVsZXMvdG9kb1wiO1xuaW1wb3J0IFwiLi9tb2R1bGVzL3Byb2plY3RcIjtcbiJdLCJzb3VyY2VSb290IjoiIn0=