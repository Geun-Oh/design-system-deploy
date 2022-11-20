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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { jsx as _jsx, jsxs as _jsxs } from "@emotion/react/jsx-runtime";
/** @jsxImportSource @emotion/react */
import { useEffect, useState } from 'react';
import { css } from '@emotion/react';
import { BaseStyles } from "../themes";
import Icon from "./Icon";
import MarginBox from './Marginbox';
var DropDown = function (_a) {
    var options = _a.options, width = _a.width, disabled = _a.disabled, multiSelect = _a.multiSelect, onChange = _a.onChange;
    var _b = useState(""), selected = _b[0], setSelected = _b[1];
    var _c = useState([]), multiSelected = _c[0], setMultiSelected = _c[1];
    var _d = useState(options), multiOptions = _d[0], setMultiOptions = _d[1];
    var _e = useState(false), toggled = _e[0], setToggled = _e[1];
    var onClick = function () { return disabled ? null : setToggled(function (prev) { return !prev; }); };
    var angle = disabled ? "xmark" : toggled ? "angleLeft" : "angleDown";
    var angleForMultiSelection = disabled ? "xmark" : toggled ? "angleDown" : "angleRight";
    var placeHolder = function () { return disabled ? _jsx("p", __assign({ style: { color: BaseStyles.Color.Black1 } }, { children: "Disabled" })) : selected === "" ? _jsx("p", __assign({ style: { color: BaseStyles.Color.Black1 } }, { children: "Select option..." })) : selected; };
    var placeHolderForMultiSelection = function () { return multiSelected.length === 0 ? "Select options..." : multiSelected.map(function (item, index) {
        return _jsxs("div", __assign({ css: multiOptionStyle() }, { children: [item, _jsx("button", __assign({ onClick: function () {
                        setMultiSelected(function (prev) { return prev.filter(function (x) { return x !== item; }); });
                        setMultiOptions(function (prev) { return __spreadArray(__spreadArray([], prev, true), [item], false); });
                    }, style: { opacity: 0.5 } }, { children: _jsx(Icon, { type: "xmark", scale: 0.8 }) }))] }), index);
    }); };
    useEffect(function () {
        !multiSelect ? onChange(selected) : onChange(multiSelected);
        console.log(multiOptions);
    }, [selected, multiSelected]);
    if (!multiSelect) {
        return (_jsxs("div", __assign({ className: 'wrapper' }, { children: [_jsxs("div", __assign({ css: style({ width: width }) }, { children: [placeHolder(), _jsx("button", __assign({ css: xmarkStyle, onClick: onClick }, { children: _jsx(Icon, { type: angle, scale: 1.5 }) }))] })), _jsx("div", __assign({ css: optionStyle({ width: width, toggled: toggled, multiSelect: multiSelect }) }, { children: options && options.map(function (item, index) {
                        return _jsx("p", __assign({ onClick: function () {
                                setSelected(item);
                                onClick();
                            } }, { children: item }), index);
                    }) }))] })));
    }
    else {
        return (_jsxs("div", __assign({ className: 'wrapper' }, { children: [_jsxs("div", __assign({ css: multiSelectorStyle({ width: width }), style: { justifyContent: "flex-start" } }, { children: [_jsx("button", __assign({ css: xmarkStyle, onClick: onClick }, { children: _jsx(Icon, { type: angleForMultiSelection, scale: 1.5 }) })), _jsx(MarginBox, { marginLeft: '0.5rem' }), _jsx("div", __assign({ style: { display: "flex", flexDirection: "row", flexWrap: "wrap" } }, { children: placeHolderForMultiSelection() }))] })), _jsx("div", __assign({ css: optionStyle({ width: width, toggled: toggled, multiOptions: multiOptions, multiSelect: multiSelect }) }, { children: multiOptions && multiOptions.map(function (item, index) {
                        return _jsx("p", __assign({ onClick: function () {
                                setMultiSelected(function (prev) { return __spreadArray(__spreadArray([], prev, true), [item], false); });
                                setMultiOptions(function (prev) { return prev.filter(function (x) { return x !== item; }); });
                            } }, { children: item }), index);
                    }) }))] })));
    }
};
DropDown.defaultProps = {
    options: ["React.js", "Vue.js", "Angular.js"],
    disabled: false,
    width: "300px",
    multiSelect: false,
};
var optionStyle = function (_a) {
    var width = _a.width, toggled = _a.toggled, multiOptions = _a.multiOptions, multiSelect = _a.multiSelect;
    return css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    box-shadow: ", ";\n    transition-duration: 0.5s;\n    border: none;\n    width: ", ";\n    max-height: 100px;\n    overflow-x: hidden;\n    overflow-y: scroll;\n    padding: ", ";\n    border-radius: 1rem;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: center;\n    transform: scaleY(", ");\n    transform-origin: top center;\n    p {\n        width: ", ";\n    }\n    ::-webkit-scrollbar-track {\n        background-color: none;\n    }\n    ::-webkit-scrollbar {\n        width: 6px;               /* width of the entire scrollbar */\n    }\n    ::-webkit-scrollbar-thumb {\n        background-color: lightgray;    /* color of the scroll thumb */\n        border-radius: 20px;       /* roundness of the scroll thumb */\n        border: none;  /* creates padding around scroll thumb */\n    }\n"], ["\n    box-shadow: ", ";\n    transition-duration: 0.5s;\n    border: none;\n    width: ", ";\n    max-height: 100px;\n    overflow-x: hidden;\n    overflow-y: scroll;\n    padding: ", ";\n    border-radius: 1rem;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: center;\n    transform: scaleY(", ");\n    transform-origin: top center;\n    p {\n        width: ", ";\n    }\n    ::-webkit-scrollbar-track {\n        background-color: none;\n    }\n    ::-webkit-scrollbar {\n        width: 6px;               /* width of the entire scrollbar */\n    }\n    ::-webkit-scrollbar-thumb {\n        background-color: lightgray;    /* color of the scroll thumb */\n        border-radius: 20px;       /* roundness of the scroll thumb */\n        border: none;  /* creates padding around scroll thumb */\n    }\n"])), BaseStyles.Shadow.BottomDefault, width, !multiSelect ? "0.5rem 1.5rem" : (multiOptions === null || multiOptions === void 0 ? void 0 : multiOptions.length) === 0 ? "0rem 1.5rem" : "0.5rem 1.5rem", toggled ? 1 : 0, width);
};
var style = function (_a) {
    var width = _a.width;
    return css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    box-shadow: ", ";\n    transition-duration: 0.5s;\n    border: 0.3px solid ", ";\n    height: 1rem;\n    width: ", ";\n    padding: 1rem 1.5rem;\n    margin-bottom: 0.5rem;\n    border-radius: 1rem;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n    Icon {\n        transform-origin: center;\n    }\n    &:hover {\n        border: 1px solid ", ";\n    }\n"], ["\n    box-shadow: ", ";\n    transition-duration: 0.5s;\n    border: 0.3px solid ", ";\n    height: 1rem;\n    width: ", ";\n    padding: 1rem 1.5rem;\n    margin-bottom: 0.5rem;\n    border-radius: 1rem;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n    Icon {\n        transform-origin: center;\n    }\n    &:hover {\n        border: 1px solid ", ";\n    }\n"])), BaseStyles.Shadow.BottomSmall, BaseStyles.Color.Black0, width, BaseStyles.Color.Beige2);
};
var multiSelectorStyle = function (_a) {
    var width = _a.width;
    return css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    box-shadow: ", ";\n    transition-duration: 0.5s;\n    border: 0.3px solid ", ";\n    width: ", ";\n    padding: 1rem 1.5rem;\n    margin-bottom: 0.5rem;\n    border-radius: 1rem;\n    display: inline-flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n    Icon {\n        transform-origin: center;\n    }\n    &:hover {\n        border: 1px solid ", ";\n    }\n"], ["\n    box-shadow: ", ";\n    transition-duration: 0.5s;\n    border: 0.3px solid ", ";\n    width: ", ";\n    padding: 1rem 1.5rem;\n    margin-bottom: 0.5rem;\n    border-radius: 1rem;\n    display: inline-flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n    Icon {\n        transform-origin: center;\n    }\n    &:hover {\n        border: 1px solid ", ";\n    }\n"])), BaseStyles.Shadow.BottomSmall, BaseStyles.Color.Black0, width, BaseStyles.Color.Beige2);
};
var xmarkStyle = css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    width: 18px;\n    height: 18px;\n    outline: none;\n    border: none;\n    background: none;\n"], ["\n    width: 18px;\n    height: 18px;\n    outline: none;\n    border: none;\n    background: none;\n"])));
var multiOptionStyle = function () { return css(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n    font-family: ", ";\n    font-weight: ", ";\n    height: 24px;\n    background: #FFECCE;\n    color: #616161;\n    margin-left: 10px;\n    margin-top: 6px;\n    padding: 4px 4px 4px 10px;\n    border-radius: 6px;\n    button {\n        outline: none;\n        border: none;\n        background: none;\n        transform: translateY(2px);\n    }\n"], ["\n    font-family: ", ";\n    font-weight: ", ";\n    height: 24px;\n    background: #FFECCE;\n    color: #616161;\n    margin-left: 10px;\n    margin-top: 6px;\n    padding: 4px 4px 4px 10px;\n    border-radius: 6px;\n    button {\n        outline: none;\n        border: none;\n        background: none;\n        transform: translateY(2px);\n    }\n"])), BaseStyles.Font.FiraCode, BaseStyles.Text.Border3); };
export default DropDown;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
