import React from 'React';
import { shallow } from 'enzyme';

import MarkdownPreview from '../../src/components/MarkdownPreview';

describe('<MarkdownPreview /> UI Component', () => {
  it('renders preview: empty', () => {
    const wrapper = shallow(<MarkdownPreview />);
    expect(wrapper.find('div').length).toBe(1);
  });

  it('renders preview: with html prop', () => {
    const markDownHTML = '<h1>test test test</h1>';
    const wrapper = shallow(<MarkdownPreview markDownContent={markDownHTML} />);
    expect(
      wrapper
        .find('div')
        .render()
        .find('h1').length
    ).toBe(1);
  });
});
