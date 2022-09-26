import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {Grid} from '@material-ui/core'
import Home  from './paginas/home/Home';
import Navbar from './components/estatico/navbar/Navbar'
import Footer from './components/estatico/footer/Footer'
import Login from './paginas/login/Login';
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario'
import ListaPostagem from './components/postagens/listapostagem/ListaPostagem';

import './App.css';
import ListaTema from './components/listatema/ListaTema';

/*
function App() {
  return (
    <>
    <Grid container spacing={3}>
        <Grid item xs={12} sm={12}>
            <Home/>
        </Grid>
        <Grid item xs={12} sm={6}>
            <Home/>
        </Grid>
        <Grid item xs={12} sm={6}>
            <Home/>
        </Grid>
        <Grid item xs={12} sm={3}>
            <Home/>
        </Grid>
        <Grid item xs={12} sm={3}>
            <Home/>
        </Grid>
        <Grid item xs={12} sm={3}>
            <Home/>
        </Grid>
        <Grid item xs={12} sm={3}>
            <Home/>
        </Grid>
    </Grid>
    </>
  );
}*/

function App(){
  return(
    
    <Router>
      <Navbar />
      <div style={{ minHeight: '100vh' }}>
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path='/cadastrousuario' element={<CadastroUsuario />} />
            <Route path='/temas' element={<ListaTema />} />
            <Route path='/posts' element={<ListaPostagem />}/>
        </Routes>
      </div>
      <Footer />
    </Router>
    
  )
}

export default App;
