import {
  BtnBox,
  CoverBox,
  CoverOption,
  DownloadBtn,
  Footer,
  Body,
  LeftImg,
  LoginBtn,
  Logo,
  NavBar,
  NavItem,
  NavList,
  NavLogo,
  PageTitle,
  RegisterBtn,
  RightImg,
  SelectorBox,
  SubTitle,
} from "./style";
import leftImg from "@/assets/left.png";
import rightImg from "@/assets/right.png";
import Selector from "./components/Selector";
import logo from "@/assets/logo.png";
import logo2 from "@/assets/logo2.png";
import Cover from "./components/Cover";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();

  const toLogin = () => {
    navigate("/login");
  };
  return (
    <Body>
      <LeftImg src={leftImg} />
      <RightImg src={rightImg} />
      <PageTitle>Model Forge：The Future of Driver Assistance</PageTitle>
      <SubTitle>
        We are entering a new milestone. ModelForge is building the foundation
        for AI-assisted and fully autonomous driving.
      </SubTitle>
      <CoverBox>
        <CoverOption>
          <SelectorBox>
            <Logo src={logo} />
            <Selector></Selector>
            <Selector></Selector>
            <Selector></Selector>
          </SelectorBox>
          <DownloadBtn>Download</DownloadBtn>
        </CoverOption>
        <Cover></Cover>
      </CoverBox>
      <NavBar>
        <NavLogo src={logo2} />
        <NavList>
          <NavItem>HOME</NavItem>
          <NavItem
            href="https://modelforge-1.gitbook.io/modelforge-docs"
            target="_blank"
          >
            DOCS
          </NavItem>
          <NavItem
            href="https://github.com/Exversito/Model-Forge"
            target="_blank"
          >
            GITHUB
          </NavItem>
          <NavItem href="https://x.com/ModelForgeai" target="_blank">
            X
          </NavItem>
        </NavList>
        <BtnBox>
          <LoginBtn onClick={toLogin}>Login</LoginBtn>
          <RegisterBtn onClick={toLogin}>Sign Up</RegisterBtn>
        </BtnBox>
      </NavBar>
      <Footer>Model forge © All Rights Rserved</Footer>
    </Body>
  );
};

export default Home;
