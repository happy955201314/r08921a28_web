import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';

class WebNavbar extends React.Component {
    render(){
        return(
          <Navbar expand="xl" bg="dark" variant="dark">
            <Navbar.Brand href="home">r08921a28</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="messageBoard">留言板</Nav.Link>
              <Nav.Link href="userInfo">使用者</Nav.Link>
              <Nav.Link href="home">開發者</Nav.Link>
            </Nav>
            <Button variant="outline-info">SignUp</Button>
            <Button variant="outline-info">SignIn</Button>
          </Navbar>
        );
    }
}

export default WebNavbar;