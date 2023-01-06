import React from 'react'
import {Col} from 'react-bootstrap'
import AWS from '../img/courses/aws.png';
import Kubernetes from '../img/courses/k8s.png';
import Devops from '../img/courses/devops.png';

const datas = [
    {
        id: 1,
        tarining: "LIVE TRAINING",
        learner: "2000",
        star: "⭐⭐⭐⭐⭐",
        subscribers: "36",
        hrs: "80",
        img: AWS
    },
    {
        id: 2,
        tarining: "LIVE TRAINING",
        learner: "1000",
        star: "⭐⭐⭐⭐⭐",
        subscribers: "46",
        hrs: "32",
        img: Kubernetes
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
];

const Cloud = () => {
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

export default Cloud
