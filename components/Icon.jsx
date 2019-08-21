import React from 'react';

export default class Icon extends React.Component {
  render() {
    return(
      <i class={`icon ${this.props.icon}`}></i>
    )
  }
}
