import React from 'react';
import MarkdownForm from './MarkdownForm';
import MarkdownPreview from './MarkdownPreview';
import { markdown } from 'markdown';

import 'bootstrap';
import '../styles/styles.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { userinput: '' };
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
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <MarkdownForm onEntryChange={onEntryChange} />
          </div>
          <div className="col">
            <MarkdownPreview markDownContent={markDownHTML} />
          </div>
        </div>
      </div>
    );
  }
}
export default App;
