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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_Ilya_linker_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_Ilya_linker_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_Ilya_linker_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _context_AuthContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../context/AuthContext */ \"./context/AuthContext.js\");\n/* harmony import */ var _hooks_useHttp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hooks/useHttp */ \"./hooks/useHttp.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar b1 = token;\nfunction Link(param) {\n    var stars = param.stars;\n    _s();\n    var _$token = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_context_AuthContext__WEBPACK_IMPORTED_MODULE_3__.AuthContext).token;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: [\n            \"Next stars: \",\n            stars\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Ilya\\\\linker\\\\client\\\\pages\\\\detail\\\\[id].js\",\n        lineNumber: 9,\n        columnNumber: 12\n    }, this);\n}\n_s(Link, \"cEWfwo+M5xs1Y4dCb3Fz43unteI=\");\n_c = Link;\nLink.getInitialProps = function() {\n    var _ref = _asyncToGenerator(C_Users_Ilya_linker_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(ctx) {\n        var data, res, json;\n        return C_Users_Ilya_linker_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    data = localStorage.getItem(\"userData\");\n                    _ctx.next = 3;\n                    return fetch(\"http://localhost:5000/api/link/\".concat(ctx.query.id), headers = {\n                        Authorization: b1\n                    });\n                case 3:\n                    res = _ctx.sent;\n                    _ctx.next = 6;\n                    return res.json();\n                case 6:\n                    json = _ctx.sent;\n                    console.log(json);\n                    return _ctx.abrupt(\"return\", {\n                        stars: 200\n                    });\n                case 9:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    return function(ctx) {\n        return _ref.apply(this, arguments);\n    };\n}();\n/* harmony default export */ __webpack_exports__[\"default\"] = (Link);\nvar _c;\n$RefreshReg$(_c, \"Link\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9kZXRhaWwvW2lkXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFrQztBQUNxQjtBQUNaOztBQUUzQyxJQUFJRyxFQUFFLEdBQUNDLEtBQUs7QUFFWixTQUFTQyxJQUFJLENBQUMsS0FBUyxFQUFFO1FBQVgsS0FBTyxHQUFQLEtBQVMsQ0FBUEMsS0FBSzs7SUFDakIsSUFBTSxPQUFPLEdBQUtOLGlEQUFVLENBQUNDLDZEQUFXLENBQUMsQ0FBakNHLEtBQUs7SUFDYixxQkFBTyw4REFBQ0csS0FBRzs7WUFBQyxjQUFZO1lBQUNELEtBQUs7Ozs7OztZQUFPO0NBQ3RDO0dBSE1ELElBQUk7QUFBSkEsS0FBQUEsSUFBSTtBQUtYQSxJQUFJLENBQUNHLGVBQWU7ZUFBRyx5S0FBT0MsR0FBRyxFQUFLO1lBQzlCQyxJQUFJLEVBQ0pDLEdBQUcsRUFHSEMsSUFBSTs7OztvQkFKSkYsSUFBSSxHQUFHRyxZQUFZLENBQUNDLE9BQU8sQ0FBQyxVQUFVLENBQUM7OzJCQUMzQkMsS0FBSyxDQUFDLGlDQUFnQyxDQUFlLE9BQWJOLEdBQUcsQ0FBQ08sS0FBSyxDQUFDQyxFQUFFLENBQUUsRUFBRUMsT0FBTyxHQUFHO3dCQUNoRkMsYUFBYSxFQUFHaEIsRUFBRTtxQkFDckIsQ0FBQzs7b0JBRklRLEdBQUcsWUFFUDs7MkJBQ2lCQSxHQUFHLENBQUNDLElBQUksRUFBRTs7b0JBQXZCQSxJQUFJLFlBQW1CO29CQUM3QlEsT0FBTyxDQUFDQyxHQUFHLENBQUNULElBQUksQ0FBQyxDQUFDO2lEQUNYO3dCQUFFTixLQUFLLEVBQUUsR0FBRztxQkFBRTs7Ozs7O0tBQ3RCO29CQVI2QkcsR0FBRzs7O0dBUWhDO0FBRUQsK0RBQWVKLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZGV0YWlsL1tpZF0uanM/ODI5MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IEF1dGhDb250ZXh0IH0gZnJvbSAnLi4vLi4vY29udGV4dC9BdXRoQ29udGV4dCdcclxuaW1wb3J0IHt1c2VIdHRwfSBmcm9tICcuLi8uLi9ob29rcy91c2VIdHRwJyBcclxuXHJcbnZhciBiMT10b2tlblxyXG5cclxuZnVuY3Rpb24gTGluayh7IHN0YXJzIH0pIHtcclxuICAgIGNvbnN0IHsgdG9rZW4gfSA9IHVzZUNvbnRleHQoQXV0aENvbnRleHQpXHJcbiAgICByZXR1cm4gPGRpdj5OZXh0IHN0YXJzOiB7c3RhcnN9PC9kaXY+XHJcbiAgfVxyXG4gIFxyXG4gIExpbmsuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKGN0eCkgPT4ge1xyXG4gICAgY29uc3QgZGF0YSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyRGF0YScpIFxyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9hcGkvbGluay8ke2N0eC5xdWVyeS5pZH1gLCBoZWFkZXJzID0ge1xyXG4gICAgICAgIEF1dGhvcml6YXRpb24gOiBiMVxyXG4gICAgfSlcclxuICAgIGNvbnN0IGpzb24gPSBhd2FpdCByZXMuanNvbigpXHJcbiAgICBjb25zb2xlLmxvZyhqc29uKTtcclxuICAgIHJldHVybiB7IHN0YXJzOiAyMDAgfVxyXG4gIH1cclxuICBcclxuICBleHBvcnQgZGVmYXVsdCBMaW5rIl0sIm5hbWVzIjpbInVzZUNvbnRleHQiLCJBdXRoQ29udGV4dCIsInVzZUh0dHAiLCJiMSIsInRva2VuIiwiTGluayIsInN0YXJzIiwiZGl2IiwiZ2V0SW5pdGlhbFByb3BzIiwiY3R4IiwiZGF0YSIsInJlcyIsImpzb24iLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiZmV0Y2giLCJxdWVyeSIsImlkIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/detail/[id].js\n");

/***/ })

});