import React from "react";
import Container from "../atoms/Container";
import GithubLoginButton from "../molecules/GithubLoginButton";
import GoogleLoginButton from "../molecules/GoogleLoginButton";
import NaverLoginButton from "../molecules/NaverLoginButton";
import Box from "../atoms/Box";

export default function LoginForm() {
  return (
    <Container className="flex flex-col justify-center items-center mt-10 px-20 py-12 border rounded-sm">
      <h2 className="text-3xl font-semibold">로그인</h2>
      <p className="mb-8 py-4 text-lg">
        간단한 로그인 후 다양한 기능을 체험해 보세요.
      </p>
      <Box className="flex flex-col gap-3">
        <GithubLoginButton />
        <GoogleLoginButton />
        <NaverLoginButton />
      </Box>
    </Container>
  );
}
