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
exports.id = "pages/reset";
exports.ids = ["pages/reset"];
exports.modules = {

/***/ "./components/Reset.js":
/*!*****************************!*\
  !*** ./components/Reset.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Reset; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/Form */ \"./components/styles/Form.js\");\n/* harmony import */ var _lib_useForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/useForm */ \"./lib/useForm.js\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! graphql-tag */ \"graphql-tag\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./User */ \"./components/User.js\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ErrorMessage */ \"./components/ErrorMessage.js\");\n\nvar _jsxFileName = \"/home/mantoss/tossFits/frontend/components/Reset.js\";\n\n\n\n\n\n\nconst RESET_MUTATION = (graphql_tag__WEBPACK_IMPORTED_MODULE_3___default())`\n    mutation RESET_MUTATION ($email: String!){\n        sendUserPasswordResetLink(email: $email){\n            code\n            message\n        }\n    }\n`;\nfunction Reset() {\n  const {\n    inputs,\n    handleChange,\n    resetForm\n  } = (0,_lib_useForm__WEBPACK_IMPORTED_MODULE_2__.default)({\n    email: ''\n  });\n  const [signup, {\n    data,\n    loading,\n    error\n  }] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_5__.useMutation)(REQUEST_RESET_MUTATION, {\n    variables: inputs //refetchQueries: [{ query: CURRENT_USER_QUERY }]\n\n  });\n\n  async function handleSubmit(e) {\n    e.preventDefault();\n    console.log(inputs);\n    const res = await signup();\n    console.log(res);\n    resetForm();\n    console.log(error);\n  } // const error = data?.authenticateUserWithPassword.__typename ===\n  //             'UserAuthenticationWithPasswordFailure' ?\n  //             data?.authenticateUserWithPassword : undefined;\n\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_Form__WEBPACK_IMPORTED_MODULE_1__.default, {\n    method: \"POST\",\n    onSubmit: handleSubmit,\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n      children: \"Reset a Password\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 13\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ErrorMessage__WEBPACK_IMPORTED_MODULE_6__.default, {\n      error: error\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 13\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"fieldset\", {\n      children: [(data === null || data === void 0 ? void 0 : data.sendUserPasswordResetLink) === null && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: \"Success! Check Your email for a link!\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 46,\n        columnNumber: 21\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n        htmlFor: \"email\",\n        children: [\"Email\", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n          type: \"email\",\n          name: \"email\",\n          placeholder: \"Your Email Address\",\n          autocomplete: \"email\",\n          value: inputs.email,\n          onChange: handleChange\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 53,\n          columnNumber: 21\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 51,\n        columnNumber: 17\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        type: \"submit\",\n        children: \"Request Reset\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 63,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 41,\n    columnNumber: 9\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b3NzLWZpdHMtZnJvbnRlbmQvLi9jb21wb25lbnRzL1Jlc2V0LmpzP2EwODAiXSwibmFtZXMiOlsiUkVTRVRfTVVUQVRJT04iLCJncWwiLCJSZXNldCIsImlucHV0cyIsImhhbmRsZUNoYW5nZSIsInJlc2V0Rm9ybSIsInVzZUZvcm0iLCJlbWFpbCIsInNpZ251cCIsImRhdGEiLCJsb2FkaW5nIiwiZXJyb3IiLCJ1c2VNdXRhdGlvbiIsIlJFUVVFU1RfUkVTRVRfTVVUQVRJT04iLCJ2YXJpYWJsZXMiLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwicmVzIiwic2VuZFVzZXJQYXNzd29yZFJlc2V0TGluayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLE1BQU1BLGNBQWMsR0FBR0Msb0RBQUk7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FQQTtBQVNlLFNBQVNDLEtBQVQsR0FBZ0I7QUFDM0IsUUFBTTtBQUFFQyxVQUFGO0FBQVVDLGdCQUFWO0FBQXdCQztBQUF4QixNQUFzQ0MscURBQU8sQ0FBQztBQUNoREMsU0FBSyxFQUFFO0FBRHlDLEdBQUQsQ0FBbkQ7QUFJQSxRQUFNLENBQUNDLE1BQUQsRUFBUztBQUFDQyxRQUFEO0FBQU9DLFdBQVA7QUFBZ0JDO0FBQWhCLEdBQVQsSUFBbUNDLDJEQUFXLENBQUNDLHNCQUFELEVBQXlCO0FBQ3pFQyxhQUFTLEVBQUVYLE1BRDhELENBRXpFOztBQUZ5RSxHQUF6QixDQUFwRDs7QUFLQSxpQkFBZVksWUFBZixDQUE0QkMsQ0FBNUIsRUFBOEI7QUFDMUJBLEtBQUMsQ0FBQ0MsY0FBRjtBQUNBQyxXQUFPLENBQUNDLEdBQVIsQ0FBWWhCLE1BQVo7QUFDQSxVQUFNaUIsR0FBRyxHQUFHLE1BQU1aLE1BQU0sRUFBeEI7QUFDQVUsV0FBTyxDQUFDQyxHQUFSLENBQVlDLEdBQVo7QUFDQWYsYUFBUztBQUNUYSxXQUFPLENBQUNDLEdBQVIsQ0FBWVIsS0FBWjtBQUNILEdBakIwQixDQW1CM0I7QUFDQTtBQUNBOzs7QUFFQSxzQkFDSSw4REFBQyxpREFBRDtBQUFNLFVBQU0sRUFBQyxNQUFiO0FBQW9CLFlBQVEsRUFBRUksWUFBOUI7QUFBQSw0QkFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBRUksOERBQUMsa0RBQUQ7QUFBTyxXQUFLLEVBQUVKO0FBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZKLGVBR0k7QUFBQSxpQkFDSyxDQUFBRixJQUFJLFNBQUosSUFBQUEsSUFBSSxXQUFKLFlBQUFBLElBQUksQ0FBRVkseUJBQU4sTUFBb0MsSUFBcEMsaUJBQ0c7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGUixlQU9JO0FBQU8sZUFBTyxFQUFDLE9BQWY7QUFBQSx5Q0FFSTtBQUNJLGNBQUksRUFBQyxPQURUO0FBRUksY0FBSSxFQUFDLE9BRlQ7QUFHSSxxQkFBVyxFQUFDLG9CQUhoQjtBQUlJLHNCQUFZLEVBQUMsT0FKakI7QUFLSSxlQUFLLEVBQUVsQixNQUFNLENBQUNJLEtBTGxCO0FBTUksa0JBQVEsRUFBRUg7QUFOZDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVBKLGVBbUJJO0FBQVEsWUFBSSxFQUFDLFFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FuQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUEyQkgiLCJmaWxlIjoiLi9jb21wb25lbnRzL1Jlc2V0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEZvcm0gZnJvbSAnLi9zdHlsZXMvRm9ybSc7XG5pbXBvcnQgdXNlRm9ybSBmcm9tICcuLi9saWIvdXNlRm9ybSc7XG5pbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJztcbmltcG9ydCB7IENVUlJFTlRfVVNFUl9RVUVSWSB9IGZyb20gJy4vVXNlcic7XG5pbXBvcnQgeyB1c2VNdXRhdGlvbiB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcbmltcG9ydCBFcnJvciBmcm9tICcuL0Vycm9yTWVzc2FnZSc7XG5cbmNvbnN0IFJFU0VUX01VVEFUSU9OID0gZ3FsYFxuICAgIG11dGF0aW9uIFJFU0VUX01VVEFUSU9OICgkZW1haWw6IFN0cmluZyEpe1xuICAgICAgICBzZW5kVXNlclBhc3N3b3JkUmVzZXRMaW5rKGVtYWlsOiAkZW1haWwpe1xuICAgICAgICAgICAgY29kZVxuICAgICAgICAgICAgbWVzc2FnZVxuICAgICAgICB9XG4gICAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUmVzZXQoKXtcbiAgICBjb25zdCB7IGlucHV0cywgaGFuZGxlQ2hhbmdlLCByZXNldEZvcm0gfSA9IHVzZUZvcm0oe1xuICAgICAgICBlbWFpbDogJycsXG4gICAgfSk7XG5cbiAgICBjb25zdCBbc2lnbnVwLCB7ZGF0YSwgbG9hZGluZywgZXJyb3J9XSA9IHVzZU11dGF0aW9uKFJFUVVFU1RfUkVTRVRfTVVUQVRJT04sIHtcbiAgICAgICAgdmFyaWFibGVzOiBpbnB1dHMsXG4gICAgICAgIC8vcmVmZXRjaFF1ZXJpZXM6IFt7IHF1ZXJ5OiBDVVJSRU5UX1VTRVJfUVVFUlkgfV1cbiAgICB9KVxuXG4gICAgYXN5bmMgZnVuY3Rpb24gaGFuZGxlU3VibWl0KGUpe1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnNvbGUubG9nKGlucHV0cyk7XG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IHNpZ251cCgpO1xuICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xuICAgICAgICByZXNldEZvcm0oKTtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIH1cblxuICAgIC8vIGNvbnN0IGVycm9yID0gZGF0YT8uYXV0aGVudGljYXRlVXNlcldpdGhQYXNzd29yZC5fX3R5cGVuYW1lID09PVxuICAgIC8vICAgICAgICAgICAgICdVc2VyQXV0aGVudGljYXRpb25XaXRoUGFzc3dvcmRGYWlsdXJlJyA/XG4gICAgLy8gICAgICAgICAgICAgZGF0YT8uYXV0aGVudGljYXRlVXNlcldpdGhQYXNzd29yZCA6IHVuZGVmaW5lZDtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxGb3JtIG1ldGhvZD1cIlBPU1RcIiBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgICAgIDxoMj5SZXNldCBhIFBhc3N3b3JkPC9oMj5cbiAgICAgICAgICAgIDxFcnJvciBlcnJvcj17ZXJyb3J9IC8+XG4gICAgICAgICAgICA8ZmllbGRzZXQ+XG4gICAgICAgICAgICAgICAge2RhdGE/LnNlbmRVc2VyUGFzc3dvcmRSZXNldExpbmsgPT09IG51bGwgJiYoXG4gICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgU3VjY2VzcyEgQ2hlY2sgWW91ciBlbWFpbCBmb3IgYSBsaW5rIVxuICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj0nZW1haWwnPlxuICAgICAgICAgICAgICAgICAgICBFbWFpbFxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J1lvdXIgRW1haWwgQWRkcmVzcycgXG4gICAgICAgICAgICAgICAgICAgICAgICBhdXRvY29tcGxldGU9J2VtYWlsJ1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2lucHV0cy5lbWFpbH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cblxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPlJlcXVlc3QgUmVzZXQ8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZmllbGRzZXQ+XG4gICAgICAgIDwvRm9ybT5cbiAgICApXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Reset.js\n");

