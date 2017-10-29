import React from 'react';
import { mount } from 'enzyme';
import App from '../../src/components/App';

describe('<App /> UI Component', () => {
  const wrapper = mount(<App />);

  it('renders App', () => {
    expect(wrapper.find('#app-container').length).toBe(1);
  });

  it('renders child component: MarkdownForm', () => {
    expect(wrapper.find('#markdown-input').length).toBe(1);
  });

  it('renders child component: MarkdownPreview', () => {
    expect(wrapper.find('#markdown-preview').length).toBe(1);
  });

  it('onEntryChange updates state with input & markdown', () => {
    wrapper.instance().onEntryChange('#test\n##test\n###test');

    expect(wrapper.state().userinput).toBe('#test\n##test\n###test');
    expect(wrapper.state().markDownHTML).toBe(
      '<h1>test</h1>\n\n<h2>test</h2>\n\n<h3>test</h3>'
    );
  });
});
