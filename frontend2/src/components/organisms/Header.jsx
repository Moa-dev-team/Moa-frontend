import React from "react";
import LinkedIcon from "../molecules/LinkedIcon";
import logoImage from "../../assets/logo.png";
import profileLogoImage from "../../assets/profileIcon.png";
import Box from "../atoms/Box";
import Button from "../atoms/Button";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeCookie } from "../../utils/cookie";
import { setUser } from "../../store/slices/userSlice";

export default function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  const handleLoginClick = () => {
    if (isLoggedIn) {
      removeCookie("accessToken");
      dispatch(setUser({ isLoggedIn: false }));
      navigate("/");
    } else {
      navigate("/login");
    }
  };

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
            onClick={handleLoginClick}
          >
            {isLoggedIn ? "로그아웃" : "로그인"}
          </Button>
        </Box>
      </nav>
    </header>
  );
}
