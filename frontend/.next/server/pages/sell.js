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
exports.id = "pages/sell";
exports.ids = ["pages/sell"];
exports.modules = {

/***/ "./components/CreateProduct.js":
/*!*************************************!*\
  !*** ./components/CreateProduct.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_useForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/useForm */ \"./lib/useForm.js\");\n/* harmony import */ var _styles_Form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/Form */ \"./components/styles/Form.js\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! graphql-tag */ \"graphql-tag\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ErrorMessage */ \"./components/ErrorMessage.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _Products__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Products */ \"./components/Products.js\");\n\nvar _jsxFileName = \"/home/mantoss/tossFits/frontend/components/CreateProduct.js\";\n\n\n\n\n\n\n\n\nconst CREATE_PRODUCT_MUTATION = (graphql_tag__WEBPACK_IMPORTED_MODULE_4___default())`\n    mutation CREATE_PRODUCT_MUTATION(\n        # Variables getting passed in and their types\n        $name: String!\n        $description: String!\n        $price: Int!\n        $image: Upload\n    ) {\n        createProduct (\n            data:{\n            name: $name\n            description: $description\n            price: $price\n            status: \"AVAILABLE\"\n            photo: { create: { image: $image, altText: $name } }\n        }\n        ){\n            id\n            price\n            description\n            name\n        }\n    }\n`;\n\nconst CreateProduct = () => {\n  const {\n    inputs,\n    handleChange,\n    resetForm,\n    clearForm\n  } = (0,_lib_useForm__WEBPACK_IMPORTED_MODULE_2__.default)({\n    image: '',\n    name: \"Big Shoes\",\n    price: 4000,\n    description: \"Nice shoes\"\n  });\n  const [createProduct, {\n    data,\n    loading,\n    error\n  }] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_5__.useMutation)(CREATE_PRODUCT_MUTATION, {\n    variables: inputs,\n    refetchQueries: [{\n      query: _Products__WEBPACK_IMPORTED_MODULE_8__.ALL_PRODUCTS_QUERY\n    }]\n  });\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_Form__WEBPACK_IMPORTED_MODULE_3__.default, {\n    onSubmit: async e => {\n      e.preventDefault();\n      console.log(inputs); // Submit the input fields to the backend\n\n      const res = await createProduct(); //console.log(res);\n\n      clearForm(); // Go to that product's page\n\n      next_router__WEBPACK_IMPORTED_MODULE_7___default().push({\n        pathname: `/product/${res.data.createProduct.id}`\n      });\n    },\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ErrorMessage__WEBPACK_IMPORTED_MODULE_6__.default, {\n      error: error\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 13\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"fieldset\", {\n      disabled: loading,\n      \"aria-busy\": loading,\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n        htmlFor: \"image\",\n        children: [\"Image\", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n          required: true,\n          id: \"image\",\n          name: \"image\",\n          type: \"file\",\n          onChange: handleChange\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 74,\n          columnNumber: 21\n        }, undefined)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 72,\n        columnNumber: 17\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n        htmlFor: \"name\",\n        children: [\"Name\", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n          id: \"name\",\n          name: \"name\",\n          type: \"text\",\n          placeholder: \"Name\",\n          value: inputs.name,\n          onChange: handleChange\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 84,\n          columnNumber: 21\n        }, undefined)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 82,\n        columnNumber: 17\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n        htmlFor: \"price\",\n        children: [\"Price\", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n          id: \"price\",\n          name: \"price\",\n          type: \"number\",\n          placeholder: \"Price\",\n          value: inputs.price,\n          onChange: handleChange\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 95,\n          columnNumber: 21\n        }, undefined)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 93,\n        columnNumber: 17\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n        htmlFor: \"description\",\n        children: [\"Description\", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n          id: \"description\",\n          name: \"description\",\n          placeholder: \"Description\",\n          value: inputs.description,\n          onChange: handleChange\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 106,\n          columnNumber: 21\n        }, undefined)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 104,\n        columnNumber: 17\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        type: \"submit\",\n        children: \"+ Add Product\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 114,\n        columnNumber: 17\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 13\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 53,\n    columnNumber: 9\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (CreateProduct);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b3NzLWZpdHMtZnJvbnRlbmQvLi9jb21wb25lbnRzL0NyZWF0ZVByb2R1Y3QuanM/ZTA1MCJdLCJuYW1lcyI6WyJDUkVBVEVfUFJPRFVDVF9NVVRBVElPTiIsImdxbCIsIkNyZWF0ZVByb2R1Y3QiLCJpbnB1dHMiLCJoYW5kbGVDaGFuZ2UiLCJyZXNldEZvcm0iLCJjbGVhckZvcm0iLCJ1c2VGb3JtIiwiaW1hZ2UiLCJuYW1lIiwicHJpY2UiLCJkZXNjcmlwdGlvbiIsImNyZWF0ZVByb2R1Y3QiLCJkYXRhIiwibG9hZGluZyIsImVycm9yIiwidXNlTXV0YXRpb24iLCJ2YXJpYWJsZXMiLCJyZWZldGNoUXVlcmllcyIsInF1ZXJ5IiwiQUxMX1BST0RVQ1RTX1FVRVJZIiwiZSIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsInJlcyIsIlJvdXRlciIsInBhdGhuYW1lIiwiaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBLE1BQU1BLHVCQUF1QixHQUFHQyxvREFBSTtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBdkJBOztBQXlCQSxNQUFNQyxhQUFhLEdBQUcsTUFBTTtBQUN4QixRQUFNO0FBQUNDLFVBQUQ7QUFBU0MsZ0JBQVQ7QUFBdUJDLGFBQXZCO0FBQWtDQztBQUFsQyxNQUErQ0MscURBQU8sQ0FBQztBQUN6REMsU0FBSyxFQUFFLEVBRGtEO0FBRXpEQyxRQUFJLEVBQUUsV0FGbUQ7QUFHekRDLFNBQUssRUFBRSxJQUhrRDtBQUl6REMsZUFBVyxFQUFFO0FBSjRDLEdBQUQsQ0FBNUQ7QUFPQSxRQUFNLENBQUVDLGFBQUYsRUFBaUI7QUFBRUMsUUFBRjtBQUFRQyxXQUFSO0FBQWlCQztBQUFqQixHQUFqQixJQUE4Q0MsMkRBQVcsQ0FDM0RoQix1QkFEMkQsRUFFM0Q7QUFDSWlCLGFBQVMsRUFBRWQsTUFEZjtBQUVJZSxrQkFBYyxFQUFFLENBQUM7QUFBRUMsV0FBSyxFQUFFQyx5REFBa0JBO0FBQTNCLEtBQUQ7QUFGcEIsR0FGMkQsQ0FBL0Q7QUFRQSxzQkFDSSw4REFBQyxpREFBRDtBQUNJLFlBQVEsRUFDTCxNQUFNQyxDQUFOLElBQVc7QUFDTkEsT0FBQyxDQUFDQyxjQUFGO0FBQ0FDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZckIsTUFBWixFQUZNLENBR047O0FBQ0EsWUFBTXNCLEdBQUcsR0FBRyxNQUFNYixhQUFhLEVBQS9CLENBSk0sQ0FLTjs7QUFDQU4sZUFBUyxHQU5ILENBT047O0FBQ0FvQiw2REFBQSxDQUFZO0FBQ1JDLGdCQUFRLEVBQUcsWUFBV0YsR0FBRyxDQUFDWixJQUFKLENBQVNELGFBQVQsQ0FBdUJnQixFQUFHO0FBRHhDLE9BQVo7QUFHSCxLQWJUO0FBQUEsNEJBZ0JJLDhEQUFDLGtEQUFEO0FBQWMsV0FBSyxFQUFFYjtBQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWhCSixlQWtCSTtBQUFVLGNBQVEsRUFBRUQsT0FBcEI7QUFBNkIsbUJBQVdBLE9BQXhDO0FBQUEsOEJBQ0k7QUFBTyxlQUFPLEVBQUMsT0FBZjtBQUFBLHlDQUVJO0FBQ0ksa0JBQVEsTUFEWjtBQUVJLFlBQUUsRUFBQyxPQUZQO0FBR0ksY0FBSSxFQUFDLE9BSFQ7QUFJSSxjQUFJLEVBQUMsTUFKVDtBQUtJLGtCQUFRLEVBQUVWO0FBTGQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREosZUFXSTtBQUFPLGVBQU8sRUFBQyxNQUFmO0FBQUEsd0NBRUk7QUFDSSxZQUFFLEVBQUMsTUFEUDtBQUVJLGNBQUksRUFBQyxNQUZUO0FBR0ksY0FBSSxFQUFDLE1BSFQ7QUFJSSxxQkFBVyxFQUFDLE1BSmhCO0FBS0ksZUFBSyxFQUFFRCxNQUFNLENBQUNNLElBTGxCO0FBTUksa0JBQVEsRUFBRUw7QUFOZDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFYSixlQXNCSTtBQUFPLGVBQU8sRUFBQyxPQUFmO0FBQUEseUNBRUk7QUFDSSxZQUFFLEVBQUMsT0FEUDtBQUVJLGNBQUksRUFBQyxPQUZUO0FBR0ksY0FBSSxFQUFDLFFBSFQ7QUFJSSxxQkFBVyxFQUFDLE9BSmhCO0FBS0ksZUFBSyxFQUFFRCxNQUFNLENBQUNPLEtBTGxCO0FBTUksa0JBQVEsRUFBRU47QUFOZDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkF0QkosZUFpQ0k7QUFBTyxlQUFPLEVBQUMsYUFBZjtBQUFBLCtDQUVJO0FBQ0ksWUFBRSxFQUFDLGFBRFA7QUFFSSxjQUFJLEVBQUMsYUFGVDtBQUdJLHFCQUFXLEVBQUMsYUFIaEI7QUFJSSxlQUFLLEVBQUVELE1BQU0sQ0FBQ1EsV0FKbEI7QUFLSSxrQkFBUSxFQUFFUDtBQUxkO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQWpDSixlQTJDSTtBQUFRLFlBQUksRUFBQyxRQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQTNDSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBbEJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKO0FBa0VILENBbEZEOztBQW9GQSwrREFBZUYsYUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvQ3JlYXRlUHJvZHVjdC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdXNlRm9ybSBmcm9tICcuLi9saWIvdXNlRm9ybSc7XG5pbXBvcnQgRm9ybSBmcm9tICcuL3N0eWxlcy9Gb3JtJztcbmltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnO1xuaW1wb3J0IHsgdXNlTXV0YXRpb24gfSBmcm9tICdAYXBvbGxvL2NsaWVudCc7XG5pbXBvcnQgRGlzcGxheUVycm9yIGZyb20gJy4vRXJyb3JNZXNzYWdlJztcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IHsgQUxMX1BST0RVQ1RTX1FVRVJZIH0gZnJvbSAnLi9Qcm9kdWN0cyc7XG5cblxuY29uc3QgQ1JFQVRFX1BST0RVQ1RfTVVUQVRJT04gPSBncWxgXG4gICAgbXV0YXRpb24gQ1JFQVRFX1BST0RVQ1RfTVVUQVRJT04oXG4gICAgICAgICMgVmFyaWFibGVzIGdldHRpbmcgcGFzc2VkIGluIGFuZCB0aGVpciB0eXBlc1xuICAgICAgICAkbmFtZTogU3RyaW5nIVxuICAgICAgICAkZGVzY3JpcHRpb246IFN0cmluZyFcbiAgICAgICAgJHByaWNlOiBJbnQhXG4gICAgICAgICRpbWFnZTogVXBsb2FkXG4gICAgKSB7XG4gICAgICAgIGNyZWF0ZVByb2R1Y3QgKFxuICAgICAgICAgICAgZGF0YTp7XG4gICAgICAgICAgICBuYW1lOiAkbmFtZVxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICRkZXNjcmlwdGlvblxuICAgICAgICAgICAgcHJpY2U6ICRwcmljZVxuICAgICAgICAgICAgc3RhdHVzOiBcIkFWQUlMQUJMRVwiXG4gICAgICAgICAgICBwaG90bzogeyBjcmVhdGU6IHsgaW1hZ2U6ICRpbWFnZSwgYWx0VGV4dDogJG5hbWUgfSB9XG4gICAgICAgIH1cbiAgICAgICAgKXtcbiAgICAgICAgICAgIGlkXG4gICAgICAgICAgICBwcmljZVxuICAgICAgICAgICAgZGVzY3JpcHRpb25cbiAgICAgICAgICAgIG5hbWVcbiAgICAgICAgfVxuICAgIH1cbmA7XG5cbmNvbnN0IENyZWF0ZVByb2R1Y3QgPSAoKSA9PiB7XG4gICAgY29uc3Qge2lucHV0cywgaGFuZGxlQ2hhbmdlLCByZXNldEZvcm0sIGNsZWFyRm9ybX0gPSB1c2VGb3JtKHtcbiAgICAgICAgaW1hZ2U6ICcnLFxuICAgICAgICBuYW1lOiBcIkJpZyBTaG9lc1wiLFxuICAgICAgICBwcmljZTogNDAwMCxcbiAgICAgICAgZGVzY3JpcHRpb246IFwiTmljZSBzaG9lc1wiXG4gICAgfSk7XG5cbiAgICBjb25zdCBbIGNyZWF0ZVByb2R1Y3QsIHsgZGF0YSwgbG9hZGluZywgZXJyb3IgfSBdID0gdXNlTXV0YXRpb24oXG4gICAgICAgIENSRUFURV9QUk9EVUNUX01VVEFUSU9OLFxuICAgICAgICB7XG4gICAgICAgICAgICB2YXJpYWJsZXM6IGlucHV0cyxcbiAgICAgICAgICAgIHJlZmV0Y2hRdWVyaWVzOiBbeyBxdWVyeTogQUxMX1BST0RVQ1RTX1FVRVJZIH1dXG4gICAgICAgIH1cbiAgICApO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPEZvcm1cbiAgICAgICAgICAgIG9uU3VibWl0PXtcbiAgICAgICAgICAgICAgIGFzeW5jIGUgPT4ge1xuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7IFxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhpbnB1dHMpO1xuICAgICAgICAgICAgICAgICAgICAvLyBTdWJtaXQgdGhlIGlucHV0IGZpZWxkcyB0byB0aGUgYmFja2VuZFxuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBjcmVhdGVQcm9kdWN0KCk7XG4gICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2cocmVzKTtcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJGb3JtKCk7XG4gICAgICAgICAgICAgICAgICAgIC8vIEdvIHRvIHRoYXQgcHJvZHVjdCdzIHBhZ2VcbiAgICAgICAgICAgICAgICAgICAgUm91dGVyLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWU6IGAvcHJvZHVjdC8ke3Jlcy5kYXRhLmNyZWF0ZVByb2R1Y3QuaWR9YFxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgPlxuICAgICAgICAgICAgPERpc3BsYXlFcnJvciBlcnJvcj17ZXJyb3J9IC8+XG5cbiAgICAgICAgICAgIDxmaWVsZHNldCBkaXNhYmxlZD17bG9hZGluZ30gYXJpYS1idXN5PXtsb2FkaW5nfT5cbiAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImltYWdlXCI+XG4gICAgICAgICAgICAgICAgICAgIEltYWdlXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cImltYWdlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJpbWFnZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZmlsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJuYW1lXCI+XG4gICAgICAgICAgICAgICAgICAgIE5hbWVcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IFxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJuYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJuYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17aW5wdXRzLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwcmljZVwiPlxuICAgICAgICAgICAgICAgICAgICBQcmljZVxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cInByaWNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwcmljZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUHJpY2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2lucHV0cy5wcmljZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImRlc2NyaXB0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgIERlc2NyaXB0aW9uXG4gICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiZGVzY3JpcHRpb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImRlc2NyaXB0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRGVzY3JpcHRpb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2lucHV0cy5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj4rIEFkZCBQcm9kdWN0PC9idXR0b24+XG4gICAgICAgICAgICA8L2ZpZWxkc2V0PlxuICAgICAgICA8L0Zvcm0+XG4gICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ3JlYXRlUHJvZHVjdDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/CreateProduct.js\n");

