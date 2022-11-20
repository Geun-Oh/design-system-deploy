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
import { css } from '@emotion/react';
import { BaseStyles } from "../themes";
var Box = function (_a) {
    var width = _a.width, borderRadius = _a.borderRadius, backgroundColor = _a.backgroundColor, children = _a.children, height = _a.height;
    return (_jsx("div", __assign({ css: style({ width: width, height: height, backgroundColor: backgroundColor, borderRadius: borderRadius }) }, { children: children })));
};
var style = function (_a) {
    var width = _a.width, height = _a.height, backgroundColor = _a.backgroundColor, borderRadius = _a.borderRadius;
    return css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    width: ", ";\n    height: ", ";\n    background-color: ", ";\n    box-shadow: ", ";\n    transition-duration: 0.5s;\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    padding: 1rem;\n    overflow: hidden;\n    border-radius: ", ";\n    ::-webkit-scrollbar-track {\n    background-color: none;\n    }\n    ::-webkit-scrollbar {\n    width: 6px;               /* width of the entire scrollbar */\n    }\n    ::-webkit-scrollbar-thumb {\n    background-color: lightgray;    /* color of the scroll thumb */\n    border-radius: 20px;       /* roundness of the scroll thumb */\n    border: none;  /* creates padding around scroll thumb */\n    }\n"], ["\n    width: ", ";\n    height: ", ";\n    background-color: ", ";\n    box-shadow: ", ";\n    transition-duration: 0.5s;\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    padding: 1rem;\n    overflow: hidden;\n    border-radius: ", ";\n    ::-webkit-scrollbar-track {\n    background-color: none;\n    }\n    ::-webkit-scrollbar {\n    width: 6px;               /* width of the entire scrollbar */\n    }\n    ::-webkit-scrollbar-thumb {\n    background-color: lightgray;    /* color of the scroll thumb */\n    border-radius: 20px;       /* roundness of the scroll thumb */\n    border: none;  /* creates padding around scroll thumb */\n    }\n"])), width || "calc(100% - 2rem)", height, backgroundColor || BaseStyles.Color.Black4, BaseStyles.Shadow.BottomDefault, borderRadius || "1rem");
};
export default Box;
var templateObject_1;
