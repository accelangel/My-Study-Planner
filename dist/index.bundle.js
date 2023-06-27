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
/* harmony export */   populateForm: () => (/* binding */ populateForm),
/* harmony export */   taskItem: () => (/* binding */ taskItem)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./src/index.js");
/* harmony import */ var _taskLogic_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taskLogic.js */ "./src/taskLogic.js");
/* harmony import */ var _icons_addTaskRed_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icons/addTaskRed.svg */ "./src/icons/addTaskRed.svg");
/* harmony import */ var _icons_addTaskWhite_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icons/addTaskWhite.svg */ "./src/icons/addTaskWhite.svg");






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
    dateInput.id = 'dateInput'; dateInput.classList.add('dateInput'); 
    dateInput.type = 'date'; dateInput.placeholder = 'Today';


    let projectList = document.createElement('select');
    projectList.id = 'projectList'; projectList.classList.add('projectList');
    let toDoList = document.createElement('option'); toDoList.selected = true; toDoList.textContent = 'Daily To Do';
    //temp for testing
    let homework = document.createElement('option'); homework.textContent = 'Homework';
    let chores = document.createElement('option'); chores.textContent = 'Chores';
    let health = document.createElement('option'); health.textContent = 'Exercise';
    let fish = document.createElement('option'); fish.textContent = 'Feed fish';


    let taskSubmitDiv = document.createElement('div');
    taskSubmitDiv.classList.add('taskSubmitDiv');

    let submitTask = document.createElement('button');
    submitTask.id = 'submitTask'; submitTask.classList.add('submitTask'); submitTask.textContent = 'Add task';

    submitTask.addEventListener('click', _taskLogic_js__WEBPACK_IMPORTED_MODULE_1__.createTask);

    let cancel = document.createElement('button');
    cancel.id = 'cancel'; cancel.classList.add('cancel'); cancel.textContent = 'cancel';

    cancel.addEventListener('click', _index_js__WEBPACK_IMPORTED_MODULE_0__.cancelNewTask);

    taskSubmitDiv.append(cancel, submitTask);
    projectList.append(toDoList, homework, chores, health, fish);
    prioritySelect.append(placeholderOption, option1, option2, option3, option4);
    taskOptionDiv.append(dateInput, prioritySelect, projectList);
    form.append(taskNameInput, taskDescriptionInput, taskOptionDiv, taskSubmitDiv);

    taskNameInput.focus();
};

function createAddTask() {
    let newTaskDiv = document.createElement('div');
    newTaskDiv.id = 'newTaskDiv'; newTaskDiv.classList.add('newTaskDiv');

    let newTaskIconDiv = document.createElement('div');
    newTaskIconDiv.id = 'newTaskIconDiv'; newTaskIconDiv.classList.add('newTaskIconDiv');

    let newTaskIcon = document.createElement('img');
    newTaskIcon.classList.add('newTaskIcon');
    newTaskIcon.src = _icons_addTaskRed_svg__WEBPACK_IMPORTED_MODULE_2__;

    function mouseenter() {
        newTaskIcon.src = _icons_addTaskWhite_svg__WEBPACK_IMPORTED_MODULE_3__;
        console.log('enter');
    };

    function mouseleave() {
        newTaskIcon.src = _icons_addTaskRed_svg__WEBPACK_IMPORTED_MODULE_2__;
        console.log('leave');
    };

    newTaskDiv.addEventListener('mouseenter', mouseenter);
    newTaskDiv.addEventListener('mouseleave', mouseleave);

    function newTask() {
        (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.newTaskOrder)();
        newTaskDiv.removeEventListener('mouseenter', mouseenter);
        newTaskDiv.removeEventListener('mouseleave', mouseleave);
        newTaskDiv.removeEventListener('click', newTask);
    };

    newTaskDiv.addEventListener('click', newTask);

    let addTask = document.createElement('div');
    addTask.id = 'addTask'; addTask.classList.add('addTask');
    addTask.textContent = 'Add task';

    newTaskIconDiv.append(newTaskIcon);
    newTaskDiv.append(newTaskIconDiv, addTask);
    
    return newTaskDiv;
};

function taskItem() {
    
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





(0,_initialize_js__WEBPACK_IMPORTED_MODULE_1__.initialize)();

function newTaskOrder() {
    let newTaskDiv = document.getElementById('newTaskDiv');

    while (newTaskDiv.firstChild) {
        newTaskDiv.removeChild(newTaskDiv.firstChild);
    }

    let newTaskForm = document.createElement('div');
    newTaskForm.id = 'newTaskForm'; newTaskForm.classList.add('newTaskForm');

    newTaskDiv.append(newTaskForm);
    (0,_domBuilds__WEBPACK_IMPORTED_MODULE_2__.populateForm)();
};

function cancelNewTask() {
    let oldNewTaskDiv = document.getElementById('newTaskDiv');
    oldNewTaskDiv.remove();

    let newTaskDiv = (0,_domBuilds__WEBPACK_IMPORTED_MODULE_2__.createAddTask)();
    let workspace = document.getElementById('workspace');
    workspace.append(newTaskDiv);
};



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
/* harmony import */ var _domBuilds_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domBuilds.js */ "./src/domBuilds.js");
//import { newTaskOrder } from './index.js';


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

    let newTaskDiv = (0,_domBuilds_js__WEBPACK_IMPORTED_MODULE_0__.createAddTask)();

    workspaceHeader.append(today, date);
    workspace.append(workspaceHeader, newTaskDiv);
    main.append(sidebar, workspace);
    container.append(header, main);
    document.body.append(container);
};



