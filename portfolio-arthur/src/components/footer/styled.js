import styled from "styled-components";
import backgroundFooter from "../../assets/back_footer.jpg"
//Form, InputName, InputEmail, InputTel, InputTextarea, InputSubmit


export const FooterSection = styled.section`
    color: #fff;
    text-shadow: 2px 2px #111;
    background-image: url(${backgroundFooter});
    background-size: cover;
    height: 100vh;
`
export const TitleContact = styled.h4`
    font-size: 30px;
    //background-color: red;
    width: 50%;
    margin: 0 auto;
    text-align: left;
    padding:50px 0px 50px 50px;
` 
export const ContentFooter = styled.section`
    display: flex;
    justify-content: center;
`
export const FaIcons = styled.section`
    border-left: 2px solid #fff;
    padding-left: 50px;
    margin: 0px 10px;
`
export const Form = styled.form`
    display:flex;
    flex-direction: column;
    margin: 0px 10px;
    
`
export const InputName = styled.input`
    margin: 5px 0px;
    border: 1px solid #fff;
    background-color:rgba(192,192,192,0.3);
`
export const InputEmail = styled.input`
    margin: 5px 0px;
    border: 1px solid #fff;
    background-color:rgba(192,192,192,0.3);
`
export const InputTel = styled.input`
    margin: 5px 0px;
    border: 1px solid #fff;
    background-color:rgba(192,192,192,0.3);
`
export const InputTextarea = styled.textarea`
    margin: 5px 0px;
    border: 1px solid #fff;
    background-color:rgba(192,192,192,0.3);
`
export const InputSubmit = styled.input`
    cursor: pointer;
    color: #fff;
    background-color: transparent;
    border: 1px solid #fff;
    height: 30px;
    &:hover{
        background-color: #111;
    }
`
export const EndSection = styled.section`
    margin-top: -16px;
    height: 50px;
    background-color: #000;
    color: white;
    display: flex;
    justify-content: center;
`
