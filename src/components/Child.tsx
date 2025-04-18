import React from 'react'
import GrandChild from './GrandChild'
const Child = () => {
    console.log("rerender CHILD")
    return (
      

    <div className='border p-4 bg-slate-400'>
          Ovo je child componenta
          <GrandChild/>
    </div>
  )
}

export default Child
