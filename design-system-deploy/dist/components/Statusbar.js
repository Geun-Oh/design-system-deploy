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
import Icon from "./Icon";
/**
 * 특정 상태에 대한 로딩 여부를 판단하거나 다른 페이지로 리디렉션 할 수 있습니다.
 */
var Statusbar = function (_a) {
    var _b = _a.innerText, innerText = _b === void 0 ? "Statusbar InnerText" : _b, _c = _a.width, width = _c === void 0 ? "300px" : _c, extraAction = _a.extraAction, src = _a.src, _d = _a.loading, loading = _d === void 0 ? false : _d;
    return (_jsxs("div", __assign({ css: style(width) }, { children: [_jsx("p", { children: innerText }), src && extraAction ? _jsx("a", __assign({ href: src, style: { textDecoration: "none" } }, { children: _jsx("p", __assign({ style: { color: "".concat(BaseStyles.Color.Orange3) } }, { children: extraAction })) })) : null, loading === true ? _jsx(Icon, { type: "loading", scale: 1.5 }) : null] })));
};
var style = function (width) { return css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    box-shadow: ", ";\n    transition-duration: 0.5s;\n    outline: none;\n    border: none;\n    width: ", ";\n    height: 48px;\n    box-sizing: border-box;\n    background: white;\n    padding: 0.5rem 2rem;\n    border-radius: 1rem;\n    font-size: ", ";\n    font-family: \"Fira Code\";\n    font-weight: ", ";\n    padding: 0.5rem 2rem;\n    border-radius: 1rem;\n    line-height: 1;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-evenly;\n    align-items: center;\n    button {\n        outline: none;\n        border: none;\n        background: none;\n        transform: translate(10px, -2px);\n    }\n"], ["\n    box-shadow: ", ";\n    transition-duration: 0.5s;\n    outline: none;\n    border: none;\n    width: ", ";\n    height: 48px;\n    box-sizing: border-box;\n    background: white;\n    padding: 0.5rem 2rem;\n    border-radius: 1rem;\n    font-size: ", ";\n    font-family: \"Fira Code\";\n    font-weight: ", ";\n    padding: 0.5rem 2rem;\n    border-radius: 1rem;\n    line-height: 1;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-evenly;\n    align-items: center;\n    button {\n        outline: none;\n        border: none;\n        background: none;\n        transform: translate(10px, -2px);\n    }\n"])), BaseStyles.Shadow.BottomDefault, width, BaseStyles.Text.Heading4, BaseStyles.Text.Border4); };
export default Statusbar;
var templateObject_1;
