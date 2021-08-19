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
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".chunk{\n    border-radius:5%;\n    background-color:skyblue;\n    height:20px;\n    width:20px;\n    display:grid;\n}\n\n.gameBoard{\n    background-color: grey;\n    display:grid;\n    grid-template-columns: repeat(10, 20px);\n    grid-template-rows:auto;\n    grid-gap: 1px;\n    width:210px;\n    margin:auto;\n}\n\n.p1{\n    position:absolute;\n    left:10%;\n}\n.p2{\n    position:absolute;\n    right:10%;\n}\nbody{\n    background: rgb(32, 32, 32)\n}\n\n.ship{\n    background:orange;\n}\n.ship.chunk.attacked{\n    background: red;\n}\n\n.chunk.attacked{\n    background: black;\n}\n.ship.chunk.attacked.cpu{\n    background:red;\n}\n.ship.cpu{\n    background: skyblue;\n}\n.fullBoard{\n    display:grid;\n    grid-template-columns: 210px 210px;\n    grid-gap: 50px;\n    text-align:center;\n}\n\n.title{\n    font-size: 100%;\n    font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\n    margin: auto;\n    text-align:center;\n    color: whitesmoke;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,gBAAgB;IAChB,wBAAwB;IACxB,WAAW;IACX,UAAU;IACV,YAAY;AAChB;;AAEA;IACI,sBAAsB;IACtB,YAAY;IACZ,uCAAuC;IACvC,uBAAuB;IACvB,aAAa;IACb,WAAW;IACX,WAAW;AACf;;AAEA;IACI,iBAAiB;IACjB,QAAQ;AACZ;AACA;IACI,iBAAiB;IACjB,SAAS;AACb;AACA;IACI;AACJ;;AAEA;IACI,iBAAiB;AACrB;AACA;IACI,eAAe;AACnB;;AAEA;IACI,iBAAiB;AACrB;AACA;IACI,cAAc;AAClB;AACA;IACI,mBAAmB;AACvB;AACA;IACI,YAAY;IACZ,kCAAkC;IAClC,cAAc;IACd,iBAAiB;AACrB;;AAEA;IACI,eAAe;IACf,uEAAuE;IACvE,YAAY;IACZ,iBAAiB;IACjB,iBAAiB;AACrB","sourcesContent":[".chunk{\n    border-radius:5%;\n    background-color:skyblue;\n    height:20px;\n    width:20px;\n    display:grid;\n}\n\n.gameBoard{\n    background-color: grey;\n    display:grid;\n    grid-template-columns: repeat(10, 20px);\n    grid-template-rows:auto;\n    grid-gap: 1px;\n    width:210px;\n    margin:auto;\n}\n\n.p1{\n    position:absolute;\n    left:10%;\n}\n.p2{\n    position:absolute;\n    right:10%;\n}\nbody{\n    background: rgb(32, 32, 32)\n}\n\n.ship{\n    background:orange;\n}\n.ship.chunk.attacked{\n    background: red;\n}\n\n.chunk.attacked{\n    background: black;\n}\n.ship.chunk.attacked.cpu{\n    background:red;\n}\n.ship.cpu{\n    background: skyblue;\n}\n.fullBoard{\n    display:grid;\n    grid-template-columns: 210px 210px;\n    grid-gap: 50px;\n    text-align:center;\n}\n\n.title{\n    font-size: 100%;\n    font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\n    margin: auto;\n    text-align:center;\n    color: whitesmoke;\n}"],"sourceRoot":""}]);
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

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (!cssMapping) {
    return content;
  }

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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default, options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


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

function addStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
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

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
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

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var style = document.createElement("style");
  options.setAttributes(style, options.attributes);
  options.insert(style);
  return style;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(style) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    style.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute("media", media);
  } else {
    style.removeAttribute("media");
  }

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, style);
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


function domAPI(options) {
  var style = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(style, options, obj);
    },
    remove: function remove() {
      removeStyleElement(style);
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

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, style) {
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/Modules/Gameboard.js":
/*!**********************************!*\
  !*** ./src/Modules/Gameboard.js ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const ship = __webpack_require__( /*! ./ship.js */ "./src/Modules/ship.js");
const boardDoms = __webpack_require__(/*! ./boardDoms.js */ "./src/Modules/boardDoms.js");
const player = __webpack_require__(/*! ./Player.js */ "./src/Modules/Player.js");

const BOARD_SIZE = 10;

const Gameboard = function(_player){
    let player = _player;
    const name = _player.getName();
    let gameBoard = boardDoms(name);
    let mainDiv = gameBoard.getGameBoard();
    let grid = [];
    let chunk = function(_domElement){
        let domElement = _domElement;
        let occupied = false;
        let attacked = false;
        let ship;
        let section;
        const recieveAttack = function(){
            attacked = true;
            let hit = false;
            if (occupied){
                ship.registerHit(section);
                hit = true;
            }
            domElement.classList.add('attacked');
            return hit;
        }
        function setShip(_ship, _section){
            ship = _ship;
            section = _section;
            occupied = true;
            domElement.classList.add('ship');
        }

        function checkAttacked(){
            return attacked;
        }
        function checkOccupied(){
            return occupied;
        }
        

        return {recieveAttack, setShip, checkAttacked, checkOccupied};
    }
    function init(){
        for(let i = 0; i<BOARD_SIZE; i++){
            for(let j = 0; j<BOARD_SIZE;j++){
                if(!grid[i]){grid[i] = []}
                newDomPiece = appender(i,j);
                grid[i][j] = chunk(newDomPiece);
            }
        }
    }
    function appender(i,j){
        newDomPiece = gameBoard.getNewChunk(i,j);
        gameBoard.getGameBoard().append(newDomPiece);
        return newDomPiece;
    }
    /**
     * 
     * @param {ship} ship accepts an array of coordinates and a ship
     */
    function addShip(coords, newShip){
        let i = 0;
        coords.forEach((coordinate) =>{
            grid[coordinate['x']][coordinate['y']].setShip(newShip, i);
            i++;
        })
    }
    function validateShipPlacement(coords){
        let valid = true;
        try{
            coords.forEach((coordinate)=>{
                if(grid[coordinate['x']][coordinate['y']].checkOccupied()){
                    valid = false;
                }
            })
        }
        catch{
            valid = false;
        }
        return valid;
    }
    function validateAttack(coord){
        if (grid[coord['x']][coord['y']].checkAttacked()){
            return false;
        }
        return true;
    }

    init();

    return {grid, addShip, mainDiv, validateShipPlacement, validateAttack};
}


