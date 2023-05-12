/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Appbar from './Appbar';
import MenDropdown from './MenDropdown';
import Profile from './Profile';
import reducer from '../../reducer/index';

describe('Card ', () => {
  const store = createStore(reducer);
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <Provider store={store}>
        <Appbar />
      </Provider>,
    );
  });
  it('should render 15 <div />', () => {
    expect(wrapper.find('div').exists());
  });
  it('Should render MenDropdown without crashing', () => {
    expect(wrapper.containsMatchingElement(<MenDropdown />));
  });
  it('Should check if there are list items', () => {
    expect(wrapper.find('li').exists());
  });
  it('Should check if there is Profile', () => {
    expect(wrapper.containsMatchingElement(<Profile />));
  });
});
