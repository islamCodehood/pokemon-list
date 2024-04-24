import { useState } from 'react'
import './App.css'
import { Outlet } from "react-router-dom";

function App() {

  return (
    <>
      <div id="app">
        <header>
          <h1>Pokemon</h1>
        </header>
        <main>
          <Outlet />
        </main>
      </div>
    </>
  )
}

export default App
