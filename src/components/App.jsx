import React from "react";
import Card from "./card";
import emojipedia from "../emojipedia";
function creatCard(emojiterm) {
  return (
    <Card
      key={emojiterm.id}
      name={emojiterm.name}
      emoji={emojiterm.emoji}
      meaning={emojiterm.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">{emojipedia.map(creatCard)}</dl>
    </div>
  );
}

export default App;
