import React, { useState } from "react";
import ReactiveButton from "reactive-button";

const LoadingButton = () => {
  const [state, setState] = useState("idle");

  const handleClick = () => {
    setState("loading");

    // Simulate an API call or async operation
    setTimeout(() => {
      setState("success");
    }, 2000);
  };

  return (
    <div className="text-white">
      <div>
        <ReactiveButton
          buttonState={state}
          onClick={handleClick}
          color={"purple"}
          idleText={"Submit"}
          loadingText={"Submitting..."}
          successText={"Submitted"}
          errorText={"Error"}
          animation={true}
          rounded={true}
          style={{ fontSize: "16px", padding: "12px 24px" }}
        />
      </div>
    </div>
  );
};

export default LoadingButton;
