import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import App from './App';
import PokemonList from './pages/PokemonsList';
import PokemonPage from './pages/PokemonPage';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<PokemonList />} />
        <Route path="pokemon/:id" element={<PokemonPage />} />
      </Route>
    </Routes>
  </Router>
);
