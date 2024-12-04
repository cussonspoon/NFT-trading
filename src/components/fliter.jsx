import React, { useEffect, useRef, useState } from "react";
import { Container } from "./styles";
import plustoX from 'react-useanimations/lib/plusToX';
import UseAnimations from "react-useanimations";

function Filter() {
  const targetRef = useRef(null);
  const [isToggle, setIsToggle] = useState(false);

  useEffect(() => {
    if (targetRef.current) {
      targetRef.current.value = ""; // Clear the input when filter options are not shown
    }
  }, [isToggle]);

  return (
    <Container
      style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}
    >
      <UseAnimations
        reverse={isToggle}
        onClick={() => {
          setIsToggle(!isToggle);
        }}
        size={40}
        strokeColor="#08acb4"
        animation={plustoX}
      />
    </Container>
  );
}

export default Filter;
