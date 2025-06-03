import React, { useState } from 'react'
import './App.css'

function App() {
  const [firstName, setFirstName] = useState("Mustafa")

  return (
    <div>
      <div>{firstName}</div>
      <div><button onClick={() => { setFirstName("Emir") }}>Bas</button></div>
      <div>test</div>
    </div>
  )
}

export default App
