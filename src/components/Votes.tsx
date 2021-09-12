import { spawn } from "child_process";
import { useState } from "react";
import "./Votes.css";

function Votes() {
// Variables for the vote counts
const [totalVotes, increaseTotalVotes] = useState(0);
const [chocolateVotes, setChocolateCount] = useState(0);
const [vanillaVotes, setVanillaCount] = useState(0);
const [strawberryVotes, setStrawberryCount] = useState(0);
// Variables for the style of the bar divs
let chocolateBarWidth = (chocolateVotes/totalVotes * 100).toFixed(1)
let chocolateBarStyles = {
  width: chocolateBarWidth + "%",
  height: 20 + "px",
  backgroundColor: "#562B0C" 
}
let vanillaBarWidth = (vanillaVotes/totalVotes * 100).toFixed(1)
let vanillaBarStyles = {
  width: vanillaBarWidth + "%",
  height: 20 + "px",
  backgroundColor: "#F3E5AB" 
}
let strawberryBarWidth = (strawberryVotes/totalVotes * 100).toFixed(1)
let strawberryBarStyles = {
  width: strawberryBarWidth + "%",
  height: 20 + "px",
  backgroundColor: "#fc5a8d" 
}

// Functions for the vote countes
function VoteforChocolate() {
  setChocolateCount(prevCount => prevCount + 1);
  increaseTotalVotes(prevCount => prevCount + 1);
  
};
function VoteforVanilla() {
  setVanillaCount(prevCount => prevCount + 1);
  increaseTotalVotes(prevCount => prevCount + 1);
};
function VoteforStrawberry() {
  setStrawberryCount(prevCount => prevCount + 1);
  increaseTotalVotes(prevCount => prevCount + 1);
};
  return (
    <div>
    <h1 className="VoteHere">Vote Here</h1>
    <p>
      <button onClick={VoteforChocolate}>Chocolate</button>
      <button onClick={VoteforVanilla}>Vanilla</button>
      <button onClick={VoteforStrawberry}>Strawberry</button>
    </p>
    <div>
      {totalVotes === 0 && <span>No votes yet.</span> }
    </div>
    <div className="Chocolate">
      {chocolateVotes === 0 ?
        <div></div> :
        <div>
          <p>Chocolate: {chocolateVotes} ({(chocolateVotes/totalVotes * 100).toFixed(1)}%)</p> 
          <div className="ChocolateDiv" style={chocolateBarStyles}></div>
        </div>
      } 
    </div>
    <div className="Vanilla">
      {vanillaVotes === 0 ?
        <div></div> :
        <div>
          <p>Vanilla: {vanillaVotes} ({(vanillaVotes/totalVotes * 100).toFixed(1)}%)</p> 
          <div className="VanillaDiv" style={vanillaBarStyles}></div>
        </div>
      } 
    </div>
    <div className="Strawberry">
      {strawberryVotes === 0 ?
        <div></div> :
        <div>
          <p>Strawberry: {strawberryVotes} ({(strawberryVotes/totalVotes * 100).toFixed(1)}%)</p> 
          <div className="StrawberryDiv" style={strawberryBarStyles}></div>
        </div>
      } 
    </div>

    
  </div>
  )
}

export default Votes;