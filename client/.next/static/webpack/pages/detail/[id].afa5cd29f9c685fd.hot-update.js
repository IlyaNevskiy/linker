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

/***/ "./pages/detail/[id].js":
/*!******************************!*\
  !*** ./pages/detail/[id].js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_Ilya_linker_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_Ilya_linker_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_Ilya_linker_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _context_AuthContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../context/AuthContext */ \"./context/AuthContext.js\");\n/* harmony import */ var _hooks_useHttp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hooks/useHttp */ \"./hooks/useHttp.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Link(param) {\n    var stars = param.stars;\n    _s();\n    var auth = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_context_AuthContext__WEBPACK_IMPORTED_MODULE_3__.AuthContext);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: [\n            \"Next stars: \",\n            stars.from\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Ilya\\\\linker\\\\client\\\\pages\\\\detail\\\\[id].js\",\n        lineNumber: 10,\n        columnNumber: 12\n    }, this);\n}\n_s(Link, \"2E+KaGHVlJMhtGjyKmHdHkA1EKU=\");\n_c = Link;\nLink.getInitialProps = function() {\n    var _ref = _asyncToGenerator(C_Users_Ilya_linker_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(ctx) {\n        var res, json;\n        return C_Users_Ilya_linker_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    _ctx.next = 2;\n                    return fetch(\"http://localhost:5000/api/link/\".concat(ctx.query.id), {\n                        method: \"GET\",\n                        headers: {\n                            Authorization: \"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MjU1NjEwODJjZjM5OTk4ZTU0N2Y5NzciLCJpYXQiOjE2NDk4NDk4OTIsImV4cCI6MTY0OTg1MzQ5Mn0.27TTo7iZZkgguSfZdqukcMwN_i7Cxxe-5vQ1Js5iL7E\"\n                        }\n                    });\n                case 2:\n                    res = _ctx.sent;\n                    _ctx.next = 5;\n                    return res.json();\n                case 5:\n                    json = _ctx.sent;\n                    console.log(json);\n                    return _ctx.abrupt(\"return\", {\n                        stars: json\n                    });\n                case 8:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    return function(ctx) {\n        return _ref.apply(this, arguments);\n    };\n}();\n/* harmony default export */ __webpack_exports__[\"default\"] = (Link);\nvar _c;\n$RefreshReg$(_c, \"Link\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9kZXRhaWwvW2lkXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFrQztBQUNxQjtBQUNaOztBQUkzQyxTQUFTRyxJQUFJLENBQUMsS0FBUyxFQUFFO1FBQVgsS0FBTyxHQUFQLEtBQVMsQ0FBUEMsS0FBSzs7SUFDakIsSUFBSUMsSUFBSSxHQUFHTCxpREFBVSxDQUFDQyw2REFBVyxDQUFDO0lBRWxDLHFCQUFPLDhEQUFDSyxLQUFHOztZQUFDLGNBQVk7WUFBQ0YsS0FBSyxDQUFDRyxJQUFJOzs7Ozs7WUFBTztDQUMzQztHQUpNSixJQUFJO0FBQUpBLEtBQUFBLElBQUk7QUFNYkEsSUFBSSxDQUFDSyxlQUFlO2VBQUcseUtBQU9DLEdBQUcsRUFBSztZQUMxQkMsR0FBRyxFQUdIQyxJQUFJOzs7OzsyQkFIUUMsS0FBSyxDQUFDLGlDQUFnQyxDQUFlLE9BQWJILEdBQUcsQ0FBQ0ksS0FBSyxDQUFDQyxFQUFFLENBQUUsRUFBQzt3QkFBRUMsTUFBTSxFQUFFLEtBQUs7d0JBQUVDLE9BQU8sRUFBRTs0QkFDL0ZDLGFBQWEsRUFBRyx5TEFBeUw7eUJBQzVNO3FCQUFDLENBQUM7O29CQUZHUCxHQUFHLFlBRU47OzJCQUNnQkEsR0FBRyxDQUFDQyxJQUFJLEVBQUU7O29CQUF2QkEsSUFBSSxZQUFtQjtvQkFDN0JPLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDUixJQUFJLENBQUMsQ0FBQztpREFDWDt3QkFBRVAsS0FBSyxFQUFFTyxJQUFJO3FCQUFFOzs7Ozs7S0FDdkI7b0JBUHlCRixHQUFHOzs7R0FPNUI7QUFFSCwrREFBZU4sSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9kZXRhaWwvW2lkXS5qcz84MjkzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgQXV0aENvbnRleHQgfSBmcm9tICcuLi8uLi9jb250ZXh0L0F1dGhDb250ZXh0J1xyXG5pbXBvcnQge3VzZUh0dHB9IGZyb20gJy4uLy4uL2hvb2tzL3VzZUh0dHAnIFxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBMaW5rKHsgc3RhcnMgfSkge1xyXG4gICAgbGV0IGF1dGggPSB1c2VDb250ZXh0KEF1dGhDb250ZXh0KVxyXG5cclxuICAgIHJldHVybiA8ZGl2Pk5leHQgc3RhcnM6IHtzdGFycy5mcm9tfTwvZGl2PlxyXG4gIH1cclxuICBcclxuTGluay5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoY3R4KSA9PiB7XHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjUwMDAvYXBpL2xpbmsvJHtjdHgucXVlcnkuaWR9YCx7IG1ldGhvZDogJ0dFVCcsIGhlYWRlcnM6IHtcclxuICAgICAgICAgIEF1dGhvcml6YXRpb24gOiBcIkJlYXJlciBleUpoYkdjaU9pSklVekkxTmlJc0luUjVjQ0k2SWtwWFZDSjkuZXlKMWMyVnlTV1FpT2lJMk1qVTFOakV3T0RKalpqTTVPVGs0WlRVME4yWTVOemNpTENKcFlYUWlPakUyTkRrNE5EazRPVElzSW1WNGNDSTZNVFkwT1RnMU16UTVNbjAuMjdUVG83aVpaa2dndVNmWmRxdWtjTXdOX2k3Q3h4ZS01dlExSnM1aUw3RVwiXHJcbiAgICAgIH19KVxyXG4gICAgICBjb25zdCBqc29uID0gYXdhaXQgcmVzLmpzb24oKVxyXG4gICAgICBjb25zb2xlLmxvZyhqc29uKTtcclxuICAgICAgcmV0dXJuIHsgc3RhcnM6IGpzb24gfVxyXG4gICAgfVxyXG4gIFxyXG4gIGV4cG9ydCBkZWZhdWx0IExpbmsiXSwibmFtZXMiOlsidXNlQ29udGV4dCIsIkF1dGhDb250ZXh0IiwidXNlSHR0cCIsIkxpbmsiLCJzdGFycyIsImF1dGgiLCJkaXYiLCJmcm9tIiwiZ2V0SW5pdGlhbFByb3BzIiwiY3R4IiwicmVzIiwianNvbiIsImZldGNoIiwicXVlcnkiLCJpZCIsIm1ldGhvZCIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/detail/[id].js\n");

/***/ })

});