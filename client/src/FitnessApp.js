import './styles/FitnessApp.scss';
import useToggle from './hooks/useToggleState'
import Navbar from './components/navigation/Navbar';
import WorkoutFormModal from './components/forms/WorkoutFormModal';
import WorkoutList from './components/workouts/WorkoutList';
import Footer from './components/navigation/Footer'


function FitnessApp() {
  const [showWorkoutForm, toggleShowWorkoutForm] = useToggle(false)

  return (
    <>
      <Navbar />
      <button
        className="btn m-4"
        onClick={toggleShowWorkoutForm}>
        Add Workout
      </button>
      <WorkoutList />
      <WorkoutFormModal
        show={showWorkoutForm}
        handleClose={() => toggleShowWorkoutForm(false)}
      />
      <Footer />
    </>
  );
}

export default FitnessApp;
