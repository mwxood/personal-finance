import './App.css';
import Login from './components/login/Login';


function App() {

  const user = {
    username: 'test',
    password: '123456A'
  }

  return (
    <div className="App">
      <Login user={user} />
    </div>
  );
}

export default App;
