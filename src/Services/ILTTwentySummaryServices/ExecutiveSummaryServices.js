import axios from "axios";

// const baseURL = 'http://20.219.91.228:5000/';

export default {
    getDigitalSummary: async function () {
        try {
            const response = await axios.get('digital');
            console.log('response of axios in digital', response);
            // const response = await fetch('digital');
            return response.data;
        }
        catch (error) {
            console.error(error);
            throw (error);
        }
    },

    getLinearSummary: async function () {
        try {
            const response = await axios.get('linear')
            return response.data;
        }
        catch (error) {
            console.error(error);
            throw (error);
        }
    }
}