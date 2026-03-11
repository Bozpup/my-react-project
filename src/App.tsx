import { useState } from 'react'

import './App.css'
import Colorpicker from './Colorpicker'
import ProfileCard from './ProfileCard'
import QuickNoteForm from './QuickNoteForm'
import Todo from './Todo'
import Uncontrolled from './Uncontrolled'

function App() {

  return (
    <>
     <Colorpicker/>
     <ProfileCard/>
     <Uncontrolled/>
     <Todo/>
    </>
  )
}

export default App
