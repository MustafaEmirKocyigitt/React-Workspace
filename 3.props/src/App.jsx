import { useState } from 'react'
import './App.css'
import Product from './Product'
import Container from './Container'

function App() {

  return (
    <div>
      {/* <Product productName="Ayyakabı" price={5100} />
      <Product productName="Pantolon" price={1250} /> */}

      <Container>
        <Product productName="Araba" price="450.000" />
      </Container >
    </div>
  )
}

export default App
