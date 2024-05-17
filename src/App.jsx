import { useEffect, useState } from 'react'
import { Globalstyle } from './styles/global'
import Header from './Components/Header'
import ProductList from './Components/ProductList';
import Cart from './Components/Cart';
import { api } from './services/api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [products, setProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchValue, setSearchValue] =useState("")
  const showProducts = (searchValue) =>{
    const filter = products.filter((product) => product.name.toLowerCase().includes(searchValue.toLowerCase()) 
    || product.category.toLowerCase().includes(searchValue.toLowerCase()))
    setFilteredProducts(filter)
  }
  const handleClick = (product) =>{
      if(!currentSale.some(current => current.id === product.id)){
        const newCurrentSale = [...currentSale, product]
        setCurrentSale(newCurrentSale)
      }else{
        toast.warn("Este item já foi adicionado!", {
          autoClose: 2500,
        })
      }
    }

  useEffect(() =>{
    async function LoadProducts(){
      try{
        const response = await api.get('/products')
        setProducts(response.data)
      }catch(error){
        toast.error(error, {
          autoClose: 5000,
        })
      }
    }
    LoadProducts()
  },[])

  return (
      <>
        <Globalstyle />
        <ToastContainer position="bottom-left"/>
        <Header showProducts={showProducts} setSearchValue={setSearchValue} searchValue={searchValue}/>
        <ProductList products={products} 
          handleClick={handleClick} 
          filteredProducts={filteredProducts} 
          searchValue={searchValue}
          showProducts={showProducts}
          setFilteredProducts={setFilteredProducts}
          setSearchValue={setSearchValue}/>
        <Cart currentSale={currentSale} setCurrentSale={setCurrentSale}/>
      </>
  )
}

export default App
