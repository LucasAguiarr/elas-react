import { useState } from "react";
import { Wrapper, Content, Info, Options, UserCards } from "./styles";
import { ActivateCallButton } from "../../components/ActivateCallButton";
import { MenuBar } from "../../components/MenuBar";
import { Option } from "../../components/Option";
import { UserCard } from "../../components/UserCard";

export const Dashboard = () => {
  const [options, setOptions] = useState({
    inProgress: true,
    concluded: false,
  });
  const [isCallActivated, setIsCallActivated] = useState(false);
  return (
    <Wrapper>
      <MenuBar />
      <Content></Content>

      <Info>
        <ActivateCallButton
          activate={isCallActivated}
          onClick={() => setIsCallActivated(!isCallActivated)}
        />

        <Options>
          <Option
            text="In progress"
            isSelected={options.inProgress}
            onClick={() => setOptions({ concluded: false, inProgress: true })}
          />
          <Option
            text="Concluded"
            isSelected={options.concluded}
            onClick={() => setOptions({ concluded: true, inProgress: false })}
          />
        </Options>

        {options.inProgress && (
          <UserCards>
            <UserCard name={"Patricia regina"} date={new Date()} />
            <UserCard name={"Maria paula"} date={new Date()} />
            <UserCard name={"Ewillyn vital"} date={new Date()} />
            <UserCard name={"Luisa souza"} date={new Date()} />
          </UserCards>
        )}
        {options.concluded && (
          <UserCards>
            <UserCard name={"Julia da silva"} date={new Date()} />
            <UserCard name={"Maria eduarda"} date={new Date()} />
            <UserCard name={"sabrina vital"} date={new Date()} />
            <UserCard name={"pedro henrique"} date={new Date()} />
            <UserCard name={"Luis silva"} date={new Date()} />
          </UserCards>
        )}
      </Info>
    </Wrapper>
  );
};
