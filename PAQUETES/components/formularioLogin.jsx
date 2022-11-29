import React from "react";
import { useState } from 'react'
import {Titulo} from '/components/titulo'
import { NavegadorLink } from '/components/navLinkRegistro';
export function FormularioLogin(){
    const[usuario,setUsuario]=useState('')
    const[contraseña,setContraseña]=useState('')
    return(
        <>  
            <div className="mi-borde">    
                <form className="formulario">
                    <Titulo/>
                    <br/>
                    <NavegadorLink/>
                    <br/><br/>
                    <div className="form-outline mb-4">
                        <input 
                            type="text" 
                            id="loginName" 
                            name="usuario"
                            className="entrada" 
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
                        name="contraseña"
                        className="entrada"
                        placeholder="Contraseña"
                        value={contraseña}
                        onChange={(e)=>setContraseña(e.target.value)}
                        required
                        />
                        
                    </div>

                    <div className="row mb-4">
                        <div className="col-md-6 d-flex justify-content-center"></div>
                    </div>
                    
                    <div className="col-flex justify-content-center">
                    
                        <a href="#!">Olvidó la contraseña?</a>
                        
                    </div>
                    
                    <div className="cont-boton">
                        <button type="submit" className="btn btn-primary btn-block mb-4 btn-login">Login</button>
                    </div>
                    
                    </form>  
            </div>  
        </>
    )
    
}