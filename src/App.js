import './App.css';
import Login from './components/login/Login';
import Register from './components/register/Register';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {

  const user = {
    username: 'test',
    password: '123456A'
  }

  return (
    
    <div className="App">
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<App />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
