import React from 'react';

export default class Icon extends React.Component {
  render() {
    return(
      <i className={`icon ${this.props.icon}`}></i>
    )
  }
}
