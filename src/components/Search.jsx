import { useState } from "react"
import { AsyncPaginate } from "react-select-async-paginate"
import { url,options } from "../api";

function Search({onSearchChange}) {

  const [search, setSearch] = useState('');

  function handleChange(searchdata){
    setSearch(searchdata);
    onSearchChange(searchdata);
  }

  async function loadOptions(input){
    return fetch(`${url}?minPopulation=1000000&namePrefix=${input}`,options)
    .then(res => res.json())
    .then(res => {
      return {
        options:res.data.map((city)=> {
          return {
            value:`${city.latitude} ${city.longitude}`,
            label: `${city.name} ${city.countryCode}`
          }
        })
      }
    })
    .catch(err => console.error(err))
  }

  return (
    <AsyncPaginate
    placeholder="Search for City"
    debounceTimeout={1500}
    value={search}
    onChange={handleChange}
    loadOptions={loadOptions}
     />
  )
}

export default Search