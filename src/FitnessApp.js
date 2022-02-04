import './FitnessApp.css';
import useToggle from './hooks/useToggleState'
import Navbar from './components/navigation/Navbar';
import WorkoutFormModal from './components/forms/WorkoutFormModal';
import WorkoutList from './components/workouts/WorkoutList';
import Footer from './components/navigation/Footer'
import Button from "react-bootstrap/Button"

function FitnessApp() {
  const [showWorkoutForm, toggleShowWorkoutForm] = useToggle(false)

  return (
    <div>
      <Navbar />
      <Button
        variant="success"
        onClick={toggleShowWorkoutForm}>
        Add Workout
      </Button>
      <WorkoutList />
      <WorkoutFormModal
        show={showWorkoutForm}
        handleClose={() => toggleShowWorkoutForm(false)}
      />
      <Footer />
    </div >
  );
}

export default FitnessApp;
