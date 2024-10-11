import React from 'react'
import Herosection from '../components/Herosection'
import Moblie from '../components/Moblie'
import Advarts from '../components/Advarts'
import Price from '../components/Price'
import Advarttwo from '../components/Advarttwo'
import Footer from '../components/Footer'

const Homepage = () => {
  return (
    <div className=' className="max-w-7xl mx-auto pt-0 ' >

<Herosection />
<Moblie />
<Advarts />
<Price />
<Advarttwo />
< Footer /> 

    </div>
   
  )
}

export default Homepage