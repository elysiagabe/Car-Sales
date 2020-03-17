import React from 'react';
import { connect } from 'react-redux';
// Components
import AdditionalFeature from './AdditionalFeature';
// Action Creator 
import { addFeature } from '../actions/featureActions';

const AdditionalFeatures = props => {
  console.log('additional features props:', props)
  return (
    <div className="content">
      <h4>Additional Features</h4>
      {props.additionalFeatures.length ? (
        <ol type="1">
          {props.additionalFeatures.map(item => (
            <AdditionalFeature 
              key={item.id} 
              feature={item} 
              addFeature={props.addFeature}
            />
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return { additionalFeatures: state.additionalFeatures }
}

export default connect(mapStateToProps, {addFeature})(AdditionalFeatures);
