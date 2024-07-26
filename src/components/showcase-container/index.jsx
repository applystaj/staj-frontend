import React from 'react'
import ShowCaseCard from '../showcase-card'

function ShowCaseContainer() {
  return (
    <div>
        <h1> populer products</h1>
        <div className='row'>
            <ShowCaseCard/> 
        </div>
    </div>
  )
}

export default ShowCaseContainer