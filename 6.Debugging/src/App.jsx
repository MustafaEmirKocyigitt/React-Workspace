import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [vize1, setVize1] = useState(0)
  const [vize2, setVize2] = useState(0)

  const ortalama = () => {
    debugger; // Debugging için breakpoint
    const toplamSonuc = topla() / 2;
    yazdır(toplamSonuc);
  }
  const topla = () => {
    debugger; // Debugging için breakpoint
    const toplam = vize1 + vize2;
    return toplam;
  }

  const yazdır = (sonuc) => {
    debugger; // Debugging için breakpoint
    console.log("Ortalama: " + sonuc);
  }

  return (
    <div>
      <div>
        <input type="number" value={vize1} onChange={(e) => setVize1(Number(e.target.value))} />
      </div><br />
      <div>
        <input type="number" value={vize2} onChange={(e) => setVize2(Number(e.target.value))} />
      </div><br />
      <div><button onClick={ortalama}>Ortalama Bul</button></div>

    </div>
  )

}

export default App
