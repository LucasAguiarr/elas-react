import React from "react";
import { WrapperIcon, Text } from "./styles";

interface IMenuIcon {
  text?: string;
  onCLick?: () => void;
}
export const MenuIcon: React.FC<IMenuIcon> = ({ children, text, onCLick }) => {
  return (
    <WrapperIcon onClick={onCLick}>
      {children}
      <Text>{text}</Text>
    </WrapperIcon>
  );
};
