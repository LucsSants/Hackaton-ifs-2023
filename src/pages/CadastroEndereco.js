import React, { useState } from "react";
import logo from "../assets/logo.svg"
import Input from "../components/Input/Input";
import './CadasrtoEnderco.css'

import axios from "axios";
import AutoComplete from "../components/autocomplete/Autocomplete";
import { Link, useNavigate} from "react-router-dom";
import { useData } from "../context/dataContext";

export default function CadastroEndereco()  {
  const navigate = useNavigate();

  const { data, setData } = useData();
  

  const [Endereco,setEndereço] = useState("")
  const [lat,setLat] = useState("")
  const [lon,setLon] = useState("")
  const [permissionStatus, setPermissionStatus] = useState("")
  const [dataEnd, setDataEnd] = useState({})
  

  function toEdit() {
    console.log(data)
    navigate("/edit",{state:JSON.stringify(data)})
  }
  


  async function getLocation(){
    navigator.permissions.query({ name: 'geolocation' })
      .then(res => {
        setPermissionStatus(res.state)
        console.log(permissionStatus)
        if (permissionStatus != "denied") {
    
          navigator.geolocation.getCurrentPosition(function(position){
            console.log(position.coords.latitude, position.coords.longitude)
          setLat(position.coords.latitude) 
          setLon(position.coords.longitude)

           axios.post(`https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyCVtSG8K7zcJVlpEaoVe4yGTIg13B_4TrQ&latlng=${position.coords.latitude},${position.coords.longitude}`)
            .then(res => {
             console.log(res.data)
             setDataEnd(res.data)
            
              navigate("/edit",{state:res.data})
            
            })

          });
        } else  { 
          alert("Permita a localizção")
        }
      })

   
  }

    return (
        <div className="container">
            <div className="form-container">
            <img src={logo}/>
            <h3>Cadastro Endereço</h3>
            {/* <Input label={"Endereço"} placeholder="Endereço" value={Endereco} onChange={(e) => {setEndereço(e.target.value)}}/> */}
            <AutoComplete/>


            </div>

            <div className="button-wrap">
            
              <button className="button clear" onClick={getLocation}>Usar Localização Atual</button>
              <button className="button" onClick={toEdit}>Próximo</button>
            </div>
        </div>
    )
}
