import { HTMLAttributes } from "react";
import { WrapperButton, Button, Text } from "./styles";
import { Colors } from "../../utils";
import { Sound } from "@styled-icons/foundation/Sound";

interface IActivateCallButtonProps extends HTMLAttributes<HTMLDivElement> {
  activate: boolean;
}
export const ActivateCallButton: React.FC<IActivateCallButtonProps> = ({
  activate,
  ...res
}) => {
  return (
    <WrapperButton>
      <Button activate={activate} {...res}>
        <Sound color={activate ? Colors.green : Colors.gray_dark} size={150} />
      </Button>
      <Text activate={activate}>{activate ? "Ativo" : "Inativo"}</Text>
    </WrapperButton>
  );
};
