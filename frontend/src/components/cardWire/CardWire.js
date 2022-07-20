import { FaRegMoneyBillAlt } from "react-icons/fa"
import {ContainerWire, TitleWire, DescriptionWire, BtnWire, figFaRegMoney, Languages} from "./styled"

const CardWireFrame = () => {
    return(
        <div>
            <ContainerWire>
                <FaRegMoneyBillAlt style={figFaRegMoney}/>
                <TitleWire>api wirecard</TitleWire>
                <DescriptionWire>API de pagamentos que desenvolvi com NODE e Typescript
                    Clicando no botão abaixo você irá encontrar informações completas deste trabalho
                    incrivel e que adorei realizá-lo.
                </DescriptionWire>
                <Languages>Node, TypeScript e MySql.</Languages>
                <a href="https://github.com/artkelv/WireFrame" target="_blank"><BtnWire>ver projeto</BtnWire></a>
            </ContainerWire>
        </div>
    )
}
export default CardWireFrame
