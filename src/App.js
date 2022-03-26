import logo from "./logo.svg";
import "./App.css";
import styled from "styled-components";

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
`;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p style={{ color: "red" }}>
          This is a mirror of <code>killergf</code>
          <br></br>
          killerbf
        </p>
        <Button>View On OpenSea</Button>
        <br></br>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          this site is created with react ;(
        </a>
      </header>
    </div>
  );
}

export default App;
