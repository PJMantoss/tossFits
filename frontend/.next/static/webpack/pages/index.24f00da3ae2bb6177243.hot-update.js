/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/DeleteProduct.js":
/*!*************************************!*\
  !*** ./components/DeleteProduct.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ DeleteProduct; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_mantoss_tossFits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ \"./node_modules/graphql-tag/lib/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/home/mantoss/tossFits/frontend/components/DeleteProduct.js\";\n\nfunction _templateObject() {\n  var data = (0,_home_mantoss_tossFits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.default)([\"\\n    mutation DELETE_PRODUCT_MUTATION($id: ID!){\\n        deleteProduct($id){\\n            id\\n            name\\n        }\\n}\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\nvar DELETE_PRODUCT_MUTATION = (0,graphql_tag__WEBPACK_IMPORTED_MODULE_2__.default)(_templateObject());\nfunction DeleteProduct(_ref) {\n  var id = _ref.id,\n      children = _ref.children;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n    type: \"button\",\n    onClick: function onClick() {\n      if (confirm(\"Are You Sure You Want to Delete this Item?\")) {\n        console.log(\"DELETING\");\n      }\n\n      ;\n    },\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 14,\n    columnNumber: 5\n  }, this);\n}\n_c = DeleteProduct;\n\nvar _c;\n\n$RefreshReg$(_c, \"DeleteProduct\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9EZWxldGVQcm9kdWN0LmpzP2QzZTMiXSwibmFtZXMiOlsiREVMRVRFX1BST0RVQ1RfTVVUQVRJT04iLCJncWwiLCJEZWxldGVQcm9kdWN0IiwiaWQiLCJjaGlsZHJlbiIsImNvbmZpcm0iLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUEsSUFBTUEsdUJBQXVCLEdBQUdDLG9EQUFILG1CQUE3QjtBQVNlLFNBQVNDLGFBQVQsT0FBd0M7QUFBQSxNQUFmQyxFQUFlLFFBQWZBLEVBQWU7QUFBQSxNQUFYQyxRQUFXLFFBQVhBLFFBQVc7QUFDbkQsc0JBQ0E7QUFDSSxRQUFJLEVBQUMsUUFEVDtBQUVJLFdBQU8sRUFBRSxtQkFBTTtBQUNYLFVBQUdDLE9BQU8sQ0FBQyw0Q0FBRCxDQUFWLEVBQXlEO0FBQ3JEQyxlQUFPLENBQUNDLEdBQVIsQ0FBWSxVQUFaO0FBQ0g7O0FBQUE7QUFDSixLQU5MO0FBQUEsY0FRS0g7QUFSTDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREE7QUFZSDtLQWJ1QkYsYSIsImZpbGUiOiIuL2NvbXBvbmVudHMvRGVsZXRlUHJvZHVjdC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBncWwgZnJvbSBcImdyYXBocWwtdGFnXCI7XG5cbmNvbnN0IERFTEVURV9QUk9EVUNUX01VVEFUSU9OID0gZ3FsYFxuICAgIG11dGF0aW9uIERFTEVURV9QUk9EVUNUX01VVEFUSU9OKCRpZDogSUQhKXtcbiAgICAgICAgZGVsZXRlUHJvZHVjdCgkaWQpe1xuICAgICAgICAgICAgaWRcbiAgICAgICAgICAgIG5hbWVcbiAgICAgICAgfVxufVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVsZXRlUHJvZHVjdCh7IGlkLCBjaGlsZHJlbiB9KXtcbiAgICByZXR1cm4gKFxuICAgIDxidXR0b24gXG4gICAgICAgIHR5cGU9XCJidXR0b25cIiBcbiAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgaWYoY29uZmlybShcIkFyZSBZb3UgU3VyZSBZb3UgV2FudCB0byBEZWxldGUgdGhpcyBJdGVtP1wiKSl7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJERUxFVElOR1wiKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH19XG4gICAgPlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgPC9idXR0b24+XG4gICAgKVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/DeleteProduct.js\n");

/***/ })

});