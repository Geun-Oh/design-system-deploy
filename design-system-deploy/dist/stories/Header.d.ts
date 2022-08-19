import { IconProps } from "./Icon";
declare type ThemeType = "lightMode" | "darkMode";
declare type HeaderProps = {
    themeType: ThemeType;
    /** 원하는 기업의 로고 링크를 걸어두면 됩니다. 현재는 darkMode를 적용했을 때 RESON&CE 로고와 색이 겹치는 현상이 있는데, 이는 컴포넌트 구현 시에 현재 테마에 따라 imgUrl을 다르게 설정해주는 방식으로 해결하면 됩니다. */
    imgUrl?: string;
    iconType?: IconProps["type"];
    navOptions: string[];
};
export declare const Header: {
    ({ themeType, imgUrl, iconType, navOptions }: HeaderProps): import("@emotion/react/jsx-runtime").JSX.Element;
    defaultProps: {
        themeType: string;
        iconType: string;
        navOptions: string[];
    };
};
export {};
