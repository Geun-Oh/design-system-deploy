/** @jsxImportSource @emotion/react */
import React from 'react';
import { IconProps } from './Icon';
declare type ThemeType = 'none' | 'default' | 'link' | 'warning' | 'delete' | 'disabled' | "submit" | "formSubmit";
interface ButtonProps {
    onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
    label?: string;
    width?: string;
    height?: string;
    theme?: ThemeType;
    iconType?: IconProps["type"];
    backgroundColor?: string;
    color?: string;
    hoverColor?: string;
}
export declare const Button: {
    ({ onClick, label, width, height, theme, iconType, backgroundColor, color, hoverColor }: ButtonProps): import("@emotion/react/jsx-runtime").JSX.Element;
    defaultProps: {
        iconType: string;
        backgroundColor: string;
    };
};
export {};
