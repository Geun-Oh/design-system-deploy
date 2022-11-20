declare type directionType = "column" | "row";
declare type flexType = "flex-start" | "flex-end" | "center" | "left" | "right" | "space-between" | "space-evenly" | "space-around";
export interface FlexProps {
    flexDirection?: directionType;
    justifyContent?: flexType;
    alignItems?: flexType;
    width?: string;
    height?: string;
    flexWrap?: "nowrap" | "wrap" | "wrap-reverse";
    flex?: string;
    children: JSX.Element | JSX.Element[];
    overflow?: string;
    overflowX?: "visible" | "hidden" | "auto" | "scroll" | "clip";
}
declare const Flex: ({ flexDirection, justifyContent, alignItems, width, height, flexWrap, children, flex, overflow, overflowX }: FlexProps) => import("@emotion/react/jsx-runtime").JSX.Element;
export default Flex;
