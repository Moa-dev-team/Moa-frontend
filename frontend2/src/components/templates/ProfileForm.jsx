import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import Select from "react-select";
import Button from "../atoms/Button";
import Box from "../atoms/Box";
import Photo from "../molecules/Photo";
import { CATEGORIES } from "../../utils/constant";
import Input from "../molecules/Input";
import useProfile from "../../hooks/useProfile";

export default function ProfileForm() {
  const [isModifying, setIsModifying] = useState(true);
  const {
    profileQuery: {
      error,
      data: {
        data: { name, skills, imageUrl, email },
      },
    },
    updateProfile,
  } = useProfile();
  const {
    control,
    register,
    handleSubmit: onSubmit,
    formState: { isSubmitting, isSubmitted, errors },
  } = useForm({
    mode: "onSubmit",
    defaultValues: {
      name: name,
      skills: skills.map((skill) => ({ value: skill, label: skill })),
    },
  });

  const nameRegister = register("name", {
    required: "이름은 필수 입력입니다.",
    minLength: {
      value: 2,
      message: "2자리 이상의 이름을 사용하세요.",
    },
  });

  const handleSubmit = (formData) => {
    const data = formData.skills.map((skill) => skill.value);
    updateProfile.mutate(data);
    setIsModifying(true);
  };

  if (error) {
    return <div>{error.message}</div>;
  }
  return (
    <form id="user-form" onSubmit={onSubmit(handleSubmit)}>
      <Photo width="w-56" className="rounded-full" src={imageUrl} alt={name} />
      <Box className="flex flex-col">
        <Input
          id="name"
          type="text"
          disabled={isModifying}
          ariaInvalid={
            isSubmitted ? (errors.name ? "true" : "false") : undefined
          }
          {...nameRegister}
        >
          이름
        </Input>
        {errors.name && <small role="alert">{errors.name.message}</small>}
        <Input id="email" type="email" disabled={true} value={email}>
          이메일
        </Input>
        <label htmlFor="skills">기술 스택</label>
        <Controller
          name="skills"
          control={control}
          render={({ field: { onChange, value, ref } }) => (
            <Select
              inputId="skills"
              closeMenuOnSelect={false}
              isMulti
              isDisabled={isModifying}
              options={CATEGORIES}
              ref={ref}
              value={value}
              onChange={(option) => onChange(option)}
              isOptionDisabled={(option) => option.isdisabled}
            />
          )}
        />
      </Box>
      <Button
        type="button"
        color="blue"
        disabled={!isModifying}
        onClick={() => setIsModifying(false)}
      >
        수정
      </Button>
      <Button type="submit" color="blue" disabled={isModifying || isSubmitting}>
        저장
      </Button>
    </form>
  );
}
