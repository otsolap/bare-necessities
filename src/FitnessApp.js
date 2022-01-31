
import './FitnessApp.css';
import Navbar from './components/Navbar';
import { WorkoutsProvider } from './contexts/workouts.context';
import WorkoutForm from './components/WorkoutForm';
import WorkoutList from './components/WorkoutList';
import Footer from './components/Footer'

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