/***/ }),

/***/ "./components/styles/Form.js":
/*!***********************************!*\
  !*** ./components/styles/Form.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n\nconst loading = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.keyframes)([\"from{background-position:0 0;}to{background-position:100% 100%;}\"]);\nconst Form = styled_components__WEBPACK_IMPORTED_MODULE_0___default().form.withConfig({\n  displayName: \"Form\",\n  componentId: \"sc-1w1c27x-0\"\n})([\"box-shadow:0 0 5px 3px rgba(0,0,0,0.05);background:rgba(0,0,0,0.02);border:5px solid white;padding:20px;font-size:1.5rem;line-height:1.5;font-weight:600;label{display:block;margin-bottom:1rem;}input,textarea,select{width:100%;padding:0.5rem;font-size:1rem;border:1px solid black;&:focus{outline:0;border-color:var(--red);}}button,input[type='submit']{width:auto;background:red;color:white;border:0;font-size:2rem;font-weight:600;padding:0.5rem 1.2rem;}fieldset{border:0;padding:0;&[disabled]{opacity:0.5;}&::before{height:10px;content:'';display:block;background-image:linear-gradient( to right,#ff3019 0%,#e2b04a 50%,#ff3019 100% );}&[aria-busy='true']::before{background-size:50% auto;animation:\", \" 0.5s linear infinite;}}\"], loading);\n/* harmony default export */ __webpack_exports__[\"default\"] = (Form);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b3NzLWZpdHMtZnJvbnRlbmQvLi9jb21wb25lbnRzL3N0eWxlcy9Gb3JtLmpzPzliMzUiXSwibmFtZXMiOlsibG9hZGluZyIsImtleWZyYW1lcyIsIkZvcm0iLCJzdHlsZWQiXSwibWFwcGluZ3MiOiI7OztBQUFBO0FBRUEsTUFBTUEsT0FBTyxHQUFHQyw0REFBSCxzRUFBYjtBQVlBLE1BQU1DLElBQUksR0FBR0Msd0VBQUg7QUFBQTtBQUFBO0FBQUEsOHRCQXNEU0gsT0F0RFQsQ0FBVjtBQTJEQSwrREFBZUUsSUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvc3R5bGVzL0Zvcm0uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkLCB7IGtleWZyYW1lcyB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuY29uc3QgbG9hZGluZyA9IGtleWZyYW1lc2BcbiAgZnJvbSB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAwO1xuICAgIC8qIHJvdGF0ZTogMDsgKi9cbiAgfVxuXG4gIHRvIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMDAlIDEwMCU7XG4gICAgLyogcm90YXRlOiAzNjBkZWc7ICovXG4gIH1cbmA7XG5cbmNvbnN0IEZvcm0gPSBzdHlsZWQuZm9ybWBcbiAgYm94LXNoYWRvdzogMCAwIDVweCAzcHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjAyKTtcbiAgYm9yZGVyOiA1cHggc29saWQgd2hpdGU7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBmb250LXdlaWdodDogNjAwO1xuICBsYWJlbCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgfVxuICBpbnB1dCxcbiAgdGV4dGFyZWEsXG4gIHNlbGVjdCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMC41cmVtO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICAmOmZvY3VzIHtcbiAgICAgIG91dGxpbmU6IDA7XG4gICAgICBib3JkZXItY29sb3I6IHZhcigtLXJlZCk7XG4gICAgfVxuICB9XG4gIGJ1dHRvbixcbiAgaW5wdXRbdHlwZT0nc3VibWl0J10ge1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIGJhY2tncm91bmQ6IHJlZDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyOiAwO1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIHBhZGRpbmc6IDAuNXJlbSAxLjJyZW07XG4gIH1cbiAgZmllbGRzZXQge1xuICAgIGJvcmRlcjogMDtcbiAgICBwYWRkaW5nOiAwO1xuXG4gICAgJltkaXNhYmxlZF0ge1xuICAgICAgb3BhY2l0eTogMC41O1xuICAgIH1cbiAgICAmOjpiZWZvcmUge1xuICAgICAgaGVpZ2h0OiAxMHB4O1xuICAgICAgY29udGVudDogJyc7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcbiAgICAgICAgdG8gcmlnaHQsXG4gICAgICAgICNmZjMwMTkgMCUsXG4gICAgICAgICNlMmIwNGEgNTAlLFxuICAgICAgICAjZmYzMDE5IDEwMCVcbiAgICAgICk7XG4gICAgfVxuICAgICZbYXJpYS1idXN5PSd0cnVlJ106OmJlZm9yZSB7XG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IDUwJSBhdXRvO1xuICAgICAgYW5pbWF0aW9uOiAke2xvYWRpbmd9IDAuNXMgbGluZWFyIGluZmluaXRlO1xuICAgIH1cbiAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgRm9ybTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/styles/Form.js\n");

