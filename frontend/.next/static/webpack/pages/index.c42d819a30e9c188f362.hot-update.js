/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Products.js":
/*!********************************!*\
  !*** ./components/Products.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ALL_PRODUCTS_QUERY\": function() { return /* binding */ ALL_PRODUCTS_QUERY; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_mantoss_tossFits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! graphql-tag */ \"./node_modules/graphql-tag/lib/index.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _Product__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Product */ \"./components/Product.js\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config */ \"./config.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/home/mantoss/tossFits/frontend/components/Products.js\",\n    _s = $RefreshSig$();\n\nfunction _templateObject() {\n  var data = (0,_home_mantoss_tossFits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.default)([\"\\n    query ALL_PRODUCTS_QUERY ($skip: Int = 0, $first: Int){\\n        allProducts (skip: $skip, first: $first) {\\n            id \\n            name\\n            price\\n            description\\n            photo {\\n                id\\n                image {\\n                    publicUrlTransformed\\n                }\\n            }\\n        }\\n    }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\n\n\nvar ALL_PRODUCTS_QUERY = (0,graphql_tag__WEBPACK_IMPORTED_MODULE_5__.default)(_templateObject());\nvar ProductsListStyles = styled_components__WEBPACK_IMPORTED_MODULE_6__.default.div.withConfig({\n  displayName: \"Products__ProductsListStyles\",\n  componentId: \"sc-4d7nu5-0\"\n})([\"display:grid;grid-template-columns:1fr 1fr;grid-gap:60px;\"]);\n_c = ProductsListStyles;\n\nfunction Products(_ref) {\n  _s();\n\n  var _this = this;\n\n  var page = _ref.page;\n\n  var _useQuery = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_7__.useQuery)(ALL_PRODUCTS_QUERY, {\n    variables: {\n      skip: page * _config__WEBPACK_IMPORTED_MODULE_4__.perPage - _config__WEBPACK_IMPORTED_MODULE_4__.perPage,\n      first: _config__WEBPACK_IMPORTED_MODULE_4__.perPage\n    }\n  }),\n      data = _useQuery.data,\n      error = _useQuery.error,\n      loading = _useQuery.loading;\n\n  console.log(data, error, loading);\n  if (loading) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n    children: \"Loading...\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 40,\n    columnNumber: 25\n  }, this);\n  if (error) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n    children: error.message\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 41,\n    columnNumber: 23\n  }, this);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ProductsListStyles, {\n    children: data.allProducts.map(function (key, product) {\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Product__WEBPACK_IMPORTED_MODULE_3__.default, {\n        product: product\n      }, product.id, false, {\n        fileName: _jsxFileName,\n        lineNumber: 45,\n        columnNumber: 13\n      }, _this);\n    })\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 43,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Products, \"Z+0LgrSWpTZsLds+tjQq9+67f1U=\", false, function () {\n  return [_apollo_client__WEBPACK_IMPORTED_MODULE_7__.useQuery];\n});\n\n_c2 = Products;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Products);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"ProductsListStyles\");\n$RefreshReg$(_c2, \"Products\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9kdWN0cy5qcz83MTQwIl0sIm5hbWVzIjpbIkFMTF9QUk9EVUNUU19RVUVSWSIsImdxbCIsIlByb2R1Y3RzTGlzdFN0eWxlcyIsInN0eWxlZCIsIlByb2R1Y3RzIiwicGFnZSIsInVzZVF1ZXJ5IiwidmFyaWFibGVzIiwic2tpcCIsInBlclBhZ2UiLCJmaXJzdCIsImRhdGEiLCJlcnJvciIsImxvYWRpbmciLCJjb25zb2xlIiwibG9nIiwibWVzc2FnZSIsImFsbFByb2R1Y3RzIiwibWFwIiwia2V5IiwicHJvZHVjdCIsImlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRU8sSUFBTUEsa0JBQWtCLEdBQUdDLG9EQUFILG1CQUF4QjtBQWlCUCxJQUFNQyxrQkFBa0IsR0FBR0MscUVBQUg7QUFBQTtBQUFBO0FBQUEsaUVBQXhCO0tBQU1ELGtCOztBQU1OLFNBQVNFLFFBQVQsT0FBNEI7QUFBQTs7QUFBQTs7QUFBQSxNQUFSQyxJQUFRLFFBQVJBLElBQVE7O0FBQUEsa0JBQ09DLHdEQUFRLENBQUNOLGtCQUFELEVBQXFCO0FBQ3hETyxhQUFTLEVBQUU7QUFDUEMsVUFBSSxFQUFFSCxJQUFJLEdBQUdJLDRDQUFQLEdBQWlCQSw0Q0FEaEI7QUFFUEMsV0FBSyxFQUFFRCw0Q0FBT0E7QUFGUDtBQUQ2QyxHQUFyQixDQURmO0FBQUEsTUFDakJFLElBRGlCLGFBQ2pCQSxJQURpQjtBQUFBLE1BQ1hDLEtBRFcsYUFDWEEsS0FEVztBQUFBLE1BQ0pDLE9BREksYUFDSkEsT0FESTs7QUFPeEJDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZSixJQUFaLEVBQWtCQyxLQUFsQixFQUF5QkMsT0FBekI7QUFFQSxNQUFJQSxPQUFKLEVBQWEsb0JBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQUNiLE1BQUlELEtBQUosRUFBVyxvQkFBTztBQUFBLGNBQUlBLEtBQUssQ0FBQ0k7QUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7QUFDYixzQkFDRSw4REFBQyxrQkFBRDtBQUFBLGNBQ0tMLElBQUksQ0FBQ00sV0FBTCxDQUFpQkMsR0FBakIsQ0FBcUIsVUFBQ0MsR0FBRCxFQUFNQyxPQUFOO0FBQUEsMEJBQ2xCLDhEQUFDLDZDQUFEO0FBQTBCLGVBQU8sRUFBRUE7QUFBbkMsU0FBY0EsT0FBTyxDQUFDQyxFQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRGtCO0FBQUEsS0FBckI7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFPRDs7R0FsQlFqQixRO1VBQzBCRSxvRDs7O01BRDFCRixRO0FBb0JULCtEQUFlQSxRQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9Qcm9kdWN0cy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcbmltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgUHJvZHVjdCBmcm9tICcuL1Byb2R1Y3QnO1xuaW1wb3J0IHsgcGVyUGFnZSB9IGZyb20gJy4uL2NvbmZpZyc7XG5cbmV4cG9ydCBjb25zdCBBTExfUFJPRFVDVFNfUVVFUlkgPSBncWxgXG4gICAgcXVlcnkgQUxMX1BST0RVQ1RTX1FVRVJZICgkc2tpcDogSW50ID0gMCwgJGZpcnN0OiBJbnQpe1xuICAgICAgICBhbGxQcm9kdWN0cyAoc2tpcDogJHNraXAsIGZpcnN0OiAkZmlyc3QpIHtcbiAgICAgICAgICAgIGlkIFxuICAgICAgICAgICAgbmFtZVxuICAgICAgICAgICAgcHJpY2VcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uXG4gICAgICAgICAgICBwaG90byB7XG4gICAgICAgICAgICAgICAgaWRcbiAgICAgICAgICAgICAgICBpbWFnZSB7XG4gICAgICAgICAgICAgICAgICAgIHB1YmxpY1VybFRyYW5zZm9ybWVkXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuYDtcblxuY29uc3QgUHJvZHVjdHNMaXN0U3R5bGVzID0gc3R5bGVkLmRpdmBcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgICBncmlkLWdhcDogNjBweDtcbmA7XG5cbmZ1bmN0aW9uIFByb2R1Y3RzKHsgcGFnZSB9KSB7XG4gICAgY29uc3Qge2RhdGEsIGVycm9yLCBsb2FkaW5nfSA9IHVzZVF1ZXJ5KEFMTF9QUk9EVUNUU19RVUVSWSwge1xuICAgICAgICB2YXJpYWJsZXM6IHtcbiAgICAgICAgICAgIHNraXA6IHBhZ2UgKiBwZXJQYWdlIC0gcGVyUGFnZSxcbiAgICAgICAgICAgIGZpcnN0OiBwZXJQYWdlLFxuICAgICAgICB9XG4gICAgfSk7XG4gICAgY29uc29sZS5sb2coZGF0YSwgZXJyb3IsIGxvYWRpbmcpO1xuXG4gICAgaWYgKGxvYWRpbmcpIHJldHVybiA8cD5Mb2FkaW5nLi4uPC9wPlxuICAgIGlmIChlcnJvcikgcmV0dXJuIDxwPntlcnJvci5tZXNzYWdlfTwvcD5cbiAgcmV0dXJuIChcbiAgICA8UHJvZHVjdHNMaXN0U3R5bGVzPlxuICAgICAgICB7ZGF0YS5hbGxQcm9kdWN0cy5tYXAoKGtleSwgcHJvZHVjdCkgPT4gKFxuICAgICAgICAgICAgPFByb2R1Y3Qga2V5PXtwcm9kdWN0LmlkfSBwcm9kdWN0PXtwcm9kdWN0fS8+XG4gICAgICAgICkpfVxuICAgIDwvUHJvZHVjdHNMaXN0U3R5bGVzPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RzOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Products.js\n");

/***/ })

});