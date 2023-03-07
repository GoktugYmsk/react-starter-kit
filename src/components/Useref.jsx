import React, { forwardRef } from 'react'
import { useRef } from 'react'

function   Input(props,ref) {
    return <input ref={ref} type="text" {...props} />
}

Input = forwardRef(Input)

function Useref() {
    const inputRef = useRef()
    const focusInput = () => {
        inputRef.current.focus()
    }

    return (
        <div>

            <input type='text' ref={inputRef} />
            <Input ref={inputRef} />
            <button onClick={focusInput}>focusla </button>
        </div>
    )
}

export default Useref
