"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Speakers.js":
/*!************************************!*\
  !*** ./src/components/Speakers.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _SpeakersList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SpeakersList */ \"./src/components/SpeakersList.js\");\n/* harmony import */ var _SpeakersToolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SpeakersToolbar */ \"./src/components/SpeakersToolbar.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Speakers(param) {\n    var data = param.data, theme = param.theme, setTheme = param.setTheme;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true), showSessions = ref[0], setShowSessions = ref[1];\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SpeakersToolbar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                showSessions: showSessions,\n                setShowSessions: setShowSessions,\n                theme: theme,\n                setTheme: setTheme\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\mob.it-minds.dk\\\\React\\\\SpeakerSite\\\\src\\\\components\\\\Speakers.js\",\n                lineNumber: 9,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SpeakersList__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                data: data,\n                showSessions: showSessions\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\mob.it-minds.dk\\\\React\\\\SpeakerSite\\\\src\\\\components\\\\Speakers.js\",\n                lineNumber: 10,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true));\n}\n_s(Speakers, \"6J2wAdZ2kjF0faG/fj33ZXGxstA=\");\n_c = Speakers;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Speakers);\nvar _c;\n$RefreshReg$(_c, \"Speakers\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TcGVha2Vycy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBZ0Q7QUFDUDtBQUNNOztTQUV0Q0ssUUFBUSxDQUFDLEtBQXVCLEVBQUUsQ0FBQztRQUF6QkMsSUFBSSxHQUFMLEtBQXVCLENBQXRCQSxJQUFJLEVBQUVDLEtBQUssR0FBWixLQUF1QixDQUFoQkEsS0FBSyxFQUFFQyxRQUFRLEdBQXRCLEtBQXVCLENBQVRBLFFBQVE7O0lBQ3BDLEdBQUssQ0FBbUNQLEdBQWMsR0FBZEEsK0NBQVEsQ0FBQyxJQUFJLEdBQTlDUSxZQUFZLEdBQXFCUixHQUFjLEtBQWpDUyxlQUFlLEdBQUlULEdBQWM7SUFDdEQsTUFBTTs7d0ZBRUdHLHdEQUFlO2dCQUFDSyxZQUFZLEVBQUVBLFlBQVk7Z0JBQUVDLGVBQWUsRUFBRUEsZUFBZTtnQkFBRUgsS0FBSyxFQUFFQSxLQUFLO2dCQUFFQyxRQUFRLEVBQUVBLFFBQVE7Ozs7Ozt3RkFDOUdMLHFEQUFZO2dCQUFDRyxJQUFJLEVBQUVBLElBQUk7Z0JBQUVHLFlBQVksRUFBRUEsWUFBWTs7Ozs7Ozs7QUFHaEUsQ0FBQztHQVJRSixRQUFRO0tBQVJBLFFBQVE7QUFVakIsK0RBQWVBLFFBQVEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9TcGVha2Vycy5qcz8zZDE2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCByZWFjdCwge3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgU3BlYWtlcnNMaXN0IGZyb20gXCIuL1NwZWFrZXJzTGlzdFwiO1xyXG5pbXBvcnQgU3BlYWtlcnNUb29sYmFyIGZyb20gXCIuL1NwZWFrZXJzVG9vbGJhclwiO1xyXG5cclxuZnVuY3Rpb24gU3BlYWtlcnMoe2RhdGEsIHRoZW1lLCBzZXRUaGVtZX0pIHtcclxuICAgIGNvbnN0IFtzaG93U2Vzc2lvbnMsIHNldFNob3dTZXNzaW9uc10gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPFNwZWFrZXJzVG9vbGJhciBzaG93U2Vzc2lvbnM9e3Nob3dTZXNzaW9uc30gc2V0U2hvd1Nlc3Npb25zPXtzZXRTaG93U2Vzc2lvbnN9IHRoZW1lPXt0aGVtZX0gc2V0VGhlbWU9e3NldFRoZW1lfS8+XHJcbiAgICAgICAgICAgIDxTcGVha2Vyc0xpc3QgZGF0YT17ZGF0YX0gc2hvd1Nlc3Npb25zPXtzaG93U2Vzc2lvbnN9Lz5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3BlYWtlcnM7Il0sIm5hbWVzIjpbInJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJTcGVha2Vyc0xpc3QiLCJTcGVha2Vyc1Rvb2xiYXIiLCJTcGVha2VycyIsImRhdGEiLCJ0aGVtZSIsInNldFRoZW1lIiwic2hvd1Nlc3Npb25zIiwic2V0U2hvd1Nlc3Npb25zIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Speakers.js\n");

/***/ })

});