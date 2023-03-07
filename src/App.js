import React from 'react'
import styled from 'styled-components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Inicio from "./components/Inicio";
import Personaje from "./components/Personaje";
//ESTO NO ES FETCH ES AXIOS
 
function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
        <Route path='/' element={<Inicio></Inicio>}></Route>
        <Route path='/personaje/:id' element={<Personaje></Personaje>}></Route>
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
