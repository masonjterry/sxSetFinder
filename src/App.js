import React, { Component } from 'react';
import { Button,ButtonToolbar } from 'react-bootstrap';

import './Styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

        <h2 className='heading'>sxSetFinder!</h2>
        <ButtonToolbar>

  <Button>Default</Button>

  <Button bsStyle="primary">Primary</Button>

</ButtonToolbar>
      </div>
    );
  }
}

export default App;
