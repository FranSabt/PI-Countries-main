import { Route } from "react-router-dom";
import CardsConteiner from "./components/Cards/CardsConteiner";
import NavBar from "./components/Navbar/NavBar";
import About from "./components/About/About"
import Details from "./components/Details/Details";
import FromsActivities from './components/Forms/FromsActivities'
import LandingPage from "./components/Lading/LandingPage";
import "./App.css";

function App() {
  return (
    <div className="App">
        <NavBar />
        <div className="body">
          <Route exact path='/' component={LandingPage}/>
          <Route exact path='/home' component={CardsConteiner}/>
          <Route exact path='/about' component={About}/>
          <Route exact path='/details/:id' component={Details}/>
          <Route exact path='/form' component={FromsActivities}/>
        </div>
    </div>
  );
}

export default App;
