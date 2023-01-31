import React, { useSelector } from 'react-redux';
import classes from './table.module.css';

const Missions = () => {
  const missions = useSelector((state) => state.missions.list);
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
                {mission.reserved ? 'Active Member' : 'Not a member'}
              </td>
              <td className={classes.mission_join_leave}>
                {mission.reserved ? 'Leave Mission' : 'Join Mission'}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Missions;
