import axios from "axios";

const baseURL = 'http://localhost:5000/';

export default {

    getViewers: async function () {
        try {
            const response = await axios.get(baseURL + 'viewersApi');
            return response.data;
        } catch (error) {
            console.error(error);
            throw (error);
        }
    },
    getWatchTime: async function () {
        try {
            const response = await axios.get(baseURL + 'watchTimeApi');
            return response.data;
        } catch (error) {
            console.error(error);
            throw (error);
        }
    },
    getAdImpressions: async function () {
        try {
            const response = await axios.get(baseURL + 'adApi');
            return response.data;
        } catch (error) {
            console.error(error);
            throw (error);
        }
    },


}