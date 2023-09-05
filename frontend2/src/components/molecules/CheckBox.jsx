import React from "react";
import Box from "../atoms/Box";

export default function CheckBox({ id, children, checked, onClick }) {
  return (
    <Box className="flex justify-between items-center">
      <label className="w-full cursor-pointer" htmlFor={id}>
        {children}
      </label>
      <input
        className="w-5 h-5 cursor-pointer"
        type="checkbox"
        id={id}
        checked={checked}
        onChange={onClick}
      />
    </Box>
  );
}
