import React, { forwardRef } from "react";
import Box from "../atoms/Box";

const Input = forwardRef(({ children, id, ariaInvalid, ...rest }, ref) => {
  return (
    <Box>
      <label htmlFor={id}>{children}</label>
      <input id={id} ref={ref} aria-invalid={ariaInvalid} {...rest} />
    </Box>
  );
});

export default Input;
