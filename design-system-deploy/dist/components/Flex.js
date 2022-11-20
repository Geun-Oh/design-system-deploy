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
var Flex = function (_a) {
    var flexDirection = _a.flexDirection, justifyContent = _a.justifyContent, alignItems = _a.alignItems, width = _a.width, height = _a.height, flexWrap = _a.flexWrap, children = _a.children, flex = _a.flex, overflow = _a.overflow, overflowX = _a.overflowX;
    return (_jsx("div", __assign({ css: FlexDiv, style: { display: "flex", flexDirection: flexDirection, justifyContent: justifyContent, alignItems: alignItems, width: width !== null && width !== void 0 ? width : "100%", height: height, flexWrap: flexWrap, flex: flex, overflow: overflow !== null && overflow !== void 0 ? overflow : "hidden", overflowX: overflowX } }, { children: children })));
};
var FlexDiv = css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n::-webkit-scrollbar{\n    display: none; \n}\n"], ["\n::-webkit-scrollbar{\n    display: none; \n}\n"])));
export default Flex;
var templateObject_1;
