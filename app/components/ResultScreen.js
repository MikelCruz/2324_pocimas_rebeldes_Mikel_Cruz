import React, { useState, useEffect } from "react";
import Image from 'next/image'
import InitialScreen from "../components/InitialScreen";


const ResultScreen = (WinnerAndLooserData ) => {

  const [winnerData, setWinnerData] = useState(WinnerAndLooserData.winnerData[0])
  const [looserData, setLooserData] = useState(WinnerAndLooserData.looserData[0])
  const [diceArray, setDiceArray] = useState(WinnerAndLooserData.diceArrayImage) // Array de Imagenes de dados

  // Ahora mismo es local pero esta sera global y ayudara a que la logica del juego sea mas amena y sencilla
  const [restartGame, setRestartGame ] = useState(false)

  // UseEffect Inicial
  useEffect(() => { 
    console.log("Winner:");
    console.log(winnerData[0])

    // console.log("Looser:");
    // console.log(looserData[0])
  }, [winnerData, looserData])

  const handleRestart = () => {
    setRestartGame(true)
  }

  return (
    <div>
      {!restartGame && (
        <div>
          <h1> RESULT SCREEN</h1>
            <div style={{width:'40%', float:'left'}}>
                <h1> WINNER POTION</h1>
                <Image src={winnerData[0].Image} 
                  alt="Non Curative Potion"
                  width={50}
                  height={50}/>
                <div>
                <h1> Dice Result:</h1>
                <Image src={diceArray[winnerData[0].DiceResult]} 
                  alt="Non Curative Potion"
                  width={50}
                  height={50}/>
                </div>

                <h1>Penalization: {winnerData[0].DiceResult + 1} x 0.1 = {(winnerData[0].DiceResult * 0.1).toFixed(1)}</h1>
                <h1>Total Score:</h1>
                <h1>{(winnerData[0].DiceResult * 0.1).toFixed(1)} x {winnerData[0].Potion.power} / {winnerData[0].Potion.mana} = {winnerData[0].TotalScore} </h1>
              </div>

              <div style={{width:'40%', float:'left'}}>
                <h1> LOOSER POTION</h1>
                <Image src={looserData[0].Image} 
                  alt="Non Curative Potion"
                  width={50}
                  height={50}/>
              
                <div>
                  <h1> Dice Result:</h1>
                  <Image src={diceArray[looserData[0].DiceResult]} 
                    alt="Non Curative Potion"
                    width={50}
                    height={50}/>
                </div>
                <h1>Penalization: {looserData[0].DiceResult + 1} x 0.1 = {(looserData[0].DiceResult * 0.1).toFixed(1)}</h1>
                <h1>Total Score:</h1>
                <h1>{(looserData[0].DiceResult * 0.1).toFixed(1)} x {looserData[0].Potion.power} / {looserData[0].Potion.mana} = {looserData[0].TotalScore} </h1>
              </div>
          <button style={button} onClick={handleRestart}> ReLaunch Battle</button>
        </div>

        )}

         {restartGame && (
           <InitialScreen />
         )}
    </div>

  );
}

const button = {
  justifyContent: "center", 
  alignItems: "center", 
  display: "flex", 
  width: '125px', 
  height: '65px',  
  borderRadius: 40,
  marginTop: '15%',
  marginLeft: 150,
  backgroundColor: 'rgba(58, 168, 255,1)',
}

export default ResultScreen
