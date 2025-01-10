import {
  BtnBox,
  CoverBox,
  CoverOption,
  DownloadBtn,
  HomeBody,
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
import Cover from "./components/Cover";
const Home = () => {
  return (
    <HomeBody>
      <LeftImg src={leftImg} />
      <RightImg src={rightImg} />
      <PageTitle>Model forge：The Future of Driver Assistance</PageTitle>
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
        <NavLogo />
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
          <LoginBtn>Login</LoginBtn>
          <RegisterBtn>Sign Up</RegisterBtn>
        </BtnBox>
      </NavBar>
    </HomeBody>
  );
};

export default Home;
