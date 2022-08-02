import './App.css';
import Home from './comps/Home';
import NavBar from './comps/NavBar';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import SignUp from './comps/SignUp';
import Login from './comps/Login';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar showLinks={true} />
        <Routes>
          <Route exact path='/login' element={<Login/>}/>
          <Route exact path='/signup' element={<SignUp/>}/>
          <Route path='/home/:uname' element={<Home/>}/>
          <Route path='*' element={<Login/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
