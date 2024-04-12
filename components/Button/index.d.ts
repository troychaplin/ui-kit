interface ButtonProps {
    color?: string;
    label: string;
    type?: 'button' | 'submit' | 'reset';
    size?: 'sm' | 'md' | 'lg';
    isOutline?: boolean;
    onClick?: () => void;
}
export declare const Button: ({ color, label, type, size, isOutline, ...props }: ButtonProps) => import("react/jsx-runtime").JSX.Element;
export {};
