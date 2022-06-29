import { FaFutbol } from "react-icons/fa"
import { ContainerCob, TitleCob, DescriptionCob, BtnCob} from "./styled"

const figFaFut = {
    fontSize:"100px",
    textAlign:"center",
    width:"100%"
}
const CardCob = () => {
    return(
        <div>
            <ContainerCob>
                <FaFutbol style={figFaFut}/>
                <TitleCob>API COB</TitleCob>
                <DescriptionCob>API do COBC(comitê Olimpico Brasileiro)no estilo CRUD.
                    Clicando no botão abaixo você terá informações completa sobre o projeto.
                </DescriptionCob>
                <BtnCob>ver projeto</BtnCob>
            </ContainerCob>
        </div>
    )
}
export default CardCob
