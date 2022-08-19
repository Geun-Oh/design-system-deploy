declare type ToggleTypes = "Basic" | "DenyAccept";
interface ToggleProps {
    type: ToggleTypes;
    toggled: boolean;
    scale: number;
}
export declare const Toggle: ({ type, toggled, scale }: ToggleProps) => import("@emotion/react/jsx-runtime").JSX.Element;
export {};
