import './App.css';
import { BrowserRouter as Router, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Courses from './components/Courses';
import Features from './components/Features';
import VideoSlide from './components/VideoSlide';
import CourseFeatures from './components/CourseFeatures';
import Training from './components/Training';
import Gif from './components/GifSection';
import Form from './components/ContactForm';
import FooterSec from './components/Footer';

function App() {
  return (
    <Router>
      <Navbar/>
      <Banner/>
      <Courses/>
      <Features/>
      <VideoSlide/>
      <CourseFeatures/>
      <Training/>
      <Gif/>
      <Form/>
      <FooterSec/>
      <Routes></Routes>
    </Router>
  );
}

export default App;