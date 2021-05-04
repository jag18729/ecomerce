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
import OrderListPage from './views/OrderListPage'
import UserListPage from './views/UserListPage'
import UserEditPage from './views/UserEditPage'
import ProductListPage from './views/ProductListPage'
import ProductEditPage from './views/ProductEditPage'

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
          <Route path="/admin/user/:id/edit" component={UserEditPage} />
          <Route path="/register" component={RegisterPage} />
          <Route path="/shipping" component={ShippingPage} />
          <Route path="/payment" component={PaymentPage} />
          <Route path="/placeOrder" component={PlaceOrderPage} />
          <Route path="/admin/productlist" component={ProductListPage} exact />
          <Route path="/admin/productlist/:pageNumber" component={ProductListPage} exact />
          <Route path="/admin/orderlist" component={OrderListPage} />
          <Route path="/admin/product/:id/edit" component={ProductEditPage} />
          <Route path="/product/:id" component={ProductPage} />
          <Route path="/cart/:id?" component={CartPage} />
          <Route path='/search/:keyword' component={HomePage} exact />
          <Route path='/search/:keyword/page/:pageNumber' component={HomePage} exact />
          <Route path='/page/:pageNumber' component={HomePage} exact />
          <Route path='/' component={HomePage} exact />
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
