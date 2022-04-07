import logo from "./logo.svg";
import "./App.css";
import styled from "styled-components";
import HeaderMenu from "./components/HeaderMenu";

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
`;

//function HeaderMenu() {
// <HeaderMenu>Home Story Gallery Roadmap Artist</HeaderMenu>;
//}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p style={{ color: "pink" }}>
          This is a mirror of <i>killergf</i>
          <br></br>
          𝔨𝔦𝔩𝔩𝔢𝔯𝔟𝔣
        </p>
        <Button>View On OpenSea</Button>
        <br></br>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          this site is created with react
        </a>
      </header>
    </div>
  );
}

export default App;
