import { Text, Image } from "react-native";
import { MaterialCommunityIcons, Feather } from "@expo/vector-icons";

import { api } from "../../services/api";

import healthSheet from "../../assets/health-sheet.png";
import {
  Container,
  LogoPageLogin,
  Title,
  Input,
  TextInput,
  ButtonEffect,
  StyledText,
  Register,
  RegisterText,
  RegisterLink,
} from "./styles";

export function Login() {
  return (
    <Container>
      <LogoPageLogin>
        <Image source={healthSheet} />
        <Title>Health Sheet</Title>
      </LogoPageLogin>

      <Input>
        <MaterialCommunityIcons
          name="email-outline"
          size={24}
          color="#8f8e94"
        />

        <TextInput placeholder="Email"></TextInput>
      </Input>

      <Input>
        <Feather name="lock" size={24} color="#8f8e94" />

        <TextInput secureTextEntry={true} placeholder="Senha"></TextInput>
      </Input>

      <ButtonEffect>
        <StyledText>Entrar</StyledText>
      </ButtonEffect>

      <Register>
        <RegisterText>Não tem uma conta? </RegisterText>

        <RegisterLink>Cadastre-se Aqui!</RegisterLink>
      </Register>
    </Container>
  );
}
