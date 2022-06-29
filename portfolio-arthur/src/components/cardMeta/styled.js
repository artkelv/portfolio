import styled from "styled-components";

export const ContainerMeta = styled.div`
    border:2px solid black;
    width: 250px;
    height: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px 0px 20px;
`
export const TitleMeta = styled.h4`
    font-family: "Bebas";
    text-transform: uppercase;
`
export const DescriptionMeta = styled.p`
    width: 80%;
    font-size: 15px;
    text-align: center;
`
export const BtnMeta = styled.button`
    width: 70%;
    height: 40px;
    background-color: #000;
    color: white;
    border-radius: 20px;
    text-transform: uppercase;
    cursor: pointer;
    transition: 1s;
    &:hover{
        background-color: #fff;
        color:#000;
        border: 2px solid black;
    }
`
