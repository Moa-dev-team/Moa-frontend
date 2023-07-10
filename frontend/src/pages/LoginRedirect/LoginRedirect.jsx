import React, { useEffect } from "react";
import { getToken } from "../../api/auth";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

export default function LoginRedirect() {
  const { handleIsUser } = useAuth();
  const navigate = useNavigate();
  const { provider } = useParams();
  const location = new URL(window.location.href);
  const code = location.searchParams.get("code");

  useEffect(() => {
    const login = async () => {
      const response = await getToken(provider, code);

      if (response.status === 200) {
        handleIsUser();
        navigate("/", { replace: true });
      }
    };
    login();
  }, [code, handleIsUser, navigate, provider]);

  return <div>Loading...</div>;
}
