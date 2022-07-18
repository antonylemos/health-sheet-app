import { Image } from "react-native";
import {
  Container,
  Form,
  Header,
  Title,
  TitleHeader,
  Input,
  TextInput,
  ButtonEffect,
  StyledText,
  ButtonBack,
  StyledTextBack,
} from "./styles";
import healthSheet from "../../assets/health-sheet.png";
import { AntDesign, MaterialCommunityIcons, Feather } from "@expo/vector-icons";

export function Register() {
  return (
    <Container>
      <Header>
        <Image
          source={healthSheet}
          style={{ width: 44 }}
          resizeMode="contain"
        />
        <TitleHeader>Health Sheet</TitleHeader>
      </Header>
      <Form>
        <Title>Cadastro: </Title>
        <Input>
          <AntDesign name="user" size={24} color="#8f8e94" />
          <TextInput placeholder="Nome"></TextInput>
        </Input>
        <Input>
          <AntDesign name="user" size={24} color="#8f8e94" />
          <TextInput placeholder="Sobrenome"></TextInput>
        </Input>
        <Input>
          <MaterialCommunityIcons
            name="email-outline"
            size={24}
            color="#8f8e94"
          />
          <TextInput placeholder="E-mail"></TextInput>
        </Input>
        <Input>
          <Feather name="lock" size={24} color="#8f8e94" />

          <TextInput secureTextEntry={true} placeholder="Senha"></TextInput>
        </Input>
        <Input>
          <Feather name="lock" size={24} color="#8f8e94" />

          <TextInput
            secureTextEntry={true}
            placeholder="Confirmar Senha"
          ></TextInput>
        </Input>
      </Form>
      <ButtonEffect>
        <StyledText>Cadastrar</StyledText>
      </ButtonEffect>
      <ButtonBack>
        <StyledTextBack>
          {" "}
          <AntDesign name="left" size={16} color="black" />
          Voltar
        </StyledTextBack>
      </ButtonBack>
    </Container>
  );
}
