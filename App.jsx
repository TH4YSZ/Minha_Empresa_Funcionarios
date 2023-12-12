import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Login from './pages/Login'
import Painel from './pages/Painel'
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App(){

  // auh verifica se o item "key" no armazenamento local (localStorage) é igual a 'token'. Se sim, auh é definido como true, caso contrário, é definido como false.
  const auh = localStorage.getItem("key") === 'token' || false

  return(
    <>
      <BrowserRouter>
      <Routes>
      {/* Posso passar qualquer coisa na rota '/' e ela irá permanecer na página login */}
        <Route path='/*' element= {<Login/>}/>
        {auh ? <Route path='/painel' element= {<Painel/>}/> : ""}
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App  