import { uiRoundedCorners, uiDropShadow } from '../../utils/tailwindProps';
type RoundedKeys = keyof typeof uiRoundedCorners;
type ShadowKeys = keyof typeof uiDropShadow;
export interface CardProps {
    children?: React.ReactNode;
    rounded?: RoundedKeys;
    shadow?: ShadowKeys;
    borderWidth?: number;
    borderColor?: string;
}
export declare const Card: ({ children, rounded, shadow, borderWidth, borderColor }: CardProps) => import("react/jsx-runtime").JSX.Element;
export {};
