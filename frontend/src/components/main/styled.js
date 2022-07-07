import styled from "styled-components"
import backgroundtree from "../../assets/back_3.jpg"

export const MainContent = styled.main`
    margin-top: -32px;
    @media screen and (min-width:320px) and (max-width:480px){
       margin-top :0px ;
    }
`
export const MainBackGround = styled.section`
    height: 100%;
    width: 100%;
    background-image: url(${backgroundtree});
    background-repeat: no-repeat;
    background-size:100vw 100vh;
    @media screen and (min-width:320px) and (max-width:480px){
        height: 420px;
        width: 100vw;
        background-size: 100vw 470px;
        margin-bottom: 35px;
    }
`
export const Title = styled.h1`
    font-size: 40px;
    text-shadow: 2px 2px #111;
    padding: 200px 0px 0px 200px;
    color:#fff;
    height: 400px;
    @media screen and (min-width:320px) and (max-width:480px){
        /* font-size: 16px;
        padding: 0px;
        position: relative;
        top: 230px;
        left: 50px; */
        display: none;
    }
`
export const AboutMe = styled.section`
    width:80%;
    display: flex;
    margin: 0 auto;
    @media screen and (max-width:375px) {
        width: 100vw;
    }
`
export const TitleAbout = styled.h2`
    font-size: 30px;
    margin-left: 100px;
    @media screen and (min-width:320px) and (max-width:480px){
        width: 200px;
        font-size: 20px;
        text-align: center;
    }
`
export const Description = styled.section`
    display: flex;
    justify-content: space-between;
    width:80%;
    margin: 0 auto;
    @media screen and (min-width:320px) and (max-width:480px){
        display: flex;
        flex-direction: column;
        width: 100vw;
    }
    `
export const SecDesc = styled.section`
    width: 700px;
    margin-top: 40px;
    @media screen and (min-width:320px) and (max-width:480px){
        width: 80%;
        margin: 0 auto;
        text-align: justify;
    }
    `
export const MyImage = styled.img`
    height: 300px;
    margin-left: 20px;
    @media screen and (min-width:320px) and (max-width:480px){
        margin: 25px 30px;
    }
`
export const Skills = styled.section`
   
`
export const TitleSectionSkills = styled.section`
    display: flex;
`
export const TitleSkills = styled.h4`
    font-size: 30px;
    width: 65%;
    margin: 50px auto 100px;
    text-align: center;
    @media screen and (min-width:320px) and (max-width:480px){
        font-size: 20px;
        margin: 50px auto;
        padding-left: 15px;
    }
`
export const SectionSkills = styled.section`
    margin: 0 auto;
    display: flex;
    justify-content: center;
    width: 80%;
    @media screen and (min-width:320px) and (max-width:480px){
        display: flex;
        flex-direction: column;
        width: 90%;
    }
`
export const FirstSectionSkills = styled.section`
    display: flex;
    flex-direction: column;
`
export const SecondSectionSkills = styled.section`
`
export const ThirdSectionSkills = styled.section`
`
export const Projects = styled.section`
    margin: 100px 0px;
    @media screen and (min-width:320px) and (max-width:480px){
        margin: 0px 0px 100px;
    }
`
export const TitleProjects = styled.h2`
    font-size: 30px;
    width: 80%;
    margin: 100px auto;
    text-align: center;
    @media screen and (min-width:320px) and (max-width:480px){
        font-size: 20px;
    }
`
export const SectionCard = styled.section`
    display: flex;
    justify-content: space-around;
    @media screen and (min-width:320px) and (max-width:480px){
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`
export const figFaAngle = {
    textAlign:"center",
    color:"#333",
    width:"100%"
}
export const figSkills = {
    fontSize:"50px",
    boxShadow:"5px 5px 25px #111",
    padding:"15px"
}
export const figCardSkills = {
    display:"flex",
    flexDirection:"column",
    alignItems:"center",
    textAlign:"center",
    fontSize:"13px",
    width: "300px",
    height:"250px",
    margin:"0px 15px"
}
