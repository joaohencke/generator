import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React, { Component } from 'react';
import GeneratorContainer from '../generators/container/GeneratorContainer'
import 'toastr/build/toastr.min.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <GeneratorContainer></GeneratorContainer>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
