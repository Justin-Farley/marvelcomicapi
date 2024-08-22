import axios from 'axios';

const HASH = '8ea8ffefd83f43f55c1a550b23c7eb07'
const API_KEY = '15d1ee73cffbc3da9f63fe961151e778';  
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



