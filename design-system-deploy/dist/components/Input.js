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
/** @jsxImportSource @emotion/react */
import React, { useRef } from 'react';
import { css } from '@emotion/react';
import { BaseStyles, Themes } from "../themes";
import Icon from "./Icon";
var Input = function (_a) {
    var _b = _a.themeType, themeType = _b === void 0 ? "lightMode" : _b, _c = _a.type, type = _c === void 0 ? "textInput" : _c, _d = _a.width, width = _d === void 0 ? "300px" : _d, icon = _a.icon, _e = _a.name, name = _e === void 0 ? "text" : _e, _f = _a.value, value = _f === void 0 ? "" : _f, _g = _a.numberValue, numberValue = _g === void 0 ? 0 : _g, _h = _a.height, height = _h === void 0 ? "300px" : _h, onChange = _a.onChange;
    var theme = themeType === "lightMode" ? Themes.LightMode : Themes.DarkMode;
    var _j = React.useState("password"), passwordType = _j[0], setPasswordType = _j[1];
    var _k = React.useState(value), inputValue = _k[0], setInputValue = _k[1];
    var _l = React.useState(numberValue), stepNumber = _l[0], setStepNumber = _l[1];
    var numberInputRef = useRef(null);
    React.useEffect(function () {
        if (inputValue.length === 10) {
            setInputValue(inputValue.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3'));
        }
        if (inputValue.length === 13) {
            setInputValue(inputValue.replace(/-/g, '').replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3'));
        }
    }, [inputValue]);
    var handlePress = function (e) {
        var regex = /^[0-9\b -]{0,13}$/;
        if (regex.test(e.target.value)) {
            setInputValue(e.target.value);
            onChange(e.targert);
        }
    };
    var handleChange = function (e) {
        setInputValue(e.target.value);
        onChange(e.target);
    };
    switch (type) {
        case "textInput":
            return (_jsx("div", __assign({ css: style(width, theme) }, { children: _jsx("input", { css: textInputStyle(theme), placeholder: "Input Text", type: "text", name: name, value: inputValue, onChange: function (e) { return handleChange(e); } }) })));
        case "date":
            return (_jsx("div", __assign({ css: style(width, theme) }, { children: _jsx("input", { css: textInputStyle(theme), type: "date", name: name, value: inputValue, onChange: function (e) { return handleChange(e); } }) })));
        case "phoneNumber":
            return (_jsx("div", __assign({ css: style(width, theme) }, { children: _jsx("input", { css: textInputStyle(theme), type: "text", onChange: function (e) { return handlePress(e); }, name: name, value: inputValue, placeholder: "010-1234-5678", maxLength: 13 }) })));
        case "password":
            return (_jsxs("div", __assign({ css: style(width, theme) }, { children: [_jsx("input", { type: passwordType, css: textInputStyle(theme), name: name, value: inputValue, onChange: function (e) { return handleChange(e); } }), _jsx("button", __assign({ onMouseDown: function () { return setPasswordType("text"); }, onMouseUp: function () { return setPasswordType("password"); }, style: { width: "16px", height: "16px", border: "none", outline: "none", background: "none" } }, { children: _jsx(Icon, { type: "eye" }) }))] })));
        case "searchField":
            return (_jsxs("div", __assign({ css: style(width, theme) }, { children: [_jsx(Icon, { type: "magnifyingGlass" }), _jsx("input", { css: textInputStyle(theme), style: { paddingLeft: "16px" }, placeholder: "Search...", type: "text", name: name, value: inputValue, onChange: function (e) { return handleChange(e); } })] })));
        case "inputWithSteper":
            return (_jsxs("div", __assign({ css: style(width = "80px", theme) }, { children: [_jsx("input", { type: "number", ref: numberInputRef, readOnly: true, css: textInputStyle(theme), name: name, value: stepNumber }), _jsxs("div", __assign({ className: 'steperwrapper', css: steperWrapperStyle(theme) }, { children: [_jsx("button", __assign({ onClick: function () {
                                    setStepNumber(function (prev) { return prev + 1; });
                                    if (numberInputRef.current) {
                                        onChange(numberInputRef.current);
                                    }
                                } }, { children: _jsx(Icon, { type: "angleUp" }) })), _jsx("button", __assign({ onClick: function () {
                                    setStepNumber(function (prev) { return prev - 1; });
                                    if (numberInputRef.current) {
                                        onChange(numberInputRef.current);
                                    }
                                } }, { children: _jsx(Icon, { type: "angleDown" }) }))] }))] })));
        case "textAreaInput":
            return (_jsx("div", __assign({ css: textAreaStyle(width, theme) }, { children: _jsx("textarea", { css: textAreaInputStyle(height, theme), placeholder: "Input Text", name: name, value: inputValue, onChange: function (e) { return handleChange(e); } }) })));
        default:
            return null;
    }
};
var style = function (width, theme) { return css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    width: ", ";\n    background-color: ", ";\n    color: ", ";\n    box-shadow: ", ";\n    transition-duration: 0.5s;\n    border: 0.3px solid ", ";\n    display: flex;\n    flex-direction: row;\n    justify-content: flex-start;\n    align-items: center;\n    padding: 1rem;\n    border-radius: 1rem;\n    &:hover {\n        border: 1px solid ", ";\n    }\n    input::placeholder {\n        color: ", ";\n    }\n"], ["\n    width: ", ";\n    background-color: ", ";\n    color: ", ";\n    box-shadow: ", ";\n    transition-duration: 0.5s;\n    border: 0.3px solid ", ";\n    display: flex;\n    flex-direction: row;\n    justify-content: flex-start;\n    align-items: center;\n    padding: 1rem;\n    border-radius: 1rem;\n    &:hover {\n        border: 1px solid ", ";\n    }\n    input::placeholder {\n        color: ", ";\n    }\n"])), width, theme.BackgroundColor, theme.Color, BaseStyles.Shadow.BottomDefault, BaseStyles.Color.Black0, BaseStyles.Color.Beige2, theme.Color); };
var textInputStyle = function (theme) { return css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    width: 100%;\n    background-color: ", ";\n    color: ", ";\n    font-family: ", ";\n    font-size: 1rem;\n    border: none;\n    outline: none;\n    text-decoration: none;\n"], ["\n    width: 100%;\n    background-color: ", ";\n    color: ", ";\n    font-family: ", ";\n    font-size: 1rem;\n    border: none;\n    outline: none;\n    text-decoration: none;\n"])), theme.BackgroundColor, theme.Color, BaseStyles.Font.FiraCode); };
var steperWrapperStyle = function (theme) { return css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    box-shadow: ", ";\n    background-color: ", ";\n    color: ", ";\n    width: 20px;\n    height: 32.5px;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n    align-items: center;\n    button {\n        outline: none;\n        background: none;\n        border: none;\n        transition-duration: 0.5s;\n        &:hover {\n            background: ", ";\n        }\n    }\n"], ["\n    box-shadow: ", ";\n    background-color: ", ";\n    color: ", ";\n    width: 20px;\n    height: 32.5px;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n    align-items: center;\n    button {\n        outline: none;\n        background: none;\n        border: none;\n        transition-duration: 0.5s;\n        &:hover {\n            background: ", ";\n        }\n    }\n"])), BaseStyles.Shadow.BottomDefault, theme.BackgroundColor, theme.Color, BaseStyles.Color.Beige0); };
var textAreaStyle = function (width, theme) { return css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\nbackground-color: ", ";\ncolor: ", ";\nwidth: ", ";\nbox-shadow: ", ";\ntransition-duration: 0.5s;\nborder: 0.3px solid     border: 0.3px solid ", ";;\ndisplay: flex;\nflex-direction: row;\npadding: 1rem;\nborder-radius: 6px;\n&:hover {\n    border: 1px solid ", ";\n}\ntextarea::placeholder {\n    color: ", ";\n}\n"], ["\nbackground-color: ", ";\ncolor: ", ";\nwidth: ", ";\nbox-shadow: ", ";\ntransition-duration: 0.5s;\nborder: 0.3px solid     border: 0.3px solid ", ";;\ndisplay: flex;\nflex-direction: row;\npadding: 1rem;\nborder-radius: 6px;\n&:hover {\n    border: 1px solid ", ";\n}\ntextarea::placeholder {\n    color: ", ";\n}\n"])), theme.BackgroundColor, theme.Color, width, BaseStyles.Shadow.BottomDefault, BaseStyles.Color.Black0, BaseStyles.Color.Beige2, theme.Color); };
var textAreaInputStyle = function (height, theme) { return css(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\nbackground-color: ", ";\ncolor: ", ";\nwidth: 100%;\nheight: ", ";\nfont-family: ", ";\nfont-size: 1rem;\nborder: none;\noutline: none;\ntext-decoration: none;\n"], ["\nbackground-color: ", ";\ncolor: ", ";\nwidth: 100%;\nheight: ", ";\nfont-family: ", ";\nfont-size: 1rem;\nborder: none;\noutline: none;\ntext-decoration: none;\n"])), theme.BackgroundColor, theme.Color, height, BaseStyles.Font.FiraCode); };
export default Input;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
