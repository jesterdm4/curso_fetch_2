import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Inicio from "./components/Inicio";
import Personaje from "./components/Personaje";
//ESTO NO ES FETCH ES AXIOS
 
function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
        <Route path='/' element={<Inicio />}></Route>
        <Route path='/personaje/:id' element={<Personaje />}></Route>
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
