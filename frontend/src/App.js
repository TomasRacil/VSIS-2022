import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Body from './components/Body';
import Registration from './components/Registration';
import Header from './components/Header'
import StartovniListina from './components/StartovniListina';


function App() {

  return (
    <Router>
      <div>
      <Header></Header>
      <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/registration">Registrace</Link>
            </li>
            <li>
              <Link to="/startovnilistina">Startovni listina</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path='/' element=
          {
          <Body/>
          }/>
          <Route path='/registration' element={<Registration/>}/>
          <Route path='/startovnilistina' element={<StartovniListina/>}/>
        </Routes>
      </div>
    </Router>


    // <h1>Hello world</h1>
  );
}



export default App;
