import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import BookDetailsPage from "./pages/BookDetailsPage";
import ExerciseDetailsPage from "./pages/ExerciseDetailsPage";
import EditExercisePage from "./pages/EditExercisePage";
import LoginPage from "./pages/LoginPage";
import RequestsPage from "./pages/RequestsPage";
import RequestDetailPage from "./pages/RequestDetailPage";
import { SearchProvider } from "./contexts/SearchContext";

const ProtectedRoute = ({ children }) => {
  let flag = false;

  localStorage.getItem("admin") ? (flag = true) : (flag = false);

  if (!flag) {
    return <Navigate to="/login" replace />;
  }

  // check if the time is expired

  return children;
};

function App() {
  return (
    <BrowserRouter>
      <SearchProvider>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="search" element={<SearchPage />}></Route>
          <Route path="bookDetails" element={<BookDetailsPage />}></Route>
          <Route
            path="exerciseDetails"
            element={<ExerciseDetailsPage />}
          ></Route>
          <Route path="editExercise" element={<EditExercisePage />}></Route>
          <Route path="login" element={<LoginPage />}></Route>
          <Route
            path="requested"
            element={
              <ProtectedRoute>
                <RequestsPage />
              </ProtectedRoute>
            }
          ></Route>
          <Route
            path="requestDetail"
            element={
              <ProtectedRoute>
                <RequestDetailPage />
              </ProtectedRoute>
            }
          ></Route>
        </Routes>
      </SearchProvider>
    </BrowserRouter>
  );
}

export default App;
