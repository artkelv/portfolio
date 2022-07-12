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
    @media screen and (min-width: 480.01px) and (max-width: 768px){
        margin-bottom: 40px;
    }
`
export const Title = styled.h1`
    font-size: 40px;
    text-shadow: 2px 2px #111;
    padding: 200px 0px 0px 200px;
    color:#fff;
    height: 400px;
    @media screen and (min-width:320px) and (max-width:480px){
        display: none;
    }
    @media screen and (min-width: 480.01px) and (max-width: 768px){
        font-size: 20px;
        padding: 0;
        position: relative;
        top: 250px;
        left: 80px;
    }
    @media screen and (min-width: 768.01px) and (max-width:1024px) {
        font-size:22px;
        position: relative;
        top: 200px;
        left: 100px;
        padding: 0;
    } 
`
export const AboutMe = styled.section`
    width:80%;
    display: flex;
    margin: 0 auto;
    @media screen and (min-width:320px) and (max-width:480px){
        width: 100vw;
    }
`
export const TitleAbout = styled.h2`
    font-size: 30px;
    margin-left: 100px;
    @media screen and (min-width:320px) and (max-width:480px){
        font-size: 20px;
        margin: 15px auto;
    }
    @media screen and (min-width: 480.01px) and (max-width: 768px){
        font-size: 20px;
        margin: 20px auto;
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
    @media screen and (min-width: 480.01px) and (max-width: 768px){
        display: flex;
        flex-direction: column;
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
    @media screen and (min-width: 480.01px) and (max-width: 768px){
        width: 100%;
        text-align: justify;
    }
`
export const MyImage = styled.img`
    height: 300px;
    margin-left: 20px;
    @media screen and (min-width:320px) and (max-width:480px){
        margin: 25px 30px;
        height: 350px;
    }
    @media screen and (min-width: 480.01px) and (max-width: 768px){
        width: 70%;
        margin: 60px auto;
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
    @media screen and (min-width: 480.01px) and (max-width: 768px){
        font-size: 25px;
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
    @media screen and (min-width: 480.01px) and (max-width: 768px){
        display: flex;
        flex-direction: column;
    }    
    @media screen and (min-width: 768.01px) and (max-width:1024px) {
        display: flex;
        flex-direction: column;
    } 
`
export const FirstSectionSkills = styled.section`
    display: flex;
    flex-direction: column;
    @media screen and (min-width: 480.01px) and (max-width: 768px){
        margin: 0 auto;
    }  
    @media screen and (min-width: 768.01px) and (max-width:1024px) {
        margin: 0 auto;
    } 
`
export const FigCardSkills = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    font-size: 13px;
    width: 300px;
    height:250px;
    margin: 0px 15px;
    @media screen and (min-width:320px) and (max-width:480px){
        margin: 0 auto;
    }
`
export const SecondSectionSkills = styled.section`
    @media screen and (min-width: 480.01px) and (max-width: 768px){
        margin: 0 auto;
    } 
    @media screen and (min-width: 768.01px) and (max-width:1024px) {
        margin: 0 auto;
    } 
`
export const ThirdSectionSkills = styled.section`
    @media screen and (min-width: 480.01px) and (max-width: 768px){
        margin: 0 auto;
    } 
    @media screen and (min-width: 768.01px) and (max-width:1024px) {
        margin: 0 auto;
    } 
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
    @media screen and (min-width: 480.01px) and (max-width:768px) {
        font-size: 25px;
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
    @media screen and (min-width: 480.01px) and (max-width:768px) {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    @media screen and (min-width: 768.01px) and (max-width:1024px) {
        display: flex;
        flex-direction: column;
        align-items: center;
    } 
`
export const figFaAngle = {
    color:"#333",
    width:"100%"
}
export const figSkills = {
    fontSize:"50px",
    boxShadow:"5px 5px 25px #111",
    padding:"15px"
}