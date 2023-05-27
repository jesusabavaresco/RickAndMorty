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



function App() {
   const [characters, setCharacters] = useState([]);
   const {pathname} = useLocation();

   const navigate = useNavigate();
   const [access, setAccess] = useState(false);

   function login(userData) {
      const { email, password } = userData;
      const URL = 'http://localhost:3001/rickandmorty/login/';
      axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
         const { access } = data;
         setAccess(access);
         access && navigate('/home');
      });
   }

   useEffect(() => {
      !access && navigate('/');
   }, [access]);

   
   const onSearch = (id) => {
      let verification = characters.some((e) => e.id === Number(id))
      if(verification === true){
         window.alert('Ya Existe')
      }else {
         axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
            if (data.name) {
               setCharacters((oldChars) => [...oldChars, data])
            } else {
               window.alert('¡No hay personajes con este ID!');
            }
         });
      }
   };
   const onClose = (id) => {
         let filter = characters.filter((e) => e.id !== Number(id))
         setCharacters(filter);
   };
   
   const searchRandomNumber = (max) => {
      let randomNumber = Math.floor(Math.random() * max);
      return randomNumber;
   };
   const random = () => {
      const num = searchRandomNumber(826)
      axios(`http://localhost:3001/rickandmorty/character/${num}`).then(({ data }) => {
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
