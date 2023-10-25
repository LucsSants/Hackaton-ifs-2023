import { useRef, useEffect } from "react";
import { useData } from "../../context/dataContext";
const AutoComplete = () => {    
    const { data, setData } = useData();

    const autoCompleteRef = useRef();
    const inputRef = useRef();
    const options = {
        componentRestrictions: { country: "br" },
        fields: ["address_components", "geometry", "icon", "name"],
  
 };
 useEffect(() => {
  autoCompleteRef.current = new window.google.maps.places.Autocomplete(
   inputRef.current,
   options
  );
  autoCompleteRef.current.addListener("place_changed", async function () {
    const place = await autoCompleteRef.current.getPlace();
    
    console.log({ place });
    setData(place)

   });
 }, []);
 return (
  <div>
   <label>Endereço:</label>
   <input ref={inputRef} />
  </div>
 );
};
export default AutoComplete;