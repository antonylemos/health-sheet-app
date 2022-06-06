import { Container, Greetings, Span, Username } from './styles';

export function Header() {
  return (
    <Container>
      <Greetings>
        <Span>Olá,</Span>

        <Username>Paciente!</Username>
      </Greetings>
    </Container>
  )
}
