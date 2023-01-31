import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Rocket.css';

function Rocket({ rocket }) {
  const name = rocket.rocket_name;
  const { description } = rocket;
  const flickrImages = rocket.flickr_images[0];

  return (
    <div className="rocket-container">
      <div className="rocket-details-container">
        <div className="img-container">
          <img src={flickrImages} alt="rocket-img" />
        </div>
        <div className="rocket-details">
          <span className="rocket-name">{name}</span>
          <span className="rocket-description">{description}</span>
          <Button variant="primary" type="button" className="reserve">
            Reserve Rocket
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Rocket;

Rocket.propTypes = {
  rocket: PropTypes.string.isRequired,
};
