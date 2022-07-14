import { useCallback, useEffect, useState } from 'react';
import { Text } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { Header } from '../../components/Header';
import { mockedUser } from '../../mocks/user';
import { api } from '../../services/api';

import { AddButton, Container, ProceduresList, ProceduresListCard, ProceduresListCardName, ProceduresListHeader, ProceduresListTitle } from './styles';
import { LoadingView } from '../../components/LoadingView';
import { useBottomSheet } from '../../contexts/bottom-sheet';
import { theme } from '../../styles';
import { AddProcedure } from '../../components/AddProcedure';
import { ProcedureDetail } from '../../components/ProcedureDetail';

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
  const { handleBottomSheet, clear } = useBottomSheet();

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

  const addProcedure = useCallback(async (data) => {
    const newProcedure = {
      ...data,
      userId: mockedUser.id,
    };

    try {
      await api.post('procedures', newProcedure);
    } finally {
      fetchProcedures();
    }
  }, [fetchProcedures]);

  const deleteProcedure = useCallback(async (id: number) => {
    try {
      await api.delete(`procedures/${id}`);
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
        contentContainerStyle={{ paddingHorizontal: 32, paddingBottom: 104 }}
        ListHeaderComponent={() => (
          <ProceduresListHeader>
            <ProceduresListTitle>Adicionados recentemente</ProceduresListTitle>
          </ProceduresListHeader>
        )}
        renderItem={({ item: procedure }) => (
          <ProceduresListCard onPress={() => handleBottomSheet({ component: <ProcedureDetail data={procedure as Procedure} deleteProcedure={deleteProcedure} closeProcedureDetail={clear} /> })}>
            <ProceduresListCardName>{procedure.name}</ProceduresListCardName>

            <Feather name="eye" size={24} color={theme.colors.primary} />
          </ProceduresListCard>
        )}
      />

      <AddButton onPress={() => handleBottomSheet({ component: <AddProcedure addProcedure={addProcedure} closeAddProcedure={clear} /> })}>
        <Feather name="plus" size={24} color="#fff" />
      </AddButton>
    </Container>
  )
}
