import { useState } from 'react'
import './App.css'
import Mensagem from './components/Mensagem'
import Frase from './components/Frase'
import Calculadora from './components/Calculadora'

function HelloWorld(){
  return <p>Geminha</p>
} 


function App() {
  return (
    <>
    <HelloWorld></HelloWorld>
    <Mensagem texto="Geminho"></Mensagem>
    <Frase></Frase>
    <Calculadora/>
    </>
  )
}

export default App
