import { FC } from "react";
import type { ButtonProps } from "../../constants/button";
import useButton from "../../hooks/useButton";



const Button: FC<ButtonProps> = ({ children, buttonType, isLoading, ...otherProps }) => {
    const SelfMadeButton = useButton(buttonType);
    return (<SelfMadeButton {...otherProps} disabled={isLoading} >
         {isLoading ? 'show spinner':   children} </SelfMadeButton>);
}

export default Button;