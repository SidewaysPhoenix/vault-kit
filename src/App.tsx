import { Route, Routes } from "react-router";
import CharacterSelectionPage from "./pages/CharacterSelectionPage";
import CharacterSheetPage from "./pages/CharacterSheetPage";
import HomePage from "./pages/HomePage";


function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/characters" element={<CharacterSelectionPage />} />
      <Route path="/characterSheet" element={<CharacterSheetPage />} />
    </Routes>
  )
}

export default App;