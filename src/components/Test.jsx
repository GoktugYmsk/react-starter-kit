import React, { useState } from 'react'
import { useEffect } from 'react'

function Test() {
    const [count, setCount] = useState(0)

    useEffect(() => {
        return () => {
            console.log('component destroyed')
        }
    }, [])

    const increase = () => {
        setCount(count + 1)
    }

    useEffect(() => {
        console.log('count değeri değişti', count)
    }, [count])

    return (
        <div>
            <button onClick={increase} ></button>
            <p>{count}</p>
            test componenti
        </div>
    )
}

export default Test
