
import './App.css';

import Header from "./component/layout/Header/Header.js"
// import Footer from './component/layout/Footer/Footer.js';
import Home from "./component/Home/Home.js";
import Search from './component/Product/Search.js';
import ProductDetails from './component/Product/ProductDetail.js';
import { BrowserRouter as Router,Route ,Routes} from 'react-router-dom';
import WebFont from "webfontloader";
import React from 'react';
import Products from './component/Product/Products';
import LoginSignUp from './component/user/LoginSignUp';


function App() {
  React.useEffect(()=>{
    WebFont.load({
      google:{
        families:["Roboto","Droid Sans","Chilanka"]
      }

    })
  },[])

  return (
    <Router>
       <Header></Header>
    <Routes>
   
      <Route exact path="/" Component={Home} />
       <Route exact path="/product/:id" Component={ProductDetails}/>
       <Route exact path='/product/search' Component={Search}></Route>
       <Route exact path="/products" Component={Products}/>
       <Route path="/products/:keyword" Component={Products}/>
       <Route exact path='/login' Component={LoginSignUp}></Route>
    </Routes>
    
    {/* <Footer></Footer> */}
    </Router>

  );
}

export default App;
