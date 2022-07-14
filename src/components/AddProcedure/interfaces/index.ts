import { Procedure } from '../../../screens/Home';

interface FormData {
  name: string;
  description: string;
  category: string;
}

export interface AddProcedureProps {
  addProcedure: (data: FormData) => void;
  closeAddProcedure: () => void;
}
