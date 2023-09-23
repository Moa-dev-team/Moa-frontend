import React from "react";
import logoImage from "../assets/logo.png";
import LinkedIcon from "../components/molecules/LinkedIcon";
import Box from "../components/atoms/Box";
import Button from "../components/atoms/Button";
import { useNavigate } from "react-router-dom";
import Container from "../components/atoms/Container";

export default function LoginFailPage() {
  const navigate = useNavigate();

  const handleCancelClick = () => {
    navigate("/");
  };
  const handleLoginClick = () => {
    navigate("/login");
  };
  return (
    <main className="flex flex-col justify-center items-center w-full h-full">
      <LinkedIcon path="/" src={logoImage} alt="logo" width="w-12">
        <h2 className="ml-3 text-5xl font-semibold">Moa</h2>
      </LinkedIcon>
      <Container className="flex flex-col justify-center items-center mt-10 px-20 py-12 text-lg border rounded-sm">
        <h2 className="text-3xl font-semibold">로그인에 실패했습니다.</h2>
        <span className="pt-4">해당 이메일로 가입된 계정이 존재합니다.</span>
        <span>다시 로그인하시겠습니까?</span>
        <Box className="flex gap-8 mt-8">
          <Button
            className="px-8 py-1 border"
            radius="sm"
            onClick={handleCancelClick}
          >
            취소
          </Button>
          <Button
            className="px-8 py-1"
            color="blue"
            radius="sm"
            onClick={handleLoginClick}
          >
            확인
          </Button>
        </Box>
      </Container>
    </main>
  );
}
