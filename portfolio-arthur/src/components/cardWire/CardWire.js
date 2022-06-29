import { FaRegMoneyBillAlt } from "react-icons/fa"
import {ContainerWire, TitleWire, DescriptionWire, BtnWire} from "./styled"

const figFaRegMoney = {
    fontSize:"100px",
    textAlign:"center",
    width:"100%"
}
const CardWireFrame = () => {
    return(
        <div>
            <ContainerWire>
                <FaRegMoneyBillAlt style={figFaRegMoney}/>
                <TitleWire>api wireframe</TitleWire>
                <DescriptionWire>API de pagamentos que desenvolvi com NODE e Typescript
                    Clicando no botão abaixo você irá encontrar informações completas deste trabalho
                    incrivel e que adorei realizá-lo.
                </DescriptionWire>
                <BtnWire>ver projeto</BtnWire>
            </ContainerWire>
        </div>
    )
}
export default CardWireFrame
