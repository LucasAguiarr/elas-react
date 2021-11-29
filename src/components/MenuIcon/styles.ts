import styled from "styled-components";
import { Colors } from "../../utils";

export const Text = styled.p`
  font-size: 16px;
  color: ${Colors.white};
  display: none;
  margin-left: 10px;
`;

export const WrapperIcon = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.5s;

  :hover {
    svg {
      color: ${Colors.orange};
    }
    ${Text} {
      color: ${Colors.orange};
    }
  }
`;
