import { useState } from "react";
import "./App.css";
import Box from "./component/Box";

const choice = {
  rock: {
    name: "Rock",
    img: "https://nationaltoday.com/wp-content/uploads/2021/08/National-Pet-Rock-Day-640x514.jpg",
  },
  scissors: {
    name: "Scissors",
    img: "http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcTPrc5SXM6rvy7Nc1N9u8oXi9_yL3m2oEqHCfE6t_EUwWJ9zquoE6nJfvKj8B6m3gHQvFPtoOa55-r7gUoqgvo",
  },
  paper: {
    name: "Paper",
    img: "https://m.media-amazon.com/images/I/61OorFhm6SL.jpg",
  },
};

function App() {
  const [userSelect, setUserSelect] = useState(null);
  const [conputerSelect, setComputerSelect] = useState(null);
  const [result, setResult] = useState("");
  const play = (userChoice) => {
    setUserSelect(choice[userChoice]);
    let computerChoice = randomChoice();
    setComputerSelect(computerChoice);
    setResult(judgement(choice[userChoice], computerChoice));
  };

  const randomChoice = () => {
    let itemArray = Object.keys(choice);
    let randomItem = Math.floor(Math.random() * itemArray.length);
    let randomImg = itemArray[randomItem];
    return choice[randomImg];
  };

  const judgement = (user, computer) => {
    console.log(user, computer);
    if (user.name == computer.name) {
      return "tie";
    } else if (user.name == "Rock") return computer.name == "Scissors" ? "Win" : "lose";
    else if (user.name == "Scissors") return computer.name == "Paper" ? "Win" : "lose";
    else if (user.name == "Paper") return computer.name == "Rock" ? "Win" : "lose";
  };

  return (
    <div>
      <div className="align">
        <Box title="You" item={userSelect} result={result} />
        <Box title="Computer" item={conputerSelect} result={result} />
      </div>
      <div className="align">
        <button onClick={() => play("rock")}>Rock</button>
        <button onClick={() => play("scissors")}>Scissors</button>
        <button onClick={() => play("paper")}>Paper</button>
      </div>
    </div>
  );
}

export default App;
