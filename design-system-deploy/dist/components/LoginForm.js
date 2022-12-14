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
import { useState } from 'react';
import { css } from '@emotion/react';
import { BaseStyles } from "../themes";
import Input from './Input';
import Button from './Button';
import Dropdown from './DropDown';
var LoginForm = function (_a) {
    var width = _a.width;
    var initialForm = {
        id: "",
        name: "",
        password: "",
        phoneNumber: "",
        skills: [],
        introduce: "",
    };
    var _b = useState(initialForm), userInfoForm = _b[0], setUserInfoForm = _b[1];
    var id = userInfoForm.id, name = userInfoForm.name, password = userInfoForm.password, phoneNumber = userInfoForm.phoneNumber, skills = userInfoForm.skills, introduce = userInfoForm.introduce;
    var handleChange = function (e) {
        setUserInfoForm(function (prev) {
            var _a;
            return (__assign(__assign({}, prev), (_a = {}, _a[e.target.name] = e.target.value, _a)));
        });
    };
    return (_jsxs("div", __assign({ className: 'formWrapper', css: style(width) }, { children: [_jsxs("div", __assign({ className: 'idInput', css: idInputStyle() }, { children: [_jsxs("div", __assign({ style: { marginBottom: "10px", fontFamily: BaseStyles.Font.FiraCode, fontSize: BaseStyles.Text.Heading3, fontWeight: BaseStyles.Text.Border0 } }, { children: ["ID", _jsx("span", __assign({ style: { color: BaseStyles.Color.Orange2 } }, { children: "*" }))] })), _jsxs("div", __assign({ style: { display: "flex", justifyContent: "center", alignItems: "center" } }, { children: [_jsx(Input, { type: "textInput", width: "300px", name: "id", value: id, onChange: function (e) { return handleChange(e); } }), _jsx("div", __assign({ style: { marginLeft: "20px" } }, { children: _jsx(Button, { onClick: function () { return console.log("Submit!"); }, height: "40px", innerText: "Valiable?", theme: "link" }) }))] }))] })), _jsxs("div", __assign({ className: 'nameInput', css: idInputStyle() }, { children: [_jsxs("div", __assign({ style: { marginBottom: "10px", fontFamily: BaseStyles.Font.FiraCode, fontSize: BaseStyles.Text.Heading3, fontWeight: BaseStyles.Text.Border0 } }, { children: ["Full name", _jsx("span", __assign({ style: { color: BaseStyles.Color.Orange2 } }, { children: "*" }))] })), _jsx("div", __assign({ style: { display: "flex", justifyContent: "center", alignItems: "center" } }, { children: _jsx(Input, { type: "textInput", width: "300px", name: "name", value: name, onChange: function (e) { return handleChange(e); } }) }))] })), _jsxs("div", __assign({ className: 'passwordInput', css: idInputStyle() }, { children: [_jsxs("div", __assign({ style: { marginBottom: "10px", fontFamily: BaseStyles.Font.FiraCode, fontSize: BaseStyles.Text.Heading3, fontWeight: BaseStyles.Text.Border0 } }, { children: ["Password", _jsx("span", __assign({ style: { color: BaseStyles.Color.Orange2 } }, { children: "*" }))] })), _jsx("div", __assign({ style: { display: "flex", justifyContent: "center", alignItems: "center" } }, { children: _jsx(Input, { type: "password", width: "300px", name: "password", value: password, onChange: function (e) { return handleChange(e); } }) }))] })), _jsxs("div", __assign({ className: 'emailInput', css: idInputStyle() }, { children: [_jsxs("div", __assign({ style: { marginBottom: "10px", fontFamily: BaseStyles.Font.FiraCode, fontSize: BaseStyles.Text.Heading3, fontWeight: BaseStyles.Text.Border0 } }, { children: ["E-mail", _jsx("span", __assign({ style: { color: BaseStyles.Color.Orange2 } }, { children: "*" }))] })), _jsxs("div", __assign({ style: { display: "flex", justifyContent: "center", alignItems: "center" } }, { children: [_jsx(Input, { type: "textInput", width: "300px", name: "id", value: id, onChange: function (e) { return handleChange(e); } }), _jsx("div", __assign({ style: { marginLeft: "20px" } }, { children: _jsx(Button, { onClick: function () { return console.log("Submit!"); }, height: "40px", innerText: "Submit", theme: "link" }) }))] }))] })), _jsxs("div", __assign({ className: 'phoneNumberInput', css: idInputStyle() }, { children: [_jsx("div", __assign({ style: { marginBottom: "10px", fontFamily: BaseStyles.Font.FiraCode, fontSize: BaseStyles.Text.Heading3, fontWeight: BaseStyles.Text.Border0 } }, { children: "Phone number" })), _jsx("div", __assign({ style: { display: "flex", justifyContent: "center", alignItems: "center" } }, { children: _jsx(Input, { type: "phoneNumber", width: "300px", name: "phoneNumber", value: phoneNumber, onChange: function (e) { return handleChange(e); } }) }))] })), _jsx("div", { style: { width: "100%", height: "0.3px", background: BaseStyles.Color.Black2, marginBottom: "40px" } }), _jsxs("div", __assign({ className: 'availableInput', css: idInputStyle() }, { children: [_jsx("div", __assign({ style: { marginBottom: "10px", fontFamily: BaseStyles.Font.FiraCode, fontSize: BaseStyles.Text.Heading3, fontWeight: BaseStyles.Text.Border0 } }, { children: "Available Skills" })), _jsx("div", __assign({ style: { display: "flex", justifyContent: "center", alignItems: "center" } }, { children: _jsx(Dropdown, { options: ["React.js", "Javascript", "Typescript", "Node.js", "Vue.js", "AWS", "Angular.js", "Redux.js"], width: "300px", multiSelect: true, onChange: function (e) { return console.log(e); } }) }))] })), _jsxs("div", __assign({ className: 'textAreaInput', css: idInputStyle() }, { children: [_jsx("div", __assign({ style: { marginBottom: "10px", fontFamily: BaseStyles.Font.FiraCode, fontSize: BaseStyles.Text.Heading3, fontWeight: BaseStyles.Text.Border0 } }, { children: "Introduce yourself" })), _jsx(Input, { type: "textAreaInput", width: "100%", name: "Introduce", value: introduce, onChange: function (e) { return handleChange(e); } })] })), _jsx("div", __assign({ style: { width: "100%", display: "flex", justifyContent: "center" } }, { children: _jsx(Button, { onClick: function () { return console.log(userInfoForm); }, height: "40px", width: "60%", innerText: "Submit", theme: "delete" }) }))] })));
};
var style = function (width) { return css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    width: ", ";\n    box-shadow: ", ";\n    transition-duration: 0.5s;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: flex-start;\n    padding: 3rem 3rem;\n    border-radius: 1rem;\n"], ["\n    width: ", ";\n    box-shadow: ", ";\n    transition-duration: 0.5s;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: flex-start;\n    padding: 3rem 3rem;\n    border-radius: 1rem;\n"])), width, BaseStyles.Shadow.BottomDefault); };
var idInputStyle = function () { return css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: flex-start;\n    margin-bottom: 40px;\n    width: 90%;\n"], ["\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: flex-start;\n    margin-bottom: 40px;\n    width: 90%;\n"]))); };
export default LoginForm;
var templateObject_1, templateObject_2;
