interface AccordionProps {
    innerText: string;
    width: string;
    extraAction?: string;
    src: string;
    loading: boolean;
}
export declare const Accordion: {
    ({ innerText, width, extraAction, src, loading }: AccordionProps): import("@emotion/react/jsx-runtime").JSX.Element;
    defaultProps: {
        innerText: string;
        width: string;
        loading: boolean;
    };
};
export {};
