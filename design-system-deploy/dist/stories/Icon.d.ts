/** @jsxImportSource @emotion/react */
import React from 'react';
declare type TypeProps = 'angleDown' | "angleUp" | "angleRight" | "angleLeft" | "xmark" | "home" | "file" | "chat" | "chart" | "checkout" | "loading" | "none" | "hamburger" | "kebab" | "meetball" | "bento" | "donorRight" | "donorLeft" | "calendar" | "flag" | "triangleDown" | "eye" | "magnifyingGlass";
export interface IconProps {
    onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
    type: TypeProps;
    scale?: number;
    fill: "#000000" | "#FFCD80" | "#FFFFFF" | string;
    onMouseDown?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
    onMouseUp?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
}
export declare const Icon: {
    ({ onClick, type, scale, fill, onMouseDown, onMouseUp }: IconProps): import("@emotion/react/jsx-runtime").JSX.Element | null;
    defaultProps: {
        type: string;
        fill: string;
    };
};
export {};
