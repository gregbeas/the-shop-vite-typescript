import { useState } from "react"
import Banner from "./components/Banner"
import Categories from "./components/Categories"
import Feature from "./components/Feature"
import FeatureBakery from "./components/FeatureBakery"
import FeatureProduce from "./components/FeatureProduce"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import MobileNav from "./components/MobileNav"
import Navbar from "./components/Navbar"
import NewsLetter from "./components/NewsLetter"
import { CartContextProvider } from "./context/CartContext"
import Cart from "./components/Cart"

const App = () => {

  const [showCart, setShowCart] = useState(false);

  return (
    <CartContextProvider>
      <>
        <header>
          <Navbar setShowCart={setShowCart}/>
          <MobileNav setShowCart={setShowCart}/>
        </header>
        <main className="bg-background">
          <Hero />
          <Categories />
          <FeatureProduce />
          <FeatureBakery />
          <Banner />
          <NewsLetter />
          <Feature />
          <Footer />
          {showCart && <Cart showCart={showCart} setShowCart={setShowCart}/> }
        </main>
      </>
    </CartContextProvider>
  )
}

export default App
