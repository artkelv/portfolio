import { HeaderComp, Ancor, Marca, Navegation } from "./styled"

const Header = () => {
    return(
        <div>
            <HeaderComp>
                <Marca>Arthur Kelvim</Marca>
                <Navegation>
                    <Ancor href="">Sobre</Ancor>
                    <Ancor href="">Projetos</Ancor>
                    <Ancor href="">Contato</Ancor>
                </Navegation>
            </HeaderComp>
        </div>
    )
}
export default Header