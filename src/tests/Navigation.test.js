import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import Navigation from '../components/Navigation';

it('renders correctly', () => {
  const navigation = renderer
    .create(<Router><Navigation /></Router>)
    .toJSON();
  expect(navigation).toMatchSnapshot();
});
