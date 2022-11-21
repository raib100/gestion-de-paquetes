import React from "react";
import {Titulo} from '/components/titulo'
export function FormularioActualizar(){
    return(
        <div classNameName ="row">
            <div classNameName="col -4"></div>
            <div classNameName="col -4">
                <div classNameName="tab-content">
                    <div classNameName="tab-pane fade show active" id="pills-login" role="tabpanel" aria-labelledby="tab-login">
                        <form  className="form">
                            <Titulo/>
                            <br/>
                            <h2>Gestión de paquetes-Actualización de órdenes</h2>
                            <br/>
                            <div className="form-outline mb-4">
                                <label forHtmltml="start" id="start">Fecha:</label>
                                <input type="date" id="start" name="trip-start" value="2022-11-22" min="2018-01-01" max="2018-12-31"/>
                                <label forHtml="start" className="hora">Hora:</label>
                                <input type="time" id="start" name="trip-start" value="08:00"min="12:00" max="18:00"/>
                            </div>
                            <div className="opciones">
                                <label forHtmltml="start" id="start">Estado</label>
                                <select className="form-select" aria-label="Default select example">
                                    <option selected></option>
                                    <option value="guardado">Guardado</option>
                                    <option value="cancelado">Cancelado</option>
                                    <option value="cumplido">Cumplido</option>
                                </select>
                                <br/><br/>
                            </div>
                            <div className="form-outline mb-4">
                                <label forHtml="floatingInput" className="ent-dim">Largo</label>
                                <input type="text" className="dimension" name="largo"/>
                                <label forHtml="floatingInput"className="ent-dim">Ancho</label>
                                <input type="text" className="dimension" name="ancho"/>
                                <label forHtml="floatingInput"className="ent-dim">Alto</label>
                                <input type="text" className="dimension" name="alto"/>
                                <label forHtml="floatingInput"className="ent-dim">Peso</label>
                                <input type="text" className="dimension" name="peso"/>
                            </div>
                            <div className="form-outline mb-4">
                                
                                <input type="text" id="loginName" className="form-control" placeholder="Dirección de recogida"/> 
                            </div>
                        
                            <div className="form-outline mb-4">
                                <input type="text" id="loginName" className="form-control"placeholder="Ciudad de recogida" />
                            </div>
                            
                            <div className="form-outline mb-4">
                                <input type="text" id="loginPassword" className="form-control" placeholder="Nombre destinatario" />
                            </div>

                            <div className="form-outline mb-4">
                                <input type="text" id="loginName" className="form-control"placeholder="Cédula/Nit destinatario"/>
                            </div>
                            <div className="form-outline mb-4">
                                
                                <input type="text" id="loginName" className="form-control" placeholder="Dirección de entrega"/> 
                            </div>
                        
                            <div className="form-outline mb-4">
                                <input type="text" id="loginName" className="form-control"placeholder="Ciudad de entrega" />
                            </div>
                            <div className="row mb-4">
                                <div className="col-md-6 d-flex justify-content-center"></div>
                            </div>
                    
                            <button type="submit" className="btn btn-primary btn-block mb-4">Actualizar Orden</button>
                        </form>
                        
                        
                    </div>
                </div>
            </div>
            <div classNameName="col -4"></div>
        </div>
    )
}