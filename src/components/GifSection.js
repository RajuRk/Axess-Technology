import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Animated from '../img/animated.gif' 
import './GifSection.css'

const GifSection = () => {
  return (
    <section id="gifsection" className="gifsection">
       <Container>
          <Row>
            <Col md={6} lg={6}>
               <div className='gif-image'>
                  <img src={Animated} alt=""/>
               </div>
            </Col>
            <Col md={6} lg={6} className="gif-flex">
               <div className='gif-title'>
                  <h2>If You Any Query Feel Free to Contact Us!</h2>
                  <button>Contact Us Today</button>
               </div>
            </Col>            
          </Row>
       </Container>
    </section>
  )
}

export default GifSection
