import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import Collection from './components/Collection'
import MovieDetails from './components/MovieDetails';
import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import MainNavbar from './components/MainNavbar';


function App() {
  return (
    <div>
      <MainNavbar />
      <Container>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Collection />} />
            <Route path='/movie/:id' element={<MovieDetails />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </div >
  );
}

export default App;
