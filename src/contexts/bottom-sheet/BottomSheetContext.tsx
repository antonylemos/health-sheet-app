import React, {
  createContext,
  useState,
  useCallback,
  useContext,
  PropsWithChildren,
  useMemo,
} from 'react';

import { BottomSheet } from './components';
import { BottomSheetContextData, IBottomSheet } from './interfaces';

const BottomSheetContext = createContext<BottomSheetContextData>(
  {} as BottomSheetContextData,
);

function BottomSheetProvider({ children }: PropsWithChildren<unknown>) {
  const [bottomSheet, setBottomSheet] = useState<IBottomSheet>(
    {} as IBottomSheet,
  );

  const handleBottomSheet = useCallback(({ component }: IBottomSheet) => {
    setBottomSheet({
      isVisible: true,
      component,
    });
  }, []);

  const clear = useCallback(() => {
    setBottomSheet({} as IBottomSheet);
  }, []);

  const value = useMemo(
    () => ({ bottomSheet, handleBottomSheet, clear }),
    [bottomSheet, handleBottomSheet, clear],
  );

  return (
    <BottomSheetContext.Provider value={value}>
      {children}

      <BottomSheet open={!!bottomSheet.isVisible} closeComponent={clear}>
        {bottomSheet.component}
      </BottomSheet>
    </BottomSheetContext.Provider>
  );
}

function useBottomSheet(): BottomSheetContextData {
  const context = useContext(BottomSheetContext);

  return context;
}

export { BottomSheetProvider, useBottomSheet };
