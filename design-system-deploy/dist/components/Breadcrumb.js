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
var Breadcrumb = function (_a) {
    var params = _a.params;
    return (_jsx("div", __assign({ css: style(params) }, { children: paramElement(params) })));
};
Breadcrumb.defaultProps = {
    params: ["Home"],
};
var paramElement = function (params) {
    if (params.length > 0 && params.length < 4) {
        return params.map(function (item) { return _jsxs("div", __assign({ style: { display: "flex", flexDirection: "row" } }, { children: [_jsx("div", __assign({ style: { width: "50px", textOverflow: "ellipsis", overflow: "hidden", whiteSpace: "nowrap" } }, { children: item })), "/"] })); });
    }
    else if (params.length > 3) {
        return _jsxs("div", __assign({ style: { display: "flex", flexDirection: "row", whiteSpace: "nowrap" } }, { children: [params[0], " / ... /", _jsx("div", __assign({ style: { width: "60px", textOverflow: "ellipsis", overflow: "hidden", whiteSpace: "nowrap" } }, { children: params[params.length - 1] })), "/"] }));
    }
    return null;
};
var style = function (params) { return css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    box-shadow: ", ";\n    transition-duration: 0.5s;\n    outline: none;\n    border: none;\n    height: 48px;\n    width: ", "px;\n    box-sizing: border-box;\n    background: ", ";\n    padding: 0.5rem 1rem;\n    font-size: ", ";\n    font-family: \"Fira Code\";\n    font-weight: ", ";\n    border-radius: 0 1rem 1rem 0;\n    line-height: 1;\n    display: flex;\n    flex-direction: row;\n    justify-content: flex-start;\n    align-items: center;\n"], ["\n    box-shadow: ", ";\n    transition-duration: 0.5s;\n    outline: none;\n    border: none;\n    height: 48px;\n    width: ", "px;\n    box-sizing: border-box;\n    background: ", ";\n    padding: 0.5rem 1rem;\n    font-size: ", ";\n    font-family: \"Fira Code\";\n    font-weight: ", ";\n    border-radius: 0 1rem 1rem 0;\n    line-height: 1;\n    display: flex;\n    flex-direction: row;\n    justify-content: flex-start;\n    align-items: center;\n"])), BaseStyles.Shadow.BottomDefault, params.length > 3 ? 200 : 80 * params.length, BaseStyles.Color.Black0, BaseStyles.Text.Heading4, BaseStyles.Text.Border1); };
export default Breadcrumb;
var templateObject_1;
