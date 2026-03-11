import React, { ChangeEvent, useState } from 'react'

function Colorpicker() {
    const [text, setText] = useState<string>("#fffff");
    const [dropdownOptions, setDropdownOptions] =useState('#00000')
    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) =>{
        setText(e.target.value);
    }

    const handleDropdownChange = (e: ChangeEvent<HTMLSelectElement>) =>{
        setDropdownOptions(e.target.value);
        setText(e.target.value)
    }
  return (
    <div style={{ height: '200px', width: "300px", backgroundColor: text}}>
        <input value={text} onChange={handleInputChange}/>
        <select value={dropdownOptions} onChange={handleDropdownChange}>
            <option value={"red"}> Red</option>
            <option value={"blue"}> Blue</option>
        </select>
    </div>
  )
}

export default Colorpicker