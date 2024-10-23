import { createContext, useContext, useState } from "react";

const CountContext = createContext();

export function CountContextProvider({ children }) {
  const [count, setCount] = useState(0);
  return (
    <CountContext.Provider value={{ count:count, setCount:setCount }}>
      {children}
    </CountContext.Provider>
  );
}

export function useCountContext() {
  const { count, setCount } = useContext(CountContext);
  return { count, setCount };
}
