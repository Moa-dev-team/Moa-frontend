import React from "react";
import Box from "../atoms/Box";

export default function InputGroup({ children, value, disabled }) {
  return (
    <Box>
      <label>
        {children}
        <input type="text" value={value} disabled={disabled} />
      </label>
    </Box>
  );
}
