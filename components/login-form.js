import React from 'react';

import Form from 'react-bootstrap/esm/Form';
import Button from '@restart/ui/esm/Button';
import './grid.css';
export default class LoginForm extends React.Component {
    render(){
        return (
     <Form className='Grid'>
            <Form.Text className="text-muted">
                <h3 >Log In</h3>
              </Form.Text>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              
            </Form.Group>
          
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
          
         
       
 
        );
    }
}