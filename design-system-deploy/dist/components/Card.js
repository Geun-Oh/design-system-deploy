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
import Icon from "./Icon";
import Button from "./Button";
/**
 * 다양한 옵션을 잘 선택해서 사용해주세요!
 */
var Card = function (_a) {
    var _b = _a.themeType, themeType = _b === void 0 ? "lightMode" : _b, _c = _a.head, head = _c === void 0 ? "Beta" : _c, icon = _a.icon, _d = _a.title, title = _d === void 0 ? "Card Example" : _d, _e = _a.width, width = _e === void 0 ? "300px" : _e, _f = _a.detail, detail = _f === void 0 ? "Example of a card's description. Stick to one or twe sentences." : _f, _g = _a.confirmButton, confirmButton = _g === void 0 ? false : _g, _h = _a.image, image = _h === void 0 ? false : _h, imgUrl = _a.imgUrl;
    var theme = themeType === "lightMode" ? Themes.LightMode : Themes.DarkMode;
    var height;
    var unit;
    if (width.endsWith("px")) {
        height = width.slice(0, -2);
        unit = "px";
    }
    else if (width.endsWith("vh")) {
        height = width.slice(0, -2);
        unit = "vh";
    }
    else if (width.endsWith("vw")) {
        height = width.slice(0, -2);
        unit = "vw";
    }
    else if (width.endsWith("%")) {
        height = width.slice(0, -1);
        unit = "%";
    }
    return (_jsxs("div", { children: [_jsxs("div", __assign({ css: style(width, image, theme), className: 'cardwrapper' }, { children: [head === undefined ? null : _jsx("div", __assign({ className: 'headwrapper', style: { backgroundColor: theme.BackgroundColor, color: theme.Color } }, { children: head })), icon === undefined ? null : _jsx("div", __assign({ className: 'iconwrapper' }, { children: _jsx(Icon, { type: icon, scale: 2.5, fill: theme.Color }) })), _jsx("p", { children: title }), _jsx("span", { children: detail }), image === false && confirmButton === true ? _jsx(Button, { onClick: function () { return console.log("Submit!"); }, innerText: "Submit", theme: "submit" }) : null] })), image === false ? null : _jsx("div", __assign({ css: imgStyle(width, height, unit, imgUrl) }, { children: confirmButton === false ? null : _jsx(Button, { onClick: function () { return console.log("Submit!"); }, innerText: "Submit", theme: "submit" }) }))] }));
};
var style = function (width, image, theme) { return css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    box-shadow: ", ";\n    transition-duration: 0.5s;\n    border: none;\n    width: ", ";\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    padding: 1rem 1rem;\n    border-radius: ", ";\n    background: ", ";\n    color: ", ";\n    .headwrapper {\n        font-weight: ", ";\n        height: 24px;\n        width: 30%;\n        border: 1px solid ", ";\n        border-radius: 1rem;\n        background: white;\n        text-align: center;\n        transform: translateY(-28px);\n    }\n    p {\n        font-size: ", ";\n        font-weight: ", ";\n    }\n    span {\n        width: ", ";\n        text-align: center;\n        margin-bottom: 2rem;\n        font-size: ", ";\n        font-weight: ", ";\n    }\n    Button {\n        width: ", ";\n        background: ", ";\n    }\n"], ["\n    box-shadow: ", ";\n    transition-duration: 0.5s;\n    border: none;\n    width: ", ";\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    padding: 1rem 1rem;\n    border-radius: ", ";\n    background: ", ";\n    color: ", ";\n    .headwrapper {\n        font-weight: ", ";\n        height: 24px;\n        width: 30%;\n        border: 1px solid ", ";\n        border-radius: 1rem;\n        background: white;\n        text-align: center;\n        transform: translateY(-28px);\n    }\n    p {\n        font-size: ", ";\n        font-weight: ", ";\n    }\n    span {\n        width: ", ";\n        text-align: center;\n        margin-bottom: 2rem;\n        font-size: ", ";\n        font-weight: ", ";\n    }\n    Button {\n        width: ", ";\n        background: ", ";\n    }\n"])), BaseStyles.Shadow.BottomDefault, width, image === false ? "1.5rem" : "1.5rem 1.5rem 0 0", theme.BackgroundColor, theme.Color, BaseStyles.Text.Border0, BaseStyles.Color.Black0, BaseStyles.Text.Heading3, BaseStyles.Text.Border1, width, BaseStyles.Text.Heading4, BaseStyles.Text.Border4, width, BaseStyles.Color.Beige1); };
var imgStyle = function (width, height, unit, imgUrl) { return css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    width: ", ";\n    height: ", "", ";\n    padding: 1rem 1rem;\n    background: url(", ");\n    background-size: cover;\n    background-position: center center;\n    border-radius: 0 0 1.5rem 1.5rem;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-end;\n    align-items: center;\n    Button {\n        width: ", ";\n        background: ", ";\n    }\n"], ["\n    width: ", ";\n    height: ", "", ";\n    padding: 1rem 1rem;\n    background: url(", ");\n    background-size: cover;\n    background-position: center center;\n    border-radius: 0 0 1.5rem 1.5rem;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-end;\n    align-items: center;\n    Button {\n        width: ", ";\n        background: ", ";\n    }\n"])), width, Number(height) * 0.8, unit, imgUrl, width, BaseStyles.Color.Beige1); };
export default Card;
var templateObject_1, templateObject_2;
