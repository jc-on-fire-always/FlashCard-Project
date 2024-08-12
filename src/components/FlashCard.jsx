import React from "react";
import "./FlashCard.css";

const FlashCard = ({ flashcard, onDelete, onEdit, onFlip }) => {
  return (
    <div
      className={`flashcard ${flashcard.isFlipped ? "is-flipped" : ""}`}
      onClick={onFlip}
    >
      <div className="flashcard-inner">
        <div className="flashcard-front">
          <div className="flashcard-header">
            <button
              className="edit-button"
              onClick={(e) => {
                e.stopPropagation();
                onEdit(flashcard.id);
              }}
            >
              &#9998; {/* Pencil Symbol */}
            </button>
            <button
              className="delete-button"
              onClick={(e) => {
                e.stopPropagation();
                onDelete(flashcard.id);
              }}
            >
              &#10006; {/* X Symbol */}
            </button>
          </div>
          <div className="flashcard-content">
            <p>{flashcard.question}</p>
          </div>
        </div>
        <div className="flashcard-back">
          <div className="flashcard-content">
            <p>{flashcard.answer}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlashCard;
