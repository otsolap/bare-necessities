import React from 'react';
import ReactDOM from 'react-dom';
import FitnessApp from './FitnessApp';
import { WorkoutsProvider } from './contexts/workouts.context';



ReactDOM.render(
  <React.StrictMode>
    <WorkoutsProvider>
      <FitnessApp />
    </WorkoutsProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

