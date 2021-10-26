import React from 'react';
import Nav from 'react-bootstrap/esm/Nav';
import './grid.css'
export default class nav extends React.Component{
    render(){
        return (
            <div >
<Nav variant="tabs" color='black' defaultActiveKey="/home" className='NavBar' >
  <Nav.Item>
    <Nav.Link href="/home">this is a link</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-1">this is another link</Nav.Link>
  </Nav.Item>
</Nav>
</div>
        );
    }
}
