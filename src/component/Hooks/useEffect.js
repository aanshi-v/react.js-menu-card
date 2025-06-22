import React, { useEffect, useLayoutEffect, useReducer } from 'react'

const UseEffect = () => {
    const inititalData = 0;
    const [myNum, setMyNum] = React.useState(inititalData)

    useEffect(() => {
        document.title = `Chats(${myNum})`
    } );
  return (
    <>
      <div className='center_div'>
      <p>{myNum}</p> 
      <div className='button2' onClick={() => setMyNum(myNum + 1)} >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            INCR
      </div>
      </div>
    </>
  )
}

export default UseEffect
