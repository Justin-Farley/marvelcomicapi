import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import BrowseCharacters from './components/BrowseCharacters';
import CharacterDetails from './components/CharacterDetails';
import Comics from './components/Comics';
import Navigation from './components/Navigation';

const App = () => {
    return (
        <div>
            <Navigation />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/browse-characters" element={<BrowseCharacters />} />
                <Route path="/character/:id" element={<CharacterDetails />} />
                <Route path="/comics" element={<Comics />} />
            </Routes>
        </div>
    );
};

export default App;
