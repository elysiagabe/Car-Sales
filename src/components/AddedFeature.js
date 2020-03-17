import React from 'react';

const AddedFeature = props => {
  console.log('added props:', props)
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button 
        onClick={() => alert('Remove Feature')}
        className="button"
      >
        X
      </button>
      {props.feature.name}
    </li>
  );
};

export default AddedFeature;
