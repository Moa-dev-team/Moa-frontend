import React, { forwardRef } from "react";
import Box from "../atoms/Box";

const Input = forwardRef(({ children, id, ariaInvalid, ...rest }, ref) => {
  return (
    <Box className="flex justify-between">
      <label htmlFor={id} className="font-bold">
        {children}
      </label>
      <input
        className="w-72"
        id={id}
        ref={ref}
        aria-invalid={ariaInvalid}
        {...rest}
      />
    </Box>
  );
});

export default Input;
