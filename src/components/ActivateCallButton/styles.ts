import styled, { css } from "styled-components";
import { Colors } from "../../utils";

interface IWrapperButtonProps {
  activate: boolean;
}
export const WrapperButton = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  border: 1px solid ${Colors.gray_dark};
  border-radius: 20px;

  margin: 10% 10px 20px 10px;
  padding: 20px;

  background-color: ${Colors.gray_light};
`;

export const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  height: 200px;
  width: 200px;

  border-radius: 50%;
  background-color: ${Colors.white};

  box-shadow: inset 0 0 60px ${Colors.gray_dark}, 0 0 10px ${Colors.gray_dark};

  svg {
    animation: ${({ activate }: IWrapperButtonProps) =>
      activate ? css`pulse 4s infinite` : css`none`};
    @keyframes pulse {
      0% {
        transform: scale(1);
      }
      50% {
        transform: scale(1.1);
      }
      100% {
        transform: scale(1);
      }
    }
  }
`;

export const Text = styled.h5`
  color: ${({ activate }: IWrapperButtonProps) =>
    activate ? Colors.orange : Colors.gray_dark};
  font-family: sans-serif;
  font-size: 16px;
  margin: 12px 0;
  transition: 1s;
`;
