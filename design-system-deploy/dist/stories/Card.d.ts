import { ThemeType } from "../themes";
import { IconProps } from "./Icon";
interface CardProps {
    /**라이트모드와 다크모드를 선택해주세요. */
    themeType: ThemeType;
    /**카드의 헤드를 추가할 지 선택해주세요. */
    head?: string;
    /**버튼에 들어갈 아이콘의 타입을 지정해주세요. */
    icon?: IconProps["type"];
    /**카드의 제목을 입력헤주세요. */
    title: string;
    /**카드의 너비를 입력해주세요. "100px", "50vw"와 같이 단위를 포함한 string으로 입력해야합니다. */
    width: string;
    /**카드를 통해 전달하고 싶은 말을 입력해주세요. */
    detail: string;
    /**카드에 버튼 필요 여부를 선택해주세요. */
    confirmButton: boolean;
    /**카드에 이미지 추가 여부를 선택해주세요. */
    image: boolean;
    /**이미지의 주소를 입력해주세요. */
    imgUrl: string;
}
/**
 * 다양한 옵션을 잘 선택해서 사용해주세요!
 */
export declare const Card: {
    ({ themeType, head, icon, title, width, detail, confirmButton, image, imgUrl }: CardProps): import("@emotion/react/jsx-runtime").JSX.Element;
    defaultProps: {
        themeType: string;
        title: string;
        head: string;
        width: string;
        detail: string;
        confirmButton: boolean;
        imgUrl: string;
    };
};
export {};
