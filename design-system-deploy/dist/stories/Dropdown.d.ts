interface DropdownProps {
    /**드롭다운의 선택 옵션을 입력해주세요. 배열을 받습니다. */
    options: string[];
    /**드롭다운의 너비를 지정해주세요. "100px", "50vw"와 같이 단위를 포함한 string으로 입력해야합니다.  */
    width: string;
    /**드롭다운의 활성화 여부를 선택해주세요. */
    disabled: boolean;
    /**드롭다운이 다수의 선택지를 가질 수 있는지 여부를 선택해주세요. */
    multiSelect: boolean;
}
export declare const Dropdown: {
    ({ options, width, disabled, multiSelect }: DropdownProps): import("@emotion/react/jsx-runtime").JSX.Element;
    defaultProps: {
        options: string[];
        disabled: boolean;
        width: string;
        multiSelect: boolean;
    };
};
export {};
