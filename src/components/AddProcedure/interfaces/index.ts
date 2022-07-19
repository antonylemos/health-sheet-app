import { Procedure } from '../../../screens/Home';

interface FormData {
  name: string;
  description: string;
  category: string;
  file: any;
}

export interface AddProcedureProps {
  addProcedure: (data: FormData) => void;
  closeAddProcedure: () => void;
}
