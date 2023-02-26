import { createContext, useState } from "react"

export const totalContext = createContext();

export const TotalContextProvider = ({children}) => {

    const [total, setTotal] = useState(0);

  return (
    <totalContext.Provider value={[total, setTotal]}>
    {children}
    </totalContext.Provider>
  )
}
