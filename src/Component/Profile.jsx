import React, { useContext } from 'react'
import { context } from '../App'

function Profile() {
    let {ProfileName,SetProfileName} = useContext(context)
  return (
    <div>
        <form>
            <label>Profile Name</label>
            <input type="text" value={ProfileName} onChange={(e)=>SetProfileName(e.target.value)}/>
            <h1>{ProfileName}</h1> 
        </form>
    </div>
    )
}

export default Profile