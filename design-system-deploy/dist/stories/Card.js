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
import { Button } from "./Button";
import image1 from "../icons/image1.png";
export var Card = function (_a) {
    var themeType = _a.themeType, head = _a.head, icon = _a.icon, title = _a.title, width = _a.width, detail = _a.detail, confirmButton = _a.confirmButton, image = _a.image, imgUrl = _a.imgUrl;
    var theme = themeType === "lightMode" ? Themes.LightMode : Themes.DarkMode;
    return (_jsxs("div", { children: [_jsxs("div", __assign({ css: style({ width: width, image: image, theme: theme }), className: 'cardwrapper' }, { children: [head === undefined ? null : _jsx("div", __assign({ className: 'headwrapper', style: { backgroundColor: theme.BackgroundColor, color: theme.Color } }, { children: head })), icon === undefined ? null : _jsx("div", __assign({ className: 'iconwrapper' }, { children: _jsx(Icon, { type: icon, scale: 2.5, fill: theme.Color }) })), _jsx("p", { children: title }), _jsx("span", { children: detail }), image === false && confirmButton === true ? _jsx(Button, { label: "Submit" }) : null] })), image === false ? null : _jsx("div", __assign({ css: imgStyle({ width: width, imgUrl: imgUrl }) }, { children: confirmButton === false ? null : _jsx(Button, { label: "Submit" }) }))] }));
};
Card.defaultProps = {
    themeType: "lightMode",
    title: "Card Example",
    width: 300,
    detail: "Example of a card's description. Stick to one or twe sentences.",
    confirmButton: false,
    imgUrl: image1,
};
var style = function (_a) {
    var width = _a.width, image = _a.image, theme = _a.theme;
    return css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    box-shadow: ", ";\n    transition-duration: 0.5s;\n    border: none;\n    width: ", "px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    padding: 1rem 1rem;\n    border-radius: ", ";\n    background: ", ";\n    color: ", ";\n    .headwrapper {\n        font-weight: ", ";\n        height: 24px;\n        width: ", "px;\n        border: 1px solid ", ";\n        border-radius: 12px;\n        background: white;\n        text-align: center;\n        transform: translateY(-28px);\n    }\n    p {\n        font-size: ", ";\n        font-weight: ", ";\n    }\n    span {\n        width: ", "px;\n        text-align: center;\n        margin-bottom: 2rem;\n        font-size: ", ";\n        font-weight: ", ";\n    }\n    Button {\n        width: ", "px;\n        background: ", ";\n    }\n"], ["\n    box-shadow: ", ";\n    transition-duration: 0.5s;\n    border: none;\n    width: ", "px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    padding: 1rem 1rem;\n    border-radius: ", ";\n    background: ", ";\n    color: ", ";\n    .headwrapper {\n        font-weight: ", ";\n        height: 24px;\n        width: ", "px;\n        border: 1px solid ", ";\n        border-radius: 12px;\n        background: white;\n        text-align: center;\n        transform: translateY(-28px);\n    }\n    p {\n        font-size: ", ";\n        font-weight: ", ";\n    }\n    span {\n        width: ", "px;\n        text-align: center;\n        margin-bottom: 2rem;\n        font-size: ", ";\n        font-weight: ", ";\n    }\n    Button {\n        width: ", "px;\n        background: ", ";\n    }\n"])), BaseStyles.Shadow.BottomDefault, width, image === false ? "1.5rem" : "1.5rem 1.5rem 0 0", theme.BackgroundColor, theme.Color, BaseStyles.Text.Border0, width * 0.3, BaseStyles.Color.Black0, BaseStyles.Text.Heading3, BaseStyles.Text.Border1, width, BaseStyles.Text.Heading4, BaseStyles.Text.Border4, width, BaseStyles.Color.Beige1);
};
var imgStyle = function (_a) {
    var width = _a.width, imgUrl = _a.imgUrl;
    return css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    width: ", "px;\n    height: ", "px;\n    padding: 1rem 1rem;\n    background: url(", ");\n    background-size: cover;\n    background-position: center center;\n    border-radius: 0 0 1.5rem 1.5rem;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-end;\n    align-items: center;\n    Button {\n        width: ", "px;\n        background: ", ";\n    }\n"], ["\n    width: ", "px;\n    height: ", "px;\n    padding: 1rem 1rem;\n    background: url(", ");\n    background-size: cover;\n    background-position: center center;\n    border-radius: 0 0 1.5rem 1.5rem;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-end;\n    align-items: center;\n    Button {\n        width: ", "px;\n        background: ", ";\n    }\n"])), width, width * 0.8, imgUrl, width, BaseStyles.Color.Beige1);
};
var templateObject_1, templateObject_2;
