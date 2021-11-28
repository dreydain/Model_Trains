import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {Container} from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import WorkOrderListScreen from './screens/WorkOrderListScreen'
import WorkorderDetailsScreen from './screens/WorkorderDetailsScreen'
import WorkorderInfoCreateScreen from './screens/WorkorderInfoCreateScreen'
import ProductListScreen from './screens/ProductListScreen'
import ProductDetailsScreen from './screens/ProductDetailsScreen'
import ProductUpdateScreen from './screens/ProductUpdateScreen'
import ProductCreateScreen from './screens/ProductCreateScreen'
import UserListScreen from './screens/UserListScreen'
import UserRegisterScreen from './screens/UserRegisterScreen'
import UserDetailsScreen from './screens/UserDetailsScreen'
import UserUpdateScreen from './screens/UserUpdateScreen'

function App() {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Routes>
            <Route path='/workorderlist' element={<WorkOrderListScreen/>}/>
            <Route path='/workorders/:id' element={<WorkorderDetailsScreen/>}/>
            <Route path='/workorders/new' element={<WorkorderInfoCreateScreen/>}/>
            <Route path='/productlist' element={<ProductListScreen/>}/>
            <Route path='/products/:id' element={<ProductDetailsScreen/>}/>
            <Route path='/products/:id/edit' element={<ProductUpdateScreen/>}/>
            <Route path='/products/new' element={<ProductCreateScreen/>}/>
            <Route path='/userlist' element={<UserListScreen/>}/>
            <Route path='/users/new' element={<UserRegisterScreen/>}/>
            <Route path='/users/:id' element={<UserDetailsScreen/>}/>
            <Route path='/users/:id/edit' element={<UserUpdateScreen/>}/>
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
