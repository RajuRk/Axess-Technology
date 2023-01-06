import React from 'react';
import {Col} from 'react-bootstrap';
import Fullstack from '../img/courses/appium-automation.png';
import ReactJs from '../img/courses/react-development.png';
import Devops from '../img/courses/devops.png';
import DS from '../img/courses/data-structures-algorithms.png';

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
        learner: "1000",
        star: "⭐⭐⭐⭐⭐",
        subscribers: "45",
        hrs: "48",
        img: ReactJs
    },
    {
        id: 3,
        tarining: "BOOTCAMP",
        learner: "500",
        star: "⭐⭐⭐⭐⭐",
        subscribers: "45",
        hrs: "248",
        img: Devops
    },
    {
        id: 4,
        tarining: "LIVE TRAINING",
        learner: "500",
        star: "⭐⭐⭐⭐⭐",
        subscribers: "28",
        hrs: "100",
        img: DS
    },
];

const Development = () => {
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

export default Development
