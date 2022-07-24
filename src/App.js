import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import QuizApp from './component/QuizApp';
import NavbarElement from './component/NavbarElement/NavbarElement';
import MainPageRobot from './component/MainPageRobot';



function App() {
  return (
    <div className='App'>
     
      
      <Router>
      <NavbarElement/>
      {/* <QuizApp/> */}
      <MainPageRobot/>
        <Routes>
          <Route> </Route>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
