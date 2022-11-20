declare type BoxColor = "#000000" | "#FFCD80";
export interface CheckboxProps {
    fill: BoxColor;
    /**박스의 체크 여부를 결정해주세요. */
    checked: boolean;
    /**박스의 크기를 설정해주세요. 기본은 12*12px 이며, 입력받은 수만큼 비율이 변화합니다. */
    scale: number;
}
declare const Checkbox: {
    ({ fill, checked, scale }: CheckboxProps): import("@emotion/react/jsx-runtime").JSX.Element;
    defaultProps: {
        fill: string;
        checked: boolean;
    };
};
export default Checkbox;
