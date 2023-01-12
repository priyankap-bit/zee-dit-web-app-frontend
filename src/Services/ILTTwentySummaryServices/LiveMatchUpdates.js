import axios from "axios";

const baseURL = 'http://20.219.91.228:5000/';

export default {
    getMatchOneViewers: async function () {
        try {
            const response = await axios.get(baseURL + 'match1-viewers')
            return response.data;
        }
        catch (error) {
            console.error(error);
            throw (error);
        }
    }
}