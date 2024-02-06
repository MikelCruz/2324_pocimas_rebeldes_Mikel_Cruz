"use client";

import React, { useState, useEffect } from "react";
import InitialScreen from "./components/InitialScreen.js";
import wallpaper from '../assets/wallpaper_v1.jpeg'

const styling = {
  justifyContent: "center", 
  alignItems: "center", 
  display: "flex", 
  width: '100%', 
  height: '40vw',  
  backgroundImage: `url(${wallpaper.src})`
}

export default function Home() {
  return (
    <div style={styling}>
      <div style={{width: '100%', height: '100%'}}>
        <InitialScreen />
      </div>
    </div>
  );
}

