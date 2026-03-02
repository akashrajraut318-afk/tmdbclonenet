import '../styles/App.css';
import Navbar from '../features/ui/components/Navbar';
import MovieContextWrapper from '../context/MovieContextWrapper';
import AppRoutes from './routes';

function App() {
  return (
    <>
      <Navbar />
      <MovieContextWrapper>
        <AppRoutes />
      </MovieContextWrapper>
    </>
  );
}

export default App
