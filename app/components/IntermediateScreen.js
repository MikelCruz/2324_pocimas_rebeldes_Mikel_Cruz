import React, { useState, useEffect } from "react";

const IntermediateScreen = ({ potionData }) => {

  // Variables locales
  const [selectedCurativePotion, setSelectedCurativePotion] = useState([]);
  const [selectedNonCurativePotion, setSelectedNonCurativePotion] = useState([]);

  // UseEffect Inicial
  useEffect(() => { 
    selectedPotions();
    selectDice();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Recarga de datos
  useEffect(() => { 

    console.log("Pocion Curativa:")
    console.log(selectedCurativePotion)

    console.log("Pocion No Curativa:")
    console.log(selectedNonCurativePotion)

  }, [selectedCurativePotion, selectedNonCurativePotion])

  // ==========================
  //        REFACTORIZAR
  // ==========================

  // elegir dos pociones aleatorias del array
  const selectedPotions = () => {
    
    // Array de pociones Curativas
    let curativePotionsArray = potionData.map(function(element){
      if(element.curative === true){
        return element
      }

    });

    // Array de pociones no curativas
    let nonCurativePotionsArray = potionData.map(function(element){
      if(element.curative === false){
        return element
      }
    });

    // Limpio el array de undefiends
    curativePotionsArray = curativePotionsArray.filter(function(dato){
      return dato != undefined
    });
    
    // Limpio el array de undefiends
    nonCurativePotionsArray = nonCurativePotionsArray.filter(function(dato){
      return dato != undefined
    });

    const randomCurativeNumber = Math.floor(Math.random() * curativePotionsArray.length + 1);
    const randomNonCurativeNumber = Math.floor(Math.random() * nonCurativePotionsArray.length + 1);
    
    setSelectedCurativePotion(curativePotionsArray[randomCurativeNumber])
    setSelectedNonCurativePotion(curativePotionsArray[randomNonCurativeNumber])

  }

  const selectDice = () => {
    
  }

  return (
    <div>
      <h1> ESTOY DENTRO</h1>

      {/* {potionData.map((Potions) => (
        <>
        </>
      ) */}
    </div>
  );
}

export default IntermediateScreen;
