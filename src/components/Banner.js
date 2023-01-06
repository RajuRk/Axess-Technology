import React from 'react'
import {Container, Row, Col } from 'react-bootstrap'
import BannerImg from '../img/Group-banner.png'
import Android from '../img/Android_logo.png'
import Webdevelopemnt from '../img/web-development.png'
import Python from '../img/python.png'
import './Banner.css'

const Banner = () => {
  return (
     <section className='Banner'>
        <Container fluid>
            <Row>
                <Col md={6} lg={6} className="left-sec">
                  <div className='banner-left'>
                     <div className='title'>
                        <h1><span>Build your skills</span> & Upgrade your Career</h1>
                     </div>
                     <div className='subtitle'>
                        <h3>We were put on this earth to help you squeeze every last shared of value out of your career road-map.</h3>
                     </div>
                     <div className="get-btn">
                        <button className="btn btn-primary">Get Started</button>
                     </div>
                     <div className='cols-sec'>
                        <div className='courses'>
                          <div className='course'>
                            <img src={Android} alt=""/>
                            <p>Android App Development</p>
                          </div>
                          <div className='course'>
                            <img src={Webdevelopemnt} alt=""/>
                            <p>Web Development</p>
                          </div>
                          <div className='course'>
                            <img src={Python} alt=""/>
                            <p>Python Training</p>
                          </div>
                        </div> 
                     </div>
                  </div>
                </Col>
                <Col md={6} lg={6}>
                   <div className='banner-right'>
                      <img src={BannerImg} alt=""/>
                   </div> 
                </Col>
            </Row>
        </Container>
        <Container fluid className='p-0 second-container'>
            <Row>
                <div className='blue-back'>
                    <div className='blue-col'>
                       <h4>100%</h4>
                       <p>Job and Placement</p>
                    </div>
                    <div className='blue-col'>
                       <h4>4.9/5</h4>
                       <p>Ratings</p>
                    </div>
                    <div className='blue-col'>
                       <h4>Live Project</h4>
                       <p>24/7 Support</p>
                    </div>
                </div>
            </Row>
        </Container>
     </section>
  )
}

export default Banner
