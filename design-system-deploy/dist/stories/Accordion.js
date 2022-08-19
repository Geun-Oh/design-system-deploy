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
import { jsx as _jsx, jsxs as _jsxs } from "@emotion/react/jsx-runtime";
import { css } from '@emotion/react';
import { BaseStyles } from "../themes";
import { Icon } from "./Icon";
export var Accordion = function (_a) {
    var innerText = _a.innerText, width = _a.width, extraAction = _a.extraAction, src = _a.src, loading = _a.loading;
    return (_jsxs("div", __assign({ css: style(width) }, { children: [_jsx("p", { children: innerText }), src && extraAction ? _jsx("a", __assign({ href: src, style: { textDecoration: "none" } }, { children: _jsx("p", __assign({ style: { color: "".concat(BaseStyles.Color.Orange3) } }, { children: extraAction })) })) : null, _jsx(Icon, { type: loading === true ? "loading" : "angleDown" })] })));
};
Accordion.defaultProps = {
    innerText: "Accordion InnerText",
    width: "300px",
    loading: false,
};
var style = function (width) { return css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    box-shadow: ", ";\n    transition-duration: 0.5s;\n    outline: none;\n    border: none;\n    width: ", ";\n    height: 48px;\n    box-sizing: border-box;\n    background: white;\n    padding: 0.5rem 2rem;\n    border-radius: 1rem;\n    font-size: ", ";\n    font-family: \"Fira Code\";\n    font-weight: ", ";\n    padding: 0.5rem 2rem;\n    border-radius: 1rem;\n    line-height: 1;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n"], ["\n    box-shadow: ", ";\n    transition-duration: 0.5s;\n    outline: none;\n    border: none;\n    width: ", ";\n    height: 48px;\n    box-sizing: border-box;\n    background: white;\n    padding: 0.5rem 2rem;\n    border-radius: 1rem;\n    font-size: ", ";\n    font-family: \"Fira Code\";\n    font-weight: ", ";\n    padding: 0.5rem 2rem;\n    border-radius: 1rem;\n    line-height: 1;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n"])), BaseStyles.Shadow.BottomDefault, width, BaseStyles.Text.Heading4, BaseStyles.Text.Border4); };
var templateObject_1;
