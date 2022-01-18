import React from "react";
import {SpinnerContainer, SpinnerOverlay} from "./with-spinner.styles";


const WithSpinner = ComponentToWrap => ({isLoading, ...otherProps}) => {
    return isLoading ? (<SpinnerOverlay>
        <SpinnerContainer/>
    </SpinnerOverlay>) : (<ComponentToWrap {...otherProps}/>)
};

export default WithSpinner;