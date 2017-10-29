import React from 'react';
import { shallow, mount } from 'enzyme';
import MarkdownForm from '../../src/components/MarkdownForm';

describe('<MarkdownForm /> UI Component', () => {
  const wrapper = shallow(<MarkdownForm />);
  it('renders form', () => {
    expect(wrapper.find('form').length).toBe(1);
  });

  it('invokes onKeyUp handler', () => {
    const _onchange = jest.fn();
    const wrapper = mount(<MarkdownForm onEntryChange={_onchange} />);

    wrapper.find('#markdown-input').simulate('keyUp');
    expect(_onchange).toBeCalled();
  });
});
