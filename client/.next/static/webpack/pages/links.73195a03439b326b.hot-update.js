"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/links",{

/***/ "./pages/links.js":
/*!************************!*\
  !*** ./pages/links.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Links; }\n/* harmony export */ });\n/* harmony import */ var C_Users_Ilya_linker_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_Ilya_linker_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_Ilya_linker_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _context_AuthContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/AuthContext */ \"./context/AuthContext.js\");\n/* harmony import */ var _hooks_useHttp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks/useHttp */ \"./hooks/useHttp.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Links() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), links = ref[0], setLinks = ref[1];\n    var ref1 = (0,_hooks_useHttp__WEBPACK_IMPORTED_MODULE_4__.useHttp)(), loading = ref1.loading, request = ref1.request;\n    var token = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_context_AuthContext__WEBPACK_IMPORTED_MODULE_3__.AuthContext).token;\n    var fetchLinks = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(_asyncToGenerator(C_Users_Ilya_linker_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n        var fetched;\n        return C_Users_Ilya_linker_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    _ctx.prev = 0;\n                    _ctx.next = 3;\n                    return request(\"http://localhost:5000/api/link\", \"GET\", null, {\n                        Authorization: \"Bearer \".concat(token)\n                    });\n                case 3:\n                    fetched = _ctx.sent;\n                    setLinks(fetched);\n                    _ctx.next = 9;\n                    break;\n                case 7:\n                    _ctx.prev = 7;\n                    _ctx.t0 = _ctx[\"catch\"](0);\n                case 9:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee, null, [\n            [\n                0,\n                7\n            ]\n        ]);\n    })), []);\n    return;\n    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"container\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Ilya\\\\linker\\\\client\\\\pages\\\\links.js\",\n        lineNumber: 22,\n        columnNumber: 9\n    }, this);\n};\n_s(Links, \"E0Pr2F8U95sD6cQzh5PhLFtLLL4=\", false, function() {\n    return [\n        _hooks_useHttp__WEBPACK_IMPORTED_MODULE_4__.useHttp\n    ];\n});\n_c = Links;\nvar _c;\n$RefreshReg$(_c, \"Links\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9saW5rcy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF1RDtBQUNIO0FBQ1o7O0FBSXpCLFNBQVNLLEtBQUssR0FBRTs7SUFDM0IsSUFBMEJILEdBQVksR0FBWkEsK0NBQVEsQ0FBQyxFQUFFLENBQUMsRUFQMUMsS0FPZ0IsR0FBY0EsR0FBWSxHQUExQixFQVBoQixRQU8wQixHQUFJQSxHQUFZLEdBQWhCO0lBQ3RCLElBQTZCRSxJQUFTLEdBQVRBLHVEQUFPLEVBQUUsRUFBOUJJLE9BQU8sR0FBY0osSUFBUyxDQUE5QkksT0FBTyxFQUFFQyxPQUFPLEdBQUtMLElBQVMsQ0FBckJLLE9BQU87SUFDeEIsSUFBTSxLQUFNLEdBQUlSLGlEQUFVLENBQUNFLDZEQUFXLENBQUMsQ0FBaENPLEtBQUs7SUFFWixJQUFNQyxVQUFVLEdBQUdYLGtEQUFXLENBQUMsMktBQVc7WUFFNUJZLE9BQU87Ozs7OzsyQkFBU0gsT0FBTyxDQUFDLGdDQUFnQyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUU7d0JBQ3pFSSxhQUFhLEVBQUUsU0FBUSxDQUFRLE9BQU5ILEtBQUssQ0FBRTtxQkFDbkMsQ0FBQzs7b0JBRklFLE9BQU8sWUFFWDtvQkFDRkwsUUFBUSxDQUFDSyxPQUFPLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7S0FFeEIsSUFBRSxFQUFFLENBQUM7SUFFTixPQUFNO2tCQUNGLDhEQUFDRSxLQUFHO1FBQUNDLFNBQVMsRUFBQyxXQUFXOzs7OztZQUVwQjtDQUNiO0dBbEJ1QlYsS0FBSzs7UUFFSUQsbURBQU87OztBQUZoQkMsS0FBQUEsS0FBSyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9saW5rcy5qcz8zYmIwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlQ2FsbGJhY2ssIHVzZUNvbnRleHQsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgQXV0aENvbnRleHQgfSBmcm9tICcuLi9jb250ZXh0L0F1dGhDb250ZXh0J1xyXG5pbXBvcnQge3VzZUh0dHB9IGZyb20gJy4uL2hvb2tzL3VzZUh0dHAnIFxyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMaW5rcygpe1xyXG4gICAgY29uc3QgW2xpbmtzLCBzZXRMaW5rc10gPSB1c2VTdGF0ZShbXSlcclxuICAgIGNvbnN0IHsgbG9hZGluZywgcmVxdWVzdCB9ID0gdXNlSHR0cCgpXHJcbiAgICBjb25zdCB7dG9rZW59ID0gdXNlQ29udGV4dChBdXRoQ29udGV4dClcclxuXHJcbiAgICBjb25zdCBmZXRjaExpbmtzID0gdXNlQ2FsbGJhY2soYXN5bmMgKCkgPT57XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgZmV0Y2hlZCA9IGF3YWl0IHJlcXVlc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9hcGkvbGluaycsICdHRVQnLCBudWxsLCB7XHJcbiAgICAgICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBzZXRMaW5rcyhmZXRjaGVkKVxyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHt9XHJcbiAgICB9LCBbXSlcclxuICAgXHJcbiAgICByZXR1cm4gXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgPC9kaXY+XHJcbn0iXSwibmFtZXMiOlsidXNlQ2FsbGJhY2siLCJ1c2VDb250ZXh0IiwidXNlU3RhdGUiLCJBdXRoQ29udGV4dCIsInVzZUh0dHAiLCJMaW5rcyIsImxpbmtzIiwic2V0TGlua3MiLCJsb2FkaW5nIiwicmVxdWVzdCIsInRva2VuIiwiZmV0Y2hMaW5rcyIsImZldGNoZWQiLCJBdXRob3JpemF0aW9uIiwiZGl2IiwiY2xhc3NOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/links.js\n");

/***/ })

});