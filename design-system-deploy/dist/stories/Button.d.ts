/** @jsxImportSource @emotion/react */
import React from 'react';
import { IconProps } from './Icon';
declare type ThemeType = 'none' | 'default' | 'link' | 'warning' | 'delete' | 'disabled' | "submit" | "formSubmit";
interface ButtonProps {
    /**버튼 클릭 시 실행할 함수를 지정해주세요. */
    onClick: (e?: React.MouseEvent<HTMLButtonElement>) => void;
    /**원하는 텍스트를 입력해주세요. */
    innerText: string;
    /**버튼의 너비를 지정해주세요. "100px", "50vw"와 같이 단위를 포함한 string으로 입력해야합니다. */
    width?: string;
    /**버튼의 높이를 지정해주세요. "100px", "50vw"와 같이 단위를 포함한 string으로 입력해야합니다.  */
    height?: string;
    /**버튼의 기본 테마를 지정해주세요. */
    theme?: ThemeType;
    /**버튼에 들어갈 아이콘의 타입을 지정해주세요. */
    iconType?: IconProps["type"];
    /**버튼의 배경색을 지정해주세요. */
    backgroundColor?: string;
    /**버튼의 텍스트 색을 지정해주세요. */
    color?: string;
    /**버튼에 커서를 가져다 대었을 때 변화할 배경색을 지정해주세요. */
    hoverColor?: string;
}
/**
 * 기본 타입을 선택해 사용하거나 직접 커스텀할 수 있습니다.
 */
export declare const Button: {
    ({ onClick, innerText, width, height, theme, iconType, backgroundColor, color, hoverColor }: ButtonProps): import("@emotion/react/jsx-runtime").JSX.Element;
    defaultProps: {
        iconType: string;
        backgroundColor: string;
    };
};
export {};
