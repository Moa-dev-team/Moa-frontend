import { useQuery } from "@tanstack/react-query";
import React from "react";
import Select from "react-select";
import { getUserProfileById } from "../../apis/profile";
import Photo from "../molecules/Photo";
import { JOB } from "../../utils/constant";
import Editor from "../molecules/Editor";
import Input from "../molecules/Input";

export default function UserProfile({ userId }) {
  const {
    error,
    data: {
      data: { email, imageUrl, name, skills, job, introduction },
    },
  } = useQuery(["profile", userId], () => getUserProfileById(userId));

  if (error) {
    return <div>{error.message}</div>;
  }
  const selectorValue = getSelectorValue(skills);
  return (
    <>
      <section className="flex flex-col gap-3 shrink-0">
        <Photo
          width="w-56"
          className="mb-8 rounded-full"
          src={imageUrl}
          alt={name}
        />
        <Input id="name" type="name" disabled={true} value={name}>
          이름
        </Input>
        <Input id="email" type="email" disabled={true} value={email}>
          이메일
        </Input>
        <Input id="job" type="job" disabled={true} value={JOB[job]}>
          직무
        </Input>
      </section>
      <section className="flex flex-col gap-3 grow min-w-[500px]">
        <span className="font-bold">기술스택</span>
        <Select
          isDisabled
          isMulti
          isClearable={selectorValue.some((v) => !v.isFixed)}
          value={selectorValue}
          styles={styles}
        />
        <span className="mt-6 font-bold">자기소개</span>
        <Editor introduction={introduction} isModifying={false} />
      </section>
    </>
  );
}

const styles = {
  control: (baseStyles) => ({
    ...baseStyles,
    backgroundColor: "white",
  }),
  multiValue: (base, state) => {
    return state.data.isFixed ? { ...base, backgroundColor: "#e6e5e5" } : base;
  },
  multiValueLabel: (base, state) => {
    return state.data.isFixed
      ? { ...base, fontWeight: "bold", color: "#3b3b3b", paddingRight: 6 }
      : base;
  },
  multiValueRemove: (base, state) => {
    return state.data.isFixed ? { ...base, display: "none" } : base;
  },
};

const getSelectorValue = (skills) => {
  return skills.map((skill) => ({
    value: skill,
    label: skill,
    isFixed: true,
  }));
};
