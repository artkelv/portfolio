import { GlobalStyled } from "./GlobalStyled";
import { Global } from "./Global"
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer"

function App() {
  return (
    <Global>
        <GlobalStyled/>      
        <Header/>
        <Main/>
        <Footer/>
    </Global>     
    )
}

export default App;
