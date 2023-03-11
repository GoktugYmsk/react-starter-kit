import { Route, Routes, Link, NavLink } from 'react-router-dom';
import Home from './Home';
import Car from './Car';
import Contact from './Contact'
import Blog404 from './Blog404';
import Navigate from './navigate/Navigate';
import PrivateRoute from './navigate/PrivateRoute';

function App() {
    return (
        <>
            <nav>
                <NavLink to='/' activeClassName='Göktuğ' >Anasayfa</NavLink>
                <br></br>
                <NavLink to='/Car' activeStyle={{
                    background: 'green'
                }} >Car</NavLink>
                <br></br>
                <NavLink to='/Contact'>
                    İletişim
                </NavLink>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Car" element={<Car />} />
                <Route path="/Contact" element={<Contact />} />
                <Route path='*' element={<Blog404 />} />
                <Route path='/Navigate' element={<PrivateRoute><Navigate /></PrivateRoute>} />
            </Routes>
        </>
    );
}

export default App;