/***/ }),

/***/ "./lib/useForm.js":
/*!************************!*\
  !*** ./lib/useForm.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nfunction useForm(initial = {}) {\n  // create a state object for input\n  const {\n    0: inputs,\n    1: setInputs\n  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initial);\n  const initialValues = Object.values(initial).join('');\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {}, [initialValues]);\n\n  function handleChange(e) {\n    let {\n      name,\n      value,\n      type\n    } = e.target;\n\n    if (type === \"number\") {\n      value = parseInt(value);\n    }\n\n    if (type === \"file\") {\n      [value] = e.target.files;\n    }\n\n    setInputs(_objectSpread(_objectSpread({}, inputs), {}, {\n      [name]: value\n    }));\n  }\n\n  function resetForm() {\n    setInputs(initial);\n  }\n\n  function clearForm() {\n    const blankState = Object.fromEntries(Object.entries(inputs).map(([key, value]) => [key, \"\"]));\n    setInputs(blankState);\n  } // Return what we want to surface from this custom hook\n\n\n  return {\n    inputs,\n    handleChange,\n    resetForm,\n    clearForm\n  };\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (useForm);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b3NzLWZpdHMtZnJvbnRlbmQvLi9saWIvdXNlRm9ybS5qcz9mMGUyIl0sIm5hbWVzIjpbInVzZUZvcm0iLCJpbml0aWFsIiwiaW5wdXRzIiwic2V0SW5wdXRzIiwidXNlU3RhdGUiLCJpbml0aWFsVmFsdWVzIiwiT2JqZWN0IiwidmFsdWVzIiwiam9pbiIsInVzZUVmZmVjdCIsImhhbmRsZUNoYW5nZSIsImUiLCJuYW1lIiwidmFsdWUiLCJ0eXBlIiwidGFyZ2V0IiwicGFyc2VJbnQiLCJmaWxlcyIsInJlc2V0Rm9ybSIsImNsZWFyRm9ybSIsImJsYW5rU3RhdGUiLCJmcm9tRW50cmllcyIsImVudHJpZXMiLCJtYXAiLCJrZXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUVBLFNBQVNBLE9BQVQsQ0FBaUJDLE9BQU8sR0FBRyxFQUEzQixFQUErQjtBQUMzQjtBQUNBLFFBQU07QUFBQSxPQUFDQyxNQUFEO0FBQUEsT0FBU0M7QUFBVCxNQUFzQkMsK0NBQVEsQ0FBQ0gsT0FBRCxDQUFwQztBQUVBLFFBQU1JLGFBQWEsR0FBR0MsTUFBTSxDQUFDQyxNQUFQLENBQWNOLE9BQWQsRUFBdUJPLElBQXZCLENBQTRCLEVBQTVCLENBQXRCO0FBRUFDLGtEQUFTLENBQUMsTUFBTSxDQUVmLENBRlEsRUFFTixDQUFDSixhQUFELENBRk0sQ0FBVDs7QUFJQSxXQUFTSyxZQUFULENBQXNCQyxDQUF0QixFQUF3QjtBQUNwQixRQUFJO0FBQUNDLFVBQUQ7QUFBT0MsV0FBUDtBQUFjQztBQUFkLFFBQXNCSCxDQUFDLENBQUNJLE1BQTVCOztBQUNBLFFBQUdELElBQUksS0FBSyxRQUFaLEVBQXFCO0FBQ2pCRCxXQUFLLEdBQUdHLFFBQVEsQ0FBQ0gsS0FBRCxDQUFoQjtBQUNIOztBQUNELFFBQUdDLElBQUksS0FBSyxNQUFaLEVBQW1CO0FBQ2YsT0FBQ0QsS0FBRCxJQUFVRixDQUFDLENBQUNJLE1BQUYsQ0FBU0UsS0FBbkI7QUFDSDs7QUFFRGQsYUFBUyxpQ0FFRkQsTUFGRTtBQUdMLE9BQUNVLElBQUQsR0FBUUM7QUFISCxPQUFUO0FBS0g7O0FBRUQsV0FBU0ssU0FBVCxHQUFvQjtBQUNoQmYsYUFBUyxDQUFDRixPQUFELENBQVQ7QUFDSDs7QUFFRCxXQUFTa0IsU0FBVCxHQUFvQjtBQUNoQixVQUFNQyxVQUFVLEdBQUdkLE1BQU0sQ0FBQ2UsV0FBUCxDQUFtQmYsTUFBTSxDQUFDZ0IsT0FBUCxDQUFlcEIsTUFBZixFQUF1QnFCLEdBQXZCLENBQTJCLENBQUMsQ0FBQ0MsR0FBRCxFQUFNWCxLQUFOLENBQUQsS0FBa0IsQ0FBQ1csR0FBRCxFQUFNLEVBQU4sQ0FBN0MsQ0FBbkIsQ0FBbkI7QUFFQXJCLGFBQVMsQ0FBQ2lCLFVBQUQsQ0FBVDtBQUNILEdBbEMwQixDQW9DM0I7OztBQUNBLFNBQU87QUFDSGxCLFVBREc7QUFFSFEsZ0JBRkc7QUFHSFEsYUFIRztBQUlIQztBQUpHLEdBQVA7QUFNSDs7QUFFRCwrREFBZW5CLE9BQWYiLCJmaWxlIjoiLi9saWIvdXNlRm9ybS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5cbmZ1bmN0aW9uIHVzZUZvcm0oaW5pdGlhbCA9IHt9KSB7XG4gICAgLy8gY3JlYXRlIGEgc3RhdGUgb2JqZWN0IGZvciBpbnB1dFxuICAgIGNvbnN0IFtpbnB1dHMsIHNldElucHV0c10gPSB1c2VTdGF0ZShpbml0aWFsKTtcblxuICAgIGNvbnN0IGluaXRpYWxWYWx1ZXMgPSBPYmplY3QudmFsdWVzKGluaXRpYWwpLmpvaW4oJycpO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgXG4gICAgfSwgW2luaXRpYWxWYWx1ZXNdKTtcblxuICAgIGZ1bmN0aW9uIGhhbmRsZUNoYW5nZShlKXtcbiAgICAgICAgbGV0IHtuYW1lLCB2YWx1ZSwgdHlwZX0gPSBlLnRhcmdldDtcbiAgICAgICAgaWYodHlwZSA9PT0gXCJudW1iZXJcIil7XG4gICAgICAgICAgICB2YWx1ZSA9IHBhcnNlSW50KHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBpZih0eXBlID09PSBcImZpbGVcIil7XG4gICAgICAgICAgICBbdmFsdWVdID0gZS50YXJnZXQuZmlsZXM7XG4gICAgICAgIH1cblxuICAgICAgICBzZXRJbnB1dHMoe1xuICAgICAgICAgICAgLy8gQ29weSBleGlzdGluZyBzdGF0ZVxuICAgICAgICAgICAgLi4uaW5wdXRzLFxuICAgICAgICAgICAgW25hbWVdOiB2YWx1ZVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlc2V0Rm9ybSgpe1xuICAgICAgICBzZXRJbnB1dHMoaW5pdGlhbClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjbGVhckZvcm0oKXtcbiAgICAgICAgY29uc3QgYmxhbmtTdGF0ZSA9IE9iamVjdC5mcm9tRW50cmllcyhPYmplY3QuZW50cmllcyhpbnB1dHMpLm1hcCgoW2tleSwgdmFsdWVdKSA9PiBba2V5LCBcIlwiXSkpO1xuXG4gICAgICAgIHNldElucHV0cyhibGFua1N0YXRlKTtcbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gd2hhdCB3ZSB3YW50IHRvIHN1cmZhY2UgZnJvbSB0aGlzIGN1c3RvbSBob29rXG4gICAgcmV0dXJuIHtcbiAgICAgICAgaW5wdXRzLFxuICAgICAgICBoYW5kbGVDaGFuZ2UsXG4gICAgICAgIHJlc2V0Rm9ybSxcbiAgICAgICAgY2xlYXJGb3JtXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB1c2VGb3JtOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/useForm.js\n");

/***/ }),

