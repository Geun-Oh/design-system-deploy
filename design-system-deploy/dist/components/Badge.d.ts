declare type StateType = "Access" | "Warning" | "Error" | "New" | "Wait";
declare type TypeVars = "default" | "textInner" | "textOver";
export interface BadgeProps {
    /**원하는 텍스트를 입력해주세요. */
    innerText: string;
    /**뱃지의 기본 상태를 선택할 수 있습니다. */
    state: StateType;
    /**뱃지의 너비를 지정해주세요. "100px", "50vw"와 같이 단위를 포함한 string으로 입력해야합니다. */
    width: string;
    /**뱃지의 상태표시자가 어떤 스타일로 위치할 지 선택해주세요. */
    type: TypeVars;
}
/**
 * 상황에 맞게 타입을 설정하여 사용하세요!
 */
declare const Badge: {
    ({ innerText, state, width, type }: BadgeProps): import("@emotion/react/jsx-runtime").JSX.Element;
    defaultProps: {
        innerText: string;
        state: string;
        width: string;
        type: string;
    };
};
export default Badge;
