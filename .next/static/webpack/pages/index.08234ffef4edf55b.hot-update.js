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

/***/ "./src/hooks/useRequestDelay.js":
/*!**************************************!*\
  !*** ./src/hooks/useRequestDelay.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"REQUEST_STATUS\": function() { return /* binding */ REQUEST_STATUS; }\n/* harmony export */ });\n/* harmony import */ var C_Users_mob_it_minds_dk_React_SpeakerSite_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_mob_it_minds_dk_React_SpeakerSite_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_mob_it_minds_dk_React_SpeakerSite_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _s = $RefreshSig$();\nvar REQUEST_STATUS = {\n    LOADING: \"loading\",\n    SUCCESS: \"success\",\n    FAILURE: \"failure\"\n};\nfunction useRequestDelay() {\n    var delayTime = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 1000, initialData = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];\n    var updateRecord = function updateRecord(recordUpdated) {\n        var newRecords = data.map(function(rec) {\n            return rec.id === recordUpdated.id ? recordUpdated : rec;\n        });\n        function delayFunction() {\n            return _delayFunction.apply(this, arguments);\n        }\n        function _delayFunction() {\n            _delayFunction = _asyncToGenerator(C_Users_mob_it_minds_dk_React_SpeakerSite_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                return C_Users_mob_it_minds_dk_React_SpeakerSite_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                    while(1)switch(_ctx.prev = _ctx.next){\n                        case 0:\n                            _ctx.prev = 0;\n                            _ctx.next = 3;\n                            return delay(delayTime);\n                        case 3:\n                            setData(newRecords);\n                            _ctx.next = 9;\n                            break;\n                        case 6:\n                            _ctx.prev = 6;\n                            _ctx.t0 = _ctx[\"catch\"](0);\n                            console.log(\"error thrown inside delayFunction\", _ctx.t0);\n                        case 9:\n                        case \"end\":\n                            return _ctx.stop();\n                    }\n                }, _callee, null, [\n                    [\n                        0,\n                        6\n                    ]\n                ]);\n            }));\n            return _delayFunction.apply(this, arguments);\n        }\n        delayFunction();\n    };\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        initialData\n    ]), data = ref[0], setData = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(REQUEST_STATUS.LOADING), requestStatus = ref1[0], setRequestStatus = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), error = ref2[0], setError = ref2[1];\n    var delay = function(ms) {\n        return new Promise(function(resolve) {\n            setTimeout(resolve, ms);\n        });\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        function delayFunc() {\n            return _delayFunc.apply(this, arguments);\n        }\n        function _delayFunc() {\n            _delayFunc = _asyncToGenerator(C_Users_mob_it_minds_dk_React_SpeakerSite_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                return C_Users_mob_it_minds_dk_React_SpeakerSite_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                    while(1)switch(_ctx.prev = _ctx.next){\n                        case 0:\n                            _ctx.prev = 0;\n                            _ctx.next = 3;\n                            return delay(delayTime);\n                        case 3:\n                            setRequestStatus(REQUEST_STATUS.SUCCESS);\n                            setData(initialData);\n                            _ctx.next = 11;\n                            break;\n                        case 7:\n                            _ctx.prev = 7;\n                            _ctx.t0 = _ctx[\"catch\"](0);\n                            setRequestStatus(REQUEST_STATUS.FAILURE);\n                            setError(_ctx.t0);\n                        case 11:\n                        case \"end\":\n                            return _ctx.stop();\n                    }\n                }, _callee, null, [\n                    [\n                        0,\n                        7\n                    ]\n                ]);\n            }));\n            return _delayFunc.apply(this, arguments);\n        }\n        delayFunc();\n    }, []);\n    return {\n        data: data,\n        requestStatus: requestStatus,\n        error: error,\n        updateRecord: updateRecord\n    };\n}\n_s(useRequestDelay, \"Gi32xTEdZ/3jkVmoy1ICHr8T5fM=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (useRequestDelay);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaG9va3MvdXNlUmVxdWVzdERlbGF5LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBMkM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFcEMsR0FBSyxDQUFDRSxjQUFjLEdBQUcsQ0FBQztJQUM3QkMsT0FBTyxFQUFFLENBQVM7SUFDbEJDLE9BQU8sRUFBRSxDQUFTO0lBQ2xCQyxPQUFPLEVBQUUsQ0FBUztBQUNwQixDQUFDO1NBRVFDLGVBQWUsR0FBcUMsQ0FBQztRQUFyQ0MsU0FBUyxvRUFBRyxJQUFJLEVBQUVDLFdBQVcsb0VBQUcsQ0FBQyxDQUFDO1FBd0JoREMsWUFBWSxHQUFyQixRQUFRLENBQUNBLFlBQVksQ0FBQ0MsYUFBYSxFQUFFLENBQUM7UUFDcEMsR0FBSyxDQUFDQyxVQUFVLEdBQUdDLElBQUksQ0FBQ0MsR0FBRyxDQUFDLFFBQVEsQ0FBRUMsR0FBRyxFQUFFLENBQUM7WUFDMUMsTUFBTSxDQUFDQSxHQUFHLENBQUNDLEVBQUUsS0FBS0wsYUFBYSxDQUFDSyxFQUFFLEdBQUdMLGFBQWEsR0FBR0ksR0FBRztRQUMxRCxDQUFDO2lCQUVjRSxhQUFhO21CQUFiQSxjQUFhOztpQkFBYkEsY0FBYTtZQUFiQSxjQUFhLDBLQUE1QixRQUFRLFdBQXVCLENBQUM7Ozs7OzttQ0FFdEJDLEtBQUssQ0FBQ1YsU0FBUzs7NEJBQ3JCVyxPQUFPLENBQUNQLFVBQVU7Ozs7Ozs0QkFFbEJRLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLENBQW1DOzs7Ozs7Ozs7OztZQUVuRCxDQUFDO21CQVBjSixjQUFhOztRQVE1QkEsYUFBYTtJQUNmLENBQUM7O0lBckNELEdBQUssQ0FBbUJoQixHQUF1QixHQUF2QkEsK0NBQVEsQ0FBQyxDQUFDUTtRQUFBQSxXQUFXO0lBQUEsQ0FBQyxHQUF2Q0ksSUFBSSxHQUFhWixHQUF1QixLQUFsQ2tCLE9BQU8sR0FBSWxCLEdBQXVCO0lBQy9DLEdBQUssQ0FBcUNBLElBQWdDLEdBQWhDQSwrQ0FBUSxDQUFDRSxjQUFjLENBQUNDLE9BQU8sR0FBbEVrQixhQUFhLEdBQXNCckIsSUFBZ0MsS0FBcERzQixnQkFBZ0IsR0FBSXRCLElBQWdDO0lBQzFFLEdBQUssQ0FBcUJBLElBQVksR0FBWkEsK0NBQVEsQ0FBQyxDQUFFLElBQTlCdUIsS0FBSyxHQUFjdkIsSUFBWSxLQUF4QndCLFFBQVEsR0FBSXhCLElBQVk7SUFFdEMsR0FBSyxDQUFDaUIsS0FBSyxHQUFHLFFBQVEsQ0FBUFEsRUFBRTtRQUNmLE1BQU0sQ0FBTixHQUFHLENBQUNDLE9BQU8sQ0FBQyxRQUFRLENBQVBDLE9BQU8sRUFBSyxDQUFDO1lBQ3hCQyxVQUFVLENBQUNELE9BQU8sRUFBRUYsRUFBRTtRQUN4QixDQUFDOztJQUVIeEIsZ0RBQVMsQ0FBQyxRQUFRLEdBQUYsQ0FBQztpQkFDQTRCLFNBQVM7bUJBQVRBLFVBQVM7O2lCQUFUQSxVQUFTO1lBQVRBLFVBQVMsMEtBQXhCLFFBQVEsV0FBbUIsQ0FBQzs7Ozs7O21DQUVsQlosS0FBSyxDQUFDVixTQUFTOzs0QkFDckJlLGdCQUFnQixDQUFDcEIsY0FBYyxDQUFDRSxPQUFPOzRCQUN2Q2MsT0FBTyxDQUFDVixXQUFXOzs7Ozs7NEJBRW5CYyxnQkFBZ0IsQ0FBQ3BCLGNBQWMsQ0FBQ0csT0FBTzs0QkFDdkNtQixRQUFROzs7Ozs7Ozs7OztZQUVaLENBQUM7bUJBVGNLLFVBQVM7O1FBVXhCQSxTQUFTO0lBQ1gsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQWtCTCxNQUFNLENBQUMsQ0FBQztRQUFDakIsSUFBSSxFQUFKQSxJQUFJO1FBQUVTLGFBQWEsRUFBYkEsYUFBYTtRQUFFRSxLQUFLLEVBQUxBLEtBQUs7UUFBRWQsWUFBWSxFQUFaQSxZQUFZO0lBQUMsQ0FBQztBQUNyRCxDQUFDO0dBekNRSCxlQUFlO0FBMkN4QiwrREFBZUEsZUFBZSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9ob29rcy91c2VSZXF1ZXN0RGVsYXkuanM/OGVlMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgY29uc3QgUkVRVUVTVF9TVEFUVVMgPSB7XHJcbiAgTE9BRElORzogXCJsb2FkaW5nXCIsXHJcbiAgU1VDQ0VTUzogXCJzdWNjZXNzXCIsXHJcbiAgRkFJTFVSRTogXCJmYWlsdXJlXCIsXHJcbn07XHJcblxyXG5mdW5jdGlvbiB1c2VSZXF1ZXN0RGVsYXkoZGVsYXlUaW1lID0gMTAwMCwgaW5pdGlhbERhdGEgPSBbXSkge1xyXG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKFtpbml0aWFsRGF0YV0pO1xyXG4gIGNvbnN0IFtyZXF1ZXN0U3RhdHVzLCBzZXRSZXF1ZXN0U3RhdHVzXSA9IHVzZVN0YXRlKFJFUVVFU1RfU1RBVFVTLkxPQURJTkcpO1xyXG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gIGNvbnN0IGRlbGF5ID0gKG1zKSA9PlxyXG4gICAgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgICAgc2V0VGltZW91dChyZXNvbHZlLCBtcyk7XHJcbiAgICB9KTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGFzeW5jIGZ1bmN0aW9uIGRlbGF5RnVuYygpIHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBhd2FpdCBkZWxheShkZWxheVRpbWUpO1xyXG4gICAgICAgIHNldFJlcXVlc3RTdGF0dXMoUkVRVUVTVF9TVEFUVVMuU1VDQ0VTUyk7XHJcbiAgICAgICAgc2V0RGF0YShpbml0aWFsRGF0YSk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgc2V0UmVxdWVzdFN0YXR1cyhSRVFVRVNUX1NUQVRVUy5GQUlMVVJFKTtcclxuICAgICAgICBzZXRFcnJvcihlcnJvcik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGRlbGF5RnVuYygpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgZnVuY3Rpb24gdXBkYXRlUmVjb3JkKHJlY29yZFVwZGF0ZWQpIHtcclxuICAgIGNvbnN0IG5ld1JlY29yZHMgPSBkYXRhLm1hcChmdW5jdGlvbiAocmVjKSB7XHJcbiAgICAgIHJldHVybiByZWMuaWQgPT09IHJlY29yZFVwZGF0ZWQuaWQgPyByZWNvcmRVcGRhdGVkIDogcmVjO1xyXG4gICAgfSk7XHJcblxyXG4gICAgYXN5bmMgZnVuY3Rpb24gZGVsYXlGdW5jdGlvbigpIHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBhd2FpdCBkZWxheShkZWxheVRpbWUpO1xyXG4gICAgICAgIHNldERhdGEobmV3UmVjb3Jkcyk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJlcnJvciB0aHJvd24gaW5zaWRlIGRlbGF5RnVuY3Rpb25cIiwgZXJyb3IpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBkZWxheUZ1bmN0aW9uKCk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4geyBkYXRhLCByZXF1ZXN0U3RhdHVzLCBlcnJvciwgdXBkYXRlUmVjb3JkIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHVzZVJlcXVlc3REZWxheTtcclxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiUkVRVUVTVF9TVEFUVVMiLCJMT0FESU5HIiwiU1VDQ0VTUyIsIkZBSUxVUkUiLCJ1c2VSZXF1ZXN0RGVsYXkiLCJkZWxheVRpbWUiLCJpbml0aWFsRGF0YSIsInVwZGF0ZVJlY29yZCIsInJlY29yZFVwZGF0ZWQiLCJuZXdSZWNvcmRzIiwiZGF0YSIsIm1hcCIsInJlYyIsImlkIiwiZGVsYXlGdW5jdGlvbiIsImRlbGF5Iiwic2V0RGF0YSIsImNvbnNvbGUiLCJsb2ciLCJyZXF1ZXN0U3RhdHVzIiwic2V0UmVxdWVzdFN0YXR1cyIsImVycm9yIiwic2V0RXJyb3IiLCJtcyIsIlByb21pc2UiLCJyZXNvbHZlIiwic2V0VGltZW91dCIsImRlbGF5RnVuYyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/hooks/useRequestDelay.js\n");

/***/ })

});