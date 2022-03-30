import './App.css';
import NavBar from './components/NavBar';
import Body from './components/Body';
import Registration from './components/Registration';
import StartovniListina from './components/StartovniListina';
import Table, {SelectColumnFilter} from './components/Table'

function App() {
  return (
    <div>
      {/* <NavBar></NavBar>
      <Body></Body>
      <Registration></Registration>*/}
      <StartovniListina></StartovniListina>
    </div>

    // <h1>Hello world</h1>
  );
}



export default App;
