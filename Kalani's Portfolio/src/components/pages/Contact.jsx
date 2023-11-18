import React from "react";
import {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
    
function Contact(){
  
  return (
    <Form>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
      <Form.Text className="text-muted">
      </Form.Text>
    </Form.Group>

    <Form.Group className="mb-3" controlId="basicName">
      <Form.Label>Your Name</Form.Label>
      <Form.Control type="text" placeholder="Your Name" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="basicMessage">
      <Form.Label>Your Message</Form.Label>
      <Form.Control type="text" placeholder="Your Message here." />
    </Form.Group>
    <Button variant="primary" type="submit">
      Submit
    </Button>
  </Form>
    );
    
  }

export default Contact;