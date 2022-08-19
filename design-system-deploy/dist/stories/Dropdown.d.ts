interface DropdownProps {
    options: string[];
    width: string;
    disabled: boolean;
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
