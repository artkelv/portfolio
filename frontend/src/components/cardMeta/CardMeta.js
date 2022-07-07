import { FaMaxcdn } from "react-icons/fa"
import { ContainerMeta, TitleMeta, DescriptionMeta, BtnMeta, figFaMax} from "./styled"

const CardMeta = () => {
    return(
        <div>
            <ContainerMeta>
                <FaMaxcdn style={figFaMax}/>
                <TitleMeta>Case Meta</TitleMeta>
                <DescriptionMeta>Case de um Hackaton em que participei pela empresa Meta
                    e onde eu e mais um amigo ficamos responsável por construir o back-end da aplicação.
                    Uma aplicação full-stack.
                </DescriptionMeta>
                <a href="https://gitlab.com/artkelv/hackaton-meta" target="_blank"><BtnMeta>Ver Projeto</BtnMeta></a>
            </ContainerMeta>
        </div>
    )
}
export default CardMeta
