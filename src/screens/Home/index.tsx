import { useCallback, useEffect, useState } from 'react';
import { Text } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { Header } from '../../components/Header';
import { mockedUser } from '../../mocks/user';
import { api } from '../../services/api';

import { AddButton, Container, ProceduresList, ProceduresListHeader, ProceduresListTitle } from './styles';
import { LoadingView } from '../../components/LoadingView';

export interface Procedure {
  id: number;
  name: string;
  description: string;
  type?: any;
  category?: any;
  file?: any;
  fileKey?: any;
  createdAt: Date;
  updatedAt: Date;
}

export function Home() {
  const [procedures, setProcedures] = useState<Procedure[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchProcedures = useCallback(async () => {
    try {
      setLoading(true);

      const { data } = await api.get<Procedure[]>(`procedures/?userId=${mockedUser.id}`);

      setProcedures(data);
    } finally {
      setLoading(false);
    }
  }, []);

  const addProcedure = useCallback(async () => {
    const mockedProcedure = {
      name: `Procedimento teste ${Math.random()}`,
      description: "Procedimento criado para testes",
      type: null,
      category: null,
      userId: mockedUser.id,
    };

    try {
      await api.post('procedures', mockedProcedure);
    } finally {
      fetchProcedures();
    }
  }, [fetchProcedures]);

  useEffect(() => {
    fetchProcedures();
  }, [fetchProcedures]);

  if (loading) {
    return <LoadingView subject='procedimentos' />
  }

  return (
    <Container>
      <Header />

      <ProceduresList
        data={procedures}
        ListHeaderComponent={() => (
          <ProceduresListHeader>
            <ProceduresListTitle>Adicionados recentemente</ProceduresListTitle>
          </ProceduresListHeader>
        )}
        renderItem={({ item: procedure }) => <Text>{procedure.name}</Text>}
      />

      <AddButton onPress={addProcedure}>
        <Feather name="plus" size={24} color="#fff" />
      </AddButton>
    </Container>
  )
}
