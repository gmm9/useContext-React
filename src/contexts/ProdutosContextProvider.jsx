import { Children, createContext, useEffect, useState } from "react"

export const ProdutosContext = createContext();

export const ProdutosContextProvider = ({children}) => {

    const [produtos, setProdutos] = useState([]);

useEffect(()=> {
    fetch(`https://api.escuelajs.co/api/v1/products`)
    .then(res => res.json())
    .then(data => setProdutos(data))
}, [])


  return (
    <ProdutosContext.Provider value={produtos}>
        {children}
    </ProdutosContext.Provider>
  )
}
