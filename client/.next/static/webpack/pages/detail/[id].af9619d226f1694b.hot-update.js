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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_Ilya_linker_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_Ilya_linker_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_Ilya_linker_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _context_AuthContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../context/AuthContext */ \"./context/AuthContext.js\");\n/* harmony import */ var _hooks_useHttp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hooks/useHttp */ \"./hooks/useHttp.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Link(param) {\n    var stars = param.stars;\n    _s();\n    var auth = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_context_AuthContext__WEBPACK_IMPORTED_MODULE_3__.AuthContext);\n    Link.getInitialProps = function() {\n        var _ref = _asyncToGenerator(C_Users_Ilya_linker_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(ctx) {\n            var res, json;\n            return C_Users_Ilya_linker_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.t0 = console;\n                        _ctx.next = 3;\n                        return token;\n                    case 3:\n                        _ctx.t1 = _ctx.sent;\n                        _ctx.t0.log.call(_ctx.t0, _ctx.t1);\n                        _ctx.next = 7;\n                        return fetch(\"http://localhost:5000/api/link/\".concat(ctx.query.id), {\n                            headers: {\n                                Authorization: token\n                            }\n                        });\n                    case 7:\n                        res = _ctx.sent;\n                        _ctx.next = 10;\n                        return res.json();\n                    case 10:\n                        json = _ctx.sent;\n                        console.log(json);\n                        return _ctx.abrupt(\"return\", {\n                            stars: 200\n                        });\n                    case 13:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function(ctx) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: [\n            \"Next stars: \",\n            stars\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Ilya\\\\linker\\\\client\\\\pages\\\\detail\\\\[id].js\",\n        lineNumber: 20,\n        columnNumber: 12\n    }, this);\n}\n_s(Link, \"2E+KaGHVlJMhtGjyKmHdHkA1EKU=\");\n_c = Link;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Link);\nvar _c;\n$RefreshReg$(_c, \"Link\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9kZXRhaWwvW2lkXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFrQztBQUNxQjtBQUNaOztBQUkzQyxTQUFTRyxJQUFJLENBQUMsS0FBUyxFQUFFO1FBQVgsS0FBTyxHQUFQLEtBQVMsQ0FBUEMsS0FBSzs7SUFDakIsSUFBSUMsSUFBSSxHQUFHTCxpREFBVSxDQUFDQyw2REFBVyxDQUFDO0lBRWxDRSxJQUFJLENBQUNHLGVBQWU7bUJBQUcseUtBQU9DLEdBQUcsRUFBSztnQkFFOUJDLEdBQUcsRUFHSEMsSUFBSTs7OztrQ0FKVkMsT0FBTzs7K0JBQVdDLEtBQUs7Ozt3QkFBdkJELFFBQVFFLEdBQUcsdUJBQWE7OytCQUNOQyxLQUFLLENBQUMsaUNBQWdDLENBQWUsT0FBYk4sR0FBRyxDQUFDTyxLQUFLLENBQUNDLEVBQUUsQ0FBRSxFQUFDOzRCQUFFQyxPQUFPLEVBQUU7Z0NBQ2hGQyxhQUFhLEVBQUdOLEtBQUs7NkJBQ3hCO3lCQUFDLENBQUM7O3dCQUZHSCxHQUFHLFlBRU47OytCQUNnQkEsR0FBRyxDQUFDQyxJQUFJLEVBQUU7O3dCQUF2QkEsSUFBSSxZQUFtQjt3QkFDN0JDLE9BQU8sQ0FBQ0UsR0FBRyxDQUFDSCxJQUFJLENBQUMsQ0FBQztxREFDWDs0QkFBRUwsS0FBSyxFQUFFLEdBQUc7eUJBQUU7Ozs7OztTQUN0Qjt3QkFSNkJHLEdBQUc7OztPQVFoQztJQUVELHFCQUFPLDhEQUFDVyxLQUFHOztZQUFDLGNBQVk7WUFBQ2QsS0FBSzs7Ozs7O1lBQU87Q0FDdEM7R0FkTUQsSUFBSTtBQUFKQSxLQUFBQSxJQUFJO0FBa0JYLCtEQUFlQSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2RldGFpbC9baWRdLmpzPzgyOTMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBBdXRoQ29udGV4dCB9IGZyb20gJy4uLy4uL2NvbnRleHQvQXV0aENvbnRleHQnXHJcbmltcG9ydCB7dXNlSHR0cH0gZnJvbSAnLi4vLi4vaG9va3MvdXNlSHR0cCcgXHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIExpbmsoeyBzdGFycyB9KSB7XHJcbiAgICBsZXQgYXV0aCA9IHVzZUNvbnRleHQoQXV0aENvbnRleHQpXHJcblxyXG4gICAgTGluay5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoY3R4KSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGF3YWl0IHRva2VuKVxyXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDo1MDAwL2FwaS9saW5rLyR7Y3R4LnF1ZXJ5LmlkfWAseyBoZWFkZXJzOiB7XHJcbiAgICAgICAgICBBdXRob3JpemF0aW9uIDogdG9rZW5cclxuICAgICAgfX0pXHJcbiAgICAgIGNvbnN0IGpzb24gPSBhd2FpdCByZXMuanNvbigpXHJcbiAgICAgIGNvbnNvbGUubG9nKGpzb24pO1xyXG4gICAgICByZXR1cm4geyBzdGFyczogMjAwIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gPGRpdj5OZXh0IHN0YXJzOiB7c3RhcnN9PC9kaXY+XHJcbiAgfVxyXG4gIFxyXG5cclxuICBcclxuICBleHBvcnQgZGVmYXVsdCBMaW5rIl0sIm5hbWVzIjpbInVzZUNvbnRleHQiLCJBdXRoQ29udGV4dCIsInVzZUh0dHAiLCJMaW5rIiwic3RhcnMiLCJhdXRoIiwiZ2V0SW5pdGlhbFByb3BzIiwiY3R4IiwicmVzIiwianNvbiIsImNvbnNvbGUiLCJ0b2tlbiIsImxvZyIsImZldGNoIiwicXVlcnkiLCJpZCIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwiZGl2Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/detail/[id].js\n");

/***/ })

});