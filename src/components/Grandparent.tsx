import React from 'react'
import Parent from './Parent'

const Grandparent = () => {
  return (
    <div className='border p-4 bg-slate-600 flex flex-col gap-4'>
          Ovo je grandparent komponenta
          <Parent/>
    </div>
  )
}

export default Grandparent
