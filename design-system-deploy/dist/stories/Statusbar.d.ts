interface StatusbarProps {
    /**원하는 텍스트를 입력해주세요. */
    innerText: string;
    /**아코디언의 너비를 지정해주세요. "100px", "50vw"와 같이 단위를 포함한 string으로 입력해야합니다. */
    width: string;
    /**추가적인 하이퍼링크나 액션이 필요할 때 사용합니다. 원하는 텍스트를 입력해주세요. */
    extraAction?: string;
    /**액션의 트리거가 될 링크를 입력해주세요. */
    src: string;
    /**로딩중인지 여부를 나타내기 위해 사용합니다. */
    loading: boolean;
}
/**
 * 특정 상태에 대한 로딩 여부를 판단하거나 다른 페이지로 리디렉션 할 수 있습니다.
 */
export declare const Statusbar: {
    ({ innerText, width, extraAction, src, loading }: StatusbarProps): import("@emotion/react/jsx-runtime").JSX.Element;
    defaultProps: {
        innerText: string;
        width: string;
        loading: boolean;
    };
};
export {};
