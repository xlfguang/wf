import styled from "styled-components";
export const LoginBody = styled.div`
  justify-content: space-between;
  @media (max-width: 768px) {
    height: auto;
    padding: 20px;
  }
`;

export const LoginBox = styled.div`
  width: 1210px;
  margin: 126px auto 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LoginLogo = styled.img`
  width: 477px;
  height: 205px;
`;
export const LoginFormTitle = styled.div`
  color: #ffffff;
  font-size: 24px;
  font-weight: 600;
  text-align: center;
  margin-bottom: 32px;
`;

export const LoginForm = styled.div`
  width: 535px;
  height: 679px;
  border-radius: 36px;
  border: 1.5px solid rgba(255, 255, 255, 0.12);
  background: linear-gradient(
    180deg,
    rgba(13, 21, 29, 0.4) 0%,
    rgba(25, 36, 49, 0.4) 100%
  );
  padding: 48px 29px 42px;
`;

export const LoginInput = styled.input`
  color: #ffffff4d;
  background: #070c1480;
  border: 1px solid #ffffff14;
  backdrop-filter: blur(30px);
  font-size: 14px;
  font-weight: 400;
  padding: 17.5px 24px;
  width: 100%;
  border-radius: 8px;
  margin-bottom: 12px;
`;

export const LoginBtn = styled.button`
  background: linear-gradient(
    92.39deg,
    #ffffff 5.83%,
    #ffffff 15.48%,
    #fcf605 66.12%,
    #45f836 110.21%
  );
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  padding: 16px 0;
  width: 100%;
  border-radius: 8px;
  margin-top: 65px;
`;

export const Tips = styled.div`
  width: 342px;
  height: 36px;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  text-align: center;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: #ffffff80;
  margin: 16px auto;
`;
export const Line = styled.div`
  width: 100%;
  height: 1px;
  border: 0.5px solid #90a6c566;
  margin-bottom: 24px;
`;

export const TipsTowBox = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin: 35px auto 0;
  justify-content: center;
`;
export const TipsTow = styled.div`
  font-size: 12px;
  color: #ffffff80;
  font-weight: 400;
`;
export const SwtichBtn = styled.button`
  border: 1px solid #ffffff14;
  color: #ffffff;
  font-size: 14px;
  line-height: 21px;
  padding: 10px 26px;
  border-radius: 4px;
`;
