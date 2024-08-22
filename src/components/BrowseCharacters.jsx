import React, { useEffect, useState } from 'react';
import { fetchCharacters } from '../api/marvelApi';
import { Link } from 'react-router-dom';

const BrowseCharacters = () => {
    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getCharacters = async () => {
            try {
                const data = await fetchCharacters();
                setCharacters(data);
            } catch (err) {
                setError('Failed to load characters. Please try again later.');
            } finally {
                setLoading(false);
            }
        };
        getCharacters();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div>
            <h2>Browse Characters</h2>
            <ul>
                {characters.map(character => (
                    <li key={character.id}>
                        <Link to={`/character/${character.id}`}>{character.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BrowseCharacters;
