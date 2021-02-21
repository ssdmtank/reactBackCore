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
var State = /** @class */ (function (_super) {
    __extends(State, _super);
    function State(props) {
        var _this = _super.call(this, props) || this;
        // 初始化
        _this.state = {
            counter: 0
        };
        return _this;
    }
    State.prototype.componentDidMount = function () {
        // state 的更新是异步的 不能直接调用this.state更新
        for (var i = 0; i < 100; i++) {
            this.setState(function (state, props) { return ({
                counter: state.counter + 1
            }); });
        }
    };
    State.prototype.render = function () {
        return (React.createElement(React.Fragment, null, this.state.counter));
    };
    return State;
}(react_1.Component));
exports["default"] = State;
