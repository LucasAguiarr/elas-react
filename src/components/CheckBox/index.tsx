import React, { useEffect, useState } from "react";
import { Container } from "./styles";
import { Check2 } from "@styled-icons/bootstrap";

interface IProps {
  onClick: () => void;
  check: boolean;
}

export const CheckBox: React.FC<IProps> = ({ onClick, check }) => {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setChecked(check);
  }, [check]);

  return (
    <Container onClick={onClick} checked={checked}>
      {checked && <Check2 size={16} />}
    </Container>
  );
};
