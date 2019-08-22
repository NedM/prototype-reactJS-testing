// Copyright 2004-present Facebook. All Rights Reserved.
import React from 'react';
import Icon from './Icon';

export default class Link extends React.Component {
 constructor() {
   super();

   this.state = {
     class: 'normal',
     clicks: 0,
   };

   this.onClick = this.onClick.bind(this);
   this.onMouseEnter = this.onMouseEnter.bind(this);
   this.onMouseLeave = this.onMouseLeave.bind(this);
 }

 onClick() {
   this.setState((prev) => ({clicks: prev.clicks + 1}));
 }

 onMouseEnter() {
   this.setState({ class: 'hovered' });
 }

 onMouseLeave() {
   this.setState({ class: 'normal' });
 }

 render() {
   return (
     <a
       className={`link-class ${this.state.class}`}
       href={this.props.page || '#'}
       onClick={this.onClick}
       onMouseEnter={this.onMouseEnter}
       onMouseLeave={this.onMouseLeave}
     >
       {this.props.children}
     </a>
   );
 }
}

export const LinkWithIcon = ({icon, children}) => (
  <span><Icon icon={icon} /><Link>{children}</Link></span>
);
