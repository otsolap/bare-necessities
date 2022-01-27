
import './FitnessApp.css';
import { theme } from './theme/index.js'
import Navbar from './components/Navbar';
import Footer from './components/Footer'
import { ThemeProvider } from '@mui/material/styles'


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <p>Hello</p>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
