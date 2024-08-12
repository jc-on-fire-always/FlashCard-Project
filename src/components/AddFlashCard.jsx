import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "./FlashCard.css"; // Ensure you import your CSS

function AddFlashCard() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams(); // Get the ID from the URL params if editing
  const apiUrl = process.env.REACT_APP_API_URL;

  useEffect(() => {
    if (id) {
      // Fetch the flashcard details if editing
      axios
        .get(`${apiUrl}/flashcards/${id}`)
        .then((response) => {
          setQuestion(response.data.question);
          setAnswer(response.data.answer);
          setIsEditing(true);
        })
        .catch((error) => {
          console.error("Error fetching flashcard details:", error);
          navigate("/"); // Redirect to home if there's an error
        });
    }
  }, [id, navigate]);

  const handleSubmit = () => {
    const endpoint = isEditing
      ? `${apiUrl}flashcards/${id}`
      : `${apiUrl}/flashcards`;
    const method = isEditing ? "put" : "post";

    axios({ method, url: endpoint, data: { question, answer } })
      .then(() => navigate("/"))
      .catch((error) => console.error("Error saving flashcard:", error));
  };

  return (
    <div className="form-container">
      <h2 className="form-title">
        {isEditing ? "Edit Flashcard" : "Add Flashcard"}
      </h2>
      <input
        className="form-input"
        type="text"
        placeholder="Question"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />
      <input
        className="form-input"
        type="text"
        placeholder="Answer"
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
      />
      <button className="form-button" onClick={handleSubmit}>
        {isEditing ? "Update" : "Add"}
      </button>
    </div>
  );
}

export default AddFlashCard;
