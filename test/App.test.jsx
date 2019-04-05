import { mount } from 'enzyme';
import React from 'react';

import App from '../src/App';

describe('App.jsx', () => {
    it('renders <App />', () => {
      const wrapper = mount(<App />);
      wrapper.setProps({ test: true })

      expect(wrapper.props().test).toBe(false);
    });
  },
);
