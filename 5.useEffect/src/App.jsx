import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'
import { use } from 'react'


function App() {

  const [firstName, setFirstName] = useState("")
  useEffect(() => {
    console.log("her zaman çalışır")
  })

  useEffect(() => {
    console.log("sadece ilk renderda çalışır")
  }, [])

  useEffect(() => {
    console.log("ilk renderda  çalışır ve firstName değiştiğinde çalışır")
  }, [firstName])
  return (
    <div><button onClick={() => setFirstName("Fener")}>değiştir</button></div>
  )
}

export default App
