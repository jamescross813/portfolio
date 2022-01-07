import './App.css';
import HeaderComponent from "./components/HeaderComponent";
import NavBarComponent from "./components/NavBarComponent";
import { BrowserRouter as Router, Route } from "react-router-dom"
import AboutComponent from "./components/AboutComponent";

function App() {
  return (
    <div className="App">
      
      <header className="App-header">
              <HeaderComponent/> 
      </header>
      <Router>
        <NavBarComponent />
        <AboutComponent />
        {/* about route? */}
        {/* project route */}
        {/* screenshot route */}
      </Router>
    </div>
  );
}

export default App;
