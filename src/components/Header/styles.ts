import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 32px;
`;

export const Greetings = styled.View``;

export const Span = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: 18px;
  color: #222;
`;

export const Username = styled.Text`
  font-family: ${({theme}) => theme.fonts.bold};
  font-size: 24px;
  color: #222;

  line-height: 32px;
`;
