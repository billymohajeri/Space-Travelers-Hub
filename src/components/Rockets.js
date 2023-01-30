import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import { getRockets } from '../redux/rockets/rockets';

const Rockets = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.rockets);

  useEffect(() => {
    if (state.length === 0) {
      dispatch(getRockets());
    }
  }, [dispatch, state]);

  return <></>;
};

export default Rockets;
