import { createContext, useContext } from "react";
import { BarCodeType } from "../types/types";

type CodeContextType = {
  codeType: BarCodeType;
  setCodeType: React.Dispatch<React.SetStateAction<BarCodeType>>;
};

export const CodeContext = createContext<CodeContextType | undefined>(undefined);

export const useCodeContext = (): CodeContextType => {
  const context = useContext(CodeContext);

  if (!context) {
    throw new Error('useMyContext must be used within MyContextProvider');
  }

  return context;
};
