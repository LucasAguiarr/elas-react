import styled, { css } from "styled-components";
import { Colors } from "../../utils";

interface IWrapperOptionProps {
  isSelected: boolean;
}
export const WrapperOption = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 8px 12px;
  border-radius: 10px;
  cursor: pointer;

  transition: 0.5s;

  ${({ isSelected }: IWrapperOptionProps) =>
    isSelected
      ? css`
          background-color: ${Colors.orange};
          color: ${Colors.white};
        `
      : css`
          background-color: transparent};
          color: ${Colors.black};
        `};
`;
