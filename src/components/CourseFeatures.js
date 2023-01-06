import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import CourseFeaturesImg from '../img/course-feature-img.png'
import Corporation from '../img/corporation.png'
import Mentor from '../img/mentor.png'
import Bag from '../img/bag.png'
import Lecture from '../img/lecture.png'
import VideoBanner from '../img/main-video.png'
import './CourseFeatures.css'

const CourseFeatures = () => {
  return (
    <section className="course-features">
       <Container fluid>
          <Row>
              <Col md={6} lg={6}>
                <div className="left-course-image text-center">
                   <img src={CourseFeaturesImg} alt=""/>    
                </div>
              </Col>
              <Col md={6} lg={6}>
                <div className="left-course-desc">
                   <div className='title-course-desc'>
                      <h2>Course Features</h2>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id faucibus nisl tincidunt eget nullam non nisi est sit. Porta non.</p>
                   </div>
                   <div className='icon-course-desc'>
                      <Row>
                        <Col md={6} lg={6}>
                            <div className='icon-dec-box'>
                               <img src={Lecture} alt=""/>
                               <h5>Online Training</h5>
                               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                            </div>
                        </Col>
                        <Col md={6} lg={6}>
                            <div className='icon-dec-box'>
                               <img src={Mentor} alt=""/>
                               <h5>One and One Training</h5>
                               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                            </div>
                        </Col>
                      </Row>
                      <Row>
                        <Col md={6} lg={6}>
                            <div className='icon-dec-box'>
                               <img src={Bag} alt=""/>
                               <h5>Placement Training</h5>
                               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                            </div>
                        </Col>
                        <Col md={6} lg={6}>
                            <div className='icon-dec-box'>
                               <img src={Corporation} alt=""/>
                               <h5>Corporate Training</h5>
                               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                            </div>
                        </Col>
                      </Row>
                   </div>
                </div> 
              </Col>
          </Row> 
          <Row>
            <Col md={8} lg={8} style={{margin: "auto"}}>
                <div className='main-video-banner mt-4'>
                   <img src={VideoBanner} alt=""/>
                </div>
            </Col>
          </Row>
       </Container>  
    </section>
  )
}

export default CourseFeatures
