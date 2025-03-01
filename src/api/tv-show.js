import axios from "axios";
import { BASE_URL } from "../confing";




export class TvShowAPI{
    static async fethpopulars(){
        // perfrom request to get popular tv shows
        const response = await axios.get(`${BASE_URL}/movie/popular?api_key=${process.env.REACT_APP_API_KEY_PARAM}`);
        // return the response data
        // console.log(response.data.results);
        return response.data.results;

    }

    static async fethRecommendations(movieShowId){
        // perfrom request to get popular tv shows
        const response = await axios.get(`${BASE_URL}/movie/${movieShowId}/recommendations?api_key=${process.env.REACT_APP_API_KEY_PARAM}`);
        // return the response data
        // console.log(response.data.results);
        return response.data.results;
    }


    static async fethByTitle(title){
        // perfrom request to get popular tv shows
        const response = await axios.get(`${BASE_URL}/search/movie?api_key=${process.env.REACT_APP_API_KEY_PARAM}&query=${title}`);
        // return the response data
        console.log(response.data.results);
        return response.data.results;
    }

     
}


