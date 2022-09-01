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
import { Icon } from './Icon';
/**
 * 기본 타입을 선택해 사용하거나 직접 커스텀할 수 있습니다.
 */
export var Button = function (_a) {
    var onClick = _a.onClick, innerText = _a.innerText, width = _a.width, height = _a.height, theme = _a.theme, iconType = _a.iconType, backgroundColor = _a.backgroundColor, color = _a.color, hoverColor = _a.hoverColor;
    return (_jsxs("button", __assign({ css: [style(width, height, backgroundColor, color, hoverColor), themes[theme]], onClick: onClick }, { children: [innerText, _jsx("div", __assign({ css: iconStyle(iconType) }, { children: _jsx(Icon, { type: iconType }) }))] })));
};
Button.defaultProps = {
    iconType: "none",
    backgroundColor: "#FFFFFF",
};
var iconStyle = function (iconType) { return css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", ";\n"], ["\n  ", ";\n"])), iconType === "none" ? null : "padding-left: 16px"); };
var style = function (width, height, backgroundColor, color, hoverColor) { return css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  box-shadow: ", ";\n  transition-duration: 0.5s;\n  outline: none;\n  border: none;\n  box-sizing: border-box;\n  background: ", ";\n  color: ", ";\n  width: ", ";\n  height: ", ";\n  font-size: ", ";\n  font-family: ", ";\n  font-weight: ", ";\n  padding: 0.5rem 1rem;\n  border-radius: 1rem;\n  line-height: auto;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  &:hover {\n    background: ", ";\n  }\n"], ["\n  box-shadow: ", ";\n  transition-duration: 0.5s;\n  outline: none;\n  border: none;\n  box-sizing: border-box;\n  background: ", ";\n  color: ", ";\n  width: ", ";\n  height: ", ";\n  font-size: ", ";\n  font-family: ", ";\n  font-weight: ", ";\n  padding: 0.5rem 1rem;\n  border-radius: 1rem;\n  line-height: auto;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  &:hover {\n    background: ", ";\n  }\n"])), BaseStyles.Shadow.BottomDefault, backgroundColor || "#ffffff", color || BaseStyles.Color.Black4, width, height, BaseStyles.Text.Heading4, BaseStyles.Font.FiraCode, BaseStyles.Text.Border4, hoverColor || BaseStyles.Color.Beige1); };
var themes = {
    none: css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  "], ["\n  "]))),
    default: css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    color: ", ";\n    &:hover {\n      background: ", ";\n    }\n    &:active {\n      background: ", ";\n    }\n  "], ["\n    color: ", ";\n    &:hover {\n      background: ", ";\n    }\n    &:active {\n      background: ", ";\n    }\n  "])), BaseStyles.Color.Black4, BaseStyles.Color.Beige1, BaseStyles.Color.Beige3),
    link: css(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n    color: ", ";\n    font-weight: ", ";\n    &:hover {\n      background: ", ";\n      color: white;\n    }\n    &:active {\n      background: ", ";\n      color: white;\n    }\n  "], ["\n    color: ", ";\n    font-weight: ", ";\n    &:hover {\n      background: ", ";\n      color: white;\n    }\n    &:active {\n      background: ", ";\n      color: white;\n    }\n  "])), BaseStyles.Color.Orange2, BaseStyles.Text.Border3, BaseStyles.Color.Orange2, BaseStyles.Color.Orange3),
    warning: css(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  background: ", ";\n  color: white;\n  &:hover {\n    background: ", ";\n    color: ", ";\n  }\n  &:active {\n    background: ", ";\n    color: ", ";\n  }\n  "], ["\n  background: ", ";\n  color: white;\n  &:hover {\n    background: ", ";\n    color: ", ";\n  }\n  &:active {\n    background: ", ";\n    color: ", ";\n  }\n  "])), BaseStyles.Color.Red2, BaseStyles.Color.Red0, BaseStyles.Color.Red2, BaseStyles.Color.Red1, BaseStyles.Color.Red2),
    delete: css(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  background: ", ";\n  color: white;\n  &:hover {\n    background: ", ";\n    color: black;\n  }\n  "], ["\n  background: ", ";\n  color: white;\n  &:hover {\n    background: ", ";\n    color: black;\n  }\n  "])), BaseStyles.Color.Red1, BaseStyles.Color.Red2),
    disabled: css(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  background: ", ";\n  color: black;\n  &:hover {\n    background: ", ";\n    color: white;\n  }\n  "], ["\n  background: ", ";\n  color: black;\n  &:hover {\n    background: ", ";\n    color: white;\n  }\n  "])), BaseStyles.Color.Black1, BaseStyles.Color.Black3),
    submit: css(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n  background: ", ";\n  color: black;\n  &:hover {\n    background: ", ";\n    color: white;\n  }\n  "], ["\n  background: ", ";\n  color: black;\n  &:hover {\n    background: ", ";\n    color: white;\n  }\n  "])), BaseStyles.Color.Beige2, BaseStyles.Color.Beige3),
    formSubmit: css(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n  background: ", ";\n  color: black;\n  &:hover {\n    background: ", ";\n    color: white;\n  }\n  "], ["\n  background: ", ";\n  color: black;\n  &:hover {\n    background: ", ";\n    color: white;\n  }\n  "])), BaseStyles.Color.Orange2, BaseStyles.Color.Orange3)
};
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10;
