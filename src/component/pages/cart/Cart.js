import React from 'react'

function Cart() {
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
      <h1>Your Cart</h1>
    </div>
  )
}

export default Cart