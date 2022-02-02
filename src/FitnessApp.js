import useToggle from './hooks/useToggleState'
import './FitnessApp.css';
import Navbar from './components/navigation/Navbar';
import { WorkoutsProvider } from './contexts/workouts.context';
import WorkoutFormModal from './components/forms/WorkoutFormModal';
import WorkoutList from './components/workouts/WorkoutList';
import ExerciseFormModal from './components/forms/ExerciseFormModal'
import Footer from './components/navigation/Footer'
import Button from "react-bootstrap/Button"


function FitnessApp() {
  const [showWorkoutForm, toggleShowWorkoutForm] = useToggle(false)
  const [showExerciseForm, toggleShowExerciseForm] = useToggle(false)


  return (
    <div>
      <Navbar />
      <WorkoutsProvider>
        <Button onClick={toggleShowWorkoutForm}>
          Add Workout
        </Button>
        <Button onClick={toggleShowExerciseForm}>
          Add Exercise
        </Button>
        <WorkoutFormModal
          show={showWorkoutForm}
          handleClose={() => toggleShowWorkoutForm(false)}
        />
        <ExerciseFormModal
          show={showExerciseForm}
          handleClose={() => toggleShowExerciseForm(false)}
        />
        <WorkoutList />
      </WorkoutsProvider>
      <Footer />
    </div >
  );
}

export default FitnessApp;
