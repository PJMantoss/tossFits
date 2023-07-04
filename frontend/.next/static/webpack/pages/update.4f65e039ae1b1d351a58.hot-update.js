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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ UpdateProduct; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_mantoss_tossFits_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ \"./node_modules/next/node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _home_mantoss_tossFits_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_mantoss_tossFits_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _home_mantoss_tossFits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _home_mantoss_tossFits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _home_mantoss_tossFits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! graphql-tag */ \"./node_modules/graphql-tag/lib/index.js\");\n/* harmony import */ var _styles_Form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/Form */ \"./components/styles/Form.js\");\n/* harmony import */ var _lib_useForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lib/useForm */ \"./lib/useForm.js\");\n/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ErrorMessage */ \"./components/ErrorMessage.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\nvar _jsxFileName = \"/home/mantoss/tossFits/frontend/components/UpdateProduct.js\",\n    _s = $RefreshSig$();\n\nfunction _templateObject2() {\n  var data = (0,_home_mantoss_tossFits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_4__.default)([\"\\n    mutation UPDATE_PRODUCT_MUTATION(\\n        $id: ID!\\n        $name: String\\n        $description: String\\n        $price: Int\\n    ){\\n        updateProduct(\\n            id: $id,\\n            data: {\\n                id: $id,\\n                name: $$name,\\n                description: $description,\\n                price: $price\\n            }\\n        )\\n    }\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = (0,_home_mantoss_tossFits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_4__.default)([\"\\n    query SINGLE_PRODUCT_QUERY($id: ID!) {\\n        Product(where: {id: $id}){\\n            name\\n            price\\n            description\\n            id\\n            photo {\\n                image {\\n                    publicUrlTransformed\\n                }\\n                altText\\n            }\\n        }\\n    }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\n\nvar SINGLE_PRODUCT_QUERY = (0,graphql_tag__WEBPACK_IMPORTED_MODULE_8__.default)(_templateObject());\nvar UPDATE_PRODUCT_MUTATION = (0,graphql_tag__WEBPACK_IMPORTED_MODULE_8__.default)(_templateObject2());\nfunction UpdateProduct(_ref) {\n  _s();\n\n  var id = _ref.id;\n\n  //Get the specific product\n  var _useQuery = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_9__.useQuery)(SINGLE_PRODUCT_QUERY, {\n    variables: {\n      id: id\n    }\n  }),\n      data = _useQuery.data,\n      error = _useQuery.error,\n      loading = _useQuery.loading; // use mutation to update the product\n\n\n  var _useMutation = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_9__.useMutation)(UPDATE_PRODUCT_MUTATION, {\n    variables: {\n      id: id\n    }\n  }),\n      _useMutation2 = (0,_home_mantoss_tossFits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__.default)(_useMutation, 2),\n      updateProduct = _useMutation2[0],\n      _useMutation2$ = _useMutation2[1],\n      updateData = _useMutation2$.data,\n      updateError = _useMutation2$.error,\n      updateLoading = _useMutation2$.loading;\n\n  console.log(data); //create state for the form inputs\n\n  var _useForm = (0,_lib_useForm__WEBPACK_IMPORTED_MODULE_6__.default)({\n    image: '',\n    name: \"Big Shoes\",\n    price: 4000,\n    description: \"Nice shoes\"\n  }),\n      inputs = _useForm.inputs,\n      handleChange = _useForm.handleChange,\n      resetForm = _useForm.resetForm,\n      clearForm = _useForm.clearForm;\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_Form__WEBPACK_IMPORTED_MODULE_5__.default, {\n    onSubmit: /*#__PURE__*/function () {\n      var _ref2 = (0,_home_mantoss_tossFits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_home_mantoss_tossFits_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(e) {\n        return _home_mantoss_tossFits_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                e.preventDefault(); // console.log(inputs);\n                // // Submit the input fields to the backend\n                // const res = await createProduct();\n                // //console.log(res);\n                // clearForm();\n                // // Go to that product's page\n                // Router.push({\n                //     pathname: `/product/${res.data.createProduct.id}`\n                // })\n\n              case 1:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n\n      return function (_x) {\n        return _ref2.apply(this, arguments);\n      };\n    }(),\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ErrorMessage__WEBPACK_IMPORTED_MODULE_7__.default, {\n      error: error || updateError\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 89,\n      columnNumber: 13\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"fieldset\", {\n      disabled: updateLoading,\n      \"aria-busy\": updateLoading,\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n        htmlFor: \"image\",\n        children: [\"Image\", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n          required: true,\n          id: \"image\",\n          name: \"image\",\n          type: \"file\",\n          onChange: handleChange\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 94,\n          columnNumber: 21\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 92,\n        columnNumber: 17\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n        htmlFor: \"name\",\n        children: [\"Name\", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n          id: \"name\",\n          name: \"name\",\n          type: \"text\",\n          placeholder: \"Name\",\n          value: inputs.name,\n          onChange: handleChange\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 104,\n          columnNumber: 21\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 102,\n        columnNumber: 17\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n        htmlFor: \"price\",\n        children: [\"Price\", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n          id: \"price\",\n          name: \"price\",\n          type: \"number\",\n          placeholder: \"Price\",\n          value: inputs.price,\n          onChange: handleChange\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 115,\n          columnNumber: 21\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 113,\n        columnNumber: 17\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n        htmlFor: \"description\",\n        children: [\"Description\", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n          id: \"description\",\n          name: \"description\",\n          placeholder: \"Description\",\n          value: inputs.description,\n          onChange: handleChange\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 126,\n          columnNumber: 21\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 124,\n        columnNumber: 17\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        type: \"submit\",\n        children: \"+ Update Product\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 134,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 91,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 73,\n    columnNumber: 9\n  }, this);\n}\n\n_s(UpdateProduct, \"ytM57gKLLAH7TMV++HwyfmmCdGY=\", false, function () {\n  return [_apollo_client__WEBPACK_IMPORTED_MODULE_9__.useQuery, _apollo_client__WEBPACK_IMPORTED_MODULE_9__.useMutation, _lib_useForm__WEBPACK_IMPORTED_MODULE_6__.default];\n});\n\n_c = UpdateProduct;\n\nvar _c;\n\n$RefreshReg$(_c, \"UpdateProduct\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9VcGRhdGVQcm9kdWN0LmpzPzllOGUiXSwibmFtZXMiOlsiU0lOR0xFX1BST0RVQ1RfUVVFUlkiLCJncWwiLCJVUERBVEVfUFJPRFVDVF9NVVRBVElPTiIsIlVwZGF0ZVByb2R1Y3QiLCJpZCIsInVzZVF1ZXJ5IiwidmFyaWFibGVzIiwiZGF0YSIsImVycm9yIiwibG9hZGluZyIsInVzZU11dGF0aW9uIiwidXBkYXRlUHJvZHVjdCIsInVwZGF0ZURhdGEiLCJ1cGRhdGVFcnJvciIsInVwZGF0ZUxvYWRpbmciLCJjb25zb2xlIiwibG9nIiwidXNlRm9ybSIsImltYWdlIiwibmFtZSIsInByaWNlIiwiZGVzY3JpcHRpb24iLCJpbnB1dHMiLCJoYW5kbGVDaGFuZ2UiLCJyZXNldEZvcm0iLCJjbGVhckZvcm0iLCJlIiwicHJldmVudERlZmF1bHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsb0JBQW9CLEdBQUdDLG9EQUFILG1CQUExQjtBQWlCQSxJQUFNQyx1QkFBdUIsR0FBR0Qsb0RBQUgsb0JBQTdCO0FBbUJlLFNBQVNFLGFBQVQsT0FBOEI7QUFBQTs7QUFBQSxNQUFMQyxFQUFLLFFBQUxBLEVBQUs7O0FBQ3pDO0FBRHlDLGtCQUVWQyx3REFBUSxDQUFDTCxvQkFBRCxFQUF1QjtBQUMxRE0sYUFBUyxFQUFFO0FBQ1BGLFFBQUUsRUFBRkE7QUFETztBQUQrQyxHQUF2QixDQUZFO0FBQUEsTUFFbENHLElBRmtDLGFBRWxDQSxJQUZrQztBQUFBLE1BRTVCQyxLQUY0QixhQUU1QkEsS0FGNEI7QUFBQSxNQUVyQkMsT0FGcUIsYUFFckJBLE9BRnFCLEVBTzdDOzs7QUFQNkMscUJBWXBDQywyREFBVyxDQUFDUix1QkFBRCxFQUEwQjtBQUN0Q0ksYUFBUyxFQUFFO0FBQ1BGLFFBQUUsRUFB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REo7QUFrRUg7O0dBL0Z1QnBCLGE7VUFFV0Usb0QsRUFVMUJLLHVELEVBVWdETyxpRDs7O0tBdEJqQ2QsYSIsImZpbGUiOiIuL2NvbXBvbmVudHMvVXBkYXRlUHJvZHVjdC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZU11dGF0aW9uLCB1c2VRdWVyeSB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xuaW1wb3J0IGdxbCBmcm9tIFwiZ3JhcGhxbC10YWdcIjtcbmltcG9ydCBGb3JtIGZyb20gXCIuL3N0eWxlcy9Gb3JtXCI7XG5pbXBvcnQgdXNlRm9ybSBmcm9tIFwiLi4vbGliL3VzZUZvcm1cIjtcbmltcG9ydCBEaXNwbGF5RXJyb3IgZnJvbSBcIi4vRXJyb3JNZXNzYWdlXCI7XG5cbmNvbnN0IFNJTkdMRV9QUk9EVUNUX1FVRVJZID0gZ3FsYFxuICAgIHF1ZXJ5IFNJTkdMRV9QUk9EVUNUX1FVRVJZKCRpZDogSUQhKSB7XG4gICAgICAgIFByb2R1Y3Qod2hlcmU6IHtpZDogJGlkfSl7XG4gICAgICAgICAgICBuYW1lXG4gICAgICAgICAgICBwcmljZVxuICAgICAgICAgICAgZGVzY3JpcHRpb25cbiAgICAgICAgICAgIGlkXG4gICAgICAgICAgICBwaG90byB7XG4gICAgICAgICAgICAgICAgaW1hZ2Uge1xuICAgICAgICAgICAgICAgICAgICBwdWJsaWNVcmxUcmFuc2Zvcm1lZFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBhbHRUZXh0XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5gO1xuXG5jb25zdCBVUERBVEVfUFJPRFVDVF9NVVRBVElPTiA9IGdxbGBcbiAgICBtdXRhdGlvbiBVUERBVEVfUFJPRFVDVF9NVVRBVElPTihcbiAgICAgICAgJGlkOiBJRCFcbiAgICAgICAgJG5hbWU6IFN0cmluZ1xuICAgICAgICAkZGVzY3JpcHRpb246IFN0cmluZ1xuICAgICAgICAkcHJpY2U6IEludFxuICAgICl7XG4gICAgICAgIHVwZGF0ZVByb2R1Y3QoXG4gICAgICAgICAgICBpZDogJGlkLFxuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgIGlkOiAkaWQsXG4gICAgICAgICAgICAgICAgbmFtZTogJCRuYW1lLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAkZGVzY3JpcHRpb24sXG4gICAgICAgICAgICAgICAgcHJpY2U6ICRwcmljZVxuICAgICAgICAgICAgfVxuICAgICAgICApXG4gICAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVXBkYXRlUHJvZHVjdCh7IGlkIH0pe1xuICAgIC8vR2V0IHRoZSBzcGVjaWZpYyBwcm9kdWN0XG4gICAgY29uc3Qge2RhdGEsIGVycm9yLCBsb2FkaW5nfSA9IHVzZVF1ZXJ5KFNJTkdMRV9QUk9EVUNUX1FVRVJZLCB7XG4gICAgICAgIHZhcmlhYmxlczoge1xuICAgICAgICAgICAgaWRcbiAgICAgICAgfVxuICAgIH0pO1xuLy8gdXNlIG11dGF0aW9uIHRvIHVwZGF0ZSB0aGUgcHJvZHVjdFxuICAgIGNvbnN0IFt1cGRhdGVQcm9kdWN0LCB7XG4gICAgICAgIGRhdGE6IHVwZGF0ZURhdGEsIFxuICAgICAgICBlcnJvcjogdXBkYXRlRXJyb3IsIFxuICAgICAgICBsb2FkaW5nOiB1cGRhdGVMb2FkaW5nXG4gICAgfV0gPSB1c2VNdXRhdGlvbihVUERBVEVfUFJPRFVDVF9NVVRBVElPTiwge1xuICAgICAgICB2YXJpYWJsZXM6IHtcbiAgICAgICAgICAgIGlkLFxuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBjb25zb2xlLmxvZyhkYXRhKVxuXG4gICAgLy9jcmVhdGUgc3RhdGUgZm9yIHRoZSBmb3JtIGlucHV0c1xuXG4gICAgY29uc3Qge2lucHV0cywgaGFuZGxlQ2hhbmdlLCByZXNldEZvcm0sIGNsZWFyRm9ybX0gPSB1c2VGb3JtKHtcbiAgICAgICAgaW1hZ2U6ICcnLFxuICAgICAgICBuYW1lOiBcIkJpZyBTaG9lc1wiLFxuICAgICAgICBwcmljZTogNDAwMCxcbiAgICAgICAgZGVzY3JpcHRpb246IFwiTmljZSBzaG9lc1wiXG4gICAgfSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8Rm9ybVxuICAgICAgICAgICAgb25TdWJtaXQ9e1xuICAgICAgICAgICAgICAgYXN5bmMgZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTsgXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGlucHV0cyk7XG4gICAgICAgICAgICAgICAgICAgIC8vIC8vIFN1Ym1pdCB0aGUgaW5wdXQgZmllbGRzIHRvIHRoZSBiYWNrZW5kXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnN0IHJlcyA9IGF3YWl0IGNyZWF0ZVByb2R1Y3QoKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gLy9jb25zb2xlLmxvZyhyZXMpO1xuICAgICAgICAgICAgICAgICAgICAvLyBjbGVhckZvcm0oKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gLy8gR28gdG8gdGhhdCBwcm9kdWN0J3MgcGFnZVxuICAgICAgICAgICAgICAgICAgICAvLyBSb3V0ZXIucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBwYXRobmFtZTogYC9wcm9kdWN0LyR7cmVzLmRhdGEuY3JlYXRlUHJvZHVjdC5pZH1gXG4gICAgICAgICAgICAgICAgICAgIC8vIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICA+XG4gICAgICAgICAgICA8RGlzcGxheUVycm9yIGVycm9yPXtlcnJvciB8fCB1cGRhdGVFcnJvcn0gLz5cblxuICAgICAgICAgICAgPGZpZWxkc2V0IGRpc2FibGVkPXt1cGRhdGVMb2FkaW5nfSBhcmlhLWJ1c3k9e3VwZGF0ZUxvYWRpbmd9PlxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiaW1hZ2VcIj5cbiAgICAgICAgICAgICAgICAgICAgSW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiaW1hZ2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImltYWdlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJmaWxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm5hbWVcIj5cbiAgICAgICAgICAgICAgICAgICAgTmFtZVxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cIm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJOYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtpbnB1dHMubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInByaWNlXCI+XG4gICAgICAgICAgICAgICAgICAgIFByaWNlXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwicHJpY2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInByaWNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQcmljZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17aW5wdXRzLnByaWNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZGVzY3JpcHRpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgRGVzY3JpcHRpb25cbiAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIFxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJkZXNjcmlwdGlvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZGVzY3JpcHRpb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJEZXNjcmlwdGlvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17aW5wdXRzLmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPisgVXBkYXRlIFByb2R1Y3Q8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZmllbGRzZXQ+XG4gICAgICAgIDwvRm9ybT5cbiAgICApO1xufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/UpdateProduct.js\n");

