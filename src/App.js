import React from 'react';
import './App.css';
import {Navbar,Nav,Button} from 'react-bootstrap';

class App extends React.Component {
  
  render(){
    return (
      <div className="App">
        <>
          <Navbar expand="xl" bg="dark" variant="dark">
            <Navbar.Brand href="#home">r08921a28</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
            <Button variant="outline-info">SignUp</Button>
            <Button variant="outline-info">SignIn</Button>
          </Navbar>
        </>
        
      </div>
    );
  }
}

export default App;
