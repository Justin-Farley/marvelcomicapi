import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCharacters } from '../api/marvelApi';

const CharacterDetails = () => {
    const { id } = useParams();
    const [character, setCharacter] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getCharacterDetails = async () => {
            try {
                const data = await fetchCharacters(id);
                setCharacter(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        getCharacterDetails();
    }, [id]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    if (!character) return <p>No character found</p>;

    return (
        <div>
            <h2>{character.name}</h2>
            <img src={`${character.thumbnail.path}.${character.thumbnail.extension}`} alt={character.name} />
            <p>{character.description || 'No description available'}</p>
            {/* Add more character details here */}
        </div>
    );
};

export default CharacterDetails;
