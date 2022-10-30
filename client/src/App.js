import { Route } from "react-router-dom";
import CardsConteiner from "./components/Cards/CardsConteiner";
import NavBar from "./components/Navbar/NavBar";
import About from "./components/About/About"
import "./App.css";

function App() {
  return (
    <div className="App">
        <NavBar />
          <Route exact path='/' component={CardsConteiner}/>
          <Route exact path='/about' component={About}/>
    </div>
  );
}

export default App;
