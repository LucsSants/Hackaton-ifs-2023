import React, { useState } from "react";
import logo from "../assets/logo.svg"
import Input from "../components/Input/Input";
import './CadasrtoEnderco.css'

import axios from "axios";
import AutoComplete from "../components/autocomplete/Autocomplete";
import { useLocation, useNavigate } from "react-router-dom";
import { useData } from "../context/dataContext";

export default function EditEndereco()  {
    const location = useLocation();

    const dataEnd = location.state
    const { data, setData } = useData(); 
    const dataBool = dataEnd["plus_code"] != undefined
    

  const [Endereco,setEndereco] = useState(dataBool ? dataEnd.results[1]['address_components'][1]['long_name'] : data["address_components"][1]['long_name'])
//   const [dataEnd,setDataEnd] = useState("")
  const [Bairro,setBairro] = useState(dataBool ? dataEnd.results[1]['address_components'][2]['long_name'] : data["address_components"][2]['long_name'])
  const [Municipio,setMunicipio] = useState(dataBool ? dataEnd.results[1]['address_components'][3]['long_name'] : data["address_components"][3]['long_name'])
  const [Numero,setNumero] = useState(dataBool ? dataEnd.results[1]['address_components'][0]['long_name'] : data["address_components"][0]['long_name'])
  const [Uf,setUf] = useState(dataBool ? dataEnd.results[1]['address_components'][4]['short_name'] : data["address_components"][4]['short_name'])
  const [Complemento,setComplemento] = useState("")
  const [Referencia,setReferencia] = useState("")


  const navigate = useNavigate()


    
    function toProx(){
        // navigate.map()
    }
   
  
    return (
        <div className="container">
            <div className="form-container">
            <img src={logo}/>
            <h3>Cadastro Endereço</h3>
            <Input label="Endereço" placeholder="Endereço"  value={Endereco} onChange={(e)=> setEndereco(e.target.value)}/>
            <Input label="Bairro" placeholder="Bairro" value={Bairro} onChange={(e)=> setBairro(e.target.value)}/>
            <Input label="Municipio" placeholder="Municipio" value={Municipio} onChange={(e)=> setMunicipio(e.target.value)}/>
            <Input label="UF" placeholder="UF" value={Uf} onChange={(e)=> setUf(e.target.value)}/>
            <Input label="Número da casa" placeholder="Número da casa" value={Numero} onChange={(e)=> setNumero(e.target.value)}/>
            <Input label="Complemento" placeholder="Complemento" value={Complemento} onChange={(e)=> setComplemento(e.target.value)}/>
            <Input label="Ponto Referencia" placeholder="Ponto Referencia" value={Referencia} onChange={(e)=> setReferencia(e.target.value)}/>


            </div>

            <div className="button-wrap">
              <button className="button" onClick={toProx}>Cadastrar endereço</button>
            </div>
        </div>
    )


}