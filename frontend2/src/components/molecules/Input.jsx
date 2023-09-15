import React, { forwardRef } from "react";
import Box from "../atoms/Box";

const Input = forwardRef(({ children, id, ariaInvalid, ...rest }, ref) => {
  return (
    <Box className="flex justify-between items-center">
      <label htmlFor={id} className="mr-4 font-bold shrink-0">
        {children}
      </label>
      <input
        className="w-72 px-2 py-1 bg-white border rounded-sm"
        id={id}
        ref={ref}
        aria-invalid={ariaInvalid}
        {...rest}
      />
    </Box>
  );
});

export default Input;
