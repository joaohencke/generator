import React, { Component } from 'react';

import Generator from '../components/Generator';

import generators from '../services/generatorService';

class GeneratorContainer extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      generators
    };

    this.handle = this.handle.bind(this);
  }
  handle() {

  }
  render() {
    return (
      <div className="row">
        {this.state.generators.map(e => <div className="col" key={e.title}><Generator generator={e} options={e.options && e.options()}></Generator></div>)}
      </div>
    );

  }
}

export default GeneratorContainer;