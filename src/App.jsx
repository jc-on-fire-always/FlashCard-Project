import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddFlashCard from "./components/AddFlashCard";
import FlashCardList from "./components/FlashCardList";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FlashCardList />} />
        <Route path="/edit/:id" element={<AddFlashCard />} />
        <Route path="/add" element={<AddFlashCard />} />
      </Routes>
    </Router>
  );
}

export default App;
