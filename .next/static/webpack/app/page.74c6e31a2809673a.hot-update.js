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

/***/ "(app-pages-browser)/./components/ComponentA.tsx":
/*!***********************************!*\
  !*** ./components/ComponentA.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ComponentA; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ComponentB__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ComponentB */ \"(app-pages-browser)/./components/ComponentB.tsx\");\n/* harmony import */ var _ui_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui/button */ \"(app-pages-browser)/./components/ui/button.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction ComponentA() {\n    _s();\n    const [counter, setCounter] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"border border-black bg-yellow-400 h-[75%] w-[75%] rounded-[32px] flex flex-col items-center justify-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex gap-3 items-center justify-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_button__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                        onClick: ()=>setCounter((prev)=>prev - 1),\n                        children: \"-\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Abdul Wasay\\\\Documents\\\\Next JS\\\\hook\\\\components\\\\ComponentA.tsx\",\n                        lineNumber: 11,\n                        columnNumber: 13\n                    }, this),\n                    counter,\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_button__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                        onClick: ()=>setCounter((prev)=>prev + 1),\n                        children: \"+\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Abdul Wasay\\\\Documents\\\\Next JS\\\\hook\\\\components\\\\ComponentA.tsx\",\n                        lineNumber: 13,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Abdul Wasay\\\\Documents\\\\Next JS\\\\hook\\\\components\\\\ComponentA.tsx\",\n                lineNumber: 10,\n                columnNumber: 9\n            }, this),\n            \"ComponentA\",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ComponentB__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                \"counter-\": true\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Abdul Wasay\\\\Documents\\\\Next JS\\\\hook\\\\components\\\\ComponentA.tsx\",\n                lineNumber: 16,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Abdul Wasay\\\\Documents\\\\Next JS\\\\hook\\\\components\\\\ComponentA.tsx\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, this);\n}\n_s(ComponentA, \"mgO7WMHyhiBnLtH7uw/qAj2Cy9A=\");\n_c = ComponentA;\nvar _c;\n$RefreshReg$(_c, \"ComponentA\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvQ29tcG9uZW50QS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDdUM7QUFDRjtBQUNEO0FBRXJCLFNBQVNJOztJQUNwQixNQUFNLENBQUNDLFNBQVNDLFdBQVcsR0FBR0wsK0NBQVFBLENBQUM7SUFDekMscUJBQ0UsOERBQUNNO1FBQUlDLFdBQVU7OzBCQUNYLDhEQUFDRDtnQkFBSUMsV0FBVTs7a0NBQ1gsOERBQUNMLDhDQUFNQTt3QkFBQ00sU0FBUyxJQUFNSCxXQUFXSSxDQUFBQSxPQUFRQSxPQUFLO2tDQUFJOzs7Ozs7b0JBQ2xETDtrQ0FDRCw4REFBQ0YsOENBQU1BO3dCQUFDTSxTQUFTLElBQU1ILFdBQVdJLENBQUFBLE9BQVFBLE9BQUs7a0NBQUk7Ozs7Ozs7Ozs7OztZQUNqRDswQkFFTiw4REFBQ1IsbURBQVVBO2dCQUFDUyxVQUFROzs7Ozs7Ozs7Ozs7QUFHNUI7R0Fid0JQO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQ29tcG9uZW50QS50c3g/ZDQxZSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBDb21wb25lbnRCIGZyb20gJy4vQ29tcG9uZW50QidcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnLi91aS9idXR0b24nXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb21wb25lbnRBKCkge1xyXG4gICAgY29uc3QgW2NvdW50ZXIsIHNldENvdW50ZXJdID0gdXNlU3RhdGUoMCk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPSdib3JkZXIgYm9yZGVyLWJsYWNrIGJnLXllbGxvdy00MDAgaC1bNzUlXSB3LVs3NSVdIHJvdW5kZWQtWzMycHhdIGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyJz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBnYXAtMyBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXInPlxyXG4gICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldENvdW50ZXIocHJldiA9PiBwcmV2LTEpfT4tPC9CdXR0b24+XHJcbiAgICAgICAgICAgIHtjb3VudGVyfVxyXG4gICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldENvdW50ZXIocHJldiA9PiBwcmV2KzEpfT4rPC9CdXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgQ29tcG9uZW50QVxyXG4gICAgICAgIDxDb21wb25lbnRCIGNvdW50ZXItIC8+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJDb21wb25lbnRCIiwiQnV0dG9uIiwiQ29tcG9uZW50QSIsImNvdW50ZXIiLCJzZXRDb3VudGVyIiwiZGl2IiwiY2xhc3NOYW1lIiwib25DbGljayIsInByZXYiLCJjb3VudGVyLSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/ComponentA.tsx\n"));

/***/ })

});