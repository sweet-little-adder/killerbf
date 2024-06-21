import logo from "./logo.svg";
import john from "./img/johncook.png";
import "./App.css";
import styled from "styled-components";
import HeaderMenu from "./components/HeaderMenu";

const Button = styled.button`
  background: transparent;
  border-radius: 35px;
  border: 0.05em solid #A2E5F7;
  color: #A2E5F7;
  margin: 0 1em;
  padding: 0.25em 1em;
  font-family: times;
`;

//function HeaderMenu() {
// <HeaderMenu>Home Story Gallery Roadmap Artist</HeaderMenu>;
//} john agency 🦊ꃕ
function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={john} style={{ width: "28vw", position:"absolute", top:"5rem" }}/> */}
        ☁︎ ✦ ☾  
        <br/>𝒴𝑜𝓊 𝒶𝓇𝑒 𝓈𝑜 𝒷𝑒𝒶𝓊𝓉𝒾𝒻𝓊𝓁 ༄࿔✧･ﾟ.· 𓃴
        {/* <img src={logo}  className="App-logo" alt="logo" /> */}
        
        <div className="my-6 text-[80px] md:text-[120px] text-[#A2E5F7] pointer-events-none hover:drop-shadow-[0_4px_5px_0px_rgba(162, 229, 247, 0.1)]">𝙆𝙄𝙇𝙇𝙀𝙍   𝘽𝙁</div>
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
