import { LeftImg, RightImg } from "../home/style";
import {
  LoginBody,
  LoginBox,
  LoginForm,
  LoginFormTitle,
  LoginInput,
  LoginLogo,
} from "./style";
import leftImg from "@/assets/left.png";
import rightImg from "@/assets/right.png";
import loginLogo from "@/assets/LoginLogo.png";
function index() {
  return (
    <LoginBody>
      <LeftImg src={leftImg} />
      <RightImg src={rightImg} />
      <LoginBox>
        <LoginLogo src={loginLogo} />
        <LoginForm>
          <LoginFormTitle>Register</LoginFormTitle>
          <LoginInput placeholder="Email" />
          <LoginInput placeholder="Password" />
          <LoginInput placeholder="Confirm Password" />
          <LoginInput placeholder="Invite Code" />
        </LoginForm>
      </LoginBox>
    </LoginBody>
  );
}

export default index;
