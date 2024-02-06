import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import IntermediateScreen from './IntermediateScreen'
import Alert from '@mui/material/Alert';

const InitialScreen = () => {

  // Variables locales 
  const [recivedData, setRecivedData] = useState([]); 
  const [isInTheGame, setIsInTheGame] = useState(false); 
  const [errorInData, setErrorInData] = useState (false);

  // Use Effect para recargar datos
  useEffect(() => { 

    // console.log("Esta en el juego? " + isInTheGame);
    // console.log("Pociones Redicibdas: ");
    // console.log(recivedData);
    
    // console.log("Error in data? " + errorInData)

  }, [isInTheGame, recivedData, errorInData])

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
      setErrorInData(true)
    }
  } 

  const enterTheGame = async () => { setRecivedData( await getData()); }
  
  return (
    <div 
    style={centered}>
      {!isInTheGame && (
      <div>  
        <h1 style={{color: "white"}}> LAS POCIMAS REBELDES</h1>
        <button style={button} onClick={() => { enterTheGame()} }> ENTER </button>
        {errorInData &&  (
          <Alert severity="error">This is an error Alert.</Alert>
        )}
      </div>
      )}
      
      {isInTheGame && (
        <div>
          <IntermediateScreen potionData={recivedData}/>
        </div>
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

const centered = {
  justifyContent: "center", 
  alignItems: "center", 
  display: "flex", 
  width: "100%",
  height: "100%",
}

export default InitialScreen;

