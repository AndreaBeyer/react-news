import { useLocation } from 'react-router-dom';

import Home from './Home';

export default function RouterToHome() {
  const location = useLocation();
  const mainState = location.state ? location.state.mainState : [];
  return <Home mainState={mainState} />;
}
