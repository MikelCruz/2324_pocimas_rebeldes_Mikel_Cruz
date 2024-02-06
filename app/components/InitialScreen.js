import React from "react";
import axios from "axios";

const getData = async () => {
  try{

    console.log("Entra en getData");
    const url = "https://gist.githubusercontent.com/Oskar-Dam/ad2c96601e79ad108227bc25f90e4e53/raw/25dc0198b2aaa85f0b5583978a0c6772cab63aba/Potions.js"
    const data = await axios.get(url);
    return data.data

  } catch (error) {
    console.error(error)
  }
} 


const InitialScreen = () => {

  const enterTheGame = async () => {

    const data = await getData();
    console.log(data);
  }
  
  return (
    <div>
      <h1 style={{color: "white"}}> LAS POCIMAS REBELDES</h1>
      <button onClick={() => { enterTheGame()} }> ENTER </button>
    </div>
  );
}

export default InitialScreen;