/***/ }),

/***/ "./pages/reset.js":
/*!************************!*\
  !*** ./pages/reset.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_RequestReset__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/RequestReset */ \"./components/RequestReset.js\");\n/* harmony import */ var _components_Reset__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Reset */ \"./components/Reset.js\");\n\nvar _jsxFileName = \"/home/mantoss/tossFits/frontend/pages/reset.js\";\n\n\n\n\nfunction resetPage({\n  query\n}) {\n  //console.log(props);\n  if (!(query !== null && query !== void 0 && query.token)) {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: \"You must provide a token\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 10,\n        columnNumber: 17\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_RequestReset__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 11,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 13\n    }, this);\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n      children: \"Reset Your Password\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 9\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Reset__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 9\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 16,\n    columnNumber: 5\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (resetPage);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b3NzLWZpdHMtZnJvbnRlbmQvLi9wYWdlcy9yZXNldC5qcz80YzgxIl0sIm5hbWVzIjpbInJlc2V0UGFnZSIsInF1ZXJ5IiwidG9rZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxTQUFULENBQW1CO0FBQUNDO0FBQUQsQ0FBbkIsRUFBNEI7QUFDeEI7QUFDQSxNQUFHLEVBQUNBLEtBQUQsYUFBQ0EsS0FBRCxlQUFDQSxLQUFLLENBQUVDLEtBQVIsQ0FBSCxFQUFpQjtBQUNiLHdCQUNJO0FBQUEsOEJBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixlQUVJLDhEQUFDLDZEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESjtBQU1IOztBQUNILHNCQUNFO0FBQUEsNEJBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQUVJLDhEQUFDLHNEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQU1EOztBQUVELCtEQUFlRixTQUFmIiwiZmlsZSI6Ii4vcGFnZXMvcmVzZXQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlcXVlc3RSZXNldCBmcm9tICcuLi9jb21wb25lbnRzL1JlcXVlc3RSZXNldCc7XG5pbXBvcnQgUmVzZXQgZnJvbSAnLi4vY29tcG9uZW50cy9SZXNldCc7XG5cbmZ1bmN0aW9uIHJlc2V0UGFnZSh7cXVlcnl9KSB7XG4gICAgLy9jb25zb2xlLmxvZyhwcm9wcyk7XG4gICAgaWYoIXF1ZXJ5Py50b2tlbil7XG4gICAgICAgIHJldHVybihcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPHA+WW91IG11c3QgcHJvdmlkZSBhIHRva2VuPC9wPlxuICAgICAgICAgICAgICAgIDxSZXF1ZXN0UmVzZXQgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICAgIDxwPlJlc2V0IFlvdXIgUGFzc3dvcmQ8L3A+XG4gICAgICAgIDxSZXNldCAvPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IHJlc2V0UGFnZTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/reset.js\n");

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

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/***/ (function(module) {

"use strict";
module.exports = require("prop-types");;

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

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("styled-components");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["components_ErrorMessage_js-components_User_js","components_RequestReset_js"], function() { return __webpack_exec__("./pages/reset.js"); });
module.exports = __webpack_exports__;

})();