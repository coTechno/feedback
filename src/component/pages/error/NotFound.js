import React from 'react'

function NotFound() {
  const style = {
    backgroundColor: '#96bfbf',
    borderRadius: '20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: "Montserrat",
    color: '#252B42',
    minHeight: '60vh'
}
  return (
    <div style={style} className='container'>
      <h1>404 Not Found!!!</h1>
    </div>
  )
}

export default NotFound