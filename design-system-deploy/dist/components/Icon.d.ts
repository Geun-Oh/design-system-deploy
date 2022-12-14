/** @jsxImportSource @emotion/react */
import React from 'react';
declare type TypeProps = 'angleDown' | "angleUp" | "angleRight" | "angleLeft" | "xmark" | "home" | "file" | "chat" | "chart" | "checkout" | "loading" | "none" | "hamburger" | "kebab" | "meetball" | "bento" | "donorRight" | "donorLeft" | "calendar" | "flag" | "triangleDown" | "eye" | "magnifyingGlass";
export interface IconProps {
    /**아이콘 클릭 시 발생하는 액션을 입력해주세요. */
    onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
    /**아이콘의 타입을 입력해주세요. */
    type: TypeProps;
    /**아이콘의 크기를 설정해주세요. 기본은 12*12px 이며, 입력받은 수만큼 비율이 변화합니다. */
    scale?: number;
    /**아이콘의 색을 정해주세요. 기본 색으로 Black, White, Beige가 있습니다. */
    fill?: "#000000" | "#FFCD80" | "#FFFFFF" | string;
    /**마우스를 클릭했을 때 취할 액션을 지정해주세요. */
    onMouseDown?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
    /**마우스 클릭을 해제했을 때 취할 액션을 지정해주세요. */
    onMouseUp?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
}
declare const Icon: ({ onClick, type, scale, fill, onMouseDown, onMouseUp }: IconProps) => import("@emotion/react/jsx-runtime").JSX.Element | null;
export default Icon;
