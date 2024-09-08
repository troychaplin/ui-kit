import { uiGridColumns } from '../../utils/tailwindProps';
type GridColumnsKeys = keyof typeof uiGridColumns;
export interface CardGroupProps {
    children?: React.ReactNode;
    cols?: GridColumnsKeys;
    gap?: number;
}
export declare const CardGroup: ({ children, cols, gap }: CardGroupProps) => import("react/jsx-runtime").JSX.Element;
export {};
