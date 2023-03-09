import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { useParams } from "react-router-dom";
import { unicoPersonaje } from "../functions/Funciones";
const Personaje = () => {
    const [personaje, setPersonaje] = useState(null) 
    
    const params = useParams()
    useEffect(() => {
        unicoPersonaje(params.id, setPersonaje)
    }, [])

    return (
    <>
        {personaje != null ? (
            <div>
                <h2>personaje con el id {params.id}</h2>
                <p>con el nombre {personaje.name}</p>
                <img src={personaje.image} alt=""/>
            </div>
        ) : ('cargando. . .')}
    </>
  )
}

export default Personaje