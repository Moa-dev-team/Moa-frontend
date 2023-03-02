import React from "react";
import logo from "../../assets/images/Logo.png";
import { FcGoogle } from "react-icons/fc";
import { SiNaver, SiGithub } from "react-icons/si";

const loginSNS = [
  { text: "구글", logo: <FcGoogle />, id: 1 },
  { text: "네이버", logo: <SiNaver />, id: 2 },
  { text: "깃허브", logo: <SiGithub />, id: 3 },
];

export default function Login() {
  return (
    <div>
      <section>
        <div>
          <img src={logo} alt="logo" />
          <h1>Moa</h1>
          <h2>로그인</h2>
        </div>
        <pre>간단한 로그인 후 다양한 기능을 체험해보세요</pre>
        <ul>
          {loginSNS.map((sns) => (
            <li key={sns.id}>
              {sns.logo}
              {sns.text}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
