// App.tsx

import WaterTracker from './components/WaterTracker/WaterTracker';
import './styles/App.css'; // Общие стили или стили для App

export const App: React.FC = () => {
  return (
    <div className="App">
      <WaterTracker />
    </div>
  );
};
