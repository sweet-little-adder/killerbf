import logo from "./logo.svg";
import john from "./img/johncook.png";
import "./App.css";
import styled from "styled-components";
import HeaderMenu from "./components/HeaderMenu";

const Button = styled.button`
  background: transparent;
  border-radius: 999px;
  border: 0.01em solid #A2E5F7;
  color: #A2E5F7;
  margin: 0 1em;
  padding: 0.25em 1em;
  font-family: times;
   user-select: none;
`;

//function HeaderMenu() {
// <HeaderMenu>Home Story Gallery Roadmap Artist</HeaderMenu>;
//}  killerbf avenge killed gf 🦊ꃕ 
// moon princess, 
// x_x, 
// killer?, 
// bf investigate n revenge, 
// bf kills gf's family, 
// game story: 
// gf disappeared after years of psychologcal abuse by family, 
// gf finds bfs to help her cope.
//choose weapon
function App() {
  return (
    <div className="App transition-all select-none">
      <header className="App-header relative z-50 bg-[#000]/20">
        {/* <img src={john} style={{ width: "28vw", position:"absolute", top:"5rem" }}/> */}
        <div className="transition-all cursor-default hover:drop-shadow-[0_0px_8px_rgba(299,299,299,0.8)]">☁︎ ✦ ☾ </div> 
<div className="transition-all hover:drop-shadow-[0_0px_8px_rgba(299,299,299,0.8)] cursor-default">𝒴𝑜𝓊 𝒶𝓇𝑒 𝓈𝑜 𝒷𝑒𝒶𝓊𝓉𝒾𝒻𝓊𝓁 ༄࿔✧･ﾟ.· 𓃴</div>
        {/* <img src={logo}  className="App-logo" alt="logo" /> */}
        
        <div className="flex my-6 text-[80px] md:text-[120px] text-[#A2E5F7] cursor-default transition-all hover:drop-shadow-[0_0px_16px_rgba(162,229,247,0.3)]">𝙆𝙄𝙇𝙇𝙀𝙍𝘽𝙁 <div className="text-[16px] translate-x-[1rem] translate-y-[1rem]">ⓒ</div></div>
        {/* <u>Please dont kill me</u> */}
        <div className="flex"><Button className="transition-all hover:bg-[#A2E5F7] hover:text-[#202829] hover:drop-shadow-[0_0px_20px_rgba(299,299,299,0.25)]"> ♡ </Button>
        {/* <Button className="transition-all hover:drop-shadow-[0_0px_20px_rgba(299,299,299,0.25)] hover:bg-[#A2E5F7] hover:text-[#202829]">𝘠𝘦𝘴𝘴! ➡️</Button> */}
        </div>
        <br></br>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        ></a>
      </header>
      <div class="sketchfab-embed-wrapper" className="bg-black absolute top-0 left-0 w-full h-full z-10 flex justify-center items-center/ overflow-show p-0"> <iframe title="The dark heart of an interstellar nebula" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/cc16104dfcd04338abc997a3156a25b3/embed?autospin=1&autostart=1&transparent=1&ui_infos=0&ui_watermark_link=0&ui_watermark=0&ui_hint=0&ui_theme=dark&ui_color=000000&dnt=1"> </iframe> </div>
    </div>
  );
}

export default App;
