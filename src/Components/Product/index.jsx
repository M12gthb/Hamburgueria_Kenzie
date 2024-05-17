import { StyledProduct } from "../../styles/product"
const Product = ({product, handleClick}) =>{
    return(
        <StyledProduct>
            <img src={product.img} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.category}</p>
            <p className="Price">R$ {product.price.toFixed(2)}</p>
            <button onClick={() => handleClick(product)}>Adicionar</button>
        </StyledProduct>
    )
}
export default Product