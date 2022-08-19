import { ThemeType } from "../themes";
import { IconProps } from "./Icon";
interface CardProps {
    themeType: ThemeType;
    head?: string;
    icon?: IconProps["type"];
    title: string;
    width: number;
    detail: string;
    confirmButton: boolean;
    image: boolean;
    imgUrl: string | null;
}
export declare const Card: {
    ({ themeType, head, icon, title, width, detail, confirmButton, image, imgUrl }: CardProps): import("@emotion/react/jsx-runtime").JSX.Element;
    defaultProps: {
        themeType: string;
        title: string;
        width: number;
        detail: string;
        confirmButton: boolean;
        imgUrl: string;
    };
};
export {};
