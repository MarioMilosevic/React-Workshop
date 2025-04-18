import React from 'react'
import GrandChild from './GrandChild'
const Child = () => {
  return (
    <div className='border p-4 bg-slate-400'>
          Ovo je child componenta
          <GrandChild/>
    </div>
  )
}

export default Child
