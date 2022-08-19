import { ThemeType } from "../themes";
import { IconProps } from "./Icon";
declare type InputType = "textInput" | "date" | "phoneNumber" | "password" | "searchField" | "inputWithSteper" | "textAreaInput";
interface InputProps {
    themeType: ThemeType;
    type: InputType;
    width: string;
    icon?: IconProps["type"];
    name?: string;
    height?: string;
}
export declare const Input: {
    ({ themeType, type, width, icon, name, height }: InputProps): import("@emotion/react/jsx-runtime").JSX.Element | null;
    defaultProps: {
        themeType: string;
        width: string;
        height: string;
    };
};
export {};
