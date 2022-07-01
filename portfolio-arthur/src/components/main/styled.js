import styled from "styled-components"
import backgroundtree from "../../assets/back_3.jpg"

export const MainBackGround = styled.section`
    height: 100%;
    width: 100%;
`
export const Title = styled.h1`
    font-size: 40px;
    text-shadow: 2px 2px #111;
    padding: 200px 0px 0px 200px;
    color:#fff;
    height: 400px;
    background-image: url(${backgroundtree});
    background-repeat: no-repeat;
    background-size:100vw 100vh;
`
export const AboutMe = styled.section`
    width:80%;
    display: flex;
    margin: 0 auto;
`
export const TitleAbout = styled.h2`
    font-size: 30px;
    margin-left: 100px;
`
export const Description = styled.section`
    display: flex;
    justify-content: space-between;
    width:80%;
    margin: 0 auto;
`
export const Skills = styled.section`
    margin:50px 0px;
`
export const SecDesc = styled.section`
    width: 700px;
    margin-top: 40px;
`
export const TitleSkills = styled.h4`
    font-size: 30px;
    width: 65%;
    margin: 50px auto 100px;
    text-align: center;
`
export const SectionSkills = styled.section`
    margin: 0 auto;
    display: flex;
    justify-content: center;
    width: 80%;
`
export const FirstSectionSkills = styled.section`
    display: flex;
    flex-direction: column;
`
export const SecondSectionSkills = styled.section`

`
export const ThirdSectionSkills = styled.section`

`
export const TitleSectionSkills = styled.section`
    display: flex;
`
export const Projects = styled.section`
    margin: 100px 0px;
`
export const TitleProjects = styled.h2`
    font-size: 30px;
    width: 80%;
    margin: 100px auto;
    text-align: center;
`
export const SectionCard = styled.section`
    display: flex;
    justify-content: space-around;
`
