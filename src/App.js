import React, { useState } from "react";
import "./styles.css";

export default function App() {
  var [inputEmoji, setEmoji] = useState("");
  var [meaning, setMeaning] = useState("<Translation here>");

  var emojiDictionary = {
    "😀": "Happy",
    "😔": "Sad",
    "🤔": "Thinking",
    "🍩": "Doughnut",
    "❤️": "Love"
  };

  var emojisAvailable = Object.keys(emojiDictionary);
  /** emoji = emojiList.map((emoji) => (
    <li key={emoji} className="item-inline">
      {emoji}
    </li>
  ));
  */

  function inputChangeHandler(event) {
    inputEmoji = event.target.value;
    setEmoji(inputEmoji);
    if (inputEmoji in emojiDictionary) {
      meaning = emojiDictionary[inputEmoji];
    } else {
      meaning = "Meaning not found :(";
    }
    setMeaning(meaning);
  }

  function listItemClickedHandler(item) {
    // console.log("Clicked: " + item + " - " + emojiDictionary[item]);
    meaning = emojiDictionary[item];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Emoji Interpreter</h1>
      <input
        placeholder="Enter emoji to be translated here"
        onChange={inputChangeHandler}
      />
      <div className="meaning">{meaning}</div>
      <section className="emoji-dictionary">
        <div className="header">Available Emojis</div>
        {emojisAvailable.map((emoji) => (
          <span
            className="emoji-list"
            onClick={() => listItemClickedHandler(emoji)}
            key={emoji}
          >
            {emoji}
          </span>
        ))}
      </section>
    </div>
  );
}
