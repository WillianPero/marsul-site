import './App.css'

import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Products from './components/Products/Products'
import Quality from './components/Quality/Quality'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <About />
        <Products />
        <Quality />
        <Contact />
      </main>

      <Footer />
    </>
  )
}

export default App