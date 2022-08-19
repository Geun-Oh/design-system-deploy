declare type StateType = "Access" | "Warning" | "Error" | "New" | "Wait";
declare type TypeVars = "default" | "textInner" | "textOver";
interface BadgeProps {
    innerText: string;
    state: StateType;
    width: string;
    type: TypeVars;
}
export declare const Badge: {
    ({ innerText, state, width, type }: BadgeProps): import("@emotion/react/jsx-runtime").JSX.Element;
    defaultProps: {
        innerText: string;
        state: string;
        width: string;
        type: string;
    };
};
export {};
