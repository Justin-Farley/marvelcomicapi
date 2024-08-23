import axios from 'axios';

const HASH = 'a096152334f6244a6cdd5edb57a2dd7c'
const API_KEY = 'b0f4687287ea9697af0ef1a1eeb9f6fe';  
const TS = '1'
export const fetchCharacters = async () => {
    try {
        const response = await axios.get(`https://gateway.marvel.com/v1/public/characters?ts=${TS}&apikey=${API_KEY}&hash=${HASH}`, {
           
        });
        
        return response.data.data.results;
    } catch (error) {
        console.error('Error fetching characters:', error);
        throw error;
    }
};



