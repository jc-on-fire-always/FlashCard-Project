import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import FlashCard from "./FlashCard";
import axios from "axios";
import AddMoreButton from "./AddMoreButton";

const FlashCardList = () => {
  const apiUrl = process.env.REACT_APP_API_URL;
  const [flashcards, setFlashcards] = useState([]);
  const navigate = useNavigate();

  const fetchFlashcards = async () => {
    try {
      const response = await axios.get(`${apiUrl}/flashcards`);
      setFlashcards(response.data);
    } catch (error) {
      console.error("Error fetching flashcards:", error);
    }
  };

  const handleFlip = (id) => {
    setFlashcards(
      flashcards.map((card) =>
        card.id === id ? { ...card, isFlipped: !card.isFlipped } : card
      )
    );
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${apiUrl}/flashcards${id}`);
      setFlashcards(flashcards.filter((card) => card.id !== id));
    } catch (error) {
      console.error("Error deleting flashcard:", error);
    }
  };

  const handleEdit = (id) => {
    navigate(`/edit/${id}`);
  };

  useEffect(() => {
    fetchFlashcards();
  }, []);

  return (
    <div className="flashcard-container">
      {flashcards.map((card) => (
        <FlashCard
          key={card.id}
          flashcard={card}
          onDelete={handleDelete}
          onEdit={handleEdit}
          onFlip={() => handleFlip(card.id)}
        />
      ))}
      <AddMoreButton />
    </div>
  );
};

export default FlashCardList;
