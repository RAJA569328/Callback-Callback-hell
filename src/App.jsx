import React, { createContext, useState } from 'react'
import Profile from './Component/Profile'

const context = createContext()

function App() {
  const [ProfileName,SetProfileName] = useState("")
  return (
    <><h6>{ProfileName}</h6>
     
    <context.Provider value={{ProfileName,SetProfileName}}>
      <Profile />
    </context.Provider>
    </>
  )
}

export {App as default, context}