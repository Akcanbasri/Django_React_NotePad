import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import NotesListPage from "./pages/NoteListPage";
import NotePage from './pages/NotePage'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<NotesListPage />} /> {/* exact is no longer needed */}
          <Route path="/note/:id" element={<NotePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;