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

/***/ "./src/components/SpeakersToolbar.js":
/*!*******************************************!*\
  !*** ./src/components/SpeakersToolbar.js ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\nfunction SpeakersToolbar(showSessions, setShowSessions, theme, setTheme) {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"toolbar dark-theme-header\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"justify-content-between\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    className: \"toolrow d-flex flex-column flex-lg-row\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: \"d-flex flex-column flex-md-row\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                                    children: \"Show Sessions\\xa0\\xa0\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\mob.it-minds.dk\\\\React\\\\SpeakerSite\\\\src\\\\components\\\\SpeakersToolbar.js\",\n                                    lineNumber: 9,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    className: \"fav\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            type: \"checkbox\",\n                                            checked: showSessions,\n                                            onChange: function(event) {\n                                                setShowSessions(event.target.checked);\n                                            }\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\mob.it-minds.dk\\\\React\\\\SpeakerSite\\\\src\\\\components\\\\SpeakersToolbar.js\",\n                                            lineNumber: 11,\n                                            columnNumber: 19\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"switch\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\mob.it-minds.dk\\\\React\\\\SpeakerSite\\\\src\\\\components\\\\SpeakersToolbar.js\",\n                                            lineNumber: 14,\n                                            columnNumber: 19\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\mob.it-minds.dk\\\\React\\\\SpeakerSite\\\\src\\\\components\\\\SpeakersToolbar.js\",\n                                    lineNumber: 10,\n                                    columnNumber: 17\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\mob.it-minds.dk\\\\React\\\\SpeakerSite\\\\src\\\\components\\\\SpeakersToolbar.js\",\n                            lineNumber: 8,\n                            columnNumber: 15\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: \"d-flex flex-column flex-md-row ml-sm-5 ml-0\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                    children: \"Theme\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\mob.it-minds.dk\\\\React\\\\SpeakerSite\\\\src\\\\components\\\\SpeakersToolbar.js\",\n                                    lineNumber: 18,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    classname: \"dropdown\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                                        className: \"form-control theme\",\n                                        value: theme,\n                                        onChange: function(event) {\n                                            setTheme(event.target.value);\n                                        },\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                value: \"light\",\n                                                children: \"Light\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\mob.it-minds.dk\\\\React\\\\SpeakerSite\\\\src\\\\components\\\\SpeakersToolbar.js\",\n                                                lineNumber: 23,\n                                                columnNumber: 21\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                value: \"dark\",\n                                                children: \"Dark\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\mob.it-minds.dk\\\\React\\\\SpeakerSite\\\\src\\\\components\\\\SpeakersToolbar.js\",\n                                                lineNumber: 24,\n                                                columnNumber: 21\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\mob.it-minds.dk\\\\React\\\\SpeakerSite\\\\src\\\\components\\\\SpeakersToolbar.js\",\n                                        lineNumber: 20,\n                                        columnNumber: 19\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\mob.it-minds.dk\\\\React\\\\SpeakerSite\\\\src\\\\components\\\\SpeakersToolbar.js\",\n                                    lineNumber: 19,\n                                    columnNumber: 17\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\mob.it-minds.dk\\\\React\\\\SpeakerSite\\\\src\\\\components\\\\SpeakersToolbar.js\",\n                            lineNumber: 17,\n                            columnNumber: 15\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\mob.it-minds.dk\\\\React\\\\SpeakerSite\\\\src\\\\components\\\\SpeakersToolbar.js\",\n                    lineNumber: 7,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\mob.it-minds.dk\\\\React\\\\SpeakerSite\\\\src\\\\components\\\\SpeakersToolbar.js\",\n                lineNumber: 6,\n                columnNumber: 11\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\mob.it-minds.dk\\\\React\\\\SpeakerSite\\\\src\\\\components\\\\SpeakersToolbar.js\",\n            lineNumber: 5,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\mob.it-minds.dk\\\\React\\\\SpeakerSite\\\\src\\\\components\\\\SpeakersToolbar.js\",\n        lineNumber: 4,\n        columnNumber: 7\n    }, this));\n}\n_c = SpeakersToolbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SpeakersToolbar);\nvar _c;\n$RefreshReg$(_c, \"SpeakersToolbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TcGVha2Vyc1Rvb2xiYXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7U0FBU0EsZUFBZSxDQUFDQyxZQUFZLEVBQUVDLGVBQWUsRUFBRUMsS0FBSyxFQUFFQyxRQUFRLEVBQUUsQ0FBQztJQUV0RSxNQUFNLDZFQUNIQyxDQUFPO1FBQUNDLFNBQVMsRUFBQyxDQUEyQjs4RkFDM0NDLENBQUc7WUFBQ0QsU0FBUyxFQUFDLENBQVc7a0dBQ3ZCQyxDQUFHO2dCQUFDRCxTQUFTLEVBQUMsQ0FBeUI7c0dBQ3JDRSxDQUFFO29CQUFDRixTQUFTLEVBQUMsQ0FBd0M7O29HQUNuREcsQ0FBRTs0QkFBQ0gsU0FBUyxFQUFDLENBQWdDOzs0R0FDM0NJLENBQUM7OENBQUMsQ0FBeUI7Ozs7Ozs0R0FDM0JDLENBQUs7b0NBQUNMLFNBQVMsRUFBQyxDQUFLOztvSEFDbkJNLENBQUs7NENBQUNDLElBQUksRUFBQyxDQUFVOzRDQUFDQyxPQUFPLEVBQUViLFlBQVk7NENBQUVjLFFBQVEsRUFBRSxRQUFRLENBQVBDLEtBQUssRUFBSyxDQUFDO2dEQUNoRWQsZUFBZSxDQUFDYyxLQUFLLENBQUNDLE1BQU0sQ0FBQ0gsT0FBTzs0Q0FDdEMsQ0FBQzs7Ozs7O29IQUNGSSxDQUFJOzRDQUFDWixTQUFTLEVBQUMsQ0FBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7O29HQUczQkcsQ0FBRTs0QkFBQ0gsU0FBUyxFQUFDLENBQTZDOzs0R0FDeERhLENBQU07OENBQUMsQ0FBSzs7Ozs7OzRHQUNaUixDQUFLO29DQUFDUyxTQUFTLEVBQUMsQ0FBVTswSEFDeEJDLENBQU07d0NBQUNmLFNBQVMsRUFBQyxDQUFvQjt3Q0FBQ2dCLEtBQUssRUFBRW5CLEtBQUs7d0NBQUVZLFFBQVEsRUFBRSxRQUFRLENBQVBDLEtBQUssRUFBSyxDQUFDOzRDQUN2RVosUUFBUSxDQUFDWSxLQUFLLENBQUNDLE1BQU0sQ0FBQ0ssS0FBSzt3Q0FDL0IsQ0FBQzs7d0hBQ0VDLENBQU07Z0RBQUNELEtBQUssRUFBQyxDQUFPOzBEQUFDLENBQUs7Ozs7Ozt3SEFDMUJDLENBQU07Z0RBQUNELEtBQUssRUFBQyxDQUFNOzBEQUFDLENBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUzNDLENBQUM7S0FoQ010QixlQUFlO0FBa0N0QiwrREFBZUEsZUFBZSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1NwZWFrZXJzVG9vbGJhci5qcz8xZWM5Il0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIFNwZWFrZXJzVG9vbGJhcihzaG93U2Vzc2lvbnMsIHNldFNob3dTZXNzaW9ucywgdGhlbWUsIHNldFRoZW1lKSB7XHJcbiAgICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInRvb2xiYXIgZGFyay10aGVtZS1oZWFkZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiPlxyXG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwidG9vbHJvdyBkLWZsZXggZmxleC1jb2x1bW4gZmxleC1sZy1yb3dcIj5cclxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZC1mbGV4IGZsZXgtY29sdW1uIGZsZXgtbWQtcm93XCI+XHJcbiAgICAgICAgICAgICAgICA8Yj5TaG93IFNlc3Npb25zJm5ic3A7Jm5ic3A7PC9iPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZhdlwiPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2hlY2tlZD17c2hvd1Nlc3Npb25zfSBvbkNoYW5nZT17KGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBzZXRTaG93U2Vzc2lvbnMoZXZlbnQudGFyZ2V0LmNoZWNrZWQpXHJcbiAgICAgICAgICAgICAgICAgICAgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3dpdGNoXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJkLWZsZXggZmxleC1jb2x1bW4gZmxleC1tZC1yb3cgbWwtc20tNSBtbC0wXCI+XHJcbiAgICAgICAgICAgICAgICA8c3Ryb25nPlRoZW1lPC9zdHJvbmc+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NuYW1lPVwiZHJvcGRvd25cIj5cclxuICAgICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgdGhlbWVcIiB2YWx1ZT17dGhlbWV9IG9uQ2hhbmdlPXsoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIHNldFRoZW1lKGV2ZW50LnRhcmdldC52YWx1ZSlcclxuICAgICAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImxpZ2h0XCI+TGlnaHQ8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiZGFya1wiPkRhcms8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9zZWN0aW9uPlxyXG4gICAgKTtcclxuICB9XHJcbiAgXHJcbiAgZXhwb3J0IGRlZmF1bHQgU3BlYWtlcnNUb29sYmFyOyJdLCJuYW1lcyI6WyJTcGVha2Vyc1Rvb2xiYXIiLCJzaG93U2Vzc2lvbnMiLCJzZXRTaG93U2Vzc2lvbnMiLCJ0aGVtZSIsInNldFRoZW1lIiwic2VjdGlvbiIsImNsYXNzTmFtZSIsImRpdiIsInVsIiwibGkiLCJiIiwibGFiZWwiLCJpbnB1dCIsInR5cGUiLCJjaGVja2VkIiwib25DaGFuZ2UiLCJldmVudCIsInRhcmdldCIsInNwYW4iLCJzdHJvbmciLCJjbGFzc25hbWUiLCJzZWxlY3QiLCJ2YWx1ZSIsIm9wdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/SpeakersToolbar.js\n");

/***/ })

});