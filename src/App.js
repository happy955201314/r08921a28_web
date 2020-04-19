import React from 'react';
import WebNavbar from './Navbar';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import messageBoard from './messageBoard';
import UserInfo from './userInfo';
import myInfo from './myInfo';
import { Modal, Button, Form, Row, Col } from 'react-bootstrap';
import './App.css';


class App extends React.Component {
  
  constructor(props){
    super(props)
    this.state = {
      signInShow : false,
      signUpShow : false,
      signUpEmail : '',
      signUpPassword : '',
      signUpPassword2 : '',
      signUpValidate : false,
      signUpError : ''
    }

    this.signUpModal = React.createRef();
    this.signInModal = React.createRef();

    this.handleSignInShow = this.handleSignInShow.bind(this);
    this.handleSignInClose = this.handleSignInClose.bind(this);
    this.handleSignUpShow = this.handleSignUpShow.bind(this);
    this.handleSignUpClose = this.handleSignUpClose.bind(this);
    this.handleSignUpEmailChange = this.handleSignUpEmailChange.bind(this);
    this.handleSignUpPasswordChange = this.handleSignUpPasswordChange.bind(this);
    this.handleSignUpPassword2Change = this.handleSignUpPassword2Change.bind(this);
    this.handleSignUpSubmit = this.handleSignUpSubmit.bind(this);
  }

  handleSignInShow(){
    this.setState({
      signInShow : true
    })
  }

  handleSignInClose(){
    this.setState({
      signInShow : false
    })
  }

  handleSignUpShow(){
    this.setState({
      signUpShow : true
    })
  }

  handleSignUpClose(){
    this.setState({
      signUpShow : false,
      signUpEmail : '',
      signUpPassword : '',
      signUpPassword2 : ''
    })
  }

  handleSignUpEmailChange(e){
    this.setState({
      signUpEmail : e.target.value
    })
  }

  handleSignUpPasswordChange(e){
    this.setState({
      signUpPassword : e.target.value
    })
  }

  handleSignUpPassword2Change(e){
    this.setState({
      signUpPassword2 : e.target.value
    })
  }

  handleSignUpSubmit(e){
    if( this.state.signUpPassword == '' || this.state.signUpPassword2 == '' || this.state.signUpEmail == ''){
      this.setState({
        signUpError : ' All imput blank are required '
      })
      e.preventDefault();
    } else if( this.state.signUpPassword != this.state.signUpPassword2){
      this.setState({
        signUpError : ' Two password are different '
      })
      e.preventDefault();
    } else {

    }

    
  }

  render(){
    console.log('email = ' + this.state.signUpEmail)
    console.log('pass1 = ' + this.state.signUpPassword)
    console.log('pass2 = ' + this.state.signUpPassword2)
    return (
      <div className="App">
        <WebNavbar 
          handleSignInShow = {this.handleSignInShow}
          handleSignUpShow = {this.handleSignUpShow}
        />
        <Modal show={this.state.signInShow} onHide={this.handleSignInClose} animation={false}>
            <Modal.Header closeButton>
              <Modal.Title>SignIn</Modal.Title>
            </Modal.Header>
            <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" >
                Close
            </Button>
            <Button variant="primary" >
                SignIn
            </Button>
            </Modal.Footer>
        </Modal>

        <Modal show={this.state.signUpShow} onHide={this.handleSignUpClose} animation={false}>
            <Modal.Header closeButton>
              <Modal.Title>Sign Up</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <Form noValidate onSubmit={this.handleSignUpSubmit}>
                <Form.Group as={Row} controlId="signUpEmail" >
                  <Form.Label column sm={2}>
                    Username
                  </Form.Label>
                  <Col sm={10}>
                    <Form.Control 
                      required
                      type="username" 
                      placeholder="username" 
                      onChange={this.handleSignUpEmailChange}
                    />
                  </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="signUpPassword" >
                  <Form.Label column sm={2}>
                    Password
                  </Form.Label>
                  <Col sm={10}>
                    <Form.Control
                      required 
                      type="password" 
                      placeholder="password" 
                      onChange={this.handleSignUpPasswordChange}
                    />
                  </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="signUpCheckPassword" >
                  <Form.Label column sm={2}>
                    Check
                  </Form.Label>
                  <Col sm={10}>
                    <Form.Control 
                      required
                      type="password" 
                      placeholder="enter password again" 
                      onChange={this.handleSignUpPassword2Change}
                    />
                  </Col>
                </Form.Group>
                <p style={{color:'red'}}>{this.state.signUpError}</p>
                <Button variant="secondary" >
                    Close
                </Button>
                <Button variant="primary" type="submit">
                    SignUp
                </Button>
              </Form>
            </Modal.Body>
        </Modal>

        <BrowserRouter>
          <Switch>
            <Route path='/' exact component={myInfo} />
            <Route path='/messageBoard' component={messageBoard} />
            <Route path='/userInfo' component={UserInfo} />
            <Route path='/myInfo' component={myInfo} />
          </Switch>
        </BrowserRouter>

      </div>
    );
  }
}

export default App;
