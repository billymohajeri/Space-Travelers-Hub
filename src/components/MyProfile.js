import { useSelector } from 'react-redux';
import '../styles/MyProfile.css';

const MyProfile = () => {
  const rocketsList = useSelector((state) => state.rockets);
  const myReserveRockets = rocketsList.filter((rockets) => rockets.reserved);

  const missionsList = useSelector((state) => state.missions.list);
  const reservedMissions = missionsList.filter((mission) => mission.reserved);
  return (
    <div className="my-profile-container">
      <table className="my-profile-missions-table">
        <thead>
          <th className="my-profile-thead">My Missions</th>
        </thead>
        <tbody>
          {reservedMissions.map((mission) => (
            <tr key={mission.id}>
              <td className="my-profile-td">{mission.mission_name}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <table className="my-profile-rocket-table">
        <thead>
          <th className="my-profile-thead">My Rockets</th>
        </thead>
        <tbody>
          {myReserveRockets.map((rocket) => (
            <tr key={rocket.id}>
              <td className="my-profile-rocket-td">{rocket.rocket_name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyProfile;
