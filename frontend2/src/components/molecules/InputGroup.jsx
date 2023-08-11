import React from "react";
import Box from "../atoms/Box";

export default function InputGroup({ label, value, disabled }) {
  return (
    <Box>
      <label>
        {label}
        <input type="text" value={value} disabled={disabled} />
      </label>
    </Box>
  );
}
