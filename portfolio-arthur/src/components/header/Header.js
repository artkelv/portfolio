import { HeaderComp, Ancor, Marca } from "./styled"

export const Header = () => {
    return(
        <HeaderComp>
            <Marca>Arthur Kelvim</Marca>
            <nav>
                <Ancor href="">Sobre</Ancor>
                <Ancor href="">Projetos</Ancor>
                <Ancor href="">Contato</Ancor>
            </nav>
        </HeaderComp>
    )
}
export default Header