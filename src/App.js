import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

import Test from '../src/components/Test';



function App() {
  const [show, setShow] = useState(false)


  return (
    <div>
      <button onClick={() => setShow(show => !show)} >
        {show ? 'Gizle' : 'Göster'}
      </button>
      {show && <Test />}
    </div>
  );
}

export default App;

/*




import styles from './App.module.css';
import Test from './Test';
import Title from './Components'
import Bootstrap from './Bootstrap';
import Tailwind from './Tailwind';
import { createElement } from 'react';
import { Fragment } from 'react';




  const h1 = createElement('h1', null, 'bu yazı jsx ile oluşturulmadı')
  return createElement('main', {
    className: 'test',
    id: 'main'
  })



  <div className={styles.App}>
      <h3>{process.env.NODE_ENV}</h3>
      <p>React eğitim projesi</p>
      <Title>Title burada kulllanılıyor</Title>
      <Title theme="dark">Title burada kulllanılıyor</Title>
      <Test />
      <Bootstrap />
      <Tailwind />

      <Fragment id='main' className='test' >
        <h1 style={{color: 'red', backgorund: 'green' }} >bu yazı jsx ile oluşturulmadı</h1>
      </Fragment>
      <>
      `Fragment'ların başka bir kullanım şekli`
      </>
    </div>

*/