import React from "react";
import LinkedIcon from "../molecules/LinkedIcon";
import logoImage from "../../assets/logo.png";
import profileLogoImage from "../../assets/profileIcon.png";
import Box from "../atoms/Box";
import Button from "../atoms/Button";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  return (
    <header className="fixed top-0 w-full px-8 py-4 border-b bg-white">
      <nav className="flex justify-between">
        <LinkedIcon path="/" src={logoImage} alt="logo" width="w-10">
          <h2 className="ml-3 text-3xl font-semibold">Moa</h2>
        </LinkedIcon>
        <Box className="flex items-center">
          <LinkedIcon
            path="/profile"
            src={profileLogoImage}
            alt="profile"
            width="w-8"
          />
          <Button
            margin="ml-6"
            padding="px-5 py-buttonY"
            textsize="lg"
            fontsize="bold"
            color="blue"
            radius="lg"
            onClick={() => navigate("/login")}
          >
            로그인
          </Button>
        </Box>
      </nav>
    </header>
  );
}
