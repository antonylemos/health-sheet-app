import { FlatList } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 32px;
  background: #E1FAF7;
`;

export const Text = styled.Text`
  color: #222;
`;

export const ProceduresListHeader = styled.View`
  margin-top: 32px;
  margin-bottom: 48px;
`;

export const ProceduresListTitle = styled(Text)`
  font-family: ${({theme}) => theme.fonts.bold};
`;

export const ProceduresList = styled(FlatList)``;

export const AddButton = styled.TouchableOpacity`
  background: ${({theme}) => theme.colors.primary};

  height: 64px;
  width: 64px;
  border-radius: 16px;

  align-self: center;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 32px;
`;
