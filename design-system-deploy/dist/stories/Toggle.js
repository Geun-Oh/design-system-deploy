var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx } from "@emotion/react/jsx-runtime";
/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import { BaseStyles } from "../themes";
export var Toggle = function (_a) {
    var type = _a.type, toggled = _a.toggled, scale = _a.scale;
    var _b = React.useState(!toggled), isToggled = _b[0], setIsToggled = _b[1];
    var typeColor = type === "Basic" ? ["#D9D9D9", "#00FF19"] : ["#FF3D3D", "#00FF19"];
    var style = function () { return css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n        width: 28px;\n        height: 16px;\n        box-shadow: ", ";\n        transition-duration: 0.5s;\n        background: ", ";\n        border-radius: 8px;\n        display: flex;\n        flex-direction: row;\n        align-items: center;\n        transform: scale(", ");\n        div {\n            transition-duration: 0.5s;\n            margin-left: ", "px;\n            width: 14px;\n            height: 14px;\n            background: white;\n            border-radius: 7px;\n        }\n    "], ["\n        width: 28px;\n        height: 16px;\n        box-shadow: ", ";\n        transition-duration: 0.5s;\n        background: ", ";\n        border-radius: 8px;\n        display: flex;\n        flex-direction: row;\n        align-items: center;\n        transform: scale(", ");\n        div {\n            transition-duration: 0.5s;\n            margin-left: ", "px;\n            width: 14px;\n            height: 14px;\n            background: white;\n            border-radius: 7px;\n        }\n    "])), BaseStyles.Shadow.BottomSmall, isToggled ? typeColor[0] : typeColor[1], scale, isToggled ? 1 : 13); };
    return (_jsx("div", __assign({ css: style }, { children: _jsx("div", { onClick: function () { return setIsToggled(function (prev) { return !prev; }); } }) })));
};
var templateObject_1;
