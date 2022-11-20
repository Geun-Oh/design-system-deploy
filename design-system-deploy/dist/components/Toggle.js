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
var Toggle = function (_a) {
    var type = _a.type, toggled = _a.toggled, scale = _a.scale;
    var _b = React.useState(!toggled), isToggled = _b[0], setIsToggled = _b[1];
    var typeColor = type === "Basic" ? ["#D9D9D9", "#00FF19"] : ["#FF3D3D", "#00FF19"];
    return (_jsx("div", __assign({ css: style({ isToggled: isToggled, typeColor: typeColor, scale: scale }) }, { children: _jsx("div", { onClick: function () { return setIsToggled(function (prev) { return !prev; }); } }) })));
};
var style = function (_a) {
    var isToggled = _a.isToggled, typeColor = _a.typeColor, scale = _a.scale;
    return css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\nwidth: 28px;\nheight: 16px;\nbox-shadow: ", ";\ntransition-duration: 0.5s;\nbackground: ", ";\nborder-radius: 8px;\ndisplay: flex;\nflex-direction: row;\nalign-items: center;\ntransform: scale(", ");\ndiv {\n    transition-duration: 0.5s;\n    margin-left: ", "px;\n    width: 14px;\n    height: 14px;\n    background: white;\n    border-radius: 7px;\n}\n"], ["\nwidth: 28px;\nheight: 16px;\nbox-shadow: ", ";\ntransition-duration: 0.5s;\nbackground: ", ";\nborder-radius: 8px;\ndisplay: flex;\nflex-direction: row;\nalign-items: center;\ntransform: scale(", ");\ndiv {\n    transition-duration: 0.5s;\n    margin-left: ", "px;\n    width: 14px;\n    height: 14px;\n    background: white;\n    border-radius: 7px;\n}\n"])), BaseStyles.Shadow.BottomSmall, isToggled ? typeColor[0] : typeColor[1], scale, isToggled ? 1 : 13);
};
export default Toggle;
var templateObject_1;
