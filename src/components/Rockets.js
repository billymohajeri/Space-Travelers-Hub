import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import Rocket from './Rocket';
import { getRockets } from '../redux/Rockets/rocketSlice';

const Rockets = () => {
  const rocketsList = useSelector((state) => state.rockets);
  const dispatch = useDispatch();
  //   const state = useSelector((state) => state.rockets);

  useEffect(() => {
    if (rocketsList.length === 0) {
      dispatch(getRockets());
    }
  }, [dispatch, rocketsList]);

  return (
    <div className="rockets-container">
      {rocketsList.map((r) => (
        <Rocket key={r.id} rocket={r} />
      ))}
    </div>
  );
};

export default Rockets;
