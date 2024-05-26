import { default as React } from '../../../node_modules/react';

export interface SectionProps {
    children?: React.ReactNode;
    as?: 'section' | 'div';
    isGrey?: boolean;
    maxWidth?: '5xl' | '6xl' | '7xl' | 'max' | 'full';
}
export declare const Section: ({ children, as, isGrey, maxWidth }: SectionProps) => import("react/jsx-runtime").JSX.Element;
