import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Button from "../atoms/Button";
import Box from "../atoms/Box";
import Photo from "../molecules/Photo";
import { CATEGORIES, JOB, JOBS } from "../../utils/constant";
import Input from "../molecules/Input";
import useProfile from "../../hooks/useProfile";
import Container from "../atoms/Container";
import FormSelector from "../molecules/FormSelector";

export default function ProfileForm() {
  const [isModifying, setIsModifying] = useState(false);
  const {
    profileQuery: {
      error,
      data: {
        data: { name, skills, job, imageUrl, email },
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
      name,
      skills: skills.map((skill) => ({ value: skill, label: skill })),
      job: { value: job, label: JOB[job] },
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
    const job = formData.job.value;
    const skills = formData.skills.map((skill) => skill.value);
    updateProfile.mutate({ ...formData, skills, job });
    setIsModifying(false);
  };
  const handleModifyClick = (e) => {
    e.preventDefault();
    setIsModifying(true);
  };

  if (error) {
    return <div>{error.message}</div>;
  }
  return (
    <form id="user-form" onSubmit={onSubmit(handleSubmit)}>
      <Container className="flex">
        <div>
          <Photo
            width="w-56"
            className="rounded-full"
            src={imageUrl}
            alt={name}
          />
          <Box className="flex flex-col">
            <Input
              id="name"
              type="text"
              disabled={!isModifying}
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
            <FormSelector
              name="job"
              label="직무"
              isMulti={false}
              isModifying={isModifying}
              options={JOBS}
              control={control}
            />
            <FormSelector
              name="skills"
              label="기술 스택"
              isMulti={true}
              isModifying={isModifying}
              options={CATEGORIES}
              control={control}
            />
          </Box>
        </div>
        <div></div>
      </Container>
      {isModifying ? (
        <Button type="submit" color="blue" disabled={isSubmitting}>
          저장
        </Button>
      ) : (
        <Button type="button" color="blue" onClick={handleModifyClick}>
          수정
        </Button>
      )}
    </form>
  );
}