/***/ }),

/***/ "./src/taskLogic.js":
/*!**************************!*\
  !*** ./src/taskLogic.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createTask: () => (/* binding */ createTask)
/* harmony export */ });
let getElements = function () {
    let name = document.getElementById('taskNameInput').value;
    let description = document.getElementById('taskDescriptionInput').value;
    let date = document.getElementById('dateInput').value;
    let priority = document.getElementById('prioritySelect').value;
    let project = document.getElementById('projectList').value;
    return { name, description, date, priority, project };
}

function createTask() {
    let elements = getElements();

    class Task {
        constructor(name, description, date, priority, project) {
            this.name = name;
            this.description = description;
            this.date = date;
            this.priority = priority;
            this.project = project;
        };
    };

    let newTask = new Task(elements.name, elements.description, elements.date, elements.priority, elements.project);

    pinTask(newTask);
};

function pinTask(task) {
    console.log(task)
}












/*
class User {
    constructor(name) {
        // invokes the setter
        this.name = name;
    }
    get name() {
        return this._name;
    }
    set name(value) { // invoked by the constructor
        if (value.length < 4) {
            console.log("Name is too short.");
            return;
        }
        this._name = value;
    }
}
let user = new User("John");
console.log(user.name); // John
user = new User("bob"); // Name is too short.

let user = {
    get name() {
        return this._name;
    },
    set name(value) {
        if (value.length < 4) {
            console.log("Name is too short, need at least 4 characters");
            return;
        }
        this._name = value;
    }
};
user.name = "Pete"; // activate setter to give _name value of pete so it can be gotten (get)
console.log(user.name); // Pete
user.name = "bob"; // Name is too short...

*/

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

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDekYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUMsT0FBTyxpRkFBaUYsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxNQUFNLE9BQU8sT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFh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QUFDQSwwQkFBMEI7O0FBRTFCO0FBQ0Esc0JBQXNCOztBQUV0QjtBQUNBLDRCQUE0Qjs7QUFFNUI7QUFDQSxnQ0FBZ0M7O0FBRWhDO0FBQ0EsNENBQTRDOztBQUU1QztBQUNBLGtDQUFrQzs7QUFFbEM7QUFDQSxzQkFBc0I7QUFDdEI7O0FBRUEscUJBQXFCLDREQUFhOztBQUVsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQVdxQjs7QUFFckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEIsd0JBQXdCOztBQUV4QjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQix3QkFBd0I7QUFDeEIsbUJBQW1COztBQUVuQiIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9kb21CdWlsZHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbml0aWFsaXplLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy90YXNrTG9naWMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCoge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gICAgLmJvcmRlcjogMXB4IHNvbGlkIGxpbWVncmVlbjtcbn1cblxuYm9keSB7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xufVxuXG4uY29udGFpbmVyIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uaGVhZGVyIHtcbiAgICBoZWlnaHQ6IDQ2cHg7XG4gICAgZ3JpZC1hcmVhOiBoZWFkZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RiNTI0NDtcbn1cblxuLm1haW4ge1xuICAgIGdyaWQtYXJlYTogbWFpbjtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA0Ljc1ZnI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcbiAgICAgICAgJ3NpZGViYXIgd29ya3NwYWNlJztcbn1cblxuLnNpZGViYXIge1xuICAgIGdyaWQtYXJlYTogc2lkZWJhcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xufVxuXG4ud29ya3NwYWNlIHtcbiAgICBncmlkLWFyZWE6IHdvcmtzcGFjZTtcbiAgICBwYWRkaW5nOiAyLjI1ZW0gMjAuNWVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLndvcmtzcGFjZUhlYWRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gICAgZ2FwOiAwLjRlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XG59XG5cbi50b2RheSB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IDJweDtcbn1cblxuLmRhdGUge1xuICAgIGNvbG9yOiAjYTJhM2E1O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLm5ld1Rhc2tEaXYge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiAwLjdlbTtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cblxuLm5ld1Rhc2tJY29uRGl2IHtcbiAgICBoZWlnaHQ6IDE2cHg7XG4gICAgd2lkdGg6IDE2cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4ubmV3VGFza0ljb24ge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBzY2FsZTogMTM1JTtcbn1cblxuLmFkZFRhc2sge1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICBjb2xvcjogIzgxN2Q4YztcbiAgICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5uZXdUYXNrRGl2OmhvdmVyIC5hZGRUYXNrIHtcbiAgICBjb2xvcjogI2RiNGMzZDtcbn1cblxuLm5ld1Rhc2tEaXY6aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLm5ld1Rhc2tGb3JtIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAwLjVlbSAwLjZlbTtcbiAgICBnYXA6IDAuNWVtO1xufVxuXG4udGFrZU5hbWVJbnB1dCB7XG4gICAgd2lkdGg6IDEwMCU7XG5cbiAgICBib3JkZXI6IG5vbmU7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi50YWtlTmFtZUlucHV0OjpwbGFjZWhvbGRlcixcbi50YXNrRGVzY3JpcHRpb25JbnB1dDo6cGxhY2Vob2xkZXIge1xuICAgIGNvbG9yOiByZ2IoMTI4LCAxMjgsIDEyOCwgMC43KTtcbn1cblxuLnRhc2tEZXNjcmlwdGlvbklucHV0IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBmb250LXNpemU6IDEycHg7XG59XG5cbi50YXNrT3B0aW9uRGl2IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogMC41ZW07XG59XG5cbi5wcmlvcml0eVNlbGVjdCB7XG4gICAgYXBwZWFyYW5jZTogbm9uZTtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIHBhZGRpbmc6IDVweCAyMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxMjgsIDEyOCwgMTI4LCAwLjQpO1xufVxuXG4ucHJpb3JpdHlTZWxlY3Q6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTI4LCAxMjgsIDEyOCwgMC4xKTtcbn1cblxuLnByaW9yaXR5T3B0aW9uOmhvdmVyIHtcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCAxMDBweCB5ZWxsb3cgaW5zZXQ7XG59XG5cbi5kYXRlSW5wdXQge1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTI4LCAxMjgsIDEyOCwgMC40KTtcbiAgICBwYWRkaW5nOiAwIDEwcHg7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgb3V0bGluZTogbm9uZTtcbn1cblxuLmRhdGVJbnB1dDpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjEpO1xufVxuXG4ucHJvamVjdExpc3Qge1xuICAgIGFwcGVhcmFuY2U6IG5vbmU7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBwYWRkaW5nOiA1cHggMjBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTI4LCAxMjgsIDEyOCwgMC40KTtcbn1cblxuLnRhc2tTdWJtaXREaXYge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZ2FwOiAxZW07XG59XG5cbi50YXNrU3VibWl0RGl2IGJ1dHRvbiB7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYXBwZWFyYW5jZTogbm9uZTtcbiAgICBwYWRkaW5nOiA1cHggMjBweDtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4uc3VibWl0VGFzayB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyMSwgNzQsIDY4KTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5zdWJtaXRUYXNrOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTk2LCA2MywgNTkpXG59XG5cbi5jYW5jZWw6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjMsIDIyMywgMjIzKTtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksVUFBVTtJQUNWLFNBQVM7SUFDVCxzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLGFBQWE7SUFDYix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixpQkFBaUI7SUFDakIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFlBQVk7SUFDWixhQUFhO0lBQ2IsaUNBQWlDO0lBQ2pDOzJCQUN1QjtBQUMzQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLFVBQVU7SUFDVixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixRQUFRO0FBQ1o7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixVQUFVO0lBQ1YsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztBQUNmOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxlQUFlO0FBQ25COztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLFdBQVc7O0lBRVgsWUFBWTtJQUNaLGFBQWE7SUFDYixlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCOztBQUVBOztJQUVJLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osYUFBYTtJQUNiLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIseUNBQXlDO0FBQzdDOztBQUVBO0lBQ0ksMENBQTBDO0FBQzlDOztBQUVBO0lBQ0ksdUNBQXVDO0FBQzNDOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLHlDQUF5QztJQUN6QyxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSwwQ0FBMEM7QUFDOUM7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLGlCQUFpQjtJQUNqQix5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLHlDQUF5QztBQUM3Qzs7QUFFQTtJQUNJLGFBQWE7SUFDYix5QkFBeUI7SUFDekIsV0FBVztJQUNYLFlBQVk7SUFDWixRQUFRO0FBQ1o7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtDQUFrQztJQUNsQyxZQUFZO0lBQ1osaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJLG9DQUFvQztBQUN4Q1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG4gICAgLmJvcmRlcjogMXB4IHNvbGlkIGxpbWVncmVlbjtcXG59XFxuXFxuYm9keSB7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5oZWFkZXIge1xcbiAgICBoZWlnaHQ6IDQ2cHg7XFxuICAgIGdyaWQtYXJlYTogaGVhZGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGI1MjQ0O1xcbn1cXG5cXG4ubWFpbiB7XFxuICAgIGdyaWQtYXJlYTogbWFpbjtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA0Ljc1ZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgICAgICAnc2lkZWJhciB3b3Jrc3BhY2UnO1xcbn1cXG5cXG4uc2lkZWJhciB7XFxuICAgIGdyaWQtYXJlYTogc2lkZWJhcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcXG59XFxuXFxuLndvcmtzcGFjZSB7XFxuICAgIGdyaWQtYXJlYTogd29ya3NwYWNlO1xcbiAgICBwYWRkaW5nOiAyLjI1ZW0gMjAuNWVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4ud29ya3NwYWNlSGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbiAgICBnYXA6IDAuNGVtO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XFxufVxcblxcbi50b2RheSB7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdG9wOiAycHg7XFxufVxcblxcbi5kYXRlIHtcXG4gICAgY29sb3I6ICNhMmEzYTU7XFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXG59XFxuXFxuLm5ld1Rhc2tEaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDAuN2VtO1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxuLm5ld1Rhc2tJY29uRGl2IHtcXG4gICAgaGVpZ2h0OiAxNnB4O1xcbiAgICB3aWR0aDogMTZweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG5cXG4ubmV3VGFza0ljb24ge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHNjYWxlOiAxMzUlO1xcbn1cXG5cXG4uYWRkVGFzayB7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgY29sb3I6ICM4MTdkOGM7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG59XFxuXFxuLm5ld1Rhc2tEaXY6aG92ZXIgLmFkZFRhc2sge1xcbiAgICBjb2xvcjogI2RiNGMzZDtcXG59XFxuXFxuLm5ld1Rhc2tEaXY6aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5uZXdUYXNrRm9ybSB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAwLjVlbSAwLjZlbTtcXG4gICAgZ2FwOiAwLjVlbTtcXG59XFxuXFxuLnRha2VOYW1lSW5wdXQge1xcbiAgICB3aWR0aDogMTAwJTtcXG5cXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBmb250LXNpemU6IDE1cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4udGFrZU5hbWVJbnB1dDo6cGxhY2Vob2xkZXIsXFxuLnRhc2tEZXNjcmlwdGlvbklucHV0OjpwbGFjZWhvbGRlciB7XFxuICAgIGNvbG9yOiByZ2IoMTI4LCAxMjgsIDEyOCwgMC43KTtcXG59XFxuXFxuLnRhc2tEZXNjcmlwdGlvbklucHV0IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcbn1cXG5cXG4udGFza09wdGlvbkRpdiB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDAuNWVtO1xcbn1cXG5cXG4ucHJpb3JpdHlTZWxlY3Qge1xcbiAgICBhcHBlYXJhbmNlOiBub25lO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBwYWRkaW5nOiA1cHggMjBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTI4LCAxMjgsIDEyOCwgMC40KTtcXG59XFxuXFxuLnByaW9yaXR5U2VsZWN0OmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjEpO1xcbn1cXG5cXG4ucHJpb3JpdHlPcHRpb246aG92ZXIge1xcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCAxMDBweCB5ZWxsb3cgaW5zZXQ7XFxufVxcblxcbi5kYXRlSW5wdXQge1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxMjgsIDEyOCwgMTI4LCAwLjQpO1xcbiAgICBwYWRkaW5nOiAwIDEwcHg7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4uZGF0ZUlucHV0OmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjEpO1xcbn1cXG5cXG4ucHJvamVjdExpc3Qge1xcbiAgICBhcHBlYXJhbmNlOiBub25lO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBwYWRkaW5nOiA1cHggMjBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTI4LCAxMjgsIDEyOCwgMC40KTtcXG59XFxuXFxuLnRhc2tTdWJtaXREaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBnYXA6IDFlbTtcXG59XFxuXFxuLnRhc2tTdWJtaXREaXYgYnV0dG9uIHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBhcHBlYXJhbmNlOiBub25lO1xcbiAgICBwYWRkaW5nOiA1cHggMjBweDtcXG4gICAgd2lkdGg6IDEwMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi5zdWJtaXRUYXNrIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyMSwgNzQsIDY4KTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLnN1Ym1pdFRhc2s6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTk2LCA2MywgNTkpXFxufVxcblxcbi5jYW5jZWw6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjIzLCAyMjMsIDIyMyk7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IG5ld1Rhc2tPcmRlciwgY2FuY2VsTmV3VGFzayB9IGZyb20gJy4vaW5kZXguanMnO1xuaW1wb3J0IHsgY3JlYXRlVGFzayB9IGZyb20gJy4vdGFza0xvZ2ljLmpzJztcblxuaW1wb3J0IGFkZFRhc2tSZWQgZnJvbSAnLi9pY29ucy9hZGRUYXNrUmVkLnN2ZydcbmltcG9ydCBhZGRUYXNrV2hpdGUgZnJvbSAnLi9pY29ucy9hZGRUYXNrV2hpdGUuc3ZnJ1xuXG5mdW5jdGlvbiBwb3B1bGF0ZUZvcm0oKSB7XG4gICAgbGV0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3VGFza0Zvcm0nKTtcblxuXG5cbiAgICBsZXQgdGFza05hbWVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgdGFza05hbWVJbnB1dC5pZCA9ICd0YXNrTmFtZUlucHV0JzsgdGFza05hbWVJbnB1dC5jbGFzc0xpc3QuYWRkKCd0YWtlTmFtZUlucHV0Jyk7XG4gICAgdGFza05hbWVJbnB1dC50eXBlID0gJ3RleHQnOyB0YXNrTmFtZUlucHV0LnBsYWNlaG9sZGVyID0gJ1Rhc2sgbmFtZSc7XG5cblxuICAgIGxldCB0YXNrRGVzY3JpcHRpb25JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgdGFza0Rlc2NyaXB0aW9uSW5wdXQuaWQgPSAndGFza0Rlc2NyaXB0aW9uSW5wdXQnOyB0YXNrRGVzY3JpcHRpb25JbnB1dC5jbGFzc0xpc3QuYWRkKCd0YXNrRGVzY3JpcHRpb25JbnB1dCcpO1xuICAgIHRhc2tEZXNjcmlwdGlvbklucHV0LnR5cGUgPSAndGV4dCc7IHRhc2tEZXNjcmlwdGlvbklucHV0LnBsYWNlaG9sZGVyID0gJ0Rlc2NyaXB0aW9uJztcblxuXG4gICAgbGV0IHRhc2tPcHRpb25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0YXNrT3B0aW9uRGl2LmNsYXNzTGlzdC5hZGQoJ3Rhc2tPcHRpb25EaXYnKTtcblxuXG4gICAgbGV0IHByaW9yaXR5U2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gICAgcHJpb3JpdHlTZWxlY3QuaWQgPSAncHJpb3JpdHlTZWxlY3QnOyBwcmlvcml0eVNlbGVjdC5jbGFzc0xpc3QuYWRkKCdwcmlvcml0eVNlbGVjdCcpO1xuXG4gICAgbGV0IHBsYWNlaG9sZGVyT3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgcGxhY2Vob2xkZXJPcHRpb24uY2xhc3NMaXN0LmFkZCgncHJpb3JpdHlPcHRpb24nKTsgcGxhY2Vob2xkZXJPcHRpb24uZGlzYWJsZWQgPSB0cnVlO1xuICAgIHBsYWNlaG9sZGVyT3B0aW9uLnNlbGVjdGVkID0gdHJ1ZTsgcGxhY2Vob2xkZXJPcHRpb24uaGlkZGVuID0gdHJ1ZTsgcGxhY2Vob2xkZXJPcHRpb24udGV4dENvbnRlbnQgPSAn8J+Ps++4jyBQcmlvcml0eSc7XG5cbiAgICBsZXQgb3B0aW9uMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgIG9wdGlvbjEuY2xhc3NMaXN0LmFkZCgncHJpb3JpdHlPcHRpb24nKTsgb3B0aW9uMS50ZXh0Q29udGVudCA9ICdQcmlvcml0eSAxJztcbiAgICBsZXQgb3B0aW9uMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgIG9wdGlvbjIuY2xhc3NMaXN0LmFkZCgncHJpb3JpdHlPcHRpb24nKTsgb3B0aW9uMi50ZXh0Q29udGVudCA9ICdQcmlvcml0eSAyJztcbiAgICBsZXQgb3B0aW9uMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgIG9wdGlvbjMuY2xhc3NMaXN0LmFkZCgncHJpb3JpdHlPcHRpb24nKTsgb3B0aW9uMy50ZXh0Q29udGVudCA9ICdQcmlvcml0eSAzJztcbiAgICBsZXQgb3B0aW9uNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgIG9wdGlvbjQuY2xhc3NMaXN0LmFkZCgncHJpb3JpdHlPcHRpb24nKTsgb3B0aW9uNC50ZXh0Q29udGVudCA9ICdQcmlvcml0eSA0JztcblxuXG4gICAgbGV0IGRhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgZGF0ZUlucHV0LmlkID0gJ2RhdGVJbnB1dCc7IGRhdGVJbnB1dC5jbGFzc0xpc3QuYWRkKCdkYXRlSW5wdXQnKTsgXG4gICAgZGF0ZUlucHV0LnR5cGUgPSAnZGF0ZSc7IGRhdGVJbnB1dC5wbGFjZWhvbGRlciA9ICdUb2RheSc7XG5cblxuICAgIGxldCBwcm9qZWN0TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICAgIHByb2plY3RMaXN0LmlkID0gJ3Byb2plY3RMaXN0JzsgcHJvamVjdExpc3QuY2xhc3NMaXN0LmFkZCgncHJvamVjdExpc3QnKTtcbiAgICBsZXQgdG9Eb0xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTsgdG9Eb0xpc3Quc2VsZWN0ZWQgPSB0cnVlOyB0b0RvTGlzdC50ZXh0Q29udGVudCA9ICdEYWlseSBUbyBEbyc7XG4gICAgLy90ZW1wIGZvciB0ZXN0aW5nXG4gICAgbGV0IGhvbWV3b3JrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7IGhvbWV3b3JrLnRleHRDb250ZW50ID0gJ0hvbWV3b3JrJztcbiAgICBsZXQgY2hvcmVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7IGNob3Jlcy50ZXh0Q29udGVudCA9ICdDaG9yZXMnO1xuICAgIGxldCBoZWFsdGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTsgaGVhbHRoLnRleHRDb250ZW50ID0gJ0V4ZXJjaXNlJztcbiAgICBsZXQgZmlzaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpOyBmaXNoLnRleHRDb250ZW50ID0gJ0ZlZWQgZmlzaCc7XG5cblxuICAgIGxldCB0YXNrU3VibWl0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGFza1N1Ym1pdERpdi5jbGFzc0xpc3QuYWRkKCd0YXNrU3VibWl0RGl2Jyk7XG5cbiAgICBsZXQgc3VibWl0VGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHN1Ym1pdFRhc2suaWQgPSAnc3VibWl0VGFzayc7IHN1Ym1pdFRhc2suY2xhc3NMaXN0LmFkZCgnc3VibWl0VGFzaycpOyBzdWJtaXRUYXNrLnRleHRDb250ZW50ID0gJ0FkZCB0YXNrJztcblxuICAgIHN1Ym1pdFRhc2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjcmVhdGVUYXNrKTtcblxuICAgIGxldCBjYW5jZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjYW5jZWwuaWQgPSAnY2FuY2VsJzsgY2FuY2VsLmNsYXNzTGlzdC5hZGQoJ2NhbmNlbCcpOyBjYW5jZWwudGV4dENvbnRlbnQgPSAnY2FuY2VsJztcblxuICAgIGNhbmNlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNhbmNlbE5ld1Rhc2spO1xuXG4gICAgdGFza1N1Ym1pdERpdi5hcHBlbmQoY2FuY2VsLCBzdWJtaXRUYXNrKTtcbiAgICBwcm9qZWN0TGlzdC5hcHBlbmQodG9Eb0xpc3QsIGhvbWV3b3JrLCBjaG9yZXMsIGhlYWx0aCwgZmlzaCk7XG4gICAgcHJpb3JpdHlTZWxlY3QuYXBwZW5kKHBsYWNlaG9sZGVyT3B0aW9uLCBvcHRpb24xLCBvcHRpb24yLCBvcHRpb24zLCBvcHRpb240KTtcbiAgICB0YXNrT3B0aW9uRGl2LmFwcGVuZChkYXRlSW5wdXQsIHByaW9yaXR5U2VsZWN0LCBwcm9qZWN0TGlzdCk7XG4gICAgZm9ybS5hcHBlbmQodGFza05hbWVJbnB1dCwgdGFza0Rlc2NyaXB0aW9uSW5wdXQsIHRhc2tPcHRpb25EaXYsIHRhc2tTdWJtaXREaXYpO1xuXG4gICAgdGFza05hbWVJbnB1dC5mb2N1cygpO1xufTtcblxuZnVuY3Rpb24gY3JlYXRlQWRkVGFzaygpIHtcbiAgICBsZXQgbmV3VGFza0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG5ld1Rhc2tEaXYuaWQgPSAnbmV3VGFza0Rpdic7IG5ld1Rhc2tEaXYuY2xhc3NMaXN0LmFkZCgnbmV3VGFza0RpdicpO1xuXG4gICAgbGV0IG5ld1Rhc2tJY29uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbmV3VGFza0ljb25EaXYuaWQgPSAnbmV3VGFza0ljb25EaXYnOyBuZXdUYXNrSWNvbkRpdi5jbGFzc0xpc3QuYWRkKCduZXdUYXNrSWNvbkRpdicpO1xuXG4gICAgbGV0IG5ld1Rhc2tJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgbmV3VGFza0ljb24uY2xhc3NMaXN0LmFkZCgnbmV3VGFza0ljb24nKTtcbiAgICBuZXdUYXNrSWNvbi5zcmMgPSBhZGRUYXNrUmVkO1xuXG4gICAgZnVuY3Rpb24gbW91c2VlbnRlcigpIHtcbiAgICAgICAgbmV3VGFza0ljb24uc3JjID0gYWRkVGFza1doaXRlO1xuICAgICAgICBjb25zb2xlLmxvZygnZW50ZXInKTtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gbW91c2VsZWF2ZSgpIHtcbiAgICAgICAgbmV3VGFza0ljb24uc3JjID0gYWRkVGFza1JlZDtcbiAgICAgICAgY29uc29sZS5sb2coJ2xlYXZlJyk7XG4gICAgfTtcblxuICAgIG5ld1Rhc2tEaXYuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIG1vdXNlZW50ZXIpO1xuICAgIG5ld1Rhc2tEaXYuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIG1vdXNlbGVhdmUpO1xuXG4gICAgZnVuY3Rpb24gbmV3VGFzaygpIHtcbiAgICAgICAgbmV3VGFza09yZGVyKCk7XG4gICAgICAgIG5ld1Rhc2tEaXYucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIG1vdXNlZW50ZXIpO1xuICAgICAgICBuZXdUYXNrRGl2LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBtb3VzZWxlYXZlKTtcbiAgICAgICAgbmV3VGFza0Rpdi5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIG5ld1Rhc2spO1xuICAgIH07XG5cbiAgICBuZXdUYXNrRGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbmV3VGFzayk7XG5cbiAgICBsZXQgYWRkVGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGFkZFRhc2suaWQgPSAnYWRkVGFzayc7IGFkZFRhc2suY2xhc3NMaXN0LmFkZCgnYWRkVGFzaycpO1xuICAgIGFkZFRhc2sudGV4dENvbnRlbnQgPSAnQWRkIHRhc2snO1xuXG4gICAgbmV3VGFza0ljb25EaXYuYXBwZW5kKG5ld1Rhc2tJY29uKTtcbiAgICBuZXdUYXNrRGl2LmFwcGVuZChuZXdUYXNrSWNvbkRpdiwgYWRkVGFzayk7XG4gICAgXG4gICAgcmV0dXJuIG5ld1Rhc2tEaXY7XG59O1xuXG5mdW5jdGlvbiB0YXNrSXRlbSgpIHtcbiAgICBcbn1cblxuZXhwb3J0IHsgcG9wdWxhdGVGb3JtLCBjcmVhdGVBZGRUYXNrLCB0YXNrSXRlbSB9IiwiaW1wb3J0ICcuL3N0eWxlcy5jc3MnXG5cbmltcG9ydCB7IGluaXRpYWxpemUgfSBmcm9tICcuL2luaXRpYWxpemUuanMnXG5pbXBvcnQgeyBwb3B1bGF0ZUZvcm0sIGNyZWF0ZUFkZFRhc2sgfSBmcm9tICcuL2RvbUJ1aWxkcydcblxuaW5pdGlhbGl6ZSgpO1xuXG5mdW5jdGlvbiBuZXdUYXNrT3JkZXIoKSB7XG4gICAgbGV0IG5ld1Rhc2tEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3VGFza0RpdicpO1xuXG4gICAgd2hpbGUgKG5ld1Rhc2tEaXYuZmlyc3RDaGlsZCkge1xuICAgICAgICBuZXdUYXNrRGl2LnJlbW92ZUNoaWxkKG5ld1Rhc2tEaXYuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgbGV0IG5ld1Rhc2tGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbmV3VGFza0Zvcm0uaWQgPSAnbmV3VGFza0Zvcm0nOyBuZXdUYXNrRm9ybS5jbGFzc0xpc3QuYWRkKCduZXdUYXNrRm9ybScpO1xuXG4gICAgbmV3VGFza0Rpdi5hcHBlbmQobmV3VGFza0Zvcm0pO1xuICAgIHBvcHVsYXRlRm9ybSgpO1xufTtcblxuZnVuY3Rpb24gY2FuY2VsTmV3VGFzaygpIHtcbiAgICBsZXQgb2xkTmV3VGFza0RpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXdUYXNrRGl2Jyk7XG4gICAgb2xkTmV3VGFza0Rpdi5yZW1vdmUoKTtcblxuICAgIGxldCBuZXdUYXNrRGl2ID0gY3JlYXRlQWRkVGFzaygpO1xuICAgIGxldCB3b3Jrc3BhY2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd29ya3NwYWNlJyk7XG4gICAgd29ya3NwYWNlLmFwcGVuZChuZXdUYXNrRGl2KTtcbn07XG5cbmV4cG9ydCB7IG5ld1Rhc2tPcmRlciwgY2FuY2VsTmV3VGFzayB9IiwiLy9pbXBvcnQgeyBuZXdUYXNrT3JkZXIgfSBmcm9tICcuL2luZGV4LmpzJztcbmltcG9ydCB7IGNyZWF0ZUFkZFRhc2sgfSBmcm9tICcuL2RvbUJ1aWxkcy5qcyc7XG5cbmNvbnN0IGluaXRpYWxpemUgPSBmdW5jdGlvbiAoKSB7XG4gICAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhaW5lci5pZCA9ICdjb250YWluZXInOyBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29udGFpbmVyJyk7XG5cbiAgICBsZXQgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaGVhZGVyLmlkID0gJ2hlYWRlcic7IGhlYWRlci5jbGFzc0xpc3QuYWRkKCdoZWFkZXInKTtcblxuICAgIGxldCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWFpbi5pZCA9ICdtYWluJzsgbWFpbi5jbGFzc0xpc3QuYWRkKCdtYWluJyk7XG5cbiAgICBsZXQgc2lkZWJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNpZGViYXIuaWQgPSAnc2lkZWJhcic7IHNpZGViYXIuY2xhc3NMaXN0LmFkZCgnc2lkZWJhcicpO1xuXG4gICAgbGV0IHdvcmtzcGFjZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHdvcmtzcGFjZS5pZCA9ICd3b3Jrc3BhY2UnOyB3b3Jrc3BhY2UuY2xhc3NMaXN0LmFkZCgnd29ya3NwYWNlJyk7XG5cbiAgICBsZXQgd29ya3NwYWNlSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgd29ya3NwYWNlSGVhZGVyLmlkID0gJ3dvcmtzcGFjZUhlYWRlcic7IHdvcmtzcGFjZUhlYWRlci5jbGFzc0xpc3QuYWRkKCd3b3Jrc3BhY2VIZWFkZXInKTtcblxuICAgIGxldCB0b2RheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICB0b2RheS5jbGFzc0xpc3QuYWRkKCd0b2RheScpOyB0b2RheS50ZXh0Q29udGVudCA9ICdUb2RheSc7XG5cbiAgICBsZXQgZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBkYXRlLmlkID0gJ2RhdGUnOyBkYXRlLmNsYXNzTGlzdC5hZGQoJ2RhdGUnKTtcbiAgICBkYXRlLnRleHRDb250ZW50ID0gbmV3IERhdGUoKS50b1N0cmluZygpLnNwbGl0KCcgJykuc2xpY2UoMCwgMykuam9pbignICcpO1xuXG4gICAgbGV0IG5ld1Rhc2tEaXYgPSBjcmVhdGVBZGRUYXNrKCk7XG5cbiAgICB3b3Jrc3BhY2VIZWFkZXIuYXBwZW5kKHRvZGF5LCBkYXRlKTtcbiAgICB3b3Jrc3BhY2UuYXBwZW5kKHdvcmtzcGFjZUhlYWRlciwgbmV3VGFza0Rpdik7XG4gICAgbWFpbi5hcHBlbmQoc2lkZWJhciwgd29ya3NwYWNlKTtcbiAgICBjb250YWluZXIuYXBwZW5kKGhlYWRlciwgbWFpbik7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmQoY29udGFpbmVyKTtcbn07XG5cbmV4cG9ydCB7IGluaXRpYWxpemUgfTsiLCJsZXQgZ2V0RWxlbWVudHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgbGV0IG5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza05hbWVJbnB1dCcpLnZhbHVlO1xuICAgIGxldCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrRGVzY3JpcHRpb25JbnB1dCcpLnZhbHVlO1xuICAgIGxldCBkYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RhdGVJbnB1dCcpLnZhbHVlO1xuICAgIGxldCBwcmlvcml0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmlvcml0eVNlbGVjdCcpLnZhbHVlO1xuICAgIGxldCBwcm9qZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RMaXN0JykudmFsdWU7XG4gICAgcmV0dXJuIHsgbmFtZSwgZGVzY3JpcHRpb24sIGRhdGUsIHByaW9yaXR5LCBwcm9qZWN0IH07XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRhc2soKSB7XG4gICAgbGV0IGVsZW1lbnRzID0gZ2V0RWxlbWVudHMoKTtcblxuICAgIGNsYXNzIFRhc2sge1xuICAgICAgICBjb25zdHJ1Y3RvcihuYW1lLCBkZXNjcmlwdGlvbiwgZGF0ZSwgcHJpb3JpdHksIHByb2plY3QpIHtcbiAgICAgICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICAgICAgICB0aGlzLmRhdGUgPSBkYXRlO1xuICAgICAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgICAgICAgICAgdGhpcy5wcm9qZWN0ID0gcHJvamVjdDtcbiAgICAgICAgfTtcbiAgICB9O1xuXG4gICAgbGV0IG5ld1Rhc2sgPSBuZXcgVGFzayhlbGVtZW50cy5uYW1lLCBlbGVtZW50cy5kZXNjcmlwdGlvbiwgZWxlbWVudHMuZGF0ZSwgZWxlbWVudHMucHJpb3JpdHksIGVsZW1lbnRzLnByb2plY3QpO1xuXG4gICAgcGluVGFzayhuZXdUYXNrKTtcbn07XG5cbmZ1bmN0aW9uIHBpblRhc2sodGFzaykge1xuICAgIGNvbnNvbGUubG9nKHRhc2spXG59XG5cblxuXG5cblxuXG5cblxuXG5cbmV4cG9ydCB7IGNyZWF0ZVRhc2sgfVxuXG4vKlxuY2xhc3MgVXNlciB7XG4gICAgY29uc3RydWN0b3IobmFtZSkge1xuICAgICAgICAvLyBpbnZva2VzIHRoZSBzZXR0ZXJcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB9XG4gICAgZ2V0IG5hbWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9uYW1lO1xuICAgIH1cbiAgICBzZXQgbmFtZSh2YWx1ZSkgeyAvLyBpbnZva2VkIGJ5IHRoZSBjb25zdHJ1Y3RvclxuICAgICAgICBpZiAodmFsdWUubGVuZ3RoIDwgNCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJOYW1lIGlzIHRvbyBzaG9ydC5cIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fbmFtZSA9IHZhbHVlO1xuICAgIH1cbn1cbmxldCB1c2VyID0gbmV3IFVzZXIoXCJKb2huXCIpO1xuY29uc29sZS5sb2codXNlci5uYW1lKTsgLy8gSm9oblxudXNlciA9IG5ldyBVc2VyKFwiYm9iXCIpOyAvLyBOYW1lIGlzIHRvbyBzaG9ydC5cblxubGV0IHVzZXIgPSB7XG4gICAgZ2V0IG5hbWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9uYW1lO1xuICAgIH0sXG4gICAgc2V0IG5hbWUodmFsdWUpIHtcbiAgICAgICAgaWYgKHZhbHVlLmxlbmd0aCA8IDQpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTmFtZSBpcyB0b28gc2hvcnQsIG5lZWQgYXQgbGVhc3QgNCBjaGFyYWN0ZXJzXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX25hbWUgPSB2YWx1ZTtcbiAgICB9XG59O1xudXNlci5uYW1lID0gXCJQZXRlXCI7IC8vIGFjdGl2YXRlIHNldHRlciB0byBnaXZlIF9uYW1lIHZhbHVlIG9mIHBldGUgc28gaXQgY2FuIGJlIGdvdHRlbiAoZ2V0KVxuY29uc29sZS5sb2codXNlci5uYW1lKTsgLy8gUGV0ZVxudXNlci5uYW1lID0gXCJib2JcIjsgLy8gTmFtZSBpcyB0b28gc2hvcnQuLi5cblxuKi8iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=