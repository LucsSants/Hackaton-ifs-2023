import React, { useState } from "react";
import logo from "../assets/logo.svg"
import Input from "../components/Input/Input";
import './CadasrtoEnderco.css'


import MapComponent from "../components/MapComponent/MapComponent";

export default function Map()  {

  
    return (
        <div className="map-container">
            <MapComponent locations={[{lat: -10.919104, lng:-37.665911, stop_over:true}, {lat: -10.903838, lng: -37.670747, stop_over:true},{lat:-10.911188, lng: -37.681054, stop_over:true}, {lat: -10.9027445, lng: -37.6727171, stop_over:true}]}/>
        </div>
    )


}