module.exports = Gameboard;

/***/ }),

/***/ "./src/Modules/Header.js":
/*!*******************************!*\
  !*** ./src/Modules/Header.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const header = function(){
    const header = document.createElement('div');
    header.classList.add('title');


    const setupScreen = function(){
        header.innerText = "SETUP PHASE, PRESS V TO ROTATE PLACEMENT";
    }

    const fightScreen = function(){
        header.innerText = "FIGHT!";
    }

    document.body.prepend(header);
    return {setupScreen, fightScreen}
    
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (header); 

/***/ }),

/***/ "./src/Modules/Player.js":
/*!*******************************!*\
  !*** ./src/Modules/Player.js ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const ship = __webpack_require__( /*! ./ship.js */ "./src/Modules/ship.js");

const playerFactory = function(_name, amtOfShips){
    const name = _name;
    let RemainingTurns = amtOfShips;
    let ships = [];
    let vertical = false;

    function addShipToBoard(){
        if(RemainingTurns == 4){
            RemainingTurns--;
            let newShip = ship(4);
            ships.push(newShip);
            return newShip;
            
        }
        else if(RemainingTurns ==3){
            RemainingTurns--;
            let newShip = ship(3);
            ships.push(newShip);
            return newShip;
        }
        else{
            RemainingTurns--;
            let newShip = ship(2);
            ships.push(newShip);
            return newShip;
        }
    }

    function readyToFight(){
        if(RemainingTurns == 0){
            return true;
        }
        return false;
    }

    function invalidMove(){
        RemainingTurns ++;
        ships.pop();
    }

    function getName(){
        return name;
    }
    function isVertical(){
        return vertical;
    }
    function hasLost(){
        let lost = true;
        ships.forEach(ship=>{
            if(!ship.isSunk()){
                lost = false;
            }
        })
        return lost;
    }
    document.addEventListener('keypress', (e)=>{
        if(e.key == 'v'){
            toggleVertical();
        }
    })
    function toggleVertical(){
        vertical = !vertical;
    }

    return{getName, readyToFight, addShipToBoard, isVertical, hasLost, invalidMove, toggleVertical}
}


module.exports = playerFactory;

/***/ }),

/***/ "./src/Modules/boardDoms.js":
/*!**********************************!*\
  !*** ./src/Modules/boardDoms.js ***!
  \**********************************/
/***/ ((module) => {

const gameBoardDoms = function(name){
    const mainDiv = document.createElement('div');

    function init(){        
        mainDiv.classList.add('gameBoard');
        if(name == 'player1'){
            mainDiv.classList.add('p1');
        }
        else if (name == 'player2'){
            mainDiv.classList.add('p2');
        }
    }

    function getNewChunk(x, y){
        let chunk = document.createElement('div');
        chunk.dataset.x = x;
        chunk.dataset.y = y;
        chunk.classList.add('chunk');
        return chunk;
    }
    function getGameBoard(){
        return mainDiv;
    }

    init();
    return {getGameBoard, getNewChunk};
}

module.exports = gameBoardDoms;

/***/ }),

/***/ "./src/Modules/ship.js":
/*!*****************************!*\
  !*** ./src/Modules/ship.js ***!
  \*****************************/
