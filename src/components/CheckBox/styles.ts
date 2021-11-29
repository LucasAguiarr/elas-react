import styled from "styled-components";
import { Colors } from "../../utils";

interface IProps {
  checked: boolean;
}
export const Container = styled.button`
  display: flex;
  width: 15px;
  height: 15px;
  justify-content: center;
  align-items: center;
  border-radius: 2px;

  background-color: ${(props: IProps) =>
    props.checked ? Colors.orange : "transparent"};
  border: ${(props: IProps) =>
    props.checked ? "none" : `1px solid ${Colors.gray_dark} `};
`;
