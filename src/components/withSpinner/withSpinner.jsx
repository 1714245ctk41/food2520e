import React from "react";
import { SpinnerOverlay, SpinnerContainer } from "./withSpinnerStyled";

const WithSpinner = (WrappedComponent) => {
  const Spinner = ({ isLoading, ...otherProps }) => {
    console.log("This is other props:")
    console.log(otherProps)
    console.log("This is end other props:")

    return isLoading ? (
      <SpinnerOverlay>
        <SpinnerContainer />
      </SpinnerOverlay>
    ) : (
      <WrappedComponent {...otherProps} />
    );
  };
  return Spinner;
};

export default WithSpinner;
