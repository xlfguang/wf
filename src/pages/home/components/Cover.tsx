import styled, { keyframes } from "styled-components";

import coverbg from "@/assets/cover-bg.png";
import ARtheway from "@/assets/ARtheway.png";
const CoverBackground = styled.div`
  position: absolute;
  top: 30px;
  left: 25px;
  width: 1250px;
  height: 500px;
  border-radius: 20px;
  background-image: url(${coverbg});
  background-size: cover;
  z-index: 1;
  overflow: hidden;
`;

const Scan = keyframes`
  0% {
    transform: translateY(100%);
  }
  100% {
    transform: translateY(-100%);
  }
`;
const ScanAnimation = keyframes`
  0% {
    opacity: 0;
  }
 75%{
    opacity: 0;
 }
  80% {
    opacity: 1;
  }
  85% {
    opacity: 0;
  }
  90% {
    opacity: 1;
  }
  95% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const ScanContainer = styled.div`
  position: absolute;
  width: 1250px;
  height: 500px;
  background: linear-gradient(0deg, rgba(0, 255, 51, 0) 43%, #14cbd3 211%);
  transform: translateY(100%);
  animation: ${Scan} 2s linear infinite;
  animation-iteration-count: 2;
`;
//

const ARthewayImg = styled.img`
  position: absolute;
  width: 707px;
  height: 73px;
  bottom: 0px;
  left: 368px;
  animation: ${ScanAnimation} 4s;
`;

function Cover() {
  return (
    <CoverBackground>
      <ARthewayImg src={ARtheway} />
      <ScanContainer></ScanContainer>
    </CoverBackground>
  );
}

export default Cover;
