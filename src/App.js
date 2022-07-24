import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import QuizApp from "./component/QuizApp";
import NavbarElement from "./component/NavbarElement/NavbarElement";
import Home from "./component/pages/Home";
import Footer from "./component/Footer";
import NoPage from "./component/pages/NoPage";
import About from "./component/pages/About";

function App() {
  return (
    <div className="App">
      <Router>
        <NavbarElement />
        {/* <QuizApp/> */}
        <Routes>
        <Route  path="/" element={<Home />}></Route>
        <Route  path="/about" element={<About />}></Route>
        <Route  path="*" element={<NoPage />}></Route>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
