import { FaLinkedin, FaGithub, FaWhatsapp, FaRegEnvelope, FaRegHeart } from "react-icons/fa"
import { FooterSection, TitleContact, ContentFooter, FaIcons, Form, InputName, InputEmail, InputTel, InputTextarea, InputSubmit, EndSection, LinkForGitHub, FooterContainer } from "./styled"
import styledCss from "./styledCss.css"
import useForm from "../../hooks/useForm"
import axios  from "axios"
import Swal from "sweetalert2"

const Footer = () => {
    const URL_BASE = "https://portfolio-arthur-lab.herokuapp.com/portfolio/mensagem"

    const { form, onChangeDataUser, cleanFields } = useForm({
        nome:"",
        email:"",
        telefone:"",
        mensagem:""
    });
    const sendDataUser= (e) => {
        e.preventDefault()

        axios.post(URL_BASE, form)
        .then((response) => {
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Enviado!',
                showConfirmButton: false,
                timer: 1500
            })
        })
        .catch((error) => {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Algo deu errado',
            })
        })

        cleanFields()
    }
    return(
        <FooterContainer>
            <FooterSection id="contato">
                <TitleContact>Contato</TitleContact>
                <ContentFooter>
                    <Form onSubmit={sendDataUser}>
                        <label htmlFor="">Nome</label>
                        <InputName type="text" name="nome" value={form.nome} onChange={onChangeDataUser} required/>
                        <label htmlFor="">Email</label>
                        <InputEmail type="email" name="email" value={form.email} onChange={onChangeDataUser} required/>
                        <label htmlFor="">Telefone</label>
                        <InputTel type="number" name="telefone" value={form.telefone} onChange={onChangeDataUser} required/>
                        <label htmlFor="">Mensagem</label>
                        <InputTextarea cols="30" rows="10" name="mensagem" value={form.mensagem} onChange={onChangeDataUser} required></InputTextarea>
                        <InputSubmit type="submit"/>
                    </Form>
                    <FaIcons>
                        <a href="https://www.linkedin.com/in/arthur-kelvim-780068213/" target="_blank"><FaLinkedin className="faIcons" /></a>
                        <a href="https://github.com/artkelv" target="_blank"><FaGithub className="faIcons"/></a>
                        <a href="https://tinyurl.com/e5jeuvpj" target="_blank"><FaWhatsapp className="faIcons"/></a>
                        <a href="mailto:kelvim.dev159@gmail.com"><FaRegEnvelope className="faIcons"/></a>
                    </FaIcons>
                </ContentFooter>
            </FooterSection>
            <EndSection>
                <p>Feito com <FaRegHeart/> por <LinkForGitHub href="https://github.com/artkelv" target="_blank">artkelv</LinkForGitHub></p>
            </EndSection>
        </FooterContainer>
    )
}
export default Footer