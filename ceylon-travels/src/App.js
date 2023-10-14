import React from 'react'
import Navbar from './component/Navbar/Navbar'
import AdminNavbar from './component/AdminNavbar/AdminNavbar'
import Home from './component/Home/Home'
import Packages from './component/Packages/Packages'
import About from './component/About/About'
import Payments from './component/payments/Payments1'
import Payments2 from './component/payments/Payments2'
import Payments3 from './component/payments/Payments3'
import AdminLogin from './component/AdminLogin/AdminLogin'
import AdminHome from './component/AdminHome/AdminHome'
import ListCustomerComponents from './component/Customers/ListCustomerComponents'
import Orders from './component/Orders/Orders'
import UpdateCustomerComponents from './component/Customers/UpdateCustomerComponents'


const App = () => {
  let Comp 
  let NavBar 
  switch (window.location.pathname) {
    case "/":
      Comp = <Home/>
      NavBar=<Navbar/>
      break;
    
    case "/home":
        NavBar=<Navbar/>
        Comp = <Home/>
      break;
  
    case "/packages":
      NavBar=<Navbar/>
      Comp = <Packages/>
      break;

    case "/about":
      NavBar=<Navbar/>
      Comp = <About/>
        break;

    case "/Payments1":
      NavBar=<Navbar/>
      Comp = <Payments/>
        break;
    
    case "/Payments2":
      NavBar=<Navbar/>
      Comp = <Payments2/>
        break;

    case "/Payments3":
      NavBar=<Navbar/>
      Comp = <Payments3/>
        break;

    case "/admin":
      NavBar=<AdminNavbar/>
      Comp = <AdminLogin/>
        break;

    case "/AdminHome":
      NavBar=<AdminNavbar/>
      Comp = <AdminHome/>
        break;
    case "/ListCustomerComponents":
      NavBar=<AdminNavbar/>
      Comp=<ListCustomerComponents/>
      break;

    case "/Orders":
      NavBar=<AdminNavbar/>
      Comp=<Orders/>
      break;

    case "/updateCustomer":
      NavBar=<AdminNavbar/>
      Comp=<UpdateCustomerComponents/>
      break;

  }
    return (
        <>
          {NavBar}
          {Comp}
        
        </>
    )
}

export default App
