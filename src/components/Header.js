import React from 'react'
import SwitchTheme from './SwitchTheme'

function Header({ theme, setTheme }) {
    return (
        <div>
            Header
            <SwitchTheme theme={theme} setTheme={setTheme} />
        </div>
    )
}

export default Header