/***/ ((module) => {

/**
 * @param {_length}        length         length of ship, zero indexed.
 */
const shipFactory = function(_length){
    const length = _length;
    let sections = [];
    for(let x = 0; x<length; x++){
        sections[x]= {hit:false};
    }

    function getLength(){
        return length;
    }
    function getSections(){
        return sections;
    }
    function registerHit(section){
        sections[section].hit = true;
    }
    function getSection(section){
        return(sections[section].hit);
    }
    function isSunk(){
        let sunk = true;
        sections.forEach(section =>{
            if(section.hit == false){
                sunk = false;
            }
        })
        return sunk;
    }
    return {getLength, getSections, getSection, registerHit, isSunk}
}


module.exports = shipFactory;



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
/* harmony import */ var _Modules_Header_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Modules/Header.js */ "./src/Modules/Header.js");


const gameBoard = __webpack_require__(/*! ./Modules/Gameboard.js */ "./src/Modules/Gameboard.js");
const player = __webpack_require__( /*! ./Modules/Player.js */ "./src/Modules/Player.js");


const main = (function(){
    const overDiv = document.createElement('div');
    let header = (0,_Modules_Header_js__WEBPACK_IMPORTED_MODULE_1__.default)();

    document.body.append(overDiv);
    let player1;
    let gameBoard1;
    let playerBoard1;

    let player2;
    let gameBoard2;
    let playerBoard2;

    let gameStarted;

    function init(){
        player1 = player('player1', 4);
        gameBoard1 = gameBoard(player1);
        playerBoard1 = gameBoard1.mainDiv;

        player2 = player('player2', 4);
        gameBoard2 = gameBoard(player2);
        playerBoard2 = gameBoard2.mainDiv;

        gameStarted = false;

        header.setupScreen();

        overDiv.classList.add('fullBoard');
        playerBoard1.addEventListener('click', (event)=>{
            divListenHandlerSetup(event, event.target, player1, gameBoard1);
            mainLoop();
        })
        
        
        overDiv.append(playerBoard1);
    }


    function mainLoop(){
        if(player1.readyToFight()&&!gameStarted){
            cpuPopulator();
            header.fightScreen();
            gameStarted = true;
        }
        else if(player1.readyToFight()){
            cpuPlay();
            checkIfWinner();
        }

    }
    function cpuPlay(){
        function randomCoord(){
            let coordinate = {'x':Math.round(Math.random()*9),'y':Math.round(Math.random()*9)}
            return coordinate;
        }
        function formatCoord(){
            let coordinate = {dataset:{x:coord.x,y:coord.y}};
            return coordinate;
        }

        let coord = randomCoord();

        while(!gameBoard1.validateAttack(coord)){
            coord = randomCoord();
        }
        
       fireShot(formatCoord(), null, gameBoard1);   
    }
    function cpuPopulator(){
        playerBoard2.addEventListener('click', event=>{
                divListenHandlerPlay(event,event.target, player1, gameBoard2);
                })
        Array.from(playerBoard2.children).forEach(child =>{child.classList.add('cpu')})
        
                
        function placeShips(){    

            while(!player2.readyToFight()){
                let newShip = player2.addShipToBoard();

                let randomVertical = flipVert();
                if(randomVertical){
                    player2.toggleVertical();
                }

                let coordinate = randomCoord();
                let coords = [];
                coords.push(coordinate);

                if(player2.isVertical()){
                    for(let i = 1; i<newShip.getLength(); i++){
                         coords.push({y:coordinate.y, x:parseInt(coordinate.x)+i})
                    }
                 }
                 else{
                     for(let i = 1; i<newShip.getLength(); i++){
                         coords.push({x:coordinate.x, y:parseInt(coordinate.y)+i})
                    }
                 }
                
                if(gameBoard2.validateShipPlacement(coords)){
                    console.log(coords);
                    gameBoard2.addShip(coords, newShip);
                }
                else{
                    player2.invalidMove();
                }
            }

            


            function flipVert(){
                let flip = true;
                if(Math.round(Math.random())*10 > Math.round(Math.random())*10){
                    flip = false;
                }
                return flip;
            }
            function randomCoord(){
                let coordinate = {'x':Math.round(Math.random()*9),'y':Math.round(Math.random()*9)}
                return coordinate;
            }

        }
        placeShips();
        overDiv.append(playerBoard2);
    }

    function divListenHandlerPlay(e, chunk, player, gameBoard){
        try{
            if(gameBoard.validateAttack({x:chunk.dataset.x, y:chunk.dataset.y})){
                fireShot(chunk, player, gameBoard);
                checkIfWinner();
                mainLoop();
            }
        }
        catch{
            return;
        }
    }

    function divListenHandlerSetup(e,chunk, player, gameBoard){
        if(!!chunk.dataset.x){
            if(!player.readyToFight()){
                setupPhase(chunk, player, gameBoard);
            }
            else if(player.readyToFight()){
                console.log('Attack the enemy!');
            }
        }
        e.stopPropagation();
    }
    

    function checkIfWinner(){
        if(player1.hasLost()){
            alert('player 2 wins');
            reset();
            init();
        }
        else if(player2.hasLost()){
            alert('player 1 wins');
            reset();
            init();
        }
    }
    function reset(){
        Array.from(overDiv.children).forEach(child=>{
            child.remove();
        })
    }
    
    function setupPhase(chunk, player, gameBoard){
        let newShip = player.addShipToBoard();
        //possibly spin this into ship, allow ship to know where it is.
        let coords = [{x:chunk.dataset.x, y:chunk.dataset.y}];
        if(player.isVertical()){
           for(let i = 1; i<newShip.getLength(); i++){
                coords.push({y:chunk.dataset.y, x:parseInt(chunk.dataset.x)+i})
           }
        }
        else{
            for(let i = 1; i<newShip.getLength(); i++){
                coords.push({x:chunk.dataset.x, y:parseInt(chunk.dataset.y)+i})
           }
        }
        if(gameBoard.validateShipPlacement(coords)){
            gameBoard.addShip(coords, newShip);
        }
        else{
            player.invalidMove();
        }
       
    }

    function fireShot(chunk, player, gameBoard){
        gameBoard.grid[chunk.dataset.x][chunk.dataset.y].recieveAttack();
    }
    init();
})()
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBLENBQUMsRyIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9Nb2R1bGVzL0dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL01vZHVsZXMvSGVhZGVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvTW9kdWxlcy9QbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9Nb2R1bGVzL2JvYXJkRG9tcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL01vZHVsZXMvc2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLmNodW5re1xcbiAgICBib3JkZXItcmFkaXVzOjUlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnNreWJsdWU7XFxuICAgIGhlaWdodDoyMHB4O1xcbiAgICB3aWR0aDoyMHB4O1xcbiAgICBkaXNwbGF5OmdyaWQ7XFxufVxcblxcbi5nYW1lQm9hcmR7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XFxuICAgIGRpc3BsYXk6Z3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDIwcHgpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6YXV0bztcXG4gICAgZ3JpZC1nYXA6IDFweDtcXG4gICAgd2lkdGg6MjEwcHg7XFxuICAgIG1hcmdpbjphdXRvO1xcbn1cXG5cXG4ucDF7XFxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xcbiAgICBsZWZ0OjEwJTtcXG59XFxuLnAye1xcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcXG4gICAgcmlnaHQ6MTAlO1xcbn1cXG5ib2R5e1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMzIsIDMyLCAzMilcXG59XFxuXFxuLnNoaXB7XFxuICAgIGJhY2tncm91bmQ6b3JhbmdlO1xcbn1cXG4uc2hpcC5jaHVuay5hdHRhY2tlZHtcXG4gICAgYmFja2dyb3VuZDogcmVkO1xcbn1cXG5cXG4uY2h1bmsuYXR0YWNrZWR7XFxuICAgIGJhY2tncm91bmQ6IGJsYWNrO1xcbn1cXG4uc2hpcC5jaHVuay5hdHRhY2tlZC5jcHV7XFxuICAgIGJhY2tncm91bmQ6cmVkO1xcbn1cXG4uc2hpcC5jcHV7XFxuICAgIGJhY2tncm91bmQ6IHNreWJsdWU7XFxufVxcbi5mdWxsQm9hcmR7XFxuICAgIGRpc3BsYXk6Z3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMTBweCAyMTBweDtcXG4gICAgZ3JpZC1nYXA6IDUwcHg7XFxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xcbn1cXG5cXG4udGl0bGV7XFxuICAgIGZvbnQtc2l6ZTogMTAwJTtcXG4gICAgZm9udC1mYW1pbHk6J0ZyYW5rbGluIEdvdGhpYyBNZWRpdW0nLCAnQXJpYWwgTmFycm93JywgQXJpYWwsIHNhbnMtc2VyaWY7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XFxuICAgIGNvbG9yOiB3aGl0ZXNtb2tlO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHdCQUF3QjtJQUN4QixXQUFXO0lBQ1gsVUFBVTtJQUNWLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLHVDQUF1QztJQUN2Qyx1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLFdBQVc7SUFDWCxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsUUFBUTtBQUNaO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsU0FBUztBQUNiO0FBQ0E7SUFDSTtBQUNKOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLFlBQVk7SUFDWixrQ0FBa0M7SUFDbEMsY0FBYztJQUNkLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGVBQWU7SUFDZix1RUFBdUU7SUFDdkUsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixpQkFBaUI7QUFDckJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmNodW5re1xcbiAgICBib3JkZXItcmFkaXVzOjUlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnNreWJsdWU7XFxuICAgIGhlaWdodDoyMHB4O1xcbiAgICB3aWR0aDoyMHB4O1xcbiAgICBkaXNwbGF5OmdyaWQ7XFxufVxcblxcbi5nYW1lQm9hcmR7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XFxuICAgIGRpc3BsYXk6Z3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDIwcHgpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6YXV0bztcXG4gICAgZ3JpZC1nYXA6IDFweDtcXG4gICAgd2lkdGg6MjEwcHg7XFxuICAgIG1hcmdpbjphdXRvO1xcbn1cXG5cXG4ucDF7XFxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xcbiAgICBsZWZ0OjEwJTtcXG59XFxuLnAye1xcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcXG4gICAgcmlnaHQ6MTAlO1xcbn1cXG5ib2R5e1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMzIsIDMyLCAzMilcXG59XFxuXFxuLnNoaXB7XFxuICAgIGJhY2tncm91bmQ6b3JhbmdlO1xcbn1cXG4uc2hpcC5jaHVuay5hdHRhY2tlZHtcXG4gICAgYmFja2dyb3VuZDogcmVkO1xcbn1cXG5cXG4uY2h1bmsuYXR0YWNrZWR7XFxuICAgIGJhY2tncm91bmQ6IGJsYWNrO1xcbn1cXG4uc2hpcC5jaHVuay5hdHRhY2tlZC5jcHV7XFxuICAgIGJhY2tncm91bmQ6cmVkO1xcbn1cXG4uc2hpcC5jcHV7XFxuICAgIGJhY2tncm91bmQ6IHNreWJsdWU7XFxufVxcbi5mdWxsQm9hcmR7XFxuICAgIGRpc3BsYXk6Z3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMTBweCAyMTBweDtcXG4gICAgZ3JpZC1nYXA6IDUwcHg7XFxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xcbn1cXG5cXG4udGl0bGV7XFxuICAgIGZvbnQtc2l6ZTogMTAwJTtcXG4gICAgZm9udC1mYW1pbHk6J0ZyYW5rbGluIEdvdGhpYyBNZWRpdW0nLCAnQXJpYWwgTmFycm93JywgQXJpYWwsIHNhbnMtc2VyaWY7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XFxuICAgIGNvbG9yOiB3aGl0ZXNtb2tlO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgdmFyIF9pID0gYXJyID09IG51bGwgPyBudWxsIDogdHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhcnJbU3ltYm9sLml0ZXJhdG9yXSB8fCBhcnJbXCJAQGl0ZXJhdG9yXCJdOyBpZiAoX2kgPT0gbnVsbCkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9zLCBfZTsgdHJ5IHsgZm9yIChfaSA9IF9pLmNhbGwoYXJyKTsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoc3R5bGUsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGUpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoXCJtZWRpYVwiKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZSwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGUpIHtcbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc3Qgc2hpcCA9IHJlcXVpcmUoICcuL3NoaXAuanMnKTtcbmNvbnN0IGJvYXJkRG9tcyA9IHJlcXVpcmUoJy4vYm9hcmREb21zLmpzJyk7XG5jb25zdCBwbGF5ZXIgPSByZXF1aXJlKCcuL1BsYXllci5qcycpO1xuXG5jb25zdCBCT0FSRF9TSVpFID0gMTA7XG5cbmNvbnN0IEdhbWVib2FyZCA9IGZ1bmN0aW9uKF9wbGF5ZXIpe1xuICAgIGxldCBwbGF5ZXIgPSBfcGxheWVyO1xuICAgIGNvbnN0IG5hbWUgPSBfcGxheWVyLmdldE5hbWUoKTtcbiAgICBsZXQgZ2FtZUJvYXJkID0gYm9hcmREb21zKG5hbWUpO1xuICAgIGxldCBtYWluRGl2ID0gZ2FtZUJvYXJkLmdldEdhbWVCb2FyZCgpO1xuICAgIGxldCBncmlkID0gW107XG4gICAgbGV0IGNodW5rID0gZnVuY3Rpb24oX2RvbUVsZW1lbnQpe1xuICAgICAgICBsZXQgZG9tRWxlbWVudCA9IF9kb21FbGVtZW50O1xuICAgICAgICBsZXQgb2NjdXBpZWQgPSBmYWxzZTtcbiAgICAgICAgbGV0IGF0dGFja2VkID0gZmFsc2U7XG4gICAgICAgIGxldCBzaGlwO1xuICAgICAgICBsZXQgc2VjdGlvbjtcbiAgICAgICAgY29uc3QgcmVjaWV2ZUF0dGFjayA9IGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBhdHRhY2tlZCA9IHRydWU7XG4gICAgICAgICAgICBsZXQgaGl0ID0gZmFsc2U7XG4gICAgICAgICAgICBpZiAob2NjdXBpZWQpe1xuICAgICAgICAgICAgICAgIHNoaXAucmVnaXN0ZXJIaXQoc2VjdGlvbik7XG4gICAgICAgICAgICAgICAgaGl0ID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRvbUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnYXR0YWNrZWQnKTtcbiAgICAgICAgICAgIHJldHVybiBoaXQ7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gc2V0U2hpcChfc2hpcCwgX3NlY3Rpb24pe1xuICAgICAgICAgICAgc2hpcCA9IF9zaGlwO1xuICAgICAgICAgICAgc2VjdGlvbiA9IF9zZWN0aW9uO1xuICAgICAgICAgICAgb2NjdXBpZWQgPSB0cnVlO1xuICAgICAgICAgICAgZG9tRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdzaGlwJyk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBjaGVja0F0dGFja2VkKCl7XG4gICAgICAgICAgICByZXR1cm4gYXR0YWNrZWQ7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gY2hlY2tPY2N1cGllZCgpe1xuICAgICAgICAgICAgcmV0dXJuIG9jY3VwaWVkO1xuICAgICAgICB9XG4gICAgICAgIFxuXG4gICAgICAgIHJldHVybiB7cmVjaWV2ZUF0dGFjaywgc2V0U2hpcCwgY2hlY2tBdHRhY2tlZCwgY2hlY2tPY2N1cGllZH07XG4gICAgfVxuICAgIGZ1bmN0aW9uIGluaXQoKXtcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaTxCT0FSRF9TSVpFOyBpKyspe1xuICAgICAgICAgICAgZm9yKGxldCBqID0gMDsgajxCT0FSRF9TSVpFO2orKyl7XG4gICAgICAgICAgICAgICAgaWYoIWdyaWRbaV0pe2dyaWRbaV0gPSBbXX1cbiAgICAgICAgICAgICAgICBuZXdEb21QaWVjZSA9IGFwcGVuZGVyKGksaik7XG4gICAgICAgICAgICAgICAgZ3JpZFtpXVtqXSA9IGNodW5rKG5ld0RvbVBpZWNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBhcHBlbmRlcihpLGope1xuICAgICAgICBuZXdEb21QaWVjZSA9IGdhbWVCb2FyZC5nZXROZXdDaHVuayhpLGopO1xuICAgICAgICBnYW1lQm9hcmQuZ2V0R2FtZUJvYXJkKCkuYXBwZW5kKG5ld0RvbVBpZWNlKTtcbiAgICAgICAgcmV0dXJuIG5ld0RvbVBpZWNlO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge3NoaXB9IHNoaXAgYWNjZXB0cyBhbiBhcnJheSBvZiBjb29yZGluYXRlcyBhbmQgYSBzaGlwXG4gICAgICovXG4gICAgZnVuY3Rpb24gYWRkU2hpcChjb29yZHMsIG5ld1NoaXApe1xuICAgICAgICBsZXQgaSA9IDA7XG4gICAgICAgIGNvb3Jkcy5mb3JFYWNoKChjb29yZGluYXRlKSA9PntcbiAgICAgICAgICAgIGdyaWRbY29vcmRpbmF0ZVsneCddXVtjb29yZGluYXRlWyd5J11dLnNldFNoaXAobmV3U2hpcCwgaSk7XG4gICAgICAgICAgICBpKys7XG4gICAgICAgIH0pXG4gICAgfVxuICAgIGZ1bmN0aW9uIHZhbGlkYXRlU2hpcFBsYWNlbWVudChjb29yZHMpe1xuICAgICAgICBsZXQgdmFsaWQgPSB0cnVlO1xuICAgICAgICB0cnl7XG4gICAgICAgICAgICBjb29yZHMuZm9yRWFjaCgoY29vcmRpbmF0ZSk9PntcbiAgICAgICAgICAgICAgICBpZihncmlkW2Nvb3JkaW5hdGVbJ3gnXV1bY29vcmRpbmF0ZVsneSddXS5jaGVja09jY3VwaWVkKCkpe1xuICAgICAgICAgICAgICAgICAgICB2YWxpZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2h7XG4gICAgICAgICAgICB2YWxpZCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB2YWxpZDtcbiAgICB9XG4gICAgZnVuY3Rpb24gdmFsaWRhdGVBdHRhY2soY29vcmQpe1xuICAgICAgICBpZiAoZ3JpZFtjb29yZFsneCddXVtjb29yZFsneSddXS5jaGVja0F0dGFja2VkKCkpe1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGluaXQoKTtcblxuICAgIHJldHVybiB7Z3JpZCwgYWRkU2hpcCwgbWFpbkRpdiwgdmFsaWRhdGVTaGlwUGxhY2VtZW50LCB2YWxpZGF0ZUF0dGFja307XG59XG5cblxubW9kdWxlLmV4cG9ydHMgPSBHYW1lYm9hcmQ7IiwiY29uc3QgaGVhZGVyID0gZnVuY3Rpb24oKXtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgndGl0bGUnKTtcblxuXG4gICAgY29uc3Qgc2V0dXBTY3JlZW4gPSBmdW5jdGlvbigpe1xuICAgICAgICBoZWFkZXIuaW5uZXJUZXh0ID0gXCJTRVRVUCBQSEFTRSwgUFJFU1MgViBUTyBST1RBVEUgUExBQ0VNRU5UXCI7XG4gICAgfVxuXG4gICAgY29uc3QgZmlnaHRTY3JlZW4gPSBmdW5jdGlvbigpe1xuICAgICAgICBoZWFkZXIuaW5uZXJUZXh0ID0gXCJGSUdIVCFcIjtcbiAgICB9XG5cbiAgICBkb2N1bWVudC5ib2R5LnByZXBlbmQoaGVhZGVyKTtcbiAgICByZXR1cm4ge3NldHVwU2NyZWVuLCBmaWdodFNjcmVlbn1cbiAgICBcbn1cblxuZXhwb3J0IGRlZmF1bHQgaGVhZGVyICIsImNvbnN0IHNoaXAgPSByZXF1aXJlKCAnLi9zaGlwLmpzJyk7XG5cbmNvbnN0IHBsYXllckZhY3RvcnkgPSBmdW5jdGlvbihfbmFtZSwgYW10T2ZTaGlwcyl7XG4gICAgY29uc3QgbmFtZSA9IF9uYW1lO1xuICAgIGxldCBSZW1haW5pbmdUdXJucyA9IGFtdE9mU2hpcHM7XG4gICAgbGV0IHNoaXBzID0gW107XG4gICAgbGV0IHZlcnRpY2FsID0gZmFsc2U7XG5cbiAgICBmdW5jdGlvbiBhZGRTaGlwVG9Cb2FyZCgpe1xuICAgICAgICBpZihSZW1haW5pbmdUdXJucyA9PSA0KXtcbiAgICAgICAgICAgIFJlbWFpbmluZ1R1cm5zLS07XG4gICAgICAgICAgICBsZXQgbmV3U2hpcCA9IHNoaXAoNCk7XG4gICAgICAgICAgICBzaGlwcy5wdXNoKG5ld1NoaXApO1xuICAgICAgICAgICAgcmV0dXJuIG5ld1NoaXA7XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKFJlbWFpbmluZ1R1cm5zID09Myl7XG4gICAgICAgICAgICBSZW1haW5pbmdUdXJucy0tO1xuICAgICAgICAgICAgbGV0IG5ld1NoaXAgPSBzaGlwKDMpO1xuICAgICAgICAgICAgc2hpcHMucHVzaChuZXdTaGlwKTtcbiAgICAgICAgICAgIHJldHVybiBuZXdTaGlwO1xuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgICBSZW1haW5pbmdUdXJucy0tO1xuICAgICAgICAgICAgbGV0IG5ld1NoaXAgPSBzaGlwKDIpO1xuICAgICAgICAgICAgc2hpcHMucHVzaChuZXdTaGlwKTtcbiAgICAgICAgICAgIHJldHVybiBuZXdTaGlwO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVhZHlUb0ZpZ2h0KCl7XG4gICAgICAgIGlmKFJlbWFpbmluZ1R1cm5zID09IDApe1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGludmFsaWRNb3ZlKCl7XG4gICAgICAgIFJlbWFpbmluZ1R1cm5zICsrO1xuICAgICAgICBzaGlwcy5wb3AoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXROYW1lKCl7XG4gICAgICAgIHJldHVybiBuYW1lO1xuICAgIH1cbiAgICBmdW5jdGlvbiBpc1ZlcnRpY2FsKCl7XG4gICAgICAgIHJldHVybiB2ZXJ0aWNhbDtcbiAgICB9XG4gICAgZnVuY3Rpb24gaGFzTG9zdCgpe1xuICAgICAgICBsZXQgbG9zdCA9IHRydWU7XG4gICAgICAgIHNoaXBzLmZvckVhY2goc2hpcD0+e1xuICAgICAgICAgICAgaWYoIXNoaXAuaXNTdW5rKCkpe1xuICAgICAgICAgICAgICAgIGxvc3QgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIGxvc3Q7XG4gICAgfVxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywgKGUpPT57XG4gICAgICAgIGlmKGUua2V5ID09ICd2Jyl7XG4gICAgICAgICAgICB0b2dnbGVWZXJ0aWNhbCgpO1xuICAgICAgICB9XG4gICAgfSlcbiAgICBmdW5jdGlvbiB0b2dnbGVWZXJ0aWNhbCgpe1xuICAgICAgICB2ZXJ0aWNhbCA9ICF2ZXJ0aWNhbDtcbiAgICB9XG5cbiAgICByZXR1cm57Z2V0TmFtZSwgcmVhZHlUb0ZpZ2h0LCBhZGRTaGlwVG9Cb2FyZCwgaXNWZXJ0aWNhbCwgaGFzTG9zdCwgaW52YWxpZE1vdmUsIHRvZ2dsZVZlcnRpY2FsfVxufVxuXG5cbm1vZHVsZS5leHBvcnRzID0gcGxheWVyRmFjdG9yeTsiLCJjb25zdCBnYW1lQm9hcmREb21zID0gZnVuY3Rpb24obmFtZSl7XG4gICAgY29uc3QgbWFpbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgZnVuY3Rpb24gaW5pdCgpeyAgICAgICAgXG4gICAgICAgIG1haW5EaXYuY2xhc3NMaXN0LmFkZCgnZ2FtZUJvYXJkJyk7XG4gICAgICAgIGlmKG5hbWUgPT0gJ3BsYXllcjEnKXtcbiAgICAgICAgICAgIG1haW5EaXYuY2xhc3NMaXN0LmFkZCgncDEnKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChuYW1lID09ICdwbGF5ZXIyJyl7XG4gICAgICAgICAgICBtYWluRGl2LmNsYXNzTGlzdC5hZGQoJ3AyJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXROZXdDaHVuayh4LCB5KXtcbiAgICAgICAgbGV0IGNodW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNodW5rLmRhdGFzZXQueCA9IHg7XG4gICAgICAgIGNodW5rLmRhdGFzZXQueSA9IHk7XG4gICAgICAgIGNodW5rLmNsYXNzTGlzdC5hZGQoJ2NodW5rJyk7XG4gICAgICAgIHJldHVybiBjaHVuaztcbiAgICB9XG4gICAgZnVuY3Rpb24gZ2V0R2FtZUJvYXJkKCl7XG4gICAgICAgIHJldHVybiBtYWluRGl2O1xuICAgIH1cblxuICAgIGluaXQoKTtcbiAgICByZXR1cm4ge2dldEdhbWVCb2FyZCwgZ2V0TmV3Q2h1bmt9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdhbWVCb2FyZERvbXM7IiwiLyoqXG4gKiBAcGFyYW0ge19sZW5ndGh9ICAgICAgICBsZW5ndGggICAgICAgICBsZW5ndGggb2Ygc2hpcCwgemVybyBpbmRleGVkLlxuICovXG5jb25zdCBzaGlwRmFjdG9yeSA9IGZ1bmN0aW9uKF9sZW5ndGgpe1xuICAgIGNvbnN0IGxlbmd0aCA9IF9sZW5ndGg7XG4gICAgbGV0IHNlY3Rpb25zID0gW107XG4gICAgZm9yKGxldCB4ID0gMDsgeDxsZW5ndGg7IHgrKyl7XG4gICAgICAgIHNlY3Rpb25zW3hdPSB7aGl0OmZhbHNlfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRMZW5ndGgoKXtcbiAgICAgICAgcmV0dXJuIGxlbmd0aDtcbiAgICB9XG4gICAgZnVuY3Rpb24gZ2V0U2VjdGlvbnMoKXtcbiAgICAgICAgcmV0dXJuIHNlY3Rpb25zO1xuICAgIH1cbiAgICBmdW5jdGlvbiByZWdpc3RlckhpdChzZWN0aW9uKXtcbiAgICAgICAgc2VjdGlvbnNbc2VjdGlvbl0uaGl0ID0gdHJ1ZTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZ2V0U2VjdGlvbihzZWN0aW9uKXtcbiAgICAgICAgcmV0dXJuKHNlY3Rpb25zW3NlY3Rpb25dLmhpdCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGlzU3Vuaygpe1xuICAgICAgICBsZXQgc3VuayA9IHRydWU7XG4gICAgICAgIHNlY3Rpb25zLmZvckVhY2goc2VjdGlvbiA9PntcbiAgICAgICAgICAgIGlmKHNlY3Rpb24uaGl0ID09IGZhbHNlKXtcbiAgICAgICAgICAgICAgICBzdW5rID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiBzdW5rO1xuICAgIH1cbiAgICByZXR1cm4ge2dldExlbmd0aCwgZ2V0U2VjdGlvbnMsIGdldFNlY3Rpb24sIHJlZ2lzdGVySGl0LCBpc1N1bmt9XG59XG5cblxubW9kdWxlLmV4cG9ydHMgPSBzaGlwRmFjdG9yeTtcblxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuL01vZHVsZXMvSGVhZGVyLmpzJztcbmNvbnN0IGdhbWVCb2FyZCA9IHJlcXVpcmUoJy4vTW9kdWxlcy9HYW1lYm9hcmQuanMnKTtcbmNvbnN0IHBsYXllciA9IHJlcXVpcmUoICcuL01vZHVsZXMvUGxheWVyLmpzJyk7XG5cblxuY29uc3QgbWFpbiA9IChmdW5jdGlvbigpe1xuICAgIGNvbnN0IG92ZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsZXQgaGVhZGVyID0gSGVhZGVyKCk7XG5cbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZChvdmVyRGl2KTtcbiAgICBsZXQgcGxheWVyMTtcbiAgICBsZXQgZ2FtZUJvYXJkMTtcbiAgICBsZXQgcGxheWVyQm9hcmQxO1xuXG4gICAgbGV0IHBsYXllcjI7XG4gICAgbGV0IGdhbWVCb2FyZDI7XG4gICAgbGV0IHBsYXllckJvYXJkMjtcblxuICAgIGxldCBnYW1lU3RhcnRlZDtcblxuICAgIGZ1bmN0aW9uIGluaXQoKXtcbiAgICAgICAgcGxheWVyMSA9IHBsYXllcigncGxheWVyMScsIDQpO1xuICAgICAgICBnYW1lQm9hcmQxID0gZ2FtZUJvYXJkKHBsYXllcjEpO1xuICAgICAgICBwbGF5ZXJCb2FyZDEgPSBnYW1lQm9hcmQxLm1haW5EaXY7XG5cbiAgICAgICAgcGxheWVyMiA9IHBsYXllcigncGxheWVyMicsIDQpO1xuICAgICAgICBnYW1lQm9hcmQyID0gZ2FtZUJvYXJkKHBsYXllcjIpO1xuICAgICAgICBwbGF5ZXJCb2FyZDIgPSBnYW1lQm9hcmQyLm1haW5EaXY7XG5cbiAgICAgICAgZ2FtZVN0YXJ0ZWQgPSBmYWxzZTtcblxuICAgICAgICBoZWFkZXIuc2V0dXBTY3JlZW4oKTtcblxuICAgICAgICBvdmVyRGl2LmNsYXNzTGlzdC5hZGQoJ2Z1bGxCb2FyZCcpO1xuICAgICAgICBwbGF5ZXJCb2FyZDEuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpPT57XG4gICAgICAgICAgICBkaXZMaXN0ZW5IYW5kbGVyU2V0dXAoZXZlbnQsIGV2ZW50LnRhcmdldCwgcGxheWVyMSwgZ2FtZUJvYXJkMSk7XG4gICAgICAgICAgICBtYWluTG9vcCgpO1xuICAgICAgICB9KVxuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIG92ZXJEaXYuYXBwZW5kKHBsYXllckJvYXJkMSk7XG4gICAgfVxuXG5cbiAgICBmdW5jdGlvbiBtYWluTG9vcCgpe1xuICAgICAgICBpZihwbGF5ZXIxLnJlYWR5VG9GaWdodCgpJiYhZ2FtZVN0YXJ0ZWQpe1xuICAgICAgICAgICAgY3B1UG9wdWxhdG9yKCk7XG4gICAgICAgICAgICBoZWFkZXIuZmlnaHRTY3JlZW4oKTtcbiAgICAgICAgICAgIGdhbWVTdGFydGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKHBsYXllcjEucmVhZHlUb0ZpZ2h0KCkpe1xuICAgICAgICAgICAgY3B1UGxheSgpO1xuICAgICAgICAgICAgY2hlY2tJZldpbm5lcigpO1xuICAgICAgICB9XG5cbiAgICB9XG4gICAgZnVuY3Rpb24gY3B1UGxheSgpe1xuICAgICAgICBmdW5jdGlvbiByYW5kb21Db29yZCgpe1xuICAgICAgICAgICAgbGV0IGNvb3JkaW5hdGUgPSB7J3gnOk1hdGgucm91bmQoTWF0aC5yYW5kb20oKSo5KSwneSc6TWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKjkpfVxuICAgICAgICAgICAgcmV0dXJuIGNvb3JkaW5hdGU7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gZm9ybWF0Q29vcmQoKXtcbiAgICAgICAgICAgIGxldCBjb29yZGluYXRlID0ge2RhdGFzZXQ6e3g6Y29vcmQueCx5OmNvb3JkLnl9fTtcbiAgICAgICAgICAgIHJldHVybiBjb29yZGluYXRlO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGNvb3JkID0gcmFuZG9tQ29vcmQoKTtcblxuICAgICAgICB3aGlsZSghZ2FtZUJvYXJkMS52YWxpZGF0ZUF0dGFjayhjb29yZCkpe1xuICAgICAgICAgICAgY29vcmQgPSByYW5kb21Db29yZCgpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgIGZpcmVTaG90KGZvcm1hdENvb3JkKCksIG51bGwsIGdhbWVCb2FyZDEpOyAgIFxuICAgIH1cbiAgICBmdW5jdGlvbiBjcHVQb3B1bGF0b3IoKXtcbiAgICAgICAgcGxheWVyQm9hcmQyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQ9PntcbiAgICAgICAgICAgICAgICBkaXZMaXN0ZW5IYW5kbGVyUGxheShldmVudCxldmVudC50YXJnZXQsIHBsYXllcjEsIGdhbWVCb2FyZDIpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgIEFycmF5LmZyb20ocGxheWVyQm9hcmQyLmNoaWxkcmVuKS5mb3JFYWNoKGNoaWxkID0+e2NoaWxkLmNsYXNzTGlzdC5hZGQoJ2NwdScpfSlcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgXG4gICAgICAgIGZ1bmN0aW9uIHBsYWNlU2hpcHMoKXsgICAgXG5cbiAgICAgICAgICAgIHdoaWxlKCFwbGF5ZXIyLnJlYWR5VG9GaWdodCgpKXtcbiAgICAgICAgICAgICAgICBsZXQgbmV3U2hpcCA9IHBsYXllcjIuYWRkU2hpcFRvQm9hcmQoKTtcblxuICAgICAgICAgICAgICAgIGxldCByYW5kb21WZXJ0aWNhbCA9IGZsaXBWZXJ0KCk7XG4gICAgICAgICAgICAgICAgaWYocmFuZG9tVmVydGljYWwpe1xuICAgICAgICAgICAgICAgICAgICBwbGF5ZXIyLnRvZ2dsZVZlcnRpY2FsKCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgbGV0IGNvb3JkaW5hdGUgPSByYW5kb21Db29yZCgpO1xuICAgICAgICAgICAgICAgIGxldCBjb29yZHMgPSBbXTtcbiAgICAgICAgICAgICAgICBjb29yZHMucHVzaChjb29yZGluYXRlKTtcblxuICAgICAgICAgICAgICAgIGlmKHBsYXllcjIuaXNWZXJ0aWNhbCgpKXtcbiAgICAgICAgICAgICAgICAgICAgZm9yKGxldCBpID0gMTsgaTxuZXdTaGlwLmdldExlbmd0aCgpOyBpKyspe1xuICAgICAgICAgICAgICAgICAgICAgICAgIGNvb3Jkcy5wdXNoKHt5OmNvb3JkaW5hdGUueSwgeDpwYXJzZUludChjb29yZGluYXRlLngpK2l9KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgIGZvcihsZXQgaSA9IDE7IGk8bmV3U2hpcC5nZXRMZW5ndGgoKTsgaSsrKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICBjb29yZHMucHVzaCh7eDpjb29yZGluYXRlLngsIHk6cGFyc2VJbnQoY29vcmRpbmF0ZS55KStpfSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYoZ2FtZUJvYXJkMi52YWxpZGF0ZVNoaXBQbGFjZW1lbnQoY29vcmRzKSl7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGNvb3Jkcyk7XG4gICAgICAgICAgICAgICAgICAgIGdhbWVCb2FyZDIuYWRkU2hpcChjb29yZHMsIG5ld1NoaXApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgICAgICBwbGF5ZXIyLmludmFsaWRNb3ZlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBcblxuXG4gICAgICAgICAgICBmdW5jdGlvbiBmbGlwVmVydCgpe1xuICAgICAgICAgICAgICAgIGxldCBmbGlwID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBpZihNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkpKjEwID4gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKSoxMCl7XG4gICAgICAgICAgICAgICAgICAgIGZsaXAgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZsaXA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmdW5jdGlvbiByYW5kb21Db29yZCgpe1xuICAgICAgICAgICAgICAgIGxldCBjb29yZGluYXRlID0geyd4JzpNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkqOSksJ3knOk1hdGgucm91bmQoTWF0aC5yYW5kb20oKSo5KX1cbiAgICAgICAgICAgICAgICByZXR1cm4gY29vcmRpbmF0ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgICAgIHBsYWNlU2hpcHMoKTtcbiAgICAgICAgb3ZlckRpdi5hcHBlbmQocGxheWVyQm9hcmQyKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkaXZMaXN0ZW5IYW5kbGVyUGxheShlLCBjaHVuaywgcGxheWVyLCBnYW1lQm9hcmQpe1xuICAgICAgICB0cnl7XG4gICAgICAgICAgICBpZihnYW1lQm9hcmQudmFsaWRhdGVBdHRhY2soe3g6Y2h1bmsuZGF0YXNldC54LCB5OmNodW5rLmRhdGFzZXQueX0pKXtcbiAgICAgICAgICAgICAgICBmaXJlU2hvdChjaHVuaywgcGxheWVyLCBnYW1lQm9hcmQpO1xuICAgICAgICAgICAgICAgIGNoZWNrSWZXaW5uZXIoKTtcbiAgICAgICAgICAgICAgICBtYWluTG9vcCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNhdGNoe1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGl2TGlzdGVuSGFuZGxlclNldHVwKGUsY2h1bmssIHBsYXllciwgZ2FtZUJvYXJkKXtcbiAgICAgICAgaWYoISFjaHVuay5kYXRhc2V0Lngpe1xuICAgICAgICAgICAgaWYoIXBsYXllci5yZWFkeVRvRmlnaHQoKSl7XG4gICAgICAgICAgICAgICAgc2V0dXBQaGFzZShjaHVuaywgcGxheWVyLCBnYW1lQm9hcmQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZihwbGF5ZXIucmVhZHlUb0ZpZ2h0KCkpe1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdBdHRhY2sgdGhlIGVuZW15IScpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfVxuICAgIFxuXG4gICAgZnVuY3Rpb24gY2hlY2tJZldpbm5lcigpe1xuICAgICAgICBpZihwbGF5ZXIxLmhhc0xvc3QoKSl7XG4gICAgICAgICAgICBhbGVydCgncGxheWVyIDIgd2lucycpO1xuICAgICAgICAgICAgcmVzZXQoKTtcbiAgICAgICAgICAgIGluaXQoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKHBsYXllcjIuaGFzTG9zdCgpKXtcbiAgICAgICAgICAgIGFsZXJ0KCdwbGF5ZXIgMSB3aW5zJyk7XG4gICAgICAgICAgICByZXNldCgpO1xuICAgICAgICAgICAgaW5pdCgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIHJlc2V0KCl7XG4gICAgICAgIEFycmF5LmZyb20ob3ZlckRpdi5jaGlsZHJlbikuZm9yRWFjaChjaGlsZD0+e1xuICAgICAgICAgICAgY2hpbGQucmVtb3ZlKCk7XG4gICAgICAgIH0pXG4gICAgfVxuICAgIFxuICAgIGZ1bmN0aW9uIHNldHVwUGhhc2UoY2h1bmssIHBsYXllciwgZ2FtZUJvYXJkKXtcbiAgICAgICAgbGV0IG5ld1NoaXAgPSBwbGF5ZXIuYWRkU2hpcFRvQm9hcmQoKTtcbiAgICAgICAgLy9wb3NzaWJseSBzcGluIHRoaXMgaW50byBzaGlwLCBhbGxvdyBzaGlwIHRvIGtub3cgd2hlcmUgaXQgaXMuXG4gICAgICAgIGxldCBjb29yZHMgPSBbe3g6Y2h1bmsuZGF0YXNldC54LCB5OmNodW5rLmRhdGFzZXQueX1dO1xuICAgICAgICBpZihwbGF5ZXIuaXNWZXJ0aWNhbCgpKXtcbiAgICAgICAgICAgZm9yKGxldCBpID0gMTsgaTxuZXdTaGlwLmdldExlbmd0aCgpOyBpKyspe1xuICAgICAgICAgICAgICAgIGNvb3Jkcy5wdXNoKHt5OmNodW5rLmRhdGFzZXQueSwgeDpwYXJzZUludChjaHVuay5kYXRhc2V0LngpK2l9KVxuICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IDE7IGk8bmV3U2hpcC5nZXRMZW5ndGgoKTsgaSsrKXtcbiAgICAgICAgICAgICAgICBjb29yZHMucHVzaCh7eDpjaHVuay5kYXRhc2V0LngsIHk6cGFyc2VJbnQoY2h1bmsuZGF0YXNldC55KStpfSlcbiAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmKGdhbWVCb2FyZC52YWxpZGF0ZVNoaXBQbGFjZW1lbnQoY29vcmRzKSl7XG4gICAgICAgICAgICBnYW1lQm9hcmQuYWRkU2hpcChjb29yZHMsIG5ld1NoaXApO1xuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgICBwbGF5ZXIuaW52YWxpZE1vdmUoKTtcbiAgICAgICAgfVxuICAgICAgIFxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGZpcmVTaG90KGNodW5rLCBwbGF5ZXIsIGdhbWVCb2FyZCl7XG4gICAgICAgIGdhbWVCb2FyZC5ncmlkW2NodW5rLmRhdGFzZXQueF1bY2h1bmsuZGF0YXNldC55XS5yZWNpZXZlQXR0YWNrKCk7XG4gICAgfVxuICAgIGluaXQoKTtcbn0pKCkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=