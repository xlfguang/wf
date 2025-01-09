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
      </CoverBox>
      <NavBar>
        <NavLogo />
        <NavList>
          <NavItem>Tab</NavItem>
          <NavItem>DOCS</NavItem>
          <NavItem>GITHUB</NavItem>
          <NavItem>X</NavItem>
        </NavList>
        <BtnBox>
          <LoginBtn>Login</LoginBtn>
          <RegisterBtn>Register</RegisterBtn>
        </BtnBox>
      </NavBar>
    </HomeBody>
  );
};

export default Home;
