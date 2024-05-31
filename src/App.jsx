import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import Model from './components/Model';
import FullStory from './components/FullStory';
import ProchipSection from './components/ProchipSection';

const App = () => {

  return (
      <main className="bg-black">
        <Navbar />
        <Hero/>
        <Highlights/>
        <Model />
        <FullStory />
        <ProchipSection/>
      </main>
  )
}

export default App
