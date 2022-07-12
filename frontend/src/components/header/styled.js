import styled  from "styled-components";

export const HeaderComp = styled.header`
    font-family:"Montserrat";
    font-size: 25px;
    height: 100px;
    background-color: #222;
    display: flex;
    justify-content: space-around;
    align-items: center;
    @media screen and (min-width:320px) and (max-width:480px){
        font-size: 15px;
    }
    @media screen and (min-width: 480.01px) and (max-width: 768px){
        font-size: 17px;
    }
    @media screen and (min-width: 768.01px) and (max-width:1024px) {
        font-size:20px;
    } 
`
export const Ancor = styled.a`
    color: white;
    text-decoration: none;
    margin: 0px 10px;
    transition: 1s;
    &:hover{
        border-bottom: 1px solid #fff;
    }
`
export const Marca = styled.span`
    color: white;
`
