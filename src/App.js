import React, { Component } from "react";
import GoogleLogin, { GoogleLogout } from 'react-google-login';
import { userContext } from './userContext';
import './App.css';
import Main from './components/Main'
import Container from "react-bootstrap/Container";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      loggedIn: false
    };
  }

  onPost = (id) => {
    // console.log(id)
    if (id === -1) {
      console.log("Couldn't SignUp!")
    }
    else if (id === -2) {
      console.log("Sign-In Successful!")
    }
    else {
      console.log("Sign-Up Successful!")
    }
  }

  responseGoogle = (response) => {
    // console.log(response)
    // console.log(response.profileObj)
    this.setState({
      user: response.profileObj,
      loggedIn: true
    })

    const url = 'https://coda-poll-app.herokuapp.com/users/add?googleId=' + response.profileObj.googleId + '&first_name=' + response.profileObj.givenName + '&last_name=' + response.profileObj.familyName + '&email=' + response.profileObj.email;
    fetch(url)
      .then(response => response.json())
      .then(data => this.onPost(data))
      .catch(err => console.log(err))
  }

  logout = () => {
    console.log('logged out')
    this.setState({
      user: {},
      loggedIn: false
    })
  }

  render() {
    return (
      <Container fluid>
        {this.state.loggedIn && this.state.user ? (
          <>
            {/* <DocumentMeta {...meta} /> */}
            <GoogleLogout
              clientId="495279056453-jngj6jms7ph9a8nbh65qipr9f0aj27e3.apps.googleusercontent.com"
              buttonText="Logout"
              onLogoutSuccess={this.logout}
            >
            </GoogleLogout>
            <userContext.Provider value={this.state.user}>
              <Main />
            </userContext.Provider>
          </>
        ) : (
            <GoogleLogin
              clientId="495279056453-jngj6jms7ph9a8nbh65qipr9f0aj27e3.apps.googleusercontent.com"
              buttonText="Login"
              onSuccess={this.responseGoogle}
              onFailure={this.responseGoogle}
              cookiePolicy="single_host_origin"
              isSignedIn={true}
              className='m-5'
            />
          )}
      </Container>
    )
  }
}

export default App