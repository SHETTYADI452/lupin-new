import React, { useState } from 'react';
import './Tests.css';

const Tests = ({ tests }) => {
  const [expanded, setExpanded] = useState({});

  const toggleExpand = (id) => {
    setExpanded((prevState) => ({ ...prevState, [id]: !prevState[id] }));
  };

  return (
    <div className="tests">
      {tests.map((test) => (
        <div key={test.id} className="test-card">
          <div className="test-header">
            <h3>{test.TestName}</h3>
            <p>{test.Amount}</p>
          </div>
          <div className={`test-description ${expanded[test.id] ? 'expanded' : ''}`}>
            <p>{test.Description}</p>
            <button onClick={() => toggleExpand(test.id)}>
              {expanded[test.id] ? 'Read Less' : 'Read More'}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Tests;
