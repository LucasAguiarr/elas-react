import React, { HTMLAttributes } from "react";
import { WrapperOption } from "./styles";

interface IOptionProps extends HTMLAttributes<HTMLDivElement> {
  text: string;
  isSelected: boolean;
}

export const Option: React.FC<IOptionProps> = ({
  text,
  isSelected,
  ...res
}) => {
  return (
    <WrapperOption isSelected={isSelected} {...res}>
      {text}
    </WrapperOption>
  );
};
