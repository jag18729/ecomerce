import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './views/HomePage'
import ProductPage from './views/ProductPage'
import CartPage from './views/CartPage'
import LoginPage from './views/LoginPage'
import RegisterPage from './views/RegisterPage'
import ProfilePage from './views/ProfilePage'
import ShippingPage from './views/ShippingPage'
import PaymentPage from './views/PaymentPage'
import PlaceOrderPage from './views/PlaceOrderPage'
import OrderPage from './views/OrderPage'
import UserListPage from './views/UserListPage'
const App = () => {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Route path="/order/:id" component={OrderPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/profile" component={ProfilePage} />
          <Route path="/admin/userlist" component={UserListPage} />
          <Route path="/register" component={RegisterPage} />
          <Route path="/shipping" component={ShippingPage} />
          <Route path="/payment" component={PaymentPage} />
          <Route path="/placeOrder" component={PlaceOrderPage} />
          <Route path="/product/:id" component={ProductPage} />
          <Route path="/cart/:id?" component={CartPage} />
          <Route path='/' component={HomePage} exact />
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
