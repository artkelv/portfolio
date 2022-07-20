import styled from "styled-components"

export const ContainerWire = styled.div`
    border:2px solid black;
    width: 250px;
    height: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px 0px 20px;
`
export const TitleWire = styled.h4`
    font-family: "Bebas";
    text-transform: uppercase;
`
export const DescriptionWire = styled.p`
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
export const BtnWire = styled.button`
    width: 200px;
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
export const figFaRegMoney = {
    fontSize:"100px",
    textAlign:"center",
    width:"100%"
}