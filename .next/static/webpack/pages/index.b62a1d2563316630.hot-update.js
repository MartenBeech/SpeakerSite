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

/***/ "./src/components/SpeakersList.js":
/*!****************************************!*\
  !*** ./src/components/SpeakersList.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Speaker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Speaker */ \"./src/components/Speaker.js\");\n/* harmony import */ var react_placeholder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-placeholder */ \"./node_modules/react-placeholder/lib/index.js\");\n/* harmony import */ var _hooks_useRequestDelay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/useRequestDelay */ \"./src/hooks/useRequestDelay.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _s = $RefreshSig$();\nfunction SpeakersList(param) {\n    var showSessions = param.showSessions;\n    _s();\n    var ref = (0,_hooks_useRequestDelay__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(2000), speakersData = ref.data, requestStatus = ref.requestStatus, error = ref.error, onFavoriteToggle = ref.updateRecord;\n    if (requestStatus === _hooks_useRequestDelay__WEBPACK_IMPORTED_MODULE_3__.REQUEST_STATUS.FAILURE) {\n        return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"text-danger\",\n            children: [\n                \"ERROR: \",\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                    children: [\n                        \"loading Speaker Data Failed \",\n                        error\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\mob.it-minds.dk\\\\React\\\\SpeakerSite\\\\src\\\\components\\\\SpeakersList.js\",\n                    lineNumber: 16,\n                    columnNumber: 16\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\mob.it-minds.dk\\\\React\\\\SpeakerSite\\\\src\\\\components\\\\SpeakersList.js\",\n            lineNumber: 15,\n            columnNumber: 7\n        }, this));\n    }\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container speakers-list\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_placeholder__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            type: \"media\",\n            rows: 15,\n            className: \"speakerslist-placeholder\",\n            ready: requestStatus === _hooks_useRequestDelay__WEBPACK_IMPORTED_MODULE_3__.REQUEST_STATUS.SUCCESS,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"row\",\n                children: speakersData.map(function(speaker) {\n                    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Speaker__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        speaker: speaker,\n                        showSessions: showSessions,\n                        onFavoriteToggle: function() {\n                            onFavoriteToggle(speaker.id);\n                        }\n                    }, speaker.id, false, {\n                        fileName: \"C:\\\\Users\\\\mob.it-minds.dk\\\\React\\\\SpeakerSite\\\\src\\\\components\\\\SpeakersList.js\",\n                        lineNumber: 32,\n                        columnNumber: 15\n                    }, this));\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\mob.it-minds.dk\\\\React\\\\SpeakerSite\\\\src\\\\components\\\\SpeakersList.js\",\n                lineNumber: 29,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\mob.it-minds.dk\\\\React\\\\SpeakerSite\\\\src\\\\components\\\\SpeakersList.js\",\n            lineNumber: 23,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\mob.it-minds.dk\\\\React\\\\SpeakerSite\\\\src\\\\components\\\\SpeakersList.js\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, this));\n}\n_s(SpeakersList, \"+CEOqNf7qbM+OFaPHzI5Ia0QEaQ=\", false, function() {\n    return [\n        _hooks_useRequestDelay__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n    ];\n});\n_c = SpeakersList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SpeakersList);\nvar _c;\n$RefreshReg$(_c, \"SpeakersList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TcGVha2Vyc0xpc3QuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBK0I7QUFDaUI7QUFDMEI7O1NBRWpFSSxZQUFZLENBQUMsS0FBZ0IsRUFBRSxDQUFDO1FBQWpCQyxZQUFZLEdBQWQsS0FBZ0IsQ0FBZEEsWUFBWTs7SUFDbEMsR0FBSyxDQUtESCxHQUFxQixHQUFyQkEsa0VBQWUsQ0FBQyxJQUFJLEdBSmhCSSxZQUFZLEdBSWhCSixHQUFxQixDQUp2QkssSUFBSSxFQUNKQyxhQUFhLEdBR1hOLEdBQXFCLENBSHZCTSxhQUFhLEVBQ2JDLEtBQUssR0FFSFAsR0FBcUIsQ0FGdkJPLEtBQUssRUFDU0MsZ0JBQWdCLEdBQzVCUixHQUFxQixDQUR2QlMsWUFBWTtJQUdkLEVBQUUsRUFBRUgsYUFBYSxLQUFLTCwwRUFBc0IsRUFBRSxDQUFDO1FBQzdDLE1BQU0sNkVBQ0hVLENBQUc7WUFBQ0MsU0FBUyxFQUFDLENBQWE7O2dCQUFDLENBQ3BCOzRGQUFDQyxDQUFDOzt3QkFBQyxDQUE0Qjt3QkFBQ04sS0FBSzs7Ozs7Ozs7Ozs7OztJQUdsRCxDQUFDO0lBRUQsTUFBTSw2RUFDSEksQ0FBRztRQUFDQyxTQUFTLEVBQUMsQ0FBeUI7OEZBQ3JDYix5REFBZ0I7WUFDZmUsSUFBSSxFQUFDLENBQU87WUFDWkMsSUFBSSxFQUFFLEVBQUU7WUFDUkgsU0FBUyxFQUFDLENBQTBCO1lBQ3BDSSxLQUFLLEVBQUVWLGFBQWEsS0FBS0wsMEVBQXNCO2tHQUU5Q1UsQ0FBRztnQkFBQ0MsU0FBUyxFQUFDLENBQUs7MEJBQ2pCUixZQUFZLENBQUNjLEdBQUcsQ0FBQyxRQUFRLENBQUVDLE9BQU8sRUFBRSxDQUFDO29CQUNwQyxNQUFNLDZFQUNIckIsZ0RBQU87d0JBRU5xQixPQUFPLEVBQUVBLE9BQU87d0JBQ2hCaEIsWUFBWSxFQUFFQSxZQUFZO3dCQUMxQkssZ0JBQWdCLEVBQUUsUUFBUSxHQUFGLENBQUM7NEJBQ3ZCQSxnQkFBZ0IsQ0FBQ1csT0FBTyxDQUFDQyxFQUFFO3dCQUM3QixDQUFDO3VCQUxJRCxPQUFPLENBQUNDLEVBQUU7Ozs7O2dCQVFyQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FBS1gsQ0FBQztHQXpDUWxCLFlBQVk7O1FBTWZGLDhEQUFlOzs7S0FOWkUsWUFBWTtBQTJDckIsK0RBQWVBLFlBQVksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9TcGVha2Vyc0xpc3QuanM/MmE2NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU3BlYWtlciBmcm9tIFwiLi9TcGVha2VyXCI7XHJcbmltcG9ydCBSZWFjdFBsYWNlaG9sZGVyIGZyb20gXCJyZWFjdC1wbGFjZWhvbGRlclwiO1xyXG5pbXBvcnQgdXNlUmVxdWVzdERlbGF5LCB7IFJFUVVFU1RfU1RBVFVTIH0gZnJvbSBcIi4uL2hvb2tzL3VzZVJlcXVlc3REZWxheVwiO1xyXG5cclxuZnVuY3Rpb24gU3BlYWtlcnNMaXN0KHsgc2hvd1Nlc3Npb25zIH0pIHtcclxuICBjb25zdCB7XHJcbiAgICBkYXRhOiBzcGVha2Vyc0RhdGEsXHJcbiAgICByZXF1ZXN0U3RhdHVzLFxyXG4gICAgZXJyb3IsXHJcbiAgICB1cGRhdGVSZWNvcmQ6IG9uRmF2b3JpdGVUb2dnbGUsXHJcbiAgfSA9IHVzZVJlcXVlc3REZWxheSgyMDAwKTtcclxuXHJcbiAgaWYgKHJlcXVlc3RTdGF0dXMgPT09IFJFUVVFU1RfU1RBVFVTLkZBSUxVUkUpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1kYW5nZXJcIj5cclxuICAgICAgICBFUlJPUjogPGI+bG9hZGluZyBTcGVha2VyIERhdGEgRmFpbGVkIHtlcnJvcn08L2I+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBzcGVha2Vycy1saXN0XCI+XHJcbiAgICAgIDxSZWFjdFBsYWNlaG9sZGVyXHJcbiAgICAgICAgdHlwZT1cIm1lZGlhXCJcclxuICAgICAgICByb3dzPXsxNX1cclxuICAgICAgICBjbGFzc05hbWU9XCJzcGVha2Vyc2xpc3QtcGxhY2Vob2xkZXJcIlxyXG4gICAgICAgIHJlYWR5PXtyZXF1ZXN0U3RhdHVzID09PSBSRVFVRVNUX1NUQVRVUy5TVUNDRVNTfVxyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgIHtzcGVha2Vyc0RhdGEubWFwKGZ1bmN0aW9uIChzcGVha2VyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgPFNwZWFrZXJcclxuICAgICAgICAgICAgICAgIGtleT17c3BlYWtlci5pZH1cclxuICAgICAgICAgICAgICAgIHNwZWFrZXI9e3NwZWFrZXJ9XHJcbiAgICAgICAgICAgICAgICBzaG93U2Vzc2lvbnM9e3Nob3dTZXNzaW9uc31cclxuICAgICAgICAgICAgICAgIG9uRmF2b3JpdGVUb2dnbGU9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgb25GYXZvcml0ZVRvZ2dsZShzcGVha2VyLmlkKTtcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH0pfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L1JlYWN0UGxhY2Vob2xkZXI+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTcGVha2Vyc0xpc3Q7XHJcbiJdLCJuYW1lcyI6WyJTcGVha2VyIiwiUmVhY3RQbGFjZWhvbGRlciIsInVzZVJlcXVlc3REZWxheSIsIlJFUVVFU1RfU1RBVFVTIiwiU3BlYWtlcnNMaXN0Iiwic2hvd1Nlc3Npb25zIiwic3BlYWtlcnNEYXRhIiwiZGF0YSIsInJlcXVlc3RTdGF0dXMiLCJlcnJvciIsIm9uRmF2b3JpdGVUb2dnbGUiLCJ1cGRhdGVSZWNvcmQiLCJGQUlMVVJFIiwiZGl2IiwiY2xhc3NOYW1lIiwiYiIsInR5cGUiLCJyb3dzIiwicmVhZHkiLCJTVUNDRVNTIiwibWFwIiwic3BlYWtlciIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/SpeakersList.js\n");

/***/ })

});