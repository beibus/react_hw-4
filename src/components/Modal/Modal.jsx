import React from 'react'
import './Modal.css'

const Modal = props => {
  if (!props.show) {
    return null
  }
  return (
    <div className='modal' onClick={props.onClose}>
      <div className='modal-content'>
        <div className='modal-header'>
          <div className='header-wrapper'>
            <h3 className='modal-title'>Team: {props.club}</h3>
            <h4>League: {props.group}</h4>
            <h4>Last 5 games: {props.form}</h4>
            <h4>{props.description}</h4>
          </div>
          <img src={props.logo} alt="" />
        </div>
        <div className='modal-body'>
          <div className='details-wrapper'>
            <h3>Current rank: {props.rank}</h3>
            <h3>Points: {props.points}</h3>
            <h3>Matches played: {props.played}</h3>
            <h3>Wins: {props.win}</h3>
          </div>
          <div className='details-wrapper'>
          <h3>Draws: {props.draw}</h3>
            <h3>Lossess: {props.rank}</h3>
            <h3>Goals: {props.goalsFor}</h3>
            <h3>Goals conceded: {props.goalsAgainst}</h3>
          </div>
        </div>
        <div className='modal-footer'>
          <button onClick={props.onClose} className='button'>Close</button>
        </div>
      </div>
    </div>
  )
}


export default Modal