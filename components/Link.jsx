// Copyright 2004-present Facebook. All Rights Reserved.
import React from 'react';
import Icon from './Icon';

export default class Link extends React.Component {
 constructor() {
   super();

   this.state = { class: 'normal' };
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
       onMouseEnter={this.onMouseEnter}
       onMouseLeave={this.onMouseLeave}
     >
       {this.props.children}
     </a>
   );
 }
}

export const linkWithIcon = ({icon, children}) => (
  <span><Icon icon={icon} /><Link>{children}</Link></span>
);
