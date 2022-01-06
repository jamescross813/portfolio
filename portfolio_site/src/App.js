import './App.css';
import HeaderComponent from "./components/HeaderComponent";
import NavBarComponent from "./components/NavBarComponent";

function App() {
  return (
    <div className="App">
      
      <header className="App-header">
              <HeaderComponent/> 
      </header>
      <NavBarComponent />
    </div>
  );
}

export default App;
