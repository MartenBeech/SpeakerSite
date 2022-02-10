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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_mob_it_minds_dk_React_SpeakerSite_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_mob_it_minds_dk_React_SpeakerSite_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_mob_it_minds_dk_React_SpeakerSite_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Speaker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Speaker */ \"./src/components/Speaker.js\");\n/* harmony import */ var _SpeakerData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../SpeakerData */ \"./SpeakerData.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _s = $RefreshSig$();\nvar State = {\n    loading: \"Loading\",\n    complete: \"Complete\",\n    error: \"Error\"\n};\nfunction SpeakersList(param) {\n    var showSessions = param.showSessions;\n    var onFavoriteToggle = function onFavoriteToggle(id) {\n        var speakersRecPrevious = speakersData.find(function(rec) {\n            return rec.id === id;\n        });\n        var speakerRecUpdated = _objectSpread({}, speakersRecPrevious, {\n            favorite: !speakersRecPrevious.favorite\n        });\n        var speakersDataNew = speakersData.map(function(rec) {\n            return rec.id === id ? speakerRecUpdated : rec;\n        });\n        setSpeakersData(speakersDataNew);\n    };\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]), speakersData = ref[0], setSpeakersData = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"loading\"), state = ref1[0], setState = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"\"), error = ref2[0], setError = ref2[1];\n    var delay = function(ms) {\n        return new Promise(function(resolve) {\n            setTimeout(resolve, ms);\n        });\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function() {\n        function delayFunc() {\n            return _delayFunc.apply(this, arguments);\n        }\n        function _delayFunc() {\n            _delayFunc = _asyncToGenerator(C_Users_mob_it_minds_dk_React_SpeakerSite_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                return C_Users_mob_it_minds_dk_React_SpeakerSite_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                    while(1)switch(_ctx.prev = _ctx.next){\n                        case 0:\n                            _ctx.next = 2;\n                            return delay(2000);\n                        case 2:\n                            setState(State.complete);\n                            setSpeakersData(_SpeakerData__WEBPACK_IMPORTED_MODULE_3__.data);\n                        case 4:\n                        case \"end\":\n                            return _ctx.stop();\n                    }\n                }, _callee);\n            }));\n            return _delayFunc.apply(this, arguments);\n        }\n        delayFunc();\n    }, []);\n    if (state === State.loading) {\n        return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\mob.it-minds.dk\\\\React\\\\SpeakerSite\\\\src\\\\components\\\\SpeakersList.js\",\n            lineNumber: 43,\n            columnNumber: 16\n        }, this));\n    }\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"container speakers-list\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            className: \"row\",\n            children: speakersData.map(function(speaker) {\n                return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_Speaker__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    speaker: speaker,\n                    showSessions: showSessions,\n                    onFavoriteToggle: function() {\n                        onFavoriteToggle(speaker.id);\n                    }\n                }, speaker.id, false, {\n                    fileName: \"C:\\\\Users\\\\mob.it-minds.dk\\\\React\\\\SpeakerSite\\\\src\\\\components\\\\SpeakersList.js\",\n                    lineNumber: 50,\n                    columnNumber: 18\n                }, this));\n            })\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\mob.it-minds.dk\\\\React\\\\SpeakerSite\\\\src\\\\components\\\\SpeakersList.js\",\n            lineNumber: 48,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\mob.it-minds.dk\\\\React\\\\SpeakerSite\\\\src\\\\components\\\\SpeakersList.js\",\n        lineNumber: 47,\n        columnNumber: 5\n    }, this));\n}\n_s(SpeakersList, \"fMoC7ykpQ2SXNYqL4oteGqF7nY4=\");\n_c = SpeakersList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SpeakersList);\nvar _c;\n$RefreshReg$(_c, \"SpeakersList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TcGVha2Vyc0xpc3QuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQStCO0FBQ087QUFDRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFekMsR0FBSyxDQUFDSSxLQUFLLEdBQUcsQ0FBQztJQUNYQyxPQUFPLEVBQUUsQ0FBUztJQUNsQkMsUUFBUSxFQUFFLENBQVU7SUFDcEJDLEtBQUssRUFBRSxDQUFPO0FBQ2xCLENBQUM7U0FFUUMsWUFBWSxDQUFDLEtBQWdCLEVBQUUsQ0FBQztRQUFqQkMsWUFBWSxHQUFkLEtBQWdCLENBQWRBLFlBQVk7UUFnQnZCQyxnQkFBZ0IsR0FBekIsUUFBUSxDQUFDQSxnQkFBZ0IsQ0FBQ0MsRUFBRSxFQUFFLENBQUM7UUFDM0IsR0FBSyxDQUFDQyxtQkFBbUIsR0FBR0MsWUFBWSxDQUFDQyxJQUFJLENBQUMsUUFBUSxDQUFFQyxHQUFHLEVBQUUsQ0FBQztZQUMxRCxNQUFNLENBQUNBLEdBQUcsQ0FBQ0osRUFBRSxLQUFLQSxFQUFFO1FBQ3hCLENBQUM7UUFDRCxHQUFLLENBQUNLLGlCQUFpQixxQkFDaEJKLG1CQUFtQjtZQUN0QkssUUFBUSxHQUFHTCxtQkFBbUIsQ0FBQ0ssUUFBUTs7UUFFM0MsR0FBSyxDQUFDQyxlQUFlLEdBQUdMLFlBQVksQ0FBQ00sR0FBRyxDQUFDLFFBQVEsQ0FBRUosR0FBRyxFQUFFLENBQUM7WUFDckQsTUFBTSxDQUFDQSxHQUFHLENBQUNKLEVBQUUsS0FBS0EsRUFBRSxHQUFHSyxpQkFBaUIsR0FBR0QsR0FBRztRQUNsRCxDQUFDO1FBRURLLGVBQWUsQ0FBQ0YsZUFBZTtJQUNuQyxDQUFDOztJQTNCRCxHQUFLLENBQW1DaEIsR0FBWSxHQUFaQSwrQ0FBUSxDQUFDLENBQUMsQ0FBQyxHQUE1Q1csWUFBWSxHQUFxQlgsR0FBWSxLQUEvQmtCLGVBQWUsR0FBSWxCLEdBQVk7SUFDcEQsR0FBSyxDQUFxQkEsSUFBbUIsR0FBbkJBLCtDQUFRLENBQUMsQ0FBUyxXQUFyQ21CLEtBQUssR0FBY25CLElBQW1CLEtBQS9Cb0IsUUFBUSxHQUFJcEIsSUFBbUI7SUFDN0MsR0FBSyxDQUFxQkEsSUFBWSxHQUFaQSwrQ0FBUSxDQUFDLENBQUUsSUFBOUJLLEtBQUssR0FBY0wsSUFBWSxLQUF4QnFCLFFBQVEsR0FBSXJCLElBQVk7SUFFdEMsR0FBSyxDQUFDc0IsS0FBSyxHQUFHLFFBQVEsQ0FBUEMsRUFBRTtRQUFLLE1BQU0sQ0FBTixHQUFHLENBQUNDLE9BQU8sQ0FBQyxRQUFRLENBQVBDLE9BQU8sRUFBSyxDQUFDQztZQUFBQSxVQUFVLENBQUNELE9BQU8sRUFBRUYsRUFBRTtRQUFDLENBQUM7O0lBQ3hFdEIsZ0RBQVMsQ0FBQyxRQUFRLEdBQUYsQ0FBQztpQkFDRTBCLFNBQVM7bUJBQVRBLFVBQVM7O2lCQUFUQSxVQUFTO1lBQVRBLFVBQVMsMEtBQXhCLFFBQVEsV0FBbUIsQ0FBQzs7Ozs7bUNBQ2xCTCxLQUFLLENBQUMsSUFBSTs7NEJBQ2hCRixRQUFRLENBQUNsQixLQUFLLENBQUNFLFFBQVE7NEJBQ3ZCYyxlQUFlLENBQUNuQiw4Q0FBSTs7Ozs7O1lBQ3hCLENBQUM7bUJBSmM0QixVQUFTOztRQUt4QkEsU0FBUztJQUNiLENBQUMsRUFBRSxDQUFDLENBQUM7SUFpQkwsRUFBRSxFQUFFUixLQUFLLEtBQUtqQixLQUFLLENBQUNDLE9BQU8sRUFBRSxDQUFDO1FBQzFCLE1BQU0sNkVBQUV5QixDQUFHO3NCQUFDLENBQVU7Ozs7OztJQUMxQixDQUFDO0lBRUgsTUFBTSw2RUFDSEEsQ0FBRztRQUFDQyxTQUFTLEVBQUMsQ0FBeUI7OEZBQ3JDRCxDQUFHO1lBQUNDLFNBQVMsRUFBQyxDQUFLO3NCQUNqQmxCLFlBQVksQ0FBQ00sR0FBRyxDQUFDLFFBQVEsQ0FBRWEsT0FBTyxFQUFFLENBQUM7Z0JBQ3BDLE1BQU0sNkVBQUVoQyxnREFBTztvQkFBa0JnQyxPQUFPLEVBQUVBLE9BQU87b0JBQUV2QixZQUFZLEVBQUVBLFlBQVk7b0JBQUVDLGdCQUFnQixFQUFFLFFBQVEsR0FBRixDQUFDQTt3QkFBQUEsZ0JBQWdCLENBQUNzQixPQUFPLENBQUNyQixFQUFFO29CQUFDLENBQUM7bUJBQWhIcUIsT0FBTyxDQUFDckIsRUFBRTs7Ozs7WUFDakMsQ0FBQzs7Ozs7Ozs7Ozs7QUFJVCxDQUFDO0dBNUNRSCxZQUFZO0tBQVpBLFlBQVk7QUE4Q3JCLCtEQUFlQSxZQUFZLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU3BlYWtlcnNMaXN0LmpzPzJhNjYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNwZWFrZXIgZnJvbSBcIi4vU3BlYWtlclwiO1xyXG5pbXBvcnQge2RhdGF9IGZyb20gXCIuLi8uLi9TcGVha2VyRGF0YVwiXHJcbmltcG9ydCB7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSBcInJlYWN0XCJcclxuXHJcbmNvbnN0IFN0YXRlID0ge1xyXG4gICAgbG9hZGluZzogXCJMb2FkaW5nXCIsXHJcbiAgICBjb21wbGV0ZTogXCJDb21wbGV0ZVwiLFxyXG4gICAgZXJyb3I6IFwiRXJyb3JcIlxyXG59XHJcblxyXG5mdW5jdGlvbiBTcGVha2Vyc0xpc3QoeyBzaG93U2Vzc2lvbnMgfSkge1xyXG5cclxuICAgIGNvbnN0IFtzcGVha2Vyc0RhdGEsIHNldFNwZWFrZXJzRGF0YV0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlKFwibG9hZGluZ1wiKTtcclxuICAgIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gICAgY29uc3QgZGVsYXkgPSAobXMpID0+IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7c2V0VGltZW91dChyZXNvbHZlLCBtcyl9KVxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBhc3luYyBmdW5jdGlvbiBkZWxheUZ1bmMoKSB7XHJcbiAgICAgICAgICAgIGF3YWl0IGRlbGF5KDIwMDApO1xyXG4gICAgICAgICAgICBzZXRTdGF0ZShTdGF0ZS5jb21wbGV0ZSk7XHJcbiAgICAgICAgICAgIHNldFNwZWFrZXJzRGF0YShkYXRhKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZGVsYXlGdW5jKCk7XHJcbiAgICB9LCBbXSlcclxuXHJcbiAgICBmdW5jdGlvbiBvbkZhdm9yaXRlVG9nZ2xlKGlkKSB7XHJcbiAgICAgICAgY29uc3Qgc3BlYWtlcnNSZWNQcmV2aW91cyA9IHNwZWFrZXJzRGF0YS5maW5kKGZ1bmN0aW9uIChyZWMpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlYy5pZCA9PT0gaWRcclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zdCBzcGVha2VyUmVjVXBkYXRlZCA9IHtcclxuICAgICAgICAgICAgLi4uc3BlYWtlcnNSZWNQcmV2aW91cyxcclxuICAgICAgICAgICAgZmF2b3JpdGU6ICFzcGVha2Vyc1JlY1ByZXZpb3VzLmZhdm9yaXRlXHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb25zdCBzcGVha2Vyc0RhdGFOZXcgPSBzcGVha2Vyc0RhdGEubWFwKGZ1bmN0aW9uIChyZWMpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlYy5pZCA9PT0gaWQgPyBzcGVha2VyUmVjVXBkYXRlZCA6IHJlYztcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgc2V0U3BlYWtlcnNEYXRhKHNwZWFrZXJzRGF0YU5ldyk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHN0YXRlID09PSBTdGF0ZS5sb2FkaW5nKSB7XHJcbiAgICAgICAgcmV0dXJuIDxkaXY+TG9hZGluZy4uLjwvZGl2PlxyXG4gICAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgc3BlYWtlcnMtbGlzdFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgIHtzcGVha2Vyc0RhdGEubWFwKGZ1bmN0aW9uIChzcGVha2VyKSB7XHJcbiAgICAgICAgICByZXR1cm4gPFNwZWFrZXIga2V5PXtzcGVha2VyLmlkfSBzcGVha2VyPXtzcGVha2VyfSBzaG93U2Vzc2lvbnM9e3Nob3dTZXNzaW9uc30gb25GYXZvcml0ZVRvZ2dsZT17KCkgPT4ge29uRmF2b3JpdGVUb2dnbGUoc3BlYWtlci5pZCl9fS8+O1xyXG4gICAgICAgIH0pfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNwZWFrZXJzTGlzdDsiXSwibmFtZXMiOlsiU3BlYWtlciIsImRhdGEiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIlN0YXRlIiwibG9hZGluZyIsImNvbXBsZXRlIiwiZXJyb3IiLCJTcGVha2Vyc0xpc3QiLCJzaG93U2Vzc2lvbnMiLCJvbkZhdm9yaXRlVG9nZ2xlIiwiaWQiLCJzcGVha2Vyc1JlY1ByZXZpb3VzIiwic3BlYWtlcnNEYXRhIiwiZmluZCIsInJlYyIsInNwZWFrZXJSZWNVcGRhdGVkIiwiZmF2b3JpdGUiLCJzcGVha2Vyc0RhdGFOZXciLCJtYXAiLCJzZXRTcGVha2Vyc0RhdGEiLCJzdGF0ZSIsInNldFN0YXRlIiwic2V0RXJyb3IiLCJkZWxheSIsIm1zIiwiUHJvbWlzZSIsInJlc29sdmUiLCJzZXRUaW1lb3V0IiwiZGVsYXlGdW5jIiwiZGl2IiwiY2xhc3NOYW1lIiwic3BlYWtlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/SpeakersList.js\n");

/***/ })

});