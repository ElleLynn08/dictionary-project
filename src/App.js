import "./App.css";
import Dictionary from "./Dictionary";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./images/dictionary-logo.png";

function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
        <img src={logo} className="dictionary-logo " alt="logo" />
      </header>
      <main>
        <Dictionary />
      </main>
      <Footer />
    </div>
    </div>
  );
}

export default App;
