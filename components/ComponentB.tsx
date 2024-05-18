import React from 'react'
import ComponentC from './ComponentC'

type ComponentBType = {
    counter: number;
    setCounter: React.Dispatch<React.SetStateAction<number>>;
}

export default function ComponentB({counter, setCounter}: ComponentBType) {
  return (
    <div className='border border-black bg-red-700 h-[75%] w-[75%] rounded-[32px] flex flex-col items-center justify-center'>
        ComponentB
        <ComponentC counter={counter} setCounter={setCounter}/>
    </div>
  )
}
