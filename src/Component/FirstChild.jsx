import React, { useContext } from 'react'
import GrandChild from './GrandChild'
import { MessageContext } from '../App'

function FirstChild() {
    let {Message, Coins} = useContext(MessageContext)
  return <>
  <h2>Child Component</h2>
  <p>Message from Parent : {Message}</p>
  <hr/>
  <GrandChild />
  </>
}

export default FirstChild