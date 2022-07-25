
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import QuizApp from './component/QuizApp';
import NavbarElement from './component/NavbarElement/NavbarElement';
import Home from './component/pages/Home';
import ProfilePage from './component/pages/ProfilePage';
import Login from './component/pages/Login';
import Footer from "./component/Footer";
import NoPage from "./component/pages/NoPage";
import About from "./component/pages/About";
import MoodChangerContent from './component/pages/MoodChangerContent';



function App() {
  return (
    <div className="App">
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
          <Route path='/About' element={<About/>}> </Route>
          <Route path='/MoodChanger' element={<MoodChangerContent/>}> </Route>
          <Route  path="*" element={<NoPage />}></Route>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
