import Logo from "../../assets/Logo.svg"
import { StyledHeader } from "../../styles/header"
const Header = ({showProducts, setSearchValue, searchValue}) =>{
    const submit = (event) =>{
        event.preventDefault()
        showProducts(searchValue)
    }
    return(
        <StyledHeader>
            <img src={Logo} alt="Logo da Hamburgueria" />
            <form onSubmit={(event) => submit(event)}>
                <input placeholder="Digitar pesquisa" type="text" value={searchValue} onChange={(event) => setSearchValue(event.target.value)}/>
                <button type="submit">Pesquisar</button>
            </form>
        </StyledHeader>
    )
}
export default Header