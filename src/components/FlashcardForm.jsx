// frontend/src/components/FlashcardForm.js
import React, { useState } from "react";
import axios from "axios";

const FlashcardForm = ({ flashcard, onAdd, onUpdate }) => {
  const [question, setQuestion] = useState(flashcard ? flashcard.question : "");
  const [answer, setAnswer] = useState(flashcard ? flashcard.answer : "");

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { question, answer };

    if (flashcard) {
      axios
        .put(`/api/flashcards/${flashcard.id}`, data)
        .then((res) => onUpdate(res.data));
    } else {
      axios.post("/api/flashcards", data).then((res) => onAdd(res.data));
    }

    setQuestion("");
    setAnswer("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Question"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />
      <input
        type="text"
        placeholder="Answer"
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
      />
      <button type="submit">{flashcard ? "Update" : "Add"}</button>
    </form>
  );
};

export default FlashcardForm;
