declare type BoxColor = "#000000" | "#FFCD80";
interface CheckboxProps {
    fill: BoxColor;
    checked: boolean;
    scale: number;
}
export declare const Checkbox: {
    ({ fill, checked, scale }: CheckboxProps): import("@emotion/react/jsx-runtime").JSX.Element;
    defaultProps: {
        fill: string;
        checked: boolean;
    };
};
export {};
