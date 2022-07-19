import React, { useMemo } from 'react';

import { ProcedureDetailProps } from './interfaces';
import {
  Body,
  Container,
  DeleteButton,
  DeleteButtonTitle,
  Header,
  PressArea,
  ProcedureDescription,
  ProcedureTitle,
  Title,
} from './styles';
import { theme } from '../../styles';
import { Feather } from '@expo/vector-icons';
import { Alert, Linking } from 'react-native';

export const ProcedureDetail = React.memo(
  ({ data, deleteProcedure, closeProcedureDetail }: ProcedureDetailProps) => {
    return (
      <Container>
        <Header>
          <Title>Detalhes</Title>

          <PressArea onPress={closeProcedureDetail}>
            <Feather name="x" color={theme.colors.text} size={24} />
          </PressArea>
        </Header>

        <Body>
          <ProcedureTitle>{data.name}</ProcedureTitle>

          <ProcedureDescription>{data.description}</ProcedureDescription>

          {!!data.file && <DeleteButton onPress={async () => {
            const supported = await Linking.canOpenURL(data.file);

            if (supported) {
              await Linking.openURL(data.file);
            } else {
              Alert.alert(`Don't know how to open this URL: ${data.file}`);
            }
          }}>
            <DeleteButtonTitle>Abrir arquivo</DeleteButtonTitle>
          </DeleteButton>}

          <DeleteButton onPress={() => {
            deleteProcedure(data.id);

            closeProcedureDetail();
          }}>
            <DeleteButtonTitle>Apagar procedimento</DeleteButtonTitle>
          </DeleteButton>
        </Body>
      </Container>
    );
  },
);
