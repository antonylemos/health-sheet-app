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
