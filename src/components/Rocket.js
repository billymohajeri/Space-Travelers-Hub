import React from 'react';
import PropTypes from 'prop-types';

function Rocket({ rocket }) {
  const name = rocket.rocket_name;
  const { description } = rocket;
  const flickrImages = rocket.flickr_images;

  return (
    <div className="rocket-container">
      <div className="rocket-details-container">
        <div className="img-container">
          <img src={flickrImages} alt="rocket-img" width={150} />
        </div>
        <div className="rocket-details">
          <span className="rocket-name">{name}</span>
          <span className="rocket-description">{description}</span>
          <button type="button" className="reserve">
            Reserve Rocket
          </button>
        </div>
      </div>
    </div>
  );
}

export default Rocket;

Rocket.propTypes = {
  rocket: PropTypes.string.isRequired,
};
