import { Procedure } from '../../../screens/Home';

export interface ProcedureDetailProps {
  data: Procedure;
  deleteProcedure: (id: number) => void;
  closeProcedureDetail: () => void;
}