/***/ "./pages/sell.js":
/*!***********************!*\
  !*** ./pages/sell.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_CreateProduct__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/CreateProduct */ \"./components/CreateProduct.js\");\n\nvar _jsxFileName = \"/home/mantoss/tossFits/frontend/pages/sell.js\";\n\n\n\nfunction sell() {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_CreateProduct__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 7,\n    columnNumber: 5\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (sell);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b3NzLWZpdHMtZnJvbnRlbmQvLi9wYWdlcy9zZWxsLmpzP2UxNDAiXSwibmFtZXMiOlsic2VsbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLFNBQVNBLElBQVQsR0FBZ0I7QUFFZCxzQkFDRTtBQUFBLDJCQUNFLDhEQUFDLDhEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFLRDs7QUFFRCwrREFBZUEsSUFBZiIsImZpbGUiOiIuL3BhZ2VzL3NlbGwuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IENyZWF0ZVByb2R1Y3QgZnJvbSAnLi4vY29tcG9uZW50cy9DcmVhdGVQcm9kdWN0JztcblxuZnVuY3Rpb24gc2VsbCgpIHtcbiAgXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxDcmVhdGVQcm9kdWN0IC8+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgc2VsbDsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/sell.js\n");

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

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js","components_Products_js","components_ErrorMessage_js"], function() { return __webpack_exec__("./pages/sell.js"); });
module.exports = __webpack_exports__;

})();