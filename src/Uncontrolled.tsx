import React, { useRef } from 'react'

function uncontrolled() {
    const inputRef = useRef<HTMLInputElement>(null)
    function handleSearch(){
        const searchTerm = inputRef.current?.value
        console.log("searching for", searchTerm)
    }
  return (
    <>
    <div>uncontrolled</div>
    <input  type="text" ref={inputRef} defaultValue="jide" />
    <button onClick={handleSearch}> Search</button>
    
    </>
  )
}

export default uncontrolled