import styled from "styled-components/native";

export const Container = styled.View`
  height: 100%;
  justify-content: space-between;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 32px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: 14px;

  color: ${({ theme }) => theme.colors.text};
`;

export const PressArea = styled.TouchableOpacity`
  justify-content: center;
`;

export const Form = styled.View``;

export const Input = styled.View`
  width: 100%;
  height: 60px;
  padding: 0 16px;
  background: #fff;
  border-radius: 16px;
  margin-bottom: 8px;
  border-width: 2px;
  border-color: ${({ theme }) => theme.colors.cover};

  flex-direction: row;
  align-items: center;
`;

export const TextInput = styled.TextInput`
  flex: 1;
  color: ${({ theme }) => theme.colors.text};
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const AddButton = styled.TouchableOpacity`
  width: 100%;
  height: 64px;
  padding: 0 16px;
  background: ${({ theme }) => theme.colors.primary};
  border-radius: 16px;
  margin-top: 8px;
  margin-bottom: 8px;

  justify-content: center;
  align-items: center;
`;

export const AddButtonTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: 16px;

  color: #fff;
`;
