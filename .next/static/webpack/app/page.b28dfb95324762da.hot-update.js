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

/***/ "(app-pages-browser)/./components/UseStateComponent.tsx":
/*!******************************************!*\
  !*** ./components/UseStateComponent.tsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ui_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui/button */ \"(app-pages-browser)/./components/ui/button.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst UseStateComponent = ()=>{\n    _s();\n    const [counter, setCounter] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"text-3xl font-bold flex gap-5 items-center justify-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_button__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                variant: \"destructive\",\n                children: \"-\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Abdul Wasay\\\\Documents\\\\Next JS\\\\hook\\\\components\\\\UseStateComponent.tsx\",\n                lineNumber: 9,\n                columnNumber: 9\n            }, undefined),\n            0,\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_button__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                children: \"+\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Abdul Wasay\\\\Documents\\\\Next JS\\\\hook\\\\components\\\\UseStateComponent.tsx\",\n                lineNumber: 11,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Abdul Wasay\\\\Documents\\\\Next JS\\\\hook\\\\components\\\\UseStateComponent.tsx\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, undefined);\n};\n_s(UseStateComponent, \"mgO7WMHyhiBnLtH7uw/qAj2Cy9A=\");\n_c = UseStateComponent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (UseStateComponent);\nvar _c;\n$RefreshReg$(_c, \"UseStateComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvVXNlU3RhdGVDb21wb25lbnQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDdUM7QUFDSDtBQUVwQyxNQUFNRyxvQkFBb0I7O0lBQ3RCLE1BQU0sQ0FBQ0MsU0FBU0MsV0FBVyxHQUFHSiwrQ0FBUUEsQ0FBQztJQUN6QyxxQkFDRSw4REFBQ0s7UUFBSUMsV0FBVTs7MEJBQ1gsOERBQUNMLDhDQUFNQTtnQkFBQ00sU0FBUTswQkFBYzs7Ozs7O1lBQzdCOzBCQUNELDhEQUFDTiw4Q0FBTUE7MEJBQUM7Ozs7Ozs7Ozs7OztBQUdoQjtHQVRNQztLQUFBQTtBQVdOLCtEQUFlQSxpQkFBaUJBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Vc2VTdGF0ZUNvbXBvbmVudC50c3g/ZDJiOSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJy4vdWkvYnV0dG9uJ1xyXG5cclxuY29uc3QgVXNlU3RhdGVDb21wb25lbnQgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbY291bnRlciwgc2V0Q291bnRlcl0gPSB1c2VTdGF0ZSgwKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9J3RleHQtM3hsIGZvbnQtYm9sZCBmbGV4IGdhcC01IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlcic+XHJcbiAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwiZGVzdHJ1Y3RpdmVcIj4tPC9CdXR0b24+XHJcbiAgICAgICAgezB9XHJcbiAgICAgICAgPEJ1dHRvbj4rPC9CdXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFVzZVN0YXRlQ29tcG9uZW50Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJCdXR0b24iLCJVc2VTdGF0ZUNvbXBvbmVudCIsImNvdW50ZXIiLCJzZXRDb3VudGVyIiwiZGl2IiwiY2xhc3NOYW1lIiwidmFyaWFudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/UseStateComponent.tsx\n"));

/***/ })

});