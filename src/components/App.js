import React from 'react';
import MarkdownForm from './MarkdownForm';
import MarkdownPreview from './MarkdownPreview';
import { markdown } from 'markdown';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { userinput: 'TREE' };

    this.onEntryChange = this.onEntryChange.bind(this);
  }

  onEntryChange = (value) => {
    this.setState({
      userinput: value,
      markDownHTML: markdown.toHTML(value)
    });
  };

  render() {
    const { onEntryChange } = this;
    const { markDownHTML } = this.state;
    return (
      <div>
        <h1>Markdown previewer</h1>
        <MarkdownForm onEntryChange={onEntryChange} />
        <MarkdownPreview markDownContent={markDownHTML} />
      </div>
    );
  }
}
export default App;
