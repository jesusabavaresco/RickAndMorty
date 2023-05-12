import './App.css';
import Cards from './components/cards/Cards.jsx';
import Nav from './components/nav/Nav.jsx';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import About from './components/about/About';
import Detail from './components/detail/Detail';
import Forms from './components/form/Forms';
import Favorites from './components/favorite/Favorites';
const EMAIL = 'chuchobavaresco@gmail.com';
const PASSWORD = '123chch';


function App() {
   const [characters, setCharacters] = useState([]);
   const {pathname} = useLocation();

   const navigate = useNavigate();
   const [access, setAccess] = useState(false);

   function login(userData) {
      if (userData.password === PASSWORD && userData.email === EMAIL) {
         setAccess(true);
         navigate('/home');
      }
   }
   useEffect(() => {
      !access && navigate('/');
   }, [access]);

   const onClose = (id) => {
         let filter = characters.filter((e) => e.id !== Number(id))
         setCharacters(filter);
   };

   const onSearch = (id) => {
         let verification = characters.some((e) => e.id === Number(id))
         if(verification === true){
            window.alert('Ya Existe')
         }else {
            axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
               if (data.name) {
                  setCharacters((oldChars) => [...oldChars, data])
               } else {
                  window.alert('¡No hay personajes con este ID!');
               }
            });
         }
   };

   const searchRandomNumber = (max) => {
      let randomNumber = Math.floor(Math.random() * max);
      return randomNumber;
   };
   const random = () => {
      const num = searchRandomNumber(826)
      axios(`https://rickandmortyapi.com/api/character/${num}`).then(({ data }) => {
          setCharacters((oldChars) => [...oldChars, data]);
      });
   }
   return (
      <div className='App'>
            {pathname !== '/' && <Nav onSearch={onSearch} random={random}/>}
         <Routes>
            <Route path='/' element={<Forms login={login}/>}/>
            <Route path='/home' element={<Cards className='container' characters={characters} onClose={onClose}/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/detail/:id' element={<Detail/>}/>
            <Route path='/favorites' element={<Favorites/>}/>
         </Routes>
      </div>
   );
}

export default App;
