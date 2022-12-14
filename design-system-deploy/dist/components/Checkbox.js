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
/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
var Checkbox = function (_a) {
    var _b = _a.fill, fill = _b === void 0 ? "#000000" : _b, _c = _a.checked, checked = _c === void 0 ? false : _c, scale = _a.scale;
    var _d = React.useState(checked), isChecked = _d[0], setIsChecked = _d[1];
    return (_jsx("div", { children: _jsx("div", __assign({ onClick: function () { return setIsChecked(function (prev) { return !prev; }); } }, { children: _jsx("svg", __assign({ width: "12", height: "12", viewBox: "0 0 12 12", fill: "none", xmlns: "http://www.w3.org/2000/svg", css: scaleControl(scale) }, { children: isChecked ? _jsx("path", { d: "M5.67321 8.24464C5.38125 8.53661 4.90446 8.53661 4.6125 8.24464L2.89821 6.53036C2.60545 6.23839 2.60545 5.76161 2.89821 5.46964C3.19018 5.17768 3.66696 5.17768 3.95893 5.46964L5.14286 6.65357L8.04107 3.75536C8.33304 3.46339 8.80982 3.46339 9.10179 3.75536C9.39375 4.04732 9.39375 4.52411 9.10179 4.81607L5.67321 8.24464ZM0 1.71429C0 0.767411 0.767411 0 1.71429 0H10.2857C11.2312 0 12 0.767411 12 1.71429V10.2857C12 11.2312 11.2312 12 10.2857 12H1.71429C0.767411 12 0 11.2312 0 10.2857V1.71429ZM1.28571 1.71429V10.2857C1.28571 10.5214 1.4775 10.7143 1.71429 10.7143H10.2857C10.5214 10.7143 10.7143 10.5214 10.7143 10.2857V1.71429C10.7143 1.4775 10.5214 1.28571 10.2857 1.28571H1.71429C1.4775 1.28571 1.28571 1.4775 1.28571 1.71429Z", fill: fill })
                    : _jsx("path", { d: "M10.2857 0C11.2312 0 12 0.767411 12 1.71429V10.2857C12 11.2312 11.2312 12 10.2857 12H1.71429C0.767411 12 0 11.2312 0 10.2857V1.71429C0 0.767411 0.767411 0 1.71429 0H10.2857ZM9.10179 4.81607C9.39375 4.52411 9.39375 4.04732 9.10179 3.75536C8.80982 3.46339 8.33304 3.46339 8.04107 3.75536L5.14286 6.65357L3.95893 5.46964C3.66696 5.17768 3.19018 5.17768 2.89821 5.46964C2.60545 5.76161 2.60545 6.23839 2.89821 6.53036L4.6125 8.24464C4.90446 8.53661 5.38125 8.53661 5.67321 8.24464L9.10179 4.81607Z", fill: fill }) })) })) }));
};
var scaleControl = function (scale) { return css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    transform: scale(", ");\n"], ["\n    transform: scale(", ");\n"])), scale); };
export default Checkbox;
var templateObject_1;
