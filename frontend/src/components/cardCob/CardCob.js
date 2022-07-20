import { FaFutbol } from "react-icons/fa"
import { ContainerCob, TitleCob, DescriptionCob, BtnCob, figFaFut, Languages} from "./styled"

const CardCob = () => {
    return(
        <div>
            <ContainerCob>
                <FaFutbol style={figFaFut}/>
                <TitleCob>API COB</TitleCob>
                <DescriptionCob>API do COBC(comitê Olimpico Brasileiro)no estilo CRUD.
                    Clicando no botão abaixo você terá informações completa sobre o projeto.
                </DescriptionCob>
                <Languages>Node, TypeScript e MySql.</Languages>
                <a href="https://github.com/artkelv/Estante-Virtual" target="_blank"><BtnCob>ver projeto</BtnCob></a>
            </ContainerCob>
        </div>
    )
}
export default CardCob
