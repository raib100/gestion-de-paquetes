import {Titulo} from '/components/titulo'
import {FormularioLogin} from '/components/formularioLogin'
import {FormularioRegistro} from '/components/formularioRegistro'
import {FormularioCrear} from '/components/formularioCrear'
import {FormularioActualizar} from '/components/formularioActualizar'
import {FormularioTablas} from '/components/formularioTablas'

import './App.css'
import {Route, Routes} from 'react-router-dom'
function App() {
  

  return (
    <div>
        <Routes>
          <Route path='/'element={<FormularioLogin/>}/>
          <Route path='/formularioCrear' element={<FormularioCrear/>}/>
          <Route path='/formularioActualizar' element={<FormularioActualizar/>}/>
          <Route path='/formularioCrear' element={<FormularioCrear/>}/>
          <Route path='/formularioRegistro' element={<FormularioRegistro/>}/>
        </Routes>
      </div>
  )
}

export default App
