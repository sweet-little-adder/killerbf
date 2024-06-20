import logo from "./logo.svg";
import john from "./img/johncook.png";
import "./App.css";
import styled from "styled-components";
import HeaderMenu from "./components/HeaderMenu";

const Button = styled.button`
  background: transparent;
  border-radius: 0px;
  border: 0.05em solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
  font-family: times;
`;

//function HeaderMenu() {
// <HeaderMenu>Home Story Gallery Roadmap Artist</HeaderMenu>;
//}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={john} style={{ width: "28vw", position:"absolute", top:"5rem" }}/>
        ☁︎ ✦ ☾  
        <br/>𝒴𝑜𝓊 𝒶𝓇𝑒 𝓈𝑜 𝒷𝑒𝒶𝓊𝓉𝒾𝒻𝓊𝓁 ༄࿔✧･ﾟ.· 𓃴
        <img src={logo}  className="App-logo" alt="logo" />
        
        <p style={{ color: "#ff0069" }}>𝕶𝖎𝖑𝖑𝖊𝖗𝖇𝖋</p>
        {/* <u>Please dont kill me</u> */}
        <Button>View On OpenSea</Button>
        <br></br>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        ></a>
      </header>
    </div>
  );
}

export default App;
