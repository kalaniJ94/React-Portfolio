import React from "react";
import {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
    
function Contact(){
  
  return (
  
    <Form id='contact-form'>
    <Form.Group id='form-group' className="mb-" controlId="formBasicEmail">
      <Form.Label id='form-label'>Your Email address</Form.Label>
      <Form.Control id='form-control' type="email" placeholder="Enter email" />
      <Form.Text className="text-muted">
      </Form.Text>
    </Form.Group>

    <Form.Group id='form-group' className="" controlId="basicName">
      <Form.Label id='form-label'>Your Name</Form.Label>
      <Form.Control id='form-control' type="text" placeholder="Your Name" />
    </Form.Group>
    <Form.Group id='form-group' className="mb-3" controlId="basicMessage">
      <Form.Label id='form-label'>Your Message</Form.Label>
      <Form.Control id='form-control' type="text" placeholder="Your Message here." />
    </Form.Group>
    <Button id='mb-8' disabled type="button">
      Submit
    </Button>
  </Form>
    );
    
  }

export default Contact;