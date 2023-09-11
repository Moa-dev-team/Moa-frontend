import React from "react";
import { Controller } from "react-hook-form";
import Select from "react-select";

export default function FormSelector({
  name,
  label,
  control,
  isMulti,
  isModifying,
  options,
}) {
  return (
    <>
      <label htmlFor={name} className="font-bold">
        {label}
      </label>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value, ref } }) => (
          <Select
            inputId={name}
            closeMenuOnSelect={false}
            isMulti={isMulti}
            isDisabled={!isModifying}
            options={options}
            ref={ref}
            value={value}
            onChange={(option) => onChange(option)}
            isOptionDisabled={(option) => option.isdisabled}
          />
        )}
      />
    </>
  );
}
