import { FaMaxcdn } from "react-icons/fa"
import { ContainerMeta, TitleMeta, DescriptionMeta, BtnMeta} from "./styled"

const figFaMax = {
    fontSize:"100px",
    textAlign:"center",
    width:"100%"
}

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
                <BtnMeta>Ver Projeto</BtnMeta>
            </ContainerMeta>
        </div>
    )
}
export default CardMeta
//.