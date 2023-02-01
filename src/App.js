import { useEffect } from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import MyProfile from './components/MyProfile';
import Rockets from './components/Rockets';
import Missions from './components/Missions';
import Navigation from './components/Navigation';
import { getMissions } from './redux/missions/missions';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMissions());
  }, [dispatch]);

  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Rockets />} />
          <Route path="/rockets" element={<Rockets />} />
          <Route path="/missions" element={<Missions />} />
          <Route path="/my-profile" element={<MyProfile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
