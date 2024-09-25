import React from 'react'
import { stules } from '../utils/stules'
import { navigationLinks } from '../utils/constats'

const Navbar = () => {
  return (
    <div className={`w-full py-5 ${stules.flexBetween}`}>
        <div className={`${stules.heading}`}>
            Logo  
        </div>
        <ul>
            {navigationLinks.map((navigationLinks, index) =>(
                <li className='text-white' key={index}>
                    {navigationLinks.title}
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Navbar
