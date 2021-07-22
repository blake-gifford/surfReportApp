import logo from './logo.svg';
import './App.css';
import Home from './views/Home';
import Header from './components/Header';
import Dashboard from './views/Dashboard';
import Articles from './views/Articles';
import {Router} from '@reach/router';
import NewSpot from './views/NewSpot';
// import articleForm from './components/ArticleForm';
import NewArticle from './views/NewArticle';



function App() {
  return (
    <div className="App">
      <Header></Header>
      <Router>
        <Dashboard path="/" />
        <Articles path="/articles" />
        <NewSpot path="/spot/new" />
        <NewArticle path="/article/new" />
      </Router>
    </div>
  );
}

export default App;
