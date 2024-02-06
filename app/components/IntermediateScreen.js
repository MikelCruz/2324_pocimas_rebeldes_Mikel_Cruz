import { Rowdies } from "next/font/google";
import React, { useState, useEffect } from "react";
import Image from 'next/image'
import ResultScreen from "./ResultScreen";

// Rutas de imagenes
import curativeImage from '../../assets/curative_potion.png'
import nonCurativeImage from '../../assets/poison_potion.png'
import dice1 from '../../assets/dice_1.png'
import dice2 from '../../assets/dice_2.png'
import dice3 from '../../assets/dice_3.png'
import dice4 from '../../assets/dice_4.png'
import dice5 from '../../assets/dice_5.png'
import dice6 from '../../assets/dice_6.png'

const IntermediateScreen = ({ potionData }) => {

  // Variables locales
  const [selectedCurativePotion, setSelectedCurativePotion] = useState(null);
  const [selectedNonCurativePotion, setSelectedNonCurativePotion] = useState(null);
  const [diceArray, setDiceArray] = useState(null) // Array de Imagenes de dados

  const [selectedCurativeDiceArray, setSelectedCurativeDiceArray ] = useState(null);
  const [selectedNonCurativeDiceArray, setSelectedNonCurativeDiceArray ] = useState(null);

  const [WinnerPotion, setWinnerPotion] = useState([]);
  const [LooserPotion, setLooserPotion] = useState([]);

  const [BattleActive, setBattleActive] = useState(false);

  // UseEffect Inicial
  useEffect(() => { 
    selectedPotions();
    selectDice();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Recarga de datos
  useEffect(() => { 

    // console.log("Pocion Curativa:")
    // console.log(selectedCurativePotion)

    // console.log("Pocion No Curativa:")
    // console.log(selectedNonCurativePotion)

    // console.log(diceArray);

    console.log(BattleActive)

  }, [selectedCurativePotion, selectedNonCurativePotion, 
    diceArray, selectedCurativeDiceArray, selectedNonCurativeDiceArray,
    BattleActive])

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

  const selectDice = async () => {
    const dices = [dice1, dice2, dice3, dice4, dice5, dice6]
    setDiceArray(dices);

    setSelectedCurativeDiceArray(Math.floor(Math.random() * dices.length))
    setSelectedNonCurativeDiceArray(Math.floor(Math.random() * dices.length))
  }

  const handleBattle = () => {

    console.log("Entra en Battle")
    
    // Penalizacines de cada pocion
    const penalizationCP = selectedCurativeDiceArray * 0.1
    const penalizationPP = selectedNonCurativeDiceArray * 0.1

    // Resultados de las Pociones Curativa y Venenosa respectivamente
    const ResultCP = (penalizationCP * selectedCurativePotion.power)/selectedCurativePotion.mana
    const ResultPP = (penalizationPP * selectedNonCurativePotion.power)/selectedNonCurativePotion.mana

    const Winner = [];
    const Looser = [];

    if (ResultCP > ResultPP) {
      Winner.push(selectedCurativePotion)
      Looser.push(selectedNonCurativePotion)

      } else {
        Winner.push(selectedNonCurativePotion) 
        Looser.push(selectedCurativePotion)
      };

      setWinnerPotion(Winner)
      setLooserPotion(Looser);

      setBattleActive(true);
  }

  if(selectedCurativePotion === undefined || selectedNonCurativePotion === undefined ||
    selectedCurativePotion === null|| selectedNonCurativePotion === null || 
    selectedCurativeDiceArray === null || selectedNonCurativeDiceArray === null){
    return null;
  }


  return (
    <div>
      {!BattleActive && (
        <div>
          <h1> Resultados Intermedios</h1>

          <div style={{width:'40%', float:'left'}}>
            <Image src={curativeImage} 
            alt="Curative Potion"
            width={50}
            height={50}/>

            <Image src={diceArray[selectedCurativeDiceArray]} 
            alt="Dice Array"
            width={50}
            height={50}/>


            <div style={{display: 'column'}}>
                <h2> Name: {selectedCurativePotion.name}</h2>
            </div>

            <div style={{display: 'column'}}>
              <h2> Alias: {selectedCurativePotion.alias}</h2>
            </div>

            <div style={{display: 'column'}}>
              <h2> Curative: true</h2>
            </div>

            <div style={{display: 'column'}}>
              <h2> Power: {selectedCurativePotion.power}</h2>
            </div>

            <div style={{display: 'column'}}>
              <h2> Mana: {selectedCurativePotion.mana}</h2>
            </div>
          </div>
            

          <div style={{width:'40%', float:'left'}}>
            <Image src={nonCurativeImage} 
            alt="Non Curative Potion"
            width={50}
            height={50}/>

            <Image src={diceArray[selectedNonCurativeDiceArray]}
            alt="Dice Array"
            width={50}
            height={50}/>

            <div style={{display: 'column'}}>
                <h2> Name: {selectedNonCurativePotion.name}</h2>
            </div>

            <div style={{display: 'column'}}>
              <h2> Alias: {selectedNonCurativePotion.alias} </h2>
            </div>

            <div style={{display: 'column'}}>
              <h2> Curative: false</h2>
            </div>

            <div style={{display: 'column'}}>
              <h2> Power: {selectedNonCurativePotion.power} </h2>
            </div>

            <div style={{display: 'column'}}>
              <h2> Mana: {selectedNonCurativePotion.mana}</h2>
            </div>
          </div>

          <button onClick={handleBattle}> LAUNCH BATTLE</button>

        </div>
      )}
      {BattleActive && (
        <div>
          <ResultScreen />
        </div>
      )}

    </div>
  );
}

export default IntermediateScreen;
