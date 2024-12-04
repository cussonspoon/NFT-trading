import React, { useState } from 'react';
import UseAnimations from 'react-useanimations';
import plustoX from 'react-useanimations/lib/plustoX';

export const WrapperElement = () => {
  const [isActive, setIsActive] = useState(false);  // State to handle the toggle

  return (
    <UseAnimations
      animation={plustoX}
      size={60}
      reverse={isActive}  // Control the animation state
      onClick={() => {
        console.log('additional onClick cb is working');
        setIsActive(!isActive);  // Toggle the state on click
      }}
      render={(eventProps, animationProps) => (
        <button 
          style={{ padding: '20px' }} 
          type="button" 
          {...eventProps}  // Spread event-related props
        >
          <div {...animationProps} />  // Spread animation-specific props
        </button>
      )}
    />
  );
};
