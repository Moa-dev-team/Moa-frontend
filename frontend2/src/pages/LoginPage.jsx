import React from "react";
import LinkedIcon from "../components/molecules/LinkedIcon";
import logoImage from "../assets/logo.png";
import LoginForm from "../components/organisms/LoginForm";

export default function LoginPage() {
  return (
    <main className="flex flex-col justify-center items-center w-full h-full">
      <LinkedIcon path="/" src={logoImage} alt="logo" width="w-12">
        <h2 className="ml-3 text-5xl font-semibold">Moa</h2>
      </LinkedIcon>
      <LoginForm />
    </main>
  );
}
