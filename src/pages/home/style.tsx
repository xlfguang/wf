import styled from "styled-components";

export const HomeBody = styled.div`
  background: linear-gradient(180deg, #070d16 11.07%, #0d1a21 100%);

  @media (max-width: 768px) {
    height: auto;
    padding: 20px;
  }
`;

export const LeftImg = styled.img`
  position: fixed;
  left: 0;
`;

export const RightImg = styled.img`
  position: fixed;
  right: 0;
`;

export const PageTitle = styled.h1`
  font-size: 2rem;
  background: linear-gradient(
    92.39deg,
    #ffffff 5.83%,
    #ffffff 15.48%,
    #fcf605 66.12%,
    #45f836 110.21%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-size: 54px;
  font-weight: 600;
  text-align: center;
  margin: 0px auto;
  padding: 54px 0 8px;

  @media (max-width: 768px) {
    font-size: 36px;
    padding: 40px 0 8px;
  }
`;

export const SubTitle = styled.h2`
  font-size: 18px;
  font-weight: 400;
  line-height: 27px;
  text-align: center;
  margin: 0 auto;
  max-width: 690px;
  color: #e2f4dfa1;

  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 24px;
  }
`;

export const CoverBox = styled.div`
  position: relative;
  margin: 17px auto 0;
  padding: 30px 25px;
  max-width: 1300px;
  height: 560px;
  border-radius: 36px;
  border: 1.5px;
  opacity: 0px;
  background: linear-gradient(180deg, #0d151d 0%, #192431 100%);
  border: 1.5px solid;
  border-image-source: linear-gradient(
    152.65deg,
    rgba(255, 255, 255, 0.12) 0.43%,
    rgba(255, 255, 255, 0.016) 50.36%,
    rgba(255, 255, 255, 0.12) 97.38%
  );

  @media (max-width: 768px) {
    max-width: 100%;
    height: auto;
    padding: 10px;
  }
`;

export const SelectorBox = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  position: relative;
  z-index: 99;
`;

export const CoverOption = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 24px 24px 0;
`;

export const Logo = styled.img`
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background: #000;
  margin-right: 14px;
`;

export const DownloadBtn = styled.button`
  width: 258px;
  height: 41px;
  padding: 11px;
  border-radius: 100px;
  background: linear-gradient(
    91.72deg,
    #ffffff -7.24%,
    #ffffff 3.4%,
    #fcf605 59.22%,
    #45f836 107.82%
  );
  position: relative;
  z-index: 2;
  @media (max-width: 768px) {
    width: 100%;
    padding: 10px 0;
  }
`;

export const NavBar = styled.div`
  margin: 20px auto 0;
  max-width: 1290px;
  height: 80px;
  border-radius: 120px;
  border: 1px solid #ffffff14;
  background: linear-gradient(0deg, #192431, #192431),
    linear-gradient(90.05deg, #131d27 -1.62%, #151f2b 69.84%, #131d27 102.26%);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 45px 0 70px;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    padding: 10px;
  }
`;

export const NavLogo = styled.img`
  width: 56px;
  height: 56px;
`;

export const NavList = styled.div`
  display: flex;
  align-items: center;
  gap: 68px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }
`;

export const NavItem = styled.a`
  color: #ffffff66;
  font-weight: 500;
  cursor: pointer;
`;

export const BtnBox = styled.div`
  display: flex;
  gap: 12px;
`;

export const LoginBtn = styled.button`
  border-radius: 120px;
  padding: 7.5px 40px;
  font-size: 14px;
  font-weight: 500;
  color: #ffffff80;
  border: 0.5px solid #ffffff4d;

  @media (max-width: 768px) {
    width: 100%;
    padding: 10px 0;
  }
`;

export const RegisterBtn = styled.button`
  font-size: 14px;
  font-weight: 500;
  border-radius: 120px;
  padding: 7.5px 40px;
  background: linear-gradient(
    91.72deg,
    #ffffff -7.24%,
    #ffffff 3.4%,
    #fcf605 59.22%,
    #45f836 107.82%
  );

  @media (max-width: 768px) {
    width: 100%;
    padding: 10px 0;
  }
`;

export const Footer = styled.div`
  width: 100%;
  max-width: 1290px;
  margin: 0 auto;
  display: flex;
  justify-content: end;
  align-items: center;
  color: #ffffff99;
  height: 60px;
`;
