import logo from './logo.svg';
import './App.css';
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import WorkoutPage from './pages/WorkoutPage';
import { WorkoutProvider } from './context/WorkoutProvider';

function App() {
  return (
    <WorkoutProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/workout/:title" element={<WorkoutPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </WorkoutProvider>
  );
}

export default App;
