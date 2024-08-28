// React
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// BS
import { Container } from 'react-bootstrap';
// CSS
import './App.css';
// UserContext
import { UserProvider } from './UserContext';
// Components
import AppNavbar from './components/AppNavbar';
// Pages
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Logout from './pages/Logout';

import Movies from './pages/Movies';




function App() {
  // Default user state
  const [user, setUser] = useState({
    id: null,
    isAdmin: null
  })


  useEffect(() => {

    fetch(`https://movieapi-beltran.onrender.com/users/details`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)

        if (typeof data.user !== "undefined") {

          setUser({
            id: data.user._id,
            isAdmin: data.user.isAdmin
          });

        } else {

          setUser({
            id: null,
            isAdmin: null
          });

        }

      })

  }, []);

  // Unset User
  const unsetUser = () => {

    localStorage.clear();

  };



  return (
    <UserProvider value={{ user, setUser, unsetUser }}>
      <Router>
        <AppNavbar />
        <Container>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />
            <Route path='/logout' element={<Logout />} />
            <Route path='/movies' element={<Movies />} />
          </Routes>
        </Container>
      </Router>
    </UserProvider>
  )
}

export default App;
