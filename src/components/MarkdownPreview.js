import React from 'react';

class MarkdownPreview extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidUpdate() {
    this.previewDiv.innerHTML = this.props.markDownContent;
  }
  render() {
    return (
      <div
        id="preview"
        ref={(div) => {
          this.previewDiv = div;
        }}
      />
    );
  }
}

//ref={(input) => { this.textInput = input; }} />

export default MarkdownPreview;
