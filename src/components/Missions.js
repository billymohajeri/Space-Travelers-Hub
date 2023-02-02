import React, { useDispatch, useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import { joinMission, leaveMission } from '../redux/missions/missions';
import '../styles/Missions.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Missions = () => {
  const missions = useSelector((state) => state.missions.list);
  const dispatch = useDispatch();
  return (
    <div>
      <table className="missions-table">
        <thead>
          <tr>
            <th className="missions-table-th">Mission</th>
            <th className="missions-table-th">Description</th>
            <th className="missions-table-th">Status</th>
            <th className="missions-table-th"> </th>
          </tr>
        </thead>
        <tbody className="missions-tbody">
          {missions.map((mission) => (
            <tr key={mission.mission_id}>
              <td className="mission-name">{mission.mission_name}</td>
              <td className="mission-description">{mission.description}</td>
              <td className="mission-status">
                {mission.reserved ? (
                  <Button variant="primary" className="active-member-btn">
                    Active Member
                  </Button>
                ) : (
                  <Button variant="secondary">NOT A MEMBER</Button>
                )}
              </td>
              <td className="mission-join-leave">
                {mission.reserved ? (
                  <Button
                    variant="outline-danger"
                    onClick={() => dispatch(leaveMission(mission.mission_id))}
                  >
                    Leave Mission
                  </Button>
                ) : (
                  <Button
                    variant="outline-dark"
                    onClick={() => dispatch(joinMission(mission.mission_id))}
                  >
                    Join Mission
                  </Button>
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
