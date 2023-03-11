import React from 'react'
import SwitchTheme from './SwitchTheme'

function Footer({ theme, setTheme }) {
    return (
        <div>
            Footer
            <SwitchTheme theme={theme} setTheme={setTheme} />
        </div>
    )
}

export default Footer
