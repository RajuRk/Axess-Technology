import React from 'react'
import {Container, Row, Col, Tab, Tabs } from 'react-bootstrap'
import Fullstack from '../img/courses/appium-automation.png';
import Selenium from '../img/courses/wd.png';
import AWS from '../img/courses/aws.png';
import Platwright from '../img/courses/playwright.png';
import seleniumBootcamp from '../img/courses/sel.png';
import FullstackAuto from '../img/courses/full-stack-automation.png';
import RestAPI from '../img/courses/restapi.png';
import Kubernetes from '../img/courses/k8s.png';
import ReactJs from '../img/courses/react-development.png';
import Devops from '../img/courses/devops.png';
import NonIT from '../img/courses/non-it.png';
import DS from '../img/courses/data-structures-algorithms.png';
import SDET from '../img/courses/sdet-program.png';
import Appium from '../img/courses/appium-automation.png';
import Jmeter from '../img/courses/Jmeter-Performance-testing.png';
import Software from '../img/courses/software-testing.png';
import './Courses.css'
import Testing from './testing';
import Development from './Development';
import Cloud from './Cloud';

const datas = [
   {
      id: 1,
      tarining: "LIVE TRAINING",
      learner: "800",
      star: "⭐⭐⭐⭐⭐",
      subscribers: "54",
      hrs: "200",
      img: Fullstack
   },
   {
      id: 2,
      tarining: "LIVE TRAINING",
      learner: "15000",
      star: "⭐⭐⭐⭐⭐",
      subscribers: "26",
      hrs: "100",
      img: Selenium
   },
   {
      id: 3,
      tarining: "LIVE TRAINING",
      learner: "2000",
      star: "⭐⭐⭐⭐⭐",
      subscribers: "36",
      hrs: "80",
      img: AWS
   },
   {
      id: 4,
      tarining: "LIVE TRAINING",
      learner: "200",
      star: "⭐⭐⭐⭐",
      subscribers: "31",
      hrs: "32",
      img: Platwright
   },
   {
      id: 5,
      tarining: "BOOTCAMP",
      learner: "500",
      star: "⭐⭐⭐⭐⭐",
      subscribers: "30",
      hrs: "124",
      img: seleniumBootcamp
   },
   {
      id: 6,
      tarining: "BOOTCAMP",
      learner: "250",
      star: "⭐⭐⭐⭐⭐",
      subscribers: "36",
      hrs: "200",
      img: FullstackAuto
   },
   {
      id: 7,
      tarining: "LIVE TRAINING",
      learner: "5000",
      star: "⭐⭐⭐⭐⭐",
      subscribers: "26",
      hrs: "48",
      img: RestAPI
   },
   {
      id: 8,
      tarining: "LIVE TRAINING",
      learner: "1000",
      star: "⭐⭐⭐⭐⭐",
      subscribers: "46",
      hrs: "32",
      img: Kubernetes
   },
   {
      id: 9,
      tarining: "LIVE TRAINING",
      learner: "1000",
      star: "⭐⭐⭐⭐⭐",
      subscribers: "45",
      hrs: "48",
      img: ReactJs
   },
   {
      id: 10,
      tarining: "BOOTCAMP",
      learner: "500",
      star: "⭐⭐⭐⭐⭐",
      subscribers: "45",
      hrs: "248",
      img: Devops
   },
   {
      id: 11,
      tarining: "LIVE TRAINING",
      learner: "2500",
      star: "⭐⭐⭐⭐",
      subscribers: "12",
      hrs: "120",
      img: NonIT
   },
   {
      id: 12,
      tarining: "LIVE TRAINING",
      learner: "500",
      star: "⭐⭐⭐⭐⭐",
      subscribers: "28",
      hrs: "100",
      img: DS
   },
   {
      id: 13,
      tarining: "MASTER PROGRAM",
      learner: "100",
      star: "⭐⭐⭐⭐⭐",
      subscribers: "42",
      hrs: "480",
      img: SDET
   },
   {
      id: 14,
      tarining: "LIVE TRAINING",
      learner: "2000",
      star: "⭐⭐⭐⭐",
      subscribers: "28",
      hrs: "48",
      img: Appium
   },
   {
      id: 15,
      tarining: "LIVE TRAINING",
      learner: "2500",
      star: "⭐⭐⭐⭐",
      subscribers: "26",
      hrs: "48",
      img: Jmeter
   },
   {
      id: 16,
      tarining: "LIVE TRAINING",
      learner: "500",
      star: "⭐⭐⭐⭐",
      subscribers: "12",
      hrs: "320",
      img: Software
   },
];


const Courses = () => {
  return (
    <section id="courses" className='courses-sec'>
       <Container>
          <Row className='text-center'>
             <div className='course-Top'>
              <h2>Job Oriented & Certification Training Courses</h2>
             </div>
          </Row>
          <Row className='mt-4'>
            <Tabs
            defaultActiveKey="categories"
            id="fill-tab-example"
            className="mb-3"
            fill
            >
            <Tab eventKey="categories" title={<span className="tab-icons-top"><i className="fa fa-list-alt" /> All
</span>}>
                <div className='col-courses'>
                   <Row>
                        {
                           datas.map((data) => (
                              <Col md={3} lg={3} key={data.id}>
                                 <div className='course-obj'>
                                    <img src={data.img} alt=""/>
                                    <div className='couse-desc'>
                                       <h5>{data.tarining}</h5>
                                       <p className='m-0'><strong>{data.learner}+ Successful Learners</strong></p>
                                    </div>
                                    <div className='star-hrs'>
                                       <div className="star-sec">
                                          <ul>
                                             <li>{data.star}</li>
                                          </ul>
                                          <p>EARN UPTO {data.subscribers} LAKHS</p>
                                       </div>
                                       <div className="hrs-sec">
                                          <p>{data.hrs}+ <span>hrs</span></p>
                                       </div>
                                    </div>
                                 </div>
                              </Col>
                           ))
                        }
                        
                   </Row>
                </div>
            </Tab>
            <Tab eventKey="testing" title={<span className="tab-icons-top"><i className="fa fa-check"/> Testing
</span>} className='tab-icons'>
               <Row>
                 <Testing/> 
               </Row>
                 
            </Tab>
            <Tab eventKey="development" title={<span className="tab-icons-top"><i className="fa-solid fa-code" /> Development</span>}>
               <Row>
                 <Development/>
               </Row>
            </Tab>
            <Tab eventKey="cloud" title={<span className="tab-icons-top"><i className="fa fa-cloud"/> Cloud</span>}>
               <Row>
                 <Cloud/>
               </Row>  
            </Tab>
            </Tabs>
          </Row>
       </Container>
    </section>
  )
}

export default Courses
