import React from 'react';

import { LoadingViewProps } from './interfaces';
import { Title, Container, Description } from './styles';

export const LoadingView = React.memo(({ subject }: LoadingViewProps) => {
  return (
    <Container>
      <Title>Carregando {subject.toLocaleLowerCase('pt-BR')}... 👻</Title>
      <Description>Isso pode demorar alguns segundos</Description>
    </Container>
  );
});
