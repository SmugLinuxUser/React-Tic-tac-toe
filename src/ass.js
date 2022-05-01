import { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import './tictac.css';




function Car(props) {
  const [tic, settic] = useState(["", "", "", "", "", "", "", "", ""]);
  const [symbol, setsymbol] = useState('O');
  const [wincondition, setwin] = useState('');
  
 

  useEffect(() => checkWin(), [tic]);



  const updateNum = (num) => {
    
    settic(() => {
      var ass = tic.slice(0);
      ass[num] = symbol;
      return ass;
    });
    if(symbol === 'O'){

setsymbol('X');} else{

setsymbol('O');
}
 const Reset = () => {
 settic(() => {
      var ass = tic.slice(0);
      return {"", "", "", "", "", "", "", "", ""}
});

 };

 const checkWin = () => {
   if(tic.includes("") == false){
    setwin("It's a tie!");
    return;
   }
  const conditions = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

  for(var i = 0; i < conditions.length; i++){

  if(tic[conditions[i][0]] == 'O' && tic[conditions[i][2]] == 'O' && tic[conditions[i][1]] == 'O'){
  setwin('O wins!');
  return;

  }
  if(tic[conditions[i][0]] == 'X' && tic[conditions[i][2]] == 'X' && tic[conditions[i][1]] == 'X'){
    setwin('X wins!');
    return;
  
    }

}
}




  return (
    <>
   <h1>I have hope...</h1>

    <div className="madremia">
    <div className="item" onClick={() => updateNum(0)}>{tic[0]}</div>
    <div className="item" onClick={() => updateNum(1)}>{tic[1]}</div>
    <div className="item" onClick={() => updateNum(2)}>{tic[2]}</div>
    <div className="item" onClick={() => updateNum(3)}>{tic[3]}</div>
    <div className="item" onClick={() => updateNum(4)}>{tic[4]}</div>
    <div className="item" onClick={() => updateNum(5)}>{tic[5]}</div>
    <div className="item" onClick={() => updateNum(6)}>{tic[6]}</div>
    <div className="item" onClick={() => updateNum(7)}>{tic[7]}</div>
    <div className="item" onClick={() => updateNum(8)}>{tic[8]}</div>


</div>
 <button type='button' id='muerte' onClick={Reset}>Reset</button>
  <h3>It's {symbol}'s turn'</h3>
  <p>
{wincondition}
</p>
  
    </>
  )
}
ReactDOM.render(<Car ass="white"/>, document.getElementById('root'));

