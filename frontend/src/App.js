import React from 'react'
import {Container} from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <Container>
        <h1>Welcome to TJ Model Trains</h1>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
