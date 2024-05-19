import { roundedCorners, dropShadow } from '../../utils/tailwindProps';

type RoundedKeys = keyof typeof roundedCorners;
type ShadowKeys = keyof typeof dropShadow;
interface CardProps {
    children?: React.ReactNode;
    rounded?: RoundedKeys;
    shadow?: ShadowKeys;
    borderWidth?: number;
    borderColor?: string;
}
export declare const Card: ({ children, rounded, shadow, borderWidth, borderColor }: CardProps) => import("react/jsx-runtime").JSX.Element;
export {};
