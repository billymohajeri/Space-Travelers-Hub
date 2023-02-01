import React, { useDispatch, useSelector } from 'react-redux';
import { joinMission, leaveMission } from '../redux/missions/missions';
import classes from './table.module.css';

const Missions = () => {
  const missions = useSelector((state) => state.missions.list);
  const dispatch = useDispatch();
  return (
    <div>
      <table className={classes.table}>
        <thead>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
          {missions.map((mission) => (
            <tr key={mission.mission_id}>
              <td className={classes.mission_name}>{mission.mission_name}</td>
              <td className={classes.mission_description}>
                {mission.description}
              </td>
              <td className={classes.mission_status}>
                <button type="button" className={classes.statusButton}>
                  {mission.reserved ? 'Active Member' : 'Not a member'}
                </button>
              </td>
              <td className={classes.mission_join_leave}>
                {mission.reserved ? (
                  <button
                    onClick={() => dispatch(leaveMission(mission.mission_id))}
                    className={classes.leavemission_Btn}
                    type="button"
                  >
                    Leave Mission
                  </button>
                ) : (
                  <button
                    onClick={() => dispatch(joinMission(mission.mission_id))}
                    className={classes.joinmission_Btn}
                    type="button"
                  >
                    Join Mission
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Missions;
