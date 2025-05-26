import React from 'react'

function Card(props) {
  return (
    <>
      <div className='bg-blue-200 p-4 rounded'>
        <h3>{props.title}</h3>
        <p>{props.content}</p>
      </div>
    </>
  )
}

export default Card
