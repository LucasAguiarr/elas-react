import React, { useState } from "react";
import { Container, Text, Input, WrapperInput } from "./styles";
import { Colors } from "../../utils";
import { Eye, EyeOff } from "@styled-icons/evaicons-solid";

interface IProps {
  text: string;
  placeholder: string;
  value: string;
  security?: boolean;
  confirmed: boolean;
  onChange: (e: any) => void;
}
export const Inputs = ({
  placeholder,
  text,
  onChange,
  value,
  security,
  confirmed,
}: IProps) => {
  const [visible, setVisible] = useState(true);
  return (
    <Container>
      <Text>{text}</Text>
      <WrapperInput>
        <Input
          confirmed={confirmed}
          type={security && visible ? "password" : "text"}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
        />
        {security &&
          (visible ? (
            <Eye
              onClick={() => setVisible(!visible)}
              size={20}
              style={{
                cursor: "pointer",
                position: "absolute",
                right: 0,
              }}
              color={Colors.gray_dark}
            />
          ) : (
            <EyeOff
              onClick={() => setVisible(!visible)}
              size={20}
              style={{
                cursor: "pointer",
                position: "absolute",
                right: 0,
              }}
              color={Colors.orange}
            />
          ))}
      </WrapperInput>
    </Container>
  );
};
