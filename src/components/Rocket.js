import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Rocket.css';
import { useDispatch } from 'react-redux';
import { reserveRocket } from '../redux/Rockets/rocketSlice';

const Rocket = ({ rocket }) => {
  const dispatch = useDispatch();
  const { id } = rocket;
  const name = rocket.rocket_name;
  const { description } = rocket;
  const flickrImages = rocket.flickr_images[0];

  const reserveRocketHandler = () => {
    dispatch(reserveRocket(id));
  };

  return (
    <div className="rocket-container">
      <div className="rocket-details-container">
        <div className="img-container">
          <img src={flickrImages} alt="rocket-img" />
        </div>
        <div className="rocket-details">
          <span className="rocket-name">{name}</span>
          <p className="rocket-description">
            <span
              className={
                rocket.reserved
                  ? 'rocket-reserved-show'
                  : 'rocket-reserved-hide'
              }
            >
              Reserved
            </span>
            {description}
          </p>

          <Button
            variant={rocket.reserved ? 'outline-secondary' : 'primary'}
            type="button"
            className="reserve"
            onClick={reserveRocketHandler}
          >
            {rocket.reserved ? 'Cancel Reservation' : 'Reserve Rocket'}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Rocket;

Rocket.propTypes = {
  rocket: PropTypes.string.isRequired,
};
