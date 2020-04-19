import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';

class WebNavbar extends React.Component {
    render(){
        return(
          <Navbar style={styles.NavbarStyle} variant="dark" fixed="top">
            <Navbar.Brand href="/">r08921a28</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="/messageBoard">留言板</Nav.Link>
              <Nav.Link href="/userInfo">使用者</Nav.Link>
              <Nav.Link href="/myInfo">開發者</Nav.Link>
            </Nav>
            <Button variant="outline-info" onClick={this.props.handleSignUpShow}>SignUp</Button>
            <Button variant="outline-info" onClick={this.props.handleSignInShow} >SignIn</Button>
          </Navbar>
        );
    }
}

const styles = {
    NavbarStyle : { 
      backgroundColor : '#282c34'
    }
}
export default WebNavbar;