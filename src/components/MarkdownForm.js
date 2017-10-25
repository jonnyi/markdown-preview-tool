import React from 'react';
import Proptypes from 'prop-types';

const MarkdownForm = ({ onEntryChange }) => {
  const onChange = (e) => {
    e.preventDefault();
    onEntryChange(e.target.value);
  };
  return (
    <form>
      <textarea width="100%" id="markdown-input" onKeyUp={onChange} />
    </form>
  );
};
MarkdownForm.Proptypes = {
  onEntryChange: Proptypes.func.isRequired
};

export default MarkdownForm;
