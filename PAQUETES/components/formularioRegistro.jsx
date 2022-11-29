import React from "react";
import { useState } from 'react'
import {Titulo} from '/components/titulo'
import { LinkLogin } from "./navLinkLogin";
export function FormularioRegistro(){
    const[nombre,setNombre]=useState('')
    const[usuario,setUsuario]=useState('')
    const[contraseña,setContraseña]=useState('')
    const[correo,setCorreo]=useState('')
    
    return(
    <>    
        <div className="mi-borde">
            <form className="formulario">
                <Titulo/>
                <br/>
                <LinkLogin/>
                <br/>    
                <div className="form-outline mb-4">
                    <input 
                        type="text" 
                        id="loginName" 
                        className="entrada" 
                        name ="nombre"
                        placeholder="Nombres"
                        value={nombre}
                        onChange={(e)=>setNombre(e.target.value)}
                        required
                        />
                        
                </div>

                <div className="form-outline mb-4">
                    <input 
                        type="text" 
                        id="loginName" 
                        className="entrada" 
                        name ="usuario"
                        placeholder="Usuario"
                        value={usuario}
                        onChange={(e)=>setUsuario(e.target.value)}
                        required
                    />
                        
                    
                </div>
                <div className="form-outline mb-4">
                    <input 
                    type="password" 
                    id="loginPassword" 
                    className="entrada"
                    placeholder="Contraseña"
                    value={contraseña}
                    onChange={(e)=>setContraseña(e.target.value)}
                    required
                />
                    
                </div>
                <div className="form-outline mb-4">
                    <input 
                        type="email" 
                        id="loginName" 
                        className="entrada" 
                        name ="email"
                        placeholder="Correo"
                        value={correo}
                        onChange={(e)=>setCorreo(e.target.value)}
                        required
                    />
                <br/>
                <br/>
                </div>            
                <button type="submit" className="btn btn-primary btn-block mb-4 btn-login">Registrarse</button>
            </form>   
        </div>     
    </>  
    )
    
}