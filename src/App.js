import logo from './logo.svg';
import './App.css';
import { div } from 'three/tsl';
import Header from './Component/Header';
import Hero from './Component/Hero';
import Services from './Component/Services';
import About from './Component/About';
import Contact from './Component/Contact';
import Footer from './Component/Footer';
import NextPage from './Component/NextPage';


function App() {
  return (
   <div>
    <Header/>
      <Hero/>
      <Services/>
      <About/>
         <NextPage/>
      <Contact/>
     
      <Footer/>
    
      
   </div>
  );
}

export default App;
