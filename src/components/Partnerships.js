import React from 'react';
import './Partnerships.css';

const Partnerships = ({ partnerships }) => {
  return (
    <div className="partnerships">
      {partnerships.map((partnership) => (
        <div key={partnership.id} className="partnership-card">
          <img src={partnership.Logo.data.attributes.url} alt="Logo" />
          <h3>{partnership.Scheme}</h3>
          <p>{partnership.Description}</p>
        </div>
      ))}
    </div>
  );
};

export default Partnerships;
