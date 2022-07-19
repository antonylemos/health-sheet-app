import React, { useMemo, useState } from 'react';
import DocumentPicker, { DocumentPickerResponse } from 'react-native-document-picker';

import { AddProcedureProps } from './interfaces';
import {
  AddButton,
  AddButtonTitle,
  Container,
  Form,
  Header,
  Input,
  PressArea,
  TextInput,
  Title,
} from './styles';
import { theme } from '../../styles';
import { Feather } from '@expo/vector-icons';

export const AddProcedure = React.memo(
  ({ addProcedure, closeAddProcedure }: AddProcedureProps) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [file, setFile] = useState({} as DocumentPickerResponse);

    return (
      <Container>
        <Header>
          <Title>Adicionar procedimento</Title>

          <PressArea onPress={closeAddProcedure}>
            <Feather name="x" color={theme.colors.text} size={24} />
          </PressArea>
        </Header>

        <Form>
          <Input>
            <TextInput placeholder='Nome' value={name} onChangeText={setName} />
          </Input>

          <Input>
            <TextInput placeholder='Descrição' value={description} onChangeText={setDescription} />
          </Input>

          <Input>
            <TextInput placeholder='Categoria' value={category} onChangeText={setCategory} />
          </Input>

          {!file.name ? <AddButton onPress={async () => {
            const selectedFile = await DocumentPicker.pickSingle({
              type: [DocumentPicker.types.allFiles],
            });

            console.log({selectedFile})

            setFile(selectedFile);
          }}>
            <AddButtonTitle>Selecionar arquivo</AddButtonTitle>
          </AddButton> : <AddButtonTitle>{file.name}</AddButtonTitle>}

          <AddButton onPress={() => {
            addProcedure({ name, description, category, file });

            closeAddProcedure();
          }}>
            <AddButtonTitle>Adicionar procedimento</AddButtonTitle>
          </AddButton>
        </Form>
      </Container>
    );
  },
);
