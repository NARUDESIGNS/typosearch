import React from 'react';
import './Suggestion.css';

function Suggestion({ correctionSugs }) {
  return (
    <>
    {
      correctionSugs.length > 1 &&
      <div className="suggestion">
          <h4 className="suggestion__header">Did you mean?</h4>
          {
            correctionSugs.map(item => {
              return <p className="suggestion__sug">{item.word}</p>
            })
          }
      </div>
    }
    </>
  )
}

export default Suggestion;