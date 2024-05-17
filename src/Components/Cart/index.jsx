import { StyledCart } from "../../styles/cart"
import { StyledDiv } from "../../styles/cart"
import { StyledUl } from "../../styles/cart"
const Cart = ({currentSale, setCurrentSale}) =>{
    const total = currentSale.reduce((accumulator, currentSale) => accumulator + Number(currentSale.price),
     0)
    const removeAll = () =>{
        const current = []
        setCurrentSale(current)
    }
    const removeItem = (id) =>{
      const newSale = currentSale.filter((card) =>
        card.id !== id
    )
    setCurrentSale(newSale)
     }
    return(
        <>
            {currentSale.length > 0 ? (
                <StyledCart>
                    <StyledDiv>
                        <h1>Carrinho de compras</h1>
                    </StyledDiv>
                    <StyledUl>
                        {currentSale.map(card =>{
                            return(
                                <li key={card.id}>
                                    <img src={card.img} alt={card.name} />
                                    <h3 className="liH3">{card.name}</h3>
                                    <p className="pLi">{card.category}</p>
                                    <button className="buttonLi" onClick={() => removeItem(card.id)}>Remover</button> 
                                </li>
                             )})}
                            <div></div>
                            <section>
                            <h4>Total</h4>
                            <h5 className="Pay">R$ {total.toFixed(2)}</h5>
                            </section>
                            <button   onClick={removeAll}>Remover todos</button>
                        </StyledUl>
                    </StyledCart>
                ):(
                    <StyledCart>
                        <StyledDiv>
                            <h1>Carrinho de compras</h1>
                        </StyledDiv>
                        <h6>Sua sacola está vazia</h6>
                        <p className="noItens">Adicione itens</p>
                    </StyledCart>
                )}
         </>
     ) 
}

export default Cart 