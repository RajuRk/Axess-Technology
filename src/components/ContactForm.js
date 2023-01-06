import React, {useState} from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import axios from 'axios';
import {useForm} from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup';
import "yup-phone";
import ContactImg from '../img/contact-img.png'
import './ContactForm.css'

const schema = yup.object().shape({
    name: yup.string()
          .required("Name is required")
          .min(3, "Minimum 3 characters required")
          .max(15, "Maximum 15 characters allowed"),
    email: yup.string()
          .email("Please enter a valid email address")
          .required("Email number is required"),
    phone: yup.string()
          .required("Phone number is required")
          .phone("Please enter a valid phone number"),
    message: yup.string()
            .max(240, "Maximum 240 characters allowed")
});

const ContactForm = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const {register, handleSubmit, formState: {errors}} = useForm({
    resolver: yupResolver(schema),
    mode: "onChange"
  })

  const getData = async() => {
    const data = {
        Name: name,
        Email: email,
        Phone: phone,
        Message: message
    };

    try{
        await axios.post('https://sheet.best/api/sheets/207ec1fd-cbfa-4a81-a44d-f9f16522fc4a', data)
        .then((response)=> {
          console.log(response);
          setName('');
          setEmail('');
          setPhone('');
          setMessage();
        })
    }catch(err){
        console.log(err.message);
    }
  }

  return (
    <section id='contactFrom' className='contactFrom'>
       <Container>
        <Row>
            <Col md={6} lg={6} className="mb-4">
                <div className='contact-desc'>
                <p className='subTitle'>Contact Us</p>
                <h2>Get in touch</h2>
                <p className='subDesc'>We’d love to hear from you. Please fill out this form.</p>
                </div>
                <div className='contact-form-field'>
                <Form onSubmit={handleSubmit(getData)}>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Name</Form.Label>
                        <Form.Control 
                           type="text" 
                           placeholder="Your Name" 
                           {...register('name')}
                           value={name}
                           onChange={e => setName(e.target.value)}
                        />
                        <p className='errMsg'>{errors.name?.message}</p>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Email</Form.Label>
                        <Form.Control 
                          type="text" 
                          placeholder="Your Email" 
                          {...register('email')}
                          value={email}
                          onChange={e => setEmail(e.target.value)}
                        />
                        <p className='errMsg'>{errors.email?.message}</p>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control 
                          type="text" 
                          placeholder="Your Phone Number" 
                          {...register('phone')}
                          value={phone}
                          onChange={e => setPhone(e.target.value)}
                        />
                        <p className='errMsg'>{errors.phone?.message}</p>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Message</Form.Label>
                        <Form.Control 
                          as="textarea" 
                          rows={3} 
                          placeholder="Your Message" 
                          {...register('message')}
                          value={message}
                          onChange={e => setMessage(e.target.value)} 
                        />
                        <p className='errMsg'>{errors.message?.message}</p>
                    </Form.Group>
                    <Button type="submit">Submit</Button> 
                </Form>
                </div>
            </Col>
            <Col md={6} lg={6} className="contact-flex">
                <div className='contact-img'>
                   <img src={ContactImg} alt=""/>
                </div>
            </Col>
        </Row>
       </Container>
    </section>
  )
}

export default ContactForm