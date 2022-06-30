import { FaLinkedin, FaGithub, FaWhatsapp, FaRegEnvelope, FaRegHeart, FaHeart } from "react-icons/fa"
import { FooterSection, TitleContact, ContentFooter, FaIcons, Form, InputName, InputEmail, InputTel, InputTextarea, InputSubmit, EndSection, EndDesc } from "./styled"

const figFa = {
    fontSize:"50px",
    margin:"5px"
}

const Footer = () => {
    return(
        <footer>
            <FooterSection>
                <TitleContact>Contato . . .</TitleContact>
                <ContentFooter>
                    <Form action="">
                        <label htmlFor="">Nome</label>
                        <InputName type="text"/>
                        <label htmlFor="">Email</label>
                        <InputEmail type="email"/>
                        <label htmlFor="">Telefone</label>
                        <InputTel type="tel"/>
                        <label htmlFor="">Mensagem</label>
                        <InputTextarea  id="" cols="30" rows="10"></InputTextarea>
                        <InputSubmit type="submit" />
                    </Form>
                    <FaIcons>
                        <FaLinkedin style={figFa}/>
                        <FaGithub style={figFa}/>
                        <FaWhatsapp style={figFa}/>
                        <FaRegEnvelope style={figFa}/>
                    </FaIcons>
                </ContentFooter>
            </FooterSection>
            <EndSection>
                <p>Feito com <FaRegHeart/> e <FaHeart/> por Arthur.</p>
            </EndSection>
        </footer>
    )
}
export default Footer