import React from "react";
import axios from "axios";

const getData = async () => {
  try{
    console.log("Entra en getData");
    const url = "https://gist.github.com/Oskar-Dam/ad2c96601e79ad108227bc25f90e4e53"
    const data = await axios.get(url);
    return data

  } catch (error) {
    console.error(error)
  }
} 


const InitialScreen = () => {

  const enterTheGame = () => {
    console.log("entra en el boton");
    const data = getData();
    console.log("Datos:")
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

