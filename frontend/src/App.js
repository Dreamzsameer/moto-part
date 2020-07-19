import React from 'react';
import data from './data';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import HomeScreen from './Screens/HomeScreen';
import ProductScreen from './Screens/ProductScreen';

function App() {

  const openMenu = () =>{
    document.querySelector(".sidebar").classList.add("open");
  }
  const closeeMenu = () =>{
    document.querySelector(".sidebar").classList.remove("open");
  }
  return (
 <BrowserRouter>     
    <div className="grid-container">
            <header className="header">
               <div className="brand">
                   <button onClick={openMenu}>
                       &#9776;
                   </button>
                   <a href="index.html">Moto Part</a>
               </div>
               <div className="header-links">
                   <a href="cart.html">Cart</a>
                   <a href="signin.html">Sign In</a>

               </div>
            </header>
            <aside className="sidebar">
                <h3>Shopping Categories</h3>
                <button className="sidebar-close-button" onClick={closeeMenu}>x</button>
                <ul>
                    <li>
                        <a href="index.html">Cars</a>
                    </li>
                    <li>
                        <a href="index.html">Bus</a>
                    </li>
                    <li>
                        <a href="index.html">Trucks</a>
                    </li>
                </ul>
            </aside>
           <main className="main">
               <div className="content">
                   <Route path="/products/:id" component={ProductScreen}/>
                   <Route path="/" exact={true} component={HomeScreen}/>
                   <ul className="products">
                     {
                       data.products.map(product => 
                        <li>
                       <div className="product">
                           <img className="product-images" src={product.images} alt="product" />
                           <div className="product-name">
                               <a href="product.html">{product.name}</a>
                               </div>
                           <div className="product-brand">{product.brand}</div>
                           <div className="product-price">NPR{product.price}</div>
                           <div className="product-rating">{product.rating} stars ({product.numReviews})</div>
                       </div>
                      </li> )
                     }
                   
                   
                </ul>
            </div>
            </main>
            <footer className="footer">
              All right reserved.  
            </footer>
             </div>
         </BrowserRouter>
  );
}

export default App;
