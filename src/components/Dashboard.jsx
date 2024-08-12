import React, { useState, useEffect } from "react";
import axios from "axios";
import FlashcardForm from "./FlashcardForm";

const Dashboard = () => {
  const [flashcards, setFlashcards] = useState([]);

  useEffect(() => {
    axios.get("/api/flashcards").then((res) => setFlashcards(res.data));
  }, []);

  const handleAdd = (flashcard) => {
    setFlashcards([...flashcards, flashcard]);
  };

  const handleUpdate = (updatedFlashcard) => {
    setFlashcards(
      flashcards.map((flashcard) =>
        flashcard.id === updatedFlashcard.id ? updatedFlashcard : flashcard
      )
    );
  };

  const handleDelete = (id) => {
    setFlashcards(flashcards.filter((flashcard) => flashcard.id !== id));
  };

  return (
    <div>
      <h2>Flashcards Dashboard</h2>
      <FlashcardForm onAdd={handleAdd} />
      <ul>
        {flashcards.map((flashcard) => (
          <li key={flashcard.id}>
            {flashcard.question} - {flashcard.answer}
            <button onClick={() => handleDelete(flashcard.id)}>Delete</button>
            <FlashcardForm flashcard={flashcard} onUpdate={handleUpdate} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
