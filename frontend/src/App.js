import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {Container} from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import WorkOrderListScreen from './screens/WorkOrderListScreen';
import ProductListScreen from './screens/ProductListScreen'

function App() {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Routes>
            <Route path='/workorderlist' element={<WorkOrderListScreen/>}/>
            <Route path='/productlist' element={<ProductListScreen/>}/>
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
