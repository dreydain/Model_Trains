import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {Container} from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import WorkOrderListScreen from './screens/WorkOrderListScreen'
import ProductListScreen from './screens/ProductListScreen'
import UserListScreen from './screens/UserListScreen'
import UserRegisterScreen from './screens/UserRegisterScreen'
import UserDetailsScreen from './screens/UserDetailsScreen'

function App() {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Routes>
            <Route path='/workorderlist' element={<WorkOrderListScreen/>}/>
            <Route path='/productlist' element={<ProductListScreen/>}/>
            <Route path='/userlist' element={<UserListScreen/>}/>
            <Route path='/users/:id' element={<UserDetailsScreen/>}/>
            <Route path='/users/new' element={<UserRegisterScreen/>}/>
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
