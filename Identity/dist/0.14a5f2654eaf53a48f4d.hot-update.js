webpackHotUpdate(0,{

/***/ 87:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\nexports.SIGNUP_USER_FAILURE = exports.SIGNUP_USER_COMPLETE = exports.SIGNUP_USER = undefined;\nexports.signUpStart = signUpStart;\nexports.signUpComplete = signUpComplete;\nexports.signUpFailure = signUpFailure;\n\nvar _axios = __webpack_require__(140);\n\nvar _axios2 = _interopRequireDefault(_axios);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar SIGNUP_USER = exports.SIGNUP_USER = 'SIGNUP_USER';\nvar SIGNUP_USER_COMPLETE = exports.SIGNUP_USER_COMPLETE = 'USER_SIGN_UP_COMPLETE';\nvar SIGNUP_USER_FAILURE = exports.SIGNUP_USER_FAILURE = 'USER_SIGN_UP_ERROR';\n\nfunction signUpStart(obj) {\n\tvar request = _axios2.default.post('/users', obj);\n\n\treturn {\n\t\ttype: SIGNUP_USER,\n\t\tpayload: request\n\t};\n}\n\nfunction signUpComplete(user) {\n\treturn {\n\t\ttype: SIGNUP_USER_COMPLETE,\n\t\tpayload: user\n\t};\n}\n\nfunction signUpFailure(error) {\n\tconsole.log('meow');\n\n\treturn {\n\t\ttype: SIGNUP_USER_FAILURE,\n\t\tpayload: error\n\t};\n}//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiODcuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vYXBwL2FjdGlvbnMvYXV0aC5qcz80YWY2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmV4cG9ydCBjb25zdCBTSUdOVVBfVVNFUiA9ICdTSUdOVVBfVVNFUic7XG5leHBvcnQgY29uc3QgU0lHTlVQX1VTRVJfQ09NUExFVEUgPSAnVVNFUl9TSUdOX1VQX0NPTVBMRVRFJztcbmV4cG9ydCBjb25zdCBTSUdOVVBfVVNFUl9GQUlMVVJFID0gJ1VTRVJfU0lHTl9VUF9FUlJPUic7XG5cblxuZXhwb3J0IGZ1bmN0aW9uIHNpZ25VcFN0YXJ0KG9iaikge1xuXHRjb25zdCByZXF1ZXN0ID0gYXhpb3MucG9zdCgnL3VzZXJzJywgb2JqKTtcblxuXHRyZXR1cm4ge1xuXHRcdHR5cGU6IFNJR05VUF9VU0VSLFxuXHRcdHBheWxvYWQ6IHJlcXVlc3QsXG5cdH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaWduVXBDb21wbGV0ZSh1c2VyKSB7XG5cdHJldHVybiB7XG5cdFx0dHlwZTogU0lHTlVQX1VTRVJfQ09NUExFVEUsXG5cdFx0cGF5bG9hZDogdXNlcixcblx0fTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNpZ25VcEZhaWx1cmUoZXJyb3IpIHtcblx0Y29uc29sZS5sb2coJ21lb3cnKTtcblx0XG5cdHJldHVybiB7XG5cdFx0dHlwZTogU0lHTlVQX1VTRVJfRkFJTFVSRSxcblx0XHRwYXlsb2FkOiBlcnJvcixcblx0fTtcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gYXBwL2FjdGlvbnMvYXV0aC5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBT0E7QUFTQTtBQU9BO0FBQ0E7QUF4QkE7QUFDQTs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ })

})