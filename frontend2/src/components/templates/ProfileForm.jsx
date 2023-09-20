import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Button from "../atoms/Button";
import Photo from "../molecules/Photo";
import { CATEGORIES, JOB, JOBS } from "../../utils/constant";
import Input from "../molecules/Input";
import useProfile from "../../hooks/useProfile";
import Container from "../atoms/Container";
import FormSelector from "../molecules/FormSelector";
import Editor from "../molecules/Editor";
import Box from "../atoms/Box";

export default function ProfileForm() {
  const [isModifying, setIsModifying] = useState(false);
  const {
    profileQuery: {
      error,
      data: {
        data: { name, skills, job, imageUrl, email, introduction },
      },
    },
    updateProfile,
  } = useProfile();
  const [editorValue, setEditorValue] = useState(introduction);
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
    updateProfile.mutate({
      ...formData,
      skills,
      job,
      introduction: editorValue,
    });
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
    <form
      id="user-form"
      className="w-full min-w-[941px]"
      onSubmit={onSubmit(handleSubmit)}
    >
      <Container className="flex gap-16 mb-6">
        <section className="flex flex-col gap-3 shrink-0">
          <Photo
            width="w-56"
            className="mb-8 rounded-full"
            src={imageUrl}
            alt={name}
          />
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
            autoClose={true}
            options={JOBS}
            control={control}
          />
        </section>
        <section className="flex flex-col gap-3 grow min-w-[500px]">
          <FormSelector
            name="skills"
            label="기술 스택"
            isMulti={true}
            isModifying={isModifying}
            autoClose={false}
            options={CATEGORIES}
            control={control}
          />
          <span className="mt-6 font-bold">자기소개</span>
          <Editor
            introduction={editorValue}
            onChange={setEditorValue}
            isModifying={isModifying}
          />
        </section>
      </Container>
      <Box className="flex justify-end">
        {isModifying ? (
          <Button
            type="submit"
            color="blue"
            radius="sm"
            className="py-[2px] px-6"
            disabled={isSubmitting}
          >
            저장
          </Button>
        ) : (
          <Button
            type="button"
            color="blue"
            radius="sm"
            className="py-[2px] px-6"
            onClick={handleModifyClick}
          >
            수정
          </Button>
        )}
      </Box>
    </form>
  );
}
