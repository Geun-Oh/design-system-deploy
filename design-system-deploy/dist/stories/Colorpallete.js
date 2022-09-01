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
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "@emotion/react/jsx-runtime";
import { BaseStyles } from "../themes";
/**
 * 사용되는 컬러 팔레트입니다.
 * Black을 기반으로 포인트 색상을 프로젝트마다 다르게 적용하여 제작합니다.
 */
export var Colorpallete = function () {
    var color = BaseStyles.Color;
    return (_jsx("div", { children: color && Object.keys(color).map(function (key) {
            return (_jsx(_Fragment, { children: _jsxs("div", __assign({ style: { color: color[key], height: "50px", display: "flex", flexDirection: "row", alignItems: "center" } }, { children: [_jsx("div", __assign({ style: { backgroundColor: color[key], color: "white", fontSize: "1.5rem", width: "150px", height: "50px", display: "flex", alignItems: "center", justifyContent: "center" } }, { children: color[key] })), key] })) }));
        }) }));
};
