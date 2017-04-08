webpackHotUpdate(0,{

/***/ 136:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _dec, _class;\n\nvar _react = __webpack_require__(3);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(46);\n\n__webpack_require__(324);\n\nvar _Nav = __webpack_require__(160);\n\nvar _Nav2 = _interopRequireDefault(_Nav);\n\nvar _Sidebar = __webpack_require__(161);\n\nvar _Sidebar2 = _interopRequireDefault(_Sidebar);\n\nvar _home = __webpack_require__(82);\n\nvar _home2 = _interopRequireDefault(_home);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar App = (_dec = (0, _reactRedux.connect)(function (state) {\n\treturn {\n\t\tauthenticated: state.auth.isAuthenticated\n\t};\n}), _dec(_class = function (_React$Component) {\n\t_inherits(App, _React$Component);\n\n\tfunction App(props) {\n\t\t_classCallCheck(this, App);\n\n\t\treturn _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));\n\t}\n\n\t_createClass(App, [{\n\t\tkey: 'render',\n\t\tvalue: function render() {\n\t\t\treturn _react2.default.createElement(\n\t\t\t\t'div',\n\t\t\t\t{ className: 'application-container' },\n\t\t\t\t_react2.default.createElement(_Nav2.default, { authenticated: this.props.authenticated }),\n\t\t\t\t_react2.default.createElement(_Sidebar2.default, { authenticated: this.props.authenticated }),\n\t\t\t\t_react2.default.createElement(_home2.default, null)\n\t\t\t);\n\t\t}\n\t}]);\n\n\treturn App;\n}(_react2.default.Component)) || _class);\n\n\nApp.propTypes = {\n\tchildren: _react.PropTypes.object.isRequired\n};\n\nexports.default = App;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTM2LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2FwcC9jb21wb25lbnRzL0FwcC5qc3g/ZmJmOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHJvcFR5cGVzIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCAnLi4vc3RhdGljL3N0eWxlcy9tYWluLnNhc3MnO1xuXG5pbXBvcnQgTmF2IGZyb20gJy4vc2hhcmVkL05hdic7XG5pbXBvcnQgU2lkZWJhciBmcm9tICcuL3NoYXJlZC9TaWRlYmFyJztcbmltcG9ydCBIb21lIGZyb20gJy4vaG9tZS9ob21lJztcblxuQGNvbm5lY3QoKHN0YXRlKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0YXV0aGVudGljYXRlZDogc3RhdGUuYXV0aC5pc0F1dGhlbnRpY2F0ZWQsXG5cdH07XG59KVxuXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKTtcblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9J2FwcGxpY2F0aW9uLWNvbnRhaW5lcic+XG5cdFx0XHRcdDxOYXYgYXV0aGVudGljYXRlZD17dGhpcy5wcm9wcy5hdXRoZW50aWNhdGVkfSAvPlxuXHRcdFx0XHQ8U2lkZWJhciBhdXRoZW50aWNhdGVkPXt0aGlzLnByb3BzLmF1dGhlbnRpY2F0ZWR9IC8+XG5cdFx0XHRcdDxIb21lIC8+XG5cdFx0XHQ8L2Rpdj5cblxuXHRcdCk7XG5cdH1cbn1cblxuQXBwLnByb3BUeXBlcyA9IHtcblx0Y2hpbGRyZW46IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gYXBwL2NvbXBvbmVudHMvQXBwLmpzeCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7QUFPQTtBQUxBO0FBQ0E7QUFEQTtBQUdBOzs7QUFHQTtBQUFBO0FBQ0E7QUFEQTtBQUVBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFPQTs7OztBQWRBO0FBQ0E7QUFDQTtBQWVBO0FBQ0E7QUFEQTtBQUNBO0FBR0EiLCJzb3VyY2VSb290IjoiIn0=");

/***/ })

})