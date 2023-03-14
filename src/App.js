import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Route, Routes, Link, NavLink } from 'react-router-dom';

import Test from '../src/components/Test';
import Useref from './components/Useref';
import UseReducer from '../src/components/UseReducer';
import Memo from './components/Memo';
import Form from './components/Form';
import Context from './components/Context';
import ReactRouter from './components/reactrouter/ReactRouter'
import CreateElement from './components/createElement/CreateElement';
import './App.css'



function App() {
  const [show, setShow] = useState(false)


  return (
    <div className='App' >
      <button onClick={() => setShow(show => !show)} >
        {show ? 'Gizle' : 'Göster'}
      </button>
      {/* show && <Test /> */}
      <UseReducer />
      <Memo />
      <Form />
      {/* <Context/> */}
      <CreateElement />
      <ReactRouter />
      <Useref />
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