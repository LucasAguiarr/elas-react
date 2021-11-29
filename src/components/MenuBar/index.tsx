import React, { useContext } from "react";
import { WrapperFixed, Wrapper, WrapperInfo } from "./styles";
import { Colors } from "../../utils";
import { MenuIcon } from "../MenuIcon";
import { AuthContext } from "../../contexts/auth";
import { ShieldError } from "@styled-icons/fluentui-system-regular/ShieldError";
import { SettingsOutline } from "@styled-icons/evaicons-outline";
import { Location } from "@styled-icons/ionicons-outline/Location";
import { UserPlus } from "@styled-icons/boxicons-regular/UserPlus";
import { Logout } from "@styled-icons/heroicons-solid/Logout";

export const MenuBar = () => {
  const { signOut } = useContext(AuthContext);

  return (
    <WrapperFixed>
      <Wrapper>
        <MenuIcon onCLick={() => {}}>
          <ShieldError size={30} color={Colors.orange} />
        </MenuIcon>

        <WrapperInfo>
          <MenuIcon text="Localização" onCLick={() => {}}>
            <Location size={30} color={Colors.gray_light} />
          </MenuIcon>
          <MenuIcon text="Configurações" onCLick={() => {}}>
            <SettingsOutline size={30} color={Colors.gray_light} />
          </MenuIcon>
          <MenuIcon text="Usuários" onCLick={() => {}}>
            <UserPlus size={30} color={Colors.gray_light} />
          </MenuIcon>
        </WrapperInfo>

        <MenuIcon text="Sair" onCLick={signOut}>
          <Logout size={30} color={Colors.gray_light} />
        </MenuIcon>
      </Wrapper>
    </WrapperFixed>
  );
};
