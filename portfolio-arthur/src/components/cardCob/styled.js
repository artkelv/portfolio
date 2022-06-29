import styled from "styled-components";

export const ContainerCob = styled.div`
    width: 250px;
    height: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px 0px 20px;
    box-shadow: 10px 10px 100px black;
`
export const TitleCob = styled.h4`
    font-family: "Bebas";
    text-transform: uppercase;
`
export const DescriptionCob = styled.p`
    width: 80%;
    font-size: 15px;
    text-align: center;
`
export const BtnCob = styled.button`
    width: 70%;
    height: 40px;
    background-color: #fff;
    color: black;
    border-radius: 20px;
    text-transform: uppercase;
    cursor: pointer;
    transition: 1s;
    &:hover{
        background-color: #000;
        color:#fff;
        border: 2px solid black;
    }
`