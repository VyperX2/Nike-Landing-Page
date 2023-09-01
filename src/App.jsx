import React from "react"
import Nav from "./components/Nav"
import Hero from "./components/Hero"
import Products from "./components/Products"
import ProductDescription from "./components/ProductDescription" 
import Perks from "./components/Perks"
import Offer from "./components/Offer"
import Reviews from "./components/Reviews"
import NewsLetter from "./components/NewsLetter"
import Footer from "./components/Footer"


const App= () => (
    <div className="relative overflow-x-hidden scrollbar-thin  flex flex-col  ">
      
        <Nav />
        <Hero  />
        <Products  />
        <ProductDescription  />
        <Perks />
        <Offer />
        <Reviews />
        <NewsLetter />
        <Footer />
    </div>
  )

export default App
