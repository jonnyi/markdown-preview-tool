import React from 'react';

const MarkdownForm = ({ onEntryChange }) => {
  const onChange = (e) => {
    onEntryChange(e.target.value);
  };
  return (
    <form>
      <textarea width="100%" id="markdown-input" onKeyUp={onChange} />
    </form>
  );
};

export default MarkdownForm;
