import React, { Component } from 'react';
import CreditCardApplication from './CreditCardApplication';

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="box" />
        <div className="box" />
        <div className="box">
          <CreditCardApplication loggedInAs={this.props.loggedInAs}/>
        </div>
        <div className="box" />
      </div>
    )
  }
};
