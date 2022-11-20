declare type AlignType = "left" | "center" | "right";
export interface TextProps {
    color?: string;
    fontSize?: string;
    fontWeight?: number;
    textAlign?: AlignType;
    innerText?: string;
    hoverColor?: string;
    onClick?: (e: any) => any;
    style?: Object;
}
declare const Text: ({ color, fontSize, fontWeight, textAlign, innerText, style, hoverColor, onClick }: TextProps) => import("@emotion/react/jsx-runtime").JSX.Element;
export default Text;
