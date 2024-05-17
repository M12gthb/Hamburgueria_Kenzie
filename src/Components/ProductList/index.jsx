import Product from "../Product"
import { StyledProductList } from "../../styles/productList"
import { StyledSearch } from "../../styles/search"
const ProductList = ({products, handleClick,filteredProducts,searchValue, setFilteredProducts, setSearchValue}) =>{
    const cleanProducts = () =>{
        setFilteredProducts([])
        searchValue = ""
        setSearchValue(searchValue)
    }
    return(
        filteredProducts.length > 0 ? (
            <>
                <StyledSearch>
                    <h1>Resultados para: <span>{searchValue}</span></h1>
                    <button onClick={() => cleanProducts()}>Limpar busca</button>
                </StyledSearch>
                <StyledProductList>
                    {filteredProducts.map((product) =>{
                        return(
                            <Product key={product.id} product={product} handleClick={handleClick}/>
                        ) 
                    })}
                </StyledProductList>
            </>
            ):(
                <StyledProductList>
                    {products.map((product) =>{
                       return(
                           <Product key={product.id} product={product} handleClick={handleClick}/>
                        ) 
                    })}
                </StyledProductList>
            )
    )
}
export default ProductList