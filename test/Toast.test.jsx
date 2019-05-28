import { mount } from 'enzyme';
import React from 'react';

import Toast from '../src/components/Toast/Toast';

describe('Toast.jsx', () => {
    it('renders <Toast />', () => {
      const wrapper = mount(<Toast />);
      wrapper.setProps({ test: true })

      expect(wrapper.props().test).toBe(true);
    });
  },
);
