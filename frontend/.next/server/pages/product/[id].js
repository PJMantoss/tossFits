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
exports.id = "pages/product/[id]";
exports.ids = ["pages/product/[id]"];
exports.modules = {

/***/ "./components/SingleProduct.js":
/*!*************************************!*\
  !*** ./components/SingleProduct.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ \"graphql-tag\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _jsxFileName = \"/home/mantoss/tossFits/frontend/components/SingleProduct.js\";\n\n\nconst SINGLE_ITEM_QUERY = (graphql_tag__WEBPACK_IMPORTED_MODULE_2___default())`\n    query {\n        Product(where: {id: \"647e32be69b4872c76637519\"}){\n            name,\n            price,\n            description\n        }\n    }\n`;\n\nfunction SingleProduct({\n  id\n}) {\n  const {\n    data,\n    loading,\n    error\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useQuery)(SINGLE_ITEM_QUERY);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    children: \"SingleProduct\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 18,\n    columnNumber: 5\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (SingleProduct);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b3NzLWZpdHMtZnJvbnRlbmQvLi9jb21wb25lbnRzL1NpbmdsZVByb2R1Y3QuanM/ZDkxZCJdLCJuYW1lcyI6WyJTSU5HTEVfSVRFTV9RVUVSWSIsImdxbCIsIlNpbmdsZVByb2R1Y3QiLCJpZCIsImRhdGEiLCJsb2FkaW5nIiwiZXJyb3IiLCJ1c2VRdWVyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBLE1BQU1BLGlCQUFpQixHQUFHQyxvREFBSTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBUkE7O0FBVUEsU0FBU0MsYUFBVCxDQUF1QjtBQUFFQztBQUFGLENBQXZCLEVBQStCO0FBQzNCLFFBQU07QUFBRUMsUUFBRjtBQUFRQyxXQUFSO0FBQWlCQztBQUFqQixNQUEyQkMsK0NBQVEsQ0FBQ1AsaUJBQUQsQ0FBekM7QUFFRixzQkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBR0Q7O0FBRUQsK0RBQWVFLGFBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL1NpbmdsZVByb2R1Y3QuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlUXVlcnkgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgZ3FsIGZyb20gXCJncmFwaHFsLXRhZ1wiO1xuXG5jb25zdCBTSU5HTEVfSVRFTV9RVUVSWSA9IGdxbGBcbiAgICBxdWVyeSB7XG4gICAgICAgIFByb2R1Y3Qod2hlcmU6IHtpZDogXCI2NDdlMzJiZTY5YjQ4NzJjNzY2Mzc1MTlcIn0pe1xuICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgIHByaWNlLFxuICAgICAgICAgICAgZGVzY3JpcHRpb25cbiAgICAgICAgfVxuICAgIH1cbmA7XG5cbmZ1bmN0aW9uIFNpbmdsZVByb2R1Y3QoeyBpZCB9KSB7XG4gICAgY29uc3QgeyBkYXRhLCBsb2FkaW5nLCBlcnJvciB9ID0gdXNlUXVlcnkoU0lOR0xFX0lURU1fUVVFUlkpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5TaW5nbGVQcm9kdWN0PC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2luZ2xlUHJvZHVjdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/SingleProduct.js\n");

/***/ }),

/***/ "./pages/product/[id].js":
/*!*******************************!*\
  !*** ./pages/product/[id].js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SingleProductPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_SingleProduct__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/SingleProduct */ \"./components/SingleProduct.js\");\n\nvar _jsxFileName = \"/home/mantoss/tossFits/frontend/pages/product/[id].js\";\n\nfunction SingleProductPage({\n  query\n}) {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SingleProduct__WEBPACK_IMPORTED_MODULE_1__.default, {\n    id: query.id\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 5,\n    columnNumber: 12\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b3NzLWZpdHMtZnJvbnRlbmQvLi9wYWdlcy9wcm9kdWN0L1tpZF0uanM/M2Q5NiJdLCJuYW1lcyI6WyJTaW5nbGVQcm9kdWN0UGFnZSIsInF1ZXJ5IiwiaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBRWUsU0FBU0EsaUJBQVQsQ0FBMkI7QUFBRUM7QUFBRixDQUEzQixFQUFxQztBQUVoRCxzQkFBTyw4REFBQyw4REFBRDtBQUFlLE1BQUUsRUFBR0EsS0FBSyxDQUFDQztBQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7QUFDSCIsImZpbGUiOiIuL3BhZ2VzL3Byb2R1Y3QvW2lkXS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTaW5nbGVQcm9kdWN0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1NpbmdsZVByb2R1Y3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2luZ2xlUHJvZHVjdFBhZ2UoeyBxdWVyeSB9KXtcblxuICAgIHJldHVybiA8U2luZ2xlUHJvZHVjdCBpZD17IHF1ZXJ5LmlkIH0gLz5cbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/product/[id].js\n");

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/product/[id].js"));
module.exports = __webpack_exports__;

})();