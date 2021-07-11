import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import Articles from './components/Articles';
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
