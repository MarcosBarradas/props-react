import { useState } from 'react'
import Hello from '../componentes/Hello'
import Ola from '../componentes/Ola'
import Autenticado from '../componentes/Autenticado'
import VerificaIdade from '../componentes/VerificaIdade'
import VerificaEstudante from '../componentes/VerificaEstudante'
import AplicaDesconto from '../componentes/AplicaDesconto'
import Usuario from '../componentes/Usuario'
import Nivelamento from '../componentes/Nivelamento'
import Botao from '../componentes/Botao'
import './App.css'
import Nota from '../componentes/Nota'

function App() {
  const [logado, setLogado] = useState(false);

  return (
    <>
      <Hello/>
      <Ola nome="Canalha"/>
      <Autenticado autenticado={true}/>
      <VerificaIdade idade={17}/>
      <VerificaEstudante estuda={false}/>
      <Nota nota={100}></Nota>
      <AplicaDesconto desconto={0}/> 
      <Usuario online={true}/>
      <Nivelamento>Avançado</Nivelamento>
      <Botao logado={logado} setLogado={setLogado}/>
    </>
  )
}

export default App
