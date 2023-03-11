import React, { useState } from 'react'

import Header from './Header'
import Footer from './Footer'

function Context() {
    const [theme,setTheme] = useState('light')

  return (
    <div>
      <Header theme={theme} setTheme={setTheme} />
      <Footer theme={theme} setTheme={setTheme} /> 
    </div>
  )
}

export default Context
