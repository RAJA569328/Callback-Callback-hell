//Context API
import React, { createContext, useState } from 'react'
import FirstChild from './Component/FirstChild'

let MessageContext = createContext()

function App() {
  let [ Message , SetMessage] = useState("Hello, Grand Child!")
  let [Coins, SetCoins] = useState([1,2,3,4,5])
  return <>
  <h1>Parent Component</h1>
  <hr/>
  <MessageContext.Provider value={{Message,Coins}}>
  <FirstChild />
  </MessageContext.Provider>
  </>
}

export { App as default , MessageContext }