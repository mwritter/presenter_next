"use client";

import { type ReactNode, createContext, useRef, useContext } from "react";
import { useStore } from "zustand";
import { createPresenterStore, Store } from ".";

export type PresenterStoreApi = ReturnType<typeof createPresenterStore>;

export const PresenterStoreContext = createContext<
  PresenterStoreApi | undefined
>(undefined);

export interface PresenterStoreProviderProps {
  children: ReactNode;
}

export const PresenterStoreProvider = ({
  children,
}: PresenterStoreProviderProps) => {
  const storeRef = useRef<PresenterStoreApi>(null);
  if (!storeRef.current) {
    storeRef.current = createPresenterStore();
  }

  return (
    <PresenterStoreContext value={storeRef.current}>
      {children}
    </PresenterStoreContext>
  );
};

export const usePresenterStore = <T,>(selector: (store: Store) => T): T => {
  const presenterStoreContext = useContext(PresenterStoreContext);

  if (!presenterStoreContext) {
    throw new Error(
      `usePresenterStore must be used within PresenterStoreProvider`
    );
  }

  return useStore(presenterStoreContext, selector);
};
