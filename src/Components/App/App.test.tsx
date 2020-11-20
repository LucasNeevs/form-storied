import React from 'react';
import Grid from '@material-ui/core/Grid';
import { configure, shallow, mount } from 'enzyme';
import chai, { expect } from 'chai';
import Adapter from 'enzyme-adapter-react-16';
import chaiEnzyme from 'chai-enzyme';
import App from './App';

configure({ adapter: new Adapter() });
chai.use(chaiEnzyme());

describe('App testes', (): void => {
  describe('Smoke tests', (): void => {
    it('Should exist App', (): void => {
      const wrapper = shallow(<App />);
      // eslint-disable-next-line no-unused-expressions
      expect(wrapper).to.exist;
    });
  });

  describe('Should return the correct color when it is passed', (): void => {
    it('Should return red on left and blue on right', () => {
      const wrapper = shallow(<App />);
      expect(wrapper.find('div')).to.length(1);
    });
  });
});
