import React from'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home from './components/home';
import Register from './components/registration';
import Login from './components/login';


function App() {
  return (
    <Router>
      <div>
      <Routes>
        <Route path='/signup' component={Register}/>
        <Route path='http://localhost:3030/uhttpsers/swatimishra0247@gmail.com/login' component={Login}/>
        <Route path='/' component={Home}/>
      </Routes>
      </div>
    </Router>
  );
}

export default App;
