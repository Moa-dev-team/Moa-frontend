import React, { useEffect } from "react";
import { getToken } from "../../api/auth";
import { useParams } from "react-router-dom";

export default function LoginRedirect() {
  const { provider } = useParams();

  useEffect(() => {
    const queryString = window.location.search;
    const code = getQueryParams(queryString);
    getToken(provider, code);
  }, [provider]);

  return <div>login callback page</div>;
}

function getQueryParams(queryString) {
  const pairs = queryString.substring(1).split("=");

  return decodeURIComponent(pairs[1]);
}
