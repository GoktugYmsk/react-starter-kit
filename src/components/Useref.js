import React, { forwardRef, useRef } from 'react';

const MyComponent = forwardRef((props, ref) => {
  return <input type="text" ref={ref} />;
});

function Useref() {
  const inputRef = useRef();

  const focusInput = () => {
    inputRef.current.focus();
  };

  const forwardRef = useRef();
  const handleClick = () => {
    forwardRef.current.focus();
  };

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={focusInput}>Focusla</button>
      <MyComponent ref={forwardRef} />
      <button onClick={handleClick}>Forward Focusla</button>
    </div>
  );
}

export default Useref;
