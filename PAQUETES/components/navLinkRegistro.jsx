import React from "react"
import { Link, Outlet } from "react-router-dom"
export function NavegadorLink(){

    return(
        <>
            <nav className="navbar navbar-expand-lg bg-Light " id="navegador" >
                <div className="container-fluid">
                    <h4 className="navbar-brand" href="#">Gestión de paquetes - Login</h4>
                    <div id="navbarNav">
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <Link className="nav-link" to="/formularioRegistro">Registrarse</Link>      
                            <Link className="nav-link" to="/formularioActualizar">Actualizar</Link>   
                            <Link className="nav-link" to="/formularioCrear">Crear</Link>                               
                        </div>
                       
                    </div>
                </div>
            </nav>
            <Outlet/>
        </>
          )
      }