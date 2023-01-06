import React from 'react'
import {Container, Row, Col } from 'react-bootstrap'
import Testimonials1 from '../img/Testimonials-1.png'
import Testimonials2 from '../img/Testimonials-2.png'
import Testimonials3 from '../img/Testimonials-3.png'
import Microsoft from '../img/microsoft.png'
import Google from '../img/google.png'
import Zoho from '../img/zoho.png' 
import './VideoSlide.css'

const VideoSlide = () => {
  return (
    <section className='videoSlide' id='videoSlide'>
        <Container>
            <Row className='text-center'>
                <div className='course-Top'>
                <h2>Our Placed Students</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit magna aliqua. Id faucibus nisl tincidunt eget nullam non nisi est sit. Porta non.</p>
                </div>
            </Row>
            <Row style={{marginTop: "45px"}}>
              <Col className='testimonial-sec'>
                <div className="testimonials text-center">
                  <img src={Testimonials1} alt=""/>
                  <h4>Student Name</h4>
                  <p className='position'>Full Stack Developer</p>
                  <p>Placed in</p>
                  <img src={Microsoft} alt="" style={{width: "100px"}}/>
                </div>
              </Col>
              <Col className='testimonial-sec'>
                <div className="testimonials text-center">
                  <img src={Testimonials2} alt=""/>
                  <h4>Student Name</h4>
                  <p className='position'>Full Stack Developer</p>
                  <p>Placed in</p>
                  <img src={Google} alt="" style={{width: "40px"}}/>
                </div>
              </Col>
              <Col className='testimonial-sec'>
                <div className="testimonials text-center">
                  <img src={Testimonials3} alt=""/>
                  <h4>Student Name</h4>
                  <p className='position'>Full Stack Developer</p>
                  <p>Placed in</p>
                  <img className="" src={Zoho} alt="" style={{width: "62px"}}/>
                </div>
              </Col>
            </Row>
        </Container>
    </section>
  )
}

export default VideoSlide
