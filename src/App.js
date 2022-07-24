import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import QuizApp from './component/QuizApp';
import NavbarElement from './component/NavbarElement/NavbarElement';



function App() {
  return (
    <div className='App'>
     
      
      <Router>
      <NavbarElement/>
      {/* <QuizApp/> */}
        <Routes>
          <Route> </Route>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
