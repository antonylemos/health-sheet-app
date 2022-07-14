import styled from 'styled-components/native';

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
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: 14px;

  color: ${({ theme }) => theme.colors.text};
`;

export const PressArea = styled.TouchableOpacity`
  justify-content: center;
`;

export const Body = styled.View`
  align-items: center;
`;

export const ProcedureTitle = styled(Title)`
  font-size: 16px;
`;

export const ProcedureDescription = styled(Title)`
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.text};
`;

export const DeleteButton = styled.TouchableOpacity`
  width: 100%;
  height: 64px;
  padding: 0 16px;
  background: #C70E2A;
  border-radius: 16px;
  margin-top: 8px;
  margin-bottom: 8px;

  justify-content: center;
  align-items: center;
`;

export const DeleteButtonTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: 16px;

  color: #fff;
`;
