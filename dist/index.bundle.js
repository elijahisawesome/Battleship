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
___CSS_LOADER_EXPORT___.push([module.id, ".chunk{\n    border-radius:5%;\n    background-color:skyblue;\n    height:20px;\n    width:20px;\n    display:grid;\n}\n\n.gameBoard{\n    background-color: grey;\n    display:grid;\n    grid-template-columns: repeat(10, 20px);\n    grid-template-rows:auto;\n    grid-gap: 1px;\n    width:210px;\n    margin:auto;\n}\n\n.ship{\n    background:orange;\n}\n.ship.chunk.attacked{\n    background: red;\n}\n\n.chunk.attacked{\n    background: black;\n}\n.ship.chunk.attacked.cpu{\n    background:orange;\n}\n.ship.cpu{\n    background: greenyellow;\n}\n.fullBoard{\n    display:grid;\n    grid-template-columns: 210px 210px;\n    grid-gap: 50px;\n    margin-left: auto;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,gBAAgB;IAChB,wBAAwB;IACxB,WAAW;IACX,UAAU;IACV,YAAY;AAChB;;AAEA;IACI,sBAAsB;IACtB,YAAY;IACZ,uCAAuC;IACvC,uBAAuB;IACvB,aAAa;IACb,WAAW;IACX,WAAW;AACf;;AAEA;IACI,iBAAiB;AACrB;AACA;IACI,eAAe;AACnB;;AAEA;IACI,iBAAiB;AACrB;AACA;IACI,iBAAiB;AACrB;AACA;IACI,uBAAuB;AAC3B;AACA;IACI,YAAY;IACZ,kCAAkC;IAClC,cAAc;IACd,iBAAiB;AACrB","sourcesContent":[".chunk{\n    border-radius:5%;\n    background-color:skyblue;\n    height:20px;\n    width:20px;\n    display:grid;\n}\n\n.gameBoard{\n    background-color: grey;\n    display:grid;\n    grid-template-columns: repeat(10, 20px);\n    grid-template-rows:auto;\n    grid-gap: 1px;\n    width:210px;\n    margin:auto;\n}\n\n.ship{\n    background:orange;\n}\n.ship.chunk.attacked{\n    background: red;\n}\n\n.chunk.attacked{\n    background: black;\n}\n.ship.chunk.attacked.cpu{\n    background:orange;\n}\n.ship.cpu{\n    background: greenyellow;\n}\n.fullBoard{\n    display:grid;\n    grid-template-columns: 210px 210px;\n    grid-gap: 50px;\n    margin-left: auto;\n}"],"sourceRoot":""}]);
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

/***/ "./src/Gameboard.js":
/*!**************************!*\
  !*** ./src/Gameboard.js ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const ship = __webpack_require__( /*! ./ship.js */ "./src/ship.js");
const boardDoms = __webpack_require__(/*! ./boardDoms.js */ "./src/boardDoms.js");
const player = __webpack_require__(/*! ./Player.js */ "./src/Player.js");

const BOARD_SIZE = 10;

const Gameboard = function(_player){
    let player = _player;
    const name = _player.getName();
    let gameBoard = boardDoms();
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
    function addShipI(coords, newShip){
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

    return {grid, addShipI, mainDiv, validateShipPlacement, validateAttack};
}


module.exports = Gameboard;

/***/ }),

/***/ "./src/Player.js":
/*!***********************!*\
  !*** ./src/Player.js ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const ship = __webpack_require__( /*! ./ship.js */ "./src/ship.js");

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

/***/ "./src/boardDoms.js":
/*!**************************!*\
  !*** ./src/boardDoms.js ***!
  \**************************/
