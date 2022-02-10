import Header from './components/Header';
import Hero from './components/Hero';
import Community  from './components/Community';
import Features from './components/Features';
import Card from './components/Cards';
import Sigin from './components/Sigin';
import Footer from './components/Footer'

import './App.css';

const App = ()=> {
  return (
    <>
    <div className="overflow">
    <Header />
      <Hero />
      <Community />
      <Features />
      <Card />
      <Sigin />
      <Footer />
    </div>
      
    </>
  );
}

export default App;
