import {CustomButtonContainer} from "./custom-button.styles";

export const CustomButton = ({children, isGoogleSignIn, inverted, ...otherProps}) => {
    return (
        <CustomButtonContainer
            isGoogleSignIn={isGoogleSignIn}
            inverted={inverted}
            {...otherProps}>
            {children}
        </CustomButtonContainer>
    );
} 