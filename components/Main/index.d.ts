import { default as React } from '../../../node_modules/react';
export interface MainProps {
    children: React.ReactNode;
    maxWidth?: '5xl' | '6xl' | '7xl' | 'max' | 'full';
    noProse?: boolean;
}
export declare const Main: ({ children, noProse, maxWidth }: MainProps) => import("react/jsx-runtime").JSX.Element;
