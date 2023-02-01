import { useSelector } from 'react-redux';
import '../styles/MyProfile.css';

const MyProfile = () => {
  const rocketsList = useSelector((state) => state.rockets);
  const myReserveRockets = rocketsList.filter((rockets) => rockets.reserved);
  return (
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
  );
};
export default MyProfile;
