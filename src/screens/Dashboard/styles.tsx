import styled from "styled-components";
import { Colors } from "../../utils";

export const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 100%;
  background-color: ${Colors.white};

  min-height: 100vh;
`;

export const Content = styled.div`
  display: flex;
  flex: 3;
  width: 100%;
  padding-left: 60px;
`;

export const Info = styled.aside`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  padding-right: 10px;
`;
export const Options = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  gap: 10px;
`;

export const UserCards = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 20px;
  gap: 10px;
`;
