
import './FitnessApp.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer'

function FitnessApp() {
  const initialWorkouts = [
    {
      workout: {
        id: 1,
        day: "Monday",
        type: "Legs",
        exercises: [{ id: 11, move: "Squat", repsOne: "numbahs", completed: false }],
        WorkoutCompleted: false
      }
    }
  ]

  return (
    <div>
      <Navbar />
      <p>Hello</p>
      <Footer />
    </div>
  );
}

export default FitnessApp;
