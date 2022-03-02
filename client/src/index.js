import React from 'react';
import ReactDOM from 'react-dom';
import FitnessApp from './FitnessApp';
// Bootstrap's CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import { WorkoutsProvider } from './contexts/workouts.context';



ReactDOM.render(
  <React.StrictMode>
    <WorkoutsProvider>
      <FitnessApp />
    </WorkoutsProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

