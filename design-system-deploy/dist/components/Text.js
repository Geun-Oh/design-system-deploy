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
import { jsx as _jsx } from "@emotion/react/jsx-runtime";
import { css } from '@emotion/react';
import { BaseStyles } from '../themes';
var Text = function (_a) {
    var color = _a.color, fontSize = _a.fontSize, fontWeight = _a.fontWeight, textAlign = _a.textAlign, innerText = _a.innerText, style = _a.style, hoverColor = _a.hoverColor, onClick = _a.onClick;
    return (_jsx("span", __assign({ css: textStyle({ color: color, fontSize: fontSize, fontWeight: fontWeight, textAlign: textAlign, innerText: innerText, hoverColor: hoverColor }), style: style, onClick: onClick }, { children: innerText || '내용을 입력해주세요' })));
};
var textStyle = function (_a) {
    var color = _a.color, fontSize = _a.fontSize, fontWeight = _a.fontWeight, textAlign = _a.textAlign, hoverColor = _a.hoverColor;
    return css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\ncolor: ", ";\ncursor: pointer;\nline-height: 1.5;\nfont-size: ", ";\nfont-weight: ", ";\nfont-family: ", ";\ntext-align: ", ";\n&:hover {\n    color: ", ";\n}\n"], ["\ncolor: ", ";\ncursor: pointer;\nline-height: 1.5;\nfont-size: ", ";\nfont-weight: ", ";\nfont-family: ", ";\ntext-align: ", ";\n&:hover {\n    color: ", ";\n}\n"])), color || 'black', fontSize || BaseStyles.Text.Heading3, fontWeight || BaseStyles.Text.Border3, BaseStyles.Font.Inter, textAlign || 'left', hoverColor);
};
export default Text;
var templateObject_1;
