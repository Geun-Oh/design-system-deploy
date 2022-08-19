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
import { BaseStyles, Themes } from "../themes";
import { Icon } from "./Icon";
export var Header = function (_a) {
    var themeType = _a.themeType, imgUrl = _a.imgUrl, iconType = _a.iconType, navOptions = _a.navOptions;
    var theme = themeType === "lightMode" ? Themes.LightMode : Themes.DarkMode;
    return (_jsxs("div", __assign({ className: 'headerWrapper', css: style(theme) }, { children: [_jsx("img", { src: imgUrl, alt: "headerLogo" }), _jsx("div", __assign({ className: 'navWrapper' }, { children: navOptions && navOptions.map(function (item, index) {
                    return _jsx("span", { children: item }, index);
                }) })), _jsx(Icon, { type: iconType, scale: 2 })] })));
};
Header.defaultProps = {
    themeType: "lightMode",
    iconType: "donorRight",
    navOptions: ["Home", "About", "Reservation", "More"]
};
var style = function (theme) { return css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    width: 100vw;\n    height: 60px;\n    box-shadow: ", ";\n    transition-duration: 0.5s;\n    background-color: ", ";\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n    padding: 0 1rem;\n    img {\n        height: 24px;\n    }\n    div {\n        display: flex;\n        flex-direction: row;\n        justify-content: space-between;\n        align-items: center;\n        span {\n            margin-right: 5vw;\n            margin-left: 5vw;\n            font-size: 1.5rem;\n            color: ", ";\n            font-family: ", ";\n            font-weight: ", ";\n        }\n    }\n"], ["\n    width: 100vw;\n    height: 60px;\n    box-shadow: ", ";\n    transition-duration: 0.5s;\n    background-color: ", ";\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n    padding: 0 1rem;\n    img {\n        height: 24px;\n    }\n    div {\n        display: flex;\n        flex-direction: row;\n        justify-content: space-between;\n        align-items: center;\n        span {\n            margin-right: 5vw;\n            margin-left: 5vw;\n            font-size: 1.5rem;\n            color: ", ";\n            font-family: ", ";\n            font-weight: ", ";\n        }\n    }\n"])), BaseStyles.Shadow.BottomDefault, theme.BackgroundColor, theme.Color, BaseStyles.Font.FiraCode, BaseStyles.Text.Border1); };
var templateObject_1;
