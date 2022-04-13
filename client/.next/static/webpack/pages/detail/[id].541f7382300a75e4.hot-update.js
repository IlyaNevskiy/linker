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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_Ilya_linker_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_Ilya_linker_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_Ilya_linker_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _context_AuthContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../context/AuthContext */ \"./context/AuthContext.js\");\n/* harmony import */ var _hooks_useHttp__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../hooks/useHttp */ \"./hooks/useHttp.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Link() {\n    _s();\n    var token = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_context_AuthContext__WEBPACK_IMPORTED_MODULE_4__.AuthContext).token;\n    var ref = (0,_hooks_useHttp__WEBPACK_IMPORTED_MODULE_5__.useHttp)(), request = ref.request, loading = ref.loading;\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null), link = ref1[0], setLink = ref1[1];\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    var linkId = router.query.id;\n    var getLink = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(_asyncToGenerator(C_Users_Ilya_linker_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n        var fetched;\n        return C_Users_Ilya_linker_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    if (!token) {\n                        _ctx.next = 11;\n                        break;\n                    }\n                    _ctx.prev = 1;\n                    console.log(token);\n                    _ctx.next = 5;\n                    return request(\"http://localhost:5000/api/link/\".concat(linkId), \"GET\", null, {\n                        Authorization: \"Bearer \".concat(token)\n                    });\n                case 5:\n                    fetched = _ctx.sent;\n                    setLink(fetched);\n                    _ctx.next = 11;\n                    break;\n                case 9:\n                    _ctx.prev = 9;\n                    _ctx.t0 = _ctx[\"catch\"](1);\n                case 11:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee, null, [\n            [\n                1,\n                9\n            ]\n        ]);\n    })), [\n        token,\n        linkId,\n        request\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        getLink();\n    }, [\n        getLink\n    ]);\n    if (loading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n            children: \"Loading\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Ilya\\\\linker\\\\client\\\\pages\\\\detail\\\\[id].js\",\n            lineNumber: 33,\n            columnNumber: 14\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: !loading && link && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            children: \"Next stars: \"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Ilya\\\\linker\\\\client\\\\pages\\\\detail\\\\[id].js\",\n            lineNumber: 37,\n            columnNumber: 29\n        }, this)\n    }, void 0, false);\n}\n_s(Link, \"W8RJJigcK+kZvxpF7WFVVOdo/l8=\", false, function() {\n    return [\n        _hooks_useHttp__WEBPACK_IMPORTED_MODULE_5__.useHttp,\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Link;\n/* Link.getInitialProps = async (ctx) => {\r\n      const res = await fetch(`http://localhost:5000/api/link/${ctx.query.id}`,{ method: 'GET', headers: {\r\n          Authorization : \"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MjU1NjEwODJjZjM5OTk4ZTU0N2Y5NzciLCJpYXQiOjE2NDk4NTQyMTMsImV4cCI6MTY0OTg1NzgxM30.zvqkKAKWfBQkqFxU0DzyBlBaPnmBg1qVF2LgagkKI-8\"\r\n      }})\r\n      const json = await res.json()\r\n      console.log(json);\r\n      return { link: json }\r\n    }\r\n   */ /* harmony default export */ __webpack_exports__[\"default\"] = (Link);\nvar _c;\n$RefreshReg$(_c, \"Link\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9kZXRhaWwvW2lkXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXVDO0FBQzZCO0FBQ2I7QUFDWjs7QUFJM0MsU0FBU08sSUFBSSxHQUFHOztJQUNaLElBQU0sS0FBTyxHQUFLTCxpREFBVSxDQUFDRyw2REFBVyxDQUFDLENBQWpDRyxLQUFLO0lBQ2IsSUFBNkJGLEdBQVMsR0FBVEEsdURBQU8sRUFBRSxFQUE5QkcsT0FBTyxHQUFjSCxHQUFTLENBQTlCRyxPQUFPLEVBQUVDLE9BQU8sR0FBS0osR0FBUyxDQUFyQkksT0FBTztJQUN4QixJQUEwQk4sSUFBYyxHQUFkQSwrQ0FBUSxDQUFDLElBQUksQ0FBQyxFQVY1QyxJQVVnQixHQUFjQSxJQUFjLEdBQTVCLEVBVmhCLE9BVXlCLEdBQUtBLElBQWMsR0FBbkI7SUFDckIsSUFBTVMsTUFBTSxHQUFHYixzREFBUyxFQUFFO0lBQzFCLElBQU1jLE1BQU0sR0FBR0QsTUFBTSxDQUFDRSxLQUFLLENBQUNDLEVBQUU7SUFFOUIsSUFBTUMsT0FBTyxHQUFHaEIsa0RBQVcsQ0FBQywyS0FBWTtZQUk5QmlCLE9BQU87Ozs7d0JBSFhWLENBQUFBLEtBQUs7Ozs7O29CQUVQVyxPQUFPLENBQUNDLEdBQUcsQ0FBQ1osS0FBSyxDQUFDOzsyQkFDSUMsT0FBTyxDQUFDLGlDQUFnQyxDQUFTLE9BQVBLLE1BQU0sQ0FBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUU7d0JBQ3JGTyxhQUFhLEVBQUUsU0FBUSxDQUFRLE9BQU5iLEtBQUssQ0FBRTtxQkFDakMsQ0FBQzs7b0JBRklVLE9BQU8sWUFFWDtvQkFFRk4sT0FBTyxDQUFDTSxPQUFPLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7S0FHbkIsSUFBRTtRQUFDVixLQUFLO1FBQUVNLE1BQU07UUFBRUwsT0FBTztLQUFDLENBQUM7SUFFNUJOLGdEQUFTLENBQUMsV0FBTTtRQUNkYyxPQUFPLEVBQUU7S0FDVixFQUFFO1FBQUNBLE9BQU87S0FBQyxDQUFDO0lBRWIsSUFBR1AsT0FBTyxFQUFDO1FBQ1QscUJBQU8sOERBQUNZLEdBQUM7c0JBQUMsU0FBTzs7Ozs7Z0JBQUk7S0FDdEI7SUFFRCxxQkFBTztrQkFDSixDQUFDWixPQUFPLElBQUlDLElBQUksa0JBQUssOERBQUNZLEtBQUc7c0JBQUMsY0FBWTs7Ozs7Z0JBQU07cUJBQzNDO0NBQ0w7R0EvQk1oQixJQUFJOztRQUVvQkQsbURBQU87UUFFckJOLGtEQUFTOzs7QUFKbkJPLEtBQUFBLElBQUk7QUFpQ2IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZGV0YWlsL1tpZF0uanM/ODI5MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgQXV0aENvbnRleHQgfSBmcm9tICcuLi8uLi9jb250ZXh0L0F1dGhDb250ZXh0J1xyXG5pbXBvcnQge3VzZUh0dHB9IGZyb20gJy4uLy4uL2hvb2tzL3VzZUh0dHAnIFxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBMaW5rKCkge1xyXG4gICAgY29uc3QgeyB0b2tlbiB9ID0gdXNlQ29udGV4dChBdXRoQ29udGV4dClcclxuICAgIGNvbnN0IHsgcmVxdWVzdCwgbG9hZGluZyB9ID0gdXNlSHR0cCgpXHJcbiAgICBjb25zdCBbIGxpbmssIHNldExpbmsgXSA9IHVzZVN0YXRlKG51bGwpXHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gICAgY29uc3QgbGlua0lkID0gcm91dGVyLnF1ZXJ5LmlkXHJcblxyXG4gICAgY29uc3QgZ2V0TGluayA9IHVzZUNhbGxiYWNrKGFzeW5jICgpID0+IHtcclxuICAgICAgaWYgKHRva2VuKXtcclxuICAgICAgdHJ5e1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRva2VuKVxyXG4gICAgICAgIGNvbnN0IGZldGNoZWQgPSBhd2FpdCByZXF1ZXN0KGBodHRwOi8vbG9jYWxob3N0OjUwMDAvYXBpL2xpbmsvJHtsaW5rSWR9YCwgJ0dFVCcsIG51bGwsIHtcclxuICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgc2V0TGluayhmZXRjaGVkKVxyXG4gICAgICB9IGNhdGNoKGUpe31cclxuICAgIH1cclxuICAgIH0sIFt0b2tlbiwgbGlua0lkLCByZXF1ZXN0XSlcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICBnZXRMaW5rKClcclxuICAgIH0sIFtnZXRMaW5rXSlcclxuXHJcbiAgICBpZihsb2FkaW5nKXtcclxuICAgICAgcmV0dXJuIDxwPkxvYWRpbmc8L3A+XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIDw+XHJcbiAgICAgeyAhbG9hZGluZyAmJiBsaW5rICYmICg8ZGl2Pk5leHQgc3RhcnM6IDwvZGl2Pil9XHJcbiAgICAgPC8+XHJcbiAgfVxyXG4gIFxyXG4vKiBMaW5rLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIChjdHgpID0+IHtcclxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9hcGkvbGluay8ke2N0eC5xdWVyeS5pZH1gLHsgbWV0aG9kOiAnR0VUJywgaGVhZGVyczoge1xyXG4gICAgICAgICAgQXV0aG9yaXphdGlvbiA6IFwiQmVhcmVyIGV5SmhiR2NpT2lKSVV6STFOaUlzSW5SNWNDSTZJa3BYVkNKOS5leUoxYzJWeVNXUWlPaUkyTWpVMU5qRXdPREpqWmpNNU9UazRaVFUwTjJZNU56Y2lMQ0pwWVhRaU9qRTJORGs0TlRReU1UTXNJbVY0Y0NJNk1UWTBPVGcxTnpneE0zMC56dnFrS0FLV2ZCUWtxRnhVMER6eUJsQmFQbm1CZzFxVkYyTGdhZ2tLSS04XCJcclxuICAgICAgfX0pXHJcbiAgICAgIGNvbnN0IGpzb24gPSBhd2FpdCByZXMuanNvbigpXHJcbiAgICAgIGNvbnNvbGUubG9nKGpzb24pO1xyXG4gICAgICByZXR1cm4geyBsaW5rOiBqc29uIH1cclxuICAgIH1cclxuICAgKi9cclxuICBleHBvcnQgZGVmYXVsdCBMaW5rIl0sIm5hbWVzIjpbInVzZVJvdXRlciIsInVzZUNhbGxiYWNrIiwidXNlQ29udGV4dCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQXV0aENvbnRleHQiLCJ1c2VIdHRwIiwiTGluayIsInRva2VuIiwicmVxdWVzdCIsImxvYWRpbmciLCJsaW5rIiwic2V0TGluayIsInJvdXRlciIsImxpbmtJZCIsInF1ZXJ5IiwiaWQiLCJnZXRMaW5rIiwiZmV0Y2hlZCIsImNvbnNvbGUiLCJsb2ciLCJBdXRob3JpemF0aW9uIiwicCIsImRpdiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/detail/[id].js\n");

/***/ })

});