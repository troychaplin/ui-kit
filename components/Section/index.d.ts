import { default as React } from '../../../node_modules/react';
import { uiMaxWidth } from '../../utils/tailwindProps';
type MaxWidthKeys = keyof typeof uiMaxWidth;
export interface SectionProps {
    children?: React.ReactNode;
    as?: 'section' | 'div';
    maxWidth?: MaxWidthKeys;
}
export declare const Section: ({ children, as, maxWidth }: SectionProps) => import("react/jsx-runtime").JSX.Element;
export {};
