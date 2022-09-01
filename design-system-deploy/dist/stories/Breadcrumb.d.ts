interface BreadcrumbProps {
    /**메인 페이지로부터 현재 위치한 곳까지의 주소를 입력해주세요. */
    params: string[];
}
export declare const Breadcrumb: {
    ({ params }: BreadcrumbProps): import("@emotion/react/jsx-runtime").JSX.Element;
    defaultProps: {
        params: string[];
    };
};
export {};
