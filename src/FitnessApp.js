
import './FitnessApp.css';
import Navbar from './components/navigation/Navbar';
import { WorkoutsProvider } from './contexts/workouts.context';
import WorkoutForm from './components/forms/WorkoutForm';
import WorkoutList from './components/workouts/WorkoutList';
import Footer from './components/navigation/Footer'

function FitnessApp() {
  return (
    <div>
      <Navbar />
      <WorkoutsProvider>
        <WorkoutForm />
        <WorkoutList />
      </WorkoutsProvider>
      <Footer />
    </div >
  );
}

export default FitnessApp;
