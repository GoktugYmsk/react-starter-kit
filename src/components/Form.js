import React, { useState } from 'react'

function Form() {
    const [name, setName] = useState('Gkt')
    const [description, setDescription] = useState('')

    return (
        <div>
            <button onClick={() => setName(name)} >isim değiştir</button> <br/>
            {name}<br/>
            <input type="text" value={name} onChange={e => setName(e.target.value)} />
            <textarea value={description} onChange={ e => setDescription(e.target.value) } />
            {description}
        </div>
    )
}

export default Form
