import styled from "styled-components";
import { Colors } from "../../utils";

interface IProps {
  checked: boolean;
}
export const Container = styled.button`
  display: flex;
  width: 100px;
  height: 25px;
  background-color: ${Colors.gray_dark};
  border-radius: 20px;
`;

export const WrapperSingIn = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
  justify-content: center;
  align-items: center;
  border-radius: 20px 0 0 20px;
  background-color: ${(props: IProps) =>
    props.checked ? Colors.orange : "transparent"};
`;

export const WrapperSingUp = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
  justify-content: center;
  align-items: center;
  border-radius: 0 20px 20px 0;
  background-color: ${(props: IProps) =>
    !props.checked ? Colors.orange : "transparent"};
`;

export const Text = styled.h5`
  color: ${Colors.white};
  font-family: sans-serif;
  font-weight: 400;
`;
