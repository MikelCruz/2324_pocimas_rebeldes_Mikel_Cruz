import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import IntermediateScreen from './IntermediateScreen'



const InitialScreen = () => {

  // Variables locales 
  const [recivedData, setRecivedData] = useState([]); 
  const [isInTheGame, setIsInTheGame] = useState(false); 

  // Use Effect para recargar datos
  useEffect(() => { 
    console.log("Esta en el juego? " + isInTheGame);

    console.log("Pociones Redicibdas: ");
    console.log(recivedData);

  }, [isInTheGame, recivedData])

  const getData = async () => {
    try{
  
      console.log("Entra en getData");
      const url = "https://gist.githubusercontent.com/Oskar-Dam/ad2c96601e79ad108227bc25f90e4e53/raw/25dc0198b2aaa85f0b5583978a0c6772cab63aba/Potions.js"
      const data = await axios.get(url);
      setIsInTheGame(true)
      return data.data
  
    } catch (error) {
      console.error(error)
      setIsInTheGame(false)
    }
  } 

  const enterTheGame = async () => {

    setRecivedData( await getData());
  }
  
  return (
    <div>
      {!isInTheGame && (
      <div>  
        <h1 style={{color: "white"}}> LAS POCIMAS REBELDES</h1>
        <button onClick={() => { enterTheGame()} }> ENTER </button>
      </div>
      )}
      
      {isInTheGame && (
        <div>
          <IntermediateScreen />
        </div>
      )}
    </div>
  );
}

export default InitialScreen;

