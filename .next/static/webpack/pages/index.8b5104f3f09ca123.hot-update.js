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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _s = $RefreshSig$();\nfunction Session(param) {\n    var title = param.title, room = param.room;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n        className: \"session w-100\",\n        children: [\n            title,\n            \" \",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                children: [\n                    \"Room: \",\n                    room.name\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\mob.it-minds.dk\\\\React\\\\SpeakerSite\\\\src\\\\components\\\\Speaker.js\",\n                lineNumber: 6,\n                columnNumber: 15\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\mob.it-minds.dk\\\\React\\\\SpeakerSite\\\\src\\\\components\\\\Speaker.js\",\n        lineNumber: 5,\n        columnNumber: 5\n    }, this));\n}\n_c = Session;\nfunction Sessions(param) {\n    var sessions = param.sessions;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"sessionBox card h-250\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Session, _objectSpread({}, sessions[0]), void 0, false, {\n            fileName: \"C:\\\\Users\\\\mob.it-minds.dk\\\\React\\\\SpeakerSite\\\\src\\\\components\\\\Speaker.js\",\n            lineNumber: 14,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\mob.it-minds.dk\\\\React\\\\SpeakerSite\\\\src\\\\components\\\\Speaker.js\",\n        lineNumber: 13,\n        columnNumber: 5\n    }, this));\n}\n_c1 = Sessions;\nfunction SpeakerImage(param) {\n    var id = param.id, first = param.first, last = param.last;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"speaker-img d-flex flex-row justify-content-center align-items-center h-300\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n            className: \"contain-fit\",\n            src: \"/images/speaker-\".concat(id, \".jpg\"),\n            width: \"300\",\n            alt: \"\".concat(first, \" \").concat(last)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\mob.it-minds.dk\\\\React\\\\SpeakerSite\\\\src\\\\components\\\\Speaker.js\",\n            lineNumber: 22,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\mob.it-minds.dk\\\\React\\\\SpeakerSite\\\\src\\\\components\\\\Speaker.js\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, this));\n}\n_c2 = SpeakerImage;\nfunction SpeakerFavorite(param) {\n    var favorite = param.favorite, onFavoriteToggle = param.onFavoriteToggle;\n    var doneCallback = function doneCallback() {\n        setInTransition(false);\n        console.log(\"In SpeakerFavorite:doneCallback     \".concat(new Date().getMilliseconds()));\n    };\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), inTransition = ref[0], setInTransition = ref[1];\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"action padB1\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n            onClick: function onClick() {\n                setInTransition(true);\n                return onFavoriteToggle(doneCallback);\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                    className: favorite ? \"fa fa-star orange\" : \"fa fa-star-o orange\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\mob.it-minds.dk\\\\React\\\\SpeakerSite\\\\src\\\\components\\\\Speaker.js\",\n                    lineNumber: 49,\n                    columnNumber: 9\n                }, this),\n                \" Favorite \",\n                inTransition && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: \"fas fa-circle-notch fa-spin\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\mob.it-minds.dk\\\\React\\\\SpeakerSite\\\\src\\\\components\\\\Speaker.js\",\n                    lineNumber: 51,\n                    columnNumber: 26\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\mob.it-minds.dk\\\\React\\\\SpeakerSite\\\\src\\\\components\\\\Speaker.js\",\n            lineNumber: 43,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\mob.it-minds.dk\\\\React\\\\SpeakerSite\\\\src\\\\components\\\\Speaker.js\",\n        lineNumber: 42,\n        columnNumber: 5\n    }, this));\n}\n_s(SpeakerFavorite, \"Hdw5EO+DplCNBEJcNuH8tsP7WZ4=\");\n_c3 = SpeakerFavorite;\nfunction SpeakerDemographics(param) {\n    var first = param.first, last = param.last, bio = param.bio, company = param.company, twitterHandle = param.twitterHandle, favorite = param.favorite, onFavoriteToggle = param.onFavoriteToggle;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"speaker-info\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"d-flex justify-content-between mb-3\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                    className: \"text-truncate w-200\",\n                    children: [\n                        first,\n                        \" \",\n                        last\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\mob.it-minds.dk\\\\React\\\\SpeakerSite\\\\src\\\\components\\\\Speaker.js\",\n                    lineNumber: 69,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\mob.it-minds.dk\\\\React\\\\SpeakerSite\\\\src\\\\components\\\\Speaker.js\",\n                lineNumber: 68,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SpeakerFavorite, {\n                favorite: favorite,\n                onFavoriteToggle: onFavoriteToggle\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\mob.it-minds.dk\\\\React\\\\SpeakerSite\\\\src\\\\components\\\\Speaker.js\",\n                lineNumber: 73,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"card-description\",\n                        children: bio\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\mob.it-minds.dk\\\\React\\\\SpeakerSite\\\\src\\\\components\\\\Speaker.js\",\n                        lineNumber: 78,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"social d-flex flex-row mt-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"company\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                        children: \"Company\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\mob.it-minds.dk\\\\React\\\\SpeakerSite\\\\src\\\\components\\\\Speaker.js\",\n                                        lineNumber: 81,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h6\", {\n                                        children: company\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\mob.it-minds.dk\\\\React\\\\SpeakerSite\\\\src\\\\components\\\\Speaker.js\",\n                                        lineNumber: 82,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\mob.it-minds.dk\\\\React\\\\SpeakerSite\\\\src\\\\components\\\\Speaker.js\",\n                                lineNumber: 80,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"twitter\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                        children: \"Twitter\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\mob.it-minds.dk\\\\React\\\\SpeakerSite\\\\src\\\\components\\\\Speaker.js\",\n                                        lineNumber: 85,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h6\", {\n                                        children: twitterHandle\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\mob.it-minds.dk\\\\React\\\\SpeakerSite\\\\src\\\\components\\\\Speaker.js\",\n                                        lineNumber: 86,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\mob.it-minds.dk\\\\React\\\\SpeakerSite\\\\src\\\\components\\\\Speaker.js\",\n                                lineNumber: 84,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\mob.it-minds.dk\\\\React\\\\SpeakerSite\\\\src\\\\components\\\\Speaker.js\",\n                        lineNumber: 79,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\mob.it-minds.dk\\\\React\\\\SpeakerSite\\\\src\\\\components\\\\Speaker.js\",\n                lineNumber: 77,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\mob.it-minds.dk\\\\React\\\\SpeakerSite\\\\src\\\\components\\\\Speaker.js\",\n        lineNumber: 67,\n        columnNumber: 5\n    }, this));\n}\n_c4 = SpeakerDemographics;\nfunction Speaker(param) {\n    var speaker = param.speaker, showSessions = param.showSessions, onFavoriteToggle = param.onFavoriteToggle;\n    var id = speaker.id, first = speaker.first, last = speaker.last, sessions = speaker.sessions;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"col-xs-12 col-sm-12 col-md-6 col-lg-4 col-sm-12 col-xs-12\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"card card-height p-4 mt-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SpeakerImage, {\n                        id: id,\n                        first: first,\n                        last: last\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\mob.it-minds.dk\\\\React\\\\SpeakerSite\\\\src\\\\components\\\\Speaker.js\",\n                        lineNumber: 99,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SpeakerDemographics, _objectSpread({}, speaker, {\n                        onFavoriteToggle: onFavoriteToggle\n                    }), void 0, false, {\n                        fileName: \"C:\\\\Users\\\\mob.it-minds.dk\\\\React\\\\SpeakerSite\\\\src\\\\components\\\\Speaker.js\",\n                        lineNumber: 100,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\mob.it-minds.dk\\\\React\\\\SpeakerSite\\\\src\\\\components\\\\Speaker.js\",\n                lineNumber: 98,\n                columnNumber: 7\n            }, this),\n            showSessions && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Sessions, {\n                sessions: sessions\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\mob.it-minds.dk\\\\React\\\\SpeakerSite\\\\src\\\\components\\\\Speaker.js\",\n                lineNumber: 102,\n                columnNumber: 24\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\mob.it-minds.dk\\\\React\\\\SpeakerSite\\\\src\\\\components\\\\Speaker.js\",\n        lineNumber: 97,\n        columnNumber: 5\n    }, this));\n}\n_c5 = Speaker;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Speaker);\nvar _c, _c1, _c2, _c3, _c4, _c5;\n$RefreshReg$(_c, \"Session\");\n$RefreshReg$(_c1, \"Sessions\");\n$RefreshReg$(_c2, \"SpeakerImage\");\n$RefreshReg$(_c3, \"SpeakerFavorite\");\n$RefreshReg$(_c4, \"SpeakerDemographics\");\n$RefreshReg$(_c5, \"Speaker\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEtBQUssRUFBRUMsSUFBSSxHQUFlMEIsT0FBTyxDQUExQjFCLElBQUksRUFBRUwsUUFBUSxHQUFLK0IsT0FBTyxDQUFwQi9CLFFBQVE7SUFDakMsTUFBTSw2RUFDSEMsQ0FBRztRQUFDTCxTQUFTLEVBQUMsQ0FBMkQ7O3dGQUN2RUssQ0FBRztnQkFBQ0wsU0FBUyxFQUFDLENBQTJCOztnR0FDdkNNLFlBQVk7d0JBQUNDLEVBQUUsRUFBRUEsRUFBRTt3QkFBRUMsS0FBSyxFQUFFQSxLQUFLO3dCQUFFQyxJQUFJLEVBQUVBLElBQUk7Ozs7OztnR0FDN0NpQixtQkFBbUIsb0JBQUtTLE9BQU87d0JBQUVuQixnQkFBZ0IsRUFBRUEsZ0JBQWdCOzs7Ozs7Ozs7Ozs7WUFFckVvQixZQUFZLGdGQUFLakMsUUFBUTtnQkFBQ0MsUUFBUSxFQUFFQSxRQUFROzs7Ozs7Ozs7Ozs7QUFHbkQsQ0FBQztNQVhROEIsT0FBTztBQWFoQiwrREFBZUEsT0FBTyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1NwZWFrZXIuanM/MjkyZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZnVuY3Rpb24gU2Vzc2lvbih7IHRpdGxlLCByb29tIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPHNwYW4gY2xhc3NOYW1lPVwic2Vzc2lvbiB3LTEwMFwiPlxyXG4gICAgICB7dGl0bGV9IDxzdHJvbmc+Um9vbToge3Jvb20ubmFtZX08L3N0cm9uZz5cclxuICAgIDwvc3Bhbj5cclxuICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBTZXNzaW9ucyh7IHNlc3Npb25zIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzZXNzaW9uQm94IGNhcmQgaC0yNTBcIj5cclxuICAgICAgPFNlc3Npb24gey4uLnNlc3Npb25zWzBdfSAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gU3BlYWtlckltYWdlKHsgaWQsIGZpcnN0LCBsYXN0IH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzcGVha2VyLWltZyBkLWZsZXggZmxleC1yb3cganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtcy1jZW50ZXIgaC0zMDBcIj5cclxuICAgICAgPGltZ1xyXG4gICAgICAgIGNsYXNzTmFtZT1cImNvbnRhaW4tZml0XCJcclxuICAgICAgICBzcmM9e2AvaW1hZ2VzL3NwZWFrZXItJHtpZH0uanBnYH1cclxuICAgICAgICB3aWR0aD1cIjMwMFwiXHJcbiAgICAgICAgYWx0PXtgJHtmaXJzdH0gJHtsYXN0fWB9XHJcbiAgICAgIC8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBTcGVha2VyRmF2b3JpdGUoeyBmYXZvcml0ZSwgb25GYXZvcml0ZVRvZ2dsZSB9KSB7XHJcbiAgY29uc3QgW2luVHJhbnNpdGlvbiwgc2V0SW5UcmFuc2l0aW9uXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBmdW5jdGlvbiBkb25lQ2FsbGJhY2soKSB7XHJcbiAgICBzZXRJblRyYW5zaXRpb24oZmFsc2UpO1xyXG4gICAgY29uc29sZS5sb2coXHJcbiAgICAgIGBJbiBTcGVha2VyRmF2b3JpdGU6ZG9uZUNhbGxiYWNrICAgICAke25ldyBEYXRlKCkuZ2V0TWlsbGlzZWNvbmRzKCl9YFxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImFjdGlvbiBwYWRCMVwiPlxyXG4gICAgICA8c3BhblxyXG4gICAgICAgIG9uQ2xpY2s9e2Z1bmN0aW9uICgpIHtcclxuICAgICAgICAgIHNldEluVHJhbnNpdGlvbih0cnVlKTtcclxuICAgICAgICAgIHJldHVybiBvbkZhdm9yaXRlVG9nZ2xlKGRvbmVDYWxsYmFjayk7XHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxpIGNsYXNzTmFtZT17ZmF2b3JpdGUgPyBcImZhIGZhLXN0YXIgb3JhbmdlXCIgOiBcImZhIGZhLXN0YXItbyBvcmFuZ2VcIn0gLz5cclxuICAgICAgICB7XCIgRmF2b3JpdGUgXCJ9XHJcbiAgICAgICAge2luVHJhbnNpdGlvbiAmJiA8c3BhbiBjbGFzc05hbWU9XCJmYXMgZmEtY2lyY2xlLW5vdGNoIGZhLXNwaW5cIj48L3NwYW4+fVxyXG4gICAgICA8L3NwYW4+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBTcGVha2VyRGVtb2dyYXBoaWNzKHtcclxuICBmaXJzdCxcclxuICBsYXN0LFxyXG4gIGJpbyxcclxuICBjb21wYW55LFxyXG4gIHR3aXR0ZXJIYW5kbGUsXHJcbiAgZmF2b3JpdGUsXHJcbiAgb25GYXZvcml0ZVRvZ2dsZSxcclxufSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInNwZWFrZXItaW5mb1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBtYi0zXCI+XHJcbiAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtdHJ1bmNhdGUgdy0yMDBcIj5cclxuICAgICAgICAgIHtmaXJzdH0ge2xhc3R9XHJcbiAgICAgICAgPC9oMz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxTcGVha2VyRmF2b3JpdGVcclxuICAgICAgICBmYXZvcml0ZT17ZmF2b3JpdGV9XHJcbiAgICAgICAgb25GYXZvcml0ZVRvZ2dsZT17b25GYXZvcml0ZVRvZ2dsZX1cclxuICAgICAgLz5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkLWRlc2NyaXB0aW9uXCI+e2Jpb308L3A+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzb2NpYWwgZC1mbGV4IGZsZXgtcm93IG10LTRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tcGFueVwiPlxyXG4gICAgICAgICAgICA8aDU+Q29tcGFueTwvaDU+XHJcbiAgICAgICAgICAgIDxoNj57Y29tcGFueX08L2g2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInR3aXR0ZXJcIj5cclxuICAgICAgICAgICAgPGg1PlR3aXR0ZXI8L2g1PlxyXG4gICAgICAgICAgICA8aDY+e3R3aXR0ZXJIYW5kbGV9PC9oNj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFNwZWFrZXIoeyBzcGVha2VyLCBzaG93U2Vzc2lvbnMsIG9uRmF2b3JpdGVUb2dnbGUgfSkge1xyXG4gIGNvbnN0IHsgaWQsIGZpcnN0LCBsYXN0LCBzZXNzaW9ucyB9ID0gc3BlYWtlcjtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb2wteHMtMTIgY29sLXNtLTEyIGNvbC1tZC02IGNvbC1sZy00IGNvbC1zbS0xMiBjb2wteHMtMTJcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIGNhcmQtaGVpZ2h0IHAtNCBtdC00XCI+XHJcbiAgICAgICAgPFNwZWFrZXJJbWFnZSBpZD17aWR9IGZpcnN0PXtmaXJzdH0gbGFzdD17bGFzdH0gLz5cclxuICAgICAgICA8U3BlYWtlckRlbW9ncmFwaGljcyB7Li4uc3BlYWtlcn0gb25GYXZvcml0ZVRvZ2dsZT17b25GYXZvcml0ZVRvZ2dsZX0gLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIHtzaG93U2Vzc2lvbnMgJiYgPFNlc3Npb25zIHNlc3Npb25zPXtzZXNzaW9uc30gLz59XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTcGVha2VyO1xyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJTZXNzaW9uIiwidGl0bGUiLCJyb29tIiwic3BhbiIsImNsYXNzTmFtZSIsInN0cm9uZyIsIm5hbWUiLCJTZXNzaW9ucyIsInNlc3Npb25zIiwiZGl2IiwiU3BlYWtlckltYWdlIiwiaWQiLCJmaXJzdCIsImxhc3QiLCJpbWciLCJzcmMiLCJ3aWR0aCIsImFsdCIsIlNwZWFrZXJGYXZvcml0ZSIsImZhdm9yaXRlIiwib25GYXZvcml0ZVRvZ2dsZSIsImRvbmVDYWxsYmFjayIsInNldEluVHJhbnNpdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJEYXRlIiwiZ2V0TWlsbGlzZWNvbmRzIiwiaW5UcmFuc2l0aW9uIiwib25DbGljayIsImkiLCJTcGVha2VyRGVtb2dyYXBoaWNzIiwiYmlvIiwiY29tcGFueSIsInR3aXR0ZXJIYW5kbGUiLCJoMyIsInAiLCJoNSIsImg2IiwiU3BlYWtlciIsInNwZWFrZXIiLCJzaG93U2Vzc2lvbnMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Speaker.js\n");

/***/ })

});