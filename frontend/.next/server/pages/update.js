/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/update";
exports.ids = ["pages/update"];
exports.modules = {

/***/ "./components/UpdateProduct.js":
/*!*************************************!*\
  !*** ./components/UpdateProduct.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ UpdateProduct; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ \"graphql-tag\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _jsxFileName = \"/home/mantoss/tossFits/frontend/components/UpdateProduct.js\";\n\n\nconst SINGLE_PRODUCT_QUERY = (graphql_tag__WEBPACK_IMPORTED_MODULE_2___default())`\n    query SINGLE_PRODUCT_QUERY($id: ID!) {\n        Product(where: {id: $id}){\n            name\n            price\n            description\n            id\n            photo {\n                image {\n                    publicUrlTransformed\n                }\n                altText\n            }\n        }\n    }\n`;\nfunction UpdateProduct({\n  id\n}) {\n  const {\n    data,\n    error,\n    loading\n  } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.useQuery)(SINGLE_PRODUCT_QUERY, {\n    variables: {\n      id\n    }\n  });\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n    children: [\"Update Product \", id, \"!\"]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 28,\n    columnNumber: 12\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b3NzLWZpdHMtZnJvbnRlbmQvLi9jb21wb25lbnRzL1VwZGF0ZVByb2R1Y3QuanM/OWU4ZSJdLCJuYW1lcyI6WyJTSU5HTEVfUFJPRFVDVF9RVUVSWSIsImdxbCIsIlVwZGF0ZVByb2R1Y3QiLCJpZCIsImRhdGEiLCJlcnJvciIsImxvYWRpbmciLCJ1c2VRdWVyeSIsInZhcmlhYmxlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBLE1BQU1BLG9CQUFvQixHQUFHQyxvREFBSTtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FmQTtBQWlCZSxTQUFTQyxhQUFULENBQXVCO0FBQUVDO0FBQUYsQ0FBdkIsRUFBOEI7QUFDekMsUUFBTTtBQUFDQyxRQUFEO0FBQU9DLFNBQVA7QUFBY0M7QUFBZCxNQUF5QkMsd0RBQVEsQ0FBQ1Asb0JBQUQsRUFBdUI7QUFDMURRLGFBQVMsRUFBRTtBQUNQTDtBQURPO0FBRCtDLEdBQXZCLENBQXZDO0FBTUEsc0JBQU87QUFBQSxrQ0FBb0JBLEVBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBQ0giLCJmaWxlIjoiLi9jb21wb25lbnRzL1VwZGF0ZVByb2R1Y3QuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xuaW1wb3J0IGdxbCBmcm9tIFwiZ3JhcGhxbC10YWdcIjtcblxuY29uc3QgU0lOR0xFX1BST0RVQ1RfUVVFUlkgPSBncWxgXG4gICAgcXVlcnkgU0lOR0xFX1BST0RVQ1RfUVVFUlkoJGlkOiBJRCEpIHtcbiAgICAgICAgUHJvZHVjdCh3aGVyZToge2lkOiAkaWR9KXtcbiAgICAgICAgICAgIG5hbWVcbiAgICAgICAgICAgIHByaWNlXG4gICAgICAgICAgICBkZXNjcmlwdGlvblxuICAgICAgICAgICAgaWRcbiAgICAgICAgICAgIHBob3RvIHtcbiAgICAgICAgICAgICAgICBpbWFnZSB7XG4gICAgICAgICAgICAgICAgICAgIHB1YmxpY1VybFRyYW5zZm9ybWVkXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGFsdFRleHRcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFVwZGF0ZVByb2R1Y3QoeyBpZCB9KXtcbiAgICBjb25zdCB7ZGF0YSwgZXJyb3IsIGxvYWRpbmd9ID0gdXNlUXVlcnkoU0lOR0xFX1BST0RVQ1RfUVVFUlksIHtcbiAgICAgICAgdmFyaWFibGVzOiB7XG4gICAgICAgICAgICBpZFxuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gPGgxPlVwZGF0ZSBQcm9kdWN0IHtpZH0hPC9oMT5cbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/UpdateProduct.js\n");

/***/ }),

/***/ "./pages/update.js":
/*!*************************!*\
  !*** ./pages/update.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_UpdateProduct__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/UpdateProduct */ \"./components/UpdateProduct.js\");\n\nvar _jsxFileName = \"/home/mantoss/tossFits/frontend/pages/update.js\";\n\n\n\nfunction UpdateProductPage({\n  query\n}) {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_UpdateProduct__WEBPACK_IMPORTED_MODULE_2__.default, {\n      id: query.id\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 7,\n    columnNumber: 5\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (UpdateProductPage);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b3NzLWZpdHMtZnJvbnRlbmQvLi9wYWdlcy91cGRhdGUuanM/YTEwNCJdLCJuYW1lcyI6WyJVcGRhdGVQcm9kdWN0UGFnZSIsInF1ZXJ5IiwiaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxTQUFTQSxpQkFBVCxDQUEyQjtBQUFFQztBQUFGLENBQTNCLEVBQXNDO0FBRXBDLHNCQUNFO0FBQUEsMkJBQ0UsOERBQUMsOERBQUQ7QUFBZSxRQUFFLEVBQUVBLEtBQUssQ0FBQ0M7QUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQUtEOztBQUVELCtEQUFlRixpQkFBZiIsImZpbGUiOiIuL3BhZ2VzL3VwZGF0ZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgVXBkYXRlUHJvZHVjdCBmcm9tICcuLi9jb21wb25lbnRzL1VwZGF0ZVByb2R1Y3QnO1xuXG5mdW5jdGlvbiBVcGRhdGVQcm9kdWN0UGFnZSh7IHF1ZXJ5IH0pIHtcbiAgXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxVcGRhdGVQcm9kdWN0IGlkPXtxdWVyeS5pZH0gLz5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBVcGRhdGVQcm9kdWN0UGFnZTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/update.js\n");

/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = require("@apollo/client");;

/***/ }),

/***/ "graphql-tag":
/*!******************************!*\
  !*** external "graphql-tag" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("graphql-tag");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/update.js"));
module.exports = __webpack_exports__;

})();