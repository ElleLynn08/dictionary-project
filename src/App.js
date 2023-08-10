import "./App.css";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./images/dictionary-logo.png";

function App() {
  return (
    <div className="App-container">
      <header className="App-header">
        <img src={logo} className="dictionary-logo " alt="logo" />
      </header>
      <Footer />
    </div>
  );
}

export default App;
