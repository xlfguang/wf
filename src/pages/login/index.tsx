import { LeftImg, RightImg } from "../home/style";
import {
  Line,
  LoginBody,
  LoginBox,
  LoginBtn,
  LoginForm,
  LoginFormTitle,
  LoginInput,
  LoginLogo,
  SwtichBtn,
  Tips,
  TipsTow,
  TipsTowBox,
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
          <LoginBtn>Register</LoginBtn>
          <Tips>
            By clicking on register, you agree to Tunnel's Terms ofService and
            Privacy Policy
          </Tips>
          <Line />
          <TipsTowBox>
            <TipsTow>Already have an account？</TipsTow>
            <SwtichBtn>Login</SwtichBtn>
          </TipsTowBox>
        </LoginForm>
      </LoginBox>
    </LoginBody>
  );
}

export default index;
