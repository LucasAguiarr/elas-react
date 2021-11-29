import { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router";
import {
  Container,
  WrapperModal,
  ContainerSlider,
  WrapperSliderIcon,
  WrapperSliderContent,
  SliderTitle,
  ContainerSignInSignUp,
  WrapperSwitch,
} from "./styles";
import { Colors } from "../../utils";
import { Inputs } from "../../components/Input";

import { Switch } from "../../components/Switch";
import { FormComponent } from "../../components/Form";
import { AuthContext, IUserSignIn, IUserSignUp } from "../../contexts/auth";
import { Coffee, Rocket } from "@styled-icons/boxicons-regular";

export const Login = () => {
  const history = useHistory();
  const { user, signIn, signUp } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const [isSignIn, setIsSignIn] = useState(true);
  const [isValidSignUp, setIsValidSignUp] = useState(true);
  const [isValidSignIn, setIsValidSignIn] = useState(true);
  const [messageError, setMessageError] = useState("");
  const [userSignUp, setUserSignUp] = useState<IUserSignUp>({
    full_name: "",
    email: "",
    password: "",
  });
  const [userSignIn, setUserSignIn] = useState<IUserSignIn>({
    email: "",
    password: "",
  });

  useEffect(() => {
    if (user) {
      history.push("/");
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  const cmdSignUp = async () => {
    setLoading(true);
    setIsValidSignUp(true);
    setMessageError("");

    try {
      await signUp(userSignUp);
      setIsDone(true);
      setIsSignIn(!isSignIn);
    } catch (error: any) {
      let message: string;
      if (error.request.status === 401) {
        message = "Usuário ja existe.";
      } else {
        message = "Parametros invalidos.";
      }

      setIsValidSignUp(false);
      setMessageError(message);
    } finally {
      setIsDone(false);
      setLoading(false);
    }
  };

  const cmdSignIn = async () => {
    setLoading(true);
    setIsValidSignIn(true);
    setMessageError("");

    try {
      await signIn(userSignIn);
      setIsDone(true);
      history.push("/");
    } catch (error: any) {
      let message: string;
      if (error.request.status === 401) {
        message = "E-mail ou senha invalido!";
      } else {
        message = "Parametros invalidos.";
      }
      setIsValidSignIn(false);
      setMessageError(message);
    } finally {
      setLoading(false);
      setIsDone(false);
    }
  };

  const componentSignIn = () => {
    return (
      <FormComponent
        isFocused={isSignIn}
        isClicked={isSignIn}
        isDone={isDone}
        isLoading={loading}
        onPress={cmdSignIn}
        buttonText={"Sign In"}
        isTerm={false}
        isValid={isValidSignIn}
        messageError={messageError}
      >
        <Inputs
          text={"E-mail"}
          placeholder={"Your e-mail goes here"}
          value={userSignIn.email}
          confirmed={!!userSignIn.email}
          onChange={(text) => {
            setUserSignIn({ ...userSignIn, email: text.target.value });
            setIsValidSignIn(true);
            setMessageError("");
          }}
        />
        <Inputs
          text={"Password"}
          security={true}
          placeholder={"********"}
          confirmed={!!userSignIn.password}
          value={userSignIn.password}
          onChange={(text) => {
            setUserSignIn({
              ...userSignIn,
              password: text.target.value,
            });
            setIsValidSignIn(true);
            setMessageError("");
          }}
        />
      </FormComponent>
    );
  };

  const componentSignUp = () => {
    return (
      <FormComponent
        isFocused={isSignIn}
        isClicked={isSignIn}
        isDone={isDone}
        isLoading={loading}
        onPress={cmdSignUp}
        buttonText={"Sign Up"}
        isTerm={true}
        isValid={isValidSignUp}
        messageError={messageError}
      >
        <Inputs
          text={"Full Name"}
          placeholder={"Enter your full name"}
          confirmed={!!userSignUp.full_name}
          value={userSignUp.full_name}
          onChange={(text) => {
            setUserSignUp({ ...userSignUp, full_name: text.target.value });
            setIsValidSignUp(true);
            setMessageError("");
          }}
        />
        <Inputs
          text={"E-mail"}
          placeholder={"Your e-mail goes here"}
          confirmed={!!userSignUp.email}
          value={userSignUp.email}
          onChange={(text) => {
            setUserSignUp({ ...userSignUp, email: text.target.value });
            setIsValidSignUp(true);
            setMessageError("");
          }}
        />
        <Inputs
          text={"Password"}
          security={true}
          placeholder={"********"}
          confirmed={!!userSignUp.password}
          value={userSignUp.password}
          onChange={(text) => {
            setUserSignUp({
              ...userSignUp,
              password: text.target.value,
            });
            setIsValidSignUp(true);
            setMessageError("");
          }}
        />
      </FormComponent>
    );
  };

  return (
    <Container>
      <WrapperModal>
        <ContainerSlider>
          <WrapperSliderIcon>
            <Coffee size={25} color={Colors.orange} />
          </WrapperSliderIcon>
          <WrapperSliderContent>
            <SliderTitle>
              Plan your activities and control your progress online
            </SliderTitle>
            <Rocket size={200} color={Colors.gray_light} />
          </WrapperSliderContent>
        </ContainerSlider>

        <ContainerSignInSignUp>
          <WrapperSwitch>
            <Switch check={isSignIn} onClick={() => setIsSignIn(!isSignIn)} />
          </WrapperSwitch>
          {isSignIn && componentSignIn()}
          {!isSignIn && componentSignUp()}
        </ContainerSignInSignUp>
      </WrapperModal>
    </Container>
  );
};
