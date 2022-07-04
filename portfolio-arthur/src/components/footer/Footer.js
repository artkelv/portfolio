import { FaLinkedin, FaGithub, FaWhatsapp, FaRegEnvelope, FaRegHeart, FaHeart } from "react-icons/fa"
import { FooterSection, TitleContact, ContentFooter, FaIcons, Form, InputName, InputEmail, InputTel, InputTextarea, InputSubmit, EndSection, figFa } from "./styled"

const Footer = () => {
    return(
        <footer>
            <FooterSection id="contato">
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
                        <InputTextarea cols="30" rows="10"></InputTextarea>
                        <InputSubmit type="submit" />
                    </Form>
                    <FaIcons>
                        <a href="https://www.linkedin.com/in/arthur-kelvim-780068213/" target="_blank"><FaLinkedin style={figFa}/></a>
                        <a href="https://github.com/artkelv" target="_blank"><FaGithub style={figFa}/></a>
                        <a href="https://tinyurl.com/485n6euf" target="_blank"><FaWhatsapp style={figFa}/></a>
                        <a href="mailto:kelvim.dev159@gmail.com"><FaRegEnvelope style={figFa}/></a>
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