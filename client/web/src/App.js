import './App.css';
import Navbar from './components/pages/Navbar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' />
      </Routes>
    </Router>
  );
}

//Test

export default App;
