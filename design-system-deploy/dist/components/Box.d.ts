export interface BoxProps {
    /**박스의 넓이를 지정해주세요. 기본값은 100%입니다. */
    width?: string;
    /**Border Radius를 설정해주세요. */
    borderRadius?: string;
    /**배경 색을 설정해주세요. */
    backgroundColor?: string;
    /**박스 내부에 포함될 컴포넌트를 설정해주세요. */
    children?: JSX.Element | JSX.Element[];
    /**박스의 높이를 지정해주세요. 기본값은 auto입니다. */
    height?: string;
}
declare const Box: ({ width, borderRadius, backgroundColor, children, height, }: BoxProps) => import("@emotion/react/jsx-runtime").JSX.Element;
export default Box;
