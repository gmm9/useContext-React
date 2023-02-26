import './CardsContainer.css';
import { useContext } from 'react';
import { ProdutosContext } from '../../contexts/ProdutosContextProvider';
import { totalContext } from '../../contexts/TotalContextProvider';


export function CardsContainer() {

    const produtos = useContext(ProdutosContext)
    const [total, setTotal] = useContext(totalContext)

    return (
        <div className="cardContainer">
            {
                produtos.map(produto => {
                    return (
                        <div className="card" key={produto.id}>
                            <img src={produto.images[0]} className="card-img" alt="imagem" />
                            <p className="product-name">{produto.title}</p>
                            <div className="priceContainer">
                                <p className="price">R${produto.price}</p>
                                <button onClick={() => {setTotal(total + produto.price)}}>Add to cart</button>

                            </div>
                        </div>
                    )
                })
            }

        </div>
    )
}
