import React from 'react'
import ShowCaseCard from '../showcase-card'

function ShowCaseContainer() {
  return (
    <div className='gap-2'>
        <h1> populer products</h1>
        <div className='border-2 p-5 m-5 flex flex-row'>
            <ShowCaseCard/> 
            <ShowCaseCard/>
        </div>
    </div>
  )
}

export default ShowCaseContainer