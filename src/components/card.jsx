import React from "react";
function Card(probs) {
  return (
    <div className="term">
      <dt>
        <span className="emoji" role="img" aria-label="Tense Biceps">
          {probs.emoji}
        </span>
        <span>{probs.name}</span>
      </dt>
      <dd>{probs.meaning}</dd>
    </div>
  );
}
export default Card;
