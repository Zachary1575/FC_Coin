import './App.css';
import Navbar from './Pages/Navbar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Pages/HomePage/Home';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </Router>
  );
}

//Test

export default App;
