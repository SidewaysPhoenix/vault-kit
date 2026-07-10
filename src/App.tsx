import { Route, Routes } from "react-router";
import CharacterSelectionPage from "./pages/CharacterSelectionPage";
import HomePage from "./pages/HomePage";


function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/characters" element={<CharacterSelectionPage />} />
    </Routes>
  )
}

export default App;