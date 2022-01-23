import './sass/main.scss'
import './fontawesome'
import Header from './components/Header/Header.jsx'
import Home from './components/Home/Home.jsx'
import Works from './components/Works/Works.jsx'
import AboutUs from './components/AboutUs/AboutUs.jsx'
import Service from './components/Service/Service.jsx'
import CTASection from './components/CTA/CTA.jsx'
import Letter from './components/Letter/Letter.jsx'
import Footer from './components/Footer/Footer.jsx'

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Works />
      <AboutUs />
      <Service />
      <CTASection />
      <Letter />
      <Footer />
    </div>
  );
}

export default App;
