import React from 'react'
import './Footer.css'
import { Container, Row, Col } from 'react-bootstrap'
import FooterLogo from '../img/footer-logo.png'

const FooterSec = () => {
  return (
    <footer>
        <Container>
            <Row className='mb-4'>
                <Col md={3} lg={3} className="mb-3">
                    <div className='about-footer'>
                        <h4>About Us</h4>
                        <img src={FooterLogo} alt=""/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                        <div className='social-footer'>
                            <li><a href="/#"><i className="fa-brands fa-facebook-f"></i></a></li>
                            <li><a href="/#"><i className="fa-brands fa-linkedin-in"></i></a></li>
                            <li><a href="/#"><i className="fa-brands fa-twitter"></i></a></li>
                        </div>
                    </div>
                </Col>
                <Col md={3} lg={3} className="mb-3">
                    <div className='quicklink-footer'>
                        <h4>Quick Links</h4>
                        <ul>
                            <li>About us</li>
                            <li>Services</li>
                            <li>Student Zone</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>
                </Col>
                <Col md={3} lg={3} className="mb-3">
                    <div className='contact-footer'>
                       <h4>Contact Us</h4>
                       <p><i className="fa-solid fa-phone"></i> +91 87544 53361</p>
                       <p><i className="fa-solid fa-envelope"></i> Venkatesanjayasanker@gmail.com</p>
                       <p><i className="fa-solid fa-location-dot"></i> 131, 4th main road,<br/> Nagappa Nagar, Chromepet,<br/> Chennai - 600044</p>
                    </div>
                </Col>
                <Col md={3} lg={3} className="mb-3">
                    <div className='location-footer'>
                        <h4>Location</h4>
                        <iframe title="Location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.2403604486863!2d80.13199171418987!3d12.956465618717287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525fb0d96f5a05%3A0x5700a3d0287d075a!2s131%2C%204th%20Main%20Rd%2C%20Nagappa%20Nagar%2C%20Chromepet%2C%20Chennai%2C%20Tamil%20Nadu%20600044!5e0!3m2!1sen!2sin!4v1667190305657!5m2!1sen!2sin" style={{width: "100%", height: "300px", border: "0"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </Col>
            </Row>
            <Row>
                <div className='copyright-footer'>
                    <p>© 2022 Axess Technology. All Rights Reserved.</p>
                </div>
            </Row>
        </Container>
    </footer>
  )
}

export default FooterSec
