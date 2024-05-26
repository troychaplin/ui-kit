export interface ButtonProps {
    bgColor?: string;
    textColor?: string;
    label: string;
    type?: 'button' | 'submit' | 'reset';
    size?: 'sm' | 'md' | 'lg';
    isOutline?: boolean;
    onClick?: () => void;
}
export declare const Button: ({ bgColor, textColor, label, type, size, isOutline, ...props }: ButtonProps) => import("react/jsx-runtime").JSX.Element;
