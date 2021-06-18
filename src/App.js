import './App.css';
import Home from './containers/Home'
import NavBar from './components/NavBar';
import Wallet from './components/Wallet'
import {useState} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'


function App() {
  return (
    <Router>
    <>
    <NavBar />
    <Switch>
    <Route exact path="/" component={Home}/>
    <Route path="/wallet" component={Wallet}/>
    </Switch>
    </>
    </Router>
  );
}

export default App;
