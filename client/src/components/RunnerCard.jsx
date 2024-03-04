import React from 'react'
import { Link } from 'react-router-dom'
import ProfilePic from './ProfilePic'
import '../stylesheets/runnerCard.css'

function RunnerCard({runner, deleteRunnerHandler}) {
  return (
    <div className='runner-card-container'>
      <Link className='title-container-link' to={`/runners/${runner.id}`}>
        <div className='runner-title'>
          <ProfilePic type="avatar" src={runner.image_url} alt="Profile Pic" /> 
          <h2>{runner.name}</h2> 
        </div>
      </Link>
      <div className='other-links'>
        <Link className='edit-button' to={`/runners/${runner.id}/edit`}>Edit</Link>
        <button onClick={()=> deleteRunnerHandler(runner.id)}>Delete</button>
      </div>
    </div>
  )

}

export default RunnerCard