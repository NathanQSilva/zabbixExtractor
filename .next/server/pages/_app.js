/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/contexts/RequestsContext.tsx":
/*!******************************************!*\
  !*** ./src/contexts/RequestsContext.tsx ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"RequestsContext\": function() { return /* binding */ RequestsContext; },\n/* harmony export */   \"RequestsContextProvider\": function() { return /* binding */ RequestsContextProvider; },\n/* harmony export */   \"useRequests\": function() { return /* binding */ useRequests; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _jsxFileName = \"/home/nathan-silva/Documentos/Repositorios/zabbixExtractor/src/contexts/RequestsContext.tsx\";\n//// External imports\n\n //// Internal imports\n//// Types\n\n// Creation of context\nconst RequestsContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_2__.createContext)({}); // Creation of consts and functions shared\n\nfunction RequestsContextProvider({\n  children\n}) {\n  const {\n    0: rawData,\n    1: setRawData\n  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n\n  function convertData(arr) {\n    return arr.map(obj => {\n      return {\n        x: obj.clock,\n        y: obj.value\n      };\n    });\n  }\n\n  function DecryptData(data) {\n    var CryptoJS = __webpack_require__(/*! crypto-js */ \"crypto-js\");\n\n    var bytes = CryptoJS.AES.decrypt(data, 'Z@bb1x3xtr@ct0r');\n    var dataDecrypted = bytes.toString(CryptoJS.enc.Utf8);\n    return dataDecrypted;\n  }\n\n  function HistoryGet() {\n    axios__WEBPACK_IMPORTED_MODULE_1___default()({\n      url: sessionStorage.getItem(\"zabbixServer\"),\n      //zabbixServer,//\n      method: 'POST',\n      headers: {\n        \"Content-Type\": \"application/json\"\n      },\n      data: JSON.stringify({\n        \"jsonrpc\": \"2.0\",\n        \"method\": \"history.get\",\n        \"params\": {\n          \"output\": [\"clock\", \"value\"],\n          \"history\": 0,\n          \"itemids\": \"29177\",\n          \"sortfield\": \"clock\",\n          \"sortorder\": \"DESC\",\n          \"limit\": 10000\n        },\n        \"auth\": sessionStorage.getItem(\"zabbixKey\"),\n        //zabbixKey,//\n        \"id\": 1\n      })\n    }).then(response => {\n      convertData(response.data.result);\n    });\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(RequestsContext.Provider, {\n    value: {\n      HistoryGet,\n      rawData\n    },\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 80,\n    columnNumber: 9\n  }, this);\n}\nconst useRequests = () => {\n  return (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(RequestsContext);\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly96YWJiaXhleHRyYWN0b3IvLi9zcmMvY29udGV4dHMvUmVxdWVzdHNDb250ZXh0LnRzeD80NjVlIl0sIm5hbWVzIjpbIlJlcXVlc3RzQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJSZXF1ZXN0c0NvbnRleHRQcm92aWRlciIsImNoaWxkcmVuIiwicmF3RGF0YSIsInNldFJhd0RhdGEiLCJ1c2VTdGF0ZSIsImNvbnZlcnREYXRhIiwiYXJyIiwibWFwIiwib2JqIiwieCIsImNsb2NrIiwieSIsInZhbHVlIiwiRGVjcnlwdERhdGEiLCJkYXRhIiwiQ3J5cHRvSlMiLCJyZXF1aXJlIiwiYnl0ZXMiLCJBRVMiLCJkZWNyeXB0IiwiZGF0YURlY3J5cHRlZCIsInRvU3RyaW5nIiwiZW5jIiwiVXRmOCIsIkhpc3RvcnlHZXQiLCJheGlvcyIsInVybCIsInNlc3Npb25TdG9yYWdlIiwiZ2V0SXRlbSIsIm1ldGhvZCIsImhlYWRlcnMiLCJKU09OIiwic3RyaW5naWZ5IiwidGhlbiIsInJlc3BvbnNlIiwicmVzdWx0IiwidXNlUmVxdWVzdHMiLCJ1c2VDb250ZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7Q0FHQTtBQUVBOztBQWlCQTtBQUNPLE1BQU1BLGVBQWUsZ0JBQUdDLG9EQUFhLENBQUMsRUFBRCxDQUFyQyxDLENBRVA7O0FBQ08sU0FBU0MsdUJBQVQsQ0FBaUM7QUFBRUM7QUFBRixDQUFqQyxFQUE2RTtBQUNoRixRQUFNO0FBQUEsT0FBRUMsT0FBRjtBQUFBLE9BQVdDO0FBQVgsTUFBMEJDLCtDQUFRLENBQUMsRUFBRCxDQUF4Qzs7QUFFQSxXQUFTQyxXQUFULENBQXFCQyxHQUFyQixFQUEwQjtBQUN0QixXQUFPQSxHQUFHLENBQUNDLEdBQUosQ0FBU0MsR0FBRyxJQUFJO0FBQ25CLGFBQU87QUFDSEMsU0FBQyxFQUFFRCxHQUFHLENBQUNFLEtBREo7QUFFSEMsU0FBQyxFQUFFSCxHQUFHLENBQUNJO0FBRkosT0FBUDtBQUlILEtBTE0sQ0FBUDtBQU1IOztBQUVELFdBQVNDLFdBQVQsQ0FBcUJDLElBQXJCLEVBQW1DO0FBQy9CLFFBQUlDLFFBQVEsR0FBR0MsbUJBQU8sQ0FBQyw0QkFBRCxDQUF0Qjs7QUFFQSxRQUFJQyxLQUFLLEdBQUdGLFFBQVEsQ0FBQ0csR0FBVCxDQUFhQyxPQUFiLENBQXFCTCxJQUFyQixFQUEyQixpQkFBM0IsQ0FBWjtBQUNBLFFBQUlNLGFBQWEsR0FBR0gsS0FBSyxDQUFDSSxRQUFOLENBQWVOLFFBQVEsQ0FBQ08sR0FBVCxDQUFhQyxJQUE1QixDQUFwQjtBQUVBLFdBQVFILGFBQVI7QUFDSDs7QUFFRCxXQUFTSSxVQUFULEdBQXNCO0FBQ2xCQyxnREFBSyxDQUFDO0FBQ0ZDLFNBQUcsRUFBRUMsY0FBYyxDQUFDQyxPQUFmLENBQXVCLGNBQXZCLENBREg7QUFDMEM7QUFDNUNDLFlBQU0sRUFBRSxNQUZOO0FBR0ZDLGFBQU8sRUFBRTtBQUNMLHdCQUFnQjtBQURYLE9BSFA7QUFNRmhCLFVBQUksRUFBRWlCLElBQUksQ0FBQ0MsU0FBTCxDQUFlO0FBQ2pCLG1CQUFXLEtBRE07QUFFakIsa0JBQVUsYUFGTztBQUdqQixrQkFBVTtBQUNOLG9CQUFVLENBQ0UsT0FERixFQUVFLE9BRkYsQ0FESjtBQUtOLHFCQUFXLENBTEw7QUFNTixxQkFBVyxPQU5MO0FBT04sdUJBQWEsT0FQUDtBQVFOLHVCQUFhLE1BUlA7QUFTTixtQkFBUztBQVRILFNBSE87QUFjakIsZ0JBQVFMLGNBQWMsQ0FBQ0MsT0FBZixDQUF1QixXQUF2QixDQWRTO0FBYzJCO0FBQzVDLGNBQU07QUFmVyxPQUFmO0FBTkosS0FBRCxDQUFMLENBd0JDSyxJQXhCRCxDQXdCT0MsUUFBRCxJQUFjO0FBQ2hCN0IsaUJBQVcsQ0FBQzZCLFFBQVEsQ0FBQ3BCLElBQVQsQ0FBY3FCLE1BQWYsQ0FBWDtBQUNILEtBMUJEO0FBMkJIOztBQUVELHNCQUNJLDhEQUFDLGVBQUQsQ0FBaUIsUUFBakI7QUFDSSxTQUFLLEVBQUk7QUFDTFgsZ0JBREs7QUFFTHRCO0FBRkssS0FEYjtBQUFBLGNBTUtEO0FBTkw7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBWUg7QUFFTSxNQUFNbUMsV0FBVyxHQUFHLE1BQU07QUFDN0IsU0FBT0MsaURBQVUsQ0FBQ3ZDLGVBQUQsQ0FBakI7QUFDSCxDQUZNIiwiZmlsZSI6Ii4vc3JjL2NvbnRleHRzL1JlcXVlc3RzQ29udGV4dC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8vIEV4dGVybmFsIGltcG9ydHNcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VTdGF0ZSwgUmVhY3ROb2RlLCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuXG4vLy8vIEludGVybmFsIGltcG9ydHNcblxuLy8vLyBUeXBlc1xudHlwZSBkYXRhQ2hhcnQgPSB7XG4gICAgeDogbnVtYmVyO1xuICAgIHk6IG51bWJlcjtcbn1cblxuLy8gVHlwZSBmb3IgYWxsIGV4cG9ydHMgb2YgY29udGV4dFxudHlwZSBSZXF1ZXN0c0NvbnRleHREYXRhID0ge1xuICAgIEhpc3RvcnlHZXQ6ICAoKSA9PiB2b2lkO1xuICAgIHJhd0RhdGE6IGRhdGFDaGFydFtdO1xufVxuXG4vL1R5cGUgZm9yIGNvbnRleHQgYWNjZXNzIGluIGFsbCBjb2RlXG50eXBlIFJlcXVlc3RzQ29udGV4dFByb3ZpZGVyUHJvcHMgPSB7XG4gICAgY2hpbGRyZW46IFJlYWN0Tm9kZTtcbn1cblxuLy8gQ3JlYXRpb24gb2YgY29udGV4dFxuZXhwb3J0IGNvbnN0IFJlcXVlc3RzQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoe30gYXMgUmVxdWVzdHNDb250ZXh0RGF0YSk7XG5cbi8vIENyZWF0aW9uIG9mIGNvbnN0cyBhbmQgZnVuY3Rpb25zIHNoYXJlZFxuZXhwb3J0IGZ1bmN0aW9uIFJlcXVlc3RzQ29udGV4dFByb3ZpZGVyKHsgY2hpbGRyZW4gfTogUmVxdWVzdHNDb250ZXh0UHJvdmlkZXJQcm9wcykge1xuICAgIGNvbnN0IFsgcmF3RGF0YSwgc2V0UmF3RGF0YSBdID0gdXNlU3RhdGUoW10pXG5cbiAgICBmdW5jdGlvbiBjb252ZXJ0RGF0YShhcnIpIHtcbiAgICAgICAgcmV0dXJuIGFyci5tYXAoIG9iaiA9PiB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHg6IG9iai5jbG9jayxcbiAgICAgICAgICAgICAgICB5OiBvYmoudmFsdWVcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIERlY3J5cHREYXRhKGRhdGE6IHN0cmluZykge1xuICAgICAgICB2YXIgQ3J5cHRvSlMgPSByZXF1aXJlKFwiY3J5cHRvLWpzXCIpO1xuXG4gICAgICAgIHZhciBieXRlcyA9IENyeXB0b0pTLkFFUy5kZWNyeXB0KGRhdGEsICdaQGJiMXgzeHRyQGN0MHInKTtcbiAgICAgICAgdmFyIGRhdGFEZWNyeXB0ZWQgPSBieXRlcy50b1N0cmluZyhDcnlwdG9KUy5lbmMuVXRmOCk7XG5cbiAgICAgICAgcmV0dXJuIChkYXRhRGVjcnlwdGVkKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIEhpc3RvcnlHZXQoKSB7XG4gICAgICAgIGF4aW9zKHtcbiAgICAgICAgICAgIHVybDogc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcInphYmJpeFNlcnZlclwiKSwvL3phYmJpeFNlcnZlciwvL1xuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkYXRhOiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgXCJqc29ucnBjXCI6IFwiMi4wXCIsXG4gICAgICAgICAgICAgICAgXCJtZXRob2RcIjogXCJoaXN0b3J5LmdldFwiLFxuICAgICAgICAgICAgICAgIFwicGFyYW1zXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJvdXRwdXRcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNsb2NrXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIFwiaGlzdG9yeVwiOiAwLFxuICAgICAgICAgICAgICAgICAgICBcIml0ZW1pZHNcIjogXCIyOTE3N1wiLFxuICAgICAgICAgICAgICAgICAgICBcInNvcnRmaWVsZFwiOiBcImNsb2NrXCIsXG4gICAgICAgICAgICAgICAgICAgIFwic29ydG9yZGVyXCI6IFwiREVTQ1wiLFxuICAgICAgICAgICAgICAgICAgICBcImxpbWl0XCI6IDEwMDAwXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBcImF1dGhcIjogc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcInphYmJpeEtleVwiKSwvL3phYmJpeEtleSwvL1xuICAgICAgICAgICAgICAgIFwiaWRcIjogMVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICBjb252ZXJ0RGF0YShyZXNwb25zZS5kYXRhLnJlc3VsdClcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8UmVxdWVzdHNDb250ZXh0LlByb3ZpZGVyXG4gICAgICAgICAgICB2YWx1ZSA9IHt7XG4gICAgICAgICAgICAgICAgSGlzdG9yeUdldCxcbiAgICAgICAgICAgICAgICByYXdEYXRhLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8L1JlcXVlc3RzQ29udGV4dC5Qcm92aWRlcj5cblxuICAgIClcbiAgICBcbn1cblxuZXhwb3J0IGNvbnN0IHVzZVJlcXVlc3RzID0gKCkgPT4ge1xuICAgIHJldHVybiB1c2VDb250ZXh0KFJlcXVlc3RzQ29udGV4dCk7XG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/contexts/RequestsContext.tsx\n");

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.scss */ \"./src/styles/globals.scss\");\n/* harmony import */ var _styles_globals_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _contexts_LoginContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contexts/LoginContext */ \"./src/contexts/LoginContext.tsx\");\n/* harmony import */ var _contexts_RequestsContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../contexts/RequestsContext */ \"./src/contexts/RequestsContext.tsx\");\n/* harmony import */ var _pages_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pages/index */ \"./src/pages/index.tsx\");\n\nvar _jsxFileName = \"/home/nathan-silva/Documentos/Repositorios/zabbixExtractor/src/pages/_app.tsx\";\n// Styles\n // Internal imports\n\n\n\n\n\nfunction MyApp({\n  Component,\n  pageProps\n}) {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_contexts_LoginContext__WEBPACK_IMPORTED_MODULE_2__.LoginContextProvider, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_contexts_RequestsContext__WEBPACK_IMPORTED_MODULE_3__.RequestsContextProvider, {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_pages_index__WEBPACK_IMPORTED_MODULE_4__.SignupForm, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 14,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 13,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 11,\n    columnNumber: 5\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly96YWJiaXhleHRyYWN0b3IvLi9zcmMvcGFnZXMvX2FwcC50c3g/ODU0OCJdLCJuYW1lcyI6WyJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0NBR0E7O0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLEtBQVQsQ0FBZTtBQUFFQyxXQUFGO0FBQWFDO0FBQWIsQ0FBZixFQUF5QztBQUN2QyxzQkFDRSw4REFBQyx3RUFBRDtBQUFBLDJCQUNFLDhEQUFDLDhFQUFEO0FBQUEsNkJBQ0UsOERBQUMsU0FBRDtBQUFBLCtCQUNFLDhEQUFDLG9EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQVNEOztBQUVELCtEQUFlRixLQUFmIiwiZmlsZSI6Ii4vc3JjL3BhZ2VzL19hcHAudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gU3R5bGVzXG5pbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWxzLnNjc3MnXG5cbi8vIEludGVybmFsIGltcG9ydHNcbmltcG9ydCB7IExvZ2luQ29udGV4dFByb3ZpZGVyIH0gZnJvbSAnLi4vY29udGV4dHMvTG9naW5Db250ZXh0JztcbmltcG9ydCB7IFJlcXVlc3RzQ29udGV4dFByb3ZpZGVyIH0gZnJvbSAnLi4vY29udGV4dHMvUmVxdWVzdHNDb250ZXh0JztcbmltcG9ydCB7IFNpZ251cEZvcm0gfSBmcm9tICcuLi9wYWdlcy9pbmRleCc7XG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICByZXR1cm4gKFxuICAgIDxMb2dpbkNvbnRleHRQcm92aWRlciA+XG4gICAgICA8UmVxdWVzdHNDb250ZXh0UHJvdmlkZXIgPlxuICAgICAgICA8Q29tcG9uZW50ID5cbiAgICAgICAgICA8U2lnbnVwRm9ybSAvPlxuICAgICAgICA8L0NvbXBvbmVudD5cbiAgICAgIDwvUmVxdWVzdHNDb250ZXh0UHJvdmlkZXI+XG4gICAgPC9Mb2dpbkNvbnRleHRQcm92aWRlcj4gXG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "./src/styles/globals.scss":
/*!*********************************!*\
  !*** ./src/styles/globals.scss ***!
  \*********************************/
/***/ (function() {



/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

/***/ }),

/***/ "crypto-js":
/*!****************************!*\
  !*** external "crypto-js" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("crypto-js");;

/***/ }),

/***/ "formik":
/*!*************************!*\
  !*** external "formik" ***!
  \*************************/
/***/ (function(module) {

"use strict";
module.exports = require("formik");;

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["src_pages_index_tsx"], function() { return __webpack_exec__("./src/pages/_app.tsx"); });
module.exports = __webpack_exports__;

})();