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
/**
 * 상황에 맞게 타입을 설정하여 사용하세요!
 */
var Badge = function (_a) {
    var innerText = _a.innerText, state = _a.state, width = _a.width, type = _a.type;
    var style = function () { return css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    box-shadow: ", ";\n    transition-duration: 0.5s;\n    outline: none;\n    border: none;\n    width: ", ";\n    box-sizing: border-box;\n    background: white;\n    padding: 12px 16px;\n    border-radius: 1rem;\n    height: 48px;\n    font-size: ", ";\n    font-family: ", ";\n    font-weight: ", ";\n    div {\n        ", "\n    }\n    "], ["\n    box-shadow: ", ";\n    transition-duration: 0.5s;\n    outline: none;\n    border: none;\n    width: ", ";\n    box-sizing: border-box;\n    background: white;\n    padding: 12px 16px;\n    border-radius: 1rem;\n    height: 48px;\n    font-size: ", ";\n    font-family: ", ";\n    font-weight: ", ";\n    div {\n        ", "\n    }\n    "])), BaseStyles.Shadow.BottomDefault, width, BaseStyles.Text.Heading4, BaseStyles.Font.FiraCode, BaseStyles.Text.Border0, type === "default" ? "\n        position: relative;\n        float: right;\n        transition-duration: 0.5s;\n        transform: translate(16px, -24px);\n        background: ".concat(badgeTheme[state], ";\n        border-radius: 1px soild black;\n        width: 24px;\n        height: 24px;\n        border-radius: 12px;\n        ") :
        type === "textInner" ? "\n        position: relative;\n        float: right;\n        transition-duration: 0.5s;\n        transform: translate(16px, -24px);\n        background: ".concat(badgeTheme[state], ";\n        border-radius: 1px soild black;\n        height: 24px;\n        padding: 0 12px 0 12px;\n        border-radius: 12px;\n        color: white;\n        font-size: ").concat(BaseStyles.Text.Heading4, ";\n        font-family: ").concat(BaseStyles.Font.FiraCode, ";\n        font-weight: ").concat(BaseStyles.Text.Border0, ";\n        ") : "\n        position: relative;\n        float: right;\n        transition-duration: 0.5s;\n        background: ".concat(badgeTheme[state], ";\n        border-radius: 1px soild black;\n        height: 24px;\n        padding: 0 12px 0 12px;\n        border-radius: 12px;\n        color: white;\n        font-size: ").concat(BaseStyles.Text.Heading4, ";\n        font-family: ").concat(BaseStyles.Font.FiraCode, ";\n        font-weight: ").concat(BaseStyles.Text.Border0, ";\n        ")); };
    var badgeTheme = {
        Access: "".concat(BaseStyles.Color.Lime1),
        Warning: "".concat(BaseStyles.Color.Orange2),
        Error: "".concat(BaseStyles.Color.Red1),
        New: "".concat(BaseStyles.Color.Purple1),
        Wait: "".concat(BaseStyles.Color.Black1),
    };
    var badgeInnerText = function () {
        switch (state) {
            case "Access":
                return "success";
            case "Error":
                return "error";
            case "New":
                return "new";
            case "Wait":
                return "wait";
            case "Warning":
                return "warn";
            default:
                return null;
        }
    };
    if (type === "textInner") {
        return (_jsxs("div", __assign({ css: style() }, { children: [innerText, _jsx("div", __assign({ css: badgeTheme }, { children: badgeInnerText() }))] })));
    }
    if (type === "textOver") {
        return (_jsxs("div", __assign({ css: style() }, { children: [innerText, _jsx("div", __assign({ css: badgeTheme }, { children: badgeInnerText() }))] })));
    }
    return (_jsxs("div", __assign({ css: style() }, { children: [innerText, _jsx("div", { css: badgeTheme })] })));
};
Badge.defaultProps = {
    innerText: "Badge InnerText",
    state: "Access",
    width: "300px",
    type: "default",
};
export default Badge;
var templateObject_1;
