import useToggle from './hooks/useToggleState'
import './FitnessApp.css';
import Navbar from './components/navigation/Navbar';
import { WorkoutsProvider } from './contexts/workouts.context';
import WorkoutForm from './components/forms/WorkoutForm';
import WorkoutList from './components/workouts/WorkoutList';
import ExerciseForm from './components/forms/ExerciseForm'
import Footer from './components/navigation/Footer'


function FitnessApp() {
  const [showWorkoutForm, toggleShowWorkoutForm] = useToggle(false)
  const [showExerciseForm, toggleShowExerciseForm] = useToggle(false)


  return (
    <div>
      <Navbar />
      <WorkoutsProvider>
        <WorkoutForm
          show={showWorkoutForm}
          handleClose={() => toggleShowWorkoutForm(false)}
        />
        <ExerciseForm
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
