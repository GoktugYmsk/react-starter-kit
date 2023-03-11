import React from 'react'

function SwitchTheme({theme,setTheme}) {
    return (
        <div>
            mevcut tema = {theme}
            <button onClick={() => setTheme(theme = 'light' ? 'dark' : 'light')} > temayı değiştir </button>

        </div>
    )
}

export default SwitchTheme
