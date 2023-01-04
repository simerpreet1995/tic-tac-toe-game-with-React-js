import React from 'react'
import { useState } from 'react'
import Square from './Square'



const Board = () => {
     const [state, setState] = useState(Array(9).fill(null));
    //  console.log("State", state)
     const[isXTurn, setIsXTurn] = useState(true);
    
    const checkWinner = () =>{
        const winnerLogic = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ]
        for(let logic of winnerLogic){
            const [a,b,c] = logic;
            if(state[a] !== null && state[a]=== state[b] && state[a]=== state[c] ){
                return state[a];
            }
        }
        return false;
    }

    const isWinner = checkWinner();

    const handleClicked = (index) =>{
        if(state[index] !== null){
            alert("this block is already clicked!!!")
            return;
        }
        const copyState = [...state]
        copyState[index] = isXTurn ? "X" : "0";
        setState(copyState);
        setIsXTurn(!isXTurn);
    }

    const handleReset = () =>{
        setState(Array(9).fill(null));
    }

  return (
    <div className='board-container'>

      {isWinner ? ( <>{isWinner} won the game <button onClick={handleReset}>Play again</button></> ) : (
      <>
      <h4>Player {isXTurn ? "X" : "0"} Please Move</h4>
      <div className='board-row'>
        <Square onClick={()=> handleClicked(0)} value={state[0]}/>
        <Square onClick={()=> handleClicked(1)} value={state[1]}/>
        <Square onClick={()=> handleClicked(2)} value={state[2]}/>
        </div>
        <div className='board-row'>
        <Square onClick={()=> handleClicked(3)} value={state[3]}/>
        <Square onClick={()=> handleClicked(4)} value={state[4]}/>
        <Square onClick={()=> handleClicked(5)} value={state[5]}/>
        </div>
        <div className='board-row'>
        <Square onClick={()=> handleClicked(6)} value={state[6]}/>
        <Square onClick={()=> handleClicked(7)} value={state[7]}/>
        <Square onClick={()=> handleClicked(8)} value={state[8]}/>
        </div>
        </>)}

    </div>
  )
}

export default Board