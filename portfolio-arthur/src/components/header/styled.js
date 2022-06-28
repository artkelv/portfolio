import styled  from "styled-components";
import background from "../../assets/background_svg.jpg"

export const HeaderComp = styled.header`
    font-size: 30px;
    font-family:"Imperial" ;
    height: 100vh;
    background-image: url(${background});
    display: flex;
    justify-content: space-around;
`
export const Ancor = styled.a`
    color: white;
`
export const Marca = styled.span`
    color: white;
`