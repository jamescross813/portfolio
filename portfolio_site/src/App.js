import './App.css';
import HeaderComponent from "./components/HeaderComponent";
import NavBarComponent from "./components/NavBarComponent";
import { BrowserRouter as Router, Route } from "react-router-dom"
import AboutComponent from "./components/AboutComponent";
import BlogsComponent from "./components/BlogsComponent";
import ProjectsComponent from "./components/ProjectsComponent";

function App() {
  return (
    <div className="App">
      
      <header className="App-header">
              <HeaderComponent/> 
      </header>
      <Router>
        <NavBarComponent />
        <AboutComponent />
        <Route to exact path ="/blogs" component = {BlogsComponent} />
        {/* <BlogsComponent /> */}
        <Route to exact path = "/projects"><ProjectsComponent/></Route>
        {/* <ProjectsComponent /> */}
        {/* about route? */}
      </Router>
    </div>
  );
}

export default App;