/***/ }),

/***/ "./lib/useForm.js":
/*!************************!*\
  !*** ./lib/useForm.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_mantoss_tossFits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _home_mantoss_tossFits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_home_mantoss_tossFits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\nfunction useForm() {\n  _s();\n\n  var initial = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n\n  // create a state object for input\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(initial),\n      inputs = _useState[0],\n      setInputs = _useState[1];\n\n  function handleChange(e) {\n    var _e$target = e.target,\n        name = _e$target.name,\n        value = _e$target.value,\n        type = _e$target.type;\n\n    if (type === \"number\") {\n      value = parseInt(value);\n    }\n\n    if (type === \"file\") {\n      var _e$target$files = (0,_home_mantoss_tossFits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(e.target.files, 1);\n\n      value = _e$target$files[0];\n    }\n\n    setInputs(_objectSpread(_objectSpread({}, inputs), {}, (0,_home_mantoss_tossFits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)({}, name, value)));\n  }\n\n  function resetForm() {\n    setInputs(initial);\n  }\n\n  function clearForm() {\n    var blankState = Object.fromEntries(Object.entries(inputs).map(function (_ref) {\n      var _ref2 = (0,_home_mantoss_tossFits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_ref, 2),\n          key = _ref2[0],\n          value = _ref2[1];\n\n      return [key, \"\"];\n    }));\n    setInputs(blankState);\n  } // Return what we want to surface from this custom hook\n\n\n  return {\n    inputs: inputs,\n    handleChange: handleChange,\n    resetForm: resetForm,\n    clearForm: clearForm\n  };\n}\n\n_s(useForm, \"0tjT+aoDVbAe0wsQZsq9AKLCE20=\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (useForm);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL3VzZUZvcm0uanM/ZjBlMiJdLCJuYW1lcyI6WyJ1c2VGb3JtIiwiaW5pdGlhbCIsInVzZVN0YXRlIiwiaW5wdXRzIiwic2V0SW5wdXRzIiwiaGFuZGxlQ2hhbmdlIiwiZSIsInRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsInR5cGUiLCJwYXJzZUludCIsImZpbGVzIiwicmVzZXRGb3JtIiwiY2xlYXJGb3JtIiwiYmxhbmtTdGF0ZSIsIk9iamVjdCIsImZyb21FbnRyaWVzIiwiZW50cmllcyIsIm1hcCIsImtleSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsU0FBU0EsT0FBVCxHQUErQjtBQUFBOztBQUFBLE1BQWRDLE9BQWMsdUVBQUosRUFBSTs7QUFDM0I7QUFEMkIsa0JBRUNDLCtDQUFRLENBQUNELE9BQUQsQ0FGVDtBQUFBLE1BRXBCRSxNQUZvQjtBQUFBLE1BRVpDLFNBRlk7O0FBSTNCLFdBQVNDLFlBQVQsQ0FBc0JDLENBQXRCLEVBQXdCO0FBQUEsb0JBQ01BLENBQUMsQ0FBQ0MsTUFEUjtBQUFBLFFBQ2ZDLElBRGUsYUFDZkEsSUFEZTtBQUFBLFFBQ1RDLEtBRFMsYUFDVEEsS0FEUztBQUFBLFFBQ0ZDLElBREUsYUFDRkEsSUFERTs7QUFFcEIsUUFBR0EsSUFBSSxLQUFLLFFBQVosRUFBcUI7QUFDakJELFdBQUssR0FBR0UsUUFBUSxDQUFDRixLQUFELENBQWhCO0FBQ0g7O0FBQ0QsUUFBR0MsSUFBSSxLQUFLLE1BQVosRUFBbUI7QUFBQSw0S0FDTEosQ0FBQyxDQUFDQyxNQUFGLENBQVNLLEtBREo7O0FBQ2RILFdBRGM7QUFFbEI7O0FBRURMLGFBQVMsaUNBRUZELE1BRkUsNEpBR0pLLElBSEksRUFHR0MsS0FISCxHQUFUO0FBS0g7O0FBRUQsV0FBU0ksU0FBVCxHQUFvQjtBQUNoQlQsYUFBUyxDQUFDSCxPQUFELENBQVQ7QUFDSDs7QUFFRCxXQUFTYSxTQUFULEdBQW9CO0FBQ2hCLFFBQU1DLFVBQVUsR0FBR0MsTUFBTSxDQUFDQyxXQUFQLENBQW1CRCxNQUFNLENBQUNFLE9BQVAsQ0FBZWYsTUFBZixFQUF1QmdCLEdBQXZCLENBQTJCO0FBQUE7QUFBQSxVQUFFQyxHQUFGO0FBQUEsVUFBT1gsS0FBUDs7QUFBQSxhQUFrQixDQUFDVyxHQUFELEVBQU0sRUFBTixDQUFsQjtBQUFBLEtBQTNCLENBQW5CLENBQW5CO0FBRUFoQixhQUFTLENBQUNXLFVBQUQsQ0FBVDtBQUNILEdBNUIwQixDQThCM0I7OztBQUNBLFNBQU87QUFDSFosVUFBTSxFQUFOQSxNQURHO0FBRUhFLGdCQUFZLEVBQVpBLFlBRkc7QUFHSFEsYUFBUyxFQUFUQSxTQUhHO0FBSUhDLGFBQVMsRUFBVEE7QUFKRyxHQUFQO0FBTUg7O0dBckNRZCxPOztBQXVDVCwrREFBZUEsT0FBZiIsImZpbGUiOiIuL2xpYi91c2VGb3JtLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmZ1bmN0aW9uIHVzZUZvcm0oaW5pdGlhbCA9IHt9KSB7XG4gICAgLy8gY3JlYXRlIGEgc3RhdGUgb2JqZWN0IGZvciBpbnB1dFxuICAgIGNvbnN0IFtpbnB1dHMsIHNldElucHV0c10gPSB1c2VTdGF0ZShpbml0aWFsKTtcblxuICAgIGZ1bmN0aW9uIGhhbmRsZUNoYW5nZShlKXtcbiAgICAgICAgbGV0IHtuYW1lLCB2YWx1ZSwgdHlwZX0gPSBlLnRhcmdldDtcbiAgICAgICAgaWYodHlwZSA9PT0gXCJudW1iZXJcIil7XG4gICAgICAgICAgICB2YWx1ZSA9IHBhcnNlSW50KHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBpZih0eXBlID09PSBcImZpbGVcIil7XG4gICAgICAgICAgICBbdmFsdWVdID0gZS50YXJnZXQuZmlsZXM7XG4gICAgICAgIH1cblxuICAgICAgICBzZXRJbnB1dHMoe1xuICAgICAgICAgICAgLy8gQ29weSBleGlzdGluZyBzdGF0ZVxuICAgICAgICAgICAgLi4uaW5wdXRzLFxuICAgICAgICAgICAgW25hbWVdOiB2YWx1ZVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlc2V0Rm9ybSgpe1xuICAgICAgICBzZXRJbnB1dHMoaW5pdGlhbClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjbGVhckZvcm0oKXtcbiAgICAgICAgY29uc3QgYmxhbmtTdGF0ZSA9IE9iamVjdC5mcm9tRW50cmllcyhPYmplY3QuZW50cmllcyhpbnB1dHMpLm1hcCgoW2tleSwgdmFsdWVdKSA9PiBba2V5LCBcIlwiXSkpO1xuXG4gICAgICAgIHNldElucHV0cyhibGFua1N0YXRlKTtcbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gd2hhdCB3ZSB3YW50IHRvIHN1cmZhY2UgZnJvbSB0aGlzIGN1c3RvbSBob29rXG4gICAgcmV0dXJuIHtcbiAgICAgICAgaW5wdXRzLFxuICAgICAgICBoYW5kbGVDaGFuZ2UsXG4gICAgICAgIHJlc2V0Rm9ybSxcbiAgICAgICAgY2xlYXJGb3JtXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB1c2VGb3JtOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/useForm.js\n");

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ _defineProperty; }\n/* harmony export */ });\nfunction _defineProperty(obj, key, value) {\n  if (key in obj) {\n    Object.defineProperty(obj, key, {\n      value: value,\n      enumerable: true,\n      configurable: true,\n      writable: true\n    });\n  } else {\n    obj[key] = value;\n  }\n\n  return obj;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2RlZmluZVByb3BlcnR5LmpzPzcyOTUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0EiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZGVmaW5lUHJvcGVydHkuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js\n");

/***/ })

});