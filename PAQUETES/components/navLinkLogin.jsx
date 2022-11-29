import React from "react"
import { Link, Outlet } from "react-router-dom"
export function LinkLogin(){

    return(
        <>
            <nav className="navbar navbar-expand-lg bg-Light " id="navegador" >
                <div className="container-fluid">
                    <h4 className="navbar-brand" href="#">Gestión de paquetes - Registro de Usuario</h4>
                    <div id="navbarNav">
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <Link className="nav-link" to="/">Login</Link>                                              
                        </div>
                    </div>
                </div>
            </nav>
            <Outlet/>
        </>
          )
      }