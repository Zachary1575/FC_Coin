import './App.css';
import Navbar from './Pages/NavBar/Navbar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Pages/HomePage/Home';
import Community from './Pages/Community/community';
import About from './Pages/About/about';
import SignUp from './Pages/SignUp/signUp';


function App() {
  return (
    <Router>
      <Navbar />
      
      <Routes>
        <Route path="/community" element={<Community />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contactUs" element={<comcity />}></Route>
        <Route path="/sign-up" element={<SignUp />}></Route>
        <Route path="/login" element={<comcity />}></Route>
        <Route path="/versions" element={<comcity />}></Route>
        <Route path="/languages" element={<comcity />}></Route>
        <Route path="/" element={<Home />}></Route>
      </Routes>

    </Router>
  );
}

//Test

export default App;
