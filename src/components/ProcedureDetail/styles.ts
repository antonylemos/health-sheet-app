import styled from "styled-components/native";

export const Container = styled.View`
  height: 100%;
  justify-content: space-between;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 152px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 30px;

  color: ${({ theme }) => theme.colors.text};
`;

export const PressArea = styled.TouchableOpacity`
  justify-content: center;
`;

export const Body = styled.View`
  align-items: center;
`;

export const ProcedureTitle = styled(Title)`
  font-size: 24px;
`;

export const ProcedureDescription = styled(Title)`
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.text};
  font-size: 18px;
`;

export const DeleteButton = styled.TouchableOpacity`
  width: 100%;
  height: 64px;
  padding: 0 16px;
  background: #c70e2a;
  border-radius: 16px;
  margin-top: 8px;
  margin-bottom: 8px;

  justify-content: center;
  align-items: center;
`;

export const DeleteButtonTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 16px;

  color: #fff;
`;

export const AddButtonDoc = styled.TouchableOpacity`
  width: 140px;
  height: 140px;
  padding: 0 16px;
  background: ${({ theme }) => theme.colors.primary};
  border-width: 2px;
  border: none;
  border-radius: 16px;
  margin-top: 20px;
  margin-bottom: 30px;

  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const AddButtonTitleDoc = styled.Text`
  text-align: center;
  color: ${({ theme }) => theme.colors.text};
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.bold};
  margin-right: 10px;
`;
