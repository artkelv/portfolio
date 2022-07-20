import styled from "styled-components";
import backgroundFooter from "../../assets/back_footer.jpg"

export const FooterContainer = styled.footer`

`
export const FooterSection = styled.section`
    
    color: #fff;
    text-shadow: 2px 2px #111;
    background-color: #333;
    background-image: url(${backgroundFooter});
    background-size: cover;
    padding-bottom: 50px;
    @media screen and (min-width:320px) and (max-width:480px){
        height: 85vh;
    }
`
export const TitleContact = styled.h4`
    font-size: 30px;
    width: 50%;
    margin: 0 auto;
    text-align: left;
    padding:50px 0px 50px 50px;
    @media screen and (min-width:320px) and (max-width:480px){
        font-size: 30px;
        width: 100%;
        padding: 50px 0;
        text-align: center;
    }
    @media screen and (min-width:480.01px) and (max-width:768px) {
        font-size: 25px;
        text-align: center;
    }
` 
export const ContentFooter = styled.section`
    display: flex;
    justify-content: center;
    @media screen and (min-width:320px) and (max-width:480px){
        display: flex;
        flex-direction: column;
    }
`
export const FaIcons = styled.section`
    border-left: 2px solid #fff;
    padding-left: 50px;
    margin: 0px 10px;
    @media screen and (min-width:320px) and (max-width:480px){
        border-left:none;
        margin-top: 50px;
        padding-left: 0;
        text-align: center;
    }
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
    transition: 1s;
    background-color: #111;
`
export const EndSection = styled.section`
    height: 10vh;
    background-color: #000;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const LinkForGitHub = styled.a`
    color: aquamarine;
`