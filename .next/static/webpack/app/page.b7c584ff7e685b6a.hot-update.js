"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./components/Component4.tsx":
/*!***********************************!*\
  !*** ./components/Component4.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Component4; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ui_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui/button */ \"(app-pages-browser)/./components/ui/button.tsx\");\n/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/lib/utils */ \"(app-pages-browser)/./lib/utils.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction Component4() {\n    _s();\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [postId, setPostId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetch(\"https://jsonplaceholder.typicode.com/posts/\".concat(postId)).then((res)=>res.json()).then((data)=>{\n            setData(data);\n        }).catch((error)=>{\n            console.log(error);\n        });\n    }, [\n        postId\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col gap-5\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-[500px]\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"font-bold text-xl\",\n                        children: data === null || data === void 0 ? void 0 : data.title\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Abdul Wasay\\\\Documents\\\\Next JS\\\\hook\\\\components\\\\Component4.tsx\",\n                        lineNumber: 25,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: data === null || data === void 0 ? void 0 : data.body\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Abdul Wasay\\\\Documents\\\\Next JS\\\\hook\\\\components\\\\Component4.tsx\",\n                        lineNumber: 28,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Abdul Wasay\\\\Documents\\\\Next JS\\\\hook\\\\components\\\\Component4.tsx\",\n                lineNumber: 24,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-between\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_button__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)(),\n                        onClick: ()=>{\n                            if (postId <= 1) return;\n                            setPostId((prev)=>prev - 1);\n                        },\n                        children: \"Previous\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Abdul Wasay\\\\Documents\\\\Next JS\\\\hook\\\\components\\\\Component4.tsx\",\n                        lineNumber: 33,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_button__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                        onClick: ()=>{\n                            setPostId((prev)=>prev + 1);\n                        },\n                        children: \"Next\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Abdul Wasay\\\\Documents\\\\Next JS\\\\hook\\\\components\\\\Component4.tsx\",\n                        lineNumber: 35,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Abdul Wasay\\\\Documents\\\\Next JS\\\\hook\\\\components\\\\Component4.tsx\",\n                lineNumber: 32,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Abdul Wasay\\\\Documents\\\\Next JS\\\\hook\\\\components\\\\Component4.tsx\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, this);\n}\n_s(Component4, \"6neFypBe1K1n2ylhhIqfpoLCzpE=\");\n_c = Component4;\nvar _c;\n$RefreshReg$(_c, \"Component4\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvQ29tcG9uZW50NC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFFa0Q7QUFDYjtBQUNKO0FBUWxCLFNBQVNLOztJQUNwQixNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR0wsK0NBQVFBLENBQWdCO0lBQ2hELE1BQU0sQ0FBQ00sUUFBUUMsVUFBVSxHQUFHUCwrQ0FBUUEsQ0FBQztJQUNyQ0QsZ0RBQVNBLENBQUM7UUFDVlMsTUFBTSw4Q0FBcUQsT0FBUEYsU0FDL0NHLElBQUksQ0FBQ0MsQ0FBQUEsTUFBT0EsSUFBSUMsSUFBSSxJQUNwQkYsSUFBSSxDQUFDTCxDQUFBQTtZQUFTQyxRQUFRRDtRQUFLLEdBQzNCUSxLQUFLLENBQUMsQ0FBQ0M7WUFBVUMsUUFBUUMsR0FBRyxDQUFDRjtRQUFNO0lBQ3hDLEdBQUU7UUFBQ1A7S0FBTztJQUNaLHFCQUNFLDhEQUFDVTtRQUFJQyxXQUFVOzswQkFDWCw4REFBQ0Q7Z0JBQUlDLFdBQVU7O2tDQUNYLDhEQUFDQzt3QkFBR0QsV0FBVTtrQ0FDVGIsaUJBQUFBLDJCQUFBQSxLQUFNZSxLQUFLOzs7Ozs7a0NBRWhCLDhEQUFDQztrQ0FDSWhCLGlCQUFBQSwyQkFBQUEsS0FBTWlCLElBQUk7Ozs7Ozs7Ozs7OzswQkFHbkIsOERBQUNMO2dCQUFJQyxXQUFVOztrQ0FDWCw4REFBQ2hCLDhDQUFNQTt3QkFBQ2dCLFdBQVdmLDhDQUFFQTt3QkFBSW9CLFNBQVM7NEJBQU0sSUFBR2hCLFVBQVEsR0FBRzs0QkFDbERDLFVBQVVnQixDQUFBQSxPQUFRQSxPQUFLO3dCQUFFO2tDQUFHOzs7Ozs7a0NBQ2hDLDhEQUFDdEIsOENBQU1BO3dCQUFDcUIsU0FBUzs0QkFBS2YsVUFBVWdCLENBQUFBLE9BQVFBLE9BQUs7d0JBQUU7a0NBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUk5RDtHQTFCd0JwQjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0NvbXBvbmVudDQudHN4Pzc0NjEiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcbmltcG9ydCB7IENvbnNvbGUgfSBmcm9tICdjb25zb2xlJ1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICcuL3VpL2J1dHRvbic7XHJcbmltcG9ydCB7IGNuIH0gZnJvbSAnQC9saWIvdXRpbHMnO1xyXG5cclxudHlwZSBQb3N0ID0ge1xyXG4gICAgaWQ6IG51bWJlcjtcclxuICAgIHRpdGxlOiBTdHJpbmc7XHJcbiAgICBib2R5OiBTdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbXBvbmVudDQoKSB7XHJcbiAgICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZTxQb3N0W10gfCBudWxsPihudWxsKTtcclxuICAgIGNvbnN0IFtwb3N0SWQsIHNldFBvc3RJZF0gPSB1c2VTdGF0ZSgxKTtcclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgZmV0Y2goYGh0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS9wb3N0cy8ke3Bvc3RJZH1gKVxyXG4gICAgICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxyXG4gICAgICAgIC50aGVuKGRhdGEgPT4ge3NldERhdGEoZGF0YSl9IClcclxuICAgICAgICAuY2F0Y2goKGVycm9yKT0+IHtjb25zb2xlLmxvZyhlcnJvcil9KVxyXG4gICAgfSxbcG9zdElkXSlcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1jb2wgZ2FwLTUnPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSd3LVs1MDBweF0nPlxyXG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPSdmb250LWJvbGQgdGV4dC14bCc+XHJcbiAgICAgICAgICAgICAgICB7ZGF0YT8udGl0bGV9XHJcbiAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgIDxoMj5cclxuICAgICAgICAgICAgICAgIHtkYXRhPy5ib2R5fVxyXG4gICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGp1c3RpZnktYmV0d2Vlbic+XHJcbiAgICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPXtjbigpfSBvbkNsaWNrPXsoKT0+eyBpZihwb3N0SWQ8PTEpIHJldHVybjtcclxuICAgICAgICAgICAgICAgIHNldFBvc3RJZChwcmV2ID0+IHByZXYtMSl9fT5QcmV2aW91czwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpPT57c2V0UG9zdElkKHByZXYgPT4gcHJldisxKX19Pk5leHQ8L0J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkJ1dHRvbiIsImNuIiwiQ29tcG9uZW50NCIsImRhdGEiLCJzZXREYXRhIiwicG9zdElkIiwic2V0UG9zdElkIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsImNhdGNoIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJ0aXRsZSIsImgyIiwiYm9keSIsIm9uQ2xpY2siLCJwcmV2Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/Component4.tsx\n"));

/***/ })

});