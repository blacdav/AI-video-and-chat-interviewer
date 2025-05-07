// import { useState } from 'react'
import Camera from './components/camera'
import Chatbox from './components/chatbox'
import Questionlist from './components/questionlist'
import Score from './components/score'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <main className='bg-gray-300 grid grid-cols-12 grid-rows-12 lg:h-screen gap-3 px-5 py-2 overflow-y-scroll'>
        <Camera />
        <Chatbox />
        <Questionlist />
        <Score />
      </main>
    </>
  )
}

export default App
