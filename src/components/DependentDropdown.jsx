import React, { useState } from 'react'

export const DependentDropdown = () => {

  const data = {
    INDIA: ["Ahmedabad", "Mumbai", "Delhi"],
    USA: ["New York", "LA", "Chicago"]
  }

  const [country, setCountry] = useState("")
  const [states, setStates] = useState([])

  const countryHandler = (event) => {
    const selectedCountry = event.target.value
    setCountry(selectedCountry)
    setStates(data[selectedCountry])
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Dependent Dropdown</h1>

      <select onChange={countryHandler}>
        <option value="">Select Country</option>
        <option value="INDIA">INDIA</option>
        <option value="USA">USA</option>
      </select>

      <br /><br />

      <select>
        <option value="">Select City</option>
        {
          states.map((s, index) => (
            <option key={index}>{s}</option>
          ))
        }
      </select>
    </div>
  )
}
