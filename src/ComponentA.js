import React from 'react'
import ComponentB from './ComponentB';

const ComponentA = () => {
  return (
    <div className='card'>
      <div className="card-body">
        <ComponentB />
      </div>
    </div>
  )
}

export default ComponentA;