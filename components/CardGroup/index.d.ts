/// <reference types="react" />
export interface CardGroupProps {
    children?: React.ReactNode;
    cols?: 1 | 2 | 3 | 4;
    gap?: number;
}
export declare const CardGroup: ({ children, cols, gap }: CardGroupProps) => import("react/jsx-runtime").JSX.Element;
