import { uiGridColumns } from '../../utils/tailwindProps';
type ColumnKeys = keyof typeof uiGridColumns;
export interface ColumnProps {
    children?: React.ReactNode;
    cols?: ColumnKeys;
    gap?: number;
}
export declare const ColumnContainer: ({ children, cols, gap }: ColumnProps) => import("react/jsx-runtime").JSX.Element;
export declare const Column: (({ children, cols, gap }: ColumnProps) => import("react/jsx-runtime").JSX.Element) & {
    Content: {
        ({ children }: import('./content').ColumnContentProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
};
export {};
