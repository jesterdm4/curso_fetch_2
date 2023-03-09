import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { todosPersonajes } from "../functions/Funciones";


const Inicio = () => {
    const [personajes, setPersonajes] = useState(null);
    
    useEffect(() => {
        todosPersonajes(setPersonajes)
      }, [])

    return (
        <>
            {personajes != null ? 
                personajes.map((personaje) => (

                    <div key={personaje.id}>

                        <a href={`/personaje/${personaje.id}`}>{personaje.name}</a>

                    </div>))

            : "no hay personajes"}
        </>
    )
}

export default Inicio
