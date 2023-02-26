import { CardsContainer } from "./components/CardsContainer";
import { Cart } from "./components/Cart";
import { ProdutosContextProvider } from "./contexts/ProdutosContextProvider";
import { TotalContextProvider } from "./contexts/TotalContextProvider";
import './App.css';

function App() {

  return (
    <ProdutosContextProvider>
    <TotalContextProvider>
      <div className="App">
      <CardsContainer />
      <Cart />
      </div>
      </TotalContextProvider>
      </ProdutosContextProvider>
  )
}

export default App
