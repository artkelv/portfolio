import styled from "styled-components"
import background from "../../assets/background_svg.jpg"
import backgroundtwo from "../../assets/back_2.jpg"
import backgroundtree from "../../assets/back_3.jpg"

export const MainBackGround = styled.section`
    //margin-top: -32px;
    height: 100%;
    width: 100%;
`
export const Title = styled.h1`
    font-size: 40px;
    padding: 200px 0px 0px 200px;
    color:#fff;
    height: 400px;
    background-image: url(${backgroundtree});
    background-repeat: no-repeat;
    background-size:100vw 100vh;
    background-color: blue;
`
export const AboutMe = styled.section`
    //background-color: lightblue;
    width:80%;
    display: flex;
    margin: 0 auto;
`
export const TitleAbout = styled.h2`
    //background-color: red;
    font-size: 30px;
    margin-left: 100px;
`
export const Description = styled.section`
    display: flex;
    justify-content: space-between;
    width:80%;
    margin: 0 auto;
`
export const SecDesc = styled.section`
    width: 700px;
`