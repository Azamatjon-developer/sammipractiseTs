import React from 'react'
import { stules } from './utils/stules'
const App = () => {
  return (
    <div className='bg-primary w-full overflow-hidden'>
      <div className={`${stules.paddingX} p-5`}>
        <p className={`${stules.heading}`}>Navbar </p>
      </div>
    </div>
  )
}

export default App
