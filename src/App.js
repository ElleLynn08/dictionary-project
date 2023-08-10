import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./images/dictionary-logo.png";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="dictionary-logo " alt="logo" />
      </header>
    </div>
  );
}

export default App;
