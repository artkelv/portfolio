import { MainBackGround, Title, AboutMe, TitleAbout, Description, Skills, SecDesc, Projects, SectionCard,
TitleProjects, SectionSkills, TitleSkills, TitleSectionSkills, FirstSectionSkills, SecondSectionSkills,
ThirdSectionSkills, MainContent, figFaAngle, MyImage, figSkills, figCardSkills} from "./styled";
import { FaAngleDoubleDown, FaNode } from "react-icons/fa";
import { RiCss3Line } from "react-icons/ri";
import { GrHtml5, GrMysql } from "react-icons/gr";
import { VscGithubAlt } from "react-icons/vsc";
import { DiGit, DiJavascript1 } from "react-icons/di";
import { SiTypescript } from "react-icons/si"
import fotoPerfil from "../../assets/foto_perfil_3.png";
import CardWireFrame from "../cardWire/CardWire";
import CardCob from "../cardCob/CardCob";
import CardMeta from "../cardMeta/CardMeta";


const Main = () => {
    return(
        <MainContent>
            <MainBackGround>
                <Title>Full-Stack Developer</Title>
            </MainBackGround>
            <FaAngleDoubleDown style={figFaAngle}/>
            <AboutMe id="sobre">
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
                <MyImage src={fotoPerfil} alt="Foto pessoal do Arthur" />
            </Description>
            <Skills>
                <TitleSectionSkills>
                    <TitleSkills>Habilidades . . . </TitleSkills>
                </TitleSectionSkills>
                <SectionSkills>
                    <FirstSectionSkills>
                        <div style={figCardSkills}>
                            <GrHtml5 style={figSkills}/>
                            <h5>Html</h5>
                            <p>É uma linguagem de marcação usada para estruturar o esqueleto de um website.</p>
                        </div>
                        <div style={figCardSkills}>
                            <RiCss3Line style={figSkills}/>
                            <h5>Css</h5>
                            <p>É uma linguagem de estilização usada para dar "vida" ao seu projeto. Para isso dispõe-se de cores, formas e até animações para isso.</p>
                        </div>
                        <div style={figCardSkills}>
                            <DiJavascript1 style={figSkills}/>
                            <h5>JavaScript</h5>
                            <p>É uma linguagem de programação multiparadigma e que se tornou querida na comunidade de desenvolvedores por sua flexíbilidade e praticidade.</p>
                        </div>
                    </FirstSectionSkills>
                    <SecondSectionSkills>
                        <div style={figCardSkills}>
                            <VscGithubAlt style={figSkills}/>
                            <h5>GitHub</h5>
                            <p>É um sistema de nuvem usado para a hospedagem de projetos de desenvolvimento.</p>
                        </div>
                        <div style={figCardSkills}>
                            <DiGit style={figSkills}/>
                            <h5>Git</h5>
                            <p>É um sistema de controle de versão de código, possibilitando que os desenvolvedores possam voltar e ter acesso a um código antigo.</p>
                        </div>
                        <div style={figCardSkills}>
                            <FaNode style={figSkills}/>
                            <h5>Node</h5>
                            <p>É um ambiente de execução JavaScript, só que agora ao invés de rodarmos nosso código no navegador iremos rodar do lado do servidor.</p>
                        </div>
                    </SecondSectionSkills>
                    <ThirdSectionSkills>
                        <div style={figCardSkills}>
                            <SiTypescript style={figSkills}/>
                            <h5>TypeScript</h5>
                            <p>Esta linguagem foi construída em cima da linguagem JavaScript e tem como seu maior ponto forte a sua tipagem.</p>
                        </div>
                        <div style={figCardSkills}>
                            <GrMysql style={figSkills}/>
                            <h5>MySql</h5>
                            <p>É um software de código aberto usado para a criação e gerenciamento de banco de dados, sendo este relacional.</p>
                        </div>
                    </ThirdSectionSkills>
                </SectionSkills>
            </Skills>
            <Projects>
                <TitleProjects id="projetos">Alguns Projetos . . .</TitleProjects>
                <SectionCard>
                    <CardWireFrame/>
                    <CardCob/>
                    <CardMeta/>
                </SectionCard>
            </Projects>
        </MainContent>
    )
}
export default Main
