import React from 'react'
import CardList from './components/CardList/CardList'
import './App.css'
import { BrowserRouter,Routes, Route} from 'react-router-dom'
import Pokemon from './components/Stats/Pokemon'
import Navbar from './components/Navbar/Navbar'

function App() {
  
  return (
    <>
    <Navbar/> 
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<CardList/>}/>
    <Route path="/pokemonstats/:pokemonId" element={<Pokemon/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
