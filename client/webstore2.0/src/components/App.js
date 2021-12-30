import React from 'react'
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom'
import Header from './Header'
import SignUp from './SignUp'
import SignIn from './SignIn'
import Home from './Home'
import NotFound from './NotFound'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element = {<Home/>}/>
        <Route path="/signin" element = {<SignIn/>} />
        <Route path="/signup" element = {<SignUp/>}/>
        <Route  element = {<NotFound/>}/>
      </Routes>
    </Router>
  );
}

export default App;
