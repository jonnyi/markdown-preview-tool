import React from 'react';

class MarkdownPreview extends React.PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div
        id="markdown-preview"
        dangerouslySetInnerHTML={{ __html: this.props.markDownContent }}
      />
    );
  }
}

export default MarkdownPreview;
