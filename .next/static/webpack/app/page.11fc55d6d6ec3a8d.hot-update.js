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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Component4; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nfunction Component4() {\n    _s();\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetch(\"https://jsonplaceholder.typicode.com/posts/1\").then((res)=>res.json()).then((data)=>{\n            setData(data);\n        }).catch((error)=>{\n            console.log(error);\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Abdul Wasay\\\\Documents\\\\Next JS\\\\hook\\\\components\\\\Component4.tsx\",\n                    lineNumber: 22,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Abdul Wasay\\\\Documents\\\\Next JS\\\\hook\\\\components\\\\Component4.tsx\",\n                    lineNumber: 25,\n                    columnNumber: 13\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Abdul Wasay\\\\Documents\\\\Next JS\\\\hook\\\\components\\\\Component4.tsx\",\n            lineNumber: 21,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Abdul Wasay\\\\Documents\\\\Next JS\\\\hook\\\\components\\\\Component4.tsx\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, this);\n}\n_s(Component4, \"fQZRxy/+nAZ7NLS1X4dVhrlp8Go=\");\n_c = Component4;\nvar _c;\n$RefreshReg$(_c, \"Component4\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvQ29tcG9uZW50NC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBRWtEO0FBUW5DLFNBQVNHOztJQUNwQixNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR0gsK0NBQVFBLENBQWdCO0lBQ2hERCxnREFBU0EsQ0FBQztRQUNWSyxNQUFNLGdEQUNEQyxJQUFJLENBQUNDLENBQUFBLE1BQU9BLElBQUlDLElBQUksSUFDcEJGLElBQUksQ0FBQ0gsQ0FBQUE7WUFBU0MsUUFBUUQ7UUFBSyxHQUMzQk0sS0FBSyxDQUFDLENBQUNDO1lBQVVDLFFBQVFDLEdBQUcsQ0FBQ0Y7UUFBTTtJQUN4QyxHQUFFLEVBQUU7SUFDTixxQkFDRSw4REFBQ0c7a0JBQ0csNEVBQUNBOzs4QkFDRyw4REFBQ0M7Ozs7OzhCQUdELDhEQUFDQzs7Ozs7Ozs7Ozs7Ozs7OztBQU1iO0dBcEJ3QmI7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db21wb25lbnQ0LnRzeD83NDYxIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5pbXBvcnQgeyBDb25zb2xlIH0gZnJvbSAnY29uc29sZSdcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuXHJcbnR5cGUgUG9zdCA9IHtcclxuICAgIGlkOiBudW1iZXI7XHJcbiAgICB0aXRsZTogU3RyaW5nO1xyXG4gICAgYm9keTogU3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb21wb25lbnQ0KCkge1xyXG4gICAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGU8UG9zdFtdIHwgbnVsbD4obnVsbCk7XHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgIGZldGNoKFwiaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3Bvc3RzLzFcIilcclxuICAgICAgICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcclxuICAgICAgICAudGhlbihkYXRhID0+IHtzZXREYXRhKGRhdGEpfSApXHJcbiAgICAgICAgLmNhdGNoKChlcnJvcik9PiB7Y29uc29sZS5sb2coZXJyb3IpfSlcclxuICAgIH0sW10pXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGgxPlxyXG5cclxuICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgPGgyPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJDb21wb25lbnQ0IiwiZGF0YSIsInNldERhdGEiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwiY2F0Y2giLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJoMSIsImgyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/Component4.tsx\n"));

/***/ })

});