export interface IBottomSheet {
  component: JSX.Element;
  isVisible?: boolean;
}

export interface BottomSheetProps {
  open: boolean;
  closeComponent: () => void;
}

export interface BottomSheetContextData {
  bottomSheet: IBottomSheet;
  handleBottomSheet({ component }: IBottomSheet): void;
  clear(): void;
}
