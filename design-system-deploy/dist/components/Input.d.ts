import { ThemeType } from "../themes";
import { IconProps } from "./Icon";
declare type InputType = "textInput" | "date" | "phoneNumber" | "password" | "searchField" | "inputWithSteper" | "textAreaInput";
export interface InputProps {
    /**라이트모드와 다크모드를 설정해주세요. */
    themeType?: ThemeType;
    /**타입을 정해주세요. */
    type: InputType;
    /**인풋의 너비를 지정해주세요. "100px", "50vw"와 같이 단위를 포함한 string으로 입력해야합니다. */
    width: string;
    /**아이콘의 타입을 설정해주세요. */
    icon?: IconProps["type"];
    /**인풋의 이름을 지정해주세요. 백엔드와의 통신에 제출할 폼에서 유용하게 사용됩니다. */
    name: string;
    /**인풋의 높이를 지정해주세요. "100px", "50vw"와 같이 단위를 포함한 string으로 입력해야합니다. */
    height?: string;
    value?: string;
    numberValue?: number;
    onChange: (e: any) => any;
}
declare const Input: ({ themeType, type, width, icon, name, value, numberValue, height, onChange }: InputProps) => import("@emotion/react/jsx-runtime").JSX.Element | null;
export default Input;
