import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import SignUp from './Components/Signup';
import SignIn from './Components/Signin';
import HomePage from './Components/HomePage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route exact path="/SignUp" element={<SignUp />}></Route>
        <Route exact path="/SignIn" element={<SignIn />}></Route>
        <Route exact path="/" element={<HomePage />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
