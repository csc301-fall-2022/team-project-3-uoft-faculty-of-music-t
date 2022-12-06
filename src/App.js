import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import BookDetailsPage from "./pages/BookDetailsPage";
import ExerciseDetailsPage from "./pages/ExerciseDetailsPage";
import EditExercisePage from "./pages/EditExercisePage";
import LoginPage from "./pages/LoginPage";
import AdminPage from "./pages/AdminPage";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="search" element={<SearchPage />}></Route>
        <Route path="bookDetails" element={<BookDetailsPage />}></Route>
        <Route path="exerciseDetails" element={<ExerciseDetailsPage />}></Route>
        <Route path="editExercise" element={<EditExercisePage />}></Route>
        <Route path="login" element={<LoginPage />}></Route>
        <Route path="admin" element={<AdminPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
