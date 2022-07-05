import { HeaderComp, Ancor, Marca } from "./styled"

const Header = () => {
    return(
        <HeaderComp>
            <Marca>Arthur Kelvim</Marca>
            <nav>
                <Ancor href="#sobre">Sobre</Ancor>
                <Ancor href="#projetos">Projetos</Ancor>
                <Ancor href="#contato">Contato</Ancor>
            </nav>
        </HeaderComp>
    )
}
export default Header