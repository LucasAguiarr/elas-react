import styled from "styled-components";
import { Colors } from "../../utils";

interface IProps {
  checked?: boolean;
}
export const Container = styled.button`
  display: flex;
  width: 100px;
  height: 30px;
  background-color: ${(props: IProps) =>
    props.checked ? Colors.orange : Colors.gray_dark};
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  cursor: pointer;

  @media (max-width: 750px) {
    width: 60%;
    margin: 0 auto;
  }
`;

export const Text = styled.h5`
  color:  ${Colors.white};
  font-family: sans-serif;
  font-weight: 400;
`;

export const Loader = styled.div`
  border: 5px solid  ${Colors.gray_light};
  border-top: 5px solid transparent;
  border-radius: 50%;
  width: 10px;
  height: 10px;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