/***/ ((module) => {

const gameBoardDoms = function(){
    const mainDiv = document.createElement('div');

    function init(){        
        mainDiv.classList.add('gameBoard');
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

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
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
/* harmony import */ var _ship_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship.js */ "./src/ship.js");
/* harmony import */ var _ship_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ship_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");


const gameBoard = __webpack_require__(/*! ./Gameboard.js */ "./src/Gameboard.js");
const player = __webpack_require__( /*! ./Player.js */ "./src/Player.js");

const main = (function(){
    const overDiv = document.createElement('div');

    const player1 = player('player1', 4);
    let gameBoard1 = gameBoard(player1);
    let playerBoard1 = gameBoard1.mainDiv;

    const player2 = player('cpu', 4);
    let gameBoard2 = gameBoard(player2);
    let playerBoard2 = gameBoard2.mainDiv;

    let activePlayer;
    let gameStarted = false;

    function init(){
        
        overDiv.classList.add('fullBoard');
        playerBoard1.addEventListener('click', (event)=>{
            divListenHandlerSetup(event, event.target, player1, gameBoard1);
            mainLoop();
        })
        
        overDiv.append(playerBoard1);
        document.body.append(overDiv);
    }


    function mainLoop(){
        if(player1.readyToFight()&&!gameStarted){
            cpuPopulator();
            gameStarted = true;
        }
        else if(player1.readyToFight()){
            cpuPlay();
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
                    gameBoard2.addShipI(coords, newShip);
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
        playerBoard2.classList.add('cpu');
        overDiv.append(playerBoard2);
    }

    function divListenHandlerPlay(e, chunk, player, gameBoard){
        if(gameBoard.validateAttack({x:chunk.dataset.x, y:chunk.dataset.y})){
             fireShot(chunk, player, gameBoard);
             checkIfWinner();
             mainLoop();
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
        }
        else if(player2.hasLost()){
            alert('player 1 wins');
        }
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
            gameBoard.addShipI(coords, newShip);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ3NIO0FBQzdCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyx3R0FBcUM7QUFDL0Y7QUFDQSxpREFBaUQsdUJBQXVCLCtCQUErQixrQkFBa0IsaUJBQWlCLG1CQUFtQixHQUFHLGVBQWUsNkJBQTZCLG1CQUFtQiw4Q0FBOEMsOEJBQThCLG9CQUFvQixrQkFBa0Isa0JBQWtCLEdBQUcsVUFBVSx3QkFBd0IsR0FBRyx1QkFBdUIsc0JBQXNCLEdBQUcsb0JBQW9CLHdCQUF3QixHQUFHLDJCQUEyQix3QkFBd0IsR0FBRyxZQUFZLDhCQUE4QixHQUFHLGFBQWEsbUJBQW1CLHlDQUF5QyxxQkFBcUIsd0JBQXdCLEdBQUcsT0FBTyxnRkFBZ0YsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGlDQUFpQyx1QkFBdUIsK0JBQStCLGtCQUFrQixpQkFBaUIsbUJBQW1CLEdBQUcsZUFBZSw2QkFBNkIsbUJBQW1CLDhDQUE4Qyw4QkFBOEIsb0JBQW9CLGtCQUFrQixrQkFBa0IsR0FBRyxVQUFVLHdCQUF3QixHQUFHLHVCQUF1QixzQkFBc0IsR0FBRyxvQkFBb0Isd0JBQXdCLEdBQUcsMkJBQTJCLHdCQUF3QixHQUFHLFlBQVksOEJBQThCLEdBQUcsYUFBYSxtQkFBbUIseUNBQXlDLHFCQUFxQix3QkFBd0IsR0FBRyxtQkFBbUI7QUFDbnlEO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7OztBQ1AxQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNENBQTRDLHFCQUFxQjtBQUNqRTs7QUFFQTtBQUNBLEtBQUs7QUFDTCxLQUFLO0FBQ0w7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQkFBcUIscUJBQXFCO0FBQzFDOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7O0FDakVhOztBQUViLGtDQUFrQzs7QUFFbEMsOEJBQThCOztBQUU5QixrREFBa0QsZ0JBQWdCLGdFQUFnRSx3REFBd0QsNkRBQTZELHNEQUFzRDs7QUFFN1MsdUNBQXVDLHVEQUF1RCx1Q0FBdUMsU0FBUyxPQUFPLG9CQUFvQjs7QUFFeksseUNBQXlDLDBHQUEwRyx3QkFBd0IsZUFBZSxlQUFlLGdCQUFnQixZQUFZLE1BQU0sd0JBQXdCLCtCQUErQixhQUFhLHFCQUFxQix1Q0FBdUMsY0FBYyxXQUFXLFlBQVksVUFBVSxNQUFNLG1EQUFtRCxVQUFVLHNCQUFzQjs7QUFFbmYsZ0NBQWdDOztBQUVoQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQ0EsTUFBK0Y7QUFDL0YsTUFBcUY7QUFDckYsTUFBNEY7QUFDNUYsTUFBK0c7QUFDL0csTUFBd0c7QUFDeEcsTUFBd0c7QUFDeEcsTUFBbUc7QUFDbkc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxtRkFBTzs7OztBQUk2QztBQUNyRSxPQUFPLGlFQUFlLG1GQUFPLElBQUksMEZBQWMsR0FBRywwRkFBYyxZQUFZLEVBQUM7Ozs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7O0FBRUE7QUFDQTs7QUFFQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxxQkFBcUIsNkJBQTZCO0FBQ2xEOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNoR2E7O0FBRWI7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0RBQXNEOztBQUV0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7Ozs7OztBQ3RDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7QUNWYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7O0FBRWpGO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7OztBQ1hhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0EseURBQXlEO0FBQ3pELElBQUk7O0FBRUo7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7QUMvQ2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ2ZBLGFBQWEsbUJBQU8sRUFBRSxnQ0FBVztBQUNqQyxrQkFBa0IsbUJBQU8sQ0FBQywwQ0FBZ0I7QUFDMUMsZUFBZSxtQkFBTyxDQUFDLG9DQUFhOztBQUVwQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBLHVCQUF1QixjQUFjO0FBQ3JDLDJCQUEyQixhQUFhO0FBQ3hDLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLE1BQU07QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLFlBQVk7QUFDWjs7O0FBR0E7Ozs7Ozs7Ozs7QUNqR0EsYUFBYSxtQkFBTyxFQUFFLGdDQUFXOztBQUVqQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUEsV0FBVztBQUNYOzs7QUFHQTs7Ozs7Ozs7OztBQ3RFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQVk7QUFDWjs7QUFFQTs7Ozs7Ozs7OztBQ3RCQTtBQUNBLFdBQVcsZ0JBQWdCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLFVBQVU7QUFDN0Isc0JBQXNCO0FBQ3RCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsWUFBWTtBQUNaOzs7QUFHQTs7Ozs7Ozs7VUNuQ0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7OztBQ05vQztBQUNmO0FBQ3JCLGtCQUFrQixtQkFBTyxDQUFDLDBDQUFnQjtBQUMxQyxlQUFlLG1CQUFPLEVBQUUsb0NBQWE7O0FBRXJDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEI7QUFDOUI7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLFNBQVM7QUFDdkM7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxtQ0FBbUMsdUJBQXVCO0FBQzFELHNDQUFzQywyQ0FBMkM7QUFDakY7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLHVCQUF1QjtBQUMzRCxzQ0FBc0MsMkNBQTJDO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscUNBQXFDLHFDQUFxQztBQUMxRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIscUNBQXFDO0FBQzVEO0FBQ0EsMEJBQTBCLHVCQUF1QjtBQUNqRCw2QkFBNkIsaURBQWlEO0FBQzlFO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQix1QkFBdUI7QUFDbEQsNkJBQTZCLGlEQUFpRDtBQUM5RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsRyIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9HYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9QbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9ib2FyZERvbXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuY2h1bmt7XFxuICAgIGJvcmRlci1yYWRpdXM6NSU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6c2t5Ymx1ZTtcXG4gICAgaGVpZ2h0OjIwcHg7XFxuICAgIHdpZHRoOjIwcHg7XFxuICAgIGRpc3BsYXk6Z3JpZDtcXG59XFxuXFxuLmdhbWVCb2FyZHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXG4gICAgZGlzcGxheTpncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMjBweCk7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czphdXRvO1xcbiAgICBncmlkLWdhcDogMXB4O1xcbiAgICB3aWR0aDoyMTBweDtcXG4gICAgbWFyZ2luOmF1dG87XFxufVxcblxcbi5zaGlwe1xcbiAgICBiYWNrZ3JvdW5kOm9yYW5nZTtcXG59XFxuLnNoaXAuY2h1bmsuYXR0YWNrZWR7XFxuICAgIGJhY2tncm91bmQ6IHJlZDtcXG59XFxuXFxuLmNodW5rLmF0dGFja2Vke1xcbiAgICBiYWNrZ3JvdW5kOiBibGFjaztcXG59XFxuLnNoaXAuY2h1bmsuYXR0YWNrZWQuY3B1e1xcbiAgICBiYWNrZ3JvdW5kOm9yYW5nZTtcXG59XFxuLnNoaXAuY3B1e1xcbiAgICBiYWNrZ3JvdW5kOiBncmVlbnllbGxvdztcXG59XFxuLmZ1bGxCb2FyZHtcXG4gICAgZGlzcGxheTpncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIxMHB4IDIxMHB4O1xcbiAgICBncmlkLWdhcDogNTBweDtcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsd0JBQXdCO0lBQ3hCLFdBQVc7SUFDWCxVQUFVO0lBQ1YsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osdUNBQXVDO0lBQ3ZDLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2IsV0FBVztJQUNYLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSx1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLFlBQVk7SUFDWixrQ0FBa0M7SUFDbEMsY0FBYztJQUNkLGlCQUFpQjtBQUNyQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuY2h1bmt7XFxuICAgIGJvcmRlci1yYWRpdXM6NSU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6c2t5Ymx1ZTtcXG4gICAgaGVpZ2h0OjIwcHg7XFxuICAgIHdpZHRoOjIwcHg7XFxuICAgIGRpc3BsYXk6Z3JpZDtcXG59XFxuXFxuLmdhbWVCb2FyZHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXG4gICAgZGlzcGxheTpncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMjBweCk7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czphdXRvO1xcbiAgICBncmlkLWdhcDogMXB4O1xcbiAgICB3aWR0aDoyMTBweDtcXG4gICAgbWFyZ2luOmF1dG87XFxufVxcblxcbi5zaGlwe1xcbiAgICBiYWNrZ3JvdW5kOm9yYW5nZTtcXG59XFxuLnNoaXAuY2h1bmsuYXR0YWNrZWR7XFxuICAgIGJhY2tncm91bmQ6IHJlZDtcXG59XFxuXFxuLmNodW5rLmF0dGFja2Vke1xcbiAgICBiYWNrZ3JvdW5kOiBibGFjaztcXG59XFxuLnNoaXAuY2h1bmsuYXR0YWNrZWQuY3B1e1xcbiAgICBiYWNrZ3JvdW5kOm9yYW5nZTtcXG59XFxuLnNoaXAuY3B1e1xcbiAgICBiYWNrZ3JvdW5kOiBncmVlbnllbGxvdztcXG59XFxuLmZ1bGxCb2FyZHtcXG4gICAgZGlzcGxheTpncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIxMHB4IDIxMHB4O1xcbiAgICBncmlkLWdhcDogNTBweDtcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyB2YXIgX2kgPSBhcnIgPT0gbnVsbCA/IG51bGwgOiB0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGFycltTeW1ib2wuaXRlcmF0b3JdIHx8IGFycltcIkBAaXRlcmF0b3JcIl07IGlmIChfaSA9PSBudWxsKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX3MsIF9lOyB0cnkgeyBmb3IgKF9pID0gX2kuY2FsbChhcnIpOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKSB7XG4gIHZhciBfaXRlbSA9IF9zbGljZWRUb0FycmF5KGl0ZW0sIDQpLFxuICAgICAgY29udGVudCA9IF9pdGVtWzFdLFxuICAgICAgY3NzTWFwcGluZyA9IF9pdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhzdHlsZSwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICByZXR1cm4gc3R5bGU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZSkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZShcIm1lZGlhXCIpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGUpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlLCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZSkge1xuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCBzaGlwID0gcmVxdWlyZSggJy4vc2hpcC5qcycpO1xuY29uc3QgYm9hcmREb21zID0gcmVxdWlyZSgnLi9ib2FyZERvbXMuanMnKTtcbmNvbnN0IHBsYXllciA9IHJlcXVpcmUoJy4vUGxheWVyLmpzJyk7XG5cbmNvbnN0IEJPQVJEX1NJWkUgPSAxMDtcblxuY29uc3QgR2FtZWJvYXJkID0gZnVuY3Rpb24oX3BsYXllcil7XG4gICAgbGV0IHBsYXllciA9IF9wbGF5ZXI7XG4gICAgY29uc3QgbmFtZSA9IF9wbGF5ZXIuZ2V0TmFtZSgpO1xuICAgIGxldCBnYW1lQm9hcmQgPSBib2FyZERvbXMoKTtcbiAgICBsZXQgbWFpbkRpdiA9IGdhbWVCb2FyZC5nZXRHYW1lQm9hcmQoKTtcbiAgICBsZXQgZ3JpZCA9IFtdO1xuICAgIGxldCBjaHVuayA9IGZ1bmN0aW9uKF9kb21FbGVtZW50KXtcbiAgICAgICAgbGV0IGRvbUVsZW1lbnQgPSBfZG9tRWxlbWVudDtcbiAgICAgICAgbGV0IG9jY3VwaWVkID0gZmFsc2U7XG4gICAgICAgIGxldCBhdHRhY2tlZCA9IGZhbHNlO1xuICAgICAgICBsZXQgc2hpcDtcbiAgICAgICAgbGV0IHNlY3Rpb247XG4gICAgICAgIGNvbnN0IHJlY2lldmVBdHRhY2sgPSBmdW5jdGlvbigpe1xuICAgICAgICAgICAgYXR0YWNrZWQgPSB0cnVlO1xuICAgICAgICAgICAgbGV0IGhpdCA9IGZhbHNlO1xuICAgICAgICAgICAgaWYgKG9jY3VwaWVkKXtcbiAgICAgICAgICAgICAgICBzaGlwLnJlZ2lzdGVySGl0KHNlY3Rpb24pO1xuICAgICAgICAgICAgICAgIGhpdCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkb21FbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2F0dGFja2VkJyk7XG4gICAgICAgICAgICByZXR1cm4gaGl0O1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIHNldFNoaXAoX3NoaXAsIF9zZWN0aW9uKXtcbiAgICAgICAgICAgIHNoaXAgPSBfc2hpcDtcbiAgICAgICAgICAgIHNlY3Rpb24gPSBfc2VjdGlvbjtcbiAgICAgICAgICAgIG9jY3VwaWVkID0gdHJ1ZTtcbiAgICAgICAgICAgIGRvbUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnc2hpcCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gY2hlY2tBdHRhY2tlZCgpe1xuICAgICAgICAgICAgcmV0dXJuIGF0dGFja2VkO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGNoZWNrT2NjdXBpZWQoKXtcbiAgICAgICAgICAgIHJldHVybiBvY2N1cGllZDtcbiAgICAgICAgfVxuICAgICAgICBcblxuICAgICAgICByZXR1cm4ge3JlY2lldmVBdHRhY2ssIHNldFNoaXAsIGNoZWNrQXR0YWNrZWQsIGNoZWNrT2NjdXBpZWR9O1xuICAgIH1cbiAgICBmdW5jdGlvbiBpbml0KCl7XG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGk8Qk9BUkRfU0laRTsgaSsrKXtcbiAgICAgICAgICAgIGZvcihsZXQgaiA9IDA7IGo8Qk9BUkRfU0laRTtqKyspe1xuICAgICAgICAgICAgICAgIGlmKCFncmlkW2ldKXtncmlkW2ldID0gW119XG4gICAgICAgICAgICAgICAgbmV3RG9tUGllY2UgPSBhcHBlbmRlcihpLGopO1xuICAgICAgICAgICAgICAgIGdyaWRbaV1bal0gPSBjaHVuayhuZXdEb21QaWVjZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gYXBwZW5kZXIoaSxqKXtcbiAgICAgICAgbmV3RG9tUGllY2UgPSBnYW1lQm9hcmQuZ2V0TmV3Q2h1bmsoaSxqKTtcbiAgICAgICAgZ2FtZUJvYXJkLmdldEdhbWVCb2FyZCgpLmFwcGVuZChuZXdEb21QaWVjZSk7XG4gICAgICAgIHJldHVybiBuZXdEb21QaWVjZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHBhcmFtIHtzaGlwfSBzaGlwIGFjY2VwdHMgYW4gYXJyYXkgb2YgY29vcmRpbmF0ZXMgYW5kIGEgc2hpcFxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGFkZFNoaXBJKGNvb3JkcywgbmV3U2hpcCl7XG4gICAgICAgIGxldCBpID0gMDtcbiAgICAgICAgY29vcmRzLmZvckVhY2goKGNvb3JkaW5hdGUpID0+e1xuICAgICAgICAgICAgZ3JpZFtjb29yZGluYXRlWyd4J11dW2Nvb3JkaW5hdGVbJ3knXV0uc2V0U2hpcChuZXdTaGlwLCBpKTtcbiAgICAgICAgICAgIGkrKztcbiAgICAgICAgfSlcbiAgICB9XG4gICAgZnVuY3Rpb24gdmFsaWRhdGVTaGlwUGxhY2VtZW50KGNvb3Jkcyl7XG4gICAgICAgIGxldCB2YWxpZCA9IHRydWU7XG4gICAgICAgIHRyeXtcbiAgICAgICAgICAgIGNvb3Jkcy5mb3JFYWNoKChjb29yZGluYXRlKT0+e1xuICAgICAgICAgICAgICAgIGlmKGdyaWRbY29vcmRpbmF0ZVsneCddXVtjb29yZGluYXRlWyd5J11dLmNoZWNrT2NjdXBpZWQoKSl7XG4gICAgICAgICAgICAgICAgICAgIHZhbGlkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICBjYXRjaHtcbiAgICAgICAgICAgIHZhbGlkID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHZhbGlkO1xuICAgIH1cbiAgICBmdW5jdGlvbiB2YWxpZGF0ZUF0dGFjayhjb29yZCl7XG4gICAgICAgIGlmIChncmlkW2Nvb3JkWyd4J11dW2Nvb3JkWyd5J11dLmNoZWNrQXR0YWNrZWQoKSl7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgaW5pdCgpO1xuXG4gICAgcmV0dXJuIHtncmlkLCBhZGRTaGlwSSwgbWFpbkRpdiwgdmFsaWRhdGVTaGlwUGxhY2VtZW50LCB2YWxpZGF0ZUF0dGFja307XG59XG5cblxubW9kdWxlLmV4cG9ydHMgPSBHYW1lYm9hcmQ7IiwiY29uc3Qgc2hpcCA9IHJlcXVpcmUoICcuL3NoaXAuanMnKTtcblxuY29uc3QgcGxheWVyRmFjdG9yeSA9IGZ1bmN0aW9uKF9uYW1lLCBhbXRPZlNoaXBzKXtcbiAgICBjb25zdCBuYW1lID0gX25hbWU7XG4gICAgbGV0IFJlbWFpbmluZ1R1cm5zID0gYW10T2ZTaGlwcztcbiAgICBsZXQgc2hpcHMgPSBbXTtcbiAgICBsZXQgdmVydGljYWwgPSBmYWxzZTtcblxuICAgIGZ1bmN0aW9uIGFkZFNoaXBUb0JvYXJkKCl7XG4gICAgICAgIGlmKFJlbWFpbmluZ1R1cm5zID09IDQpe1xuICAgICAgICAgICAgUmVtYWluaW5nVHVybnMtLTtcbiAgICAgICAgICAgIGxldCBuZXdTaGlwID0gc2hpcCg0KTtcbiAgICAgICAgICAgIHNoaXBzLnB1c2gobmV3U2hpcCk7XG4gICAgICAgICAgICByZXR1cm4gbmV3U2hpcDtcbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYoUmVtYWluaW5nVHVybnMgPT0zKXtcbiAgICAgICAgICAgIFJlbWFpbmluZ1R1cm5zLS07XG4gICAgICAgICAgICBsZXQgbmV3U2hpcCA9IHNoaXAoMyk7XG4gICAgICAgICAgICBzaGlwcy5wdXNoKG5ld1NoaXApO1xuICAgICAgICAgICAgcmV0dXJuIG5ld1NoaXA7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIFJlbWFpbmluZ1R1cm5zLS07XG4gICAgICAgICAgICBsZXQgbmV3U2hpcCA9IHNoaXAoMik7XG4gICAgICAgICAgICBzaGlwcy5wdXNoKG5ld1NoaXApO1xuICAgICAgICAgICAgcmV0dXJuIG5ld1NoaXA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZWFkeVRvRmlnaHQoKXtcbiAgICAgICAgaWYoUmVtYWluaW5nVHVybnMgPT0gMCl7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW52YWxpZE1vdmUoKXtcbiAgICAgICAgUmVtYWluaW5nVHVybnMgKys7XG4gICAgICAgIHNoaXBzLnBvcCgpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldE5hbWUoKXtcbiAgICAgICAgcmV0dXJuIG5hbWU7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGlzVmVydGljYWwoKXtcbiAgICAgICAgcmV0dXJuIHZlcnRpY2FsO1xuICAgIH1cbiAgICBmdW5jdGlvbiBoYXNMb3N0KCl7XG4gICAgICAgIGxldCBsb3N0ID0gdHJ1ZTtcbiAgICAgICAgc2hpcHMuZm9yRWFjaChzaGlwPT57XG4gICAgICAgICAgICBpZighc2hpcC5pc1N1bmsoKSl7XG4gICAgICAgICAgICAgICAgbG9zdCA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gbG9zdDtcbiAgICB9XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCAoZSk9PntcbiAgICAgICAgaWYoZS5rZXkgPT0gJ3YnKXtcbiAgICAgICAgICAgIHRvZ2dsZVZlcnRpY2FsKCk7XG4gICAgICAgIH1cbiAgICB9KVxuICAgIGZ1bmN0aW9uIHRvZ2dsZVZlcnRpY2FsKCl7XG4gICAgICAgIHZlcnRpY2FsID0gIXZlcnRpY2FsO1xuICAgIH1cblxuICAgIHJldHVybntnZXROYW1lLCByZWFkeVRvRmlnaHQsIGFkZFNoaXBUb0JvYXJkLCBpc1ZlcnRpY2FsLCBoYXNMb3N0LCBpbnZhbGlkTW92ZSwgdG9nZ2xlVmVydGljYWx9XG59XG5cblxubW9kdWxlLmV4cG9ydHMgPSBwbGF5ZXJGYWN0b3J5OyIsImNvbnN0IGdhbWVCb2FyZERvbXMgPSBmdW5jdGlvbigpe1xuICAgIGNvbnN0IG1haW5EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIGZ1bmN0aW9uIGluaXQoKXsgICAgICAgIFxuICAgICAgICBtYWluRGl2LmNsYXNzTGlzdC5hZGQoJ2dhbWVCb2FyZCcpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldE5ld0NodW5rKHgsIHkpe1xuICAgICAgICBsZXQgY2h1bmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY2h1bmsuZGF0YXNldC54ID0geDtcbiAgICAgICAgY2h1bmsuZGF0YXNldC55ID0geTtcbiAgICAgICAgY2h1bmsuY2xhc3NMaXN0LmFkZCgnY2h1bmsnKTtcbiAgICAgICAgcmV0dXJuIGNodW5rO1xuICAgIH1cbiAgICBmdW5jdGlvbiBnZXRHYW1lQm9hcmQoKXtcbiAgICAgICAgcmV0dXJuIG1haW5EaXY7XG4gICAgfVxuXG4gICAgaW5pdCgpO1xuICAgIHJldHVybiB7Z2V0R2FtZUJvYXJkLCBnZXROZXdDaHVua307XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2FtZUJvYXJkRG9tczsiLCIvKipcbiAqIEBwYXJhbSB7X2xlbmd0aH0gICAgICAgIGxlbmd0aCAgICAgICAgIGxlbmd0aCBvZiBzaGlwLCB6ZXJvIGluZGV4ZWQuXG4gKi9cbmNvbnN0IHNoaXBGYWN0b3J5ID0gZnVuY3Rpb24oX2xlbmd0aCl7XG4gICAgY29uc3QgbGVuZ3RoID0gX2xlbmd0aDtcbiAgICBsZXQgc2VjdGlvbnMgPSBbXTtcbiAgICBmb3IobGV0IHggPSAwOyB4PGxlbmd0aDsgeCsrKXtcbiAgICAgICAgc2VjdGlvbnNbeF09IHtoaXQ6ZmFsc2V9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldExlbmd0aCgpe1xuICAgICAgICByZXR1cm4gbGVuZ3RoO1xuICAgIH1cbiAgICBmdW5jdGlvbiBnZXRTZWN0aW9ucygpe1xuICAgICAgICByZXR1cm4gc2VjdGlvbnM7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHJlZ2lzdGVySGl0KHNlY3Rpb24pe1xuICAgICAgICBzZWN0aW9uc1tzZWN0aW9uXS5oaXQgPSB0cnVlO1xuICAgIH1cbiAgICBmdW5jdGlvbiBnZXRTZWN0aW9uKHNlY3Rpb24pe1xuICAgICAgICByZXR1cm4oc2VjdGlvbnNbc2VjdGlvbl0uaGl0KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gaXNTdW5rKCl7XG4gICAgICAgIGxldCBzdW5rID0gdHJ1ZTtcbiAgICAgICAgc2VjdGlvbnMuZm9yRWFjaChzZWN0aW9uID0+e1xuICAgICAgICAgICAgaWYoc2VjdGlvbi5oaXQgPT0gZmFsc2Upe1xuICAgICAgICAgICAgICAgIHN1bmsgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIHN1bms7XG4gICAgfVxuICAgIHJldHVybiB7Z2V0TGVuZ3RoLCBnZXRTZWN0aW9ucywgZ2V0U2VjdGlvbiwgcmVnaXN0ZXJIaXQsIGlzU3Vua31cbn1cblxuXG5tb2R1bGUuZXhwb3J0cyA9IHNoaXBGYWN0b3J5O1xuXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHNoaXBGYWN0b3J5IGZyb20gJy4vc2hpcC5qcyc7XG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcbmNvbnN0IGdhbWVCb2FyZCA9IHJlcXVpcmUoJy4vR2FtZWJvYXJkLmpzJyk7XG5jb25zdCBwbGF5ZXIgPSByZXF1aXJlKCAnLi9QbGF5ZXIuanMnKTtcblxuY29uc3QgbWFpbiA9IChmdW5jdGlvbigpe1xuICAgIGNvbnN0IG92ZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIGNvbnN0IHBsYXllcjEgPSBwbGF5ZXIoJ3BsYXllcjEnLCA0KTtcbiAgICBsZXQgZ2FtZUJvYXJkMSA9IGdhbWVCb2FyZChwbGF5ZXIxKTtcbiAgICBsZXQgcGxheWVyQm9hcmQxID0gZ2FtZUJvYXJkMS5tYWluRGl2O1xuXG4gICAgY29uc3QgcGxheWVyMiA9IHBsYXllcignY3B1JywgNCk7XG4gICAgbGV0IGdhbWVCb2FyZDIgPSBnYW1lQm9hcmQocGxheWVyMik7XG4gICAgbGV0IHBsYXllckJvYXJkMiA9IGdhbWVCb2FyZDIubWFpbkRpdjtcblxuICAgIGxldCBhY3RpdmVQbGF5ZXI7XG4gICAgbGV0IGdhbWVTdGFydGVkID0gZmFsc2U7XG5cbiAgICBmdW5jdGlvbiBpbml0KCl7XG4gICAgICAgIFxuICAgICAgICBvdmVyRGl2LmNsYXNzTGlzdC5hZGQoJ2Z1bGxCb2FyZCcpO1xuICAgICAgICBwbGF5ZXJCb2FyZDEuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpPT57XG4gICAgICAgICAgICBkaXZMaXN0ZW5IYW5kbGVyU2V0dXAoZXZlbnQsIGV2ZW50LnRhcmdldCwgcGxheWVyMSwgZ2FtZUJvYXJkMSk7XG4gICAgICAgICAgICBtYWluTG9vcCgpO1xuICAgICAgICB9KVxuICAgICAgICBcbiAgICAgICAgb3ZlckRpdi5hcHBlbmQocGxheWVyQm9hcmQxKTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmQob3ZlckRpdik7XG4gICAgfVxuXG5cbiAgICBmdW5jdGlvbiBtYWluTG9vcCgpe1xuICAgICAgICBpZihwbGF5ZXIxLnJlYWR5VG9GaWdodCgpJiYhZ2FtZVN0YXJ0ZWQpe1xuICAgICAgICAgICAgY3B1UG9wdWxhdG9yKCk7XG4gICAgICAgICAgICBnYW1lU3RhcnRlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZihwbGF5ZXIxLnJlYWR5VG9GaWdodCgpKXtcbiAgICAgICAgICAgIGNwdVBsYXkoKTtcbiAgICAgICAgfVxuXG4gICAgfVxuICAgIGZ1bmN0aW9uIGNwdVBsYXkoKXtcbiAgICAgICAgZnVuY3Rpb24gcmFuZG9tQ29vcmQoKXtcbiAgICAgICAgICAgIGxldCBjb29yZGluYXRlID0geyd4JzpNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkqOSksJ3knOk1hdGgucm91bmQoTWF0aC5yYW5kb20oKSo5KX1cbiAgICAgICAgICAgIHJldHVybiBjb29yZGluYXRlO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGZvcm1hdENvb3JkKCl7XG4gICAgICAgICAgICBsZXQgY29vcmRpbmF0ZSA9IHtkYXRhc2V0Ont4OmNvb3JkLngseTpjb29yZC55fX07XG4gICAgICAgICAgICByZXR1cm4gY29vcmRpbmF0ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBjb29yZCA9IHJhbmRvbUNvb3JkKCk7XG5cbiAgICAgICAgd2hpbGUoIWdhbWVCb2FyZDEudmFsaWRhdGVBdHRhY2soY29vcmQpKXtcbiAgICAgICAgICAgIGNvb3JkID0gcmFuZG9tQ29vcmQoKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICBmaXJlU2hvdChmb3JtYXRDb29yZCgpLCBudWxsLCBnYW1lQm9hcmQxKTsgICBcbiAgICB9XG4gICAgZnVuY3Rpb24gY3B1UG9wdWxhdG9yKCl7XG4gICAgICAgIHBsYXllckJvYXJkMi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50PT57XG4gICAgICAgICAgICAgICAgZGl2TGlzdGVuSGFuZGxlclBsYXkoZXZlbnQsZXZlbnQudGFyZ2V0LCBwbGF5ZXIxLCBnYW1lQm9hcmQyKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICBcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgZnVuY3Rpb24gcGxhY2VTaGlwcygpe1xuICAgICAgICAgICAgXG5cbiAgICAgICAgICAgIHdoaWxlKCFwbGF5ZXIyLnJlYWR5VG9GaWdodCgpKXtcbiAgICAgICAgICAgICAgICBsZXQgbmV3U2hpcCA9IHBsYXllcjIuYWRkU2hpcFRvQm9hcmQoKTtcblxuICAgICAgICAgICAgICAgIGxldCByYW5kb21WZXJ0aWNhbCA9IGZsaXBWZXJ0KCk7XG4gICAgICAgICAgICAgICAgaWYocmFuZG9tVmVydGljYWwpe1xuICAgICAgICAgICAgICAgICAgICBwbGF5ZXIyLnRvZ2dsZVZlcnRpY2FsKCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgbGV0IGNvb3JkaW5hdGUgPSByYW5kb21Db29yZCgpO1xuICAgICAgICAgICAgICAgIGxldCBjb29yZHMgPSBbXTtcbiAgICAgICAgICAgICAgICBjb29yZHMucHVzaChjb29yZGluYXRlKTtcblxuICAgICAgICAgICAgICAgIGlmKHBsYXllcjIuaXNWZXJ0aWNhbCgpKXtcbiAgICAgICAgICAgICAgICAgICAgZm9yKGxldCBpID0gMTsgaTxuZXdTaGlwLmdldExlbmd0aCgpOyBpKyspe1xuICAgICAgICAgICAgICAgICAgICAgICAgIGNvb3Jkcy5wdXNoKHt5OmNvb3JkaW5hdGUueSwgeDpwYXJzZUludChjb29yZGluYXRlLngpK2l9KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgIGZvcihsZXQgaSA9IDE7IGk8bmV3U2hpcC5nZXRMZW5ndGgoKTsgaSsrKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICBjb29yZHMucHVzaCh7eDpjb29yZGluYXRlLngsIHk6cGFyc2VJbnQoY29vcmRpbmF0ZS55KStpfSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYoZ2FtZUJvYXJkMi52YWxpZGF0ZVNoaXBQbGFjZW1lbnQoY29vcmRzKSl7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGNvb3Jkcyk7XG4gICAgICAgICAgICAgICAgICAgIGdhbWVCb2FyZDIuYWRkU2hpcEkoY29vcmRzLCBuZXdTaGlwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgcGxheWVyMi5pbnZhbGlkTW92ZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgXG5cblxuICAgICAgICAgICAgZnVuY3Rpb24gZmxpcFZlcnQoKXtcbiAgICAgICAgICAgICAgICBsZXQgZmxpcCA9IHRydWU7XG4gICAgICAgICAgICAgICAgaWYoTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKSoxMCA+IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSkqMTApe1xuICAgICAgICAgICAgICAgICAgICBmbGlwID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBmbGlwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZnVuY3Rpb24gcmFuZG9tQ29vcmQoKXtcbiAgICAgICAgICAgICAgICBsZXQgY29vcmRpbmF0ZSA9IHsneCc6TWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKjkpLCd5JzpNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkqOSl9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvb3JkaW5hdGU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgICAgICBwbGFjZVNoaXBzKCk7XG4gICAgICAgIHBsYXllckJvYXJkMi5jbGFzc0xpc3QuYWRkKCdjcHUnKTtcbiAgICAgICAgb3ZlckRpdi5hcHBlbmQocGxheWVyQm9hcmQyKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkaXZMaXN0ZW5IYW5kbGVyUGxheShlLCBjaHVuaywgcGxheWVyLCBnYW1lQm9hcmQpe1xuICAgICAgICBpZihnYW1lQm9hcmQudmFsaWRhdGVBdHRhY2soe3g6Y2h1bmsuZGF0YXNldC54LCB5OmNodW5rLmRhdGFzZXQueX0pKXtcbiAgICAgICAgICAgICBmaXJlU2hvdChjaHVuaywgcGxheWVyLCBnYW1lQm9hcmQpO1xuICAgICAgICAgICAgIGNoZWNrSWZXaW5uZXIoKTtcbiAgICAgICAgICAgICBtYWluTG9vcCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGl2TGlzdGVuSGFuZGxlclNldHVwKGUsY2h1bmssIHBsYXllciwgZ2FtZUJvYXJkKXtcbiAgICAgICAgaWYoISFjaHVuay5kYXRhc2V0Lngpe1xuICAgICAgICAgICAgaWYoIXBsYXllci5yZWFkeVRvRmlnaHQoKSl7XG4gICAgICAgICAgICAgICAgc2V0dXBQaGFzZShjaHVuaywgcGxheWVyLCBnYW1lQm9hcmQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZihwbGF5ZXIucmVhZHlUb0ZpZ2h0KCkpe1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdBdHRhY2sgdGhlIGVuZW15IScpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfVxuICAgIFxuXG4gICAgZnVuY3Rpb24gY2hlY2tJZldpbm5lcigpe1xuICAgICAgICBpZihwbGF5ZXIxLmhhc0xvc3QoKSl7XG4gICAgICAgICAgICBhbGVydCgncGxheWVyIDIgd2lucycpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYocGxheWVyMi5oYXNMb3N0KCkpe1xuICAgICAgICAgICAgYWxlcnQoJ3BsYXllciAxIHdpbnMnKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBmdW5jdGlvbiBzZXR1cFBoYXNlKGNodW5rLCBwbGF5ZXIsIGdhbWVCb2FyZCl7XG4gICAgICAgIGxldCBuZXdTaGlwID0gcGxheWVyLmFkZFNoaXBUb0JvYXJkKCk7XG4gICAgICAgIC8vcG9zc2libHkgc3BpbiB0aGlzIGludG8gc2hpcCwgYWxsb3cgc2hpcCB0byBrbm93IHdoZXJlIGl0IGlzLlxuICAgICAgICBsZXQgY29vcmRzID0gW3t4OmNodW5rLmRhdGFzZXQueCwgeTpjaHVuay5kYXRhc2V0Lnl9XTtcbiAgICAgICAgaWYocGxheWVyLmlzVmVydGljYWwoKSl7XG4gICAgICAgICAgIGZvcihsZXQgaSA9IDE7IGk8bmV3U2hpcC5nZXRMZW5ndGgoKTsgaSsrKXtcbiAgICAgICAgICAgICAgICBjb29yZHMucHVzaCh7eTpjaHVuay5kYXRhc2V0LnksIHg6cGFyc2VJbnQoY2h1bmsuZGF0YXNldC54KStpfSlcbiAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgICBmb3IobGV0IGkgPSAxOyBpPG5ld1NoaXAuZ2V0TGVuZ3RoKCk7IGkrKyl7XG4gICAgICAgICAgICAgICAgY29vcmRzLnB1c2goe3g6Y2h1bmsuZGF0YXNldC54LCB5OnBhcnNlSW50KGNodW5rLmRhdGFzZXQueSkraX0pXG4gICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZihnYW1lQm9hcmQudmFsaWRhdGVTaGlwUGxhY2VtZW50KGNvb3Jkcykpe1xuICAgICAgICAgICAgZ2FtZUJvYXJkLmFkZFNoaXBJKGNvb3JkcywgbmV3U2hpcCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIHBsYXllci5pbnZhbGlkTW92ZSgpO1xuICAgICAgICB9XG4gICAgICAgXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZmlyZVNob3QoY2h1bmssIHBsYXllciwgZ2FtZUJvYXJkKXtcbiAgICAgICAgZ2FtZUJvYXJkLmdyaWRbY2h1bmsuZGF0YXNldC54XVtjaHVuay5kYXRhc2V0LnldLnJlY2lldmVBdHRhY2soKTtcbiAgICB9XG4gICAgaW5pdCgpO1xufSkoKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==