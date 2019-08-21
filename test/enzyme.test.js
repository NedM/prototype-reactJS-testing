import React from 'react';
import { shallow } from 'enzyme';
import Link, { linkWithIcon } from '../components/Link'

describe('<Link />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Link />);
    debugger;
  });
});

describe('<linkWithIcon />', () => {
  it('renders correctly when shallow rendered', () => {
    const wrapper = shallow(<linkWithIcon icon={'myIcon'}>'Hello there!'</linkWithIcon>);
    debugger;
  });
})
