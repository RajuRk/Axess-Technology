import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import TrainingImg from '../img/tarining-img.png'
import './Training.css'

const Training = () => {
  return (
    <section className='training-institute'>
      <Container>
        <Row>
            <Col md={6} lg={6} className="flex-class">
              <div className='left-training'>
                <h2>No. 1 Training <br/>Institute in Coimbatore</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id faucibus nisl tincidunt eget nullam non nisi est sit. Porta non.</p>
                <button className='contact-btn'>Contact Us</button>
              </div>
            </Col>
            <Col md={6} lg={6}>
              <div className='right-training'>
                 <img src={TrainingImg} alt=""/>
              </div>
            </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Training
