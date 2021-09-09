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
___CSS_LOADER_EXPORT___.push([module.id, ".chunk{\n    border-radius:5%;\n    background-color:skyblue;\n    height:20px;\n    width:20px;\n    display:grid;\n}\n\n.gameBoard{\n    background-color: grey;\n    display:grid;\n    grid-template-columns: repeat(10, 20px);\n    grid-template-rows:auto;\n    grid-gap: 1px;\n    width:210px;\n    margin-top:25%;\n}\n\n.p1{\n    position:absolute;\n    left:10%;\n}\n.p2{\n    position:absolute;\n    right:10%;\n}\nbody{\n    background: rgb(32, 32, 32)\n}\n\n.ship{\n    background:orange;\n}\n.ship.chunk.attacked{\n    background: red;\n}\n\n.chunk.attacked{\n    background: black;\n}\n.ship.chunk.attacked.cpu{\n    background:red;\n}\n.ship.cpu{\n    background: skyblue;\n}\n.fullBoard{\n    display:grid;\n    grid-template-columns: 210px 210px;\n    grid-gap: 50px;\n    text-align:center;\n}\n\n.title{\n    font-size: 100%;\n    font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\n    margin: auto;\n    text-align:center;\n    color: whitesmoke;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,gBAAgB;IAChB,wBAAwB;IACxB,WAAW;IACX,UAAU;IACV,YAAY;AAChB;;AAEA;IACI,sBAAsB;IACtB,YAAY;IACZ,uCAAuC;IACvC,uBAAuB;IACvB,aAAa;IACb,WAAW;IACX,cAAc;AAClB;;AAEA;IACI,iBAAiB;IACjB,QAAQ;AACZ;AACA;IACI,iBAAiB;IACjB,SAAS;AACb;AACA;IACI;AACJ;;AAEA;IACI,iBAAiB;AACrB;AACA;IACI,eAAe;AACnB;;AAEA;IACI,iBAAiB;AACrB;AACA;IACI,cAAc;AAClB;AACA;IACI,mBAAmB;AACvB;AACA;IACI,YAAY;IACZ,kCAAkC;IAClC,cAAc;IACd,iBAAiB;AACrB;;AAEA;IACI,eAAe;IACf,uEAAuE;IACvE,YAAY;IACZ,iBAAiB;IACjB,iBAAiB;AACrB","sourcesContent":[".chunk{\n    border-radius:5%;\n    background-color:skyblue;\n    height:20px;\n    width:20px;\n    display:grid;\n}\n\n.gameBoard{\n    background-color: grey;\n    display:grid;\n    grid-template-columns: repeat(10, 20px);\n    grid-template-rows:auto;\n    grid-gap: 1px;\n    width:210px;\n    margin-top:25%;\n}\n\n.p1{\n    position:absolute;\n    left:10%;\n}\n.p2{\n    position:absolute;\n    right:10%;\n}\nbody{\n    background: rgb(32, 32, 32)\n}\n\n.ship{\n    background:orange;\n}\n.ship.chunk.attacked{\n    background: red;\n}\n\n.chunk.attacked{\n    background: black;\n}\n.ship.chunk.attacked.cpu{\n    background:red;\n}\n.ship.cpu{\n    background: skyblue;\n}\n.fullBoard{\n    display:grid;\n    grid-template-columns: 210px 210px;\n    grid-gap: 50px;\n    text-align:center;\n}\n\n.title{\n    font-size: 100%;\n    font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\n    margin: auto;\n    text-align:center;\n    color: whitesmoke;\n}"],"sourceRoot":""}]);
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
            console.log("wait shit");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBLENBQUMsRyIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9Nb2R1bGVzL0dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL01vZHVsZXMvSGVhZGVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvTW9kdWxlcy9QbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9Nb2R1bGVzL2JvYXJkRG9tcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL01vZHVsZXMvc2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLmNodW5re1xcbiAgICBib3JkZXItcmFkaXVzOjUlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnNreWJsdWU7XFxuICAgIGhlaWdodDoyMHB4O1xcbiAgICB3aWR0aDoyMHB4O1xcbiAgICBkaXNwbGF5OmdyaWQ7XFxufVxcblxcbi5nYW1lQm9hcmR7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XFxuICAgIGRpc3BsYXk6Z3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDIwcHgpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6YXV0bztcXG4gICAgZ3JpZC1nYXA6IDFweDtcXG4gICAgd2lkdGg6MjEwcHg7XFxuICAgIG1hcmdpbi10b3A6MjUlO1xcbn1cXG5cXG4ucDF7XFxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xcbiAgICBsZWZ0OjEwJTtcXG59XFxuLnAye1xcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcXG4gICAgcmlnaHQ6MTAlO1xcbn1cXG5ib2R5e1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMzIsIDMyLCAzMilcXG59XFxuXFxuLnNoaXB7XFxuICAgIGJhY2tncm91bmQ6b3JhbmdlO1xcbn1cXG4uc2hpcC5jaHVuay5hdHRhY2tlZHtcXG4gICAgYmFja2dyb3VuZDogcmVkO1xcbn1cXG5cXG4uY2h1bmsuYXR0YWNrZWR7XFxuICAgIGJhY2tncm91bmQ6IGJsYWNrO1xcbn1cXG4uc2hpcC5jaHVuay5hdHRhY2tlZC5jcHV7XFxuICAgIGJhY2tncm91bmQ6cmVkO1xcbn1cXG4uc2hpcC5jcHV7XFxuICAgIGJhY2tncm91bmQ6IHNreWJsdWU7XFxufVxcbi5mdWxsQm9hcmR7XFxuICAgIGRpc3BsYXk6Z3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMTBweCAyMTBweDtcXG4gICAgZ3JpZC1nYXA6IDUwcHg7XFxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xcbn1cXG5cXG4udGl0bGV7XFxuICAgIGZvbnQtc2l6ZTogMTAwJTtcXG4gICAgZm9udC1mYW1pbHk6J0ZyYW5rbGluIEdvdGhpYyBNZWRpdW0nLCAnQXJpYWwgTmFycm93JywgQXJpYWwsIHNhbnMtc2VyaWY7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XFxuICAgIGNvbG9yOiB3aGl0ZXNtb2tlO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHdCQUF3QjtJQUN4QixXQUFXO0lBQ1gsVUFBVTtJQUNWLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLHVDQUF1QztJQUN2Qyx1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLFdBQVc7SUFDWCxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLFFBQVE7QUFDWjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLFNBQVM7QUFDYjtBQUNBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksY0FBYztBQUNsQjtBQUNBO0lBQ0ksbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osa0NBQWtDO0lBQ2xDLGNBQWM7SUFDZCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsdUVBQXVFO0lBQ3ZFLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsaUJBQWlCO0FBQ3JCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5jaHVua3tcXG4gICAgYm9yZGVyLXJhZGl1czo1JTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjpza3libHVlO1xcbiAgICBoZWlnaHQ6MjBweDtcXG4gICAgd2lkdGg6MjBweDtcXG4gICAgZGlzcGxheTpncmlkO1xcbn1cXG5cXG4uZ2FtZUJvYXJke1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xcbiAgICBkaXNwbGF5OmdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAyMHB4KTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOmF1dG87XFxuICAgIGdyaWQtZ2FwOiAxcHg7XFxuICAgIHdpZHRoOjIxMHB4O1xcbiAgICBtYXJnaW4tdG9wOjI1JTtcXG59XFxuXFxuLnAxe1xcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcXG4gICAgbGVmdDoxMCU7XFxufVxcbi5wMntcXG4gICAgcG9zaXRpb246YWJzb2x1dGU7XFxuICAgIHJpZ2h0OjEwJTtcXG59XFxuYm9keXtcXG4gICAgYmFja2dyb3VuZDogcmdiKDMyLCAzMiwgMzIpXFxufVxcblxcbi5zaGlwe1xcbiAgICBiYWNrZ3JvdW5kOm9yYW5nZTtcXG59XFxuLnNoaXAuY2h1bmsuYXR0YWNrZWR7XFxuICAgIGJhY2tncm91bmQ6IHJlZDtcXG59XFxuXFxuLmNodW5rLmF0dGFja2Vke1xcbiAgICBiYWNrZ3JvdW5kOiBibGFjaztcXG59XFxuLnNoaXAuY2h1bmsuYXR0YWNrZWQuY3B1e1xcbiAgICBiYWNrZ3JvdW5kOnJlZDtcXG59XFxuLnNoaXAuY3B1e1xcbiAgICBiYWNrZ3JvdW5kOiBza3libHVlO1xcbn1cXG4uZnVsbEJvYXJke1xcbiAgICBkaXNwbGF5OmdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjEwcHggMjEwcHg7XFxuICAgIGdyaWQtZ2FwOiA1MHB4O1xcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcXG59XFxuXFxuLnRpdGxle1xcbiAgICBmb250LXNpemU6IDEwMCU7XFxuICAgIGZvbnQtZmFtaWx5OidGcmFua2xpbiBHb3RoaWMgTWVkaXVtJywgJ0FyaWFsIE5hcnJvdycsIEFyaWFsLCBzYW5zLXNlcmlmO1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xcbiAgICBjb2xvcjogd2hpdGVzbW9rZTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgeyByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7IHZhciBfaSA9IGFyciA9PSBudWxsID8gbnVsbCA6IHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgYXJyW1N5bWJvbC5pdGVyYXRvcl0gfHwgYXJyW1wiQEBpdGVyYXRvclwiXTsgaWYgKF9pID09IG51bGwpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfcywgX2U7IHRyeSB7IGZvciAoX2kgPSBfaS5jYWxsKGFycik7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7IH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pIHtcbiAgdmFyIF9pdGVtID0gX3NsaWNlZFRvQXJyYXkoaXRlbSwgNCksXG4gICAgICBjb250ZW50ID0gX2l0ZW1bMV0sXG4gICAgICBjc3NNYXBwaW5nID0gX2l0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKHN0eWxlLCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIHJldHVybiBzdHlsZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlKSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKFwibWVkaWFcIik7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlKSB7XG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNvbnN0IHNoaXAgPSByZXF1aXJlKCAnLi9zaGlwLmpzJyk7XG5jb25zdCBib2FyZERvbXMgPSByZXF1aXJlKCcuL2JvYXJkRG9tcy5qcycpO1xuY29uc3QgcGxheWVyID0gcmVxdWlyZSgnLi9QbGF5ZXIuanMnKTtcblxuY29uc3QgQk9BUkRfU0laRSA9IDEwO1xuXG5jb25zdCBHYW1lYm9hcmQgPSBmdW5jdGlvbihfcGxheWVyKXtcbiAgICBsZXQgcGxheWVyID0gX3BsYXllcjtcbiAgICBjb25zdCBuYW1lID0gX3BsYXllci5nZXROYW1lKCk7XG4gICAgbGV0IGdhbWVCb2FyZCA9IGJvYXJkRG9tcyhuYW1lKTtcbiAgICBsZXQgbWFpbkRpdiA9IGdhbWVCb2FyZC5nZXRHYW1lQm9hcmQoKTtcbiAgICBsZXQgZ3JpZCA9IFtdO1xuICAgIGxldCBjaHVuayA9IGZ1bmN0aW9uKF9kb21FbGVtZW50KXtcbiAgICAgICAgbGV0IGRvbUVsZW1lbnQgPSBfZG9tRWxlbWVudDtcbiAgICAgICAgbGV0IG9jY3VwaWVkID0gZmFsc2U7XG4gICAgICAgIGxldCBhdHRhY2tlZCA9IGZhbHNlO1xuICAgICAgICBsZXQgc2hpcDtcbiAgICAgICAgbGV0IHNlY3Rpb247XG4gICAgICAgIGNvbnN0IHJlY2lldmVBdHRhY2sgPSBmdW5jdGlvbigpe1xuICAgICAgICAgICAgYXR0YWNrZWQgPSB0cnVlO1xuICAgICAgICAgICAgbGV0IGhpdCA9IGZhbHNlO1xuICAgICAgICAgICAgaWYgKG9jY3VwaWVkKXtcbiAgICAgICAgICAgICAgICBzaGlwLnJlZ2lzdGVySGl0KHNlY3Rpb24pO1xuICAgICAgICAgICAgICAgIGhpdCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkb21FbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2F0dGFja2VkJyk7XG4gICAgICAgICAgICByZXR1cm4gaGl0O1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIHNldFNoaXAoX3NoaXAsIF9zZWN0aW9uKXtcbiAgICAgICAgICAgIHNoaXAgPSBfc2hpcDtcbiAgICAgICAgICAgIHNlY3Rpb24gPSBfc2VjdGlvbjtcbiAgICAgICAgICAgIG9jY3VwaWVkID0gdHJ1ZTtcbiAgICAgICAgICAgIGRvbUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnc2hpcCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gY2hlY2tBdHRhY2tlZCgpe1xuICAgICAgICAgICAgcmV0dXJuIGF0dGFja2VkO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGNoZWNrT2NjdXBpZWQoKXtcbiAgICAgICAgICAgIHJldHVybiBvY2N1cGllZDtcbiAgICAgICAgfVxuICAgICAgICBcblxuICAgICAgICByZXR1cm4ge3JlY2lldmVBdHRhY2ssIHNldFNoaXAsIGNoZWNrQXR0YWNrZWQsIGNoZWNrT2NjdXBpZWR9O1xuICAgIH1cbiAgICBmdW5jdGlvbiBpbml0KCl7XG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGk8Qk9BUkRfU0laRTsgaSsrKXtcbiAgICAgICAgICAgIGZvcihsZXQgaiA9IDA7IGo8Qk9BUkRfU0laRTtqKyspe1xuICAgICAgICAgICAgICAgIGlmKCFncmlkW2ldKXtncmlkW2ldID0gW119XG4gICAgICAgICAgICAgICAgbmV3RG9tUGllY2UgPSBhcHBlbmRlcihpLGopO1xuICAgICAgICAgICAgICAgIGdyaWRbaV1bal0gPSBjaHVuayhuZXdEb21QaWVjZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gYXBwZW5kZXIoaSxqKXtcbiAgICAgICAgbmV3RG9tUGllY2UgPSBnYW1lQm9hcmQuZ2V0TmV3Q2h1bmsoaSxqKTtcbiAgICAgICAgZ2FtZUJvYXJkLmdldEdhbWVCb2FyZCgpLmFwcGVuZChuZXdEb21QaWVjZSk7XG4gICAgICAgIHJldHVybiBuZXdEb21QaWVjZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHBhcmFtIHtzaGlwfSBzaGlwIGFjY2VwdHMgYW4gYXJyYXkgb2YgY29vcmRpbmF0ZXMgYW5kIGEgc2hpcFxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGFkZFNoaXAoY29vcmRzLCBuZXdTaGlwKXtcbiAgICAgICAgbGV0IGkgPSAwO1xuICAgICAgICBjb29yZHMuZm9yRWFjaCgoY29vcmRpbmF0ZSkgPT57XG4gICAgICAgICAgICBncmlkW2Nvb3JkaW5hdGVbJ3gnXV1bY29vcmRpbmF0ZVsneSddXS5zZXRTaGlwKG5ld1NoaXAsIGkpO1xuICAgICAgICAgICAgaSsrO1xuICAgICAgICB9KVxuICAgIH1cbiAgICBmdW5jdGlvbiB2YWxpZGF0ZVNoaXBQbGFjZW1lbnQoY29vcmRzKXtcbiAgICAgICAgbGV0IHZhbGlkID0gdHJ1ZTtcbiAgICAgICAgdHJ5e1xuICAgICAgICAgICAgY29vcmRzLmZvckVhY2goKGNvb3JkaW5hdGUpPT57XG4gICAgICAgICAgICAgICAgaWYoZ3JpZFtjb29yZGluYXRlWyd4J11dW2Nvb3JkaW5hdGVbJ3knXV0uY2hlY2tPY2N1cGllZCgpKXtcbiAgICAgICAgICAgICAgICAgICAgdmFsaWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIGNhdGNoe1xuICAgICAgICAgICAgdmFsaWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdmFsaWQ7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHZhbGlkYXRlQXR0YWNrKGNvb3JkKXtcbiAgICAgICAgaWYgKGdyaWRbY29vcmRbJ3gnXV1bY29vcmRbJ3knXV0uY2hlY2tBdHRhY2tlZCgpKXtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBpbml0KCk7XG5cbiAgICByZXR1cm4ge2dyaWQsIGFkZFNoaXAsIG1haW5EaXYsIHZhbGlkYXRlU2hpcFBsYWNlbWVudCwgdmFsaWRhdGVBdHRhY2t9O1xufVxuXG5cbm1vZHVsZS5leHBvcnRzID0gR2FtZWJvYXJkOyIsImNvbnN0IGhlYWRlciA9IGZ1bmN0aW9uKCl7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ3RpdGxlJyk7XG5cblxuICAgIGNvbnN0IHNldHVwU2NyZWVuID0gZnVuY3Rpb24oKXtcbiAgICAgICAgaGVhZGVyLmlubmVyVGV4dCA9IFwiU0VUVVAgUEhBU0UsIFBSRVNTIFYgVE8gUk9UQVRFIFBMQUNFTUVOVFwiO1xuICAgIH1cblxuICAgIGNvbnN0IGZpZ2h0U2NyZWVuID0gZnVuY3Rpb24oKXtcbiAgICAgICAgaGVhZGVyLmlubmVyVGV4dCA9IFwiRklHSFQhXCI7XG4gICAgfVxuXG4gICAgZG9jdW1lbnQuYm9keS5wcmVwZW5kKGhlYWRlcik7XG4gICAgcmV0dXJuIHtzZXR1cFNjcmVlbiwgZmlnaHRTY3JlZW59XG4gICAgXG59XG5cbmV4cG9ydCBkZWZhdWx0IGhlYWRlciAiLCJjb25zdCBzaGlwID0gcmVxdWlyZSggJy4vc2hpcC5qcycpO1xuXG5jb25zdCBwbGF5ZXJGYWN0b3J5ID0gZnVuY3Rpb24oX25hbWUsIGFtdE9mU2hpcHMpe1xuICAgIGNvbnN0IG5hbWUgPSBfbmFtZTtcbiAgICBsZXQgUmVtYWluaW5nVHVybnMgPSBhbXRPZlNoaXBzO1xuICAgIGxldCBzaGlwcyA9IFtdO1xuICAgIGxldCB2ZXJ0aWNhbCA9IGZhbHNlO1xuXG4gICAgZnVuY3Rpb24gYWRkU2hpcFRvQm9hcmQoKXtcbiAgICAgICAgaWYoUmVtYWluaW5nVHVybnMgPT0gNCl7XG4gICAgICAgICAgICBSZW1haW5pbmdUdXJucy0tO1xuICAgICAgICAgICAgbGV0IG5ld1NoaXAgPSBzaGlwKDQpO1xuICAgICAgICAgICAgc2hpcHMucHVzaChuZXdTaGlwKTtcbiAgICAgICAgICAgIHJldHVybiBuZXdTaGlwO1xuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZihSZW1haW5pbmdUdXJucyA9PTMpe1xuICAgICAgICAgICAgUmVtYWluaW5nVHVybnMtLTtcbiAgICAgICAgICAgIGxldCBuZXdTaGlwID0gc2hpcCgzKTtcbiAgICAgICAgICAgIHNoaXBzLnB1c2gobmV3U2hpcCk7XG4gICAgICAgICAgICByZXR1cm4gbmV3U2hpcDtcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgUmVtYWluaW5nVHVybnMtLTtcbiAgICAgICAgICAgIGxldCBuZXdTaGlwID0gc2hpcCgyKTtcbiAgICAgICAgICAgIHNoaXBzLnB1c2gobmV3U2hpcCk7XG4gICAgICAgICAgICByZXR1cm4gbmV3U2hpcDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlYWR5VG9GaWdodCgpe1xuICAgICAgICBpZihSZW1haW5pbmdUdXJucyA9PSAwKXtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbnZhbGlkTW92ZSgpe1xuICAgICAgICBSZW1haW5pbmdUdXJucyArKztcbiAgICAgICAgc2hpcHMucG9wKCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0TmFtZSgpe1xuICAgICAgICByZXR1cm4gbmFtZTtcbiAgICB9XG4gICAgZnVuY3Rpb24gaXNWZXJ0aWNhbCgpe1xuICAgICAgICByZXR1cm4gdmVydGljYWw7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGhhc0xvc3QoKXtcbiAgICAgICAgbGV0IGxvc3QgPSB0cnVlO1xuICAgICAgICBzaGlwcy5mb3JFYWNoKHNoaXA9PntcbiAgICAgICAgICAgIGlmKCFzaGlwLmlzU3VuaygpKXtcbiAgICAgICAgICAgICAgICBsb3N0ID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiBsb3N0O1xuICAgIH1cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIChlKT0+e1xuICAgICAgICBpZihlLmtleSA9PSAndicpe1xuICAgICAgICAgICAgdG9nZ2xlVmVydGljYWwoKTtcbiAgICAgICAgfVxuICAgIH0pXG4gICAgZnVuY3Rpb24gdG9nZ2xlVmVydGljYWwoKXtcbiAgICAgICAgdmVydGljYWwgPSAhdmVydGljYWw7XG4gICAgfVxuXG4gICAgcmV0dXJue2dldE5hbWUsIHJlYWR5VG9GaWdodCwgYWRkU2hpcFRvQm9hcmQsIGlzVmVydGljYWwsIGhhc0xvc3QsIGludmFsaWRNb3ZlLCB0b2dnbGVWZXJ0aWNhbH1cbn1cblxuXG5tb2R1bGUuZXhwb3J0cyA9IHBsYXllckZhY3Rvcnk7IiwiY29uc3QgZ2FtZUJvYXJkRG9tcyA9IGZ1bmN0aW9uKG5hbWUpe1xuICAgIGNvbnN0IG1haW5EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIGZ1bmN0aW9uIGluaXQoKXsgICAgICAgIFxuICAgICAgICBtYWluRGl2LmNsYXNzTGlzdC5hZGQoJ2dhbWVCb2FyZCcpO1xuICAgICAgICBpZihuYW1lID09ICdwbGF5ZXIxJyl7XG4gICAgICAgICAgICBtYWluRGl2LmNsYXNzTGlzdC5hZGQoJ3AxJyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAobmFtZSA9PSAncGxheWVyMicpe1xuICAgICAgICAgICAgbWFpbkRpdi5jbGFzc0xpc3QuYWRkKCdwMicpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0TmV3Q2h1bmsoeCwgeSl7XG4gICAgICAgIGxldCBjaHVuayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjaHVuay5kYXRhc2V0LnggPSB4O1xuICAgICAgICBjaHVuay5kYXRhc2V0LnkgPSB5O1xuICAgICAgICBjaHVuay5jbGFzc0xpc3QuYWRkKCdjaHVuaycpO1xuICAgICAgICByZXR1cm4gY2h1bms7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGdldEdhbWVCb2FyZCgpe1xuICAgICAgICByZXR1cm4gbWFpbkRpdjtcbiAgICB9XG5cbiAgICBpbml0KCk7XG4gICAgcmV0dXJuIHtnZXRHYW1lQm9hcmQsIGdldE5ld0NodW5rfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnYW1lQm9hcmREb21zOyIsIi8qKlxuICogQHBhcmFtIHtfbGVuZ3RofSAgICAgICAgbGVuZ3RoICAgICAgICAgbGVuZ3RoIG9mIHNoaXAsIHplcm8gaW5kZXhlZC5cbiAqL1xuY29uc3Qgc2hpcEZhY3RvcnkgPSBmdW5jdGlvbihfbGVuZ3RoKXtcbiAgICBjb25zdCBsZW5ndGggPSBfbGVuZ3RoO1xuICAgIGxldCBzZWN0aW9ucyA9IFtdO1xuICAgIGZvcihsZXQgeCA9IDA7IHg8bGVuZ3RoOyB4Kyspe1xuICAgICAgICBzZWN0aW9uc1t4XT0ge2hpdDpmYWxzZX07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0TGVuZ3RoKCl7XG4gICAgICAgIHJldHVybiBsZW5ndGg7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGdldFNlY3Rpb25zKCl7XG4gICAgICAgIHJldHVybiBzZWN0aW9ucztcbiAgICB9XG4gICAgZnVuY3Rpb24gcmVnaXN0ZXJIaXQoc2VjdGlvbil7XG4gICAgICAgIHNlY3Rpb25zW3NlY3Rpb25dLmhpdCA9IHRydWU7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGdldFNlY3Rpb24oc2VjdGlvbil7XG4gICAgICAgIHJldHVybihzZWN0aW9uc1tzZWN0aW9uXS5oaXQpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBpc1N1bmsoKXtcbiAgICAgICAgbGV0IHN1bmsgPSB0cnVlO1xuICAgICAgICBzZWN0aW9ucy5mb3JFYWNoKHNlY3Rpb24gPT57XG4gICAgICAgICAgICBpZihzZWN0aW9uLmhpdCA9PSBmYWxzZSl7XG4gICAgICAgICAgICAgICAgc3VuayA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gc3VuaztcbiAgICB9XG4gICAgcmV0dXJuIHtnZXRMZW5ndGgsIGdldFNlY3Rpb25zLCBnZXRTZWN0aW9uLCByZWdpc3RlckhpdCwgaXNTdW5rfVxufVxuXG5cbm1vZHVsZS5leHBvcnRzID0gc2hpcEZhY3Rvcnk7XG5cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9Nb2R1bGVzL0hlYWRlci5qcyc7XG5jb25zdCBnYW1lQm9hcmQgPSByZXF1aXJlKCcuL01vZHVsZXMvR2FtZWJvYXJkLmpzJyk7XG5jb25zdCBwbGF5ZXIgPSByZXF1aXJlKCAnLi9Nb2R1bGVzL1BsYXllci5qcycpO1xuXG5cbmNvbnN0IG1haW4gPSAoZnVuY3Rpb24oKXtcbiAgICBjb25zdCBvdmVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbGV0IGhlYWRlciA9IEhlYWRlcigpO1xuXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmQob3ZlckRpdik7XG4gICAgbGV0IHBsYXllcjE7XG4gICAgbGV0IGdhbWVCb2FyZDE7XG4gICAgbGV0IHBsYXllckJvYXJkMTtcblxuICAgIGxldCBwbGF5ZXIyO1xuICAgIGxldCBnYW1lQm9hcmQyO1xuICAgIGxldCBwbGF5ZXJCb2FyZDI7XG5cbiAgICBsZXQgZ2FtZVN0YXJ0ZWQ7XG5cbiAgICBmdW5jdGlvbiBpbml0KCl7XG4gICAgICAgIHBsYXllcjEgPSBwbGF5ZXIoJ3BsYXllcjEnLCA0KTtcbiAgICAgICAgZ2FtZUJvYXJkMSA9IGdhbWVCb2FyZChwbGF5ZXIxKTtcbiAgICAgICAgcGxheWVyQm9hcmQxID0gZ2FtZUJvYXJkMS5tYWluRGl2O1xuXG4gICAgICAgIHBsYXllcjIgPSBwbGF5ZXIoJ3BsYXllcjInLCA0KTtcbiAgICAgICAgZ2FtZUJvYXJkMiA9IGdhbWVCb2FyZChwbGF5ZXIyKTtcbiAgICAgICAgcGxheWVyQm9hcmQyID0gZ2FtZUJvYXJkMi5tYWluRGl2O1xuXG4gICAgICAgIGdhbWVTdGFydGVkID0gZmFsc2U7XG5cbiAgICAgICAgaGVhZGVyLnNldHVwU2NyZWVuKCk7XG5cbiAgICAgICAgb3ZlckRpdi5jbGFzc0xpc3QuYWRkKCdmdWxsQm9hcmQnKTtcbiAgICAgICAgcGxheWVyQm9hcmQxLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KT0+e1xuICAgICAgICAgICAgZGl2TGlzdGVuSGFuZGxlclNldHVwKGV2ZW50LCBldmVudC50YXJnZXQsIHBsYXllcjEsIGdhbWVCb2FyZDEpO1xuICAgICAgICAgICAgbWFpbkxvb3AoKTtcbiAgICAgICAgfSlcbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICBvdmVyRGl2LmFwcGVuZChwbGF5ZXJCb2FyZDEpO1xuICAgIH1cblxuXG4gICAgZnVuY3Rpb24gbWFpbkxvb3AoKXtcbiAgICAgICAgaWYocGxheWVyMS5yZWFkeVRvRmlnaHQoKSYmIWdhbWVTdGFydGVkKXtcbiAgICAgICAgICAgIGNwdVBvcHVsYXRvcigpO1xuICAgICAgICAgICAgaGVhZGVyLmZpZ2h0U2NyZWVuKCk7XG4gICAgICAgICAgICBnYW1lU3RhcnRlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZihwbGF5ZXIxLnJlYWR5VG9GaWdodCgpKXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwid2FpdCBzaGl0XCIpO1xuICAgICAgICAgICAgY3B1UGxheSgpO1xuICAgICAgICAgICAgY2hlY2tJZldpbm5lcigpO1xuICAgICAgICB9XG5cbiAgICB9XG4gICAgZnVuY3Rpb24gY3B1UGxheSgpe1xuICAgICAgICBmdW5jdGlvbiByYW5kb21Db29yZCgpe1xuICAgICAgICAgICAgbGV0IGNvb3JkaW5hdGUgPSB7J3gnOk1hdGgucm91bmQoTWF0aC5yYW5kb20oKSo5KSwneSc6TWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKjkpfVxuICAgICAgICAgICAgcmV0dXJuIGNvb3JkaW5hdGU7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gZm9ybWF0Q29vcmQoKXtcbiAgICAgICAgICAgIGxldCBjb29yZGluYXRlID0ge2RhdGFzZXQ6e3g6Y29vcmQueCx5OmNvb3JkLnl9fTtcbiAgICAgICAgICAgIHJldHVybiBjb29yZGluYXRlO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGNvb3JkID0gcmFuZG9tQ29vcmQoKTtcblxuICAgICAgICB3aGlsZSghZ2FtZUJvYXJkMS52YWxpZGF0ZUF0dGFjayhjb29yZCkpe1xuICAgICAgICAgICAgY29vcmQgPSByYW5kb21Db29yZCgpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgIGZpcmVTaG90KGZvcm1hdENvb3JkKCksIG51bGwsIGdhbWVCb2FyZDEpOyAgIFxuICAgIH1cbiAgICBmdW5jdGlvbiBjcHVQb3B1bGF0b3IoKXtcbiAgICAgICAgcGxheWVyQm9hcmQyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQ9PntcbiAgICAgICAgICAgICAgICBkaXZMaXN0ZW5IYW5kbGVyUGxheShldmVudCxldmVudC50YXJnZXQsIHBsYXllcjEsIGdhbWVCb2FyZDIpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgIEFycmF5LmZyb20ocGxheWVyQm9hcmQyLmNoaWxkcmVuKS5mb3JFYWNoKGNoaWxkID0+e2NoaWxkLmNsYXNzTGlzdC5hZGQoJ2NwdScpfSlcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgXG4gICAgICAgIGZ1bmN0aW9uIHBsYWNlU2hpcHMoKXsgICAgXG5cbiAgICAgICAgICAgIHdoaWxlKCFwbGF5ZXIyLnJlYWR5VG9GaWdodCgpKXtcbiAgICAgICAgICAgICAgICBsZXQgbmV3U2hpcCA9IHBsYXllcjIuYWRkU2hpcFRvQm9hcmQoKTtcblxuICAgICAgICAgICAgICAgIGxldCByYW5kb21WZXJ0aWNhbCA9IGZsaXBWZXJ0KCk7XG4gICAgICAgICAgICAgICAgaWYocmFuZG9tVmVydGljYWwpe1xuICAgICAgICAgICAgICAgICAgICBwbGF5ZXIyLnRvZ2dsZVZlcnRpY2FsKCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgbGV0IGNvb3JkaW5hdGUgPSByYW5kb21Db29yZCgpO1xuICAgICAgICAgICAgICAgIGxldCBjb29yZHMgPSBbXTtcbiAgICAgICAgICAgICAgICBjb29yZHMucHVzaChjb29yZGluYXRlKTtcblxuICAgICAgICAgICAgICAgIGlmKHBsYXllcjIuaXNWZXJ0aWNhbCgpKXtcbiAgICAgICAgICAgICAgICAgICAgZm9yKGxldCBpID0gMTsgaTxuZXdTaGlwLmdldExlbmd0aCgpOyBpKyspe1xuICAgICAgICAgICAgICAgICAgICAgICAgIGNvb3Jkcy5wdXNoKHt5OmNvb3JkaW5hdGUueSwgeDpwYXJzZUludChjb29yZGluYXRlLngpK2l9KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgIGZvcihsZXQgaSA9IDE7IGk8bmV3U2hpcC5nZXRMZW5ndGgoKTsgaSsrKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICBjb29yZHMucHVzaCh7eDpjb29yZGluYXRlLngsIHk6cGFyc2VJbnQoY29vcmRpbmF0ZS55KStpfSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYoZ2FtZUJvYXJkMi52YWxpZGF0ZVNoaXBQbGFjZW1lbnQoY29vcmRzKSl7XG4gICAgICAgICAgICAgICAgICAgIGdhbWVCb2FyZDIuYWRkU2hpcChjb29yZHMsIG5ld1NoaXApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgICAgICBwbGF5ZXIyLmludmFsaWRNb3ZlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBcblxuXG4gICAgICAgICAgICBmdW5jdGlvbiBmbGlwVmVydCgpe1xuICAgICAgICAgICAgICAgIGxldCBmbGlwID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBpZihNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkpKjEwID4gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKSoxMCl7XG4gICAgICAgICAgICAgICAgICAgIGZsaXAgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZsaXA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmdW5jdGlvbiByYW5kb21Db29yZCgpe1xuICAgICAgICAgICAgICAgIGxldCBjb29yZGluYXRlID0geyd4JzpNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkqOSksJ3knOk1hdGgucm91bmQoTWF0aC5yYW5kb20oKSo5KX1cbiAgICAgICAgICAgICAgICByZXR1cm4gY29vcmRpbmF0ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgICAgIHBsYWNlU2hpcHMoKTtcbiAgICAgICAgb3ZlckRpdi5hcHBlbmQocGxheWVyQm9hcmQyKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkaXZMaXN0ZW5IYW5kbGVyUGxheShlLCBjaHVuaywgcGxheWVyLCBnYW1lQm9hcmQpe1xuICAgICAgICB0cnl7XG4gICAgICAgICAgICBpZihnYW1lQm9hcmQudmFsaWRhdGVBdHRhY2soe3g6Y2h1bmsuZGF0YXNldC54LCB5OmNodW5rLmRhdGFzZXQueX0pKXtcbiAgICAgICAgICAgICAgICBmaXJlU2hvdChjaHVuaywgcGxheWVyLCBnYW1lQm9hcmQpO1xuICAgICAgICAgICAgICAgIGNoZWNrSWZXaW5uZXIoKTtcbiAgICAgICAgICAgICAgICBtYWluTG9vcCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNhdGNoe1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGl2TGlzdGVuSGFuZGxlclNldHVwKGUsY2h1bmssIHBsYXllciwgZ2FtZUJvYXJkKXtcbiAgICAgICAgaWYoISFjaHVuay5kYXRhc2V0Lngpe1xuICAgICAgICAgICAgaWYoIXBsYXllci5yZWFkeVRvRmlnaHQoKSl7XG4gICAgICAgICAgICAgICAgc2V0dXBQaGFzZShjaHVuaywgcGxheWVyLCBnYW1lQm9hcmQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZihwbGF5ZXIucmVhZHlUb0ZpZ2h0KCkpe1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdBdHRhY2sgdGhlIGVuZW15IScpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfVxuICAgIFxuXG4gICAgZnVuY3Rpb24gY2hlY2tJZldpbm5lcigpe1xuICAgICAgICBpZihwbGF5ZXIxLmhhc0xvc3QoKSl7XG4gICAgICAgICAgICBhbGVydCgncGxheWVyIDIgd2lucycpO1xuICAgICAgICAgICAgcmVzZXQoKTtcbiAgICAgICAgICAgIGluaXQoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKHBsYXllcjIuaGFzTG9zdCgpKXtcbiAgICAgICAgICAgIGFsZXJ0KCdwbGF5ZXIgMSB3aW5zJyk7XG4gICAgICAgICAgICByZXNldCgpO1xuICAgICAgICAgICAgaW5pdCgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIHJlc2V0KCl7XG4gICAgICAgIEFycmF5LmZyb20ob3ZlckRpdi5jaGlsZHJlbikuZm9yRWFjaChjaGlsZD0+e1xuICAgICAgICAgICAgY2hpbGQucmVtb3ZlKCk7XG4gICAgICAgIH0pXG4gICAgfVxuICAgIFxuICAgIGZ1bmN0aW9uIHNldHVwUGhhc2UoY2h1bmssIHBsYXllciwgZ2FtZUJvYXJkKXtcbiAgICAgICAgbGV0IG5ld1NoaXAgPSBwbGF5ZXIuYWRkU2hpcFRvQm9hcmQoKTtcbiAgICAgICAgLy9wb3NzaWJseSBzcGluIHRoaXMgaW50byBzaGlwLCBhbGxvdyBzaGlwIHRvIGtub3cgd2hlcmUgaXQgaXMuXG4gICAgICAgIGxldCBjb29yZHMgPSBbe3g6Y2h1bmsuZGF0YXNldC54LCB5OmNodW5rLmRhdGFzZXQueX1dO1xuICAgICAgICBpZihwbGF5ZXIuaXNWZXJ0aWNhbCgpKXtcbiAgICAgICAgICAgZm9yKGxldCBpID0gMTsgaTxuZXdTaGlwLmdldExlbmd0aCgpOyBpKyspe1xuICAgICAgICAgICAgICAgIGNvb3Jkcy5wdXNoKHt5OmNodW5rLmRhdGFzZXQueSwgeDpwYXJzZUludChjaHVuay5kYXRhc2V0LngpK2l9KVxuICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IDE7IGk8bmV3U2hpcC5nZXRMZW5ndGgoKTsgaSsrKXtcbiAgICAgICAgICAgICAgICBjb29yZHMucHVzaCh7eDpjaHVuay5kYXRhc2V0LngsIHk6cGFyc2VJbnQoY2h1bmsuZGF0YXNldC55KStpfSlcbiAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmKGdhbWVCb2FyZC52YWxpZGF0ZVNoaXBQbGFjZW1lbnQoY29vcmRzKSl7XG4gICAgICAgICAgICBnYW1lQm9hcmQuYWRkU2hpcChjb29yZHMsIG5ld1NoaXApO1xuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgICBwbGF5ZXIuaW52YWxpZE1vdmUoKTtcbiAgICAgICAgfVxuICAgICAgIFxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGZpcmVTaG90KGNodW5rLCBwbGF5ZXIsIGdhbWVCb2FyZCl7XG4gICAgICAgIGdhbWVCb2FyZC5ncmlkW2NodW5rLmRhdGFzZXQueF1bY2h1bmsuZGF0YXNldC55XS5yZWNpZXZlQXR0YWNrKCk7XG4gICAgfVxuICAgIGluaXQoKTtcbn0pKCkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=