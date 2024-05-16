import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import Model from './components/Model';
import TestComp from './components/TestComp';

const App = () => {

  return (
      <main className="bg-black">
        <Navbar />
        <Hero/>
        <Highlights/>
        <Model />
        <Hero />
      </main>
  )
}

export default App
