import React from 'react';
import {Col} from 'react-bootstrap';
import Selenium from '../img/courses/wd.png';
import Platwright from '../img/courses/playwright.png';
import seleniumBootcamp from '../img/courses/sel.png';
import FullstackAuto from '../img/courses/full-stack-automation.png';
import RestAPI from '../img/courses/restapi.png';
import NonIT from '../img/courses/non-it.png';
import DS from '../img/courses/data-structures-algorithms.png';
import SDET from '../img/courses/sdet-program.png';
import Appium from '../img/courses/appium-automation.png';
import Jmeter from '../img/courses/Jmeter-Performance-testing.png';
import Software from '../img/courses/software-testing.png';

const datas = [
    {
       id: 1,
       tarining: "LIVE TRAINING",
       learner: "15000",
       star: "⭐⭐⭐⭐⭐",
       subscribers: "26",
       hrs: "100",
       img: Selenium
    },
    {
       id: 2,
       tarining: "LIVE TRAINING",
       learner: "200",
       star: "⭐⭐⭐⭐",
       subscribers: "31",
       hrs: "32",
       img: Platwright
    },
    {
       id: 3,
       tarining: "BOOTCAMP",
       learner: "500",
       star: "⭐⭐⭐⭐⭐",
       subscribers: "30",
       hrs: "124",
       img: seleniumBootcamp
    },
    {
       id: 4,
       tarining: "BOOTCAMP",
       learner: "250",
       star: "⭐⭐⭐⭐⭐",
       subscribers: "36",
       hrs: "200",
       img: FullstackAuto
    },
    {
       id: 5,
       tarining: "LIVE TRAINING",
       learner: "5000",
       star: "⭐⭐⭐⭐⭐",
       subscribers: "26",
       hrs: "48",
       img: RestAPI
    },
    {
       id: 6,
       tarining: "LIVE TRAINING",
       learner: "2500",
       star: "⭐⭐⭐⭐",
       subscribers: "12",
       hrs: "120",
       img: NonIT
    },
    {
       id: 7,
       tarining: "LIVE TRAINING",
       learner: "500",
       star: "⭐⭐⭐⭐⭐",
       subscribers: "28",
       hrs: "100",
       img: DS
    },
    {
       id: 8,
       tarining: "MASTER PROGRAM",
       learner: "100",
       star: "⭐⭐⭐⭐⭐",
       subscribers: "42",
       hrs: "480",
       img: SDET
    },
    {
       id: 9,
       tarining: "LIVE TRAINING",
       learner: "2000",
       star: "⭐⭐⭐⭐",
       subscribers: "28",
       hrs: "48",
       img: Appium
    },
    {
       id: 10,
       tarining: "LIVE TRAINING",
       learner: "2500",
       star: "⭐⭐⭐⭐",
       subscribers: "26",
       hrs: "48",
       img: Jmeter
    },
    {
       id: 11,
       tarining: "LIVE TRAINING",
       learner: "500",
       star: "⭐⭐⭐⭐",
       subscribers: "12",
       hrs: "320",
       img: Software
    },
 ];

const testing = () => {
  return (
    <>
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
    </>
  )
}

export default testing
