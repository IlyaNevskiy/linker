"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var materialize_css_dist_css_materialize_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! materialize-css/dist/css/materialize.min.css */ \"./node_modules/materialize-css/dist/css/materialize.min.css\");\n/* harmony import */ var materialize_css_dist_css_materialize_min_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(materialize_css_dist_css_materialize_min_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/index.css */ \"./styles/index.css\");\n/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_index_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _hooks_useAuth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/useAuth */ \"./hooks/useAuth.js\");\n/* harmony import */ var _context_AuthContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../context/AuthContext */ \"./context/AuthContext.js\");\n/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Navbar */ \"./components/Navbar.js\");\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\n\n\n\n// import 'materialize-css'\n\n\n\nvar _s = $RefreshSig$();\n/* import { useEffect } from 'react'\r\nimport { useRouter } from 'next/router' */ function MyApp(param) {\n    var Component = param.Component, pageProps = param.pageProps;\n    _s();\n    var ref = (0,_hooks_useAuth__WEBPACK_IMPORTED_MODULE_3__.useAuth)(), token = ref.token, login = ref.login, logout = ref.logout, userId = ref.userId;\n    console.log(token);\n    var isAuthenticated = !!token;\n    /*   const router = useRouter()\r\n */ /*   useEffect(() => {\r\n    if(isAuthenticated){\r\n        router.push('/')\r\n    }\r\n}, [token]) */ return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_AuthContext__WEBPACK_IMPORTED_MODULE_4__.AuthContext.Provider, {\n        value: {\n            token: token,\n            login: login,\n            logout: logout,\n            userId: userId,\n            isAuthenticated: isAuthenticated\n        },\n        children: [\n            isAuthenticated && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Navbar__WEBPACK_IMPORTED_MODULE_5__.Navbar, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Ilya\\\\linker\\\\client\\\\pages\\\\_app.js\",\n                lineNumber: 25,\n                columnNumber: 28\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {\n                fileName: \"C:\\\\Users\\\\Ilya\\\\linker\\\\client\\\\pages\\\\_app.js\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Ilya\\\\linker\\\\client\\\\pages\\\\_app.js\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, this);\n}\n_s(MyApp, \"WXmOZgoSMemUdSCdwDnD15BCPVc=\", false, function() {\n    return [\n        _hooks_useAuth__WEBPACK_IMPORTED_MODULE_3__.useAuth\n    ];\n});\n_c = MyApp;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);\nvar _c;\n$RefreshReg$(_c, \"MyApp\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBcUQ7QUFDekI7QUFDNUIsMkJBQTJCO0FBQ2U7QUFDVTtBQUNQOztBQUM3QztRQUdpQkksU0FBUyxHQUFYLEtBQXdCLENBQXRCQSxTQUFTLEVBQUVDLFNBQVMsR0FBdEIsS0FBd0IsQ0FBWEEsU0FBUzs7SUFDbkMsSUFBeUNMO0lBQ3pDVSxPQUFPLENBQUNDLEVBQUFBLHVEQUFTLENBQUM7SUFDbEIsSUFBTUMsZUFBZTtJQUN2QjtRQVEwQkUsS0FBSyxFQUFFO1lBQzNCUixLQUFLLEVBQUxBLEtBQUs7WUFBRUMsS0FBSyxFQUFMQSxLQUFLO1lBQUVDLE1BQU0sRUFBTkE7O1lBQWdCSSxlQUFlLEVBQWZBLE9BQUFBLDZEQUFBQSxDQUFlO1NBQzlDOztZQUNHQTs7Ozs7Ozs7O29CQUMwQjs7Ozs7O1lBQ1AsQ0FDdEI7Q0FDRjtHQW5CTVQsS0FBSzs7UUFDNkJILE9BQU87OztBQUR6Q0c7QUFxQlAsZUFBZUEsS0FBSyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICdtYXRlcmlhbGl6ZS1jc3MvZGlzdC9jc3MvbWF0ZXJpYWxpemUubWluLmNzcydcclxuaW1wb3J0IFwiLi4vc3R5bGVzL2luZGV4LmNzc1wiXHJcbi8vIGltcG9ydCAnbWF0ZXJpYWxpemUtY3NzJ1xyXG5pbXBvcnQgeyB1c2VBdXRoIH0gZnJvbSAnLi4vaG9va3MvdXNlQXV0aCdcclxuaW1wb3J0IHsgQXV0aENvbnRleHQgfSBmcm9tICcuLi9jb250ZXh0L0F1dGhDb250ZXh0J1xyXG5pbXBvcnQgeyBOYXZiYXIgfSBmcm9tICcuLi9jb21wb25lbnRzL05hdmJhcidcclxuLyogaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJyAqL1xyXG5cclxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XHJcbiAgY29uc3QgeyB0b2tlbiwgbG9naW4sIGxvZ291dCwgdXNlcklkIH0gPSB1c2VBdXRoKClcclxuICBjb25zb2xlLmxvZyh0b2tlbilcclxuICBjb25zdCBpc0F1dGhlbnRpY2F0ZWQgPSAhIXRva2VuXHJcbi8qICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICovXHJcbi8qICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmKGlzQXV0aGVudGljYXRlZCl7XHJcbiAgICAgICAgcm91dGVyLnB1c2goJy8nKVxyXG4gICAgfVxyXG59LCBbdG9rZW5dKSAqL1xyXG4gICAgcmV0dXJuICggXHJcbiAgICA8QXV0aENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3tcclxuICAgICAgdG9rZW4sIGxvZ2luLCBsb2dvdXQsIHVzZXJJZCwgaXNBdXRoZW50aWNhdGVkXHJcbiAgICB9fT4gIFxyXG4gICAgICB7IGlzQXV0aGVudGljYXRlZCAmJiA8TmF2YmFyIC8+IH1cclxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgPC9BdXRoQ29udGV4dC5Qcm92aWRlcj5cclxuICAgIClcclxuICB9XHJcbiAgXHJcbiAgZXhwb3J0IGRlZmF1bHQgTXlBcHAiXSwibmFtZXMiOlsidXNlQXV0aCIsIkF1dGhDb250ZXh0IiwiTmF2YmFyIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJ0b2tlbiIsImxvZ2luIiwibG9nb3V0IiwidXNlcklkIiwiY29uc29sZSIsImxvZyIsImlzQXV0aGVudGljYXRlZCIsIlByb3ZpZGVyIiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ })

});