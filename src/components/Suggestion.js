import React from 'react';
import './Suggestion.css';

function Suggestion() {
  return (
    <div className="suggestion">
        <h4 className="suggestion__header">Did you mean?</h4>
        <p className="suggestion__sug">examplary</p>
        <p className="suggestion__sug">example</p>
        <p className="suggestion__sug">exemplify</p>
    </div>
  )
}

export default Suggestion;