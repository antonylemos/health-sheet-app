import { Container, Greetings, Span, Username, User } from "./styles";
import { AntDesign } from "@expo/vector-icons";
export function Header() {
  return (
    <Container>
      <Greetings>
        <Span>Olá,</Span>

        <Username>Paciente!</Username>
      </Greetings>
      <User>
        <AntDesign name="user" size={30} color="white" />
      </User>
    </Container>
  );
}
