import { useSelector } from 'react-redux';
import '../styles/MyProfile.css';

const MyProfile = () => {
  const rocketsList = useSelector((state) => state.rockets);
  const myReserveRockets = rocketsList.filter((rockets) => rockets.reserved);
  const missionsList = useSelector((state) => state.missions.list);
  const reservedMissions = missionsList.filter((mission) => mission.reserved);

  return (
    <div className="profile">
      <table className="missions-table">
        <thead>
          <th className="my-profile-thead">My Missions</th>
        </thead>
        <tbody>
          {reservedMissions.map((mission) => (
            <tr key={mission.id}>
              <td>{mission.mission_name}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <table className="profile-table">
        <thead>
          <th className="my-profile-thead">My Rockets</th>
        </thead>
        <tbody>
          {myReserveRockets.map((rocket) => (
            <tr key={rocket.id}>
              <td>{rocket.rocket_name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyProfile;
