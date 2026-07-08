import { useState } from "react";
import CharacterSelectionPage from "./pages/CharacterSelectionPage";
import HomePage from "./pages/HomePage";

type Page = "home" | "characterSelection";

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  if (currentPage === "characterSelection") {
    return (<CharacterSelectionPage />
    );
  }

  return (
    <HomePage onOpenCharacterSelection={() => setCurrentPage("characterSelection")} />
  )
}

export default App;