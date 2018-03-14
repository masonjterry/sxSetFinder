import React, {Component} from 'react';
import NavBar from '../NavBar/Navbar';
import {Form,ControlLabel,Checkbox,Col,FormControl,FormGroup,Button} from 'react-bootstrap';
import axios from 'axios';
import Spotify from 'spotify-web-api-js';

class SignIn extends Component {


 handleChange = () => {
  //  let s = new Spotify();
  //  s.getAccessToken('https://accounts.spotify.com/authorize/?client_id=dbe2a20785304190b8e35d5d6644397b&client_secret=d73cf4a1525c44e899feeeff4b840040&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A5555%2Fredirect&scope=user-top-read&state=34fFs29kd09')
       //  'content-type':"application/json;charset=utf-8')
   axios.get(
     { method:'get',
       url:'https://accounts.spotify.com/authorize/?client_id=dbe2a20785304190b8e35d5d6644397b&client_secret=d73cf4a1525c44e899feeeff4b840040&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A5555%2Fredirect&scope=user-top-read&state=34fFs29kd09',
      //  'content-type':"application/json;charset=utf-8"
      //  ,responseType:'stream',
      //  headers: {'Access-Control-Allow-Origin':'*' ,
      //           "Access-Control-Allow-Headers":'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token'}
   })
  .then( (response) => {
    console.log(response);
  })
  .catch(function (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      console.log(error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log('Error', error.message);
    }
    console.log(error.config);
  });
 }

 render() {
  return (
    <div>
    <NavBar/>
    <Form horizontal>
    <FormGroup controlId="formHorizontalEmail">
      <Col componentClass={ControlLabel} sm={2}>
        Email
      </Col>
      <Col sm={10}>
        <FormControl type="email" placeholder="Email" />
      </Col>
    </FormGroup>

    <FormGroup controlId="formHorizontalPassword">
      <Col componentClass={ControlLabel} sm={2}>
        Password
      </Col>
      <Col sm={10}>
        <FormControl type="password" placeholder="Password" />
      </Col>
    </FormGroup>

    <FormGroup>
      <Col smOffset={2} sm={10}>
        <Checkbox>Remember me</Checkbox>
      </Col>
    </FormGroup>

    <FormGroup>
      <Col smOffset={2} sm={10}>
      </Col>
    </FormGroup>
  </Form>
  <Button onClick={this.handleChange()}>Sign in</Button>

</div>
  )
 }
}

export default SignIn;
