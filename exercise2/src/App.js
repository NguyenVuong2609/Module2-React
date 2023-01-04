// import './App.css';
import { images } from './assets/img';
import Header from './Components/header';
import Carousel from './Components/Carousel';
import About from './Components/About';
import Services from './Components/Services';
import Appointment from './Components/Appointment';
import Features from './Components/Features';
import Actions from './Components/Actions';
import Teams from './Components/Teams';
import Testimonial from './Components/Testimonial';
import Footer from './Components/Footer';

function App() {
  return (
    <>
      <Header></Header>
      <Carousel></Carousel>
      <About></About>
      <Services></Services>
      <Appointment></Appointment>
      <Features></Features>
      <Actions></Actions>
      <Teams></Teams>
      <Testimonial></Testimonial>
      <Footer></Footer>
    </>
  );
}

export default App;
