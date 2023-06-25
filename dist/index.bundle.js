"use strict";
(self["webpackChunkrestaurant_page"] = self["webpackChunkrestaurant_page"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: sans-serif;
    .border: 1px solid limegreen;
}

body {
    height: 100vh;
    background-color: #ffffff;
}

.container {
    height: 100%;
    display: flex;
    flex-direction: column;
}

.header {
    height: 46px;
    grid-area: header;
    background-color: #db5244;
}

.main {
    grid-area: main;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr 4.75fr;
    grid-template-areas:
        'sidebar workspace';
}

.sidebar {
    grid-area: sidebar;
    background-color: #fafafa;
}

.workspace {
    grid-area: workspace;
    padding: 2.25em 20.5em;
    display: flex;
    flex-direction: column;
}

.workspaceHeader {
    display: flex;
    align-items: flex-end;
    gap: 0.4em;
    margin-bottom: 1em;
}

.today {
    font-weight: bold;
    font-size: 20px;
    position: relative;
    top: 2px;
}

.date {
    color: #a2a3a5;
    font-size: 12px;
}

.newTaskDiv {
    display: flex;
    gap: 0.7em;
    user-select: none;
}

.newTaskIconDiv {
    height: 16px;
    width: 16px;
    border-radius: 50%;
}

.newTaskIcon {
    height: 100%;
    scale: 135%;
}

.addTask {
    align-self: center;
    color: #817d8c;
    font-size: 14px;
}

.newTaskDiv:hover .addTask {
    color: #db4c3d;
}

.newTaskDiv:hover {
    cursor: pointer;
}

.newTaskForm {
    border: 1px solid grey;
    border-radius: 10px;
    height: fit-content;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0.5em 0.6em;
    gap: 0.5em;
}

.takeNameInput {
    width: 100%;

    border: none;
    outline: none;
    font-size: 15px;
    font-weight: bold;
}

.takeNameInput::placeholder,
.taskDescriptionInput::placeholder {
    color: rgb(128, 128, 128, 0.7);
}

.taskDescriptionInput {
    width: 100%;
    border: none;
    outline: none;
    font-size: 12px;
}

.taskOptionDiv {
    width: 100%;
    display: flex;
    gap: 0.5em;
}

.prioritySelect {
    appearance: none;
    outline: none;
    padding: 5px 20px;
    background-color: inherit;
    border-radius: 5px;
    border: 1px solid rgb(128, 128, 128, 0.4);
}

.prioritySelect:hover {
    background-color: rgba(128, 128, 128, 0.1);
}

.priorityOption:hover {
    box-shadow: 0 0 10px 100px yellow inset;
}

.dateInput {
    border-radius: 5px;
    border: 1px solid rgb(128, 128, 128, 0.4);
    padding: 0 10px;
    user-select: none;
    outline: none;
}

.dateInput:hover {
    background-color: rgba(128, 128, 128, 0.1);
}

.projectList {
    appearance: none;
    outline: none;
    padding: 5px 20px;
    background-color: inherit;
    border-radius: 5px;
    border: 1px solid rgb(128, 128, 128, 0.4);
}

.taskSubmitDiv {
    display: flex;
    justify-content: flex-end;
    width: 100%;
    height: 100%;
    gap: 1em;
}

.taskSubmitDiv button {
    border: none;
    outline: none;
    appearance: none;
    padding: 5px 20px;
    width: 100px;
    border-radius: 5px;
}

.submitTask {
    background-color: rgb(221, 74, 68);
    color: white;
    font-weight: bold;
}

.submitTask:hover {
    background-color: rgb(196, 63, 59)
}

.cancel:hover {
    background-color: rgb(223, 223, 223);
}`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;IACI,UAAU;IACV,SAAS;IACT,sBAAsB;IACtB,uBAAuB;IACvB,4BAA4B;AAChC;;AAEA;IACI,aAAa;IACb,yBAAyB;AAC7B;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,YAAY;IACZ,iBAAiB;IACjB,yBAAyB;AAC7B;;AAEA;IACI,eAAe;IACf,YAAY;IACZ,aAAa;IACb,iCAAiC;IACjC;2BACuB;AAC3B;;AAEA;IACI,kBAAkB;IAClB,yBAAyB;AAC7B;;AAEA;IACI,oBAAoB;IACpB,sBAAsB;IACtB,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,qBAAqB;IACrB,UAAU;IACV,kBAAkB;AACtB;;AAEA;IACI,iBAAiB;IACjB,eAAe;IACf,kBAAkB;IAClB,QAAQ;AACZ;;AAEA;IACI,cAAc;IACd,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,UAAU;IACV,iBAAiB;AACrB;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,kBAAkB;AACtB;;AAEA;IACI,YAAY;IACZ,WAAW;AACf;;AAEA;IACI,kBAAkB;IAClB,cAAc;IACd,eAAe;AACnB;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,sBAAsB;IACtB,mBAAmB;IACnB,mBAAmB;IACnB,WAAW;IACX,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,oBAAoB;IACpB,UAAU;AACd;;AAEA;IACI,WAAW;;IAEX,YAAY;IACZ,aAAa;IACb,eAAe;IACf,iBAAiB;AACrB;;AAEA;;IAEI,8BAA8B;AAClC;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,aAAa;IACb,eAAe;AACnB;;AAEA;IACI,WAAW;IACX,aAAa;IACb,UAAU;AACd;;AAEA;IACI,gBAAgB;IAChB,aAAa;IACb,iBAAiB;IACjB,yBAAyB;IACzB,kBAAkB;IAClB,yCAAyC;AAC7C;;AAEA;IACI,0CAA0C;AAC9C;;AAEA;IACI,uCAAuC;AAC3C;;AAEA;IACI,kBAAkB;IAClB,yCAAyC;IACzC,eAAe;IACf,iBAAiB;IACjB,aAAa;AACjB;;AAEA;IACI,0CAA0C;AAC9C;;AAEA;IACI,gBAAgB;IAChB,aAAa;IACb,iBAAiB;IACjB,yBAAyB;IACzB,kBAAkB;IAClB,yCAAyC;AAC7C;;AAEA;IACI,aAAa;IACb,yBAAyB;IACzB,WAAW;IACX,YAAY;IACZ,QAAQ;AACZ;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,gBAAgB;IAChB,iBAAiB;IACjB,YAAY;IACZ,kBAAkB;AACtB;;AAEA;IACI,kCAAkC;IAClC,YAAY;IACZ,iBAAiB;AACrB;;AAEA;IACI;AACJ;;AAEA;IACI,oCAAoC;AACxC","sourcesContent":["* {\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n    font-family: sans-serif;\n    .border: 1px solid limegreen;\n}\n\nbody {\n    height: 100vh;\n    background-color: #ffffff;\n}\n\n.container {\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n}\n\n.header {\n    height: 46px;\n    grid-area: header;\n    background-color: #db5244;\n}\n\n.main {\n    grid-area: main;\n    height: 100%;\n    display: grid;\n    grid-template-columns: 1fr 4.75fr;\n    grid-template-areas:\n        'sidebar workspace';\n}\n\n.sidebar {\n    grid-area: sidebar;\n    background-color: #fafafa;\n}\n\n.workspace {\n    grid-area: workspace;\n    padding: 2.25em 20.5em;\n    display: flex;\n    flex-direction: column;\n}\n\n.workspaceHeader {\n    display: flex;\n    align-items: flex-end;\n    gap: 0.4em;\n    margin-bottom: 1em;\n}\n\n.today {\n    font-weight: bold;\n    font-size: 20px;\n    position: relative;\n    top: 2px;\n}\n\n.date {\n    color: #a2a3a5;\n    font-size: 12px;\n}\n\n.newTaskDiv {\n    display: flex;\n    gap: 0.7em;\n    user-select: none;\n}\n\n.newTaskIconDiv {\n    height: 16px;\n    width: 16px;\n    border-radius: 50%;\n}\n\n.newTaskIcon {\n    height: 100%;\n    scale: 135%;\n}\n\n.addTask {\n    align-self: center;\n    color: #817d8c;\n    font-size: 14px;\n}\n\n.newTaskDiv:hover .addTask {\n    color: #db4c3d;\n}\n\n.newTaskDiv:hover {\n    cursor: pointer;\n}\n\n.newTaskForm {\n    border: 1px solid grey;\n    border-radius: 10px;\n    height: fit-content;\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding: 0.5em 0.6em;\n    gap: 0.5em;\n}\n\n.takeNameInput {\n    width: 100%;\n\n    border: none;\n    outline: none;\n    font-size: 15px;\n    font-weight: bold;\n}\n\n.takeNameInput::placeholder,\n.taskDescriptionInput::placeholder {\n    color: rgb(128, 128, 128, 0.7);\n}\n\n.taskDescriptionInput {\n    width: 100%;\n    border: none;\n    outline: none;\n    font-size: 12px;\n}\n\n.taskOptionDiv {\n    width: 100%;\n    display: flex;\n    gap: 0.5em;\n}\n\n.prioritySelect {\n    appearance: none;\n    outline: none;\n    padding: 5px 20px;\n    background-color: inherit;\n    border-radius: 5px;\n    border: 1px solid rgb(128, 128, 128, 0.4);\n}\n\n.prioritySelect:hover {\n    background-color: rgba(128, 128, 128, 0.1);\n}\n\n.priorityOption:hover {\n    box-shadow: 0 0 10px 100px yellow inset;\n}\n\n.dateInput {\n    border-radius: 5px;\n    border: 1px solid rgb(128, 128, 128, 0.4);\n    padding: 0 10px;\n    user-select: none;\n    outline: none;\n}\n\n.dateInput:hover {\n    background-color: rgba(128, 128, 128, 0.1);\n}\n\n.projectList {\n    appearance: none;\n    outline: none;\n    padding: 5px 20px;\n    background-color: inherit;\n    border-radius: 5px;\n    border: 1px solid rgb(128, 128, 128, 0.4);\n}\n\n.taskSubmitDiv {\n    display: flex;\n    justify-content: flex-end;\n    width: 100%;\n    height: 100%;\n    gap: 1em;\n}\n\n.taskSubmitDiv button {\n    border: none;\n    outline: none;\n    appearance: none;\n    padding: 5px 20px;\n    width: 100px;\n    border-radius: 5px;\n}\n\n.submitTask {\n    background-color: rgb(221, 74, 68);\n    color: white;\n    font-weight: bold;\n}\n\n.submitTask:hover {\n    background-color: rgb(196, 63, 59)\n}\n\n.cancel:hover {\n    background-color: rgb(223, 223, 223);\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
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
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/domBuilds.js":
/*!**************************!*\
  !*** ./src/domBuilds.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createAddTask: () => (/* binding */ createAddTask),
/* harmony export */   populateForm: () => (/* binding */ populateForm)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./src/index.js");
/* harmony import */ var _icons_addTaskRed_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icons/addTaskRed.svg */ "./src/icons/addTaskRed.svg");
/* harmony import */ var _icons_addTaskWhite_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icons/addTaskWhite.svg */ "./src/icons/addTaskWhite.svg");





function populateForm() {
    let form = document.getElementById('newTaskForm');



    let taskNameInput = document.createElement('input');
    taskNameInput.id = 'taskNameInput'; taskNameInput.classList.add('takeNameInput');
    taskNameInput.type = 'text'; taskNameInput.placeholder = 'Task name';


    let taskDescriptionInput = document.createElement('input');
    taskDescriptionInput.id = 'taskDescriptionInput'; taskDescriptionInput.classList.add('taskDescriptionInput');
    taskDescriptionInput.type = 'text'; taskDescriptionInput.placeholder = 'Description';


    let taskOptionDiv = document.createElement('div');
    taskOptionDiv.classList.add('taskOptionDiv');


    let prioritySelect = document.createElement('select');
    prioritySelect.id = 'prioritySelect'; prioritySelect.classList.add('prioritySelect');

    let placeholderOption = document.createElement('option');
    placeholderOption.classList.add('priorityOption'); placeholderOption.disabled = true;
    placeholderOption.selected = true; placeholderOption.hidden = true; placeholderOption.textContent = '🏳️ Priority';

    let option1 = document.createElement('option');
    option1.classList.add('priorityOption'); option1.textContent = 'Priority 1';
    let option2 = document.createElement('option');
    option2.classList.add('priorityOption'); option2.textContent = 'Priority 2';
    let option3 = document.createElement('option');
    option3.classList.add('priorityOption'); option3.textContent = 'Priority 3';
    let option4 = document.createElement('option');
    option4.classList.add('priorityOption'); option4.textContent = 'Priority 4';


    let dateInput = document.createElement('input');
    dateInput.classList.add('dateInput'); dateInput.type = 'date';
    dateInput.placeholder = 'Today';


    let projectList = document.createElement('select');
    projectList.id = 'projectList'; projectList.classList.add('projectList');
    let toDoList = document.createElement('option'); toDoList.selected = true; toDoList.textContent = 'Daily To Do';


    let taskSubmitDiv = document.createElement('div');
    taskSubmitDiv.classList.add('taskSubmitDiv');

    let submitTask = document.createElement('button');
    submitTask.id = 'submitTask'; submitTask.classList.add('submitTask'); submitTask.textContent = 'Add task';


    let cancel = document.createElement('button');
    cancel.id = 'cancel'; cancel.classList.add('cancel'); cancel.textContent = 'cancel';

    cancel.addEventListener('click', _index_js__WEBPACK_IMPORTED_MODULE_0__.cancelNewTask);

    taskSubmitDiv.append(cancel, submitTask);
    projectList.append(toDoList);
    prioritySelect.append(placeholderOption, option1, option2, option3, option4)
    taskOptionDiv.append(dateInput, prioritySelect, projectList);
    form.append(taskNameInput, taskDescriptionInput, taskOptionDiv, taskSubmitDiv);

    taskNameInput.focus();
}

function createAddTask() {
    let newTaskDiv = document.createElement('div');
    newTaskDiv.id = 'newTaskDiv'; newTaskDiv.classList.add('newTaskDiv');

    let newTaskIconDiv = document.createElement('div');
    newTaskIconDiv.id = 'newTaskIconDiv'; newTaskIconDiv.classList.add('newTaskIconDiv');

    let newTaskIcon = document.createElement('img');
    newTaskIcon.classList.add('newTaskIcon');
    newTaskIcon.src = _icons_addTaskRed_svg__WEBPACK_IMPORTED_MODULE_1__;

    function mouseenter() {
        newTaskIcon.src = _icons_addTaskWhite_svg__WEBPACK_IMPORTED_MODULE_2__;
        console.log('enter');
    }

    function mouseleave() {
        newTaskIcon.src = _icons_addTaskRed_svg__WEBPACK_IMPORTED_MODULE_1__;
        console.log('leave');
    }

    newTaskDiv.addEventListener('mouseenter', mouseenter);
    newTaskDiv.addEventListener('mouseleave', mouseleave);

    function newTask() {
        newTaskOrder();
        newTaskDiv.removeEventListener('mouseenter', mouseenter);
        newTaskDiv.removeEventListener('mouseleave', mouseleave);
        newTaskDiv.removeEventListener('click', newTask);
    }

    newTaskDiv.addEventListener('click', newTask);

    let addTask = document.createElement('div');
    addTask.id = 'addTask'; addTask.classList.add('addTask');
    addTask.textContent = 'Add task'



    newTaskIconDiv.append(newTaskIcon);
    newTaskDiv.append(newTaskIconDiv, addTask);

    return newTaskDiv;
}



/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cancelNewTask: () => (/* binding */ cancelNewTask),
/* harmony export */   newTaskOrder: () => (/* binding */ newTaskOrder)
/* harmony export */ });
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _initialize_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./initialize.js */ "./src/initialize.js");
/* harmony import */ var _domBuilds__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./domBuilds */ "./src/domBuilds.js");
/* harmony import */ var _icons_prioflag_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icons/prioflag.svg */ "./src/icons/prioflag.svg");
/* harmony import */ var _icons_addTaskRed_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./icons/addTaskRed.svg */ "./src/icons/addTaskRed.svg");
/* harmony import */ var _icons_addTaskWhite_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./icons/addTaskWhite.svg */ "./src/icons/addTaskWhite.svg");








(0,_initialize_js__WEBPACK_IMPORTED_MODULE_1__.initialize)();

function newTaskOrder() {
    //console.log('test');
    let newTaskDiv = document.getElementById('newTaskDiv');

    while (newTaskDiv.firstChild) {
        newTaskDiv.removeChild(newTaskDiv.firstChild);
    }

    let newTaskForm = document.createElement('div');
    newTaskForm.id = 'newTaskForm'; newTaskForm.classList.add('newTaskForm');

    newTaskDiv.append(newTaskForm);
    (0,_domBuilds__WEBPACK_IMPORTED_MODULE_2__.populateForm)();





}

function cancelNewTask() {
    let oldNewTaskDiv = document.getElementById('newTaskDiv');
    oldNewTaskDiv.remove();

    let newTaskDiv = (0,_domBuilds__WEBPACK_IMPORTED_MODULE_2__.createAddTask)();
    let workspace = document.getElementById('workspace');
    workspace.append(newTaskDiv);
}





/***/ }),

/***/ "./src/initialize.js":
/*!***************************!*\
  !*** ./src/initialize.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initialize: () => (/* binding */ initialize)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./src/index.js");
/* harmony import */ var _domBuilds_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domBuilds.js */ "./src/domBuilds.js");



const initialize = function () {
    let container = document.createElement('div');
    container.id = 'container'; container.classList.add('container');

    let header = document.createElement('div');
    header.id = 'header'; header.classList.add('header');

    let main = document.createElement('div');
    main.id = 'main'; main.classList.add('main');

    let sidebar = document.createElement('div');
    sidebar.id = 'sidebar'; sidebar.classList.add('sidebar');

    let workspace = document.createElement('div');
    workspace.id = 'workspace'; workspace.classList.add('workspace');

    let workspaceHeader = document.createElement('div');
    workspaceHeader.id = 'workspaceHeader'; workspaceHeader.classList.add('workspaceHeader');

    let today = document.createElement('p');
    today.classList.add('today'); today.textContent = 'Today';

    let date = document.createElement('p');
    date.id = 'date'; date.classList.add('date');
    date.textContent = new Date().toString().split(' ').slice(0, 3).join(' ');

    let newTaskDiv = (0,_domBuilds_js__WEBPACK_IMPORTED_MODULE_1__.createAddTask)();

    workspaceHeader.append(today, date);
    workspace.append(workspaceHeader, newTaskDiv);
    main.append(sidebar, workspace);
    container.append(header, main);
    document.body.append(container);
};



/***/ }),

/***/ "./src/icons/addTaskRed.svg":
/*!**********************************!*\
  !*** ./src/icons/addTaskRed.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e035847f8fef84c8917c.svg";

/***/ }),

/***/ "./src/icons/addTaskWhite.svg":
/*!************************************!*\
  !*** ./src/icons/addTaskWhite.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "076af2a1932cf9dfc8da.svg";

/***/ }),

/***/ "./src/icons/prioflag.svg":
/*!********************************!*\
  !*** ./src/icons/prioflag.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4fae929a3420ae000a31.svg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDekYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUMsT0FBTyxpRkFBaUYsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxNQUFNLE9BQU8sT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFh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QUNBLGtDQUFrQzs7QUFFbEM7QUFDQSxzQkFBc0I7QUFDdEI7O0FBRUEscUJBQXFCLDREQUFhOztBQUVsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvZG9tQnVpbGRzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5pdGlhbGl6ZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKiB7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IDA7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgICAuYm9yZGVyOiAxcHggc29saWQgbGltZWdyZWVuO1xufVxuXG5ib2R5IHtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG59XG5cbi5jb250YWluZXIge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5oZWFkZXIge1xuICAgIGhlaWdodDogNDZweDtcbiAgICBncmlkLWFyZWE6IGhlYWRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGI1MjQ0O1xufVxuXG4ubWFpbiB7XG4gICAgZ3JpZC1hcmVhOiBtYWluO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDQuNzVmcjtcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxuICAgICAgICAnc2lkZWJhciB3b3Jrc3BhY2UnO1xufVxuXG4uc2lkZWJhciB7XG4gICAgZ3JpZC1hcmVhOiBzaWRlYmFyO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XG59XG5cbi53b3Jrc3BhY2Uge1xuICAgIGdyaWQtYXJlYTogd29ya3NwYWNlO1xuICAgIHBhZGRpbmc6IDIuMjVlbSAyMC41ZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4ud29ya3NwYWNlSGVhZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgICBnYXA6IDAuNGVtO1xuICAgIG1hcmdpbi1ib3R0b206IDFlbTtcbn1cblxuLnRvZGF5IHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogMnB4O1xufVxuXG4uZGF0ZSB7XG4gICAgY29sb3I6ICNhMmEzYTU7XG4gICAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4ubmV3VGFza0RpdiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDAuN2VtO1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xufVxuXG4ubmV3VGFza0ljb25EaXYge1xuICAgIGhlaWdodDogMTZweDtcbiAgICB3aWR0aDogMTZweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5uZXdUYXNrSWNvbiB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHNjYWxlOiAxMzUlO1xufVxuXG4uYWRkVGFzayB7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgIGNvbG9yOiAjODE3ZDhjO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLm5ld1Rhc2tEaXY6aG92ZXIgLmFkZFRhc2sge1xuICAgIGNvbG9yOiAjZGI0YzNkO1xufVxuXG4ubmV3VGFza0Rpdjpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubmV3VGFza0Zvcm0ge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDAuNWVtIDAuNmVtO1xuICAgIGdhcDogMC41ZW07XG59XG5cbi50YWtlTmFtZUlucHV0IHtcbiAgICB3aWR0aDogMTAwJTtcblxuICAgIGJvcmRlcjogbm9uZTtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnRha2VOYW1lSW5wdXQ6OnBsYWNlaG9sZGVyLFxuLnRhc2tEZXNjcmlwdGlvbklucHV0OjpwbGFjZWhvbGRlciB7XG4gICAgY29sb3I6IHJnYigxMjgsIDEyOCwgMTI4LCAwLjcpO1xufVxuXG4udGFza0Rlc2NyaXB0aW9uSW5wdXQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLnRhc2tPcHRpb25EaXYge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiAwLjVlbTtcbn1cblxuLnByaW9yaXR5U2VsZWN0IHtcbiAgICBhcHBlYXJhbmNlOiBub25lO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgcGFkZGluZzogNXB4IDIwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDEyOCwgMTI4LCAxMjgsIDAuNCk7XG59XG5cbi5wcmlvcml0eVNlbGVjdDpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjEpO1xufVxuXG4ucHJpb3JpdHlPcHRpb246aG92ZXIge1xuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IDEwMHB4IHllbGxvdyBpbnNldDtcbn1cblxuLmRhdGVJbnB1dCB7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxMjgsIDEyOCwgMTI4LCAwLjQpO1xuICAgIHBhZGRpbmc6IDAgMTBweDtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICBvdXRsaW5lOiBub25lO1xufVxuXG4uZGF0ZUlucHV0OmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuMSk7XG59XG5cbi5wcm9qZWN0TGlzdCB7XG4gICAgYXBwZWFyYW5jZTogbm9uZTtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIHBhZGRpbmc6IDVweCAyMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxMjgsIDEyOCwgMTI4LCAwLjQpO1xufVxuXG4udGFza1N1Ym1pdERpdiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBnYXA6IDFlbTtcbn1cblxuLnRhc2tTdWJtaXREaXYgYnV0dG9uIHtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBhcHBlYXJhbmNlOiBub25lO1xuICAgIHBhZGRpbmc6IDVweCAyMHB4O1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5zdWJtaXRUYXNrIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjIxLCA3NCwgNjgpO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnN1Ym1pdFRhc2s6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTYsIDYzLCA1OSlcbn1cblxuLmNhbmNlbDpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyMywgMjIzLCAyMjMpO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxVQUFVO0lBQ1YsU0FBUztJQUNULHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGlCQUFpQjtJQUNqQix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsWUFBWTtJQUNaLGFBQWE7SUFDYixpQ0FBaUM7SUFDakM7MkJBQ3VCO0FBQzNCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsVUFBVTtJQUNWLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLFFBQVE7QUFDWjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtJQUNiLFVBQVU7SUFDVixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsY0FBYztJQUNkLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksV0FBVzs7SUFFWCxZQUFZO0lBQ1osYUFBYTtJQUNiLGVBQWU7SUFDZixpQkFBaUI7QUFDckI7O0FBRUE7O0lBRUksOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixhQUFhO0lBQ2IsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2IsVUFBVTtBQUNkOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixpQkFBaUI7SUFDakIseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQix5Q0FBeUM7QUFDN0M7O0FBRUE7SUFDSSwwQ0FBMEM7QUFDOUM7O0FBRUE7SUFDSSx1Q0FBdUM7QUFDM0M7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIseUNBQXlDO0lBQ3pDLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLDBDQUEwQztBQUM5Qzs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIseUNBQXlDO0FBQzdDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHlCQUF5QjtJQUN6QixXQUFXO0lBQ1gsWUFBWTtJQUNaLFFBQVE7QUFDWjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0NBQWtDO0lBQ2xDLFlBQVk7SUFDWixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0ksb0NBQW9DO0FBQ3hDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcbiAgICAuYm9yZGVyOiAxcHggc29saWQgbGltZWdyZWVuO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmhlYWRlciB7XFxuICAgIGhlaWdodDogNDZweDtcXG4gICAgZ3JpZC1hcmVhOiBoZWFkZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkYjUyNDQ7XFxufVxcblxcbi5tYWluIHtcXG4gICAgZ3JpZC1hcmVhOiBtYWluO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDQuNzVmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgICAgICdzaWRlYmFyIHdvcmtzcGFjZSc7XFxufVxcblxcbi5zaWRlYmFyIHtcXG4gICAgZ3JpZC1hcmVhOiBzaWRlYmFyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xcbn1cXG5cXG4ud29ya3NwYWNlIHtcXG4gICAgZ3JpZC1hcmVhOiB3b3Jrc3BhY2U7XFxuICAgIHBhZGRpbmc6IDIuMjVlbSAyMC41ZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi53b3Jrc3BhY2VIZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxuICAgIGdhcDogMC40ZW07XFxuICAgIG1hcmdpbi1ib3R0b206IDFlbTtcXG59XFxuXFxuLnRvZGF5IHtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0b3A6IDJweDtcXG59XFxuXFxuLmRhdGUge1xcbiAgICBjb2xvcjogI2EyYTNhNTtcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcbn1cXG5cXG4ubmV3VGFza0RpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMC43ZW07XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5cXG4ubmV3VGFza0ljb25EaXYge1xcbiAgICBoZWlnaHQ6IDE2cHg7XFxuICAgIHdpZHRoOiAxNnB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcblxcbi5uZXdUYXNrSWNvbiB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgc2NhbGU6IDEzNSU7XFxufVxcblxcbi5hZGRUYXNrIHtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBjb2xvcjogIzgxN2Q4YztcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbn1cXG5cXG4ubmV3VGFza0Rpdjpob3ZlciAuYWRkVGFzayB7XFxuICAgIGNvbG9yOiAjZGI0YzNkO1xcbn1cXG5cXG4ubmV3VGFza0Rpdjpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLm5ld1Rhc2tGb3JtIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JleTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDAuNWVtIDAuNmVtO1xcbiAgICBnYXA6IDAuNWVtO1xcbn1cXG5cXG4udGFrZU5hbWVJbnB1dCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcblxcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi50YWtlTmFtZUlucHV0OjpwbGFjZWhvbGRlcixcXG4udGFza0Rlc2NyaXB0aW9uSW5wdXQ6OnBsYWNlaG9sZGVyIHtcXG4gICAgY29sb3I6IHJnYigxMjgsIDEyOCwgMTI4LCAwLjcpO1xcbn1cXG5cXG4udGFza0Rlc2NyaXB0aW9uSW5wdXQge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBmb250LXNpemU6IDEycHg7XFxufVxcblxcbi50YXNrT3B0aW9uRGl2IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMC41ZW07XFxufVxcblxcbi5wcmlvcml0eVNlbGVjdCB7XFxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDVweCAyMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxMjgsIDEyOCwgMTI4LCAwLjQpO1xcbn1cXG5cXG4ucHJpb3JpdHlTZWxlY3Q6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuMSk7XFxufVxcblxcbi5wcmlvcml0eU9wdGlvbjpob3ZlciB7XFxuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IDEwMHB4IHllbGxvdyBpbnNldDtcXG59XFxuXFxuLmRhdGVJbnB1dCB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDEyOCwgMTI4LCAxMjgsIDAuNCk7XFxuICAgIHBhZGRpbmc6IDAgMTBweDtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi5kYXRlSW5wdXQ6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuMSk7XFxufVxcblxcbi5wcm9qZWN0TGlzdCB7XFxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDVweCAyMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxMjgsIDEyOCwgMTI4LCAwLjQpO1xcbn1cXG5cXG4udGFza1N1Ym1pdERpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGdhcDogMWVtO1xcbn1cXG5cXG4udGFza1N1Ym1pdERpdiBidXR0b24ge1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDVweCAyMHB4O1xcbiAgICB3aWR0aDogMTAwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLnN1Ym1pdFRhc2sge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjIxLCA3NCwgNjgpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uc3VibWl0VGFzazpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTYsIDYzLCA1OSlcXG59XFxuXFxuLmNhbmNlbDpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjMsIDIyMywgMjIzKTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgY2FuY2VsTmV3VGFzayB9IGZyb20gJy4vaW5kZXguanMnO1xuXG5pbXBvcnQgYWRkVGFza1JlZCBmcm9tICcuL2ljb25zL2FkZFRhc2tSZWQuc3ZnJ1xuaW1wb3J0IGFkZFRhc2tXaGl0ZSBmcm9tICcuL2ljb25zL2FkZFRhc2tXaGl0ZS5zdmcnXG5cbmZ1bmN0aW9uIHBvcHVsYXRlRm9ybSgpIHtcbiAgICBsZXQgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXdUYXNrRm9ybScpO1xuXG5cblxuICAgIGxldCB0YXNrTmFtZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICB0YXNrTmFtZUlucHV0LmlkID0gJ3Rhc2tOYW1lSW5wdXQnOyB0YXNrTmFtZUlucHV0LmNsYXNzTGlzdC5hZGQoJ3Rha2VOYW1lSW5wdXQnKTtcbiAgICB0YXNrTmFtZUlucHV0LnR5cGUgPSAndGV4dCc7IHRhc2tOYW1lSW5wdXQucGxhY2Vob2xkZXIgPSAnVGFzayBuYW1lJztcblxuXG4gICAgbGV0IHRhc2tEZXNjcmlwdGlvbklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICB0YXNrRGVzY3JpcHRpb25JbnB1dC5pZCA9ICd0YXNrRGVzY3JpcHRpb25JbnB1dCc7IHRhc2tEZXNjcmlwdGlvbklucHV0LmNsYXNzTGlzdC5hZGQoJ3Rhc2tEZXNjcmlwdGlvbklucHV0Jyk7XG4gICAgdGFza0Rlc2NyaXB0aW9uSW5wdXQudHlwZSA9ICd0ZXh0JzsgdGFza0Rlc2NyaXB0aW9uSW5wdXQucGxhY2Vob2xkZXIgPSAnRGVzY3JpcHRpb24nO1xuXG5cbiAgICBsZXQgdGFza09wdGlvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRhc2tPcHRpb25EaXYuY2xhc3NMaXN0LmFkZCgndGFza09wdGlvbkRpdicpO1xuXG5cbiAgICBsZXQgcHJpb3JpdHlTZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgICBwcmlvcml0eVNlbGVjdC5pZCA9ICdwcmlvcml0eVNlbGVjdCc7IHByaW9yaXR5U2VsZWN0LmNsYXNzTGlzdC5hZGQoJ3ByaW9yaXR5U2VsZWN0Jyk7XG5cbiAgICBsZXQgcGxhY2Vob2xkZXJPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICBwbGFjZWhvbGRlck9wdGlvbi5jbGFzc0xpc3QuYWRkKCdwcmlvcml0eU9wdGlvbicpOyBwbGFjZWhvbGRlck9wdGlvbi5kaXNhYmxlZCA9IHRydWU7XG4gICAgcGxhY2Vob2xkZXJPcHRpb24uc2VsZWN0ZWQgPSB0cnVlOyBwbGFjZWhvbGRlck9wdGlvbi5oaWRkZW4gPSB0cnVlOyBwbGFjZWhvbGRlck9wdGlvbi50ZXh0Q29udGVudCA9ICfwn4+z77iPIFByaW9yaXR5JztcblxuICAgIGxldCBvcHRpb24xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgb3B0aW9uMS5jbGFzc0xpc3QuYWRkKCdwcmlvcml0eU9wdGlvbicpOyBvcHRpb24xLnRleHRDb250ZW50ID0gJ1ByaW9yaXR5IDEnO1xuICAgIGxldCBvcHRpb24yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgb3B0aW9uMi5jbGFzc0xpc3QuYWRkKCdwcmlvcml0eU9wdGlvbicpOyBvcHRpb24yLnRleHRDb250ZW50ID0gJ1ByaW9yaXR5IDInO1xuICAgIGxldCBvcHRpb24zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgb3B0aW9uMy5jbGFzc0xpc3QuYWRkKCdwcmlvcml0eU9wdGlvbicpOyBvcHRpb24zLnRleHRDb250ZW50ID0gJ1ByaW9yaXR5IDMnO1xuICAgIGxldCBvcHRpb240ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgb3B0aW9uNC5jbGFzc0xpc3QuYWRkKCdwcmlvcml0eU9wdGlvbicpOyBvcHRpb240LnRleHRDb250ZW50ID0gJ1ByaW9yaXR5IDQnO1xuXG5cbiAgICBsZXQgZGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBkYXRlSW5wdXQuY2xhc3NMaXN0LmFkZCgnZGF0ZUlucHV0Jyk7IGRhdGVJbnB1dC50eXBlID0gJ2RhdGUnO1xuICAgIGRhdGVJbnB1dC5wbGFjZWhvbGRlciA9ICdUb2RheSc7XG5cblxuICAgIGxldCBwcm9qZWN0TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICAgIHByb2plY3RMaXN0LmlkID0gJ3Byb2plY3RMaXN0JzsgcHJvamVjdExpc3QuY2xhc3NMaXN0LmFkZCgncHJvamVjdExpc3QnKTtcbiAgICBsZXQgdG9Eb0xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTsgdG9Eb0xpc3Quc2VsZWN0ZWQgPSB0cnVlOyB0b0RvTGlzdC50ZXh0Q29udGVudCA9ICdEYWlseSBUbyBEbyc7XG5cblxuICAgIGxldCB0YXNrU3VibWl0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGFza1N1Ym1pdERpdi5jbGFzc0xpc3QuYWRkKCd0YXNrU3VibWl0RGl2Jyk7XG5cbiAgICBsZXQgc3VibWl0VGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHN1Ym1pdFRhc2suaWQgPSAnc3VibWl0VGFzayc7IHN1Ym1pdFRhc2suY2xhc3NMaXN0LmFkZCgnc3VibWl0VGFzaycpOyBzdWJtaXRUYXNrLnRleHRDb250ZW50ID0gJ0FkZCB0YXNrJztcblxuXG4gICAgbGV0IGNhbmNlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNhbmNlbC5pZCA9ICdjYW5jZWwnOyBjYW5jZWwuY2xhc3NMaXN0LmFkZCgnY2FuY2VsJyk7IGNhbmNlbC50ZXh0Q29udGVudCA9ICdjYW5jZWwnO1xuXG4gICAgY2FuY2VsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2FuY2VsTmV3VGFzayk7XG5cbiAgICB0YXNrU3VibWl0RGl2LmFwcGVuZChjYW5jZWwsIHN1Ym1pdFRhc2spO1xuICAgIHByb2plY3RMaXN0LmFwcGVuZCh0b0RvTGlzdCk7XG4gICAgcHJpb3JpdHlTZWxlY3QuYXBwZW5kKHBsYWNlaG9sZGVyT3B0aW9uLCBvcHRpb24xLCBvcHRpb24yLCBvcHRpb24zLCBvcHRpb240KVxuICAgIHRhc2tPcHRpb25EaXYuYXBwZW5kKGRhdGVJbnB1dCwgcHJpb3JpdHlTZWxlY3QsIHByb2plY3RMaXN0KTtcbiAgICBmb3JtLmFwcGVuZCh0YXNrTmFtZUlucHV0LCB0YXNrRGVzY3JpcHRpb25JbnB1dCwgdGFza09wdGlvbkRpdiwgdGFza1N1Ym1pdERpdik7XG5cbiAgICB0YXNrTmFtZUlucHV0LmZvY3VzKCk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUFkZFRhc2soKSB7XG4gICAgbGV0IG5ld1Rhc2tEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBuZXdUYXNrRGl2LmlkID0gJ25ld1Rhc2tEaXYnOyBuZXdUYXNrRGl2LmNsYXNzTGlzdC5hZGQoJ25ld1Rhc2tEaXYnKTtcblxuICAgIGxldCBuZXdUYXNrSWNvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG5ld1Rhc2tJY29uRGl2LmlkID0gJ25ld1Rhc2tJY29uRGl2JzsgbmV3VGFza0ljb25EaXYuY2xhc3NMaXN0LmFkZCgnbmV3VGFza0ljb25EaXYnKTtcblxuICAgIGxldCBuZXdUYXNrSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIG5ld1Rhc2tJY29uLmNsYXNzTGlzdC5hZGQoJ25ld1Rhc2tJY29uJyk7XG4gICAgbmV3VGFza0ljb24uc3JjID0gYWRkVGFza1JlZDtcblxuICAgIGZ1bmN0aW9uIG1vdXNlZW50ZXIoKSB7XG4gICAgICAgIG5ld1Rhc2tJY29uLnNyYyA9IGFkZFRhc2tXaGl0ZTtcbiAgICAgICAgY29uc29sZS5sb2coJ2VudGVyJyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbW91c2VsZWF2ZSgpIHtcbiAgICAgICAgbmV3VGFza0ljb24uc3JjID0gYWRkVGFza1JlZDtcbiAgICAgICAgY29uc29sZS5sb2coJ2xlYXZlJyk7XG4gICAgfVxuXG4gICAgbmV3VGFza0Rpdi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgbW91c2VlbnRlcik7XG4gICAgbmV3VGFza0Rpdi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgbW91c2VsZWF2ZSk7XG5cbiAgICBmdW5jdGlvbiBuZXdUYXNrKCkge1xuICAgICAgICBuZXdUYXNrT3JkZXIoKTtcbiAgICAgICAgbmV3VGFza0Rpdi5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgbW91c2VlbnRlcik7XG4gICAgICAgIG5ld1Rhc2tEaXYucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIG1vdXNlbGVhdmUpO1xuICAgICAgICBuZXdUYXNrRGl2LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbmV3VGFzayk7XG4gICAgfVxuXG4gICAgbmV3VGFza0Rpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG5ld1Rhc2spO1xuXG4gICAgbGV0IGFkZFRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBhZGRUYXNrLmlkID0gJ2FkZFRhc2snOyBhZGRUYXNrLmNsYXNzTGlzdC5hZGQoJ2FkZFRhc2snKTtcbiAgICBhZGRUYXNrLnRleHRDb250ZW50ID0gJ0FkZCB0YXNrJ1xuXG5cblxuICAgIG5ld1Rhc2tJY29uRGl2LmFwcGVuZChuZXdUYXNrSWNvbik7XG4gICAgbmV3VGFza0Rpdi5hcHBlbmQobmV3VGFza0ljb25EaXYsIGFkZFRhc2spO1xuXG4gICAgcmV0dXJuIG5ld1Rhc2tEaXY7XG59XG5cbmV4cG9ydCB7IHBvcHVsYXRlRm9ybSwgY3JlYXRlQWRkVGFzayB9IiwiaW1wb3J0ICcuL3N0eWxlcy5jc3MnXG5pbXBvcnQgeyBpbml0aWFsaXplIH0gZnJvbSAnLi9pbml0aWFsaXplLmpzJ1xuaW1wb3J0IHsgY3JlYXRlQWRkVGFzayB9IGZyb20gJy4vZG9tQnVpbGRzJ1xuaW1wb3J0IHsgcG9wdWxhdGVGb3JtIH0gZnJvbSAnLi9kb21CdWlsZHMnXG5pbXBvcnQgcHJpb2ZsYWdXaGl0ZSBmcm9tICcuL2ljb25zL3ByaW9mbGFnLnN2ZydcbmltcG9ydCBhZGRUYXNrUmVkIGZyb20gJy4vaWNvbnMvYWRkVGFza1JlZC5zdmcnXG5pbXBvcnQgYWRkVGFza1doaXRlIGZyb20gJy4vaWNvbnMvYWRkVGFza1doaXRlLnN2ZydcblxuaW5pdGlhbGl6ZSgpO1xuXG5mdW5jdGlvbiBuZXdUYXNrT3JkZXIoKSB7XG4gICAgLy9jb25zb2xlLmxvZygndGVzdCcpO1xuICAgIGxldCBuZXdUYXNrRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ld1Rhc2tEaXYnKTtcblxuICAgIHdoaWxlIChuZXdUYXNrRGl2LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgbmV3VGFza0Rpdi5yZW1vdmVDaGlsZChuZXdUYXNrRGl2LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIGxldCBuZXdUYXNrRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG5ld1Rhc2tGb3JtLmlkID0gJ25ld1Rhc2tGb3JtJzsgbmV3VGFza0Zvcm0uY2xhc3NMaXN0LmFkZCgnbmV3VGFza0Zvcm0nKTtcblxuICAgIG5ld1Rhc2tEaXYuYXBwZW5kKG5ld1Rhc2tGb3JtKTtcbiAgICBwb3B1bGF0ZUZvcm0oKTtcblxuXG5cblxuXG59XG5cbmZ1bmN0aW9uIGNhbmNlbE5ld1Rhc2soKSB7XG4gICAgbGV0IG9sZE5ld1Rhc2tEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3VGFza0RpdicpO1xuICAgIG9sZE5ld1Rhc2tEaXYucmVtb3ZlKCk7XG5cbiAgICBsZXQgbmV3VGFza0RpdiA9IGNyZWF0ZUFkZFRhc2soKTtcbiAgICBsZXQgd29ya3NwYWNlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dvcmtzcGFjZScpO1xuICAgIHdvcmtzcGFjZS5hcHBlbmQobmV3VGFza0Rpdik7XG59XG5cblxuXG5leHBvcnQgeyBuZXdUYXNrT3JkZXIsIGNhbmNlbE5ld1Rhc2sgfSIsImltcG9ydCB7IG5ld1Rhc2tPcmRlciB9IGZyb20gJy4vaW5kZXguanMnO1xuaW1wb3J0IHsgY3JlYXRlQWRkVGFzayB9IGZyb20gJy4vZG9tQnVpbGRzLmpzJztcblxuY29uc3QgaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFpbmVyLmlkID0gJ2NvbnRhaW5lcic7IGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb250YWluZXInKTtcblxuICAgIGxldCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBoZWFkZXIuaWQgPSAnaGVhZGVyJzsgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2hlYWRlcicpO1xuXG4gICAgbGV0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtYWluLmlkID0gJ21haW4nOyBtYWluLmNsYXNzTGlzdC5hZGQoJ21haW4nKTtcblxuICAgIGxldCBzaWRlYmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc2lkZWJhci5pZCA9ICdzaWRlYmFyJzsgc2lkZWJhci5jbGFzc0xpc3QuYWRkKCdzaWRlYmFyJyk7XG5cbiAgICBsZXQgd29ya3NwYWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgd29ya3NwYWNlLmlkID0gJ3dvcmtzcGFjZSc7IHdvcmtzcGFjZS5jbGFzc0xpc3QuYWRkKCd3b3Jrc3BhY2UnKTtcblxuICAgIGxldCB3b3Jrc3BhY2VIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB3b3Jrc3BhY2VIZWFkZXIuaWQgPSAnd29ya3NwYWNlSGVhZGVyJzsgd29ya3NwYWNlSGVhZGVyLmNsYXNzTGlzdC5hZGQoJ3dvcmtzcGFjZUhlYWRlcicpO1xuXG4gICAgbGV0IHRvZGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHRvZGF5LmNsYXNzTGlzdC5hZGQoJ3RvZGF5Jyk7IHRvZGF5LnRleHRDb250ZW50ID0gJ1RvZGF5JztcblxuICAgIGxldCBkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGRhdGUuaWQgPSAnZGF0ZSc7IGRhdGUuY2xhc3NMaXN0LmFkZCgnZGF0ZScpO1xuICAgIGRhdGUudGV4dENvbnRlbnQgPSBuZXcgRGF0ZSgpLnRvU3RyaW5nKCkuc3BsaXQoJyAnKS5zbGljZSgwLCAzKS5qb2luKCcgJyk7XG5cbiAgICBsZXQgbmV3VGFza0RpdiA9IGNyZWF0ZUFkZFRhc2soKTtcblxuICAgIHdvcmtzcGFjZUhlYWRlci5hcHBlbmQodG9kYXksIGRhdGUpO1xuICAgIHdvcmtzcGFjZS5hcHBlbmQod29ya3NwYWNlSGVhZGVyLCBuZXdUYXNrRGl2KTtcbiAgICBtYWluLmFwcGVuZChzaWRlYmFyLCB3b3Jrc3BhY2UpO1xuICAgIGNvbnRhaW5lci5hcHBlbmQoaGVhZGVyLCBtYWluKTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZChjb250YWluZXIpO1xufTtcblxuZXhwb3J0IHsgaW5pdGlhbGl6ZSB9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==