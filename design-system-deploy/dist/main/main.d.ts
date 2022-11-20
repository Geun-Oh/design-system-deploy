declare const Components: {
    Badge: {
        ({ innerText, state, width, type }: import("../components/Badge").BadgeProps): import("@emotion/react/types/jsx-namespace").EmotionJSX.Element;
        defaultProps: {
            innerText: string;
            state: string;
            width: string;
            type: string;
        };
    };
    Box: ({ width, borderRadius, backgroundColor, children, height, }: import("../components/Box").BoxProps) => import("@emotion/react/types/jsx-namespace").EmotionJSX.Element;
    Breadcrumb: {
        ({ params }: import("../components/Breadcrumb").BreadcrumbProps): import("@emotion/react/types/jsx-namespace").EmotionJSX.Element;
        defaultProps: {
            params: string[];
        };
    };
    Button: {
        ({ onClick, innerText, width, height, theme, iconType, backgroundColor, color, hoverColor }: import("../components/Button").ButtonProps): import("@emotion/react/types/jsx-namespace").EmotionJSX.Element;
        defaultProps: {
            iconType: string;
            backgroundColor: string;
        };
    };
    Card: {
        ({ themeType, head, icon, title, width, detail, confirmButton, image, imgUrl }: import("../components/Card").CardProps): import("@emotion/react/types/jsx-namespace").EmotionJSX.Element;
        defaultProps: {
            themeType: string;
            title: string;
            head: string;
            width: string;
            detail: string;
            confirmButton: boolean;
            imgUrl: any;
        };
    };
    Checkbox: {
        ({ fill, checked, scale }: import("../components/Checkbox").CheckboxProps): import("@emotion/react/types/jsx-namespace").EmotionJSX.Element;
        defaultProps: {
            fill: string;
            checked: boolean;
        };
    };
    Colorpallete: () => import("@emotion/react/types/jsx-namespace").EmotionJSX.Element;
    DropDown: {
        ({ options, width, disabled, multiSelect, onChange }: import("../components/DropDown").DropDownProps): import("@emotion/react/types/jsx-namespace").EmotionJSX.Element;
        defaultProps: {
            options: string[];
            disabled: boolean;
            width: string;
            multiSelect: boolean;
        };
    };
    Flex: ({ flexDirection, justifyContent, alignItems, width, height, flexWrap, children, flex, overflow, overflowX }: import("../components/Flex").FlexProps) => import("@emotion/react/types/jsx-namespace").EmotionJSX.Element;
    header: {
        ({ themeType, imgUrl, iconType, navOptions }: import("../components/Header").HeaderProps): import("@emotion/react/types/jsx-namespace").EmotionJSX.Element;
        defaultProps: {
            themeType: string;
            iconType: string;
            navOptions: string[];
        };
    };
    Icon: {
        ({ onClick, type, scale, fill, onMouseDown, onMouseUp }: import("../components/Icon").IconProps): import("@emotion/react/types/jsx-namespace").EmotionJSX.Element | null;
        defaultProps: {
            type: string;
            fill: string;
        };
    };
    Input: {
        ({ themeType, type, width, icon, name, value, numberValue, height, onChange }: import("../components/Input").InputProps): import("@emotion/react/types/jsx-namespace").EmotionJSX.Element | null;
        defaultProps: {
            themeType: string;
            width: string;
            height: string;
            type: string;
            value: string;
            numberValue: number;
            name: string;
        };
    };
    LoginForm: ({ width }: import("../components/LoginForm").LoginFormProps) => import("@emotion/react/types/jsx-namespace").EmotionJSX.Element;
    MarginBox: ({ marginLeft, marginRight, marginTop, marginBottom, margin }: import("../components/Marginbox").MarginBoxProps) => JSX.Element;
    Statusbar: {
        ({ innerText, width, extraAction, src, loading }: import("../components/Statusbar").StatusbarProps): import("@emotion/react/types/jsx-namespace").EmotionJSX.Element;
        defaultProps: {
            innerText: string;
            width: string;
            loading: boolean;
        };
    };
    Text: ({ color, fontSize, fontWeight, textAlign, innerText, style, hoverColor, onClick }: import("../components/Text").TextProps) => import("@emotion/react/types/jsx-namespace").EmotionJSX.Element;
    Toggle: ({ type, toggled, scale }: import("../components/Toggle").ToggleProps) => import("@emotion/react/types/jsx-namespace").EmotionJSX.Element;
};
export default Components;
