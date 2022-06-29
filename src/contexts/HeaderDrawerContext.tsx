import { createContext, ReactNode, useCallback, useContext, useState } from "react";

interface HeaderDrawerContextProps {
  children: ReactNode;
}

type HeaderDrawerContextData = {
  isOpen: boolean;
  setOpen(open: boolean): void;
};

const HeaderDrawerContext = createContext<HeaderDrawerContextData>({} as HeaderDrawerContextData);

export function HeaderDrawerProvider({ children }: HeaderDrawerContextProps) {

  const [isOpen, setIsOpen] = useState(false);

  const setOpen = useCallback((open: boolean) => {
    if(open) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  }, []);

  return (
    <HeaderDrawerContext.Provider value={{ isOpen, setOpen }}>
      {children}
    </HeaderDrawerContext.Provider>
  );
}

export const useHeaderDrawer = () => useContext(HeaderDrawerContext);