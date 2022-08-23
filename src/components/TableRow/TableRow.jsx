import React from 'react'
import { useState } from 'react'

const TableRow = props => {
  const handleClub = (club) => {
    setCurrentClub(club)
    
  }
  const [currentClub, setCurrentClub] = useState(null)
  return (
    <tr onClick={() => handleClub(props.club)}>
      <td>{props.rank}</td>
      <td>{props.name}</td>
      <td><img src={props.logo} alt="" /></td>
      <td>{props.points}</td>
     </tr>
  )
}


export default TableRow