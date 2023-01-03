import axios from "axios";

const baseURL = 'http://localhost:5000/';

export default {
    getDigitalSummary: async function () {
        try {
            const response = await axios.get(baseURL + 'digital')
            return response.data;
        }
        catch (error) {
            console.error(error);
            throw (error);
        }
    }
}