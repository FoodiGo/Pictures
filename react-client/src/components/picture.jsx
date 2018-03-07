import React from 'react';
import PropTypes from 'prop-types';

const Picture = props => (
  <div>
    {props.pictures.map(picture => (<div key={Math.random()} className="pictureContainer">
      <img className="pictures" alt="" src={picture} style={{ width: '250px', height: '250px' }} />
      <p className="pictureComment">{props.comment[props.pictures.indexOf(picture)]}
        <br /> by: {props.name[props.pictures.indexOf(picture)]}
      </p>
    </div>))}
  </div>
);

Picture.propTypes = {
  pictures: PropTypes.array.isRequired, // eslint-disable-line
  name: PropTypes.array.isRequired, // eslint-disable-line
  comment: PropTypes.array.isRequired, // eslint-disable-line
};

export default Picture;
