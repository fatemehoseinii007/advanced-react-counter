export interface ButtonProps {
    onClick?:() => void;
    children?: React.ReactNode;
    disabled?: boolean;
    className?: string;
    variant?:
    |"first"
    |"second"
    |"third"
    |"background"
    |"gradient-forward"
    |"gradient-reverse";
}