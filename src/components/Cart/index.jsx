import './Cart.css';
import { totalContext } from '../../contexts/TotalContextProvider';
import { useContext } from 'react';

export const Cart = () => {

    const [total,setTotal] = useContext(totalContext)

  return (
    <div className="cart-container">
        <div className="cart">
            <p>Total: ${total}</p>
            <button onClick={() => {setTotal(0)}}>Apagar</button>
        </div>
    </div>
  )
}
