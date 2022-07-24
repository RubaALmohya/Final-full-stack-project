import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import QuizApp from './component/QuizApp';
import NavbarElement from './component/NavbarElement/NavbarElement';
import Login from './component/Login/Login';



function App() {
  return (
    <div className='App'>
     
      
      <Router>
      <NavbarElement/>
      {/* <QuizApp/> */}
      <Login/>
        <Routes>
          <Route> </Route>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
