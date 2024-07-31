import React from 'react';
import './Title.css';

const Title = ({ title, subTitle }) => {
  return (
    <div className="title">
      <h1>{title}</h1>
      {subTitle && <h2>{subTitle}</h2>}
    </div>
  );
};

export default Title;
