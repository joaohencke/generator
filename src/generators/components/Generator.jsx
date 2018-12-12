import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from '../../components/Card';
import toastr from 'toastr';

class Generator extends Component {
  static propTypes = {
    generator: PropTypes.object,
  }
  constructor(props, context) {
    super(props, context);

    this.handleChange = this.handleChange.bind(this);
    this.generate = this.generate.bind(this);
    this.validate = this.validate.bind(this);

    this.state = {
      value: '',
      options: this.props.options && this.props.options[0],
    };

  }
  generate() {
    const state = this.state;
    state.value = this.props.generator.generate(this.state.options);
    this.setState(state);
  }
  copy(str) {
    const el = document.createElement('textarea');
    el.value = str;
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    document.body.appendChild(el);
    const selected =
      document.getSelection().rangeCount > 0
        ? document.getSelection().getRangeAt(0)
        : false;
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    if (selected) {
      document.getSelection().removeAllRanges();
      document.getSelection().addRange(selected);
    }
  }
  validate() {
    toastr.error('Não implementado');
  }
  handleChange(event) {
    const state = this.state;

    state[event.target.name] = event.target.value;
    console.log(event.target.value)
    this.setState(state);
  }
  render() {
    return (
      <form className="form">

        <Card className="text-center">
          <Card.Header>
            <h5 className="card-title">
              {this.props.generator.title}
            </h5></Card.Header>
          <Card.Body>
            <div className="form-group">
              <div className="input-group">
                <input type="text" className="form-control" placeholder="Gerar/Validar" value={this.state.value} name="value" onChange={this.handleChange} />
                <div className="input-group-append">
                  <button className="btn-sm btn-info" type="button" disabled={!this.state.value} onClick={() => this.copy(this.state.value)}>
                    <i className="fa fa-copy"></i>
                  </button>
                </div>
              </div>
            </div>
            {this.props.options && <div className="form-group">
              <select name="options" id="options" className="form-control" onChange={this.handleChange}>
                {this.props.options.map(val => <option key={val} value={val}>{val}</option>)}
              </select>
            </div>}
            {this.props.generator.mask && <div className="form-check">
              <label className="form-check-label">
                <input type="checkbox" className="form-check-input" onChange={() => this.setState({ ...this.state, options: !this.state.options })} id="options" name="options" />
                Máscara</label>
            </div>}
          </Card.Body>
          <Card.Footer>
            {this.props.generator.generate && <button type="button" className="btn btn-md btn-primary" onClick={this.generate}>Gerar</button>}
            {this.props.generator.validate && <button type="button" className="btn btn-md btn-secondary" onClick={this.validate}>Validar</button>}
          </Card.Footer>
        </Card>
      </form >
    )
  }
}

export default Generator;