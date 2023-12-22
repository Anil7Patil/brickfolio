import React from 'react';
import './App.css';
import AppHeader from './components/header';
import AppHero from './components/hero';
import AppAbout from './components/about';
import AppBlog from './components/blog';
import AppContact from './components/contact';
import AppService from './components/service';
import ButtonClick from './components/ButtonClick';
import ProductDetails from './components/ProductDetails';
import ProductsCategory from './components/ProductsCategory';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <div className="App">
      <h1>Hello, React!</h1>
      
    <header id="header">
      <AppHeader/>
     </header>
     <main>
      <AppHero/>
      <ButtonClick/>
      <ProductDetails/>
     <AppBlog/>
     <ProductsCategory/>
      <AppAbout/>
      <AppContact/>
     
      
     </main>
    </div>
  );
}

export default App;
