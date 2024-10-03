import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserHome from '../src/Userpages/UserHome';
import AdminHome from '../src/Adminpages/AdminHome';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<UserHome />} />
          <Route path="/admin" element={<AdminHome />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
