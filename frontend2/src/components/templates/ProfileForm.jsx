import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import Select from "react-select";
import { getUserProfile, setUserProfile } from "../../apis/profile";
import Button from "../atoms/Button";
import Box from "../atoms/Box";
import Photo from "../molecules/Photo";
import { CATEGORIES } from "../../utils/constant";

export default function ProfileForm() {
  const [isModifying, setIsModifying] = useState(true);
  const {
    error,
    data: { data },
  } = useQuery(["profile"], getUserProfile);
  const queryClient = useQueryClient();
  const updateProfile = useMutation(
    (data) => setUserProfile({ skills: data }),
    {
      onSuccess: () => queryClient.invalidateQueries(["profile"]),
    }
  );
  const {
    control,
    register,
    handleSubmit,
    formState: { isSubmitting, isSubmitted, errors },
  } = useForm({
    mode: "onSubmit",
    defaultValues: {
      name: data.name,
      email: data.email,
      skills: data.skills.map((skill) => ({ value: skill, label: skill })),
    },
  });

  const onSubmit = (formData) => {
    const data = formData.skills.map((skill) => skill.value);
    updateProfile.mutate(data);
    setIsModifying(true);
  };

  if (error) {
    return <div>{error.message}</div>;
  }
  return (
    <form id="user-form" onSubmit={handleSubmit(onSubmit)}>
      <Photo
        width="w-56"
        className="rounded-full"
        src={data.imageUrl}
        alt={data.name}
      />
      <Box className="flex flex-col">
        <label htmlFor="name">이름</label>
        <input
          id="name"
          type="text"
          disabled={isModifying}
          aria-invalid={
            isSubmitted ? (errors.name ? "true" : "false") : undefined
          }
          {...register("name", {
            required: "이름은 필수 입력입니다.",
            minLength: {
              value: 2,
              message: "2자리 이상의 이름을 사용하세요.",
            },
          })}
        />
        {errors.name && <small role="alert">{errors.name.message}</small>}
        <label htmlFor="email">이메일</label>
        <input
          id="email"
          type="text"
          disabled={isModifying}
          aria-invalid={
            isSubmitted ? (errors.email ? "true" : "false") : undefined
          }
          {...register("email", {
            pattern: {
              value:
                /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
              message: "이메일 형식에 맞지 않습니다.",
            },
          })}
        />
        {errors.email && <small role="alert">{errors.email.message}</small>}
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
