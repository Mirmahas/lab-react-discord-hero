import React from "react";
import logo from "./assets/discord-logo-white.png"; // Importar la imagen del logo
import menuIcon from "./assets/menu-icon.png"; // Importar la imagen del icono de menú
import background from "./assets/discord-background.png";
import "./App.css"; // Importar el archivo CSS

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <img src={logo} alt="logo blanco" />
        <img src={menuIcon} alt="menu icon" />
      </nav>
      <main className="App-main">
        <h1>IMAGINE A PLACE...</h1>
        <p>
          ...where you can belong to a school club, a gaming group, or a
          worldwide art community. Where just you and a handful of friends can
          spend time together. A place that makes it easy to talk every day and
          hang out more often.
        </p>
        <div className="buttons">
          <button className="download-button">Download for Mac</button>
          <button className="open-button">Open Discord in your browser</button>
        </div>
        <div className="characters">
          <img src={background} alt="logo blanco" />
        </div>
      </main>
    </div>
  );
}

export default App;
