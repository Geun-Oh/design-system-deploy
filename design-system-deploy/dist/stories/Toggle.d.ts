declare type ToggleTypes = "Basic" | "DenyAccept";
interface ToggleProps {
    /**토글의 타입을 정해주세요. 기본 타입과 승인/거절 타입이 있습니다. */
    type: ToggleTypes;
    /**토글 여부에 대한 초깃값을 설정해주세요. */
    toggled: boolean;
    /**토글의 크기를 지정해주세요. 기본은 12*12px 이며, 입력받은 수만큼 비율이 변화합니다. */
    scale: number;
}
export declare const Toggle: ({ type, toggled, scale }: ToggleProps) => import("@emotion/react/jsx-runtime").JSX.Element;
export {};
