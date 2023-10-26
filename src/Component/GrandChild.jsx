import React, { useContext } from 'react'
import { MessageContext } from '../App'

function GrandChild() {

    // let {Message, Coins} = useContext(MessageContext)

    let TotalCoins = (Coins) =>{
       return Coins.reduce((X,Y)=>X+Y)
    }
 
  return (
  <MessageContext.Consumer>
  {(X)=>(
    <>
    <h2>Grand Child Component</h2>
    <p>Message from Child Component: {X.Message}</p>
    <p>Remaining Coins:{TotalCoins(X.Coins)}</p>
    </>
  )
  }
  </MessageContext.Consumer>
  )
}

export default GrandChild