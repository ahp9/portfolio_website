import './App.css'
import Footer from './components/layout/Footer/Footer'
import Header from './components/layout/Header/Header'
import About from './components/sections/About/About'
import Education from './components/sections/Education/Education'
import Hero from './components/sections/Hero/Hero'
import Projects from './components/sections/Projects/Projects'
import Work from './components/sections/Work/Work'

function App() {

  return (
    <>
      <Header />

      <main>
        <Hero />
        <About />
        <Education />
        <Projects />
        <Work />
      </main>

      <Footer />
    </>
  )
}

export default App
