import { default as React } from '../../../node_modules/react';
import { uiMaxWidth } from '../../utils/tailwindProps';
type MaxWidthKeys = keyof typeof uiMaxWidth;
export interface SectionProps {
    children?: React.ReactNode;
    as?: 'section' | 'div';
    isGrey?: boolean;
    maxWidth?: MaxWidthKeys;
}
export declare const Section: ({ children, as, isGrey, maxWidth }: SectionProps) => import("react/jsx-runtime").JSX.Element;
export {};
