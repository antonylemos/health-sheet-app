import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background: #fff;
  align-items: center;
  justify-content: center;
`;
export const LogoPageLogin = styled.View`
  background: #fff;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;
`;
export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  margin-top: 20px;
`;

export const Input = styled.View`
  width: 80%;
  height: 60px;
  padding: 0 16px;
  background: rgba(64, 178, 163, 0.05);
  border-radius: 8px;
  margin-bottom: 8px;
  border-width: 2px;
  border-color: ${({ theme }) => theme.colors.primary};
  flex-direction: row;
  align-items: center;
`;

export const TextInput = styled.TextInput`
  flex: 1;
  color: #8f8e94;
  font-weight: 500;
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.regular};
  margin-left: 5px;
`;

export const StyledText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  color: #fff;
`;

export const ButtonEffect = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.primary};
  width: 80%;
  min-height: 52px;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  margin-top: 20px;
`;

export const Register = styled.View`
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin-top: 11px;
`;
export const RegisterText = styled.Text`
  font-size: 16px;
  font-weight: 400;
  font-family: ${({ theme }) => theme.fonts.light};
`;
export const RegisterLink = styled.Text`
  font-size: 16px;
  font-weight: 600;
  font-family: ${({ theme }) => theme.fonts.medium};
`;
