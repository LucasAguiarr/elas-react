import styled from "styled-components";
import { Colors } from "../../utils";

interface IInput {
  confirmed: boolean;
}

export const Container = styled.div`
  margin: 20px 0;
`;

export const Text = styled.h5`
  color: ${Colors.white};
  font-family: sans-serif;
  padding-bottom: 8px;
`;

export const Input = styled.input`
  color: #eee;
  outline: none;
  background-color: transparent;
  padding-bottom: 10px;
  width: 100%;
  border-bottom: 1px solid
    ${(props: IInput) => (props.confirmed ? Colors.orange : Colors.gray_dark)};

  :focus {
    border-bottom: 1px solid ${Colors.orange};
  }
`;

export const WrapperInput = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;
