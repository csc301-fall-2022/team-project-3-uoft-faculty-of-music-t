import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';
import BookDetailsPage from './pages/BookDetailsPage';
import ExerciseDetailsPage from './pages/ExerciseDetailsPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="search" element={<SearchPage />}></Route>
        <Route path="bookDetails" element={<BookDetailsPage />}></Route>
        <Route path="exerciseDetails" element={<ExerciseDetailsPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
