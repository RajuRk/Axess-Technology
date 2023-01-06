import React from 'react'
import {Container, Row, Col } from 'react-bootstrap'
import Time from '../img/24-7.png'
import Meta from '../img/meta.png'
import Cloud from '../img/cloud.png'
import Hours from '../img/24-7.png'
import Money from '../img/money.png' 
import './Features.css'

const Features = () => {
  return (
    <section id='features' className='features' style={{marginTop: "60px"}}>
       <Container fluid>
          <Row>
            <Col md={5} lg={5} className='column-features'>
                <div className='key-features'>
                   <h2>Key Features</h2>
                   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id faucibus nisl tincidunt eget nullam non nisi est sit. Porta non.</p>
                </div>
            </Col>
            <Col md={7} lg={7}>
                <Row className="features-box">
                    <Col md={6} lg={6}>
                        <div className='features-cols'>
                           <div className='feature'>
                              <img src={Time} alt=""/>
                              <p>Life Time Access</p>
                           </div>
                           <div className='feature'>
                              <img src={Meta} alt=""/>
                              <p>Real Time Code Analysis</p>
                           </div>
                           <div className='feature'>
                              <img src={Cloud} alt=""/>
                              <p>Cloud Labs</p>
                           </div>
                        </div>
                    </Col>
                    <Col md={6} lg={6}>
                        <div className='features-cols'>
                           <div className='feature'>
                              <img src={Hours} alt=""/>
                              <p>24x7 Support</p>
                           </div>
                           <div className='feature'>
                              <img src={Money} alt=""/>
                              <p>Money Back</p>
                           </div>
                           <div className='feature'>
                              <img src={Cloud} alt=""/>
                              <p>Project Feedback</p>
                           </div>
                        </div>
                    </Col>
                </Row>
            </Col>
          </Row>
       </Container>
    </section>
  )
}

export default Features
