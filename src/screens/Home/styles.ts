import { FlatList } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background: #fff;
  margin-top: 36;
`;

export const Text = styled.Text`
  color: #222;
`;

export const ProceduresListHeader = styled.View`
  margin-bottom: 48px;
`;

export const ProceduresListTitle = styled(Text)`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: 18px;
`;

export const ProceduresList = styled(FlatList)``;

export const ProceduresListCard = styled.TouchableOpacity`
  flex-direction: row;

  padding: 16px;
  margin-bottom: 8px;
  border-radius: 16px;
  background: ${({ theme }) => theme.colors.secondary};

  justify-content: space-between;
  align-items: center;
`;

export const ProceduresListCardName = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
`;

export const AddButton = styled.TouchableOpacity`
  background: ${({ theme }) => theme.colors.primary};

  height: 64px;
  width: 64px;
  border-radius: 50px;

  align-self: center;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 32px;
`;
