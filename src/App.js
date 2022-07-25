import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import QuizApp from './component/QuizApp';
import NavbarElement from './component/NavbarElement/NavbarElement';
import Home from './component/pages/Home';
import ProfilePage from './component/pages/ProfilePage';
import Login from './component/pages/Login';



function App() {
  return (
    <div className='App'>
     
      
      <Router>
      <NavbarElement/>
      {/* <QuizApp/> */}
      {/* <MainPageRobot/> */}
      {/* <ProfilePage/> */}
      {/* <Login/> */}
        <Routes>
          <Route path='/' element={<Home/>}> </Route>
          <Route path='Home' element={<Home/>}> </Route>
          <Route path='/ProfilePage' element={<ProfilePage/>}> </Route>
          <Route path='/Login' element={<Login/>}> </Route>

        </Routes>
      </Router>

    </div>
  );
}

export default App;
