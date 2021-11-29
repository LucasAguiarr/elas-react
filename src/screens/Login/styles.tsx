import styled from "styled-components";
import { Colors } from "../../utils";

export const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(
    90deg,
    ${Colors.gradient.dark} 0%,
    ${Colors.gradient.light} 100%
  );
  justify-content: center;
  align-items: center;
`;

export const WrapperModal = styled.div`
  display: flex;
  flex-direction: row;
  height: 60vh;
  width: 80vh;
  border-radius: 10px;

  @media (max-width: 450px) {
    height: 80%;
    width: 100%;
  }
`;

// Left
export const ContainerSlider = styled.div`
  flex: 1;
  border-radius: 10px 0 0 10px;
  background-color: ${Colors.gray_dark};
  padding: 16px;

  @media (max-width: 750px) {
    display: none;
  }
`;
export const WrapperSliderIcon = styled.div`
  width: 100%;
`;

export const WrapperSliderContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 70%;
  text-align: center;
  justify-content: space-between;
  align-items: center;
`;
export const SliderTitle = styled.h4`
  color:  ${Colors.white};
  font-weight: 700;
  font-family: sans-serif;
  padding-top: 50px;
`;

// Right
export const ContainerSignInSignUp = styled.div`
  flex: 1;
  border-radius: 0 10px 10px 0;
  background-color:  ${Colors.black};
  padding: 16px;

  @media (max-width: 750px) {
    border-radius: 10px;

    margin: 0 20px;
  }

  @media (max-width: 450px) {
    height: 100%;
  }
`;
export const WrapperSwitch = styled.div`
  display: flex;
  height: 20px;
  width: 100%;
  align-items: center;
  justify-content: flex-end;
  padding-top: 10px;
`;
