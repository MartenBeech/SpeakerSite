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

/***/ "./src/components/Speaker.js":
/*!***********************************!*\
  !*** ./src/components/Speaker.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nfunction Session(param) {\n    var title = param.title, room = param.room;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n        className: \"session w-100\",\n        children: [\n            title,\n            \" \",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                children: [\n                    \"Room: \",\n                    room.name\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\mob.it-minds.dk\\\\React\\\\SpeakerSite\\\\src\\\\components\\\\Speaker.js\",\n                lineNumber: 4,\n                columnNumber: 17\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\mob.it-minds.dk\\\\React\\\\SpeakerSite\\\\src\\\\components\\\\Speaker.js\",\n        lineNumber: 3,\n        columnNumber: 7\n    }, this));\n}\n_c = Session;\nfunction Sessions(param) {\n    var sessions = param.sessions;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"sessionBox card h-250\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Session, _objectSpread({}, sessions[0]), void 0, false, {\n            fileName: \"C:\\\\Users\\\\mob.it-minds.dk\\\\React\\\\SpeakerSite\\\\src\\\\components\\\\Speaker.js\",\n            lineNumber: 12,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\mob.it-minds.dk\\\\React\\\\SpeakerSite\\\\src\\\\components\\\\Speaker.js\",\n        lineNumber: 11,\n        columnNumber: 7\n    }, this));\n}\n_c1 = Sessions;\nfunction SpeakerImage(param) {\n    var id = param.id, first = param.first, last = param.last;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"speaker-img d-flex flex-row justify-content-center align-items-center h-300\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n            className: \"contain-fit\",\n            src: \"/images/speaker-\".concat(id, \".jpg\"),\n            width: \"300\",\n            alt: \"\".concat(first, \" \").concat(last)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\mob.it-minds.dk\\\\React\\\\SpeakerSite\\\\src\\\\components\\\\Speaker.js\",\n            lineNumber: 20,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\mob.it-minds.dk\\\\React\\\\SpeakerSite\\\\src\\\\components\\\\Speaker.js\",\n        lineNumber: 19,\n        columnNumber: 7\n    }, this));\n}\n_c2 = SpeakerImage;\nfunction SpeakerFavorite(param) {\n    var favorite = param.favorite;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"action padB1\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                className: favorite ? \"fa fa-star orange\" : \"fa fa-star-o orange\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\mob.it-minds.dk\\\\React\\\\SpeakerSite\\\\src\\\\components\\\\Speaker.js\",\n                lineNumber: 34,\n                columnNumber: 11\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\mob.it-minds.dk\\\\React\\\\SpeakerSite\\\\src\\\\components\\\\Speaker.js\",\n            lineNumber: 33,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\mob.it-minds.dk\\\\React\\\\SpeakerSite\\\\src\\\\components\\\\Speaker.js\",\n        lineNumber: 32,\n        columnNumber: 7\n    }, this));\n}\n_c3 = SpeakerFavorite;\nfunction SpeakerDemographics(param) {\n    var first = param.first, last = param.last, bio = param.bio, company = param.company, twitterHandle = param.twitterHandle, favorite = param.favorite;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"speaker-info\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"d-flex justify-content-between mb-3\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                    className: \"text-truncate w-200\",\n                    children: [\n                        first,\n                        \" \",\n                        last\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\mob.it-minds.dk\\\\React\\\\SpeakerSite\\\\src\\\\components\\\\Speaker.js\",\n                    lineNumber: 53,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\mob.it-minds.dk\\\\React\\\\SpeakerSite\\\\src\\\\components\\\\Speaker.js\",\n                lineNumber: 52,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SpeakerFavorite, {\n                favorite: favorite\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\mob.it-minds.dk\\\\React\\\\SpeakerSite\\\\src\\\\components\\\\Speaker.js\",\n                lineNumber: 57,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"card-description\",\n                        children: bio\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\mob.it-minds.dk\\\\React\\\\SpeakerSite\\\\src\\\\components\\\\Speaker.js\",\n                        lineNumber: 59,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"social d-flex flex-row mt-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"company\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                        children: \"Company\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\mob.it-minds.dk\\\\React\\\\SpeakerSite\\\\src\\\\components\\\\Speaker.js\",\n                                        lineNumber: 62,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h6\", {\n                                        children: company\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\mob.it-minds.dk\\\\React\\\\SpeakerSite\\\\src\\\\components\\\\Speaker.js\",\n                                        lineNumber: 63,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\mob.it-minds.dk\\\\React\\\\SpeakerSite\\\\src\\\\components\\\\Speaker.js\",\n                                lineNumber: 61,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"twitter\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                        children: \"Twitter\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\mob.it-minds.dk\\\\React\\\\SpeakerSite\\\\src\\\\components\\\\Speaker.js\",\n                                        lineNumber: 66,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h6\", {\n                                        children: twitterHandle\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\mob.it-minds.dk\\\\React\\\\SpeakerSite\\\\src\\\\components\\\\Speaker.js\",\n                                        lineNumber: 67,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\mob.it-minds.dk\\\\React\\\\SpeakerSite\\\\src\\\\components\\\\Speaker.js\",\n                                lineNumber: 65,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\mob.it-minds.dk\\\\React\\\\SpeakerSite\\\\src\\\\components\\\\Speaker.js\",\n                        lineNumber: 60,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\mob.it-minds.dk\\\\React\\\\SpeakerSite\\\\src\\\\components\\\\Speaker.js\",\n                lineNumber: 58,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\mob.it-minds.dk\\\\React\\\\SpeakerSite\\\\src\\\\components\\\\Speaker.js\",\n        lineNumber: 51,\n        columnNumber: 7\n    }, this));\n}\n_c4 = SpeakerDemographics;\nfunction Speaker(param) {\n    var speaker = param.speaker, showSessions = param.showSessions;\n    var id = speaker.id, first = speaker.first, last = speaker.last, sessions = speaker.sessions;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"col-xs-12 col-sm-12 col-md-6 col-lg-4 col-sm-12 col-xs-12\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"card card-height p-4 mt-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SpeakerImage, {\n                        id: id,\n                        first: first,\n                        last: last\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\mob.it-minds.dk\\\\React\\\\SpeakerSite\\\\src\\\\components\\\\Speaker.js\",\n                        lineNumber: 80,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SpeakerDemographics, _objectSpread({}, speaker), void 0, false, {\n                        fileName: \"C:\\\\Users\\\\mob.it-minds.dk\\\\React\\\\SpeakerSite\\\\src\\\\components\\\\Speaker.js\",\n                        lineNumber: 81,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\mob.it-minds.dk\\\\React\\\\SpeakerSite\\\\src\\\\components\\\\Speaker.js\",\n                lineNumber: 79,\n                columnNumber: 9\n            }, this),\n            showSessions && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Sessions, {\n                sessions: sessions\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\mob.it-minds.dk\\\\React\\\\SpeakerSite\\\\src\\\\components\\\\Speaker.js\",\n                lineNumber: 83,\n                columnNumber: 26\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\mob.it-minds.dk\\\\React\\\\SpeakerSite\\\\src\\\\components\\\\Speaker.js\",\n        lineNumber: 78,\n        columnNumber: 7\n    }, this));\n}\n_c5 = Speaker;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Speaker);\nvar _c, _c1, _c2, _c3, _c4, _c5;\n$RefreshReg$(_c, \"Session\");\n$RefreshReg$(_c1, \"Sessions\");\n$RefreshReg$(_c2, \"SpeakerImage\");\n$RefreshReg$(_c3, \"SpeakerFavorite\");\n$RefreshReg$(_c4, \"SpeakerDemographics\");\n$RefreshReg$(_c5, \"Speaker\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFTOztnSEFDckJ1QixDQUFFO2tEQUFDLENBQU87Ozs7OztnSEFDVkMsQ0FBRTtrREFBRUosYUFBYTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTTlCLENBQUM7TUEvQlFILG1CQUFtQjtTQWlDbkJRLE9BQU8sQ0FBQyxLQUF5QixFQUFFLENBQUM7UUFBMUJDLE9BQU8sR0FBVCxLQUF5QixDQUF2QkEsT0FBTyxFQUFFQyxZQUFZLEdBQXZCLEtBQXlCLENBQWRBLFlBQVk7SUFDdEMsR0FBSyxDQUFHcEIsRUFBRSxHQUE0Qm1CLE9BQU8sQ0FBckNuQixFQUFFLEVBQUVDLEtBQUssR0FBcUJrQixPQUFPLENBQWpDbEIsS0FBSyxFQUFFQyxJQUFJLEdBQWVpQixPQUFPLENBQTFCakIsSUFBSSxFQUFFTCxRQUFRLEdBQUtzQixPQUFPLENBQXBCdEIsUUFBUTtJQUNqQyxNQUFNLDZFQUNIQyxDQUFHO1FBQUNMLFNBQVMsRUFBQyxDQUEyRDs7d0ZBQ3ZFSyxDQUFHO2dCQUFDTCxTQUFTLEVBQUMsQ0FBMkI7O2dHQUN2Q00sWUFBWTt3QkFBQ0MsRUFBRSxFQUFFQSxFQUFFO3dCQUFFQyxLQUFLLEVBQUVBLEtBQUs7d0JBQUVDLElBQUksRUFBRUEsSUFBSTs7Ozs7O2dHQUM3Q1EsbUJBQW1CLG9CQUFLUyxPQUFPOzs7Ozs7Ozs7OztZQUVqQ0MsWUFBWSxnRkFBS3hCLFFBQVE7Z0JBQUNDLFFBQVEsRUFBRUEsUUFBUTs7Ozs7Ozs7Ozs7O0FBR25ELENBQUM7TUFYUXFCLE9BQU87QUFhaEIsK0RBQWVBLE9BQU8sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9TcGVha2VyLmpzPzI5MmQiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gU2Vzc2lvbih7IHRpdGxlLCByb29tIH0pIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNlc3Npb24gdy0xMDBcIj5cclxuICAgICAgICB7dGl0bGV9IDxzdHJvbmc+Um9vbToge3Jvb20ubmFtZX08L3N0cm9uZz5cclxuICAgICAgPC9zcGFuPlxyXG4gICAgKTtcclxuICB9XHJcbiAgXHJcbiAgZnVuY3Rpb24gU2Vzc2lvbnMoeyBzZXNzaW9ucyB9KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlc3Npb25Cb3ggY2FyZCBoLTI1MFwiPlxyXG4gICAgICAgIDxTZXNzaW9uIHsuLi5zZXNzaW9uc1swXX0gLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxuICBcclxuICBmdW5jdGlvbiBTcGVha2VySW1hZ2UoeyBpZCwgZmlyc3QsIGxhc3QgfSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGVha2VyLWltZyBkLWZsZXggZmxleC1yb3cganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtcy1jZW50ZXIgaC0zMDBcIj5cclxuICAgICAgICA8aW1nXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJjb250YWluLWZpdFwiXHJcbiAgICAgICAgICBzcmM9e2AvaW1hZ2VzL3NwZWFrZXItJHtpZH0uanBnYH1cclxuICAgICAgICAgIHdpZHRoPVwiMzAwXCJcclxuICAgICAgICAgIGFsdD17YCR7Zmlyc3R9ICR7bGFzdH1gfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIFNwZWFrZXJGYXZvcml0ZSh7ZmF2b3JpdGV9KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjdGlvbiBwYWRCMVwiPlxyXG4gICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgPGkgY2xhc3NOYW1lPXtmYXZvcml0ZSA/IFwiZmEgZmEtc3RhciBvcmFuZ2VcIiA6IFwiZmEgZmEtc3Rhci1vIG9yYW5nZVwifS8+XHJcblxyXG4gICAgICAgIDwvc3Bhbj5cclxuXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxuICBcclxuICBmdW5jdGlvbiBTcGVha2VyRGVtb2dyYXBoaWNzKHtcclxuICAgIGZpcnN0LFxyXG4gICAgbGFzdCxcclxuICAgIGJpbyxcclxuICAgIGNvbXBhbnksXHJcbiAgICB0d2l0dGVySGFuZGxlLFxyXG4gICAgZmF2b3JpdGUsXHJcbiAgfSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGVha2VyLWluZm9cIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBtYi0zXCI+XHJcbiAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC10cnVuY2F0ZSB3LTIwMFwiPlxyXG4gICAgICAgICAgICB7Zmlyc3R9IHtsYXN0fVxyXG4gICAgICAgICAgPC9oMz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8U3BlYWtlckZhdm9yaXRlIGZhdm9yaXRlPXtmYXZvcml0ZX0vPlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkLWRlc2NyaXB0aW9uXCI+e2Jpb308L3A+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNvY2lhbCBkLWZsZXggZmxleC1yb3cgbXQtNFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbXBhbnlcIj5cclxuICAgICAgICAgICAgICA8aDU+Q29tcGFueTwvaDU+XHJcbiAgICAgICAgICAgICAgPGg2Pntjb21wYW55fTwvaDY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInR3aXR0ZXJcIj5cclxuICAgICAgICAgICAgICA8aDU+VHdpdHRlcjwvaDU+XHJcbiAgICAgICAgICAgICAgPGg2Pnt0d2l0dGVySGFuZGxlfTwvaDY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbiAgXHJcbiAgZnVuY3Rpb24gU3BlYWtlcih7IHNwZWFrZXIsIHNob3dTZXNzaW9ucyB9KSB7XHJcbiAgICBjb25zdCB7IGlkLCBmaXJzdCwgbGFzdCwgc2Vzc2lvbnMgfSA9IHNwZWFrZXI7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC14cy0xMiBjb2wtc20tMTIgY29sLW1kLTYgY29sLWxnLTQgY29sLXNtLTEyIGNvbC14cy0xMlwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBjYXJkLWhlaWdodCBwLTQgbXQtNFwiPlxyXG4gICAgICAgICAgPFNwZWFrZXJJbWFnZSBpZD17aWR9IGZpcnN0PXtmaXJzdH0gbGFzdD17bGFzdH0gLz5cclxuICAgICAgICAgIDxTcGVha2VyRGVtb2dyYXBoaWNzIHsuLi5zcGVha2VyfSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIHtzaG93U2Vzc2lvbnMgJiYgPFNlc3Npb25zIHNlc3Npb25zPXtzZXNzaW9uc30gLz59XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbiAgXHJcbiAgZXhwb3J0IGRlZmF1bHQgU3BlYWtlcjsiXSwibmFtZXMiOlsiU2Vzc2lvbiIsInRpdGxlIiwicm9vbSIsInNwYW4iLCJjbGFzc05hbWUiLCJzdHJvbmciLCJuYW1lIiwiU2Vzc2lvbnMiLCJzZXNzaW9ucyIsImRpdiIsIlNwZWFrZXJJbWFnZSIsImlkIiwiZmlyc3QiLCJsYXN0IiwiaW1nIiwic3JjIiwid2lkdGgiLCJhbHQiLCJTcGVha2VyRmF2b3JpdGUiLCJmYXZvcml0ZSIsImkiLCJTcGVha2VyRGVtb2dyYXBoaWNzIiwiYmlvIiwiY29tcGFueSIsInR3aXR0ZXJIYW5kbGUiLCJoMyIsInAiLCJoNSIsImg2IiwiU3BlYWtlciIsInNwZWFrZXIiLCJzaG93U2Vzc2lvbnMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Speaker.js\n");

/***/ })

});