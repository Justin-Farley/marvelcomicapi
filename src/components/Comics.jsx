import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Comics = () => {
    const [comics, setComics] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchComics = async () => {
            try {
                const response = await axios.get('https://gateway.marvel.com:443/v1/public/comics', {
                    params: {
                        apikey: 'YOUR_API_KEY'
                    }
                });
                setComics(response.data.data.results);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchComics();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            <h2>Comics</h2>
            <ul>
                {comics.map(comic => (
                    <li key={comic.id}>
                        <h3>{comic.title}</h3>
                        <img src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} alt={comic.title} />
                        <p>{comic.description || 'No description available'}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Comics;
