import { createElement } from 'react'

function CreateElement() {

    const h1 = createElement('h1', null, 'Göktuğtuğkan')
    const todos = ['todo1', 'todo3', 'todo3']
    const ul = createElement('ul', null, todos.map(todo => createElement('li', null, todo)))
    /*
    
        return createElement('main', {
            className: 'test',
            id: 'main',
        }, h1,ul)
     */
    return (
        <main id='main' className='test' >
            <h1 style={{color: 'green'}} >createElement</h1>
            <label htmlFor='search' onClick={() => alert('Selam')} >Arama</label>
            <input type='text' id='search' />
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>
                        {todo}
                    </li>
                ))}
            </ul>
        </main>
    )
}

export default CreateElement
