import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './component/Header.jsx'
import { device } from './Data'
import Device from './component/device'
function App() {
  return (
    <div>
      <Header />
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {device?.map((item) => (
            <Device device={item} key={item.id} />
          ))}
        </div>
      </main>
    </div>
  )
}

export default App
