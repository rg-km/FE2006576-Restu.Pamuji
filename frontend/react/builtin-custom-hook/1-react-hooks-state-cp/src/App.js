import "./App.css";
import React from "react";

function App() {
  //beginanswer
  return <RandomEmoji />;
  //endanswer
}

function RandomEmoji() {
  //beginanswer
  const [emoji, setEmoji] = React.useState("");
  //endanswer
  return (
    <div className="wrapper">
      <h1 className="emoji" data-testid="emoji">
        {emoji}
      </h1>
      <button onClick={() => setEmoji(randomEmoji())} className="button">
        Acak emoji
      </button>
    </div>
  );
}

export function randomEmoji() {
  const emojis = [
    "😀",
    "😁",
    "😂",
    "🤣",
    "😃",
    "😄",
    "😅",
    "😆",
    "😉",
    "😊",
    "😋",
    "😎",
    "😍",
    "😘",
    "😗",
    "😙",
    "😚",
    "🙂",
    "🤗",
    "🤩",
    "🤔",
    "🤨",
    "😐",
    "😑",
    "😶",
    "🙄",
    "😏",
    "😣",
    "😥",
    "😮",
    "🤐",
    "😯",
    "😪",
    "😫",
    "😴",
    "😌",
    "😛",
    "😜",
    "😝",
    "🤤",
    "😒",
    "😓",
    "😔",
    "😕",
    "🙃",
    "🤑",
    "😲",
    "☹",
    "🙁",
    "😖",
    "😞",
    "😟",
    "😤",
    "😢",
    "😭",
    "😦",
    "😧",
    "😨",
    "😩",
    "🤯",
    "😬",
    "😰",
    "😱",
    "😳",
    "🤪",
    "😵",
    "😡",
    "😠",
    "🤬",
    "😷",
    "🤒",
    "🤕",
    "🤢",
    "🤮",
    "🤧",
    "😇",
    "🤠",
    "🤡",
    "🥳",
    "🥴",
    "🥺",
    "🤥",
    "🤫",
    "🤭",
    "🧐",
    "🤓",
    "😈",
    "👿",
    "👹",
    "👺",
    "💀",
    "👻",
    "👽",
    "🤖",
    "💩",
    "😺",
    "😸",
    "😹",
    "😻",
    "😼",
    "😽",
    "🙀",
    "😿",
    "😾",
  ];
  //beginanswer
  const randomIndex = Math.floor(Math.random() * emojis.length);
  return emojis[randomIndex];
  //endanswer
}

export default App;