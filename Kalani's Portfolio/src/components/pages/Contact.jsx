import React from "react";
import {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import emailjs from 'emailjs-com';
    
function Contact(){

  function sendEmail(e){
    e.preventDefault();

    emailjs.sendForm('service_1b9fk3a', 'template_suxypih', e.target, 'YJbUIOg8yJJRAPjxi')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };

  
  
  return (
  
    <Form onSubmit={sendEmail} id='contact-form'>
    <Form.Group id='form-group' className="mb-" controlId="formBasicEmail">
      <Form.Label id='form-label'>Your Email address</Form.Label>
      <Form.Control id='form-control' name="email" type="email" placeholder="Enter email" />
      <Form.Text className="text-muted">
      </Form.Text>
    </Form.Group>

    <Form.Group id='form-group' className="" controlId="basicName">
      <Form.Label id='form-label'>Your Name</Form.Label>
      <Form.Control id='form-control' name="name" type="text" placeholder="Your Name" />
    </Form.Group>
    <Form.Group id='form-group' className="mb-3" controlId="basicMessage">
      <Form.Label id='form-label'>Your Message</Form.Label>
      <Form.Control id='form-control' name="subject" type="text" placeholder="Message Subject" />
    </Form.Group>

    <Form.Group id='form-group' className="mb-3" controlId="basicMessage">
      <Form.Label id='form-label'>Your Message</Form.Label>
      <Form.Control id='form-control' name="message" type="text" placeholder="Your Message here." />
    </Form.Group>
    <Button id='mb-8'  type="submit">
      Submit
    </Button>
  </Form>
    );
    
  }

export default Contact;