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
