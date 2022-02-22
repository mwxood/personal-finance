import './App.css';
import Login from './components/login/Login';
import Register from './components/register/Register';

function App() {

  const user = {
    username: 'test',
    password: '123456A'
  }

  return (
    <div className="App">
      <Register />
      <Login user={user} />
    </div>
  );
}

export default App;
