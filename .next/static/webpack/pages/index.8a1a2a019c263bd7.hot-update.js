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

/***/ "./src/components/App.js":
/*!*******************************!*\
  !*** ./src/components/App.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _SpeakerData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../SpeakerData */ \"./SpeakerData.js\");\n/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header */ \"./src/components/Header.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Speakers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Speakers */ \"./src/components/Speakers.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction App() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(true), showSessions = ref[0], setShowSessions = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"light\"), theme = ref1[0], setTheme = ref1[1];\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: theme === \"light\" ? \"containter-fluid light\" : \"container-fluid dark\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                theme: theme\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\mob.it-minds.dk\\\\React\\\\SpeakerSite\\\\src\\\\components\\\\App.js\",\n                lineNumber: 11,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Speakers__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                data: _SpeakerData__WEBPACK_IMPORTED_MODULE_1__.data,\n                theme: theme,\n                setTheme: setTheme\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\mob.it-minds.dk\\\\React\\\\SpeakerSite\\\\src\\\\components\\\\App.js\",\n                lineNumber: 12,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\mob.it-minds.dk\\\\React\\\\SpeakerSite\\\\src\\\\components\\\\App.js\",\n        lineNumber: 10,\n        columnNumber: 9\n    }, this));\n}\n_s(App, \"+rjej0sXE5SRdzLZWRR/44WX6yA=\");\n_c = App;\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\nvar _c;\n$RefreshReg$(_c, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9BcHAuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUF3QztBQUNYO0FBQ21CO0FBQ2Y7O1NBRXhCTSxHQUFHLEdBQUcsQ0FBQzs7SUFDWixHQUFLLENBQW1DSCxHQUFjLEdBQWRBLCtDQUFRLENBQUMsSUFBSSxHQUE5Q0ksWUFBWSxHQUFxQkosR0FBYyxLQUFqQ0ssZUFBZSxHQUFJTCxHQUFjO0lBQ3RELEdBQUssQ0FBcUJBLElBQWlCLEdBQWpCQSwrQ0FBUSxDQUFDLENBQU8sU0FBbkNNLEtBQUssR0FBY04sSUFBaUIsS0FBN0JPLFFBQVEsR0FBSVAsSUFBaUI7SUFDM0MsTUFBTSw2RUFDRFEsQ0FBRztRQUFDQyxTQUFTLEVBQUVILEtBQUssS0FBSyxDQUFPLFNBQUcsQ0FBd0IsMEJBQUcsQ0FBc0I7O3dGQUNoRlIsK0NBQU07Z0JBQUNRLEtBQUssRUFBRUEsS0FBSzs7Ozs7O3dGQUNuQkosaURBQVE7Z0JBQUNMLElBQUksRUFBRUEsOENBQUk7Z0JBQUVTLEtBQUssRUFBRUEsS0FBSztnQkFBRUMsUUFBUSxFQUFFQSxRQUFROzs7Ozs7Ozs7Ozs7QUFHbEUsQ0FBQztHQVRRSixHQUFHO0tBQUhBLEdBQUc7QUFXWiwrREFBZUEsR0FBRyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0FwcC5qcz9hZTg2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGRhdGEgfSBmcm9tIFwiLi4vLi4vU3BlYWtlckRhdGFcIjtcclxuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi9IZWFkZXJcIjtcclxuaW1wb3J0IHJlYWN0LCB7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBTcGVha2VycyBmcm9tIFwiLi9TcGVha2Vyc1wiO1xyXG5cclxuZnVuY3Rpb24gQXBwKCkge1xyXG4gICAgY29uc3QgW3Nob3dTZXNzaW9ucywgc2V0U2hvd1Nlc3Npb25zXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gICAgY29uc3QgW3RoZW1lLCBzZXRUaGVtZV0gPSB1c2VTdGF0ZShcImxpZ2h0XCIpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dGhlbWUgPT09IFwibGlnaHRcIiA/IFwiY29udGFpbnRlci1mbHVpZCBsaWdodFwiIDogXCJjb250YWluZXItZmx1aWQgZGFya1wifT5cclxuICAgICAgICAgICAgPEhlYWRlciB0aGVtZT17dGhlbWV9Lz5cclxuICAgICAgICAgICAgPFNwZWFrZXJzIGRhdGE9e2RhdGF9IHRoZW1lPXt0aGVtZX0gc2V0VGhlbWU9e3NldFRoZW1lfS8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcDsiXSwibmFtZXMiOlsiZGF0YSIsIkhlYWRlciIsInJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJTcGVha2VycyIsIkFwcCIsInNob3dTZXNzaW9ucyIsInNldFNob3dTZXNzaW9ucyIsInRoZW1lIiwic2V0VGhlbWUiLCJkaXYiLCJjbGFzc05hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/App.js\n");

