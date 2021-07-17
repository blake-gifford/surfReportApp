import logo from './logo.svg';
import './App.css';
import Home from './views/Home';
import Header from './components/Header';
import Dashboard from './views/Dashboard';
import Articles from './views/Articles';
import {Router} from '@reach/router';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Router>
        <Dashboard path="/" />
        <Home path="/home" />
        <Articles path="/articles" />
      </Router>
    </div>
  );
}

export default App;
