"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var react_1 = require("react");
require("./App.css");
var Comp_1 = require("./Comp");
var State_1 = require("./State");
var Home_1 = require("./pages/Home");
var logo192_png_1 = require("./static/logo192.png");
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    App.prototype.render = function () {
        return (React.createElement(React.Fragment, null,
            "React ts",
            React.createElement(Comp_1["default"], { name: 'ttt', user: { age: 12 } }),
            React.createElement(State_1["default"], null),
            React.createElement(Home_1["default"], null),
            React.createElement("img", { src: logo192_png_1["default"], alt: 'logo' })));
    };
    return App;
}(react_1.Component));
exports["default"] = App;
