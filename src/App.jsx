import "./App.css";
import Navbar from "./components/Navbar";
import Introduction from "./components/introduction";
import About from "./components/about";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Introduction />
      <About />
    </div>
  );
}

export default App;
