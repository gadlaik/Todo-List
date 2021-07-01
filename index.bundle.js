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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL2Zvcm1zLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvdG9kby5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy92aWV3VG9kb3MuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNzSDtBQUM3QjtBQUNPO0FBQ3pDO0FBQ0g7QUFDdUI7QUFDM0UsOEJBQThCLG1GQUEyQixDQUFDLHdHQUFxQztBQUMvRixtSEFBbUg7QUFDbkgseUNBQXlDLHNGQUErQixDQUFDLHNDQUE2QjtBQUN0Ryx5Q0FBeUMsc0ZBQStCLENBQUMsbUNBQTZCO0FBQ3RHLHlDQUF5QyxzRkFBK0IsQ0FBQywwREFBNkI7QUFDdEc7QUFDQSwyRkFBMkYsY0FBYyxlQUFlLDJCQUEyQiwyQkFBMkIsR0FBRywrQkFBK0IscUNBQXFDLGlCQUFpQixrQkFBa0IsbUNBQW1DLHdCQUF3QixzQkFBc0IsR0FBRyxTQUFTLDBFQUEwRSw2QkFBNkIsaUJBQWlCLGdCQUFnQixHQUFHLFNBQVMsc0JBQXNCLG9CQUFvQixHQUFHLG1DQUFtQywrQkFBK0Isa0JBQWtCLHNDQUFzQyxHQUFHLHlDQUF5QyxnQ0FBZ0Msa0JBQWtCLEdBQUcsWUFBWSxrQkFBa0Isd0JBQXdCLHdCQUF3QixxQkFBcUIsR0FBRyxtQ0FBbUMsb0JBQW9CLGlCQUFpQixzQkFBc0IsdUJBQXVCLGlCQUFpQixHQUFHLDJCQUEyQiwwRUFBMEUsNkJBQTZCLGlCQUFpQixnQkFBZ0Isb0JBQW9CLEdBQUcsY0FBYywwRUFBMEUsNkJBQTZCLHFCQUFxQixpQkFBaUIsR0FBRyx1Q0FBdUMsMkJBQTJCLEdBQUcsWUFBWSxxQkFBcUIsR0FBRyxZQUFZLG9CQUFvQiwyQkFBMkIsdUJBQXVCLHdCQUF3QixxQkFBcUIsaUNBQWlDLGlCQUFpQixHQUFHLGtCQUFrQiw2QkFBNkIsb0JBQW9CLEdBQUcsa0JBQWtCLDBFQUEwRSw2QkFBNkIsaUJBQWlCLGdCQUFn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O0FBQ0E7QUFDQSxNQUFNLHdEQUFZO0FBQ2xCO0FBQ0E7QUFDQSxpQ0FBaUMsd0RBQVk7QUFDN0MsR0FBRztBQUNILENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7O0FBRTBCOzs7Ozs7Ozs7Ozs7Ozs7QUMxSWlCO0FBQ0Q7O0FBRTNDO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdEQUFZLENBQUMscURBQWU7O0FBRTVCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNLHFEQUFlO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBLFFBQVEscURBQWU7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLFVBQVUscURBQWU7QUFDOUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLHFEQUFlO0FBQ2hDO0FBQ0EsOENBQThDLHFEQUFlO0FBQzdELE9BQU87O0FBRVA7O0FBRUEsTUFBTSx3REFBWSxDQUFDLHFEQUFlOztBQUVsQztBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7O0FBRUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsTUFBTSx3REFBWSxDQUFDLHFEQUFlO0FBQ2xDO0FBQ0EsR0FBRztBQUNILENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87O0FBRVA7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDMUZEOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRXdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ3pDeEI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGdDQUFnQyxZQUFZO1dBQzVDO1dBQ0EsRTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxFQUFFO1dBQ0Y7V0FDQTtXQUNBLENBQUMsSTs7Ozs7V0NQRCx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxrQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmcUI7QUFDSTtBQUNEO0FBQ0ciLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fIGZyb20gXCIuL3RvZG8ucG5nXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gZnJvbSBcIi4vWC5wbmdcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyBmcm9tIFwiLi9zdWNjZXNzLWdyZWVuLWNoZWNrLW1hcmsucG5nXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1NdWt0YSZkaXNwbGF5PXN3YXApO1wiXSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBHbG9iYWwgc3R5bGVzICovXFxuXFxuKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBmb250LWZhbWlseTogXFxcIk11a3RhXFxcIjtcXG59XFxuXFxuLyogdGl0bGUgKi9cXG5cXG4jcGFnZVRpdGxlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYW5jaGVkYWxtb25kO1xcbiAgaGVpZ2h0OiA4MHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAwcHggMTVweDtcXG59XFxuI2xvZ28ge1xcbiAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKSBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxuICBoZWlnaHQ6IDUwcHg7XFxuICB3aWR0aDogNTBweDtcXG59XFxuI3VzZXIge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi8qIGNvbnRhaW5lciAqL1xcblxcbiNjb250YWluZXIge1xcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gODBweCk7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMzBweCBhdXRvO1xcbn1cXG5cXG4vKiBwcm9qZWN0IGNvbnRhaW5lciAqL1xcblxcbiNwcm9Db250IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZTtcXG4gIHBhZGRpbmc6IDEwcHg7XFxufVxcbiNwcm9Gb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxufVxcbiNwcm9Gb3JtID4gaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdIHtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIHdpZHRoOiAyMzBweDtcXG4gIHBhZGRpbmc6IDNweCAxMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG4jYWRkUHJvQnRuLFxcbiNkZWxQcm9CdG4ge1xcbiAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKSBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxuICBoZWlnaHQ6IDMzcHg7XFxuICB3aWR0aDogNDJweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuI2FkZFByb0J0biB7XFxuICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpIG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcbiNhZGRQcm9CdG46aG92ZXIsXFxuI2RlbFByb0J0bjpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xcbn1cXG4jcHJvTGlzdCB7XFxuICBtYXJnaW4tdG9wOiAyNXB4O1xcbn1cXG4jcHJvSXRlbSB7XFxuICBmb250LXNpemU6IDI0cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIHBhZGRpbmc6IDBweCA4cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgd2lkdGg6IDI3MHB4O1xcbn1cXG4jcHJvSXRlbTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbiNkZWxQcm9JdGVtQnRuIHtcXG4gIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIikgbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgd2lkdGg6IDQwcHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBsZWZ0OiA1MHB4O1xcbiAgZmxvYXQ6IHJpZ2h0O1xcbn1cXG4jZGVsUHJvSXRlbUJ0bjpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xcbn1cXG4vKiB0b2RvIGNvbnRhaW5lciAqL1xcblxcbiN0b2RvQ29udCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNjUsIDE4MCwgMjI1KTtcXG4gIHBhZGRpbmc6IDEwcHg7XFxufVxcbiN0b2RvRm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHdpZHRoOiAzMzBweDtcXG4gIGdhcDogOHB4O1xcbiAgbWFyZ2luOiBhdXRvO1xcbn1cXG5sYWJlbCxcXG5pbnB1dFt0eXBlPVxcXCJyYWRpb1xcXCJdIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIG1hcmdpbi1yaWdodDogNXB4O1xcbn1cXG4jdG9kb0Zvcm0gPiBpbnB1dCxcXG50ZXh0YXJlYSB7XFxuICBwYWRkaW5nOiAzcHg7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG4jcHJpbyB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbiNhZGRDYW5jZWwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogM3B4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbiNhZGRDYW5jZWwgPiBpbnB1dCB7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBwYWRkaW5nOiAwcHggMTBweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuI2FkZENhbmNlbCA+IGRpdiB7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIHBhZGRpbmc6IDBweCAxMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgOTksIDQyKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuI2FkZENhbmNlbCA+IGRpdjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2VyZWQ7XFxufVxcbiN0b2dnbGVUb2RvRm9ybSB7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIHBhZGRpbmc6IDVweCAxNXB4O1xcbiAgd2lkdGg6IDE2NXB4O1xcbiAgbWFyZ2luOiA1cHggYXV0byAxNXB4IGF1dG87XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaW1lZ3JlZW47XFxufVxcbiN0b2dnbGVUb2RvRm9ybTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDIsIDE4MiwgNDIpO1xcbn1cXG5cXG4vKiB2aWV3IHRvZG9zICovXFxuXFxuI3RvZG9MaXN0IHtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gIG1hcmdpbjogMjBweCBhdXRvO1xcbiAgd2lkdGg6IDQwMHB4O1xcbn1cXG4udG9kb0l0ZW0ge1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGtoYWtpO1xcbn1cXG5pbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMik7XFxuICBtYXJnaW4tbGVmdDogN3B4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4jZGVsVG9kbyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCA5MCwgMzApO1xcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgcGFkZGluZzogMHB4IDEwcHg7XFxuICBib3JkZXItcmFkaXVzOiAycHg7XFxuICBmbG9hdDogcmlnaHQ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTNweCk7XFxufVxcbiNkZWxUb2RvOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuXFxuLyogaGlkZSAqL1xcblxcbi5oaWRlIHtcXG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQSxrQkFBa0I7O0FBRWxCOzs7RUFHRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQjtFQUN0QixvQkFBb0I7QUFDdEI7O0FBRUEsVUFBVTs7QUFFVjtFQUNFLGdDQUFnQztFQUNoQyxZQUFZO0VBQ1osYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSw2REFBdUM7RUFDdkMsd0JBQXdCO0VBQ3hCLFlBQVk7RUFDWixXQUFXO0FBQ2I7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCOztBQUVBLGNBQWM7O0FBRWQ7RUFDRSwwQkFBMEI7RUFDMUIsYUFBYTtFQUNiLGlDQUFpQztBQUNuQzs7QUFFQSxzQkFBc0I7O0FBRXRCO0VBQ0UsMkJBQTJCO0VBQzNCLGFBQWE7QUFDZjtBQUNBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsWUFBWTtBQUNkO0FBQ0E7O0VBRUUsNkRBQXVDO0VBQ3ZDLHdCQUF3QjtFQUN4QixZQUFZO0VBQ1osV0FBVztFQUNYLGVBQWU7QUFDakI7QUFDQTtFQUNFLDZEQUEyRDtFQUMzRCx3QkFBd0I7RUFDeEIsZ0JBQWdCO0VBQ2hCLFlBQVk7QUFDZDtBQUNBOztFQUVFLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxlQUFlO0VBQ2Ysc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLDRCQUE0QjtFQUM1QixZQUFZO0FBQ2Q7QUFDQTtFQUNFLHdCQUF3QjtFQUN4QixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSw2REFBdUM7RUFDdkMsd0JBQXdCO0VBQ3hCLFlBQVk7RUFDWixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixZQUFZO0FBQ2Q7QUFDQTtFQUNFLHNCQUFzQjtBQUN4QjtBQUNBLG1CQUFtQjs7QUFFbkI7RUFDRSxtQ0FBbUM7RUFDbkMsYUFBYTtBQUNmO0FBQ0E7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixRQUFRO0VBQ1IsWUFBWTtBQUNkO0FBQ0E7O0VBRUUsZUFBZTtFQUNmLGVBQWU7RUFDZixpQkFBaUI7QUFDbkI7QUFDQTs7RUFFRSxZQUFZO0VBQ1osZUFBZTtFQUNmLGFBQWE7QUFDZjtBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsUUFBUTtFQUNSLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSx1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsa0NBQWtDO0VBQ2xDLGVBQWU7QUFDakI7QUFDQTtFQUNFLDJCQUEyQjtBQUM3QjtBQUNBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLDBCQUEwQjtFQUMxQixlQUFlO0VBQ2YsMkJBQTJCO0FBQzdCO0FBQ0E7RUFDRSxrQ0FBa0M7QUFDcEM7O0FBRUEsZUFBZTs7QUFFZjtFQUNFLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIsWUFBWTtBQUNkO0FBQ0E7RUFDRSx1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7QUFDQTtFQUNFLGtDQUFrQztFQUNsQyxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osZUFBZTtFQUNmLDJCQUEyQjtBQUM3QjtBQUNBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBLFNBQVM7O0FBRVQ7RUFDRSx3QkFBd0I7QUFDMUJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TXVrdGEmZGlzcGxheT1zd2FwXFxcIik7XFxuXFxuLyogR2xvYmFsIHN0eWxlcyAqL1xcblxcbiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJNdWt0YVxcXCI7XFxufVxcblxcbi8qIHRpdGxlICovXFxuXFxuI3BhZ2VUaXRsZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFuY2hlZGFsbW9uZDtcXG4gIGhlaWdodDogODBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMHB4IDE1cHg7XFxufVxcbiNsb2dvIHtcXG4gIGJhY2tncm91bmQ6IHVybChcXFwiLi90b2RvLnBuZ1xcXCIpIG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXG4gIGhlaWdodDogNTBweDtcXG4gIHdpZHRoOiA1MHB4O1xcbn1cXG4jdXNlciB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLyogY29udGFpbmVyICovXFxuXFxuI2NvbnRhaW5lciB7XFxuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA4MHB4KTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMzMHB4IGF1dG87XFxufVxcblxcbi8qIHByb2plY3QgY29udGFpbmVyICovXFxuXFxuI3Byb0NvbnQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlO1xcbiAgcGFkZGluZzogMTBweDtcXG59XFxuI3Byb0Zvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG59XFxuI3Byb0Zvcm0gPiBpbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl0ge1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgd2lkdGg6IDIzMHB4O1xcbiAgcGFkZGluZzogM3B4IDEwcHg7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcbiNhZGRQcm9CdG4sXFxuI2RlbFByb0J0biB7XFxuICBiYWNrZ3JvdW5kOiB1cmwoXFxcIi9zcmMvWC5wbmdcXFwiKSBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxuICBoZWlnaHQ6IDMzcHg7XFxuICB3aWR0aDogNDJweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuI2FkZFByb0J0biB7XFxuICBiYWNrZ3JvdW5kOiB1cmwoXFxcIi4vc3VjY2Vzcy1ncmVlbi1jaGVjay1tYXJrLnBuZ1xcXCIpIG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcbiNhZGRQcm9CdG46aG92ZXIsXFxuI2RlbFByb0J0bjpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xcbn1cXG4jcHJvTGlzdCB7XFxuICBtYXJnaW4tdG9wOiAyNXB4O1xcbn1cXG4jcHJvSXRlbSB7XFxuICBmb250LXNpemU6IDI0cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIHBhZGRpbmc6IDBweCA4cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgd2lkdGg6IDI3MHB4O1xcbn1cXG4jcHJvSXRlbTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbiNkZWxQcm9JdGVtQnRuIHtcXG4gIGJhY2tncm91bmQ6IHVybChcXFwiL3NyYy9YLnBuZ1xcXCIpIG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXG4gIGhlaWdodDogNDBweDtcXG4gIHdpZHRoOiA0MHB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbGVmdDogNTBweDtcXG4gIGZsb2F0OiByaWdodDtcXG59XFxuI2RlbFByb0l0ZW1CdG46aG92ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcXG59XFxuLyogdG9kbyBjb250YWluZXIgKi9cXG5cXG4jdG9kb0NvbnQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDY1LCAxODAsIDIyNSk7XFxuICBwYWRkaW5nOiAxMHB4O1xcbn1cXG4jdG9kb0Zvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB3aWR0aDogMzMwcHg7XFxuICBnYXA6IDhweDtcXG4gIG1hcmdpbjogYXV0bztcXG59XFxubGFiZWwsXFxuaW5wdXRbdHlwZT1cXFwicmFkaW9cXFwiXSB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBtYXJnaW4tcmlnaHQ6IDVweDtcXG59XFxuI3RvZG9Gb3JtID4gaW5wdXQsXFxudGV4dGFyZWEge1xcbiAgcGFkZGluZzogM3B4O1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuI3ByaW8ge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4jYWRkQ2FuY2VsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDNweDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4jYWRkQ2FuY2VsID4gaW5wdXQge1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgcGFkZGluZzogMHB4IDEwcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbiNhZGRDYW5jZWwgPiBkaXYge1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBwYWRkaW5nOiAwcHggMTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDk5LCA0Mik7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbiNhZGRDYW5jZWwgPiBkaXY6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlcmVkO1xcbn1cXG4jdG9nZ2xlVG9kb0Zvcm0ge1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBwYWRkaW5nOiA1cHggMTVweDtcXG4gIHdpZHRoOiAxNjVweDtcXG4gIG1hcmdpbjogNXB4IGF1dG8gMTVweCBhdXRvO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogbGltZWdyZWVuO1xcbn1cXG4jdG9nZ2xlVG9kb0Zvcm06aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQyLCAxODIsIDQyKTtcXG59XFxuXFxuLyogdmlldyB0b2RvcyAqL1xcblxcbiN0b2RvTGlzdCB7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICBtYXJnaW46IDIwcHggYXV0bztcXG4gIHdpZHRoOiA0MDBweDtcXG59XFxuLnRvZG9JdGVtIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBraGFraTtcXG59XFxuaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDIpO1xcbiAgbWFyZ2luLWxlZnQ6IDdweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuI2RlbFRvZG8ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgOTAsIDMwKTtcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXG4gIHBhZGRpbmc6IDBweCAxMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgZmxvYXQ6IHJpZ2h0O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zcHgpO1xcbn1cXG4jZGVsVG9kbzpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcblxcbi8qIGhpZGUgKi9cXG5cXG4uaGlkZSB7XFxuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyB2YXIgX2kgPSBhcnIgJiYgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgYXJyW1N5bWJvbC5pdGVyYXRvcl0gfHwgYXJyW1wiQEBpdGVyYXRvclwiXSk7IGlmIChfaSA9PSBudWxsKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX3MsIF9lOyB0cnkgeyBmb3IgKF9pID0gX2kuY2FsbChhcnIpOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKSB7XG4gIHZhciBfaXRlbSA9IF9zbGljZWRUb0FycmF5KGl0ZW0sIDQpLFxuICAgICAgY29udGVudCA9IF9pdGVtWzFdLFxuICAgICAgY3NzTWFwcGluZyA9IF9pdGVtWzNdO1xuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgb3B0aW9ucyA9IHt9O1xuICB9IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlcnNjb3JlLWRhbmdsZSwgbm8tcGFyYW0tcmVhc3NpZ25cblxuXG4gIHVybCA9IHVybCAmJiB1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsO1xuXG4gIGlmICh0eXBlb2YgdXJsICE9PSBcInN0cmluZ1wiKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfSAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpLmNvbmNhdChvYmouY3NzLCBcIn1cIikgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiY29uc3QgcHJvQ29udCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvQ29udFwiKTtcbmNvbnN0IHRvZG9Db250ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b2RvQ29udFwiKTtcblxuKGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgcHJvRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICBwcm9Gb3JtLnNldEF0dHJpYnV0ZShcImlkXCIsIFwicHJvRm9ybVwiKTtcblxuICBjb25zdCBwcm9UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgcHJvVGl0bGUuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG4gIHByb1RpdGxlLnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIFwiUHJvamVjdCBUaXRsZVwiKTtcblxuICBjb25zdCBhZGRQcm9CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGFkZFByb0J0bi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwic3VibWl0XCIpO1xuICBhZGRQcm9CdG4uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJhZGRQcm9CdG5cIik7XG4gIGFkZFByb0J0bi52YWx1ZSA9IFwiXCI7XG4gIGNvbnN0IGRlbFByb0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGRlbFByb0J0bi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImRlbFByb0J0blwiKTtcblxuICBwcm9Gb3JtLmFwcGVuZENoaWxkKHByb1RpdGxlKTtcbiAgcHJvRm9ybS5hcHBlbmRDaGlsZChhZGRQcm9CdG4pO1xuICBwcm9Gb3JtLmFwcGVuZENoaWxkKGRlbFByb0J0bik7XG5cbiAgcHJvQ29udC5hcHBlbmRDaGlsZChwcm9Gb3JtKTtcbn0pKCk7XG5cbihmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IG9wZW5Ub2RvRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG9wZW5Ub2RvRm9ybS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRvZ2dsZVRvZG9Gb3JtXCIpO1xuICBvcGVuVG9kb0Zvcm0udGV4dENvbnRlbnQgPSBcIk9QRU4gVE9ETyBGT1JNXCI7XG5cbiAgb3BlblRvZG9Gb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGlmIChvcGVuVG9kb0Zvcm0udGV4dENvbnRlbnQgPT0gXCJPUEVOIFRPRE8gRk9STVwiKSB7XG4gICAgICBvcGVuVG9kb0Zvcm0udGV4dENvbnRlbnQgPSBcIkNMT1NFIFRPRE8gRk9STVwiO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b2RvRm9ybVwiKS5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZVwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgb3BlblRvZG9Gb3JtLnRleHRDb250ZW50ID0gXCJPUEVOIFRPRE8gRk9STVwiO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b2RvRm9ybVwiKS5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZVwiKTtcbiAgICB9XG4gIH0pO1xuXG4gIHRvZG9Db250LmFwcGVuZChvcGVuVG9kb0Zvcm0pO1xufSkoKTtcblxuKGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgdG9kb0Zvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgdG9kb0Zvcm0uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0b2RvRm9ybVwiKTtcbiAgdG9kb0Zvcm0uY2xhc3NMaXN0LnRvZ2dsZShcImhpZGVcIik7XG5cbiAgY29uc3QgdG9kb1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICB0b2RvVGl0bGUuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0b2RvVGl0bGVcIik7XG4gIHRvZG9UaXRsZS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcbiAgdG9kb1RpdGxlLnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIFwiVG9kbyBUaXRsZVwiKTtcblxuICBjb25zdCBzZWxlY3RQcm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgc2VsZWN0UHJvLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiY29sb3I6IHJlZDsgdGV4dC1hbGlnbjogY2VudGVyXCIpO1xuICBzZWxlY3RQcm8uY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XG4gIHNlbGVjdFByby5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInNlbFByb1wiKTtcbiAgc2VsZWN0UHJvLnRleHRDb250ZW50ID0gXCJTZWxlY3QgYSBwcm9qZWN0XCI7XG5cbiAgY29uc3QgdG9kb0Rlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XG4gIHRvZG9EZXNjLnNldEF0dHJpYnV0ZShcImlkXCIsIFwidG9kb0Rlc2NcIik7XG4gIHRvZG9EZXNjLnNldEF0dHJpYnV0ZShcInJvd3NcIiwgNSk7XG5cbiAgY29uc3QgdG9kb0RhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIHRvZG9EYXRlLnNldEF0dHJpYnV0ZShcImlkXCIsIFwidG9kb0RhdGVcIik7XG4gIHRvZG9EYXRlLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJkYXRlXCIpO1xuXG4gIGNvbnN0IHRvZG9QcmlvID0gYDxkaXYgaWQ9XCJwcmlvXCI+PGxhYmVsIGZvcj1cImhpZ2hcIj5IaWdoPGlucHV0IG5hbWU9XCJwcmlvR2FuZ1wiIGlkPVwiaGlnaFwiIHR5cGU9XCJyYWRpb1wiLz48L2xhYmVsPlxuICA8bGFiZWwgZm9yPVwibWVkaXVtXCI+TWVkaXVtPGlucHV0IG5hbWU9XCJwcmlvR2FuZ1wiIGlkPVwibWVkaXVtXCIgdHlwZT1cInJhZGlvXCIvPjwvbGFiZWw+XG4gIDxsYWJlbCBmb3I9XCJsb3dcIj5Mb3c8aW5wdXQgbmFtZT1cInByaW9HYW5nXCIgaWQ9XCJsb3dcIiB0eXBlPVwicmFkaW9cIi8+PC9sYWJlbD48L2Rpdj5gO1xuXG4gIGNvbnN0IGFkZFRvZG9CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGFkZFRvZG9CdG4uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInN1Ym1pdFwiKTtcbiAgY29uc3QgY2FuY2VsVG9kb0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNhbmNlbFRvZG9CdG4udGV4dENvbnRlbnQgPSBcIkNhbmNlbFwiO1xuICBjb25zdCBhZGRDYW5jZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBhZGRDYW5jZWwuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJhZGRDYW5jZWxcIik7XG4gIGFkZENhbmNlbC5hcHBlbmQoYWRkVG9kb0J0bik7XG4gIGFkZENhbmNlbC5hcHBlbmQoY2FuY2VsVG9kb0J0bik7XG5cbiAgdG9kb0Zvcm0uYXBwZW5kKHRvZG9UaXRsZSk7XG4gIHRvZG9Gb3JtLmFwcGVuZChzZWxlY3RQcm8pO1xuICB0b2RvRm9ybS5hcHBlbmQodG9kb0Rlc2MpO1xuICB0b2RvRm9ybS5hcHBlbmQodG9kb0RhdGUpO1xuICB0b2RvRm9ybS5pbm5lckhUTUwgKz0gdG9kb1ByaW87XG4gIHRvZG9Gb3JtLmFwcGVuZChhZGRDYW5jZWwpO1xuXG4gIHRvZG9Db250LmFwcGVuZCh0b2RvRm9ybSk7XG59KSgpO1xuXG4oZnVuY3Rpb24gKCkge1xuICBjb25zdCB0b2RvTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgdG9kb0xpc3Quc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0b2RvTGlzdFwiKTtcblxuICB0b2RvQ29udC5hcHBlbmQodG9kb0xpc3QpO1xufSkoKTtcbiIsImltcG9ydCB7IHZpZXdUb2RvRnVuYyB9IGZyb20gXCIuL3ZpZXdUb2Rvc1wiO1xuXG5sZXQgcHJvamVjdHMgPSBbXTtcbmlmIChKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdHNcIikpICE9IG51bGwpXG4gIHByb2plY3RzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RzXCIpKTtcbmxldCBzZWxlY3RlZFByb2plY3Q7XG5pZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJzZWxlY3RlZFByb2plY3RcIikgIT0gbnVsbClcbiAgc2VsZWN0ZWRQcm9qZWN0ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInNlbGVjdGVkUHJvamVjdFwiKSk7XG5jb25zdCBwcm9Gb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9Gb3JtXCIpO1xuY29uc3QgcHJvTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbnByb0xpc3Quc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwcm9MaXN0XCIpO1xuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9Db250XCIpLmFwcGVuZENoaWxkKHByb0xpc3QpO1xuXG5mdW5jdGlvbiBwcm9JdGVtRnVuYyhwcm9WYWwpIHtcbiAgbGV0IHByb0l0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIGNvbnN0IGRlbFByb0l0ZW1CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgZGVsUHJvSXRlbUJ0bi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImRlbFByb0l0ZW1CdG5cIik7XG5cbiAgcHJvSXRlbS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInByb0l0ZW1cIik7XG4gIHByb0l0ZW0udGV4dENvbnRlbnQgPSBwcm9WYWw7XG4gIHByb0l0ZW0uYXBwZW5kKGRlbFByb0l0ZW1CdG4pO1xuXG4gIHByb0xpc3QuYXBwZW5kQ2hpbGQocHJvSXRlbSk7XG59XG5cbmlmIChwcm9qZWN0cyAhPSBudWxsKVxuICAoZnVuY3Rpb24gKCkge1xuICAgIHByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICAgIHByb0l0ZW1GdW5jKHByb2plY3QpO1xuICAgIH0pO1xuICB9KSgpO1xuXG5pZiAoc2VsZWN0ZWRQcm9qZWN0ICE9IG51bGwpIHtcbiAgKGZ1bmN0aW9uICgpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiI3Byb0l0ZW1cIikuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgaWYgKGl0ZW0udGV4dENvbnRlbnQgPT0gc2VsZWN0ZWRQcm9qZWN0KVxuICAgICAgICBpdGVtLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiZ29sZFwiO1xuICAgIH0pO1xuICB9KSgpO1xufVxuXG4oZnVuY3Rpb24gKCkge1xuICBwcm9Gb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBsZXQgcHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvRm9ybSA+IGlucHV0W3R5cGU9dGV4dF1cIik7XG4gICAgY29uc3QgcmVnID0gL15bXFx3XFxzXXsyLDIwfSQvO1xuXG4gICAgaWYgKFxuICAgICAgcHJvamVjdHMgPT0gbnVsbCB8fFxuICAgICAgcHJvamVjdHMuaW5jbHVkZXMocHJvamVjdC52YWx1ZSkgfHxcbiAgICAgICFyZWcudGVzdChwcm9qZWN0LnZhbHVlKVxuICAgICkge1xuICAgICAgcHJvamVjdC5zdHlsZS5ib3JkZXIgPSBcIjJweCBzb2xpZCByZWRcIjtcbiAgICAgIHByb2plY3Quc3R5bGUub3V0bGluZSA9IFwicmVkXCI7XG4gICAgfVxuXG4gICAgaWYgKHByb2plY3RzICE9IG51bGwpIHtcbiAgICAgIGlmIChyZWcudGVzdChwcm9qZWN0LnZhbHVlKSAmJiAhcHJvamVjdHMuaW5jbHVkZXMocHJvamVjdC52YWx1ZSkpIHtcbiAgICAgICAgcHJvSXRlbUZ1bmMocHJvamVjdC52YWx1ZSk7XG5cbiAgICAgICAgcHJvamVjdHMucHVzaChwcm9qZWN0LnZhbHVlKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0c1wiLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0cykpO1xuXG4gICAgICAgIHByb2plY3Quc3R5bGUuYm9yZGVyID0gXCJub25lXCI7XG5cbiAgICAgICAgcHJvRm9ybS5yZXNldCgpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAocmVnLnRlc3QocHJvamVjdC52YWx1ZSkpIHtcbiAgICAgIHByb0l0ZW1GdW5jKHByb2plY3QudmFsdWUpO1xuXG4gICAgICBwcm9qZWN0cy5wdXNoKHByb2plY3QudmFsdWUpO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0c1wiLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0cykpO1xuXG4gICAgICBwcm9qZWN0LnN0eWxlLmJvcmRlciA9IFwibm9uZVwiO1xuXG4gICAgICBwcm9Gb3JtLnJlc2V0KCk7XG4gICAgfVxuICB9KTtcbn0pKCk7XG5cbihmdW5jdGlvbiAoKSB7XG4gIHByb0xpc3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgaWYgKGUudGFyZ2V0LnBhcmVudEVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiaWRcIikgPT0gXCJwcm9JdGVtXCIpIHtcbiAgICAgIGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucmVtb3ZlKCk7XG5cbiAgICAgIGxldCB0b2RvcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2Rvc1wiKSk7XG4gICAgICB0b2RvcyA9IHRvZG9zLmZpbHRlcigodG9kbykgPT4ge1xuICAgICAgICB0b2RvID09IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQudGV4dENvbnRlbnQ7XG4gICAgICB9KTtcbiAgICAgIHZpZXdUb2RvRnVuYyhzZWxlY3RlZFByb2plY3QpO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0b2Rvc1wiLCBKU09OLnN0cmluZ2lmeSh0b2RvcykpO1xuICAgICAgcHJvamVjdHMgPSBwcm9qZWN0cy5maWx0ZXIoKGl0ZW0pID0+IHtcbiAgICAgICAgaWYgKGl0ZW0gIT0gZS50YXJnZXQucGFyZW50RWxlbWVudC50ZXh0Q29udGVudCkgcmV0dXJuIGl0ZW07XG4gICAgICB9KTtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvamVjdHNcIiwgSlNPTi5zdHJpbmdpZnkocHJvamVjdHMpKTtcblxuICAgICAgaWYgKGUudGFyZ2V0LnBhcmVudEVsZW1lbnQudGV4dENvbnRlbnQgPT0gc2VsZWN0ZWRQcm9qZWN0KSB7XG4gICAgICAgIHNlbGVjdGVkUHJvamVjdCA9IG51bGw7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFxuICAgICAgICAgIFwic2VsZWN0ZWRQcm9qZWN0XCIsXG4gICAgICAgICAgSlNPTi5zdHJpbmdpZnkoc2VsZWN0ZWRQcm9qZWN0KVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG59KSgpO1xuXG4oZnVuY3Rpb24gKCkge1xuICBwcm9MaXN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGlmIChcbiAgICAgIGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcImlkXCIpID09IFwicHJvSXRlbVwiICYmXG4gICAgICBlLnRhcmdldC50ZXh0Q29udGVudCA9PSBzZWxlY3RlZFByb2plY3RcbiAgICApIHtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIjcHJvSXRlbVwiKS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgIGl0ZW0uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ3aGl0ZXNtb2tlXCI7XG4gICAgICB9KTtcbiAgICAgIHNlbGVjdGVkUHJvamVjdCA9IG51bGw7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInNlbGVjdGVkUHJvamVjdFwiLCBKU09OLnN0cmluZ2lmeShzZWxlY3RlZFByb2plY3QpKTtcbiAgICB9IGVsc2UgaWYgKGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcImlkXCIpID09IFwicHJvSXRlbVwiKSB7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiI3Byb0l0ZW1cIikuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICBpdGVtLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwid2hpdGVzbW9rZVwiO1xuICAgICAgfSk7XG4gICAgICBlLnRhcmdldC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcImdvbGRcIjtcbiAgICAgIHNlbGVjdGVkUHJvamVjdCA9IGUudGFyZ2V0LnRleHRDb250ZW50O1xuICAgICAgdmlld1RvZG9GdW5jKHNlbGVjdGVkUHJvamVjdCk7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInNlbGVjdGVkUHJvamVjdFwiLCBKU09OLnN0cmluZ2lmeShzZWxlY3RlZFByb2plY3QpKTtcbiAgICB9XG4gICAgaWYgKHNlbGVjdGVkUHJvamVjdCA9PSBudWxsKSB2aWV3VG9kb0Z1bmMoc2VsZWN0ZWRQcm9qZWN0KTtcbiAgfSk7XG59KSgpO1xuXG4oZnVuY3Rpb24gKCkge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2RlbFByb0J0blwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIHByb0Zvcm0ucmVzZXQoKTtcbiAgfSk7XG59KSgpO1xuXG5leHBvcnQgeyBzZWxlY3RlZFByb2plY3QgfTtcbiIsImltcG9ydCB7IHNlbGVjdGVkUHJvamVjdCB9IGZyb20gXCIuL3Byb2plY3RcIjtcbmltcG9ydCB7IHZpZXdUb2RvRnVuYyB9IGZyb20gXCIuL3ZpZXdUb2Rvc1wiO1xuXG5sZXQgdG9kb3MgPVxuICBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9kb3NcIikpID09IG51bGxcbiAgICA/IFtdXG4gICAgOiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9kb3NcIikpO1xuXG52aWV3VG9kb0Z1bmMoc2VsZWN0ZWRQcm9qZWN0KTtcblxuKGZ1bmN0aW9uICgpIHtcbiAgbGV0IHRvZG9UaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9kb1RpdGxlXCIpO1xuICBsZXQgdG9kb0Rlc2MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvZG9EZXNjXCIpO1xuICBsZXQgdG9kb0RhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvZG9EYXRlXCIpO1xuXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9kb0Zvcm1cIikuYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGxldCB0b2RvUHJpbyA9XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwicHJpb0dhbmdcIl06Y2hlY2tlZCcpID09IG51bGxcbiAgICAgICAgPyBudWxsXG4gICAgICAgIDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cInByaW9HYW5nXCJdOmNoZWNrZWQnKS5pZDtcblxuICAgIGlmIChcbiAgICAgIHNlbGVjdGVkUHJvamVjdCAhPSBudWxsICYmXG4gICAgICAhZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzZWxQcm9cIikuY2xhc3NMaXN0LmNvbnRhaW5zKFwiaGlkZVwiKVxuICAgIClcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2VsUHJvXCIpLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xuICAgIGlmIChzZWxlY3RlZFByb2plY3QgPT0gbnVsbClcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2VsUHJvXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xuICAgIGVsc2UgaWYgKFxuICAgICAgdG9kb1RpdGxlLnZhbHVlLmxlbmd0aCA+IDQyID09IHRydWUgfHxcbiAgICAgIHRvZG9UaXRsZS52YWx1ZS5sZW5ndGggPCAxID09IHRydWVcbiAgICApIHtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2VsUHJvXCIpLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xuICAgICAgdG9kb1RpdGxlLnN0eWxlLmJvcmRlciA9IFwiMnB4IHNvbGlkIHJlZFwiO1xuICAgIH0gZWxzZSBpZiAoc2VsZWN0ZWRQcm9qZWN0ICE9IFwibnVsbFwiKSB7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NlbFByb1wiKS5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcbiAgICAgIHRvZG9UaXRsZS5zdHlsZS5ib3JkZXIgPSBcIjFweCBzb2xpZCByZ2IoMTE4LCAxMTgsIDExOClcIjtcblxuICAgICAgdG9kb3MucHVzaCh7XG4gICAgICAgIHRpdGxlOiB0b2RvVGl0bGUudmFsdWUsXG4gICAgICAgIGRlc2M6IHRvZG9EZXNjLnZhbHVlID09IFwiXCIgPyBudWxsIDogdG9kb0Rlc2MudmFsdWUsXG4gICAgICAgIGRhdGU6IHRvZG9EYXRlLnZhbHVlID09IFwiXCIgPyBudWxsIDogdG9kb0RhdGUudmFsdWUsXG4gICAgICAgIHByaW86IHRvZG9QcmlvLFxuICAgICAgICBwcm9qZWN0OiBzZWxlY3RlZFByb2plY3QsXG4gICAgICAgIGRvbmU6IGZhbHNlLFxuICAgICAgICBpZDogTWF0aC5yYW5kb20oKSArIHRvZG9UaXRsZS52YWx1ZSArIHNlbGVjdGVkUHJvamVjdCxcbiAgICAgIH0pO1xuXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRvZG9zXCIsIEpTT04uc3RyaW5naWZ5KHRvZG9zKSk7XG5cbiAgICAgIHZpZXdUb2RvRnVuYyhzZWxlY3RlZFByb2plY3QpO1xuXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvZG9Gb3JtXCIpLnJlc2V0KCk7XG4gICAgfVxuICB9KTtcbn0pKCk7XG5cbmxldCB0b2RvTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9kb0xpc3RcIik7XG5cbihmdW5jdGlvbiAoKSB7XG4gIHRvZG9MaXN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGlmIChlLnRhcmdldC5pZCA9PSBcImRlbFRvZG9cIikge1xuICAgICAgdG9kb3MgPSB0b2Rvcy5maWx0ZXIoKHRvZG8pID0+IHRvZG8uaWQgIT0gZS50YXJnZXQucGFyZW50RWxlbWVudC5pZCk7XG5cbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidG9kb3NcIiwgSlNPTi5zdHJpbmdpZnkodG9kb3MpKTtcblxuICAgICAgdmlld1RvZG9GdW5jKHNlbGVjdGVkUHJvamVjdCk7XG4gICAgfVxuICB9KTtcbn0pKCk7XG5cbihmdW5jdGlvbiAoKSB7XG4gIHRvZG9MaXN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGlmIChlLnRhcmdldC5pZCA9PSBcImRvbmVcIikge1xuICAgICAgY29uc29sZS5sb2coZS50YXJnZXQucGFyZW50RWxlbWVudC5pZCk7XG4gICAgICB0b2RvcyA9IHRvZG9zLmZpbHRlcigodG9kbykgPT4ge1xuICAgICAgICBpZiAodG9kby5kb25lID09IGZhbHNlICYmIHRvZG8uaWQgPT0gZS50YXJnZXQucGFyZW50RWxlbWVudC5pZCkge1xuICAgICAgICAgIHRvZG8uZG9uZSA9IHRydWU7XG4gICAgICAgICAgcmV0dXJuIHRvZG87XG4gICAgICAgIH0gZWxzZSBpZiAodG9kby5kb25lID09IHRydWUgJiYgdG9kby5pZCA9PSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LmlkKSB7XG4gICAgICAgICAgdG9kby5kb25lID0gZmFsc2U7XG4gICAgICAgICAgcmV0dXJuIHRvZG87XG4gICAgICAgIH0gZWxzZSByZXR1cm4gdG9kbztcbiAgICAgIH0pO1xuXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRvZG9zXCIsIEpTT04uc3RyaW5naWZ5KHRvZG9zKSk7XG4gICAgfVxuICB9KTtcbn0pKCk7XG4iLCJsZXQgdG9kb0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvZG9MaXN0XCIpO1xuXG5jb25zdCB2aWV3VG9kb0Z1bmMgPSBmdW5jdGlvbiAocHJvKSB7XG4gIGxldCB0b2RvcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2Rvc1wiKSk7XG4gIHRvZG9MaXN0LmlubmVySFRNTCA9IFwiXCI7XG5cbiAgdG9kb3MuZm9yRWFjaCgodG9kbykgPT4ge1xuICAgIGxldCBpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIGl0ZW0uY2xhc3NMaXN0LmFkZChcInRvZG9JdGVtXCIpO1xuXG4gICAgbGV0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgIGxldCBkZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgbGV0IGRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBsZXQgcHJpbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGxldCBkb25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGRvbmUuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImNoZWNrYm94XCIpO1xuICAgIGRvbmUuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJkb25lXCIpO1xuICAgIGxldCBkZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRlbC50ZXh0Q29udGVudCA9IFwiUmVtb3ZlXCI7XG4gICAgZGVsLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZGVsVG9kb1wiKTtcblxuICAgIGlmICh0b2RvLnByb2plY3QgPT0gcHJvKSB7XG4gICAgICB0aXRsZS50ZXh0Q29udGVudCA9IHRvZG8udGl0bGU7XG4gICAgICBkZXNjLnRleHRDb250ZW50ID0gXCJEZXNjcmlwdGlvbjogXCIgKyB0b2RvLmRlc2M7XG4gICAgICBkYXRlLnRleHRDb250ZW50ID0gXCJEYXRlOiBcIiArIHRvZG8uZGF0ZTtcbiAgICAgIHByaW8udGV4dENvbnRlbnQgPSBcIlByaW9yaXR5OiBcIiArIHRvZG8ucHJpbztcbiAgICAgIGRvbmUuY2hlY2tlZCA9IHRvZG8uZG9uZTtcblxuICAgICAgaXRlbS5hcHBlbmQodGl0bGUpO1xuICAgICAgaWYgKHRvZG8uZGVzYykgaXRlbS5hcHBlbmQoZGVzYyk7XG4gICAgICBpZiAodG9kby5kYXRlKSBpdGVtLmFwcGVuZChkYXRlKTtcbiAgICAgIGlmICh0b2RvLnByaW8pIGl0ZW0uYXBwZW5kKHByaW8pO1xuICAgICAgaXRlbS5hcHBlbmQoZG9uZSk7XG4gICAgICBpdGVtLmFwcGVuZChkZWwpO1xuICAgICAgaXRlbS5pZCA9IHRvZG8uaWQ7XG5cbiAgICAgIHRvZG9MaXN0LmFwcGVuZChpdGVtKTtcbiAgICB9XG4gIH0pO1xufTtcblxuZXhwb3J0IHsgdmlld1RvZG9GdW5jIH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgXCIuL21vZHVsZXMvZm9ybXNcIjtcbmltcG9ydCBcIi4vbW9kdWxlcy90b2RvXCI7XG5pbXBvcnQgXCIuL21vZHVsZXMvcHJvamVjdFwiO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==