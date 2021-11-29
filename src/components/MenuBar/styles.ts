import styled from "styled-components";
import { Colors } from "../../utils";
import { Text } from "../MenuIcon/styles";

export const Wrapper = styled.div`
  height: 90%;
  display: flex;
  flex-direction: column;
  margin-left: 20%;
  align-items: flex-start;
  justify-content: space-between;
`;

export const WrapperInfo = styled.div`
  height: 20%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

export const WrapperFixed = styled.div`
  height: 100%;
  width: 60px;

  background-color: ${Colors.black};
  position: fixed;

  display: flex;
  flex-direction: column;
  justify-content: center;

  border-radius: 0 20px 20px 0;

  transition: 0.5s;

  :hover {
    width: 200px;

    ${Text} {
      display: block;
    }
  }
`;
