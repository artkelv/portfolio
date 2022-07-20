import styled from "styled-components";

export const ContainerCob = styled.div`
    width: 250px;
    height: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px 0px 20px;
    box-shadow: 10px 10px 100px black;
    @media screen and (min-width:320px) and (max-width:480px){
        margin: 50px;
    }
    @media screen and (min-width: 481px) and (max-width:768px) {
        margin: 50px 0;
    }
    @media screen and (min-width: 768.01px) and (max-width:1024px) {
        margin: 50px 0;
    } 
`
export const TitleCob = styled.h4`
    font-family: "Bebas";
    text-transform: uppercase;
    //background-color: red;
    margin-bottom:8px;
`
export const DescriptionCob = styled.p`
    //background-color: blue;
    width: 80%;
    font-size: 15px;
    text-align: center;
`
export const Languages = styled.p`
    width:100%;
    text-align: center;
    font-size: 14px;
    font-weight: bold;
`
export const BtnCob = styled.button`
    width: 200px;
    height: 40px;
    background-color: #fff;
    color: black;
    border-radius: 20px;
    text-transform: uppercase;
    cursor: pointer;
    transition: 1s;
    box-shadow: 1px 1px 15px #111;
    &:hover{
        background-color: #000;
        color:#fff;
        border: 2px solid black;
    }
`
export const figFaFut = {
    fontSize:"100px",
    textAlign:"center",
    width:"100%"
}