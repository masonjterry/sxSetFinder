import React, {Component} from 'react';
import axios from 'axios'
import {Grid} from 'react-bootstrap';
import NavBar from './Components/NavBar/Navbar';
import MainPage from './Components/MainPage/MainPage';
import Demo from './Components/Demo/Demo';
import Footer from './Components/Footer/Footer';
import AboutUs from './Components/AboutUs/AboutUs';

import './Styles/App.css';

class App extends Component {
  constructor(props) {
      super(props)
    this.state = {
      info:{
        name: false,
        song:'Ping',
      }
    }
  }

  componentDidMount() {

    axios.get('/try')
      .then( (response) => {
        this.setState({
          name:response.name,
          song:response.song
        })
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
   }

 render() {
  return (
    <div className="App">
      <NavBar/>
      <Grid>
        <MainPage showGrid={'show-grid'}/>
        <AboutUs aboutUsGrid={'show-grid'}/>
        <Demo demoGrid={'show-grid'}/>
      </Grid>
      <Footer/>

  </div>);
 }
}

export default App;
