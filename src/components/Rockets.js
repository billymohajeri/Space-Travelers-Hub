import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
// import Rocket from './Rocket';
import { getRockets } from '../redux/rockets/rockets';

const Rockets = () => {
//   const rocketsList = useSelector((state) => state.rockets);
  const dispatch = useDispatch();
  //   console.log(rocketsList);
  const state = useSelector((state) => state.rockets);

  useEffect(() => {
    if (state.length === 0) {
      dispatch(getRockets());
    }
  }, [dispatch, state]);

  return (
    <></>
    // <div className="rockets-container">
    //   {rocketsList.map((r) => r.map((r) => <Rocket key={r.id} rocket={r} />))}
    // </div>
  );
};

export default Rockets;