/***/ }),

/***/ "./src/components/Speakers.js":
/*!************************************!*\
  !*** ./src/components/Speakers.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _SpeakersList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SpeakersList */ \"./src/components/SpeakersList.js\");\n/* harmony import */ var _SpeakersToolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SpeakersToolbar */ \"./src/components/SpeakersToolbar.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nfunction Speakers(data, theme, setTheme) {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SpeakersToolbar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                showSessions: showSessions,\n                setShowSessions: setShowSessions,\n                theme: theme,\n                setTheme: setTheme\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\mob.it-minds.dk\\\\React\\\\SpeakerSite\\\\src\\\\components\\\\Speakers.js\",\n                lineNumber: 7,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SpeakersList__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                data: data\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\mob.it-minds.dk\\\\React\\\\SpeakerSite\\\\src\\\\components\\\\Speakers.js\",\n                lineNumber: 8,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true));\n}\n_c = Speakers;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Speakers);\nvar _c;\n$RefreshReg$(_c, \"Speakers\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TcGVha2Vycy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQXlDO0FBQ007U0FFdENFLFFBQVEsQ0FBQ0MsSUFBSSxFQUFFQyxLQUFLLEVBQUVDLFFBQVEsRUFBRSxDQUFDO0lBQ3RDLE1BQU07O3dGQUVHSix3REFBZTtnQkFBQ0ssWUFBWSxFQUFFQSxZQUFZO2dCQUFFQyxlQUFlLEVBQUVBLGVBQWU7Z0JBQUVILEtBQUssRUFBRUEsS0FBSztnQkFBRUMsUUFBUSxFQUFFQSxRQUFROzs7Ozs7d0ZBQzlHTCxxREFBWTtnQkFBQ0csSUFBSSxFQUFFQSxJQUFJOzs7Ozs7OztBQUdwQyxDQUFDO0tBUFFELFFBQVE7QUFTakIsK0RBQWVBLFFBQVEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9TcGVha2Vycy5qcz8zZDE2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTcGVha2Vyc0xpc3QgZnJvbSBcIi4vU3BlYWtlcnNMaXN0XCI7XHJcbmltcG9ydCBTcGVha2Vyc1Rvb2xiYXIgZnJvbSBcIi4vU3BlYWtlcnNUb29sYmFyXCI7XHJcblxyXG5mdW5jdGlvbiBTcGVha2VycyhkYXRhLCB0aGVtZSwgc2V0VGhlbWUpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPFNwZWFrZXJzVG9vbGJhciBzaG93U2Vzc2lvbnM9e3Nob3dTZXNzaW9uc30gc2V0U2hvd1Nlc3Npb25zPXtzZXRTaG93U2Vzc2lvbnN9IHRoZW1lPXt0aGVtZX0gc2V0VGhlbWU9e3NldFRoZW1lfS8+XHJcbiAgICAgICAgICAgIDxTcGVha2Vyc0xpc3QgZGF0YT17ZGF0YX0vPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTcGVha2VyczsiXSwibmFtZXMiOlsiU3BlYWtlcnNMaXN0IiwiU3BlYWtlcnNUb29sYmFyIiwiU3BlYWtlcnMiLCJkYXRhIiwidGhlbWUiLCJzZXRUaGVtZSIsInNob3dTZXNzaW9ucyIsInNldFNob3dTZXNzaW9ucyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Speakers.js\n");

/***/ })

});