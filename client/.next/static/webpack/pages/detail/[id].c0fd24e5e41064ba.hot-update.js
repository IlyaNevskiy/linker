"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/detail/[id]",{

/***/ "./components/LinkCard.js":
/*!********************************!*\
  !*** ./components/LinkCard.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ LinkCard; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction LinkCard(param) {\n    var link = param.link;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"C\\u0441\\u044B\\u043B\\u043A\\u0430\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Ilya\\\\linker\\\\client\\\\components\\\\LinkCard.js\",\n                lineNumber: 7,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"\\u0412\\u0430\\u0448\\u0430 \\u0441\\u0441\\u044B\\u043B\\u043A\\u0430: \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        href: link.to,\n                        target: \"_blank\",\n                        children: link.to\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Ilya\\\\linker\\\\client\\\\components\\\\LinkCard.js\",\n                        lineNumber: 9,\n                        columnNumber: 25\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Ilya\\\\linker\\\\client\\\\components\\\\LinkCard.js\",\n                lineNumber: 9,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"\\u041E\\u0442\\u043A\\u0443\\u0434\\u0430: \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        href: link.from,\n                        target: \"_blank\",\n                        children: link.from\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Ilya\\\\linker\\\\client\\\\components\\\\LinkCard.js\",\n                        lineNumber: 10,\n                        columnNumber: 20\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Ilya\\\\linker\\\\client\\\\components\\\\LinkCard.js\",\n                lineNumber: 10,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Ilya\\\\linker\\\\client\\\\components\\\\LinkCard.js\",\n        lineNumber: 6,\n        columnNumber: 9\n    }, this);\n};\n_c = LinkCard;\nvar _c;\n$RefreshReg$(_c, \"LinkCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0xpbmtDYXJkLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFBNEI7QUFFYixTQUFTQyxRQUFRLENBQUUsS0FBTSxFQUFFO1FBQVIsSUFBSyxHQUFMLEtBQU0sQ0FBTEMsSUFBSTtJQUVuQyxxQkFDSSw4REFBQ0MsS0FBRztRQUFDQyxTQUFTLEVBQUMsV0FBVzs7MEJBQzFCLDhEQUFDQyxJQUFFOzBCQUFDLGlDQUFNOzs7OztvQkFBVTswQkFFZiw4REFBSkMsR0FBQzs7b0JBQUMsaUVBQWE7a0NBQVUsOERBQUNDLEdBQUM7d0JBQUNDLElBQUksRUFBRU4sSUFBSSxDQUFDTyxFQUFFO3dCQUFFQyxNQUFNLEVBQUMsUUFBUTtrQ0FBR1IsSUFBSSxDQUFDTyxFQUFFOzs7Ozs0QkFBSzs7Ozs7O29CQUFJOzBCQUNwRSw4REFBVEgsR0FBQzs7b0JBQUMsd0NBQVE7a0NBQUEsOERBQUNDLEdBQUM7d0JBQUNDLElBQUksRUFBRU4sSUFBSSxDQUFDUyxJQUFJO3dCQUFFRCxNQUFNLEVBQUMsUUFBUTtrQ0FBR1IsSUFBSSxDQUFDUyxJQUFJOzs7Ozs0QkFBSzs7Ozs7O29CQUFJOzs7Ozs7WUFFN0QsQ0FDVDtDQUVKO0FBWnVCVixLQUFBQSxRQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTGlua0NhcmQuanM/MGM3ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMaW5rQ2FyZCAoe2xpbmt9KSB7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxoMT5D0YHRi9C70LrQsDwvaDE+XHJcblxyXG4gICAgICAgIDxwPtCS0LDRiNCwINGB0YHRi9C70LrQsDogPGEgaHJlZj17bGluay50b30gdGFyZ2V0PSdfYmxhbmsnID57bGluay50b308L2E+PC9wPlxyXG4gICAgICAgIDxwPtCe0YLQutGD0LTQsDogPGEgaHJlZj17bGluay5mcm9tfSB0YXJnZXQ9J19ibGFuaycgPntsaW5rLmZyb219PC9hPjwvcD5cclxuICAgICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxuXHJcbn0iXSwibmFtZXMiOlsiTGluayIsIkxpbmtDYXJkIiwibGluayIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwicCIsImEiLCJocmVmIiwidG8iLCJ0YXJnZXQiLCJmcm9tIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/LinkCard.js\n");

/***/ })

});