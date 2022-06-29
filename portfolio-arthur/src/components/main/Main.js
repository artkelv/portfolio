import { MainBackGround, Title, AboutMe, TitleAbout, Description, SecDesc} from "./styled"
import { FaAngleDoubleDown } from "react-icons/fa"
import fotoPerfil from "../../assets/foto_perfil_3.png"

const figFaAngle = {
    textAlign:"center",
    color:"#333",
    width:"100%"
}
const myImage = {
    height:"300px"
}

const Main = () => {
    return(
        <div>
            <MainBackGround>
                <Title>Full-Stack Developer</Title>
            </MainBackGround>
            <FaAngleDoubleDown style={figFaAngle}/>
            <AboutMe>
                <TitleAbout>Sobre mim . . .</TitleAbout>
            </AboutMe>
            <Description>
                <SecDesc>
                    <p>Sou um estudante e recém formado em desenvolvimento web Full-Stack pela Escola de Programação Labenu.
                        Sei trabalhar com tecnologias Front-End, HTML, CSS, JavaScript e React, mas atualmente
                        foco todo o meu esforço em produzir projetos em Back-end usando tecnologias como: Node e
                        TypeScript. Também estudo e sei manipular MySql como Banco de Dados.</p>
                    <p>Sou obcecado por criar pequenos projetos do zero, tenho focado todo meu esforço
                        para produzir projetos Back-end por que é onde eu desejo atuar e esta é a area que eu gosto hoje. Fique a 
                        vontade para visitar meus projetos no github, o link está na seção de "contato".</p>
                </SecDesc>    
                <img src={fotoPerfil} alt="Foto pessoal do Arthur" style={myImage}/>
            </Description>
        </div>
    )
}
export default Main
