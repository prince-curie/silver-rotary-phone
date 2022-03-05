"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/[tokenId]";
exports.ids = ["pages/api/[tokenId]"];
exports.modules = {

/***/ "(api)/./pages/api/[tokenId].js":
/*!********************************!*\
  !*** ./pages/api/[tokenId].js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\nfunction handler(req, res) {\n    const tokenId = req.query.tokenId;\n    const image_uri = \"https://raw.githubusercontent.com/LearnWeb3DAO/NFT-Collection/main/my-app/public/cryptodevs/\";\n    res.status(200).json({\n        name: \"Crypto Dev #\" + tokenId,\n        description: \"Crypto Dev is a collection of developers in crypto\",\n        image: image_uri + tokenId + \".svg\"\n    });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvW3Rva2VuSWRdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBZSxRQUFRLENBQUNBLE9BQU8sQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEVBQUUsQ0FBQztJQUN2QyxLQUFLLENBQUNDLE9BQU8sR0FBR0YsR0FBRyxDQUFDRyxLQUFLLENBQUNELE9BQU87SUFFakMsS0FBSyxDQUFDRSxTQUFTLEdBQUcsQ0FBOEY7SUFFaEhILEdBQUcsQ0FBQ0ksTUFBTSxDQUFDLEdBQUcsRUFBRUMsSUFBSSxDQUFDLENBQUM7UUFDbEJDLElBQUksRUFBRSxDQUFjLGdCQUFHTCxPQUFPO1FBQzlCTSxXQUFXLEVBQUUsQ0FBb0Q7UUFDakVDLEtBQUssRUFBRUwsU0FBUyxHQUFHRixPQUFPLEdBQUcsQ0FBTTtJQUN2QyxDQUFDO0FBQ0wsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL215LWFwcC8uL3BhZ2VzL2FwaS9bdG9rZW5JZF0uanM/OGM4NSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG4gICAgY29uc3QgdG9rZW5JZCA9IHJlcS5xdWVyeS50b2tlbklkO1xuXG4gICAgY29uc3QgaW1hZ2VfdXJpID0gXCJodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vTGVhcm5XZWIzREFPL05GVC1Db2xsZWN0aW9uL21haW4vbXktYXBwL3B1YmxpYy9jcnlwdG9kZXZzL1wiO1xuXG4gICAgcmVzLnN0YXR1cygyMDApLmpzb24oe1xuICAgICAgICBuYW1lOiBcIkNyeXB0byBEZXYgI1wiICsgdG9rZW5JZCxcbiAgICAgICAgZGVzY3JpcHRpb246IFwiQ3J5cHRvIERldiBpcyBhIGNvbGxlY3Rpb24gb2YgZGV2ZWxvcGVycyBpbiBjcnlwdG9cIixcbiAgICAgICAgaW1hZ2U6IGltYWdlX3VyaSArIHRva2VuSWQgKyBcIi5zdmdcIlxuICAgIH0pO1xufSJdLCJuYW1lcyI6WyJoYW5kbGVyIiwicmVxIiwicmVzIiwidG9rZW5JZCIsInF1ZXJ5IiwiaW1hZ2VfdXJpIiwic3RhdHVzIiwianNvbiIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsImltYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/[tokenId].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/[tokenId].js"));
module.exports = __webpack_exports__;

})();