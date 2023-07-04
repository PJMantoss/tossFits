/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/update",{

/***/ "./components/UpdateProduct.js":
/*!*************************************!*\
  !*** ./components/UpdateProduct.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ UpdateProduct; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_mantoss_tossFits_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ \"./node_modules/next/node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _home_mantoss_tossFits_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_mantoss_tossFits_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _home_mantoss_tossFits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _home_mantoss_tossFits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _home_mantoss_tossFits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! graphql-tag */ \"./node_modules/graphql-tag/lib/index.js\");\n/* harmony import */ var _styles_Form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/Form */ \"./components/styles/Form.js\");\n/* harmony import */ var _lib_useForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lib/useForm */ \"./lib/useForm.js\");\n/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ErrorMessage */ \"./components/ErrorMessage.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\nvar _jsxFileName = \"/home/mantoss/tossFits/frontend/components/UpdateProduct.js\",\n    _s = $RefreshSig$();\n\nfunction _templateObject2() {\n  var data = (0,_home_mantoss_tossFits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_4__.default)([\"\\n    mutation UPDATE_PRODUCT_MUTATION(\\n        $id: ID!\\n        $name: String\\n        $description: String\\n        $price: Int\\n    ){\\n        updateProduct(\\n            id: $id,\\n            data: {\\n                id: $id,\\n                name: $$name,\\n                description: $description,\\n                price: $price\\n            }\\n        )\\n    }\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = (0,_home_mantoss_tossFits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_4__.default)([\"\\n    query SINGLE_PRODUCT_QUERY($id: ID!) {\\n        Product(where: {id: $id}){\\n            name\\n            price\\n            description\\n            id\\n            photo {\\n                image {\\n                    publicUrlTransformed\\n                }\\n                altText\\n            }\\n        }\\n    }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\n\nvar SINGLE_PRODUCT_QUERY = (0,graphql_tag__WEBPACK_IMPORTED_MODULE_8__.default)(_templateObject());\nvar UPDATE_PRODUCT_MUTATION = (0,graphql_tag__WEBPACK_IMPORTED_MODULE_8__.default)(_templateObject2());\nfunction UpdateProduct(_ref) {\n  _s();\n\n  var id = _ref.id;\n\n  //Get the specific product\n  var _useQuery = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_9__.useQuery)(SINGLE_PRODUCT_QUERY, {\n    variables: {\n      id: id\n    }\n  }),\n      data = _useQuery.data,\n      error = _useQuery.error,\n      loading = _useQuery.loading; // use mutation to update the product\n\n\n  var _useMutation = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_9__.useMutation)(UPDATE_PRODUCT_MUTATION, {\n    variables: {\n      id: id\n    }\n  }),\n      _useMutation2 = (0,_home_mantoss_tossFits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__.default)(_useMutation, 2),\n      updateProduct = _useMutation2[0],\n      _useMutation2$ = _useMutation2[1],\n      updateData = _useMutation2$.data,\n      updateError = _useMutation2$.error,\n      updateLoading = _useMutation2$.loading;\n\n  console.log(data); //create state for the form inputs\n\n  var _useForm = (0,_lib_useForm__WEBPACK_IMPORTED_MODULE_6__.default)(data),\n      inputs = _useForm.inputs,\n      handleChange = _useForm.handleChange,\n      resetForm = _useForm.resetForm,\n      clearForm = _useForm.clearForm;\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_Form__WEBPACK_IMPORTED_MODULE_5__.default, {\n    onSubmit: /*#__PURE__*/function () {\n      var _ref2 = (0,_home_mantoss_tossFits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_home_mantoss_tossFits_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(e) {\n        return _home_mantoss_tossFits_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                e.preventDefault(); // console.log(inputs);\n                // // Submit the input fields to the backend\n                // const res = await createProduct();\n                // //console.log(res);\n                // clearForm();\n                // // Go to that product's page\n                // Router.push({\n                //     pathname: `/product/${res.data.createProduct.id}`\n                // })\n\n              case 1:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n\n      return function (_x) {\n        return _ref2.apply(this, arguments);\n      };\n    }(),\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ErrorMessage__WEBPACK_IMPORTED_MODULE_7__.default, {\n      error: error || updateError\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 13\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"fieldset\", {\n      disabled: updateLoading,\n      \"aria-busy\": updateLoading,\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n        htmlFor: \"image\",\n        children: [\"Image\", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n          required: true,\n          id: \"image\",\n          name: \"image\",\n          type: \"file\",\n          onChange: handleChange\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 89,\n          columnNumber: 21\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 87,\n        columnNumber: 17\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n        htmlFor: \"name\",\n        children: [\"Name\", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n          id: \"name\",\n          name: \"name\",\n          type: \"text\",\n          placeholder: \"Name\",\n          value: inputs.name,\n          onChange: handleChange\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 99,\n          columnNumber: 21\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 97,\n        columnNumber: 17\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n        htmlFor: \"price\",\n        children: [\"Price\", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n          id: \"price\",\n          name: \"price\",\n          type: \"number\",\n          placeholder: \"Price\",\n          value: inputs.price,\n          onChange: handleChange\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 110,\n          columnNumber: 21\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 108,\n        columnNumber: 17\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n        htmlFor: \"description\",\n        children: [\"Description\", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n          id: \"description\",\n          name: \"description\",\n          placeholder: \"Description\",\n          value: inputs.description,\n          onChange: handleChange\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 121,\n          columnNumber: 21\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 119,\n        columnNumber: 17\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        type: \"submit\",\n        children: \"+ Update Product\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 129,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 86,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 68,\n    columnNumber: 9\n  }, this);\n}\n\n_s(UpdateProduct, \"ytM57gKLLAH7TMV++HwyfmmCdGY=\", false, function () {\n  return [_apollo_client__WEBPACK_IMPORTED_MODULE_9__.useQuery, _apollo_client__WEBPACK_IMPORTED_MODULE_9__.useMutation, _lib_useForm__WEBPACK_IMPORTED_MODULE_6__.default];\n});\n\n_c = UpdateProduct;\n\nvar _c;\n\n$RefreshReg$(_c, \"UpdateProduct\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9VcGRhdGVQcm9kdWN0LmpzPzllOGUiXSwibmFtZXMiOlsiU0lOR0xFX1BST0RVQ1RfUVVFUlkiLCJncWwiLCJVUERBVEVfUFJPRFVDVF9NVVRBVElPTiIsIlVwZGF0ZVByb2R1Y3QiLCJpZCIsInVzZVF1ZXJ5IiwidmFyaWFibGVzIiwiZGF0YSIsImVycm9yIiwibG9hZGluZyIsInVzZU11dGF0aW9uIiwidXBkYXRlUHJvZHVjdCIsInVwZGF0ZURhdGEiLCJ1cGRhdGVFcnJvciIsInVwZGF0ZUxvYWRpbmciLCJjb25zb2xlIiwibG9nIiwidXNlRm9ybSIsImlucHV0cyIsImhhbmRsZUNoYW5nZSIsInJlc2V0Rm9ybSIsImNsZWFyRm9ybSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsIm5hbWUiLCJwcmljZSIsImRlc2NyaXB0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLG9CQUFvQixHQUFHQyxvREFBSCxtQkFBMUI7QUFpQkEsSUFBTUMsdUJBQXVCLEdBQUdELG9EQUFILG9CQUE3QjtBQW1CZSxTQUFTRSxhQUFULE9BQThCO0FBQUE7O0FBQUEsTUFBTEMsRUFBSyxRQUFMQSxFQUFLOztBQUN6QztBQUR5QyxrQkFFVkMsd0RBQVEsQ0FBQ0wsb0JBQUQsRUFBdUI7QUFDMURNLGFBQVMsRUFBRTtBQUNQRixRQUFFLEVBQUZBO0FBRE87QUFEK0MsR0FBdkIsQ0FGRTtBQUFBLE1BRWxDRyxJQUZrQyxhQUVsQ0EsSUFGa0M7QUFBQSxNQUU1QkMsS0FGNEIsYUFFNUJBLEtBRjRCO0FBQUEsTUFFckJDLE9BRnFCLGFBRXJCQSxPQUZxQixFQU83Qzs7O0FBUDZDLHFCQVlwQ0MsMkRBQVcsQ0FBQ1IsdUJBQUQsRUFBMEI7QUFDdENJLGFBQVMsRUFBRTtBQUNQRixRQUFFLEVBQUZBO0FBRE87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LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlTXV0YXRpb24sIHVzZVF1ZXJ5IH0gZnJvbSBcIkBhcG9sbG8vY2xpZW50XCI7XG5pbXBvcnQgZ3FsIGZyb20gXCJncmFwaHFsLXRhZ1wiO1xuaW1wb3J0IEZvcm0gZnJvbSBcIi4vc3R5bGVzL0Zvcm1cIjtcbmltcG9ydCB1c2VGb3JtIGZyb20gXCIuLi9saWIvdXNlRm9ybVwiO1xuaW1wb3J0IERpc3BsYXlFcnJvciBmcm9tIFwiLi9FcnJvck1lc3NhZ2VcIjtcblxuY29uc3QgU0lOR0xFX1BST0RVQ1RfUVVFUlkgPSBncWxgXG4gICAgcXVlcnkgU0lOR0xFX1BST0RVQ1RfUVVFUlkoJGlkOiBJRCEpIHtcbiAgICAgICAgUHJvZHVjdCh3aGVyZToge2lkOiAkaWR9KXtcbiAgICAgICAgICAgIG5hbWVcbiAgICAgICAgICAgIHByaWNlXG4gICAgICAgICAgICBkZXNjcmlwdGlvblxuICAgICAgICAgICAgaWRcbiAgICAgICAgICAgIHBob3RvIHtcbiAgICAgICAgICAgICAgICBpbWFnZSB7XG4gICAgICAgICAgICAgICAgICAgIHB1YmxpY1VybFRyYW5zZm9ybWVkXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGFsdFRleHRcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbmA7XG5cbmNvbnN0IFVQREFURV9QUk9EVUNUX01VVEFUSU9OID0gZ3FsYFxuICAgIG11dGF0aW9uIFVQREFURV9QUk9EVUNUX01VVEFUSU9OKFxuICAgICAgICAkaWQ6IElEIVxuICAgICAgICAkbmFtZTogU3RyaW5nXG4gICAgICAgICRkZXNjcmlwdGlvbjogU3RyaW5nXG4gICAgICAgICRwcmljZTogSW50XG4gICAgKXtcbiAgICAgICAgdXBkYXRlUHJvZHVjdChcbiAgICAgICAgICAgIGlkOiAkaWQsXG4gICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgaWQ6ICRpZCxcbiAgICAgICAgICAgICAgICBuYW1lOiAkJG5hbWUsXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICRkZXNjcmlwdGlvbixcbiAgICAgICAgICAgICAgICBwcmljZTogJHByaWNlXG4gICAgICAgICAgICB9XG4gICAgICAgIClcbiAgICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBVcGRhdGVQcm9kdWN0KHsgaWQgfSl7XG4gICAgLy9HZXQgdGhlIHNwZWNpZmljIHByb2R1Y3RcbiAgICBjb25zdCB7ZGF0YSwgZXJyb3IsIGxvYWRpbmd9ID0gdXNlUXVlcnkoU0lOR0xFX1BST0RVQ1RfUVVFUlksIHtcbiAgICAgICAgdmFyaWFibGVzOiB7XG4gICAgICAgICAgICBpZFxuICAgICAgICB9XG4gICAgfSk7XG4vLyB1c2UgbXV0YXRpb24gdG8gdXBkYXRlIHRoZSBwcm9kdWN0XG4gICAgY29uc3QgW3VwZGF0ZVByb2R1Y3QsIHtcbiAgICAgICAgZGF0YTogdXBkYXRlRGF0YSwgXG4gICAgICAgIGVycm9yOiB1cGRhdGVFcnJvciwgXG4gICAgICAgIGxvYWRpbmc6IHVwZGF0ZUxvYWRpbmdcbiAgICB9XSA9IHVzZU11dGF0aW9uKFVQREFURV9QUk9EVUNUX01VVEFUSU9OLCB7XG4gICAgICAgIHZhcmlhYmxlczoge1xuICAgICAgICAgICAgaWQsXG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnNvbGUubG9nKGRhdGEpXG5cbiAgICAvL2NyZWF0ZSBzdGF0ZSBmb3IgdGhlIGZvcm0gaW5wdXRzXG5cbiAgICBjb25zdCB7aW5wdXRzLCBoYW5kbGVDaGFuZ2UsIHJlc2V0Rm9ybSwgY2xlYXJGb3JtfSA9IHVzZUZvcm0oZGF0YSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8Rm9ybVxuICAgICAgICAgICAgb25TdWJtaXQ9e1xuICAgICAgICAgICAgICAgYXN5bmMgZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTsgXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGlucHV0cyk7XG4gICAgICAgICAgICAgICAgICAgIC8vIC8vIFN1Ym1pdCB0aGUgaW5wdXQgZmllbGRzIHRvIHRoZSBiYWNrZW5kXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnN0IHJlcyA9IGF3YWl0IGNyZWF0ZVByb2R1Y3QoKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gLy9jb25zb2xlLmxvZyhyZXMpO1xuICAgICAgICAgICAgICAgICAgICAvLyBjbGVhckZvcm0oKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gLy8gR28gdG8gdGhhdCBwcm9kdWN0J3MgcGFnZVxuICAgICAgICAgICAgICAgICAgICAvLyBSb3V0ZXIucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBwYXRobmFtZTogYC9wcm9kdWN0LyR7cmVzLmRhdGEuY3JlYXRlUHJvZHVjdC5pZH1gXG4gICAgICAgICAgICAgICAgICAgIC8vIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICA+XG4gICAgICAgICAgICA8RGlzcGxheUVycm9yIGVycm9yPXtlcnJvciB8fCB1cGRhdGVFcnJvcn0gLz5cblxuICAgICAgICAgICAgPGZpZWxkc2V0IGRpc2FibGVkPXt1cGRhdGVMb2FkaW5nfSBhcmlhLWJ1c3k9e3VwZGF0ZUxvYWRpbmd9PlxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiaW1hZ2VcIj5cbiAgICAgICAgICAgICAgICAgICAgSW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiaW1hZ2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImltYWdlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJmaWxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm5hbWVcIj5cbiAgICAgICAgICAgICAgICAgICAgTmFtZVxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cIm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJOYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtpbnB1dHMubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInByaWNlXCI+XG4gICAgICAgICAgICAgICAgICAgIFByaWNlXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwicHJpY2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInByaWNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQcmljZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17aW5wdXRzLnByaWNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZGVzY3JpcHRpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgRGVzY3JpcHRpb25cbiAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIFxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJkZXNjcmlwdGlvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZGVzY3JpcHRpb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJEZXNjcmlwdGlvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17aW5wdXRzLmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPisgVXBkYXRlIFByb2R1Y3Q8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZmllbGRzZXQ+XG4gICAgICAgIDwvRm9ybT5cbiAgICApO1xufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/UpdateProduct.js\n");

/***/ })

});